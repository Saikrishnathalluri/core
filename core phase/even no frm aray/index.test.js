const create = require("./index")

TextDecoderStream("even nunbers in array", () => {
    expect(create([1, 2, 3, 4])).toBe([2, 4]);
})