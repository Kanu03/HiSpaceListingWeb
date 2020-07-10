
//Property Location filter
function propertyListByLocation(location) {
	var filterResult = $('#filterResult');
	$.ajax({
		type: "GET",
		url: "/Filter/PropertyListByLocation",
		data: { Location: location },
		dataType: "html",
		success: function (response) {
			console.log(response);
			$('#filterResult').html('');
			$('#filterResult').html(response);
		},
		error: function (response) {
			alert("server not ready please try afterwards");
		}
	});
}
//Property Type filter
function propertyListByType(type) {
	var filterResult = $('#filterResult');
	$.ajax({
		type: "GET",
		url: "/Filter/PropertyListByType",
		data: { Type: type },
		dataType: "html",
		success: function (response) {
			console.log(response);
			$('#filterResult').html('');
			$('#filterResult').html(response);
		},
		error: function (response) {
			alert("server not ready please try afterwards");
		}
	});
}
//Property User filter
function propertyListByUser(user) {
	var filterResult = $('#filterResult');
	$.ajax({
		type: "GET",
		url: "/Filter/PropertyListByUser",
		data: { User: user },
		dataType: "html",
		success: function (response) {
			console.log(response);
			$('#filterResult').html('');
			$('#filterResult').html(response);
		},
		error: function (response) {
			alert("server not ready please try afterwards");
		}
	});
}