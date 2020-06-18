// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//$('#DOJ, #DOR, #FromDate, #ToDate').datetimepicker({
//	//debug: true,
//	format: 'YYYY-MM-DD',
//	//daysOfWeekDisabled: [1, 2, 3, 4, 5],
//});

//add padding to the top for scrolling
//$(window).on('scroll', function () {
//	if ($(".navbar").hasClass("is-sticky")) {
//		$('.scroll-padding').css({ "padding-top": "150px" });
//	} else {
//		$('.scroll-padding').css({ "padding-top": "0" });
//	}
//});
$('#BuildYear, #RecentInnovation, #BuildYearDiv, #RecentInnovationDiv').datetimepicker({
	//viewMode: 'years',
	format: 'YYYY/MM/DD',
	//debug: true,
});
function userCheck(check) {
	if (check == 0) {
		return confirm("Are your sure want to approve the user as background details checked?");
	}
	else if (check == 1) {
		return confirm("Are your sure want to recheck the user as background details?");
	}
}
$(document).ready(function () {
	$('.v2,.v3').addClass('d-none');
	$("#cartBtn-1, #cartBtn-2, #cartBtn-3").click(function () {
		var sec = $(this).attr('cart-section');
		//console.log(sec);
		$('html, body').animate({
			scrollTop: $("#card-" + sec).offset().top - 50
		}, 1000);
	});
	$('body').on('click', '#f-common', function () {
		$('.modal').animate({
			scrollTop: $("#custom-section__f").offset().top
		}, 1000);
	})
	$('body').on('click', '#f_custom', function () {
		$('.modal').animate({
			scrollTop: '0px'
		}, 1000);
	})
	$('body').on('click', '#a-common', function () {
		$('.modal').animate({
			scrollTop: $("#custom-section__a").offset().top
		}, 1000);
	})
	$('body').on('click', '#a_custom', function () {
		$('.modal').animate({
			scrollTop: '0px'
		}, 1000);
	})



	//$('#datetimepicker-01, #datetimepicker-02, #RecentInnovation,#datetimepicker-recent-cw, #BuildYear,#datetimepicker-builtyear-cw').datetimepicker({
	//	format: 'L'
	//});
	//$('#datetimepicker-03, #datetimepicker-04').datetimepicker({
	//	format: 'LT'
	//});

	$('#example').DataTable();

	//$('#example tbody').on('click', 'tr', function () {
	//	var data = table.row(this).data();
	//	alert('You clicked on ' + data[0] + '\'s row');
	//});
	//tab navigation section
	if ($('.hi-tab .active.show').attr('data-id')) {
		$('.tab-back-btn, .tab-submit').css('display', 'none');
	}

	//filter selection
	$('#filter-type').on('change', function () {
		var value = $(this).val();
		//alert(value)
		if (value == "Commercial") {
			$('.v2,.v3').addClass('d-none');
			$('.v1,.price_range').removeClass('d-none');
		}
		else if (value == "Co-working") {
			$('.v1,.v3').addClass('d-none');
			$('.v2,.price_range').removeClass('d-none');
		}
		else if (value == "RE-Professionals") {
			$('.v1,.v2,.price_range').addClass('d-none');
			$('.v3').removeClass('d-none');
		}
	});

	//edit section on listing form 
	if ($('#ListingType').val() == "Commercial") {
		$('.form-type').removeClass('type-2');
		$('.form-type').removeClass('type-3');
		$('.form-type').addClass('type-1');
		$('.type-2__input, .type-3, .type-style.type-2, .type-style.type-3, .type-2-sub__input').addClass('d-none');
		$('.type-1__input, .type-style.type-1, .form-type.type-1, .input-occupancy').removeClass('d-none');
	} else if ($('#ListingType').val() == "Co-Working") {
		//alert($('#ListingType').val())
		$('.form-type').removeClass('type-1');
		$('.form-type').removeClass('type-3');
		$('.form-type').addClass('type-2');
		$('.type-1__input, .type-3, .type-style.type-1, .type-style.type-3').addClass('d-none');
		$('.type-2__input, .type-style.type-2, .form-type.type-2, .type-2-sub__input, .input-occupancy').removeClass('d-none');

		if ($('#CoworkingType').val() == "Office") {
			//alert($('#CoworkingType').val())
			$('.type-2-sub__input, .input-occupancy').removeClass('d-none');

			if ($('#CW_Coworking').val() != "") {
				//console.log($('#CW_Coworking').parents().closest('.check-view').html())
				$('#CW_Coworking').parents().closest('.check-view').removeClass('d-none');
				$('#CW_Coworking').parents().closest('.check-view').siblings('.checkbox').find('input').attr('checked', true);
			}
			if ($('#CW_PrivateOffice').val() != "") {
				$('#CW_PrivateOffice').parents().closest('.check-view').removeClass('d-none');
				$('#CW_PrivateOffice').parents().closest('.check-view').siblings('.checkbox').find('input').attr('checked', true);
			}
			if ($('#CW_MeetingRoom').val() != "") {
				$('#CW_MeetingRoom').parents().closest('.check-view').removeClass('d-none');
				$('#CW_MeetingRoom').parents().closest('.check-view').siblings('.checkbox').find('input').attr('checked', true);
			}
		} else if ($('#CoworkingType').val() == "Cafe") {
			//alert($('#CoworkingType').val())
			$('.type-2-sub__input, .input-occupancy').addClass('d-none');
		}
		
		


	} else if ($('#ListingType').val() == "RE-Professional") {
		$('.type-3').removeClass('d-none');
		$('.form-type.type-1, .form-type.type-2, .type-style.type-1, .type-style.type-2').addClass('d-none');
	}


	//type selection
	$('#ListingType').on('change', function () {
		var value = $(this).val();
		var coWorkingValue = $('#CoworkingType').val();
		//alert(value)
		//if (coWorkingValue == "Cafe") {
		//	$('.type-2-sub__input').addClass('d-none');
		//}
		//else if (coWorkingValue == "Office") {
		//	$('.type-2-sub__input').removeClass('d-none');
		//}
		if (value == "Commercial") {
			$('.form-type').removeClass('type-2');
			$('.form-type').removeClass('type-3');
			$('.form-type').addClass('type-1');
			$('.type-2__input, .type-3, .type-style.type-2, .type-style.type-3, .type-2-sub__input').addClass('d-none');
			$('.type-1__input, .type-style.type-1, .form-type.type-1, .input-occupancy').removeClass('d-none');
		}
		else if (value == "Co-Working") {
			$('.form-type').removeClass('type-1');
			$('.form-type').removeClass('type-3');
			$('.form-type').addClass('type-2');
			$('.type-1__input, .type-3, .type-style.type-1, .type-style.type-3').addClass('d-none');
			$('.type-2__input, .type-style.type-2, .form-type.type-2, .type-2-sub__input, .input-occupancy').removeClass('d-none');
		}
		else if (value == "RE-Professional") {
			$('.type-3').removeClass('d-none');
			$('.form-type.type-1, .form-type.type-2, .type-style.type-1, .type-style.type-2').addClass('d-none');
		}
	});

	$('#CoworkingType').on('change', function () {
		var value = $(this).val();
		//alert(value)
		if (value == "Office") {
			$('.type-2-sub__input, .input-occupancy').removeClass('d-none');
		}
		else if (value == "Cafe") {
			$('.type-2-sub__input, .input-occupancy').addClass('d-none');
		}
	});
	//checkbox conditon to show
	$('.type-2-sub input[type="checkbox"]').click(function () {
		if ($(this).prop("checked") == true) {
			//console.log("Checkbox is checked.");
			$(this).parent().parent().siblings('.check-view').removeClass('d-none');
		}
		else if ($(this).prop("checked") == false) {
			//console.log("Checkbox is unchecked.");
			$(this).parent().parent().siblings('.check-view').addClass('d-none');
		}
	});
	//amenities section price
	$(document).on('change', '.am-option', function () {
		var value = $(this).val();
		//alert(value)
		if (value == "Free") {
			$(this).closest('.amenities-upload__row').children('.am-price, .am-partial').addClass('d-none');
		}
		else if (value == "Paid") {
			//$('.am-price').removeClass('d-none');
			//$('.am-partial').addClass('d-none');
			$(this).closest('.amenities-upload__row').children('.am-price').removeClass('d-none');
			$(this).closest('.amenities-upload__row').children('.am-partial').addClass('d-none');
		}
		else if (value == "PartiallyPaid") {
			//$('.am-partial').removeClass('d-none');
			//$('.am-price, .am-price').addClass('d-none');
			$(this).closest('.amenities-upload__row').children('.am-partial').removeClass('d-none');
			$(this).closest('.amenities-upload__row').children('.am-price').removeClass('d-none');
		}
	});
	
	

});

