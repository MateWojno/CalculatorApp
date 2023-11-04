# CalculatorApp

Math operations:

`add`,

`subtract`,

`multiply`,

`divide`,

A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. 

<br>

`Create three variables`
 
 ...for each of the parts of a calculator operation

<br>

`Create a new function  operate`

 that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

<br>


Add a `“clear”` button.

Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.

You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
Gotchas: watch out for and fix these bugs if they show up in your code:
Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.
Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).
You should round answers with long decimals so that they don’t overflow the screen.
Pressing = before entering all of the numbers or an operator could cause problems!
Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!


### Extra credit

Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
Add a “backspace” button, so the user can undo if they click the wrong number.
Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.
<br>
<hr>

# MY IDEA

`Make it more interesting`

<table>
<tr> 
<th>Modes</th>
<th>Sounds</th>
<th>Drum machine</th>
<th>Looper</th>
</tr>
<td>Basic C-major</td>
<td>E-piano</td>
<td>4/4 simple drum beat with 1-4-5 progression</td>
<td>On</td>
<tr>
<td>Dorian mode</td>
<td>Electic guitar</td>
<td>6/8 ballad in Bb track</td>
<td>On</td>
</tr>
<tr>
<td>F-minor</td>
<td>Synth bass + vocals</td>
<td>7/8 progressive rock track in Fm</td>
<td>On</td>
</tr>
<tr>
<td>Random</td>
<td>Funny sounds</td>
<td>Slav Hardbass</td>
<td>On</td>
</tr>
</table>

<br>

`Write special code to unlock this`

<table>
<tr>
<th>C-maj</th>
<th>Dorian</th>
<th>F-minor</th>
<th>Random</th>
<th>Download Logs</th>
<th>Quit</th>
</tr>
<tr>
<td>12340</td>
<td>9990</td>
<td>1120</td>
<td>7770</td>
<td>10242048</td>
<td>q</td>
</tr>
</table>

<br>

`How to code it?`

```cpp
#include <fun>
#include <noSleep>
#include <iostream>

using std::cin;
using std::cout;


int main() 
{
int specialCode = [12340, 9990, 1120, 7770, 10242048];
auto input;

cout << "Type a number inside your calc or press 'q' to quit";
cin >> input;
    if(input  == specialCode[0]  ||
        input == specialCode[1] ||
        input == specialCode[2] ||
        input == specialCode[3] ||
        ){
        // add sound for each button
        // on press with a keystroke only
        // handle key-release properly
        
    } else if (input == specialCode[4]) {
        // show every keystroke log
        // print it to pdf

    } else if (input == 'Q') {
        // return to normal mode
    }

    return 0;
}
```

<br>

```js
// Jokes aside,
// I have to save library of sounds
// assign them to each button, depending of mode 
// handle latency and sound volume of each sound sample
// handle sound looping when keyIsDown
// when keyIsUP handle sound-fadeout


// handle key strokes history and update an variable
// each time key is stroked add new value to an array
// measure a time of keyIsDown to replay it properly
// so, I need array of objects

let history = [
    {
        mode: 'C-maj',
        keystrokePattern: [0,1,2,3],
        keystrokeLength: [0.12, 0.19],
        startsFrom: 2.33,   
    },
    {
        mode: '...',
        keystrokePattern: [0,9,2,3,4],
        keystrokeLength: [0.12, 0.192, 2.21],
        startsFrom: 1.33,      
    },
    {
        // ...,
    }   
];

const soundLib = [
    {
        mode: 'C-maj',
        backingTrack: './...',
        0: './sounds/Cmaj-0.mp3',
        1: './...',
        2: './...',
        3: './...',
        4: './...',
        5: './...',
        6: './...',
        7: './...',
        8: './...',
        9: './...',
        backingTrackCredits: 'author-from-youTube',
        sampleCredits: 'author-from...',
    },
    {
        // ...,
    },
]

```
<br>

`How to enable looper`

```py
#   to start looping press &equals sign
#   to stop looping press &minus sign
#   to play loop press &plus sign 
```

<br>

`How to quit special modes?`


Simply press  `'q'`.