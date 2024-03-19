const course = {
    coursename : "Js with Chai aur Code",
    price: "999",
    courseInstructor: "hitesh chaudhry"
}
const {courseInstructor} = course;
console.log(courseInstructor)
console.log(typeof courseInstructor)

const {courseInstructor : instructor} = course; 
//This part is object destructuring syntax. It's extracting the value of the property courseInstructor from the course object and assigning it to a new variable named instructor.
console.log("Name of Instructor is ",instructor);
