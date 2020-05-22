/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*
   I got the ul element and then got the child elements of the ul which is li.
   I stored the number of students per page in the variable itemNumber. 
*/
const ul = document.querySelector('.student-list')
const students = ul.children;
const length = students.length;
const itemNumber = 10;

/*
   Created a function called showPage that holds two parameter list and page.
   List holds the student list and page holds the page number.
   I created two variable that store the students to be display based on the page link clicked on. 
   I created a loop to display the students.
   I hid all students and then only displayed the students that correspond to the page number. 
*/
function showPage(list, page) {
   const startIndex = (page * itemNumber) - itemNumber;
   const endIndex = page * itemNumber;
   for(let i = 0; i < length; i++) {
      list[i].style.display = 'none'
      if(i >= startIndex && i < endIndex) {
         list[i].style.display = 'block'
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

/*
   Accessed the main div and stored it in the variable mainDiv.
*/
function appendPageLinks(list) {
   const mainDiv = document.querySelector('.page');
   const div = document.createElement('div');
   div.className += 'pagination';
   const ul = document.createElement('ul')
   div.appendChild(ul)
   const pages = Math.ceil(list.length/itemNumber); // Calculates the number of links based on the number of students.
   for(let i = 1; i <= pages; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      if(i === 1) { // Adds the active class to the first page initially.
         a.className = 'active';
      }
      a.href += '#'
      a.innerHTML = i
      li.appendChild(a);
      ul.appendChild(li);
      a.addEventListener('click', () => {
         const active = document.querySelectorAll('.active');
         event.target.className = 'active'; // Adds the active class to the link clicked on.
         for(let j = 0; j < active.length; j++) { 
            active[j].className = ''; // Removes the active class from all non-active links.
         }
         showPage(students, i); // Displays ten students per page, based on the page link clicked. 
      })
   }
   mainDiv.appendChild(div); // Appends the created div and everyting inside of it, to the main div.
}

/*
   I called the showPage function and displayed the first page of students.
   Also, called the appendPageLinks functions which display all the page links.  
*/
showPage(students, 1);
appendPageLinks(students);

