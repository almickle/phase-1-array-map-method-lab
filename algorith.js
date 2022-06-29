const recursiveCounter = (num) => {
    console.log(num)
    num + 1
    if (num < 10) {
        recursiveCounter(num)
    }

}

recursiveCounter(0)