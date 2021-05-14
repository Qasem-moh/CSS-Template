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

// eslint-disable-next-line no-empty
for (let i = 0; i < show.length; i++) {
  show[i].addEventListener('click', function () {
    show[i].innerHTML === '+'
      ? (show[i].innerHTML = '-')
      : (show[i].innerHTML = '+');
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
      show.innerHTML = '-';
    }
  });
}

// let data = [
//   { loc: "Syria", date: "2020/1/2" },
//   { loc: "Libia", date: "2020/12/21" },
//   { loc: "USA", date: "2020/3/22" },
//   { loc: "UAE", date: "2020/4/22" },
//   { loc: "Qatar", date: "2020/12/1" },
//   { loc: "Australia", date: "2020/1/2" },
//   { loc: "jordan", date: "2020/1/4" },
//   { loc: "malezia", date: "2020/1/4" },
//   { loc: "russia", date: "2020/1/4" },
// ];

// console.log(Sort(data, 0));
// console.log(Sort(data, 1));
// function Sort(arr, index0) {
//   let chars = "a b c d e f g h i j k l n m p q r s t u v w x y z".split(" ");
//   let result = [];
//   let ind = index0;
//   for (let i = 0; i < chars.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       // console.log(data[i].loc[0].toLowerCase());
//       if (arr[j].loc[ind].toLowerCase() === chars[i]) {
//         result.push(arr[j]);
//         // break;
//       }
//     }
//   }
//   return result;
// }

// let ar=['usa','uea','Uaa','uAa'];
// console.log(ar.sort());
