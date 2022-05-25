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
describe("Test Suite for Handling the Array..", () => {
    test("Test if there is infact a cloned array(array cloned)...", () => {
        // make an array to expect a cloned array? flip..idk
        const anArray = [1, 2, 3, 4, 5, 1, 2];
        let newArray = cloneArray(anArray);
        // expect the existing(created) array, to be, the newArray that is the cloneArray(array:anArray).
        expect(anArray).toBe(newArray);
        // Dit pass
    }) //END OF TEST 1


})