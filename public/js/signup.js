$(document).ready(function() {
  
  $('#create_li').on('click', function(){
    reset_create();
    $("#createModal").modal('show');

    $('#new_user').on('submit', function(event){
      event.preventDefault();

      var form_input = $(this).serializeArray();
      var validation = validate_input_data(form_input[0].value, form_input[1].value, form_input[2].value);

      if (validation.email && validation.password && validation.verify){
        $.post('/new_user', form_input);
        reset_create();
        $("#createModal").modal('hide');
        location.reload();
      }else{
        if (!validation.email){
          render_error('email');
        }
        if (!validation.password){
          render_error('password');
        }
        if (!validation.verify){
          render_error('verify');
        }
      }
    });
  });
});

function validate_input_data(email, password, verify){
  var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
  var passwordlength = password.length >= 6;
  var verify_password = password == verify
  return { email: emailRegex.test(email), password: passwordlength, verify: verify_password}
}

function render_error(item){
  if (item == 'email'){
    $("[for=email] span").css('color', 'red').text(' - incorrect format');
  }
  if (item == 'password'){
    $("[for=password] span").css('color', 'red').text(' - not long enough');
  }
  if (item == 'verify'){
    $("[for=verify_password] span").css('color', 'red').text(' - does not match');
  }
}

function reset_create(){
  $('#email').focus();
  $('#new_user label span').text('');
  $("#new_user")[0].reset();
}
