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

document.getElementById('threeSpans').addEventListener('click', function () {
  document.getElementsByTagName('span').setAttribute('id','clicked');
});
