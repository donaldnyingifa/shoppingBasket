describe('Book Price for Unique Books', function() {
    it('has only one book', function() {
        expect(Book(1)).toBe(`${8}.00 EUR`);
    });

    it('has 2 unique books', function() {
        expect(Book(1,1)).toBe(`${15.2}0 EUR`);
    });

    it('has 3 unique books', function() {
        expect(Book(1,1,1)).toBe(`${21.6}0 EUR`);
    });

    it('has 4 unique books', function() {
        expect(Book(1,1,1,1)).toBe(`${25.6}0 EUR`);
    });

    it('has 5 unique books', function() {
        expect(Book(1,1,1,1,1)).toBe(`${30}.00 EUR`);
    });
});