from telethon import TelegramClient

# Replace with your API ID, Hash, and Phone Number
# api_id = 'YOUR_API_ID'
# api_hash = 'YOUR_API_HASH'
# phone = 'YOUR_PHONE_NUMBER'
# +962

# api_id = 'YOUR_API_ID'
# api_hash = 'YOUR_API_HASH'
# phone = 'YOUR_PHONE_NUMBER'

client = TelegramClient('session_name', api_id, api_hash)

async def main():
    # Fetch dialogs (chats, groups, channels, etc.)
    async for dialog in client.iter_dialogs():
        if dialog.is_group and dialog.entity.creator:  # Check if it's a group you created
            print(f"Group Title: {dialog.name}")

with client:
    client.loop.run_until_complete(main())