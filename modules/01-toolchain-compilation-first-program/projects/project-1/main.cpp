// Included the standard input and output library.s
#include <iostream>
#include <string>

// using std so i don't have to type it out everytime I want an input or output.
using namespace std;

// Gobal Variables 
bool isRunning = true;
string adventuresName;
int choice;

// Player Stats Variables
int intelligence;

// Show States
void showStats() {
    cout << "\n-----------" << '\n';
    cout << "Stats Panel" << '\n';
    cout << "-----------" << '\n';
    cout << "Adventure's Name: " << adventuresName << '\n';
}

// Chapter One
void chapterOne() {
    // Title of Chapter One
    cout << "Chapter One: The forbidden forest" << '\n';

    // Overview of the Story for Chapter One
    cout << "Type of Scene: Dark Woods, wet and muddy ground, moon light shining throught the clouds as " << '\n';
    cout << "the stars are coming in to view." << '\n';

    cout << "Walk in to the woods to investigate the float light blue flame ?" << '\n';
    cout << "Search arount the current entrance for the woods before Entering ?" << '\n';
    cout << "" << '\n';

    if (choice == 1) {
        cout << "I started moving forward on the path into the woods. As every step forward I get futher away from the entrance of the forest." << '\n';

        intelligence += 2;

        // Choice Template need to config the rules of the world before continue to build the choice system. :)
        if (choice) {

        } else {

        }

    } else if (choice == 2) {
        cout << "";
    } else if ( choice == 3) {
        cout << "";
    } else if (choice == 4) {
        cout << "";
    } else {
        cout << "You need to choose a path it's not safe staying in this spot" << '\n';
    }

    switch (choice) {
        case 1:
            break;
        case 2: 
            break;
        case 3:
            break;
        case 4:
            break;
        default:
            break;
    }
}

// Start Point for the Main game function
int main() {
    cout << "Welcome to Character Setup Panel" << '\n';
    
    // Enter Adventure's Name
    cout << "Enter your Adventure's Name: " << '\n';
    cin >> adventuresName; // Input for the Adventure's Name and then assigned to the variable to store the name.

    while (isRunning) {
        showStats();
        chapterOne();
        
        isRunning = false; // To stop the loop after all chapters have been complete.
    }
};
// End Point for the Main game function