////map section
//// Initialize and add the map
//function initMapLatLon() {
//	// The location of Uluru
//	var uluru = { lat: -25.344, lng: 131.036 };
//	// The map, centered at Uluru
//	var map = new google.maps.Map(
//		document.getElementById('map'), { zoom: 4, center: uluru });
//	console.log(map);
//	// The marker, positioned at Uluru
//	var marker = new google.maps.Marker({ position: uluru, map: map });
//}
//initMapLatLon();

/*********tab navigation section start*********/

//on focus input
$('.required-input').focus(function () {
	$(this).parents('.form-group').siblings('.hi-error').addClass('d-none');
});

//on blur input
$('.required-input').blur(function () {
	if ($(this).val() == "") {
		$(this).parents('.form-group').siblings('.hi-error').removeClass('d-none');
	}
});

function tabNavigation(nav) {
	var tabLength = parseInt($('.hi-tab').find('.nav-link').length);
	var currentTab = parseInt($('.hi-tab .active').attr('data-id'));

	//disable the back btn on first tab
	//if (currentTab == 2) {
	//	//alert('a')
	//	$('.tab-back-btn').css('display', 'none');
	//}
	//else {
	//	$('.tab-next-btn').css('display', 'inline-block');
	//	$('.tab-submit').css('display', 'none');
	//}

	//click back button
	if (nav == 0) {
		$("[data-id='" + (currentTab - 1) + "']").click();
	}
	//click next button
	else if (nav == 1) {
		checkRequiredInput(currentTab);

		//to show submit button on the last tab
		if ((currentTab) == (tabLength - 1)) {
			//alert('a')
			$('.tab-next-btn').css('display', 'none');
			$('.tab-submit').css('display', 'inline-block');
		}
	}
	//click submit button
	else if (nav == 2) {
		//event.preventDefault();
		if ($('input:visible').hasClass('required-input')) {
			//each condition to find the empty inputs
			$('.required-input:visible').each(function (i) {
				if ($(this).val() == "") {
					$(this).parents('.form-group').siblings('.hi-error').removeClass('d-none');
					event.preventDefault();
				}
			});
		}
	}
};

function checkRequiredInput(currentTab) {
	var dataId = $("[data-id='" + (currentTab + 1) + "']");
	//check required class in input
	if ($('input:visible').hasClass('required-input')) {
		//each condition to find the empty inputs
		$('.required-input:visible').each(function (i) {
			if ($(this).val() == "") {
				$(this).parents('.form-group').siblings('.hi-error').removeClass('d-none');
			}
			else {
				$('.tab-back-btn').css('display', 'inline-block');
				dataId.click();
				dataId.removeClass('pointer-event-none');
				dataId.parents('.nav-item').removeClass('cursor-no-drop');
			}
		});
	}
	else {
		$('.tab-back-btn').css('display', 'inline-block');
		dataId.click();
		dataId.removeClass('pointer-event-none');
		dataId.parents('.nav-item').removeClass('cursor-no-drop');
	}
};

$('.hi-tab .nav-link').on('click', function () {
	var tabLength = parseInt($('.hi-tab').find('.nav-link').length);
	var currentTab = parseInt($(this).attr('data-id'));
	if (currentTab == 1) {
		$('.tab-back-btn').css('display', 'none');
		$('.tab-next-btn').css('display', 'inline-block');
		$('.tab-submit').css('display', 'none');
	}
	else if (currentTab == tabLength) {
		$('.tab-back-btn').css('display', 'inline-block');
		$('.tab-next-btn').css('display', 'none');
		$('.tab-submit').css('display', 'inline-block');
	}
	else {
		$('.tab-back-btn').css('display', 'inline-block');
		$('.tab-next-btn').css('display', 'inline-block');
		$('.tab-submit').css('display', 'none');
	}
});

//***********************user section end****************************//

//$('input[name="workingHours.Is24"]').click(function () {
$('body').on('click', 'input[name="WorkingHours.Is24"]', function () {
	//alert('a');
	//$('input[name="AllTimeCheck"], input[name="MonToFriCheck"], input[name="MonToSatCheck"], input[name="CustomCheck"]').click(function () {
	//console.log($('#AllTimeCheck option:selected').text());
	$('#AllTimeCheck').val("false");
	$('#MonToFriCheck').val("false");
	$('#MonToSatCheck').val("false");
	$('#CustomCheck').val("false");
	if ($(this).prop("checked")) {
		$(this).siblings('select').val("true");
		//console.log($('#AllTimeCheck option:selected').text());
	}

	//alert($(this).attr('radio-attr'))
	$('.form-radio label').removeClass('radio-active');
	$(this).parents('label').addClass('radio-active');
	if ($(this).attr('radio-attr') == "24/7") {
		$('.sch-custom, .sch-weekdays, .sch-weeksaturday').addClass('cursor-no-drop');
		$('.sch-custom > div, .sch-weekdays > div, .sch-weeksaturday > div').addClass('pointer-event-none');
	}
	else if ($(this).attr('radio-attr') == "weekdays") {
		$('.sch-weekdays').removeClass('cursor-no-drop');
		$('.sch-weekdays > div').removeClass('pointer-event-none');

		$('.sch-custom, .sch-weeksaturday').addClass('cursor-no-drop');
		$('.sch-custom > div, .sch-weeksaturday > div').addClass('pointer-event-none');
	}
	else if ($(this).attr('radio-attr') == "weeksaturday") {
		$('.sch-weeksaturday').removeClass('cursor-no-drop');
		$('.sch-weeksaturday > div').removeClass('pointer-event-none');

		$('.sch-custom, .sch-weekdays').addClass('cursor-no-drop');
		$('.sch-custom > div, .sch-weekdays > div').addClass('pointer-event-none');
	}
	else if ($(this).attr('radio-attr') == "custom") {
		$('.sch-custom').removeClass('cursor-no-drop');
		$('.sch-custom > div').removeClass('pointer-event-none');

		$('.sch-weekdays, .sch-weeksaturday').addClass('cursor-no-drop');
		$('.sch-weekdays > div, .sch-weeksaturday > div').addClass('pointer-event-none');
	}
});

$('body').on('click', '.sch-status', function () {
	if ($(this).prop("checked") == true) {
		$(this).parents('.sch-checkbox').siblings('.sch-time').css('display', 'block');
		$(this).siblings('strong').html('Open');
	}
	else if ($(this).prop("checked") == false) {
		$(this).parents('.sch-checkbox').siblings('.sch-time').css('display', 'none');
		$(this).siblings('strong').html('Closed');
	}
});
//schedular section end

