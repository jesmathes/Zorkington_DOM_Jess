/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/ 



export const gameDetails = {   
    title: "Z Game",
    desc: "You realize you\'re not asleep. You try to look around. You have to figure out how to get out of here. There are four rooms to get through before you can find the door that let\'s you out. It may be locked. We don\'t have a key.  Use these commands in your efforts: look; pickup; inspect; put back; keep; use; go; help",
    author: "JM",
    cohort: "May 2023",
    startingRoomDescription: "You blink. You can\'t see anything...",
    playerCommands: [
        // replace these with your games commands as needed
        "inspect", "look", "pickup", "put back", "help", "go", "use", "keep  "
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn"t be more than 6-8 different commands.
}

// Your code here
// Location Dictionary:

const locations = {
    "StartingRoom": {
        description: "You blink. You can\'t see anything...",
        exits: ["Room 2", "well"],
        items: ["flashlight"]
    },
    "Room2": {
        description: "You're in Room 2. The room has been cut out of dirt and roots..., something flashed/glinted in the dirt behind some roots... You clamber over the roots, with the flashlight in your ... fall through the roots and dropped... ",
        exits: ["Room 3", "Starting Room"],
        items: ["A small key", "flashlight"]
    },
   "Room3": {
        description: "...onto a slab of angled rock. You landed on your shoulder. You realize there's a cold dim green light coming from high up on the walls... ,(crushed your backpack,) and the flashlight casing is cracked.",
        exits: ["Room 4", "Room 2", "Heavy Door"],
        items: ["A small key", "box", "batteries"]
    },
    "Room4": {
        description: " You stand up, but the slope's too steep. You slip and roll down the slab  ... you slide downward til you smack into a wall face. It's dark. You feel a draft. You move in the direction of the draft and there's an opening that you squeeze through, and drop a couple of feet into a mud pit. It's room 4, and you think you can see a rectangular outline on the far side of the pit... it might be a way out of here...",
        exits: ["Exit Door"],
        items: [""]
    }
    // "Room1": {
    //     description: "  ",
    //     exits: [" "],
    //     items: [" "]
    // }
};



export const domDisplay = (playerInput) => {

    const items = [
        {
            name: "flashlight",
            description: "flickering flashlight",
            location: "Starting Room"
        },
        {
            name: "shiny rock",
            description: "flaking graphite mineral shard",
            location: "Room 2",
        },
        {
            name: "key",
            description: "A small key",
            location: "Room 3"
        },
        {
            name: "box",
            description: "wooden box",
            location: "Room 4"
        },
        {
            name: "paper",
            description: "formula",
            location: "Room 3"
        },
        {
            name: "piece of paper",
            description: "formula ",
            location: "box",
        },
        {
            name: "calculator",
            description: "calculator",
            location: "Room 3"
        },
        // {
        //     name: " ",
        //     description: " ",
        //     location: " ",
        // }
    ]
    
    /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don"t forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
} 
