$(document).ready(function() {
	$('.js-create-user').click(function() {
		var form = $('.new-user-form');
		var userName = $('.js-user-name');
		var userEmail = $('.js-user-email');

		$.ajax({
	      url: '/users',
	      type: 'POST',
	      data: {
          user: {
            name: userName.val(),
            email: userEmail.val()
          }
	      }
	    }).done(function() {
	      jQuery.noConflict();
	      $('#contact-me-form').modal('hide');
	    }).fail(function(res) {
        var errors = res.responseJSON.errors;
        _.each(errors, function(error) {
          $('.new-user-form').append("<p class='error'>" + error + "</p>")
        });
        $('.error').fadeOut({ duration: 2000 })
      });
	});
});
