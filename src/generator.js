function* generator() {
    yield 1
    yield 2
}

const gen = generator()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

// saga is built on top of generator to delay dispatch actions

