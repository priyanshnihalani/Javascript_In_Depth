function customforeach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        
        callback(arr[i], i, arr)
    
    }
}

let numbers = [1, 2, 3, 4, 5];

customforeach(numbers, (values, index, array) => {
    console.log(`${values}, ${index}, ${array}`)
})