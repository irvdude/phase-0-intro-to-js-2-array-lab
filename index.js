// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const newCat = [...cats, name];
    return newCat;
}

function prependCat(name) {
    const newCat = [name, ...cats];
    return newCat;
}

function removeLastCat(name) {
    const removedCat = cats.slice(0, -1);
    return removedCat;
}



function removeFirstCat(name) {
    const removedCat = cats.slice(1);
    return removedCat;
}

console.log(removeFirstCat(cats));