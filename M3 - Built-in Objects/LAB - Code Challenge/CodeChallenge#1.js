/*Code Challenge #1
Scenario: Write a function that will draw m integers from 0 to n. Pass parameters m and n and two flags to the function:
- the first determines whether the drawn numbers may be repeated;
- the second one states if the returned array of numbers should be sorted.
Use the Set class.*/

function getRandomSet(m, n, uniq, sorted) {
    let retVal = uniq ? new Set() : [];
    let push = (e) => uniq ? retVal.add(e) : retVal.push(e);
    let length = () => uniq ? retVal.size : retVal.length;

    for (; length() < m;) {
        push(Math.floor(Math.random() * Math.floor(n)));
    }

    return sorted ? [...retVal].sort((n1, n2) => n1 - n2) : [...retVal];
}

console.log(getRandomSet(5, 10, true, true)); // Outputs: [0, 1, 2, 3, 4] (or any sorted set of 5 unique numbers from 0 to 10)