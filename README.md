<h1>Hundy</h1>

An Angular app that retrieves 100 JSON objects from an API and renders them as clickable squares. 

<h3>Project description</h3>

The project uses NgRx for state management, which handles the storage of the API payload. An 'init' action is executed when the project is launched, which initiates the http request. A 'set' action passes the payload to the store via the reducer.

The app-posts-output component accesses this data from the store, and within its template renders an instance of the app-post-square component for each object stored. (100 objects are stored, so therefore 100 instances of the app-post-square component are created.) Each object is rendered in the browser as a clickable square in a 10x10 grid.

The squares show each post's title by default. When a square is clicked repeatedly it will cycle through and display the post's properties in sequence ('UserID', 'PostID, 'Body', and then back to 'Title'). Only one square can be 'active' at a time. When a square is clicked it is the currently active square, and all other squares become 'inactive'. Inactive squares will reset to displaying their title. For display purposes, the 'Body' property is shown in a truncated form. In addition, the PostID of the last-clicked square is displayed.

The app-posts-output component utilises CSS grid and grid items. Additionally, the CSS hover attribute is used to give a certain feel of interactivity. For further stylistic personalisation, the project is styled with a retro colour palette and font, as well as a favicon.

<h3>Installation</h3>

Run npm install.

Run ng serve to launch the application. Open http://localhost:4200/ to view the project in your browser.