$(function () {

	//model open for the login section
	$('body').on('click', '.modal-link__login', function (e) {
		e.preventDefault();

		$("#modal-container__login").remove();

		$.get($(this).data("targeturl"), function (data) {

			$('<div id="modal-container__login" class="modal login fade modal-try" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">' +
				'<div id="modalbody" class="modal-dialog modal-content" role="document"' +
				data + '</div></div>').modal();

		});

	});

	//model open for the signup section
	$('body').on('click', '.modal-link__signup', function (e) {
		e.preventDefault();

		$("#modal-container__signup").remove();

		$.get($(this).data("targeturl"), function (data) {

			$('<div id="modal-container__signup" class="modal signup fade modal-try" tabindex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">' +
				'<div id="modalbody" class="modal-dialog modal-content" role="document"' +
				data + '</div></div>').modal();

		});
	});

	//model open for the list image section
	$('body').on('click', '.modal-link__image', function (e) {
		e.preventDefault();

		$("#modal-container__image").remove();

		$.get($(this).data("targeturl"), function (data) {

			$('<div id="modal-container__image" class="modal image fade modal-try" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">' +
				'<div id="modalbody" class="modal-dialog modal-lg modal-content" role="document"' +
				data + '</div></div>').modal();

		});
	});

	//model open for the list hours section
	$('body').on('click', '.modal-link__hours', function (e) {
		e.preventDefault();

		$("#modal-container__hours").remove();

		$.get($(this).data("targeturl"), function (data) {

			$('<div id="modal-container__hours" class="modal hours fade modal-try" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">' +
				'<div id="modalbody" class="modal-dialog modal-lg modal-content" role="document"' +
				data + '</div></div>').modal();

		});
		setTimeout(function () {
			//console.log($('#AllTimeCheck').html())
			//console.log($('#MonToFriCheck option:selected').val())
			//console.log($('#MonToSatCheck option:selected').val())
			//console.log($('#CustomCheck option:selected').val())
			if ($('#AllTimeCheck option:selected').text() == "True") {
				$('#AllTimeCheck').parents('label').find('[type=radio]').prop("checked", true);
				$('#AllTimeCheck').parents('label').addClass('radio-active');
			}
			else if ($('#MonToFriCheck option:selected').text() == "True") {
				$('#MonToFriCheck').parents('label').find('[type=radio]').prop("checked", true);
				$('#MonToFriCheck').parents('.radio').siblings().removeClass('cursor-no-drop');
				$('#MonToFriCheck').parents('.radio').siblings().children().removeClass('pointer-event-none');
				$('#MonToFriCheck').parents('.radio').siblings().find('input').prop("checked", true);
				$('#MonToFriCheck').parents('.radio').siblings().find('input').parents('.sch-checkbox').siblings('.sch-time').css('display', 'block');
				$('#MonToFriCheck').parents('.radio').siblings().find('input').siblings('strong').html('Open');
				$('#MonToFriCheck').parents('label').addClass('radio-active');
			}
			else if ($('#MonToSatCheck option:selected').text() == "True") {
				$('#MonToSatCheck').parents('label').find('[type=radio]').prop("checked", true);
				$('#MonToSatCheck').parents('.radio').siblings().removeClass('cursor-no-drop');
				$('#MonToSatCheck').parents('.radio').siblings().children().removeClass('pointer-event-none');
				$('#MonToSatCheck').parents('.radio').siblings().find('input').prop("checked", true);
				$('#MonToSatCheck').parents('.radio').siblings().find('input').parents('.sch-checkbox').siblings('.sch-time').css('display', 'block');
				$('#MonToSatCheck').parents('.radio').siblings().find('input').siblings('strong').html('Open');
				$('#MonToSatCheck').parents('label').addClass('radio-active');
			}
			else if ($('#CustomCheck option:selected').text() == "True") {
				$('#CustomCheck').parents('label').find('[type=radio]').prop("checked", true);
				$('#CustomCheck').parents('.radio').siblings().removeClass('cursor-no-drop');
				$('#CustomCheck').parents('.radio').siblings().children().removeClass('pointer-event-none');
				$('#CustomCheck').parents('.radio').siblings().find('input').prop("checked", true);
				$('#CustomCheck').parents('.radio').siblings().find('input').parents('.sch-checkbox').siblings('.sch-time').css('display', 'block');
				$('#CustomCheck').parents('.radio').siblings().find('input').siblings('strong').html('Open');
				$('#CustomCheck').parents('label').addClass('radio-active');
			}

			//display view in the scheduler section
			if ($('#Display_view #AllTimeCheck option:selected').text() == "True") {
				$('.sch-2, .sch-3, .sch-4').css('display', 'none');
				$('.sch-1').css('display', 'block');
			}
			else if ($('#Display_view #MonToFriCheck option:selected').text() == "True") {
				$('.sch-1, .sch-3, .sch-4').css('display', 'none');
				$('.sch-2').css('display', 'block');
			}
			else if ($('#Display_view #MonToSatCheck option:selected').text() == "True") {
				$('.sch-1, .sch-2, .sch-4').css('display', 'none');
				$('.sch-3').css('display', 'block');
			}
			else if ($('#Display_view #CustomCheck option:selected').text() == "True") {
				$('.sch-1, .sch-2, .sch-3').css('display', 'none');
				$('.sch-4').css('display', 'block');
			}
		}, 1000);
	});

	//model open for the list project section
	$('body').on('click', '.modal-link__project', function (e) {
		e.preventDefault();

		$("#modal-container__project").remove();

		$.get($(this).data("targeturl"), function (data) {

			$('<div id="modal-container__project" class="modal project fade modal-info" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">' +
				'<div id="modalbody" class="modal-dialog modal-xl modal-content" role="document"' +
				data + '</div></div>').modal();

		});
	});

	//model open for the list amenities section
	$('body').on('click', '.modal-link__amenities', function (e) {
		e.preventDefault();

		$("#modal-container__amenities").remove();

		$.get($(this).data("targeturl"), function (data) {

			$('<div id="modal-container__amenities" class="modal amenities fade modal-try" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">' +
				'<div id="modalbody" class="modal-dialog modal-xl modal-content" role="document"' +
				data + '</div></div>').modal();

		});

	//select type on edit
	setTimeout(function () {
		$('.amenities-upload__row').each(function (e) {
			var valueType = $(this).find('.amenityType').val();
			if (valueType == "Free") {
				$(this).children('.am-price, .am-partial').addClass('d-none');
			}
			else if (valueType == "Paid") {
				$(this).children('.am-price').removeClass('d-none');
				$(this).children('.am-partial').addClass('d-none');
			}
			else if (valueType == "PartiallyPaid") {
				$(this).children('.am-partial').removeClass('d-none');
				$(this).children('.am-price').removeClass('d-none');
			}
		});
	}, 1000);
	});

	//model open for the list facilities section
	$('body').on('click', '.modal-link__facilities', function (e) {
		e.preventDefault();

		$("#modal-container__facilities").remove();

		$.get($(this).data("targeturl"), function (data) {

			$('<div id="modal-container__facilities" class="modal facilities fade modal-sec" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">' +
				'<div id="modalbody" class="modal-dialog modal-lg modal-content" role="document"' +
				data + '</div></div>').modal();

		});
	});

	//model open for the list filter section
	$('body').on('click', '.modal-link__filter', function (e) {
		e.preventDefault();

		$("#modal-container__filter").remove();

		$.get($(this).data("targeturl"), function (data) {

			$('<div id="modal-container__filter" class="modal filter fade modal-sec" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">' +
				'<div id="modalbody" class="modal-dialog modal-lg modal-content" role="document"' +
				data + '</div></div>').modal();

		});
	});

});




////adding image section on partial view
//function AddImageForm() {
//	//alert('a')
//	var listingImageViewModels = [];
//		var formData = new FormData();
//	$(".image-upload__row").each(function () {
//		//debugger
//		var ListingImages = {};
//		var ListingImageViewModel = {};
//		var iStatus; 

