// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function() {
    // you can add any code you want within this function scope

    function substitution(input, alphabet, encode = true) {
        // check if alphabet exists and is the correct length
        if (!alphabet || !(alphabet.length == 26)) return false;

        // check for duplicates in alphabet
        let alphabetCheck = "";
        for (let i = 0; i < alphabet.length; i++) {
            if (alphabetCheck.includes(alphabet[i])) return false;
            alphabetCheck += alphabet[i];
        }

        let output = "";

        if (encode == true) {
            for (let i = 0; i < input.length; i++) {
                if (input[i] == " ") {
                    output += " ";
                } else {
                    let charCode = input.charCodeAt(i);
                    let alphabetIndex = charCode - 97;

                    output += alphabet[alphabetIndex];
                }
            }
        }

        if (encode == false) {
            for (let i = 0; i < input.length; i++) {
                if (input[i] == " ") {
                    output += " ";
                } else {
                    for (let j = 0; j < alphabet.length; j++) {
                        if (input[i] == alphabet[j]) {
                            output += String.fromCharCode(j + 97);
                        }
                    }
                }
            }
        }

        return output;
    }

    return {
        substitution,
    };
})();

module.exports = { substitution: substitutionModule.substitution };