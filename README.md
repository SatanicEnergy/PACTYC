###FOR THE USAGE OF THIS APPLICATION, YOU NEED TO INSTALL SEVERAL TOOLS AND PACKAGES. FOR MORE INFO, PLEASE REVIEW THE DOCUMENTATION IN THE CLASS CAMPUS###

////Things to consider////

This app mainly uses Ionic, MySQLWorkbench, Node and Eclipse. The applications are essential if you want to run this app, along with the other packages shown on  the campus PDF. This app is intended for mobile ONLY, things like the URLs are not meant to be shown if seen on a PC.

////Authors////

Maher Hazem Mohammad

////How to run it////

There are 3 folders called:

-frontend

-backend

-database

You want to run the frontend on VisualStudio so you can use Ionic, while running the backend with Eclipse as a Spring App (check class documentation). The database  folder contains a exported server which you need to import in your database.

Also, remember to check the application.properties on the backend project so you can change the password for your MySQL root password. If you don't do it, the backend won't run properly as it won't be able to connect to the database.

Once you have the database running alongside with your imported database, you want to run the frontend using "ionic serve". Once done, a browser will pop up with the application.

////CRUD Service////

This application implements a full CRUD service, but lacks of an Update option in the frontend. This means that the "Update" method it's implemented, but not used. If you want to use this service, please check the videogame.service.ts file in frontend/app/services folder and the AppUserController.java file in backend/src/main/java/com.gamelibrary.app.controllers package to know how it works.

////Postman Documentation////

For more information on the CRUD service, check the Postman documentation: 

https://documenter.getpostman.com/view/23646485/2s83tGoBN9

////What's this application about////

This app it's, essentially, a personal videogame library. Pretty much like the website "MyAnimeList", this app lets the user have their own library of videogames, which they manually add through the app. The user must fill a form with the videogame's title, company and genre in order to add a new videogame to their library. Naturally, this app doesn't have an in-built searcher to verify if the videogame exists or not, so it depends totally on the user to write their games individually. The application also has the option to delete an existing game and to update the shown list (not an existing game).

////How to use the Add function////

The user taps the "+" button and a form shows up asking for the videogame's title, company and genre. Only when these forms have text on them, they can tap the "add" button. When this button is pressed, a new videogame will be added to the database. This can be seen if the user hits the "refresh" button.
