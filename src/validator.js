const funcTask = function(warsList){ //сортировка объекта по выбранному полю
    var result = warsList
    var max = {name: '', health: 0}
    var count = result.length - 1  
    for (var i = 0; i < count; i++){
        for (var j = 0; j < count - i; j++)
            if (result[j].health < result[j + 1].health) {
                var max = result[j]
                result[j] = result[j + 1]
                result[j + 1] = max
            }
     }
     return result
}
const wars = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    ]
     
//console.log(wars[0],wars[1],wars[2])
//console.log(funcTask(wars)[0],funcTask(wars)[1],funcTask(wars)[2])

module.exports = funcTask