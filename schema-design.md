# Database Schema Design

## Tables:
1. Users
- user_id: Primary Key, Integer, Auto-increment
- username: String, Unique, Not Null
- password: String, Not Null (stored as a hashed value)
- created_at: Timestamp, Default Current Timestamp

2. Locations
- location_id: Primary Key, Integer, Auto-increment
- name: String
- latitude: Float
- longitude: Float
- user_id: Foreign Key, References Users.user_id

3. WeatherData
- weather_id: Primary Key, Integer, Auto-increment
- temperature: Float
- date_time: Timestamp, Default Current Timestamp
- location_id: Foreign Key, References Locations.location_id

## Relationships:
- A User can have multiple Locations (One-to-Many)
- Each Location can have multiple WeatherData records (One-to-Many)


Table Users {
  user_id int [pk, increment]
  username varchar
  password varchar
  created_at timestamp [default: `now()`]
}

Table Locations {
  location_id int [pk, increment] 
  name varchar
  latitude float
  longitude float
  user_id int [not null, ref: > Users.user_id] 
}

Table WeatherData {
  weather_id int [pk, increment] 
  temperature float
  date_time timestamp [default: `now()`]
  location_id int [not null, ref: > Locations.location_id] 
}
