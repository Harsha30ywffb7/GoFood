import sum from "../Components/sum"

test("the sum of two numbers should be", ()=>{
    const result = sum(4,5)
    
    expect(result).toBe(9)
})