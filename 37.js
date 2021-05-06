// Check whether a number is palindrome or not
var check="121"
check=check.split('');
check=check.reverse();
check=check.join('');

var rev = check
if(check == rev){
    console.log("pali")
}
else{
    console.log("not pali")
}