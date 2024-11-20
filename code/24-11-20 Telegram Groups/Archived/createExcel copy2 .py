from telethon import TelegramClient
import pandas as pd
from dotenv import load_dotenv
import os

# Load environment variables from the .env file
load_dotenv()

# Retrieve values from the environment variables
api_id = os.getenv('API_ID')
api_hash = os.getenv('API_HASH')
phone = os.getenv('PHONE')

fileName = 'telegram_groups-4'

client = TelegramClient('session_name', api_id, api_hash)

async def main():
    # List to store group titles and creation dates
    group_data = []  

    # Fetch dialogs (chats, groups, channels, etc.)
    async for dialog in client.iter_dialogs():
        if dialog.is_group:  # Check if it's a group
            title = dialog.name
            # Extract group creation date (if available, fallback to None)
            created_date = getattr(dialog.entity, 'date', None)
            group_data.append({'Title': title, 'Created Date': created_date})

    # Convert the list of groups to a DataFrame
    df = pd.DataFrame(group_data)

    # Validate DataFrame
    if df.empty:
        raise ValueError("DataFrame is empty!")
    print("DataFrame is valid and ready for export.")

    # Convert any timezone-aware datetimes to timezone-naive
    for col in df.select_dtypes(include=['datetime64[ns, UTC]', 'datetime64[ns]']):
        if df[col].dt.tz is not None:  # Check if the datetime has a timezone
            df[col] = df[col].dt.tz_localize(None)  # Remove the timezone info

    # Write DataFrame to Excel
    try:
        df.to_excel(f"{fileName}.xlsx", index=False)
        print(f"File saved as {fileName}.xlsx")
    except ImportError:
        print("Missing openpyxl library. Install it using 'pip install openpyxl'.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Run the client with the main function
with client:
    client.loop.run_until_complete(main())
