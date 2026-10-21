const choices = ['Камень', 'Ножницы', 'Бумага', 'Ящерица', 'Спок']

let userChoices = []
let x = 10
let computer = 0
let player = 0
let tie = 0

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

while (x > 0){
    let random2 = (getRandomInt(5))
    userChoices.push(choices[random2])
    x -=1
}
let counter = 0

console.log(userChoices)

const history = []
x = 1
while (counter < userChoices.length) {
    let random1 = (getRandomInt(5))
    if ((random1 == 0 && (userChoices[0] == 'Ножницы' || userChoices[0] == 'Ящерица')) 
        || (random1 == 1 && (userChoices[0] == "Бумага" || userChoices[0] == 'Ящерица')) 
        || (random1 == 2 && (userChoices[0] == "Камень" || userChoices[0] == 'Спок')) 
        || (random1 == 3 && (userChoices[0] == "Спок" || userChoices[0] == 'Бумага')) 
        || (random1 == 4 && (userChoices[0] == "Ножницы" || userChoices[0] == 'Камень')))
        {
            console.log('Раунд', x, 'победил компьютер c', choices[random1], 'против', userChoices[0])
            computer++
        }
    else if (choices[random1] == userChoices[0]){
        console.log('Раунд', x, 'ничья', choices[random1], 'против', userChoices[0])
        tie++
    }
    else{
        console.log('Раунд', x, 'победил игрок c', userChoices[0], 'против', choices[random1])
        player++
    }
    x ++
    userChoices.shift()
}
console.log(`Игрок - компьютер `,)
console.log(" ", player,'  -   ', computer)