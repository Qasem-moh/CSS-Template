'use strict';

let loaders;

// eslint-disable-next-line no-unused-vars
function myFunction() {
  // eslint-disable-next-line no-unused-vars
  loaders = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('myDiv').style.display = 'block';
}
/*** */

// // eslint-disable-next-line no-unused-vars
// let charText=0;
// // eslint-disable-next-line no-unused-vars
// let textData='It is a long established fact that a reader will be distracted by the readable content of a page when looking at it\'s layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,';
// // eslint-disable-next-line no-unused-vars
// let speedDraw=150;

// // eslint-disable-next-line no-unused-vars
// function DrawText(){
//   if(charText<textData.length){
//     document.getElementById('demoArticle').innerHTML+=textData.charAt(charText);
//     charText++;
//     // eslint-disable-next-line no-undef
//     setTimeout(DrawText, speedDraw);

//   }
// }
// // eslint-disable-next-line new-cap
// DrawText();

// eslint-disable-next-line no-unused-vars
let show = document.getElementsByClassName('showMore');
let i ;
// eslint-disable-next-line no-empty
for (i= 0; i < show.length; i++) {
  show[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let content=this.nextElementSibling;
    if (content.style.display==='block'){
      content.style.display='none';
    }else{
      content.style.display='block';
      show.innerHTML='-';
    }
  });
}
