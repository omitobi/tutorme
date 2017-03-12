/*
 *
 * login-register modal
 * Autor: Creative Tim
 * Web-autor: creative.tim
 * Web script: http://creative-tim.com
 *
 */
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    });
    $('.error').removeClass('alert alert-danger').html('');

}
function showLoginForm(){
    $('#registrationModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');
        });

        $('.modal-title').html('Login with');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#registrationModal').modal('show');
    }, 230);

}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#registrationModal').modal('show');
    }, 230);

}

function loginAjax(){
    window.location.replace('profile.html');
    /*   Remove this comments when moving to server
     $.post( "/login", function( data ) {
     if(data == 1){
     window.location.replace("/home");
     } else {
     shakeModal();
     }
     });
     */

    /*   Simulate error message from the server   */
    // shakeModal();
}

function shakeModal(){
    $('#registrationModal .modal-dialog').addClass('shake');
    $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
    $('input[type="password"]').val('');
    setTimeout( function(){
        $('#registrationModal .modal-dialog').removeClass('shake');
    }, 1000 );
}


/**
 * Flipcard Js
 */

$().ready(function(){
    $('[rel="tooltip"]').tooltip();

});

function rotateCard(btn){
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if($card.hasClass('hover')){
        $card.removeClass('hover');
    } else {
        $card.addClass('hover');
    }
}

