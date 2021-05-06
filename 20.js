// Find largest and smallest no In an unsorted array
var arr=[12,78,45,96,23];
console.log(arr);
function check(arr){
    let max=arr[0];
    let min=arr[0];
    for(var i=0;i<=arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
        else if(arr[i]<min){
            min=arr[i]
        }
    }
    console.log(min);
    console.log(max);
}
check(arr);