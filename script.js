function palindrome(str){
 str=str.toLowerCase();
    let i=0;
    let j=str.length-1;
    while(i<j){
        if(str.charAt(i)==str.charAt(j)){
            i++;
            j--;
        }else{
           return false;
        }
    }
    return true;
}
module.exports = palindrome