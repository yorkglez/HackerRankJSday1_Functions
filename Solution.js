//Factorial function
function factorial(n)
{
    //Variable declaration
    let factorial = Number(1);
    //Process factorial
    while(n != 0)
    {
        factorial = factorial * n;
        n--;
    }
    return factorial;
}

function main() {
    //Input number
    const n = +(readLine());
    //Output factorial
    console.log(factorial(n));
}