//		var iFileUpload = $(this).find('.imageFilePath').get(0);
//		//debugger
//		var iFormFile = iFileUpload.files;
//		//iFormFile.append("image", $(this).find('.imageName').files);
//		var iName = $(this).find('.imageName').val();
//		var iImagePath = $(this).find('.imageFilePath').val();
//		if ($(this).find('.imageCheck').is(':checked')) {
//			iStatus = true;
//		} else {
//			iStatus = false;
//		}

//		ListingImages.Name = iName;
//		ListingImages.ImageUrl = iImagePath;
//		ListingImages.Status = iStatus;

//		ListingImageViewModel.ListingImages = ListingImages;
//		//ListingImageViewModel.File_ImageUrl = formData.append("File_ImageUrl",iFormFile);
//		//ListingImageViewModel.File_ImageUrl = iFormFile;
//		ListingImageViewModel.File_ImageUrl = null;

//		listingImageViewModels.push(ListingImageViewModel);
//		console.log(listingImageViewModels);
//	});

//	$.ajax({
//		type: "POST",
//		url: "/Addons/UploadImage",
//		//data: JSON.stringify(listingImageViewModels),
//		data: { ListingImageViewModels: listingImageViewModels },
//		//dataType: "json",
//		//cache: false,
//		//processData: false,
//		//contentType: false,
//		//contentType: 'multipart/form-data',
//		//processData: false,
//		//contentType: "application/json; charset=utf-8",
//		success: function (response) {
//			alert('yes');
//		},
//		error: function (xhr, ajaxOptions, thrownError) {
//			alert('no');
//		}
//	});
//}
//--------------------------------------------------------------------------------------------------//
//************************************adding image section start************************************//
//--------------------------------------------------------------------------------------------------//
//image upload section start
function addImage(obj) {
	//debugger
	var listingId = $(obj).attr('data-listingid');
	$('.image-upload').append(
		'<div class="row image-upload__row">' +
		'<div class=" col-md-4 col-sm-6 align-self-center">' +
		'<div class="display-none">' +
		'<div class="form-group">' +
		'<input type="text" class="form-control imageId event-none" placeholder="id" value="0">' +
		'<label for="input" class="control-label">Image id</label><i class="bar"></i>' +
		'</div>' +
		'</div>' +
		'<div class="form-group">' +
		'<input type="text" class="form-control imageName" placeholder="Image Name">' +
		'<label for="input" class="control-label">Image Name</label><i class="bar"></i>' +
		'</div>	' +
		'</div>' +
		'<div class=" col-md-4 col-sm-6 align-self-center">' +
		'<div class="form-group">' +
		'<input type="file" class="form-control imageFilePath" accept="image/*">' +
		'<label for="input" class="control-label">Upload Image</label><i class="bar"></i>' +
		'</div>' +
		'</div>' +
		//'<div class="col-md-2 col-sm-6 m-b--15 align-self-center">' +
		//'<div class="checkbox m-0">' +
		//'<label>' +
		//'<input type="checkbox" class="imageCheck" /><i class="helper"></i> Active' +
		//'</label>' +
		//'</div>' +
		//'</div>' +
		'<div class="col-md-4 col-sm-6 align-self-center">' +
		'<span class="addon-add delete-btn tooltip-wrapper text-sec" onclick="AddImageForm(this);" data-listingid=' + listingId + ' data-toggle="tooltip" data-placement="top" title="" data-original-title="submit and upload the file"><i class="fas fa-cloud-upload-alt btn-icon text-sec"></i> Upload</span>' +
		'<span class="addon-edit delete-btn tooltip-wrapper display-none text-info" onclick="EditImageForm(this);" data-listingid=' + listingId + ' data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit the file"><i class="fas fa-edit btn-icon text-info"></i> Edit</span>' +
		'<span class="addon-delete delete-btn tooltip-wrapper text-danger" onclick="deleteRowImage(this)" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to delete the row"><i class="fas fa-trash-alt btn-icon text-danger"></i> Delete</span>' +
		//'<span class="addon-clear delete-btn tooltip-wrapper display-none" onclick="clearRowImage(this)" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to clear"><i class="fas fa-times btn-icon text-pry"></i></span>'+
		'</div>' +
		'</div>'
	);
};
function deleteRowImage(that) {
	$(that).closest('.image-upload__row').remove();
	//console.log($(that).parents().find('.image-upload__row').html());
};
//image upload section end
function AddImageForm(obj) {
	//debugger
	var listingId = $(obj).attr('data-listingid');
	//console.log(listingId)
	var formData = new FormData();
	var row = $(obj).closest('.image-upload__row');
	var iStatus = true;
	var iImageId;
	var files = $(row).find('.imageFilePath').get(0).files;
	var iName = $(row).find('.imageName').val();
	var iImagePath = $(row).find('.imageFilePath').val();
	//if ($(row).find('.imageCheck').is(':checked')) {
	//		iStatus = true;
	//	} else {
	//		iStatus = false;
	//}
	if ($(row).find('.imageId').length) {
		iImageId = $(row).find('.imageId').val();
	} else {
		iImageId = 0;
	}
	formData.append("File_Image", files[0]);
	formData.append("Name", iName);
	formData.append("ImageUrl", iImagePath);
	formData.append("Status", iStatus);
	formData.append("ListingId", listingId);
	formData.append("ListingImagesId", iImageId);

	//var url = '@Url.Action("UploadImage", "Addons")';
	$.ajax({
		type: "POST",
		url: "/Addons/UploadImage",
		data: formData,
		processData: false,
		contentType: false,
		success: function (response) {
			if (response != null) {
				//console.log(response);
				$(row).addClass("addons-row");
				$(row).removeClass("addons-row__edit");
				$(row).find('.imageName').addClass("event-none");
				$(row).find('.imageId').attr("value",response.listingImagesId);
				//$(row).find('.imageFilePath').parent().parent().find('.addon-image__div').remove();
				$(row).find('.imageFilePath').parent().parent().append(
					'<div class="addon-image__div"><a href=' + response.imageUrl +' target="_blank"><img class="addon-image" alt="name" src=' + response.imageUrl +' /></a></div>'
				);
				$(row).find('.imageFilePath').parent().addClass("display-none");
				//$(row).find('.imageCheck').prop("checked", response.status);
				$(obj).siblings('.addon-edit, .addon-delete').removeClass('display-none');
				$(obj).siblings('.addon-delete').attr('onclick', "deleteImage(this," + response.listingImagesId + ")");
				//$(obj).siblings('.addon-clear').addClass('display-none');
				if ($(obj).siblings('.addon-clear').length) {
					$(obj).siblings('.addon-clear').addClass('display-none');
				} else {
					$(obj).parent().append(
						'<span class="addon-clear delete-btn tooltip-wrapper display-none text-pry" onclick="clearRowImage(this,' + response.listingImagesId + ')" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to clear"><i class="fas fa-times btn-icon text-pry"></i> Clear</span>'
					);
				};
				$(obj).addClass('display-none');
			}
		},
		error: function (response) {
			alert("server not ready please upload afterwards");
		}
	});
}

//edit image section
function EditImageForm(obj) {
	var row = $(obj).closest('.image-upload__row');
	$(row).removeClass("addons-row");
	$(row).addClass("addons-row__edit");
	$(row).find('.imageName').removeClass("event-none");
	$(row).find('.imageFilePath').parent().removeClass("display-none");
	$(row).find('.imageFilePath').parent().siblings(".addon-image__div").remove();
	$(row).find('.imageFilePath').parent().css("margin-bottom","0");
	$(obj).siblings('.addon-add, .addon-clear').removeClass('display-none');
	$(obj).siblings('.addon-delete').addClass('display-none');
	$(obj).addClass('display-none');
}

