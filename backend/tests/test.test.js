describe("Example Tests", () => {
    test("Test 1", () => {
        expect(2).toBe(2);
    });

    test("Test 2", () => {
        const testList = [1, 2, 3];
        expect(testList).toHaveLength(3);
    });
});