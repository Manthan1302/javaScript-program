// to find factorial of a number using recursion.
function fac(a){
    var i
    var fact=1;
    for(i=5;i>=1;i--){
        fact=fact*i;
    }
    console.log(fact);
    if(a>0){
        fac(--a);
    }
}  
fac(5);