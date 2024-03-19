const myObject = {
    js: "javascript",
    cpp : "c++",
    re : "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(key)
}
// gives keys as an output

myObject.swift = "Swift"
for (const key in myObject) {
    console.log(myObject[key])
}
// gives values of the properties as an output
// Maps are not itertable using for...in loop
