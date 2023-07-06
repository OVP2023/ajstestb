
test('validate login', () => {
    
    const funcTask = require('../validator.js')
    
    const wars = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        ]
    
    expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]

    received = funcTask(wars)
    
    expect(received).toEqual(expected)
});

