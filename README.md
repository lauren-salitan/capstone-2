# Capstone Project Two

We have broken down the Capstone Project into easy-to-follow steps. Each step of the capstone contains a link with instructions for that step. You may notice this secondCapstone follows a similar pattern to your first Capstone, however, there are key differences. 

## Overview
For your second Capstone Project, you’ll build a more complex database-driven website. Most students will choose to develop this app in React and Node, however, Flask/Python is also an option if you tackle a difficult idea. This website will be powered either off of an external API or an API that you build yourself. Your finished capstone will be an integral part of your portfolio; it will demonstrate to potential employers everything you’ve learned from this course.We want you to work on a challenging project that will incorporate all of the full-stack skills you’ve been developing. The goal of this project isn’t to create something that’s never been done before but should be more ambitious than your last capstone. You could potentially create a website similar to one that already exists, but this time, perhaps add a feature that you wish the website had.We do encourage you to be creative when building your site. You’re free to choose any API you’d like to use or build your own. We encourage you to tap into your imagination throughout the project.

## Examples
You already know about the wealth of APIs available online. Perhaps on this capstone, you can work on one of your ideas that was a bit too complicated for the last project.We also encourage you to create your own API if you cannot find one with the data you are looking for. You can do this through web scraping, importing a CSV, or loading your own data into the API.

Let’s give you an example of what a site could look like. Say you want to make a website or mobile app that was like Facebook for dogs - something that would allow pet owners to connect with other pets in their neighborhood. First, you could load information into the application about various breeds of dogs, which would populate drop down lists and allow users to sort for the kind of dog they would like to sit. This will help users build the profile for their animal. You could add forms with various information about the pets.You could allow them to upload pictures (dog owners love nothing more than to take pictures of their animals). Most importantly, you could allow the pets to connect with other pets through a graph.Now let’s talk about bells and whistles. What if a user of your Dogbook was leaving town and wanted to find users in their neighborhood to watch their dog for the weekend. You could implement a geographical filtering and simple messaging or request system in order to help Spot find the best pet sitter. And since no one wants their dog watched by some kind of monster, you could implement reviews to see if people recommend this sitter. There are a million different features you could add!Verified users, so celebrities could show off their dogs. Hafthor Bjornsson, the actor who plays the Mountain on Game ofThrones, has an adorable pomeranian and people demand picture proof! You could implement an adoption system so people can give shelter pets a good home. Of course, adding in all of these features would be beyond the scope of this project, but you should expect this app to have more functionality than the last Capstone

## Guidelines

1. You can use any technology we’ve taught you in the course, and there’s nothing stopping you from using outside libraries are services.That being said, we recommend you use React, and Node.js for this Capstone.If you completed the optional Redux unit, we recommend you use Redux as well. You can useFlask/Python but will be expected to make a much more fully featured application than last time.
2. Every step of the project has submissions. This will alert your mentor to evaluate your work. Pay attention to the instructions so you submit the right thing. You will submit the link to your GitHub repo several times, this is for your mentor’s convenience. Your URL on GitHub is static and will not change.
3. The first two steps require mentor approval to proceed, but after that, you are free to continue working on the project after you submit your work. For instance, you don’t need your mentor to approve your database schema before you start working on your site. Likewise, you don’t need your mentor to approve the first iteration of your site before you start polishing it.
4. If you get stuck, there is a wealth of resources at your disposal. The course contains all of the material you will need to complete this project, but a well-phrased Google search might yield you an immediate solution to your problem. Don’t forget that your Slack community, TAs, and your mentor there to help you out.
5.Make sure you use a free API or create your own API and deploy your project on Heroku, so everyone can see your work!


# API
https://open-meteo.com/ 
https://api.open-meteo.com/v1/forecast?latitude=[latitude-coordinates]&longitude=-[longitude-coordinates]&current_weather=true&temperature_unit=fahrenheit


/capstone-project-two-8667e8e593af48f392464200420c08fa
backend  
    ├── config    
    │   └── config.json  
 
    ├── migrations  
    │    ├── 2024111491226-create-user.js  
    │    ├── 2024111491226-create-location.js  
    │    └── 2024111491226-create-weather-data.js  
    ├── models  
    │    ├── index.js  
    │    ├── location.js  
    │    ├── user.js  
    │    └── weatherdata.js
    ├── node_modules  
    │    └── *this is an extensive folder so i wont lis everything in it*
    ├── routes  
    │   ├── userRoutes.js  
    │   ├── weatherRoutes.js  
    │   └── locationRoutes.js 
    ├── seeders  
    │   └── *this folder is empty*  
    ├── services  
    │   └── weatherService.js  
    ├── app.js    
    ├── testConnection.js  
    ├── package-lock.json  
    ├── package.json         
    └── models 
        ├── index.js
        ├── user.js
        ├── location.js
        └── weatherData.js
frontend
    ├── node_modules  
       └── *this is an extensive folder so i wont lis everything in it*
    ├── public  
    ├── src
        ├── components 
        │   ├── LoginForm.js
        │   ├── RegistrationForm.js
        │   └── WeatherForm.js
        ├── App.css 
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
    └── 2024111491226-create-weather-data.js  
node_modules


