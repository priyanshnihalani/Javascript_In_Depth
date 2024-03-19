// Immediatly Invoked Function Expression  (IIFE)

(function random(){
    console.log("Hello")
})();

(function random1() {
    console.log("Hello1")
})();
(function random2(user) {
    console.log(`Hello, ${user}`)
})("Priyansh");

