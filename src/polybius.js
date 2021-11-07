const polybiusModule = (function() {
    function polybius(input, encode = true) {
        let polybuisSquare = [
            ["a", "b", "c", "d", "e"],
            ["f", "g", "h", "(i/j)", "k"],
            ["l", "m", "n", "o", "p"],
            ["q", "r", "s", "t", "u"],
            ["v", "w", "x", "y", "z"],
        ];

        let output = "";

        if (encode == true) {
            input = input.toLowerCase();

            for (let h = 0; h < input.length; h++) {
                switch (input[h]) {
                    // if spaces, add as is
                    case " ":
                        output += " ";
                        break;

                        // if j or i, add 42
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
                                    // added 1 to row and column because index starts at 0
                                }
                            }
                        }
                }
            }
        } else if (encode == false) {
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

        return output;
    }

    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };