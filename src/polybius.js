// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function() {
    // you can add any code you want within this function scope

    function polybius(input, encode = true) {
        let polybuisSquare = [
            ["a", "b", "c", "d", "e"],
            ["f", "g", "h", "(i/j)", "k"],
            ["l", "m", "n", "o", "p"],
            ["q", "r", "s", "t", "u"],
            ["v", "w", "x", "y", "z"],
        ];

        let output = "";

        //check if decoding
        if (encode == false) {
            //check if number of characters is even
            let numberOfCharacters = 0;
            for (let i = 0; i < input.length; i++) {
                if (!(input[i] == " ")) numberOfCharacters++;
            }
            if (numberOfCharacters % 2 > 0) return false;

            //take two digits at a time
            for (let i = 0; i < input.length; i++) {
                //add spaces as is
                if (input[i] == " ") {
                    output += " ";
                } else {
                    let digits = input[i] + input[i + 1];
                    output += polybuisSquare[digits[1] - 1][digits[0] - 1];

                    i++;
                }
            }
        }

        if (encode == true) {
            input = input.toLowerCase();

            for (let h = 0; h < input.length; h++) {
                switch (input[h]) {
                    case " ":
                        output += " ";
                        break;

                    case "j":
                    case "i":
                        output += 42;
                        break;

                    default:
                        for (let row = 0; row < polybuisSquare.length; row++) {
                            for (
                                let column = 0; column < polybuisSquare[row].length; column++
                            ) {
                                if (input[h] == polybuisSquare[row][column]) {
                                    output = output + [column + 1] + [row + 1];
                                }
                            }
                        }
                }
            }
        }

        return output;
    }

    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };