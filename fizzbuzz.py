def fizzBuzz(words = ["Fizz", "Buzz"], length = 100):
    for i in range(length):
        i += 1
        output = ""
        for j in range(len(words)):
            if i % ((j + 1) * 2 + 1) == 0:
                output += words[j]
        if output == "":
            output = i
        print(output)

fizzBuzz(["Fizz", "Buzz", "Bazz"], 1000)