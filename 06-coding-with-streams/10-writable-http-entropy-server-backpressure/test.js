import Chance from 'chance'
const chance = new Chance()
let num = 0;

// while (chance.bool({ likelihood: 95 })){
//     console.log(num++);
// }

// while (true){
//     console.log(num++);
// }

function test(){
    console.log('start');
    while(true){
        console.log('hi');
        if(true){
            return console.log('ffffffinish');
        }
    }
}

test();