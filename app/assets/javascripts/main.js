$(document).ready(function() {
	$('.js-create-user').click(function() {
		var form = $('.new-user-form');
		var userName = $('.js-user-name');
		var userEmail = $('.js-user-email');

		$.ajax({
	      url: '/users',
	      type: 'POST',
	      data: {
	        user_name: userName.val(),
	        user_email: userEmail.val(),
	      }
	    }).success(function() {
	      jQuery.noConflict();
	      $('#contact-me-form').modal('hide');
	    });
	});
});