//Reset image section
function clearRowImage(obj, imageId) {
	//console.log(imageId)
	var row = $(obj).closest('.image-upload__row');
	$.ajax({
		type: "GET",
		url: "/Addons/GetImage",
		dataType: "json",
		data: { id: imageId },
		success: function (response) {
			if (response != null) {
				console.log(response);
				$(row).addClass("addons-row");
				$(row).removeClass("addons-row__edit");
				$(row).find('.imageId').attr("value",response.listingImagesId);
				$(row).find('.imageName').addClass("event-none");
				$(row).find('.imageName').val(response.name);
				$(row).find('.imageFilePath').parent().parent().append(
					'<div class="addon-image__div"><a href=' + response.imageUrl +' target="_blank"><img class="addon-image" alt="name" src=' + response.imageUrl + ' /></a></div>'
				);
				$(row).find('.imageFilePath').parent().addClass("display-none");
				//$(row).find('.imageCheck').prop("checked", response.status);
				$(obj).siblings('.addon-edit, .addon-delete').removeClass('display-none');
				$(obj).siblings('.addon-add').addClass('display-none');
				$(obj).addClass('display-none');
			}
		},
		error: function (response) {
			alert(response);
		}
	})
}

//Delete image section
function deleteImage(obj, imageId) {
	var row = $(obj).closest('.image-upload__row');
	if (imageId != 0) {
		$.ajax({
			type: "GET",
			url: "/Addons/DeleteImage",
			dataType: "json",
			data: { id: imageId },
			success: function (response) {
				if (response != null) {
					console.log(response);
					deleteRowImage(obj);
				}
			},
			error: function (response) {
				alert("server not ready please delete afterwards");
			}
		})
	}
	else {
		deleteRowImage(obj);
	}
}
//--------------------------------------------------------------------------------------------------//
//************************************adding image section end**************************************//
//--------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------//
//************************************adding Project section start************************************//
//--------------------------------------------------------------------------------------------------//
//project upload section start
function addProject(obj) {
	var listingId = $(obj).attr('data-listingid');
	$('.project-upload').append(
		'<div class="row project-upload__row">' +
		'<div class="display-none">'+
		'<div class="form-group">'+
		'<input type="text" class="form-control projectId event-none" placeholder="id" value="0">'+
		'<label for="input" class="control-label">Project id</label><i class="bar"></i>'+
		'</div>'+
		'</div>'+
		'<div class=" col-md-2 col-sm-6  align-self-center">' +
		'<div class="form-group">' +
		'<input type="text" class="form-control projectName" placeholder="project Name">' +
		'<label for="input" class="control-label">project Name</label><i class="bar"></i>' +
		'</div>' +
		'</div>' +
		'<div class=" col-md-3 col-sm-6 align-self-center">' +
		'<div class="form-group">' +
		'<input type="file" class="form-control projectImage" accept="project/*">' +
		'<label for="input" class="control-label">Upload project Image</label><i class="bar"></i>' +
		'</div>' +
		'</div>' +
		'<div class=" col-md-3 col-sm-6 align-self-center">' +
		'<div class="form-group">' +
		'<input type="file" class="form-control projectDoucument" accept="project/*">' +
		'<label for="input" class="control-label">Upload project Document</label><i class="bar"></i>' +
		'</div>' +
		'</div>' +
		'<div class=" col-md-2 col-sm-6 align-self-center">' +
		'<div class="form-group">' +
		'<textarea type="text" class="form-control projectDesc" rows="3" placeholder="Enter your text..."></textarea>' +
		'<label for="input" class="control-label">Description</label><i class="bar"></i>' +
		'</div>' +
		'</div>' +
		//'<div class="col-md-1 col-sm-6 m-b--15 align-self-center">' +
		//'<div class="checkbox m-0">' +
		//'<label>' +
		//'<input type="checkbox" /><i class="helper"></i> Active' +
		//'</label>' +
		//'</div>' +
		//'</div>' +
		'<div class="col-md-2 col-sm-6 align-self-center">' +
		'<span class="addon-add delete-btn tooltip-wrapper text-sec" onclick="AddProjectForm(this);" data-listingid=' + listingId + ' data-toggle="tooltip" data-placement="top" title="" data-original-title="submit and upload the file"><i class="fas fa-cloud-upload-alt btn-icon text-sec"></i> Upload</span>' +
		'<span class="addon-edit delete-btn tooltip-wrapper display-none text-info" onclick="EditProjectForm(this);" data-listingid=' + listingId + ' data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit the file"><i class="fas fa-edit btn-icon text-info"></i> Edit</span>' +
		'<span class="addon-delete delete-btn tooltip-wrapper text-danger" onclick="deleteRowProject(this)" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to delete the row"><i class="fas fa-trash-alt btn-icon text-danger"></i> Delete</span>' +
		//'<span class="addon-clear delete-btn tooltip-wrapper display-none" onclick="clearRowImage(this)" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to clear"><i class="fas fa-times btn-icon text-pry"></i></span>'+
		'</div>' +
		'</div>'
	);
}
function deleteRowProject(obj) {
	$(obj).closest('.project-upload__row').remove();
};

//project upload section end
function AddProjectForm(obj) {
	var listingId = $(obj).attr('data-listingid');
	//console.log(listingId)
	var formData = new FormData();
	var row = $(obj).closest('.project-upload__row');
	var pStatus = true;
	var pProjectId;
	var Imagefiles = $(row).find('.projectImage').get(0).files;
	var Documentfiles = $(row).find('.projectDoucument').get(0).files;
	var pName = $(row).find('.projectName').val();
	var pImagePath = $(row).find('.projectImage').val();
	var pDocumentPath = $(row).find('.projectDoucument').val();
	var pDesc = $(row).find('.projectDesc').val();
	if ($(row).find('.projectId').length) {
		pProjectId = $(row).find('.projectId').val();
	} else {
		pProjectId = 0;
	}
	formData.append("File_Image", Imagefiles[0]);
	formData.append("File_Document", Documentfiles[0]);
	formData.append("REProfessionalMasterId", pProjectId);
	formData.append("ListingId", listingId);
	formData.append("ProjectName", pName);
	formData.append("ImageUrl", pImagePath);
	formData.append("DocumentUrl", pDocumentPath);
	formData.append("Status", pStatus);
	formData.append("Description", pDesc);

	//var url = '@Url.Action("UploadImage", "Addons")';
	$.ajax({
		type: "POST",
		url: "/Addons/UploadProject",
		data: formData,
		processData: false,
		contentType: false,
		success: function (response) {
			if (response != null) {
				console.log(response);
				$(row).addClass("addons-row");
				$(row).removeClass("addons-row__edit");
				$(row).find('.projectName').addClass("event-none");
				$(row).find('.projectDesc').addClass("event-none");
				$(row).find('.projectId').val(response.reProfessionalMasterId);
				console.log($(row).find('.projectId').val());
				$(row).find('.projectDesc').html(response.description);
				$(row).find('.projectImage').parent().parent().append(
					'<div class="addon-image__div"><a href=' + response.imageUrl + ' target="_blank"><img class="addon-image" alt="name" src=' + response.imageUrl + ' /></a></div>'
				);
				$(row).find('.projectImage').parent().addClass("display-none");
				$(row).find('.projectDoucument').parent().parent().append(
					'<div class="addon-image__div"><a href=' + response.documentUrl + ' target="_blank"><img class="addon-image" alt="name" src="/images/doc_placeholder.png" />Click to view</a></div>'
				);
				$(row).find('.projectDoucument').parent().addClass("display-none");
				//$(row).find('.imageCheck').prop("checked", response.status);
				$(obj).siblings('.addon-edit, .addon-delete').removeClass('display-none');
				$(obj).siblings('.addon-delete').attr('onclick', "deleteProject(this," + response.reProfessionalMasterId + ")");
				//$(obj).siblings('.addon-clear').addClass('display-none');
				if ($(obj).siblings('.addon-clear').length) {
					$(obj).siblings('.addon-clear').addClass('display-none');
				} else {
					$(obj).parent().append(
						'<span class="addon-clear delete-btn tooltip-wrapper display-none text-pry" onclick="clearRowProject(this,' + response.reProfessionalMasterId + ')" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to clear"><i class="fas fa-times btn-icon text-pry"></i> Clear</span>'
					);
				};
				$(obj).addClass('display-none');
			}
		},
		error: function (response) {
			alert("server not ready please upload afterwards");
		}
	});
}

