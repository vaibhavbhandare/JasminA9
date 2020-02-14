import {multiplication} from './firstFunction'

xdescribe('Testing the firstFunction',()=>{

    it('should is addition equal' , ()=>{
        expect(multiplication(10,10)).toBe(100)
    })
})