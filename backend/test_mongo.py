# test_mongo.py
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.environ["MONGO_URL"])
print(client.list_database_names())  # Will fail if credentials are wrong
