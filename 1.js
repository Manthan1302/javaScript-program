//find out duplicate elements from an array
var arr=[12,14,12,4,75];
var duplicate=arr.filter(function(item,index){
    arr.indexOf(index)!=item;
});
//var duplicate= a => a.filter((item,index)=>a.indexOf(item)!=index);

console.log(duplicate);