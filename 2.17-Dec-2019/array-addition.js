function arrayAddition(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Please pass array in argument');
    }
    if (arr1.length == 0 || arr2.length == 0) {
        throw new Error('Please pass array with atleast one element');
    }
    let mainArr = arr1.length > arr2.length ? arr1 : arr2;
    let secondArr = arr1.length > arr2.length ? arr2 : arr1;
    return mainArr.reduce((arr, value, index) => {
        let secondValue = 0;
        if (secondArr.length > index) {
            secondValue = secondArr[index];
        }
        if (!Number.isInteger(value) || !Number.isInteger(secondValue)) {
            throw new Error('Please pass integer value in array');
        }
        arr.push(value + secondValue);
        return arr;
    }, []);
}

module.exports = arrayAddition;