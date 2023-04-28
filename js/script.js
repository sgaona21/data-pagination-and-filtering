/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/////GLOBAL VARIABLES/////
const studentList = document.querySelector(".student-list");
const linkList = document.querySelector(".link-list");
const pagination = document.querySelector(".pagination");
const header = document.querySelector(".header");



function showStudents(data) {
   /// This function will create the markup for each student in the data array and dynamically display it on the page. ///  
      let text = '';
      for (let v in data) {
         text += `<li class="student-item cf present">
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

function generateButtons(totalStudents) {
   /// This function will dynamically create and display pagination buttons. The amount of buttons created will correlate with the length of the data array. ///  
      let pageButtons = Math.ceil(totalStudents / 9);  
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

showStudents(data);



// / The following for loops will ensure that only a maximum of 9 students will be displayed on the page at any given time. ///
for (let v of studentList.children) {
   v.style.display = "none";
};
for (let i = 0; i < 9; i++) {
   studentList.children[i].style.display = "block";
};

generateButtons(data.length);





linkList.addEventListener("click", (e) => {
   /// The first part of this event handler will dsiplay the students in increments of 9 in correlation to the pagination button that is selected. ///   
   let present = [];
   for (let c = 0; c < studentList.children.length; c++) {
      if (studentList.children[c].className === "student-item cf present") {
         present.push(studentList.children[c])
      }
   };
   console.log(present)
      if (e.target.type === "button") {
         for (let i = 0; i < present.length; i++) {
            present[i].style.display = "none";
         }
         let currentTab = +e.target.textContent;
            let high = currentTab * 9;
            let low = high - 9;
            for (let i = 0; i < present.length; i++) {
               if (i < high && i >= low) {
                  present[i].style.display = "block";
               }
            }
   /// The seconond part of this event handler will ensure the "active" class will be assigned to the selected pagination button while revoking it from any unselected pagination button. ///      
         for (let x = 0; x < linkList.children.length; x++) {
            e.target.className = "active";
            let selector = +e.target.textContent - 1;
            if (x != selector) {
               linkList.children[x].firstChild.className = '';
            }
         }
      }
});


///The following code block will create the search bar and dynamically display it to the page. ///
let searchBar = document.createElement("div");
searchBar.innerHTML = `<label for="search" class="student-search">
<span>Search by name</span>
<input id="search" placeholder="Search by name...">
<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`;
header.append(searchBar)


/// The following code contains the search bar functionality. ///
const search = document.getElementById("search");

search.addEventListener("input", () => {
   for (let i = 0; i < studentList.children.length; i++) {
      if (studentList.children[i].firstElementChild.firstElementChild.nextElementSibling.textContent.toUpperCase().includes(search.value.toUpperCase())) {
         studentList.children[i].style.display = "block"
         studentList.children[i].className = "student-item cf present"
      } else if (!studentList.children[i].firstElementChild.firstElementChild.nextElementSibling.textContent.toUpperCase().includes(search.value.toUpperCase())) {
         studentList.children[i].style.display = "none"
         studentList.children[i].className = "student-item cf absent"
      } 
   };
   let counter = 0;
   let visible = [];
   for (let a of studentList.children) {
      if (a.style.display === "block") {
         counter++;
         visible.push(a);
      }
   }
   if (visible.length > 9) {
      for (let b = 0; b < visible.length; b++) {
         if (b > 8) {
           visible[b].style.display = "none"
         }
      }
   }
   let presents = 0;
   for (let c = 0; c < studentList.children.length; c++) {
      if (studentList.children[c].className === "student-item cf present") {
         presents++
      }
   };
   console.log(presents)   
   linkList.innerHTML = '';
   generateButtons(presents)

   let noResults = document.createElement("div");
   if (presents === 0) {
      noResults.textContent = "No Results Found";
      noResults.style.color = "red";
      linkList.append(noResults);
   } 
})






