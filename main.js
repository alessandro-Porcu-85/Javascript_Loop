//EX.1----LOOP THROUGHOUT ARRAY LENGTH----//

//Declare variable array
//const names = ['shaun', 'mario', 'luigi'];

//----LOOP THROUGHOUT ARRAY LENGTH----//
//for (const i = 0; i < names.length; i++) {

//console.log(names[i]); //<--- print in the console the array's names

// const html = `<div>${names[i]}</div>`; //<--- print in the div of HTML the array's names
//console.log(html); //<--- print in the div of HTML the array's names
//}


//EX.2----FOR LOOP THROUGHOUT A LENGTH OF ELEMENTS UP TO N.4----//

//for (const i = 0; i < 5; i++) {

//console.log('in loop:', i);
//}




//EX.3----WHILE LOOP THROUGHOUT A LENGTH OF ELEMENTS UP TO N.4----//

//Initialize variable  
//const i = 0;

//while (i < 5) {

//console.log('in loop:', i);
//i++; <--stop the infinite loop 
//}



//EX.4----WHILE LOOP THROUGHOUT A LENGTH OF ARRAY OF ELEMENTS NAMES----//

//declare array names
//const names = ['shaun', 'mario', 'luigi'];

//initialize array = 0;
//const i = 0;

//while (i < names.length) { //<--while loop throughout array length
//console.log(names[i]);
//i++; <--stop the infinite loop 
//}



//EX.5----DO WHILE LOOP IF CONDITION IS TRUE OR FALSE----//

//const i = 16;

//do {
// console.log('value of i is: ', i);
// i++;
//} while (i < 5);


//--OUTPUT(console):
//value of i is:  16


//EX.6---- IF STATEMENT WHERE CONDITION IS TRUE OR FALSE----//

//const age = 25;

//if (age > 20) {
//  console.log('you are over 20 years old');
//}

//const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

//if (ninjas.length > 3) {

//console.log("that's a lot of ninjas");
//}


//EX.7---- IF & ELSE STATEMENT  WHERE CONDITION IS LONG THAT 10 CHAR----//

//const password = 'p@ssword'; //<---has 8 characters


//if (password.length >= 12 && password.includes('@')) {
//console.log('that password is might strong!');

//} else if (password.length >= 10 || password.includes('@') && password.length >= 5) {
//console.log('that password is long enough!');

//} else {
//console.log('that password is too short!');
//}



//EX.8---- IF STATEMENT_ LOGICAL NOT(!)----//

//const user = false;

// if (!user) {
// console.log('you must be logged in to continue');

// }

// console.log(!true); //<---SWITCH THE BOOLEAN VALUE
// console.log(!false) //<---SWITCH THE BOOLEAN VALUE





//EX.9---- FOR LOOP BREAK AND CONTINUE----//

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (const i = 0; i < scores.length; i++) {
//     //console.log('your score: ', scores[i]);


//     //--continue--//

//     if (scores[i] === 0) { // with continue you print all the array numbers up to 100 and skip the 0 number
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     //--break--//
//     if (scores[i] === 100) {

//         console.log("Congratulation, you've got the top score");
//         break; //<--the loop break out up to the 100 number of the scores array
//     }

// }


//EX.10---- SWITCH STATEMENTS----//

// const grade = 'D';

// switch (grade) {
//     case 'A':
//         console.log('You got an A!');
//         break;
//     case 'B':
//         console.log('You got an B!');
//         break;
//     case 'C':
//         console.log('You got an C!');
//         break;
//     case 'D':
//         console.log('You got an D!'); // <--printed on the console after this statement up to default case if you don't add below the break; in any case
//         break; //<--If you add the break you print just this case and nothing else!
//     case 'E':
//         console.log('You got an E!');
//         break;
//     case 'F':
//         console.log('You got an F!');

//     default:
//         console.log('not a valid grade');

// }


//EX.1----VARIABLES AND BLOCK SCOPE----//

const age = 30;



if (true) {

    const age = 40; //<--redefine the value of age (global scope)
    const name = 'shaun';

    console.log('inside 1st code block: ', age, name);

    if (true) {
        const age = 50;
        console.log('inside 2nd code block: ', age);
        //var test = 'hello';
    }

}

console.log('outside code block:', age, name, test);