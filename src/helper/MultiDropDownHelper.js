export function parseStringArrayToIntArray(listOfStrings) {
    let listOfInt = [];
    for (let index = 0; index < listOfStrings.length; index++) {
        listOfInt.push(parseInt(listOfStrings[index], 10));
    }
    return listOfInt;
}