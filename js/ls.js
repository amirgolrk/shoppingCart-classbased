class LS{
    //making an array and use it in continue...
    constructor(){
        this.arr = [];
    }
    //storing data of selected course in an object
    createObject(titr,image,price,courseId){
        let obj = {
            img : image,
            name : titr,
            cost : price,
            id : courseId
        }
        //calling to add the new object into array
        this.addToArray(obj)
        return obj
    }
    addToArray(obj){
        this.arr.push(obj)
    }
    addToLs(){
        //check if localStorage with keyname of cart exists or not 
        if(localStorage.getItem('cart')){
            let received = JSON.parse(localStorage.getItem('cart'))
            //here we use  this.arr[this.arr.length - 1] to get the last element added to the array, since we add the object to the array before calling this function.
                received.push(this.arr[this.arr.length - 1])
                localStorage.setItem('cart', JSON.stringify(received))
            console.log('true');
        }else{
            //check if 'cart' doesn't exist set the new local storage
            console.log('doesnt exist');
            localStorage.setItem('cart',JSON.stringify(this.arr))
        }
    }
    //remove all courses from local storage
    removeAllLS(){
        localStorage.clear()
    }
    //reload data from LS
    reloadLs(){
        let fullData = JSON.parse(localStorage.getItem('cart'))
        //console.log(fullData);
        if(fullData == null){
            console.log('empty cart');
        }else{
            fullData.forEach(course => {
                ui.showList(course.name,course.img,course.cost)
            });
        }
    }
    removeFromLS(courseId) {
        let coursesArray = JSON.parse(localStorage.getItem('cart'))
        if (coursesArray == null) {
          console.log('empty array');
        } else {
            //removing courses with same id and data-id using filter method (getting the ones wich are not same and then make then new local storage using updated array)
          let updatedArray = coursesArray.filter(course => course.id != courseId) // Remove the course with matching courseId
          localStorage.setItem('cart', JSON.stringify(updatedArray))
          console.log('removed');
        }
      }      
}
// in this project I used if else instead of try catch for error handling