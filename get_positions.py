import os
import asyncio
from metaapi_cloud_sdk import MetaApi
from datetime import datetime, timedelta
from dotenv import load_dotenv

load_dotenv()

# Note: for information on how to use this example code please read https://metaapi.cloud/docs/client/usingCodeExamples

token = os.getenv('TOKEN')
accountId = os.getenv('ACCOUNT_ID')

async def get_positions():
    api = MetaApi(token)
    try:
        account = await api.metatrader_account_api.get_account(accountId)
        initial_state = account.state
        deployed_states = ['DEPLOYING', 'DEPLOYED']

        if initial_state not in deployed_states:
            print('Deploying account')
            await account.deploy()

        print('Waiting for API server to connect to broker (may take couple of minutes)')
        await account.wait_connected()

        connection = account.get_rpc_connection()
        await connection.connect()

        print('Waiting for SDK to synchronize to terminal state (may take some time depending on your history size)')
        await connection.wait_synchronized()

        print('Getting positions')
        positions = await connection.get_positions()

        # Print positions to the console (or handle them as needed)
        print('Positions:', positions)

        # Optionally, you can still save to a file or handle the data as needed
        # ...

        # Close the connection if it was not initially deployed
        if initial_state not in deployed_states:
            print('Closing connection and undeploying account')
            await connection.close()
            await account.undeploy()

    except Exception as err:
        print(api.format_error(err))
    exit()

asyncio.run(get_positions())
