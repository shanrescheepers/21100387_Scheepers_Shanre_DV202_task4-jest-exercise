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

    //TEST 3)
    //adds a new item to the end of an array
    //export const pushItemToEndOfArray = (array, item) => {
    //   var newArray = array
    //   newArray.push(item)
    //   return newArray}
    test("If an item is added to the end of the array", () => {
        const anArray = [1, 2, 3, 4, 5, 1, 2];
        const newArrayItem = 2;

        let newArray = pushItemToEndOfArray(anArray, newArrayItem);
        expect(newArray).toBe(anArray, newArrayItem)
        // const anArray: number[] is what the above says. This Passes?
    }) //END OF TEST 3

    //Test 4
    //adds a new item to the start of an array
    //export const pushItemToStartOfArray = (array, item) => {
    //  var newArray = array
    //newArray.unshift(item)
    //return newArray
    test("If an item is added to the start of the array", () => {
        const anArray = [1, 2, 3, 4, 5, 1, 2];
        const newArrayItem = 2;

        let newArray = pushItemToStartOfArray(anArray, newArrayItem);
        expect(newArray[0]).toBe((newArrayItem));
        // This finally passed
        expect(newArray).toEqual([2, 1, 2, 3, 4, 5, 1, 2]);
        // Dpuble check, this also passed, so there's a new array with 2 at the start
    }) //END OF TEST 4

    //TEST 5
    //removes the last item of an array
    //export const popLastItemFromArray = (array) => {
    //  var newArray = array
    //  newArray.pop()
    //  return newArray

    test("To remove the last item(number) of an array..", () => {
        //const colors = ["Blue", "Green", "Red", "Yellow"];
        //colors.pop();
        // console.log(colors);=blue, green,red. MEthod =pop()

        const anArray = [2, 1, 2, 3, 4, 5, 1, 2];
        anArray.pop();

        let newArrayPopped = popLastItemFromArray(anArray);
        expect(anArray).toBe(newArrayPopped);
    }) //END OF TEST 5

    //TEST 6
    //removes the first item of an array
    //export const popFirstItemFromArray = (array) => {
    // var newArray = array
    //newArray.shift()
    //return newArray}

    //var fruits = ["Banana", "Orange", "Apple", "Mango"];
    //fruits.shift();
    // var fruits = ["Orange", "Apple", "Mango"];
    test("To remove the last first(number) of an array..", () => {
        const anArray = [2, 1, 2, 3, 4, 5, 1];
        // newArrayShifted = anArray.shift();
        anArray.shift();

        let newArrayShifted = popFirstItemFromArray(anArray);
        expect(anArray).toBe(newArrayShifted);
        //This Passed
    }) //END OF TEST 6

    //TEST 7
    //removes a single item of an array based using its index
    //export const removeItemFromArray = (array, index) => {
    //  var newArray = array
    // newArray.splice(index, 1)
    // return newArray}
    test("To remove an item from an array based on its index..", () => {
        const anArray = [1, 2, 3, 4, 5, 1];
        anArray.splice(3, 1);
        // index 3 =nr4
        let newArraySpliced = removeItemFromArray(anArray, 3);
        expect(anArray).toEqual[1, 2, 3, 5, 1];//1,2,3,5,1
        // this Passed
        expect(anArray).toEqual(newArraySpliced);
        //this also passes
    }) //END OF TEST 7

    // TEST 8
    //reorders the array
    //export const returnOrderArray = (array) => {
    //  return array.sort()}
    test("Test to re-order/sort teh array and return the new returnOrderArray", () => {
        const anArray = [1, 2, 3, 5, 1];
        anArray.sort();

        let newlySortedArray = returnOrderArray(anArray);
        expect(anArray).toEqual(newlySortedArray);
    }); //This passed
    //END OF TEST 8
});
//END OF TASK 4