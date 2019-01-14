
const add =(a,b)=>{
    return a+b
}
const generateGreeting = (name='anonymous')=>{
    return `hello,${name}!`
}

test('should add two numbers', ()=>{
    const result = add(3,7)
    expect(result).toBe(10)
})
test('should print a name',()=>{
    const result = generateGreeting('hamid');
    expect(result).toBe('hello,hamid!')
})
test('should print a name',()=>{
    const result = generateGreeting();
    expect(result).toBe('hello,anonymous!')
})
