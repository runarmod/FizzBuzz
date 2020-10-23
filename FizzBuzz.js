function fizzBuzz(words = ["Fizz", "Buzz"], length = 100) {
    for (var i = 1; i <= length; i++) {
        var output = "";
        for (var j = 0; j < words.length; j++) {
            if (i % ((j + 1) * 2 + 1) === 0) {
                output += words[j]
            }
        }
        if (output === "") {
            output = i;
        }
        console.log(output);
    }
}

fizzBuzz(["Fizz", "Buzz", "Bazz"], 1000)
