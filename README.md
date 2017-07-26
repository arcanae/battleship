# AJAX Battleship

A battleship game using AJAX, PHP and MySQL. 

## Instructions

Here is the list of steps to realize the game:

1. create a new git project
2. create a grid for the `boats`:
    - create a new file `game.php` with a grid
    - add a script to allow the player to click on table cell
    - store information about the `boats` in a data structure
    - send the `boats` to `create-boat.php` on the server
    - store the `boats` in a database
    - make sure everything is working before going to the next step
3. create another grid for the `shots`:
    - add a new grid to `game.php`
    - improve the script to allow player to click on the table cell
    - store information about the `shots` in a data structure
    - send the `shots` to a `create-shot.php` on the server
    - store the `shots` in a database
    - make sure everything is working before going to the next step
4. create a page to handle user connection:
    - create a new file `index.php` that add a new player in the database
    - display the number of player in the database
    - create a new file `del-player.php` wich remove a player from the database
    - add a Javascript function to `index.php` which call `del-player.php` when the user close the page.
    - redirect the first two player to `game.php` and display an error message to the other
    - make sure everything is working before going to the next step