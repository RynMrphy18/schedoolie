# schedoolie

WHEN I open the planner
THEN the current day is displayed at the top of the calendar

Used the moment method and attached the days text content to be it. Also added the current time

WHEN I scroll down
THEN I am presented with time blocks for standard business hours

Came with the starter code

WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

Used the split method to to parse each time block to its number, then compared that to the current hour using another moment method. Color classes were added and removed based off the current time.

WHEN I click into a time block
THEN I can enter an event

Came with starter code

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

A click function sets the text and time to local storage 

WHEN I refresh the page
THEN the saved events persist

A for loop goes through all 13 time blocks and gets each from local storage on reload

![screencapture-file-C-Users-rmurp-Desktop-projects-schedoolie-index-html-2021-12-22-12_03_30](https://user-images.githubusercontent.com/87506145/147129498-802bdb78-e3e2-4795-8963-a435aea0beb7.png)



