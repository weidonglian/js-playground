function delay() {
    return new Promise(resolve => setTimeout(resolve, 300));
}

async function delayedLog(item) {
    // notice that we can await a function
    // that returns a promise
    await delay();
    console.log(item);
}

// run one by one
async function processArray1(array) {
    // async is mandatory for the arrow lambda below; otherwise it throws,
    // since array.forEach is synchrous function, and await is not allowed
    // inside a synchrous function.
    array.forEach(async (item) => {
        console.log(`${item} before await`)
        await delayedLog(item);
        console.log(`${item} after await`)
    })
    console.log('Done!');
}

console.log(`before processArray1`)
processArray1([1, 2, 3]);
console.log(`after processArray1`)

// run one by one
async function processArray2(array) {
    for (const item of array) {
        await delayedLog(item);
    }
    console.log('Done!');
}

//processArray2([1, 2, 3]);

// run concurency
async function processArray3(array) {
    // map array to promises
    const promises = array.map(delayedLog);
    // wait until all promises are resolved
    await Promise.all(promises);
    console.log('Done!');
}

//processArray3([1, 2, 3]);
