//2**
// Из объекта сделать массив с массивами, а потом коллекцию(Мар)
// В эту коллекцию добавить 2 свойства(на ваше усмотрение)
// После чего выполнить проверку на наличие в массиве свойства по ключу name, результат вывести в консоль
let student = {
    name: "Maria",
    age: "30",
    id: 7,
}
let studentArr = Object.entries(student);
console.log(studentArr);

const myMap = new Map(studentArr);

console.log(myMap.set('sex', 'female '));

myMap
    .set('surname', 'Ivanova')
    .set({
        "street": "Kolasa",
        "city": "Minsk"
    }, "Europa");

console.log(myMap);

for (let [key, value] of myMap) {
    if (key == "name") {
        console.log(value);
    }
}

console.log(myMap.get("age"));







// 3**
//Созданную коллекцию пройти через цикл for..of и вывести в консоль все ключи, значения и ентрис

for (let value of myMap.values(student)) {
    console.log(value);
}
for (let key of myMap.keys(student)) {
    console.log(key);
}
for (let entry of myMap.entries(student)) {
    console.log(entry)
}







//4**
/*В объекте с количеством продуктов, уменьшить количество каждого в 2 раза  (Изменить структуру до массива с массивами, выполнить преобразование и вернуть объект)*/
let amount = {
    appleCream: 440,
    flour: 316,
    juice: 1120,
}
console.log(Object.entries(amount));

let newAmount = Object.entries(amount)
    .map(([key, value]) => {
        return [key, value / 2]
    });
console.log(newAmount);

let oldAmount = Object.fromEntries(newAmount);
console.log(oldAmount);





//5
/*В измененном выше объекте рассчитать общую сумму продуктов*/

function getSumProducts(oldAmount) {
    let sum = 0;
    for (let value in oldAmount) {
        sum += oldAmount[value];
    }
    return sum;
}
console.log(getSumProducts(oldAmount));







//6**
/*Написать функцию, которая принимает массив и возвращает массив с уникальными значениями(Использовать Set, и rest оператор)*/
let counts = [1, 1, 2, 3, 4, 11, 5, 6, 6, 6, 7, 7, 8, 8, 11, 2, 3, 11];
console.log(counts);

function unique(arr) {
    return [...new Set(arr)]
}
console.log(unique(counts));








//7
//Копировать объект не используя Object.assign и цикл

const weather = {
    "coord": {
        "lon": -122.08,
        "lat": 37.39
    },
    "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
    }],
    "base": "stations",
    "main": {
        "temp": 282.55,
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
        "pressure": 1023,
        "humidity": 100
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "clouds": {
        "all": 1
    },
    "dt": 1560350645,
    "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
}


let newObj = JSON.parse(JSON.stringify(weather));
console.log(newObj);