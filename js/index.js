// let load = document.getElementById('loading');
// // eslint-disable-next-line no-unused-vars
// function loadFunction() {
//   load.style.display = 'none';
// }

// eslint-disable-next-line no-var
var myVar;

// eslint-disable-next-line no-unused-vars
function myFunction() {
  // eslint-disable-next-line no-unused-vars
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('myDiv').style.display = 'block';
}
