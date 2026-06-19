alert("Hello");

console.log(
    "a + b = "
    +
    (
        +prompt("First number?") + +prompt("Second number?")
    )
    );
    let x = 0;
    
    for (let index = 0; index < 6; index++) {
        x += index;
    }
    console.log("Sequence of 6 = "+ x);

    console.log("(4 + 6 + 9) / 77 = "+ ( (4+6+9)/77).toFixed(5));

    let a = 10;
    console.log("a = " + a);
    console.log("9 * a = " + (9 * a));

    let b = 7 * a;
    console.log("b = "+b);

    const max = 57;
    const actual = max - 13;
    const percentage = actual / max;
     console.log("percentage = "+ percentage.toFixed(4));