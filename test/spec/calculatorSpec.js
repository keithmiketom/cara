describe("My Calculator", function() {
    it("should add two numbers", function() {
        expect(1+2).toBe(3);
    });
    it("strings should genreatio nan", function(){
        expect(function() {ls("test")}).toThrow(new Error("Not a number"))
    });
});