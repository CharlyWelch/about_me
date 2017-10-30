'use strict';

let score = 0;

// Greet and meet
const username = prompt('Welcome! What\'s your name?');
console.log('User name: ' + username);

alert('Hello, ' + username + '! I\'m going to ask you a series of yes/no questions to see how well you know me.');

// Question one: do I have sibs? Correct answer: no
function askSibs(){
    const siblings = prompt ('First, do I have any siblings?').toLowerCase();
    console.log('Siblings? Answer: ' + siblings);
    if(siblings === 'yes' || siblings   === 'y') {
        alert('Actually, ' + username + ', I\'m an only child and I was raised by a single mom. But I do have a lot of close friends that feel like siblings to me. Next question!');
    }
    else if(siblings    === 'no' || siblings   === 'n') {
        alert('Great job, ' + username + '! I do have a few step-siblings but we don\'t know each other very well. Next question!');
        score = score + 1;
    }
}

askSibs();
console.log('score:' + score);

//Question two: do I have children? Correct answer: yes
function askChildren(){
    const children = prompt ('Do I have any children of my own?' ).toLowerCase();
    console.log('Children? Answer: ' + children);
    if(children === 'yes' || children === 'y') {
        alert('That\'s right, ' + username + '! I have the sweetest, kindest, and funniest 7-year-old on the planet. His name is Oliver.');
        score = score + 1;
    }
    else if(children === 'no' || children === 'n') {
        alert('You didn\'t know, ' + username + '?! I have the sweetest, kindest, and funniest 7-year-old on the planet. His name is Oliver.');
    }
}

askChildren();
console.log('score:' + score);

//Question three: Do I like arts and crafts? Correct answer: yes
function askCrafts(){
    const crafts = prompt ('Okay, you\'re doing great. Next question: Do I enjoy making art and crafting?' ).toLowerCase();
    console.log('Do I enjoy crafts? Answer: ' + crafts);
    // change to " 'yes' || 'y' "
    if(crafts === 'yes' || crafts === 'y') {
        alert('Darn tootin\' ' + username + '! I especially love wood burning and wool felting, but I\'m always into learning new crafty skills.');
        score = score + 1;
    }
    else if(crafts === 'no' || crafts === 'n') {
        alert('Well, ' + username + ', looks like I\'ll have to make you a little something soon. I especially love wood burning and wool felting, but I\'m always into learning new crafty skills.');
    }
}

askCrafts();
console.log('score:' + score);

//Question four: Do I enjoy southern food? Correct answer: yes
function askFood(){
    const food = prompt ('Alright, here\'s a tough one for you: Do I like southern food?').toLowerCase();
    console.log('Like southern food? Answer: ' + food);
    if(food === 'yes' || food === 'y') {
        alert('Zing! You are so smart, ' + username + '. I love southern food. In fact, I love pretty much ALL food!');
        score = score + 1;
    }
    else if(food === 'no' || food === 'n') {
        alert(username + '. Seriously? Who doesn\'t love southern food?!');
    }
}

askFood();
console.log('score:' + score);

//Question five: Have I traveled overseas? Correct answer: no
function askTravel(){
    const travel = prompt ('You\'re doing a bang-up job here ' + username + '. So, tell me, have I ever traveled overseas?').toLowerCase();
    console.log('Overseas travel? Answer: ' + travel);
    if(travel === 'yes' || travel === 'y') {
        alert('Nice try, ' + username + ', but I have never left the country. Well, I went to Toronto once.');
    }
    else if(travel === 'no' || travel === 'n') {
        alert('Spot on, ' + username + '! I haven\'t been outside the country except one quick trip to Toronto back before you needed a passport to cross the border in a car!');
        score = score + 1;
    }
}

askTravel();
console.log('score:' + score);

//Q6 with 4 guesses, tells too high or too low, how many guesses left, when correct gives 1 point and exits loop

function askDog() {
    for (let i = 0; i < 4; i++){
        const numDogs = prompt('How many dogs do I have?');
        console.log('Dog guess: ' + numDogs);
        if(numDogs == '2'){
            alert('Yes! I have a Catahoula mix and a white lab/Sharpei mix, and they are both a little crazy.');
            score = score + 1;
            i = 4;  //break;
        }
        else if(numDogs > 2){
            alert('That\'s too many dogs! You have ' + (3 - i) + ' guesses left!');
        }
        else if(numDogs < 2){
            alert('That\'s not enough dogs for me. You have ' + (3 - i) + ' guesses left!');
        }
        else(alert(username + ', that isn\'t even a number. You have ' + (3 - i) + ' guesses left!')
        );
    }
}

askDog();
console.log('score:' + score);

//Q7 uses an array of possible answers, if correct gives 1 pt. 

const jobs = [' waitress', ' painter', ' electrician', ' teacher', ' carpenter', ' dishwasher', ' wrestler', ' driver', ' fire-breather', ' landscaper', ' nanny'];

function askJob(){
    for(let i = 0; i < 6; i++){
        const oneJob = ( ' ' + prompt('Last one, ' + username + '!! I\'ve done a lot of things to make money in my lifetime. Can you guess one position I\'ve had?').toLowerCase());

        console.log('Job guess: ' + oneJob);

        if(jobs.includes(oneJob)){
            alert('YES! I have totally been a ' + oneJob + '. Here are just a few job titles I\'ve had: ' + jobs + '. Whew!');
            score = score + 1;
            i = 6;
        }

        else if(!jobs.includes(oneJob)){
            alert('Nope, I have not been a ' + oneJob + ', but it\'s certainly never too late! Try again! You have ' + (5 - i) + ' attempts remaining.');
        }

        if(!jobs.includes(oneJob) && (5 - i) === 0){
            alert( 'Sorry, ' + username + ', you\'re out of tries. Here are just a few job titles I\'ve had: ' + jobs + '. Whew!');
        }
    }
}

askJob();
console.log('Final Score: ' + score);

alert('Great job, ' + username + '! Your final score is ' + score + '/7. You were really a good sport. Have a wonderful day!');
