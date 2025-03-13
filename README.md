# First Bootcamp Project - Complete Website

## Introduction

This project is the culmination of the learnings of the first two weeks of GA Bootcamp Spring 2025 cohort.  The expectations of this project are as follows:
* Build a personal website for yourself using:
    * HTML
    * CSS
    * JavaScript
* Utilize 5 points of interactions - Planned interactions:
    * Modal at game log-in & end game
    * Hamburger for navigation
    * Hover-over stats
    * Accordion for gallery objects
    * Rotation for Articles and News cards
    * Toggle selection to change game menu's styling choices

I'm aiming for a rather ambitious project: to build a browser based HTML game with some linked pages with information/details about the game itself.

The structure of how I plan to tackle the project work will be as follows:

***Main Goals***
1. Build initial file structures of expected webpages, JS script files, and CSS sheets for different types of processes.
2. Create dummy wireframe mock-up of the anticipated content on pages as well as the interactions for each section.
3. Based on wireframe, break down interactive elements for the website and tackle one by one.
4. Validate that all major interaction elements are working as intended for the project.
5. Restructure CSS to make web pages with functional design elements

***Stretch Goals***
* Expand game content with multiple interchangeable interactions
* Expand second character class
* Build second zone for game content
* Update CSS links to content

## Day One (3/8):

I started the day off with the intent and focus to primarily create the initial anticipated file structure in my repo for the project:
* 5 HTML sites (main, 4 navigation pages)
* 4 JS files (main-page script with auxiliary scripts for game objects)
* 2 CSS stylesheet (1 main and anticpate at least 1 more for toggle of game menu style design)

After creating the structure, I began to build out the HTML page with the outline of all my content.  The lay-out of all the content made me recognize that I will have to be very disciplined in focusing on the MVP of the web pages.

After the initial outline, I wanted to make sure I started hacking away at the required elements for this project, so I started off with building a hamburger for the navigation bar that would be usable on both desktop and mobile.

I reviewed the content and was successfully able to implement the hamburger click process.  The interesting note is that I will likely need to recreate the HTML code in the other pages, but with the scripts being complete in the main folder, I will not need to re-duplicate this code with the pages linked.[^1]

With this complete, I believe I'm fairly forward in the expectations I had for what I wanted to accomplish this day:

### Goals Achieved
* Overview of project expectations
* File structure and outline of HTML page with dummy wireframe content
* Hamburger button for navigation implemented: usable in mobile & desktop screen size.

---

## Day Two (3/9): 

Build out hamburger buttons on other linked pages
Research and initial implementation of accordions, trouble understanding the concept of how to toggle/select an accordion button to make the panel appear below.

---

## Day Three (3/10):

Breakthrough in understanding of the relationship within CSS, JS & HTML works to make the accordion function correctly.  Build out of the "locations" accordion as example.

*Stretch goal set to implement images and build to other gallery images.*

Next development: horizontal scroll bar for the news/articles page and a vertical scroll bar view of the "Weekly Updates"

Built out two areas in the news HTML:
* Horizontal Scroll bar to review different dummy articles that a user can scroll through
* Vertical scroll box with the dummy "Weekly Updates" for this video game developer site

Reviewed research to determine how to set up a horizontal scrolling menu to appear for an element.  After reviewing the code, created articles and images to fit as "cards" within the element.

For the vertical scroll box, created a list of weekly updates that would allow for a user to look through the updated terms.

Now that this was tackled, with remaining time in day, focus on creation of:

* Modal on main page that will appear to require user inputs (user adventurer's name, game class, and confirmation).  These inputs will apply to the game's scripting.

---

## Day Four (3/11):

Working on improving/adding more scripted events to Game News Page.  Decided to add in "Like" buttons for each article that tracks # of likes received.

Created the scripting event to target for listeners, but currently trying to determine how to target specific span with text listed vs. creating individual classes/ids for each.

Going back to modal build while waiting.

Successfully created script in JS for the "Start Now" button to make Modal launch for user to input information, then for the Modal to close/disappear when the user either selects outside of the modal box or the "x" at the top right of the modal box.

Received some good advice from cohort on utilizing "parentElement" & "children" call functions based on code layering and events.  This helped me to solve the issue for the target for likes to add to the news article event.

Fully built out modal unit: functionality now includes selection of classes, player name, and when game is properly started utilizing modal, start game button is removed from the game.

*There is an option to just have it hide from the display, I might consider that later especially if a "game over" modal appears.  However, I will reapproach that another time.* 

### Total completed work:
* Hamburger Nav for website navigation
* Accordion of Gallery Images/sections
* News articles multiple like button interactions for different articles that are complete
* Start Button: modal screen that tracks user name input, selection of class, and removal of start modal button after selecting "Start Now"

### Next Steps:
* Updated game window display
* Dialog box to track player actions
* Character sheet fully built
* Game Menu navigation - appearing and disappearing button elements as you select options.

## Day 5 (3/12):

Continued working on game functionality through selections.

### Completed tasks of the day
* Now generates a new character based on character selection and updates character object to reflect new changes.  Also added images to reflect the class you have selected.
* Added image designs to the start button, the town, and merchant shop navigation.
* Completed build of player interaction with initial town square and the shop.  Purchasing logic and updates to stats has been added

### Next Steps
* Build encounter sequence
* Aim to build out more functions around the player interacting in town that will change the menu icons depending on what zone you're in.


## Day 6 (3/13):

Final day of preparation.  Aim to focus on:

* Building an encounter sequence that if won adds experience, gold, and can level character.
* Review code to ensure I understand what is happening

Accomplishments:

* Added logic for random encounters (2 types of slimes to fight).
* Battle and retreat fully available
* Added text dialog for all options
* If player HP reaches 0, game over screen
* Added responsive design element into news page (shifts the weekly updates box under the articles)
* Added a mouseover event listener for the stats for character to appear
* Fixed bug where nav was covered by the game-over picture
* Encountered bug where object was not cloning to random encounter battle.  Found fix through research using structuredClone() command to deep copy the random encounter element.
* Visual updates to the game

Finalizing day by reviewing code and practicing for mock interview presentations.

[^1]: When I was looking into the code, I think this might be one of those cases that using AJAX might be helpful.  I will explore that later if I have time to review.