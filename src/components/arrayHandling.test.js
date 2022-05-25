// imports from arrayHandling.js here
import {
    cloneArray,
    popFirstItemFromArray,
    popLastItemFromArray,
    pushItemToStartOfArray,
    pushItemToEndOfArray,
    removeItemFromArray,
    returnOrderArray,
    returnLengthOfArray,
} from './arrayHandling';

// TEST 1)
//returns a clone of an array ->test if it is cloned?
// export const cloneArray = (array) => {
//     var newArray = array
//     return newArray
// }
describe("Test Suite for Handling an Array..", () => {
    test("Test if there is infact a cloned array(array cloned)...", () => {
        // make an array to expect a cloned array? flip..idk
        const anArray = [1, 2, 3, 4, 5, 1, 2];
        let newArray = cloneArray(anArray);
        // expect the existing(created) array, to be, the newArray that is the cloneArray(array:anArray).
        expect(anArray).toBe(newArray);
        // Dit pass
    }) //END OF TEST 1

    // TEST 2)
    //returns the length of an array
    //export const returnLengthOfArray = (array) => {
    //return array.length }
    // Toets die return of the length of the array:
    // expect(comp.length).toHaveLength?
    test("returns the length of an array", () => {
        const anArray = [1, 2, 3, 4, 5, 1, 2];
        const anArrayLength = anArray.length;
        expect(anArray.length).toHaveLength; //Passes
        expect(returnLengthOfArray(anArray)).toBe(anArrayLength);
        //This passes too?
    })//END OF TEST 2

})