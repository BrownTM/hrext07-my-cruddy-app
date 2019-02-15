/*
Init app
interact with DOM
interact with localstorage

Plan:

√ Create ability to 'post' something and save to localStorage
√ Create homepage where post titles can be viewed
X Ability to view each individual post
   I must be accessing info from localStorage incorrectly
X Ability to delete individual posts
  Can't do this until I get the one above working
√ Ability to clear homepage and localStorage

Ultimate goal:
Create separate html pages to link on the main html to create riddle/puzzle path
   Not going to be able to be done at this time

 */

$(document).ready(function(){
  var x = document.getElementById("posting");
  var y = document.getElementById("container-data");
  var z = document.getElementById("individual-post");

  $('.create').on('click', function() {
    y.style.display = "none";
    x.style.display = "flex";
  });

  $('.btn-add').on('click', function(){
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();
    // write to db
    localStorage.setItem(keyData, valueData);
    // read from db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);

    $('<button class="post" data-keyValue="'+ keyData +'">'+keyData+'</button>').appendTo('.home-page');
    $('.input-key').val('');
    $('.input-value').val('');
    x.style.display = "none";
    y.style.display = "flex";
  });

  $('.btn-home').on('click', function() {
    x.style.display = "none";
    y.style.display = "flex";
  });

  $('.post').click(function(e) { //not working
    var keyData = e.currentTarget.dataset.keyvalue;
    // var valueData = localStorage.getItem(keyData);
    // // y.style.display = "none";
    // // x.style.display = "flex";
    // // $('.input-key').val(keyData);
    // // $('.input-value').val(valueData);
    // x.style.display = "none";
    // y.style.display = "none";
    // z.style.display = "flex";
    // $('<h1>' + keyData + '</h1>').appendTo('#individual-post');
    // $('<p>' + localStorage.getItem(keyData) + '</p>').appendTo('#individual-post');
  });

  // delete item --not working
  $('.post').on('click', function(e){
    var keyData = e.currentTarget.dataset.keyvalue;
    localStorage.removeItem(keyData);
    $('.home-page').text('');
  });

  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.home-page').text('');
  });

});