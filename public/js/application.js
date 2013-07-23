$(document).ready(function() {
  //This is to keep loginmodal window centered after adjusting width.
  

  
  $('#login_li').on('click', function(){
    $("#loginModal").modal('show');
  });












$('#loginModal .modal-footer button').on('click', function(event){
  event.preventDefault();
  if (!validate_email($('#login [name="email"]').val())){
    $('[for="email"]').append(render_error("email"))
  }
  $('#login input').focus(function(){
    console.log(this)
    $('[for="email"]').remove('span');
  })
});




});


function validate_email(email){
  var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
  return emailRegex.test(email);
}

function render_error(item){
  return '<span style="color: red"> - ' + item + ' incorrect format</span>'
}


function modal_render(modal_id){
  $( modal_id + ' button').attr("disabled","disabled");
  $( modal_id + ' button').text('Fill in Form');
}
