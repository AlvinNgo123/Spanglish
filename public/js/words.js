function init() {
  'use strict';
  return true;
}

function changeWords() {
  var input = document.getElementById('wordSearch').value.toUpperCase();
  var words = document.getElementById('words').getElementsByTagName('p');

  for (var w in words) {
    var id = words[w].id.toUpperCase();

    if (id.indexOf(input) > -1) {
      words[w].style.display = '';
    } else {
      words[w].style.display = 'none';
    }
  }
}