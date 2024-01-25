# filename: transform_api_with_geocoding.py
import requests
import pymysql


# Function to establish a connection to the database
def get_db_connection():
    connection = pymysql.connect(
        host="your_actual_host",
        user="your_actual_username",
        password="your_actual_password",
        database="your_actual_database",
        charset="utf8mb4",
        cursorclass=pymysql.cursors.DictCursor,
    )
    return connection


# Function to convert country name to ISO code
def country_to_iso(country_name):
    try:
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
                    return "UNKNOWN"
        finally:
            connection.close()
    except Exception as e:
        print(f"An error occurred while connecting to the database or executing the query: {e}")
        return "UNKNOWN"


# Function to convert temperature from Celsius to Fahrenheit
def celsius_to_fahrenheit(celsius):
    return (celsius * 9 / 5) + 32


# Function to geocode the location using the provided API
def geocode(country, post_code):
    # Construct the API URL with the country and postal code
    api_url = f"https://mycoordinate.com/?country={country}&postal_code={post_code}"

    try:
        # Make the GET request to the API
        response = requests.get(api_url)
        response.raise_for_status()  # Raise an exception for HTTP errors

        # Parse the JSON response
        data = response.json()
        longitude = data.get("longitude")
        latitude = data.get("latitude")

        return latitude, longitude
    except Exception as e:
        print(f"An error occurred while fetching geocoding data: {e}")
        return None, None  # Return None if there was an error


# Function to transform the weather forecast data
def transform_weather_data(input_data):
    output_data = []
    for record in input_data:
        # Convert temperature from Celsius to Fahrenheit
        temperature_f = celsius_to_fahrenheit(record["temperatureC"])

        # Convert date format to ISO 8601 (assuming input date is in the correct format)
        date_iso = record["date"]  # This may require actual conversion depending on the input format

        # Convert country to countryISO
        country_iso = country_to_iso(record["country"])

        # Geocode the location to get latitude and longitude
        latitude, longitude = geocode(record["country"], record["post_code"])

        # Create the transformed record
        transformed_record = {
            "date": date_iso,
            "temperatureF": temperature_f,
            "summary": record.get("summary"),
            "longitude": longitude,
            "latitude": latitude,
            "countryISO": country_iso,
        }
        output_data.append(transformed_record)
    return output_data


# Example input data (this would come from the input API)
input_weather_data = [
    {
        "date": "2023-04-01T14:00:00Z",
        "temperatureC": 22,
        "summary": "Sunny",
        "city": "New York",
        "post_code": 10001,
        "country": "United States",
    }
    # ... more records
]

# Transform the input data to the output API format
output_weather_data = transform_weather_data(input_weather_data)

# Print the transformed data
print(output_weather_data)
