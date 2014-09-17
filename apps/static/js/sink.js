function initialize()
{

//style section

var styles = 
[{
	"featureType": "administrative.locality",
	"elementType": "labels",
	"stylers": [
	{ "visibility": "off" },
	{ "hue": "#00fff7" }
	]
}
]

var styledMap = new google.maps.StyledMapType(styles,
	{name: "Styled Map"});


var mapOptions = {
	zoom: 11,
	center: new google.maps.LatLng(37.5467284,126.9861168),
	mapTypeControlOptions:
	{
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
	}
};

var map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);

map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');

var sinkholesCoords = [];


$.getJSON('static/json/sinkhole.json', function(result){
	$.each(result.features[0].geometry.coordinates[0], function(){
		sinkholesCoords.push(new google.maps.LatLng(this[0], this[1]));
	});

	$.each(sinkholesCoords, function(index, value){
		var marker = new google.maps.Marker({
			position: sinkholesCoords[index],
			title:"Hello World!"
		});
		marker.setMap(map);	
	});
});
// To add the marker to the map, call setMap();


//강동구
var gangdongpolygon;

var gangdongguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[0].geometry.coordinates[0], function() {
	// console.log(index+':'+value);
	gangdongguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	gangdongpolygon = new google.maps.Polygon(
	{
		paths: gangdongguCoords,
		strokeColor: "#006699",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#006699",
		fillOpacity: 0.35
	});

	gangdongpolygon.setMap(map);
});
//송파구
var songpapolygon;

var songpaguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[1].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	songpaguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	songpapolygon = new google.maps.Polygon(
	{
		paths: songpaguCoords,
		strokeColor: "#660066",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#660066",
		fillOpacity: 0.35
	});

	songpapolygon.setMap(map);
});
//강남구

var gangnampolygon;

var gangnamguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[2].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	gangnamguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	gangnampolygon = new google.maps.Polygon(
	{
		paths: gangnamguCoords,
		strokeColor: "#99CC00",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#99CC00",
		fillOpacity: 0.35
	});

	gangnampolygon.setMap(map);
});
//서초구

var seochopolygon;

var seochoguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[3].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	seochoguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	seochopolygon = new google.maps.Polygon(
	{
		paths: seochoguCoords,
		strokeColor: "#CC3333",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#CC3333",
		fillOpacity: 0.35
	});

	seochopolygon.setMap(map);
});
//관악
var Gwanakpolygon;

var GwanakguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[4].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	GwanakguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Gwanakpolygon = new google.maps.Polygon(
	{
		paths: GwanakguCoords,
		strokeColor: "#CC00FF",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#CC00FF",
		fillOpacity: 0.35
	});

	Gwanakpolygon.setMap(map);
});
//동작
var Dongjakpolygon;

var DongjakguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[5].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	DongjakguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Dongjakpolygon = new google.maps.Polygon(
	{
		paths: DongjakguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Dongjakpolygon.setMap(map);
});
//영등포
var Yeongdeungpopolygon;

var YeongdeungpoguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[6].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	YeongdeungpoguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Yeongdeungpopolygon = new google.maps.Polygon(
	{
		paths: YeongdeungpoguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Yeongdeungpopolygon.setMap(map);
});
//금천
var Geumchunpolygon;

var GeumchunguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[7].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	GeumchunguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Geumchunpolygon = new google.maps.Polygon(
	{
		paths: GeumchunguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Geumchunpolygon.setMap(map);
});
//구로
var Guropolygon;

var GuroguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[8].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	GuroguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Guropolygon = new google.maps.Polygon(
	{
		paths: GuroguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Guropolygon.setMap(map);
});
//강서
var Gangseopolygon;

var GangseoguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[9].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	GangseoguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Gangseopolygon = new google.maps.Polygon(
	{
		paths: GangseoguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Gangseopolygon.setMap(map);
});
//양천
var Yangchunpolygon;

var YangchunguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[10].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	YangchunguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Yangchunpolygon = new google.maps.Polygon(
	{
		paths: YangchunguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Yangchunpolygon.setMap(map);
});
//마포
var Mapopolygon;

var MapoguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[11].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	MapoguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Mapopolygon = new google.maps.Polygon(
	{
		paths: MapoguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Mapopolygon.setMap(map);
});
//서대문
var Seodaemoonpolygon;

var SeodaemoonguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[12].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	SeodaemoonguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Seodaemoonpolygon = new google.maps.Polygon(
	{
		paths: SeodaemoonguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Seodaemoonpolygon.setMap(map);
});
//은평
var Eunpyungpolygon;

var EunpyungguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[13].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	EunpyungguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Eunpyungpolygon = new google.maps.Polygon(
	{
		paths: EunpyungguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Eunpyungpolygon.setMap(map);
});
//노원
var Noonepolygon;

var NooneguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[14].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	NooneguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Noonepolygon = new google.maps.Polygon(
	{
		paths: NooneguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Noonepolygon.setMap(map);
});
//도봉
var Dobongpolygon;

var DobongguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[15].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	DobongguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Dobongpolygon = new google.maps.Polygon(
	{
		paths: DobongguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Dobongpolygon.setMap(map);
});
//강북
var Gangbukpolygon;

var GangbukguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[16].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	GangbukguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Gangbukpolygon = new google.maps.Polygon(
	{
		paths: GangbukguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Gangbukpolygon.setMap(map);
});
//성북
var Sungbukpolygon;

var SungbukguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[17].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	SungbukguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Sungbukpolygon = new google.maps.Polygon(
	{
		paths: SungbukguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Sungbukpolygon.setMap(map);
});
//중랑
var Jungrangpolygon;

var JungrangguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[18].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	JungrangguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Jungrangpolygon = new google.maps.Polygon(
	{
		paths: JungrangguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Jungrangpolygon.setMap(map);
});
//동대문
var Dongdaemmonpolygon;

var DongdaemmonguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[19].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	DongdaemmonguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Dongdaemmonpolygon = new google.maps.Polygon(
	{
		paths: DongdaemmonguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Dongdaemmonpolygon.setMap(map);
});
//광진
var Gwangjinpolygon;

var GwangjinguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[20].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	GwangjinguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Gwangjinpolygon = new google.maps.Polygon(
	{
		paths: GwangjinguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Gwangjinpolygon.setMap(map);
});
//성동
var Sungdongpolygon;

var SungdongguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[21].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	SungdongguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Sungdongpolygon = new google.maps.Polygon(
	{
		paths: SungdongguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Sungdongpolygon.setMap(map);
});
//용산
var Yongsanpolygon;

var YongsanguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[22].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	YongsanguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Yongsanpolygon = new google.maps.Polygon(
	{
		paths: YongsanguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Yongsanpolygon.setMap(map);
});
//중구
var Jungpolygon;

var JungguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[23].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	JungguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Jungpolygon = new google.maps.Polygon(
	{
		paths: JungguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Jungpolygon.setMap(map);
});
//종로
var Jongropolygon;

var JongroguCoords = [];
$.getJSON('static/json/seoul.json', function(result) {
	// console.log(result.features[0].geometry.coordinates[0][0]);

	$.each(result.features[24].geometry.coordinates[0], function(index, value) {
	// console.log(index+':'+value);
	JongroguCoords.push(new google.maps.LatLng(this[1], this[0]));

});
	Jongropolygon = new google.maps.Polygon(
	{
		paths: JongroguCoords,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});

	Jongropolygon.setMap(map);
});


};
google.maps.event.addDomListener(window, 'load', initialize);