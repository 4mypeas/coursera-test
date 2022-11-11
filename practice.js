// // var x = {}
// // x['net worth'] = 50000000
// // console.log(x)
// // console.log(typeof(x['net worth']))

// // function makeMultiplier(multiplier) {
// //     var product = function (x){
// //         return multiplier * x;
// //     };
// //     return product;
// // }


// //funtions test meta
// function consoleStyler(color, background, fontSize, txt) {
//     var message = "%c" + txt;
//     var style =  `color: ${color};`
//     style += `background: ${background};`
//     style += `font-size: ${fontSize};`
//     console.log(message, style)
// }
         //functional programing
// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style =  `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message, style)
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px"
    if (reason == 'birthday') {
        console.log(`%cHappy birthday`, fontStyle);
    } else if(reason == "champions"){
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(message, style);
    }
};

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')

celebrateStyler('birthday')

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
};

// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');


// practicing OOP
// create your classes here
class Egbe{
    origin(){
        console.log('originates from anambra, nigeria')
    }
}
class Sosochukwu extends Egbe{
    origin(){
        super.origin()
        console.log('but was raised in Lagos, Nigeria')
    }
}
class Olivia extends Egbe{
    origin(){
        super.origin()
        console.log('but was raised in Berlin, Germany')
    }
}
var armani = new Olivia
var elochukwu = new Sosochukwu

elochukwu.origin()
armani.origin()



// class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus() {
//         console.log('Lights on?', this.lightsOn);
//     }
//     getSelf() {
//         console.log(this);
//     }
//     getPrototype() {
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }

// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log('High speed status:', this.highSpeedOn);
//     }
//     toggleLights() {
//         super.toggleLights();
//         super.lightsStatus();
//         console.log('Lights are 100% operational.');
//     }
// }

// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
// var mySecondTrain = new Train('blue', false);
// var myThirdTrain = new Train('blue', false);

// var train4 = new Train('red', false);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// var train5 = new Train('blue', false);
// var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

// train5.toggleLights(); // undefined
// train5.lightsStatus(); // Lights on? true
// highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.


//oop example
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!

// oop test
// Task 1: Code a Person class
class person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    };
    sleep() {
        this.energy += 10
        console.log('enery after your nap is:', this.energy);
    };
    doSomethingFun() {
        this.energy -= 10
        console.log('energy after all that is', this.energy);
    };
};

// Task 2: Code a Worker class
class worker extends person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage
    }
    sleep(){
        super.sleep()
    }
    doSomethingFun() {
        super.doSomethingFun()
    }
    goToWork(){
        this.xp += 10
        console.log('job well do, experience:', this.xp)
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    var internStaff = new worker('Bob', 21, 110, 0, 10)
    internStaff.goToWork()
    return internStaff
}

// Task 4: Code a manager object, methods
function manager() {
    var managerStaff = new worker('Alice', 30, 120, 100, 30)
    managerStaff.doSomethingFun()
    return managerStaff
}

