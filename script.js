// complete the given function

function palindrome(str){

	// program to check if the string is palindrome or not


    // find the length of a string
    const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'false';
        }
    }
    return 'true';
}

// take input
// const string = prompt('Enter a string: ');

// call the function
// const value = checkPalindrome(string);

// console.log(value);

module.exports = palindrome
