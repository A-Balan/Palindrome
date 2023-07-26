function getValues() {
    // retrieve input
    let userString = document.getElementById('userString').value;
    // check
    let palCheck = checkForPalindrome(userString);
    // display
    displayResults(palCheck);
}

function checkForPalindrome(userString) {
    // Reverse
    // removes capitalization
    userString = userString.toLowerCase();

    // regex -remove space and special characters-global
    let regex = /[^a-z0-9]/g;
    // anything not regex, replace with empty string = a sanitized string*
    userString = userString.replace(regex, '');
    // a backwards string*
    let reverseString = [];

    // decrimenting for-loop
    for (let index = userString.length - 1; index >= 0; index--) {

        // aka reverseString += userString[index] making a reverse array
        reverseString = reverseString + userString[index];
    }
    // we now have 2 strings

    let returnAlert = {
        // message: "Nice! It's a Palindrome",
        // reversed: "olleH"
        // The object starts as a blank slate. Then when we tell it that it has a "message" property,
        // it says "ok" and now it has that, and we can access it by typing returnAlert.message.
    };

    // if the reverse and normal strings are equal- return Nice! madam-madam
    if (reverseString == userString) {
        returnAlert.message = "Nice! It's a Palindrome";
        returnAlert.reversed = reverseString;
    } else {
        returnAlert.message = "Sorry, not a Palindrome";
        returnAlert.reversed = reverseString;
    }



    // An object is multiple related items, set equal to certain values, inside of curly brackets, that has a name

    // using an object is necessary here because we want to use multiple values from this function

    // The values in question are returnAlert.reversed, and returnAlert.message

    // We could also do the same thing with an array. However, here, an object makes more logical sense.

    // You would need to use an index to access items in an array, but here you can just use the property name
    //                                                                                   ->(returnAlert.message)

    return returnAlert;
}

function displayResults(returnAlert) {

    // returnAlert is still an object by the time this codeblock is reached.
    // It still has a "message" property and a "reversed" property, both of which are used here.

    if (returnAlert.message == "Nice! It's a Palindrome") {
        document.getElementById('alertHeading').innerHTML = returnAlert.message;
        document.getElementById('message').innerHTML = `Backwards, your text says: ${returnAlert.reversed}`;
        document.getElementById('alert').classList.remove('invisible');
        document.getElementById('alert').classList.remove('alert-danger');
        document.getElementById('alert').classList.add('alert-success');
    }
    else {
        document.getElementById('alertHeading').innerHTML = returnAlert.message;
        document.getElementById('message').innerHTML = `Backwards, your text says: ${returnAlert.reversed}`;
        document.getElementById('alert').classList.remove('invisible');
        document.getElementById('alert').classList.remove('alert-success');
        document.getElementById('alert').classList.add('alert-danger');
    }
}