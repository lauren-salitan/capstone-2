# Capstone #2 Idea

Weather App
Version A: Enter a location and the thermometer will reflect what the temperature is in the location entered; save the location (and the weather?) to a user’s account
Possible API: https://open-meteo.com/ 

## Project proposal
1. What tech stack will you use for your final project? We recommend that you use React and Node for this project, however if you are extremely interested in becoming a Python developer you are welcome to use Python/Flask for this project.
I plan on building in ReactJS

2. Is the front-end UI or the back-end going to be the focus of your project? Or are you going to make an evenly focused full-stack application?
I am going to make it a full-stack application, but focusing primarily on the backend

3. Will this be a website? A mobile app? Something else?
This will be a website

4. What goal will your project be designed to achieve?
The goal of the project is to explore building a project of my own in ReactJS, and continuing to expand my skills in developing databases. 

5. What kind of users will visit your app? In other words, what is the demographic of your users?
Any type of user can use this web app. The user that would likely have the most interest in it, however, would be someone who appreciates simplicity and wants to be able to access weather information in a concise format. 

6. What data do you plan on using? How are you planning on collecting your data? You may have not picked your actual API yet, which is fine, just outline what kind of data you would like it to contain. You are welcome to create your own API and populate it with data. If you are using a Python/Flask stack are required to create your own API.
I intend on using a weather API such as Open Meteo or Open Weather Map.

7. What does your database schema look like?
- User
    - username
    - password
    - locations
- Location
    - name
    - coordinates
    - temperature
    - date/time created/ searched for

8. What kinds of issues might you run into with your API? This is especially important if you are creating your own API, web scraping produces notoriously messy data. 
One issue I worry about running into with my API is how a user will look up the exact location, for example, will the user need to know the coordinates ahead of time, or will they be able to search based on name?

9. Is there any sensitive information you need to secure? 
Since I plan on having a user be able to save locations that they search for to return to later, I will need to store user data, so I will need to secure the username/password

10. What functionality will your app include? 
- Login
- Search for weather
- Save search
- Delete saved search

11. What will the user flow look like? 
User looks up location > User receives information > if user wishes to save the data received, they will be prompted to log in/ sign up > when logged in, user can view saved searches

12. What features make your site more than a CRUD app? What are your stretch goals?
This site allows for real-time data searching, which can be updated at the click of a button by users
Stretch goals: interactive weather map, social sharing, creating trend graphs for locations when searched 3+ times, weather analysis
