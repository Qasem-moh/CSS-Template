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
