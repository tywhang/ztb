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
	    }).success(function() {
	      jQuery.noConflict();
	      $('#contact-me-form').modal('hide');
	    });
	});
});
