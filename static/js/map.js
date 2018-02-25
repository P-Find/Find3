﻿$(document).ready(function () {

    // initMap() - функция инициализации карты
    function initMap() {
        var pos, start_point;
        var map = new google.maps.Map(document.getElementById("map"), { zoom: 17 });

        var directionsDisplay = new google.maps.DirectionsRenderer();
        var directionsService = new google.maps.DirectionsService();
        directionsDisplay.setMap(map);
        directionsDisplay.setOptions({ suppressMarkers: true, suppressInfoWindows: true });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                pos = { lat: position.coords.latitude, lng: position.coords.longitude };

                map.setCenter(pos);


                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                start_point1 = new google.maps.LatLng(pos);
                var point1 = new google.maps.LatLng(40.198727, 44.493780);//40.198727, 44.493780
                var point2 = new google.maps.LatLng(40.193936, 44.490555);//40.193936, 44.490555
                var point3 = new google.maps.LatLng(40.193674, 44.498451);//40.193674, 44.498451
                var point4 = new google.maps.LatLng(40.204425, 44.500855);//40.204425, 44.500855
                var point5 = new google.maps.LatLng(40.186140, 44.512799);//40.186140, 44.512799
                var point6 = new google.maps.LatLng(40.185142, 44.512082);//40.185142, 44.512082
                var point7 = new google.maps.LatLng(40.186310, 44.518264);//40.187490, 44.518775
                var point8 = new google.maps.LatLng(40.183905, 44.516034);//40.183905, 44.516034
                var point9 = new google.maps.LatLng(40.179868, 44.516505);//40.181419, 44.519823
                var point10 = new google.maps.LatLng(40.207684, 44.546151);//40.208218, 44.546141
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                var marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                });
                var marker1 = new google.maps.Marker({
                    position: point1,
                    map: map,
                    icon: 'images/icon_pharmacy.png',
                });
                var marker2 = new google.maps.Marker({
                    position: point2,
                    map: map,
                    icon: 'images/icon_pharmacy.png',
                });
                var marker3 = new google.maps.Marker({
                    position: point3,
                    map: map,
                    icon: 'images/icon_pharmacy.png',
                });
                var marker4 = new google.maps.Marker({
                    position: point4,
                    map: map,
                    icon: 'images/icon_pharmacy.png',
                });
                var marker5 = new google.maps.Marker({
                    position: point5,
                    map: map,
                    icon: 'images/icon_pharmacy.png',
                });
                var marker6 = new google.maps.Marker({
                    position: point6,
                    map: map,
                    icon: 'images/icon_pharmacy.png',
                });
                var marker7 = new google.maps.Marker({
                    position: point7,
                    map: map,
                    icon: 'images/icon_pharmacy.png',
                });
                var marker8 = new google.maps.Marker({
                    position: point8,
                    map: map,
                    icon: 'images/icon_pharmacy.png',
                });
                var marker9 = new google.maps.Marker({
                    position: point9,
                    map: map,
                    icon: 'images/icon_pharmacy.png',
                });
                var marker10 = new google.maps.Marker({
                    position: point10,
                    map: map,
                    icon: 'images/icon_pharmacy.png',
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                marker.addListener('mouseover', function () {
                    infowindow = new google.maps.InfoWindow({ content: 'Ես'});
                    infowindow.open(map, marker);
                });
                marker.addListener('mouseout', function () {
                    infowindow.close();
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                marker1.addListener('mouseover', function () {
                    infowindow = new google.maps.InfoWindow({ content: 'Natali Pharm' });
                    infowindow.open(map, marker1);
                });
                marker1.addListener('mouseout', function () {
                    infowindow.close();
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                marker2.addListener('mouseover', function () {
                    infowindow = new google.maps.InfoWindow({ content: 'Gedeon Rixter' });
                    infowindow.open(map, marker2);
                });
                marker2.addListener('mouseout', function () {
                    infowindow.close();
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                marker3.addListener('mouseover', function () {
                    infowindow = new google.maps.InfoWindow({ content: 'Gedeon Rixter' });
                    infowindow.open(map, marker3);
                });
                marker3.addListener('mouseout', function () {
                    infowindow.close();
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                marker4.addListener('mouseover', function () {
                    infowindow = new google.maps.InfoWindow({ content: 'Gedeon Rixter' });
                    infowindow.open(map, marker4);
                });
                marker4.addListener('mouseout', function () {
                    infowindow.close();
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                marker5.addListener('mouseover', function () {
                    infowindow = new google.maps.InfoWindow({ content: 'Hay optic' });
                    infowindow.open(map, marker5);
                });
                marker5.addListener('mouseout', function () {
                    infowindow.close();
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                marker6.addListener('mouseover', function () {
                    infowindow = new google.maps.InfoWindow({ content: 'Alfa Pharm' });
                    infowindow.open(map, marker6);
                });
                marker6.addListener('mouseout', function () {
                    infowindow.close();
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                marker7.addListener('mouseover', function () {
                    infowindow = new google.maps.InfoWindow({ content: 'Alfa Pharm' });
                    infowindow.open(map, marker7);
                });
                marker7.addListener('mouseout', function () {
                    infowindow.close();
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                marker8.addListener('mouseover', function () {
                    infowindow = new google.maps.InfoWindow({ content: 'Berlin Optic' });
                    infowindow.open(map, marker8);
                });
                marker8.addListener('mouseout', function () {
                    infowindow.close();
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                marker9.addListener('mouseover', function () {
                    infowindow = new google.maps.InfoWindow({ content: 'Vitamax' });
                    infowindow.open(map, marker9);
                });
                marker9.addListener('mouseout', function () {
                    infowindow.close();
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                marker10.addListener('mouseover', function () {
                    infowindow = new google.maps.InfoWindow({ content: 'Gedeon Rixter' });
                    infowindow.open(map, marker10);
                });
                marker10.addListener('mouseout', function () {
                    infowindow.close();
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                var pointArray = [point1, point2, point3, point4, point5, point6, point7, point8, point9, point10];
                var index = 0;
                var currentPointer = pointArray[index];
                var nextPharmacy = document.getElementById("next");
                var prevPharmacy = document.getElementById("prev");

                function WriteRoad(current) {
                    return req = { origin: start_point1, destination: current, travelMode: google.maps.TravelMode.WALKING, };
                }
                var request = WriteRoad(currentPointer);

                directionsService.route(request, function (result, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(result);
                        //var routes = result.routes;
                        //var leg = routes[0].legs;
                        //var lenght = leg[0].distance.text;
                        //var duration = leg[0].duration.text;
                        //infowindow = new google.maps.InfoWindow({ content: 'Ես'});
                        //infowindow.open(map, marker);
                    }
                });

                nextPharmacy.onclick = function (nextPointer) {
                    if (index < pointArray.length - 1) {
                        index += 1;
                        console.log("index " + index);
                        currentPointer = pointArray[index];
                        console.log("current pointer" + currentPointer);
                        request = WriteRoad(currentPointer);

                        directionsService.route(request, function (result, status) {
                            if (status == google.maps.DirectionsStatus.OK) {
                                directionsDisplay.setDirections(result);
                                //var routes = result.routes;
                                //var leg = routes[0].legs;
                                //var lenght = leg[0].distance.text;
                                //var duration = leg[0].duration.text;
                                //infowindow = new google.maps.InfoWindow({ content: 'Ես'});
                                //infowindow.open(map, marker);
                            }
                        });
                    }
                };
                prevPharmacy.onclick = function (prevPointer) {
                    if (index >= 1) {
                        index -= 1;
                        console.log("index " + index);
                        currentPointer = pointArray[index];
                        console.log("current pointer" + currentPointer);
                        request = WriteRoad(currentPointer);

                        directionsService.route(request, function (result, status) {
                            if (status == google.maps.DirectionsStatus.OK) {
                                directionsDisplay.setDirections(result);
                                //var routes = result.routes;
                                //var leg = routes[0].legs;
                                //var lenght = leg[0].distance.text;
                                //var duration = leg[0].duration.text;
                                //infowindow = new google.maps.InfoWindow({ content: 'Ես'});
                                //infowindow.open(map, marker);
                            }
                        });
                    }
                };

            },

                function () {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
        }
        else {
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }
    // Ждем полной загрузки страницы, после этого запускаем initMap()
    google.maps.event.addDomListener(window, "load", initMap);


    /*function click() {
        alert('դեռևս պատրաստ չէ' + i);

    }*/


});