//edit project section
function EditProjectForm(obj) {
	var row = $(obj).closest('.project-upload__row');
	$(row).removeClass("addons-row");
	$(row).addClass("addons-row__edit");
	$(row).find('.projectName').removeClass("event-none");
	$(row).find('.projectDesc').removeClass("event-none");
	$(row).find('.projectImage').parent().removeClass("display-none");
	$(row).find('.projectDoucument').parent().removeClass("display-none");
	$(row).find('.projectImage').parent().siblings(".addon-image__div").remove();
	$(row).find('.projectDoucument').parent().siblings(".addon-image__div").remove();
	$(row).find('.projectImage').parent().css("margin-bottom", "0");
	$(row).find('.projectDoucument').parent().css("margin-bottom", "0");
	$(obj).siblings('.addon-add, .addon-clear').removeClass('display-none');
	$(obj).siblings('.addon-delete').addClass('display-none');
	$(obj).addClass('display-none');
}

//Reset project section
function clearRowProject(obj, projectId) {
	//console.log(imageId)
	var row = $(obj).closest('.project-upload__row');
	$.ajax({
		type: "GET",
		url: "/Addons/GetProject",
		dataType: "json",
		data: { id: projectId },
		success: function (response) {
			if (response != null) {
				console.log(response);
				$(row).addClass("addons-row");
				$(row).removeClass("addons-row__edit");
				$(row).find('.projectId').val(response.reProfessionalMasterId);
				$(row).find('.projectName').addClass("event-none");
				$(row).find('.projectDesc').addClass("event-none");
				$(row).find('.projectName').val(response.projectName);
				$(row).find('.projectDesc').html(response.description);
				$(row).find('.projectImage').parent().parent().append(
					'<div class="addon-image__div"><a href=' + response.imageUrl + ' target="_blank"><img class="addon-image" alt="name" src=' + response.imageUrl + ' /></a></div>'
				);
				$(row).find('.projectImage').parent().addClass("display-none");
				$(row).find('.projectDoucument').parent().parent().append(
					'<div class="addon-image__div"><a href=' + response.documentUrl + ' target="_blank"><img class="addon-image" alt="name" src="/images/doc_placeholder.png" />Click to view</a></div>'
				);
				$(row).find('.projectDoucument').parent().addClass("display-none");
				//$(row).find('.imageCheck').prop("checked", response.status);
				$(obj).siblings('.addon-edit, .addon-delete').removeClass('display-none');
				$(obj).siblings('.addon-add').addClass('display-none');
				$(obj).addClass('display-none');
			}
		},
		error: function (response) {
			alert(response);
		}
	})
}


//Delete project section
function deleteProject(obj, projectId) {
	var row = $(obj).closest('.project-upload__row');
	if (projectId != 0) {
		$.ajax({
			type: "GET",
			url: "/Addons/DeleteProject",
			dataType: "json",
			data: { id: projectId },
			success: function (response) {
				if (response != null) {
					console.log(response);
					deleteRowProject(obj);
				}
			},
			error: function (response) {
				alert("server not ready please delete afterwards");
			}
		})
	}
	else {
		deleteRowProject(obj);
	}
}
//project upload section end
//--------------------------------------------------------------------------------------------------//
//************************************adding Project section end************************************//
//--------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------//
//************************************adding Amenity section start**********************************//
//--------------------------------------------------------------------------------------------------//

//amenities upload section start
function addAmenities(obj) {
	var listingId = $(obj).attr('data-listingid');
	$('.amenities-upload').append(
		'<div class="row amenities-upload__row ">' +
		'<div class="display-none">'+
		'<div class="form-group">'+
		'<input type="text" class="form-control amenityId" placeholder="00" value="0">'+
		'<label for="input" class="control-label">Amenity Id</label><i class="bar"></i>'+
		'</div>'+
		'</div>' +
		'<div class="display-none">'+
		'<div class="form-group">'+
		'<input type="text" class="form-control amenityMasterId" placeholder="00" value="0">'+
		'<label for="input" class="control-label">Master Id</label><i class="bar"></i>'+
		'</div>'+
		'</div>'+
		'<div class=" col-md-3 col-sm-4">' +
		'<div class="form-group">' +
		'<input type="text" class="form-control amenityName" placeholder="Name">' +
		'<label for="input" class="control-label">Amenity</label><i class="bar"></i>' +
		'</div>' +
		'</div>' +
		'<div class="col-md-2 col-sm-4 col-6 ">' +
		'<div class="form-group">' +
		'<select class="form-control basic-select am-option amenityType" id="">' +
		'<option value="Free">Free</option>' +
		'<option value="Paid">Paid</option>' +
		'<option value="PartiallyPaid">Partially Paid</option>' +
		'</select>' +
		'<label for="" class="control-label">Cost</label>' +
		'<i class="bar"></i>' +
		'</div>' +
		'</div>' +
		'<div class=" am-price col-md-2 col-sm-3 d-none">' +
		'<div class="form-group">' +
		'<input type="number" class="form-control amenityPrice" placeholder="00">' +
		'<label for="input" class="control-label">Price/Usage</label><i class="bar"></i>' +
		'</div>' +
		'</div>' +
		'<div class=" am-partial col-md-2 col-sm-3 d-none">' +
		'<div class="form-group">' +
		'<input type="number" class="form-control amenityCount" placeholder="00">' +
		'<label for="input" class="control-label">Free Count</label><i class="bar"></i>' +
		'</div>' +
		'</div>	' +


		'<div class="col-md-1 col-sm-6 m-b--15 align-self-center">' +
		'<div class="checkbox m-0">' +
		'<label>' +
		'<input type="checkbox" class="amenityStatus" /><i class="helper"></i> Active' +
		'</label>' +
		'</div>' +
		'</div>' +
		'<div class="col-md-2 col-sm-6 align-self-center">' +
		'<span class="addon-add delete-btn tooltip-wrapper text-sec" onclick="AddAmenityForm(this);" data-listingid=' + listingId + ' data-toggle="tooltip" data-placement="top" title="" data-original-title="submit and upload the file"><i class="fas fa-save btn-icon text-sec"></i> Save</span>' +
		'<span class="addon-edit delete-btn tooltip-wrapper display-none text-info" onclick="EditAmenityForm(this);" data-listingid=' + listingId + ' data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit the file"><i class="fas fa-edit btn-icon text-info"></i> Edit</span>' +
		'<span class="addon-delete delete-btn tooltip-wrapper text-danger" onclick="deleteRowAmenities(this)" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to delete the row"><i class="fas fa-trash-alt btn-icon text-danger"></i> Delete</span>' +
		//'<span class="addon-clear delete-btn tooltip-wrapper display-none" onclick="clearRowImage(this)" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to clear"><i class="fas fa-times btn-icon text-pry"></i></span>'+
		'</div>' +
		'</div>'
	);
}
function deleteRowAmenities(that) {
	$(that).closest('.amenities-upload__row').remove();
};

