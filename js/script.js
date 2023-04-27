/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

let studentList = document.querySelector(".student-list");
let linkList = document.querySelector(".link-list");
let pagination = document.querySelector(".pagination");

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
// function showPage(list, page) {
//    let start = page * 9;
//    let end  = page * 9;
//    let text = '';
//    for (let v in list) {
//       if (v >= start && v < end) {
//          text += `<li class="student-item cf">
//          <div class="student-details">
//            <img class="avatar" src="${data[v].picture.thumbnail}" alt="Profile Picture">
//            <h3>${data[v].name.first} ${data[v].name.last}</h3>
//            <span class="email">${data[v].email}</span>
//          </div>
//          <div class="joined-details">
//            <span class="date">Joined ${data[v].registered.date}</span>
//          </div>
//        </li>`
//       }
//    }
//    studentList.innerHTML = text;
//    console.log(studentList.innerHTML)
// }


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions






 function showStudents(data) {
   let text = '';
   for (let v in data) {
      text += `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${data[v].picture.thumbnail}" alt="Profile Picture">
           <h3>${data[v].name.first} ${data[v].name.last}</h3>
           <span class="email">${data[v].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${data[v].registered.date}</span>
         </div>
       </li>`
   }
   studentList.innerHTML = text;
 }

 showStudents(data);

 function displayNine() {
   let pageButtons = Math.ceil(data.length / 9);
   let text = '';
   for (let i = 0; i < pageButtons; i++) {
      text += `<li>
            <button type="button">${i + 1}</button>
            </li>`
   }
   linkList.innerHTML = text;
 }



for (let v of studentList.children) {
   v.style.display = "none";
};

for (let i = 0; i < 9; i++) {
   studentList.children[i].style.display = "block";
}


console.log(linkList.children)
console.log(studentList.children)

 linkList.addEventListener("click", (e) => {
   if (e.target.type === "button") {
      for (let i = 0; i < studentList.children.length; i++) {
         studentList.children[i].style.display = "none";
      }
      let currentTab = +e.target.textContent;
         let high = currentTab * 9;
         let low = high - 9;
         for (let i = 0; i < studentList.children.length; i++) {
            if (i < high && i >= low) {
               studentList.children[i].style.display = "block";
            }
         }
   }
 })



 displayNine()

