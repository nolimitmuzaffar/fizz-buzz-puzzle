function fizzbuzz(num) {
    for(let i=1; i<=num; i++)//loop starts with initial value of 1 and 
    //stops when reaches num, in this case I set num to 50.
    {
        if(i%15==0)//mod 15 because if a num is divisible by 3 AND 5, its divisible by 15 as well
        { 
            console.log('Fizz Buzz');
        } else if(i%3==0 )
        {//if num is only divisible by 3 then print 'Fizz'
            console.log('Fizz');
        }
        else
        {//else just print that number
            console.log(i);
        }
    }
}
let num = 50;
fizzbuzz(num);