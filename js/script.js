/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/////VARIABLES/////
let studentList = document.querySelector(".student-list");
let linkList = document.querySelector(".link-list");
let pagination = document.querySelector(".pagination");


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
 };

 showStudents(data);

 function displayNine() {
   let pageButtons = Math.ceil(data.length / 9);  
   for (let i = 0; i < pageButtons; i++) {
      let newListItem = document.createElement('li')
      let newButton = document.createElement("button");
      newButton.type = "button";
      newButton.textContent = `${i + 1}`;
      newListItem.append(newButton);
      linkList.append(newListItem);
      if (newButton.textContent === "1") {
         newButton.className = "active";
      }
   }
 };

 displayNine();









for (let v of studentList.children) {
   v.style.display = "none";
};

for (let i = 0; i < 9; i++) {
   studentList.children[i].style.display = "block";
};


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
      
      for (let x = 0; x < linkList.children.length; x++) {
         e.target.className = "active";
         let selector = +e.target.textContent - 1;
         if (x != selector) {
            linkList.children[x].firstChild.className = '';
         }
      }
   }
 });