//Amenity upload section end
function AddAmenityForm(obj) {
	var listingId = $(obj).attr('data-listingid');
	//console.log(listingId)
	var formData = new FormData();
	var row = $(obj).closest('.amenities-upload__row');
	if ($(row).find('.amenityStatus').is(':checked')) {
		amenityStatus = true;
	} else {
		amenityStatus = false;
	}
	//console.log(amenityStatus)
	var amenityName = $(row).find('.amenityName').val();
	if ($(row).find('.amenityId').length) {
		amenityId = $(row).find('.amenityId').val();
	} else {
		amenityId = 0;
	}
	if ($(row).find('.amenityMasterId').length) {
		amenityMasterId = $(row).find('.amenityMasterId').val();
	} else {
		amenityMasterId = 0;
	}
	var amenityType = $(row).find('.amenityType').val();
	var amenityPrice = $(row).find('.amenityPrice').val();
	var amenityCount = $(row).find('.amenityCount').val();

	formData.append("AmenityId", amenityId);
	formData.append("ListingId", listingId);
	formData.append("AmenityMasterId", amenityMasterId);
	formData.append("Name", amenityName);
	formData.append("AmenitiesPayment", amenityType);
	formData.append("PartialCount", amenityCount);
	formData.append("Price", amenityPrice);
	formData.append("Status", amenityStatus);
	//console.log(formData);
	// Display the key/value pairs
	//for (var pair of formData.entries()) {
	//	console.log(pair[0] + ', ' + pair[1]);
	//}

	$.ajax({
		type: "POST",
		url: "/Addons/UploadAmenity",
		data: formData,
		processData: false,
		contentType: false,
		success: function (response) {
			if (response != null) {
				console.log(response);
				$(row).addClass("addons-row__light");
				$(row).removeClass("addons-row__edit");
				$(row).find('.amenityName, .amenityType, .amenityCount, .amenityPrice, .amenityStatus').addClass("event-none");

				$(row).find('.amenityId').val(response.amenityId);
				$(row).find('.amenityMasterId').val(response.amenityMasterId);
				$(row).find('.amenityName').val(response.name);
				$(row).find('.amenityStatus').prop("checked", response.status);
				$(row).find('.amenityType').val(response.amenitiesPayment);
				$(row).find('.amenityCount').val(response.partialCount);
				$(row).find('.amenityPrice').val(response.price);

				if ($(obj).siblings('.addon-delete').length) {
					$(obj).siblings('.addon-edit, .addon-delete').removeClass('display-none');
					$(obj).siblings('.addon-delete').attr('onclick', "deleteAmenity(this," + response.amenityId + ")");
				} else {
					$(obj).siblings('.addon-edit').removeClass('display-none');
				}

				if ($(obj).siblings('.addon-clear').length) {
					$(obj).siblings('.addon-clear').addClass('display-none');
				} else {
					$(obj).parent().append(
						'<span class="addon-clear delete-btn tooltip-wrapper display-none text-pry" onclick="clearRowAmenity(this,' + response.amenityId + ')" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to clear"><i class="fas fa-times btn-icon text-pry"></i> Clear</span>'
					);
				};
				$(obj).addClass('display-none');
			}
		},
		error: function (response) {
			alert("server not ready please upload afterwards");
		}
	});
}


//edit amenity section
function EditAmenityForm(obj) {
	var row = $(obj).closest('.amenities-upload__row');
	$(row).removeClass("addons-row__light");
	$(row).addClass("addons-row__edit");
	$(row).find('.amenityName, .amenityType, .amenityCount, .amenityPrice, .amenityStatus').removeClass("event-none");

	$(obj).siblings('.addon-add, .addon-clear').removeClass('display-none');
	$(obj).siblings('.addon-delete').addClass('display-none');
	$(obj).addClass('display-none');
}

//Reset amenity section
function clearRowAmenity(obj, amenityId) {
	//console.log(imageId)
	var row = $(obj).closest('.amenities-upload__row');
	$.ajax({
		type: "GET",
		url: "/Addons/GetAmenity",
		dataType: "json",
		data: { id: amenityId },
		success: function (response) {
			if (response != null) {
				console.log(response);
				$(row).addClass("addons-row__light");
				$(row).removeClass("addons-row__edit");
				$(row).find('.amenityName, .amenityType, .amenityCount, .amenityPrice, .amenityStatus').addClass("event-none");

				$(row).find('.amenityId').val(response.amenityId);
				$(row).find('.amenityMasterId').val(response.amenityMasterId);
				$(row).find('.amenityName').val(response.name);
				$(row).find('.amenityStatus').prop("checked", response.status);
				$(row).find('.amenityType').val(response.amenitiesPayment);
				$(row).find('.amenityCount').val(response.partialCount);
				$(row).find('.amenityPrice').val(response.price);

				if ($(obj).siblings('.addon-delete').length) {
					$(obj).siblings('.addon-edit, .addon-delete').removeClass('display-none');
					$(obj).siblings('.addon-delete').attr('onclick', "deleteAmenity(this," + response.amenityId + ")");
				} else {
					$(obj).siblings('.addon-edit').removeClass('display-none');
				}

				//$(row).find('.imageCheck').prop("checked", response.status);
				$(obj).siblings('.addon-edit, .addon-delete').removeClass('display-none');
				$(obj).siblings('.addon-add').addClass('display-none');
				$(obj).addClass('display-none');
			}
		},
		error: function (response) {
			alert(response);
		}
	})
}

//Delete amenity section
function deleteAmenity(obj, amenityId) {
	var row = $(obj).closest('.amenities-upload__row');
	if (amenityId != 0) {
		$.ajax({
			type: "GET",
			url: "/Addons/DeleteAmenity",
			dataType: "json",
			data: { id: amenityId },
			success: function (response) {
				if (response != null) {
					console.log(response);
					deleteRowAmenities(obj);
				}
			},
			error: function (response) {
				alert("server not ready please delete afterwards");
			}
		})
	}
	else {
		deleteRowAmenities(obj);
	}
}
//amenities upload section end
//--------------------------------------------------------------------------------------------------//
//************************************adding Amenity section end************************************//
//--------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------//
//************************************adding Facility section start************************************//
//--------------------------------------------------------------------------------------------------//
//facilities upload section start
function addFacilities(obj) {
	var listingId = $(obj).attr('data-listingid');
	$('.facilities-upload').append(
		'<div class="row facilities-upload__row">' +
		'<div class="display-none">'+
		'<div class="form-group">'+
		'<input type="text" class="form-control facilityMasterId" placeholder="00" value="0">'+
		'<label for="input" class="control-label">Master Id</label><i class="bar"></i>'+
		'</div>'+
		'</div>'+
		'<div class="display-none">'+
		'<div class="form-group">'+
		'<input type="text" class="form-control facilityId" placeholder="00" value="0">'+
		'<label for="input" class="control-label">Facility Id</label><i class="bar"></i>'+
		'</div>'+
		'</div>'+
		'<div class=" col-md-3 col-sm-4 ">' +
		'<div class="form-group">' +
		'<input type="text" class="form-control facilityName" placeholder="Name">' +
		'<label for="input" class="control-label">Facility</label><i class="bar"></i>' +
		'</div>' +
		'</div>' +
		'<div class="col-lg-3 col-md-3 col-sm-4 col-6 ">' +
		'<div class="form-group">' +
		'<select class="form-control am-option facilityDistance" id="">' +
		'<option value="0 to .5KM">0 to .5KM</option>' +
		'<option value=".5KM to 1KM">.5KM to 1KM</option>' +
		'<option value="1KM to 2KM">1KM to 2KM</option>' +
		'<option value="2KM to 3KM">2KM to 3KM</option>' +
		'<option value="3KM to 4KM">3KM to 4KM</option>' +
		'<option value="4KM to 5KM">4KM to 5KM</option>' +
		'<option value="5KM to 6KM">5KM to 6KM</option>' +
		'<option value="6KM to 7KM">6KM to 7KM</option>' +
		'<option value="7KM to 8KM">7KM to 8KM</option>' +
		'<option value="8KM to 9KM">8KM to 9KM</option>' +
		'<option value="9KM to 10KM">9KM to 10KM</option>' +
		'<option value="Above 10KM">Above 10KM</option>' +
		'</select>' +
		'<label for="" class="control-label">Distance</label>' +
		'<i class="bar"></i>' +
		'</div>' +
		'</div>' +
		'<div class="col-md-2 col-sm-6 m-b--15 align-self-center">' +
		'<div class="checkbox m-0">' +
		'<label>' +
		'<input type="checkbox" class="facilityStatus" /><i class="helper"></i> Active' +
		'</label>' +
		'</div>' +
		'</div>' +
		'<div class="col-md-3 col-sm-6 align-self-center">' +
		'<span class="addon-add delete-btn tooltip-wrapper text-sec" onclick="AddFacilityForm(this);" data-listingid=' + listingId + ' data-toggle="tooltip" data-placement="top" title="" data-original-title="submit and upload the file"><i class="fas fa-save btn-icon text-sec"></i> Save</span>' +
		'<span class="addon-edit delete-btn tooltip-wrapper display-none text-info" onclick="EditFacilityForm(this);" data-listingid=' + listingId + ' data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit the file"><i class="fas fa-edit btn-icon text-info"></i> Edit</span>' +
		'<span class="addon-delete delete-btn tooltip-wrapper text-danger" onclick="deleteRowFacilities(this)" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to delete the row"><i class="fas fa-trash-alt btn-icon text-danger"></i> Delete</span>' +
		//'<span class="addon-clear delete-btn tooltip-wrapper display-none" onclick="clearRowImage(this)" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to clear"><i class="fas fa-times btn-icon text-pry"></i></span>'+
		'</div>' +
		'</div>'
	);
}
function deleteRowFacilities(that) {
	$(that).closest('.facilities-upload__row').remove();
};

