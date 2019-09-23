const delay = (duration) =>
    new Promise(resolve => setTimeout(resolve, duration))

async function asyncWithAwait(prefix) {
    console.log(prefix + ' before await')
    await delay(1000)
    console.log(prefix + ' after await')
}

function asyncWithPromise(prefix) {
    console.log(prefix + ' before promise')
    delay(1000).then(_ => console.log(prefix + ' after promise'))
}

async function run1() {
    let prefix = '(1)'
    console.log(prefix + ' with await')
    asyncWithAwait(prefix)
    console.log(prefix + ' with promise')
    asyncWithPromise(prefix)
    console.log(prefix + ' after all')
}

run1()

async function run2() {
    let prefix = '(2)'
    console.log(prefix + ' with await')
    await asyncWithAwait(prefix)
    console.log(prefix + ' with promise')
    asyncWithPromise(prefix).then(_ => console.log(prefix + ' after all'))
}

run2()