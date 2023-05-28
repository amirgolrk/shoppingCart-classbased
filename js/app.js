//variables 
const courses = document.querySelector('#courses-list')
const cart = document.querySelector('#shopping-cart')
let ui = new UI()
let ls = new LS()

//eventListeners
listeners()
function listeners(){
    courses.addEventListener('click',addCourse)
    cart.addEventListener('click',removeCourse)
    document.addEventListener('DOMContentLoaded',readLS)
}

//functions
//add a course to shopping cart
function addCourse(e){
    let titr = e.target.parentElement.querySelector('h4').innerHTML
    let image = e.target.parentElement.parentElement.querySelector('img').src
    let price = e.target.parentElement.querySelector('span').textContent
    let courseId = e.target.getAttribute('data-id')
    if(e.target.classList.contains('add-to-cart')){
        e.preventDefault()
        ui.showList(titr,image,price,courseId)
        ls.createObject(titr,image,price,courseId)
        ls.addToLs()
        alert('دوره افزوده شد')
   }
}
//removing courses from view and LS
function removeCourse(e){
    e.preventDefault()
    if(e.target.classList.contains('remove')){
        ui.deletcourse(e.target.parentElement.parentElement)
        //get the id of the course that we clicked
        let courseId = e.target.parentElement.parentElement.querySelector('a').getAttribute('data-id')
        ls.removeFromLS(courseId) // Pass courseId to removeFromLS method
        console.log('deleted');
    }
    //removing all of courses
    if(e.target.id === "clear-cart"){
        //remove all courses from list in browser view
        ui.deleteAllCourses()
        //remove all courses from local storage
        ls.removeAllLS()
    }
}
//reloading information from local storage
function readLS(){
    ls.reloadLs()
}