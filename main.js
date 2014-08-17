$(function() {
	var reminder_visible = false;
	$('h3').hide();
	
	$.fn.last = function() {
		return this.length == 1;	
	}
	function set_handlers() {
		$('#list-container p').click(function(e) {
			e.preventDefault();
			$(this).parent().slideUp('normal', function() {
				$(this).remove();
			});
			if($('#list-container p').last()) {
				$('h3').slideUp('normal');
				reminder_visible = false;
				$('.note').text('Please create a new task');
			};
		});
	};
	$('input[type="submit"]').click(function() {
		var str = $('input[type="text"]').val();
		if(!reminder_visible) {
			$('h3').slideDown('normal');
			reminder_visible = true;
			$('.note').text('Click on a task to remove it');	
		}
		$('#list-container').prepend('<div><p>' + str + '</p><hr></div>');
		$('#list-container div:first-child').hide().slideDown('normal');
		$('input[type="text"]').val(""); 
		set_handlers();
	});

	$('input').keypress(function(e) {
		if(e.which == 13) {
			$('input[type="submit"').click();
		}
	});
	
	set_handlers();
});