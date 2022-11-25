<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>주소로 장소 표시하기</title>
    
</head>
<body>
<p style="margin-top:-12px">
</p>
<div id="map" style="width:100%;height:350px;"></div>
</body>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=091143d21933d5f540a9255827785526&libraries=services"></script>
<script type="text/javascript" src="assets/js/jquery/jquery.min.js"></script>
<script>
    var mapContainer = document.getElementById('map');
var mapOption = {
    center: new daum.maps.LatLng(35.1465533, 126.9222613),
    level: 5
};  

var map = new daum.maps.Map(mapContainer, mapOption); 

var geocoder = new daum.maps.services.Geocoder();
var listData = [
    '광주광역시 동구 제봉로 210(대인동)',
    '광주광역시 동구 남문로 535(용산동)',
    '광주광역시 동구 밤실로30번길 16(지산동)',
    '광주광역시 서구 화운로 197(화정동)',
    '광주광역시 서구 염화로 77(화정동)',
    '광주광역시 서구 운천로 112(쌍촌동)',
    '광주광역시 서구 치평로 65(치평동)',
    '광주광역시 서구 회재로 907(금호동)',
    '광주광역시 남구 송암로58번길 13(송하동)',
    '광주광역시 남구 수박등로 1(월산동)',
    '광주광역시 남구 오방로 63(방림동)',
    '광주광역시 북구 서하로 290(오치동)',
    '광주광역시 북구 서림로 5(임동)',
    '광주광역시 북구 동문대로 127(우산동)',
    '광주광역시 북구 설죽로 529(일곡동)',
    '광주광역시 북구 삼정로 5(두암동)',
    '광주광역시 북구 북문대로 202(동림동)',
    '광주광역시 광산구 하남산단1번로 13(하남동)',
    '광주광역시 광산구 상무대로 93-1(도산동)',
    '광주광역시 광산구 우산로 85번길 12-5(우산동)',
    '광주광역시 광산구 비아로12번길 10(비아동)',
    '광주광역시 광산구 수등로 236(신가동)',
    '광주광역시 광산구 임방울대로825번길 16(쌍암동)',
    '광주광역시 광산구 월전로 59(월전동)'
];

listData.forEach(function(addr, index) {
    geocoder.addressSearch(addr, function(result, status) {
        if (status === daum.maps.services.Status.OK) {
            var coords = new daum.maps.LatLng(result[0].y, result[0].x);

            var marker = new daum.maps.Marker({
                map: map,
                position: coords
            });
            var infowindow = new daum.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">' + listData[index] + '</div>',
                disableAutoPan: true
            });
            kakao.maps.event.addListener(marker, 'mouseover', function() {
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                infowindow.open(map, marker);
            });
            // 마커에 마우스아웃 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                infowindow.close();
            });
        } 
    });
});


</script>
</html>