//Facility upload section end
function AddFacilityForm(obj) {
	var listingId = $(obj).attr('data-listingid');
	//console.log(listingId)
	var formData = new FormData();
	var row = $(obj).closest('.facilities-upload__row');
	if ($(row).find('.facilityStatus').is(':checked')) {
		facilityStatus = true;
	} else {
		facilityStatus = false;
	}
	var facilityName = $(row).find('.facilityName').val();
	if ($(row).find('.facilityId').length) {
		facilityId = $(row).find('.facilityId').val();
	} else {
		facilityId = 0;
	}
	if ($(row).find('.facilityMasterId').length) {
		facilityMasterId = $(row).find('.facilityMasterId').val();
	} else {
		facilityMasterId = 0;
	}
	var facilityDistance = $(row).find('.facilityDistance').val();

	formData.append("facilityId", facilityId);
	formData.append("ListingId", listingId);
	formData.append("facilityMasterId", facilityMasterId);
	formData.append("Name", facilityName);
	formData.append("facilityDistance", facilityDistance);
	formData.append("Status", facilityStatus);
	//console.log(formData);
	// Display the key/value pairs
	//for (var pair of formData.entries()) {
	//	console.log(pair[0] + ', ' + pair[1]);
	//}

	$.ajax({
		type: "POST",
		url: "/Addons/UploadFacility",
		data: formData,
		processData: false,
		contentType: false,
		success: function (response) {
			if (response != null) {
				console.log(response);
				$(row).addClass("addons-row__light");
				$(row).removeClass("addons-row__edit");
				$(row).find('.facilityName, .facilityDistance, .facilityStatus').addClass("event-none");

				$(row).find('.facilityId').val(response.facilityId);
				$(row).find('.facilityMasterId').val(response.facilityMasterId);
				$(row).find('.facilityName').val(response.name);
				$(row).find('.facilityStatus').prop("checked", response.status);
				$(row).find('.facilityDistance').val(response.facilityDistance);

				if ($(obj).siblings('.addon-delete').length) {
					$(obj).siblings('.addon-edit, .addon-delete').removeClass('display-none');
					$(obj).siblings('.addon-delete').attr('onclick', "deleteFacility(this," + response.facilityId + ")");
				} else {
					$(obj).siblings('.addon-edit').removeClass('display-none');
				}

				if ($(obj).siblings('.addon-clear').length) {
					$(obj).siblings('.addon-clear').addClass('display-none');
				} else {
					$(obj).parent().append(
						'<span class="addon-clear delete-btn tooltip-wrapper display-none text-pry" onclick="clearRowFacility(this,' + response.facilityId + ')" data-toggle="tooltip" data-placement="top" title="" data-original-title="Click to clear"><i class="fas fa-times btn-icon text-pry"></i> Clear</span>'
					);
				};
				$(obj).addClass('display-none');
			}
		},
		error: function (response) {
			alert("server not ready please upload afterwards");
		}
	});
}

//edit facility section
function EditFacilityForm(obj) {
	var row = $(obj).closest('.facilities-upload__row');
	$(row).removeClass("addons-row__light");
	$(row).addClass("addons-row__edit");
	$(row).find('.facilityName, .facilityDistance, .facilityStatus').removeClass("event-none");

	$(obj).siblings('.addon-add, .addon-clear').removeClass('display-none');
	$(obj).siblings('.addon-delete').addClass('display-none');
	$(obj).addClass('display-none');
}

//Reset facility section
function clearRowFacility(obj, facilityId) {
	//console.log(imageId)
	var row = $(obj).closest('.facilities-upload__row');
	$.ajax({
		type: "GET",
		url: "/Addons/GetFacility",
		dataType: "json",
		data: { id: facilityId },
		success: function (response) {
			if (response != null) {
				//console.log(response);
				$(row).addClass("addons-row__light");
				$(row).removeClass("addons-row__edit");
				$(row).find('.facilityName, .facilityDistance, .facilityStatus').addClass("event-none");

				$(row).find('.facilityId').val(response.facilityId);
				$(row).find('.facilityMasterId').val(response.facilityMasterId);
				$(row).find('.facilityName').val(response.name);
				$(row).find('.facilityStatus').prop("checked", response.status);
				$(row).find('.facilityDistance').val(response.facilityDistance);

				if ($(obj).siblings('.addon-delete').length) {
					$(obj).siblings('.addon-edit, .addon-delete').removeClass('display-none');
					$(obj).siblings('.addon-delete').attr('onclick', "deleteFacility(this," + response.facilityId + ")");
				} else {
					$(obj).siblings('.addon-edit').removeClass('display-none');
				}

				$(obj).siblings('.addon-edit, .addon-delete').removeClass('display-none');
				$(obj).siblings('.addon-add').addClass('display-none');
				$(obj).addClass('display-none');
			}
		},
		error: function (response) {
			alert(response);
		}
	})
}

//Delete facility section
function deleteFacility(obj, facilityId) {
	var row = $(obj).closest('.facilities-upload__row');
	if (facilityId != 0) {
		$.ajax({
			type: "GET",
			url: "/Addons/DeleteFacility",
			dataType: "json",
			data: { id: facilityId },
			success: function (response) {
				if (response != null) {
					console.log(response);
					deleteRowFacilities(obj);
				}
			},
			error: function (response) {
				alert("server not ready please delete afterwards");
			}
		})
	}
	else {
		deleteRowFacilities(obj);
	}
}
//facilities upload section end
//--------------------------------------------------------------------------------------------------//
//************************************adding Facility section end************************************//
//--------------------------------------------------------------------------------------------------//