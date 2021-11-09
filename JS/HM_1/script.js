// TASK 1
let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];
for (let i = 0; i < arr.length; i++) {
    if(arr[i].length >= 5)
        console.log(arr[i])
}

// TASK 2
let arr = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0)
        console.log(arr[i])
}

// TASK 3
let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if(arr[i][j] > 0)
            console.log(arr[i][j])
    }
}
// TASk 4
let words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit.', 'Nullam', 'lectus', 'quam']
console.log(words.reduce((x, y, i) => {
    let temp = '';
    if(i%2==1)
        temp = y.toUpperCase()
    else
        temp = y
    return x + ' ' + temp
}))

// TASK 5
let words = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi']
console.log(words.filter(item => item.includes("M") || item.includes("m")));

// TASK 6
let users = [
    {name: 'giorgi', age: 16},
    {name: 'levani', age: 90},
    {name: 'nino', age: 30},
    {name: 'otari', age: 11},
    {name: 'mari', age: 28}
]
console.log(
    users.filter(item => item.age>18).map(item => item.name)
)

// TASK 7
let items = [12, 'Google', 32, null, undefined, 'yahoo', 0, 'bing'];
console.log(
    items.map(item => {
        if(typeof item === "number")
            return item*item;
        else if(typeof item === "string")
            return item.toUpperCase();
        else
            return item;
    })
)