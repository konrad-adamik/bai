const randomArray = [];

const fillRandomArray = () => {
    for (let i = 0; i <= 9; ++i) {
        randomArray.push(
            Math.floor(Math.random() * (20 - 5 + 1)) + 5
        )
    }
}

const displayRandomArray = () => {
    console.log(randomArray)
}

fillRandomArray();
displayRandomArray()