const choices = ['Камень', 'Ножницы', 'Бумага', 'Ящерица', 'Спок']

let userChoices = []
let x = 10
let computer = 0
let player = 0
let tie = 0
console.log(`Игрок - `, player,)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const history = []
x = 1
while (player < 3 && computer < 3) {
    const promptUserData = prompt()
    
    if (!choices.includes(promptUserData)) {
        console.log('Нет такого варианта')
        continue
    }
    let random1 = (getRandomInt(5))
    if ((random1 == 0 && (promptUserData == 'Ножницы' || promptUserData == 'Ящерица')) 
        || (random1 == 1 && (promptUserData == "Бумага" || promptUserData == 'Ящерица')) 
        || (random1 == 2 && (promptUserData == "Камень" || promptUserData == 'Спок')) 
        || (random1 == 3 && (promptUserData == "Спок" || promptUserData == 'Бумага')) 
        || (random1 == 4 && (promptUserData == "Ножницы" || promptUserData == 'Камень')))
        {
            console.log(`Раунд`, x, `победил компьютер c ${choices[random1]} против ${promptUserData}`)
            computer++
        }
    else if (choices[random1] == promptUserData){
        console.log(`Раунд`,x, `ничья ${choices[random1]} против ${promptUserData}`)
        
    }
    else{
        console.log(`Раунд`, x, `победил игрок c ${promptUserData} против ${choices[random1]}`)
        player++
    }
    x++
    userChoices.shift()
    console.log(computer, player)
}
console.log(`Компьютер - игрок: ${computer} - ${player}`)




