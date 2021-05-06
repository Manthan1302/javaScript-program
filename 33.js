//  WAP for anonymous function calling JavaScript.
(function(val){
    var a=10;
    var b=20;
    var sum=a+b;
    console.log(sum);
    if(val>0){
        
        arguments.callee(--val)
    }
})(10)