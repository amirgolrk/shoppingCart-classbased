class UI{
   //making a tr and appending elements in it and append it in tbody of cart-content 
   showList(titr,image,price,courseId){
      let tr=document.createElement('tr')
      tr.innerHTML = `
         <td><img style="width:120px;height:80px;" src="${image}"></td>
         <td>${titr}</td>
         <td>${price}</td>
         <td><a href="#" class="remove" data-id="${courseId}">X</a></td>
      `
      document.querySelector('#cart-content tbody').appendChild(tr)
   }
   //deleting the tr from list
   deletcourse(course){
      course.remove()
   }
   deleteAllCourses(){
      //checkking that if table has a firstchild delete it until it hasn't 
      const tableBody = document.querySelector('#cart-content tbody');
      while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
      }
   }
}