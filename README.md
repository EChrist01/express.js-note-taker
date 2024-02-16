# express.js-note-taker
## Table of Contents

1. [Description](https://github.com/EChrist01/express.js-note-taker/tree/main#descrption)
2. [Installation](https://github.com/EChrist01/express.js-note-taker/blob/main/README.md#installation-instructions)
3. [Usage](https://github.com/EChrist01/express.js-note-taker/blob/main/README.md#usage-information)
4. [Demo](https://github.com/EChrist01/express.js-note-taker/blob/main/README.md#demo)
5. [Questions](https://github.com/EChrist01/express.js-note-taker/blob/main/README.md#questions)

## Description.

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

## Installation Instructions.
This application uses express, heroku.

## Usage Information.
Page link will open the website, 

## Demo.
https://express-note-taker246-4020a0bc41f5.herokuapp.com/
![Screenshot 2024-02-15 192850](https://github.com/EChrist01/express.js-note-taker/assets/146894896/0142f694-c241-4861-b56e-ad1eab3db852)

## Questions
Github profile: 
Email: Ethanchrist02@gmail.com

## Contributors
Bradon Rose -bootcamp tutor 
casey -TA
mdnwebdocs.

- GET /notes should return the notes.html file
- GET \* should return the index.html file
  The following API routes should be created:
- GET /api/notes should read the db.json file and return all saved notes as JSON.
- POST /api/notes should receive a new note to save on the requests body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look for npm package)
