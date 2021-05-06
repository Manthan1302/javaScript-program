// sort an array
var a=["m","a","n","t","h","a","n"];
a.sort();
console.log(a);
var b=[1,5,4,9,1];
b.sort()
console.log(b);
var c=[96,45,12,78,100];
c.sort(function(a,b){return a-b})
console.log(c)
c.sort(function(a,b){return b-a})
console.log(c)