const funcTask = require('./validator.js')

const wars = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    ]


console.log(funcTask(wars)[0],funcTask(wars)[1],funcTask(wars)[2])