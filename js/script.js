console.log("Up and running.")
var del;

//Add to List


$('#adding').on('click', function() {
  var addItem = $('<div>');
  addItem.html($('input').val());
  addItem.addClass("innerItem");
  $('#list').append(addItem).fadeIn();
  addItem.append('<input type="checkbox"></input><button id="snap" type="button">x</button>');
  $('input').val('');
  console.log("Focused?")
  $("#focused").focus();
});

// click with event delegation
$('#list').on('click', 'button', function() {
  console.log('clicked!');
  $(this).parent().remove();
  $("#focused").focus();
});
