$(document).ready(function() {
	section_id = 1;
	resource_id = 1;
	header_id = 1;
	code_id = 1;
	reponse_id = 1;
	$('.section_button').on('click', function(){
		section_id++;
		var section_clone = $('#section_0').clone(true).attr('id', 'section_' + section_id);
		new_section = section_clone.find('.resource').attr('id', 'resources_' + section_id).end()
			.find('.section_resource_button').attr('id', 'resource_section_btn_' + section_id).end()
			.find('.rec_area').attr('id', 'resource_area_' + section_id).end()
			.find('.new_resource').attr('id', 'resource_' + section_id).end()
			.find('.resource_button').attr('id', 'resource_btn_' + section_id).end()
			.appendTo('#sections')
			.show();
	});
	$('.resource_button').on('click', function(){
		resource_id++;
		var id = $(this).attr('id').split('_')[2];
		var resource_clone = $('#resource_0_0').clone(true).attr('id', 'resource_' + id + '_' + resource_id);
		resource_clone.appendTo('#resources_' + id).show();
	});
	$('.res_header_button').on('click', function(){
		header_id++;
		var id = $(this).attr('id').split('_')[3];
		var header_clone = $('#header_0_0_0').clone(true).attr('id', 'header_' + id + '_' + resource_id + '_' + header_id );
		console.log(header_clone);
		header_clone.appendTo('#headers_' + id).show();
	});
	$('.res_code_button').on('click', function(){
		code_id++;
		var id = $(this).attr('id').split('_')[3];
		var code_clone = $('#code_0_0_0').clone(true).attr('id', 'code_' + id + '_' + resource_id + '_' + code_id );
		code_clone.appendTo('#codes_' + id).show();
	});
	$('.res_resp_button').on('click', function(){
		reponse_id++;
		var id = $(this).attr('id').split('_')[3];
		var response_clone = $('#response_0_0_0').clone(true).attr('id', 'response_' + id + '_' + resource_id + '_' + reponse_id );
		response_clone.appendTo('#response_' + id).show();
	});
	$('.section_resource_button').on('click', function(){
		var id = $(this).attr('id').split('_')[3];
		$('#resource_area_' + id).show();
		$(this).hide();
	});
})