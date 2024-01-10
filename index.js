/* Exercise 1 */

let newArray = []
newArray.push('dog')
newArray.push(28)
newArray.push(true)
newArray.push(23.23)

console.log(newArray)

/* Exercise 2 */

let myArray = [24, 643, 23, 89];
for (let i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i] + 3
    
}

console.log(myArray)

/* Exercise 3 */

const numbers = [2,3,4,7,8,9]
const newNumbers = []

for (let i = 0; i < numbers.length; i++) {
   if(numbers[i] > 5) {
    newNumbers.push(numbers[i])
   }
}

console.log('newNumbers array: ' + newNumbers)

/* Exercise 4 */

const randomNumbers = [2, 654, 2, 1, 3]
let sum = 0
randomNumbers.forEach(num => {
    sum += num
});

console.log(sum)

/* Exercise 5 */
const someRandomNums = [2, 64, 3, 98, 6, 10]

for (let i = 0; i < someRandomNums.length; i++) {
    if(someRandomNums[i] === 98) {
        console.log('found what I searched for: ' + someRandomNums[i])
    }
    
}

/* Exercise 6 */
let shoppingList = ['Tomatoes', 'eggs', 'cucmber', 'ham', 'salmon']
let newShoppingList = shoppingList.slice(0, -1)
console.log(newShoppingList)

/* Exercise 7 */
let randomNumbersArray = []
for (let i = 0; i < 10; i++) {
    randomNumbersArray.push(Math.floor(Math.random() * 100))
}
let biggest = 0;
for (let i = 0; i < randomNumbersArray.length; i++) {
    if(randomNumbersArray[i] > biggest) {
        biggest = randomNumbersArray[i]
    }
    
}
console.log(randomNumbersArray)
console.log('biggest number ' + biggest)

/* Exercise 8 */
const tasks = ['do dishes', 'do laundry', 'vaccuum clean', 'do homework']
let newTasksList = []

for (let i = 0; i < tasks.length; i++) {
    newTasksList.push(tasks[i])
    
}

console.log('newTasksList: ' + newTasksList)

/* Exercise 9 */
let soonEmpty = ['this', 'is', 'an', 'array']
while(soonEmpty.length > 0) {
    soonEmpty.pop()
}

console.log('soonEmpty: ' + soonEmpty)