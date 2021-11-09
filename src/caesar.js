const caesarModule = (function() {

    function caesar(input, shift, encode = true) {
        // check that shift fits the requirements
        if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) return false;

        //shift the other way if decoding
        if (!encode) shift = -shift;

        let output = "";
        input = input.toLowerCase();

        for (let i = 0; i < input.length; i++) {
            //find the charcode of each character
            let charCode = input.charCodeAt(i);

            // make sure the character is a letter
            if (charCode > 96 && charCode < 123) {
                let shiftedCharCode = charCode + shift;

                // deal with shifts that exceed the alphabet
                if (shiftedCharCode > 122) {
                    shiftedCharCode = shiftedCharCode - 123 + 97;
                }

                if (shiftedCharCode < 97) {
                    shiftedCharCode = 123 - (97 - shiftedCharCode);
                }

                //switch back from charcode
                let newLetter = String.fromCharCode(shiftedCharCode);
                output += newLetter;
            } else {
                // add characters that are not letters and spaces as is
                output += input[i];
            }
        }

        return output;
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };