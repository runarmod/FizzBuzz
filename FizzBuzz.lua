function fizzbuzz(words, length)
    words = words or {"Fizz", "Buzz"}
    length = length or 100
    for i = 1, length do
        output = ""
        for j, value in pairs(words) do
            if (i % ((j) * 2 + 1)) == 0 then
                output = output .. value
            end
        end
        if output == "" then
            output = i
        end
        print(output)
    end
end

fizzbuzz({"Fizz", "Buzz", "Bazz"}, 1000)
