
$('#container').imagesLoaded( function() {
  	$(".se-pre-con").fadeOut("slow");
});

var $contactForm = $('#contact-form');

$contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $('input:submit', $contactForm);
	var defaultSubmitText = $submit.val();

	$.ajax({
		url: '//formspree.io/support@csi-jmi.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
            $submit.removeClass('btn-success').addClass('btn-warning');
			$submit.attr('disabled', true).val('Sending message…');
		},
		success: function(data) {
                $submit.removeClass('btn-warning').addClass('btn-info');
				$submit.val('Message sent!');
			setTimeout(function() {
				$submit.attr('disabled', false).val(defaultSubmitText);
                $submit.removeClass('btn-info').addClass('btn-success');
			}, 3000);
		},
		error: function(err) {
            $submit.removeClass('btn-warning').addClass('btn-danger');
			$submit.val('Oops, there was an error!');
			setTimeout(function() {
				$submit.attr('disabled', false).val(defaultSubmitText);
                $submit.removeClass('btn-danger').addClass('btn-success');
			}, 3000);
		}
	});
});
