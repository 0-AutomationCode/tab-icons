from telethon import TelegramClient
import pandas as pd

# Replace with your API ID, Hash, and Phone Number
# api_id = 'YOUR_API_ID'
# api_hash = 'YOUR_API_HASH'
# phone = 'YOUR_PHONE_NUMBER'

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


    # Validate DataFrame / Extra
    if df.empty:
        raise ValueError("DataFrame is empty!")
    print("DataFrame is valid and ready for export.")

    # Write DataFrame to Excel
    try:
        df.to_excel(f"{fileName}.xlsx", index=False)
        print(f"File saved as {fileName}.xlsx")
    except ImportError:
        print("Missing openpyxl library. Install it using 'pip install openpyxl'.")
    except Exception as e:
        print(f"An error occurred: {e}")
    
    # Save to an Excel file
    df.to_excel( f"{fileName}.xlsx", index=False)
    print("Data has been saved to:" + str(fileName) + '.xlsx')

with client:
    client.loop.run_until_complete(main())

