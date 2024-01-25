# filename: convert_country_to_iso.py
import pymysql


# Function to establish a connection to the database
def get_db_connection():
    connection = pymysql.connect(
        host="your_host",
        user="your_username",
        password="your_password",
        database="your_database",
        charset="utf8mb4",
        cursorclass=pymysql.cursors.DictCursor,
    )
    return connection


# Function to convert country name to ISO code
def country_to_iso(country_name):
    # Establish a connection to the database
    connection = get_db_connection()

    try:
        with connection.cursor() as cursor:
            # SQL query to find the ISO code for the given country name
            sql = "SELECT ISOCode FROM country_iso_mapping WHERE CountryName = %s"
            cursor.execute(sql, (country_name,))
            result = cursor.fetchone()

            # Check if a result was found
            if result:
                return result["ISOCode"]
            else:
                return None
    finally:
        connection.close()


# Example usage
country_name = "United States"
iso_code = country_to_iso(country_name)
print(f"The ISO code for {country_name} is {iso_code}")
