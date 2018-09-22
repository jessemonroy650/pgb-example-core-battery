//
//
//
var app = {
    version : '1.0.0',
}
//
//
//
function onDOMContentLoaded() {
    document.getElementById('navCodeName').innerHTML = navigator.appCodeName;
    document.getElementById('navName').innerHTML     = navigator.appName;
    document.getElementById('navVersion').innerHTML  = navigator.appVersion;
    document.getElementById('navPlatform').innerHTML = navigator.platform;
}
//
// - https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
//
function isCordovaApp() {
    return (typeof window.cordova !== "undefined");
}
//
//
//
function isKnownDevice(obj) {
    var validPGDevices = [
          'armv7',
          'iPad',
          'iPhone',
          'iPod'
    ];
    //
    var i = 0, result = -1, answer = false;
    for (i = 0; i < validPGDevices.length; i++){
        // https://www.w3schools.com/jsref/jsref_search.asp
        result = obj.search(validPGDevices[i]);
        if (result != -1) {
            answer = validPGDevices[i]; break;
        }
    }

    return answer;
}
//
//
//
function onBatteryStatus(status) {
    var batteryStuff = "" +
        "<p class=r /><b>status.level:</b> "       + status.level + "%" +
        "<p class=b /><b>status.isPlugged:</b> "   + status.isPlugged;
 
    document.getElementById('batteryStatus').innerHTML = batteryStuff;
}
//
function onDeviceReady() {
    alert("device ready.");
    document.getElementById('isCordovaApp').innerHTML  = isCordovaApp(window.cordova);
    document.getElementById('isKnownDevice').innerHTML = isKnownDevice(navigator.platform);
    document.getElementById('appVersion').innerHTML    = app.version;
    if (isCordovaApp()) {
        window.addEventListener("batterystatus", onBatteryStatus, false);
        document.getElementById('batteryEvent').innerHTML = batteryStuff;
    }
}
