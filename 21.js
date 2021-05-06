//  Program for palindrome numbers.
var check="mam"
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