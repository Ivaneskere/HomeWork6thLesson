// Home work 2

// Дано массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// 1 Знайти суму і кількість додатних (положительных) елементів.
// 2 Знайти мінімальний (найменший) елемент масива і його індекс.
// 3 Знайти максимальний (найбільший) елемент масива та його індекс
// 4 Визначити кількість від’ємних (отрицательных) елементів масива
// 5 Знайти кількість непарних додатних  елементів
// 6 Знайти кількість парних додатних елементів
// 7 Знайти суму парних додатних елементів
// 8 Знайти суму непарних додатних елементів
// 9 Знайти добуток всіх додатних елементів
// 10 Змінити на 0 всі елементи масива окрім найбільшого


function second() {
    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    let sumPos = 0;
    let countPos = 0;
    let min = arr[0], max = arr[0];
    let minIndex = 0, maxIndex = 0;
    let countNeg = 0;
    let countOddPos = 0, countEvenPos = 0;
    let sumEvenPos = 0, sumOddPos = 0;
    let productPos = 1;

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        if (el > 0) {
            countPos++;
            sumPos += el;
            productPos *= el;

            if (el % 2 === 0) {
                countEvenPos++;
                sumEvenPos += el;
            } else {
                countOddPos++;
                sumOddPos += el;
            }
        } else if (el < 0) {
            countNeg++;
        }

        if (el < min) {
            min = el;
            minIndex = i;
        }

        if (el > max) {
            max = el;
            maxIndex = i;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== max) {
            arr[i] = 0;
        }
    }

    console.log(`1)Сума додатних елементів: ${sumPos}, Кількість додатних елементів: ${countPos}`)
    console.log(`2)Мінімальний (найменший) елемент масива: ${min}, Його індекс: ${minIndex}`)
    console.log(`3)Максимальний (найбільший) елемент масива: ${max}, Його індекс: ${maxIndex}`)
    console.log(`4)Кількість від’ємних елементів масива ${countNeg}`)
    console.log(`5)Кількість непарних додатних  елементів ${countOddPos}`)
    console.log(`6)Кількість парних додатних  елементів ${countEvenPos}`)
    console.log(`7)Сума парних додатних елементів ${sumEvenPos}`)
    console.log(`8)Сума непарних додатних елементів ${sumOddPos}`)
    console.log(`9)Добуток всіх додатних елементів: ${productPos}`)
    console.log(`10)Массив після заміни: ${arr}`); 
}