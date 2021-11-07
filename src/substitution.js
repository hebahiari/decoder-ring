const substitutionModule = (function() {


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

            input = input.toLowerCase();
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