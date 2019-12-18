function GetLocalData(key) {
    if (typeof(Storage) !== "undefined") {
        return localStorage.getItem(key);
    } else {
        alert("Sorry, your Device does not support Web Storage...");
        return "";
    }
}

// Get LocalStorage Key Objects
function GetLocalDataObject(key) {
    if (typeof(Storage) !== "undefined") {

        // Retrieve
        var itemValue = localStorage.getItem(key);
        if (itemValue != "undefined" && itemValue != null) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            return null;
        }
    } else {
        alert("Sorry, your Device does not support Web Storage...");
        return "";
    }
}

// Store localstorage values with json stringify
function SaveLocalObject(key, value) {
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem(key, JSON.stringify(value));

    } else {
        alert("Sorry, your Device does not support Web Storage...");
    }
}

// Save Local Data
function SaveLocalData(key, value) {
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem(key, value);

    } else {
        alert("Sorry, your Device does not support Web Storage...");
    }
}

// Save json object value passed into functions in local storage
function saveURLObject(localStorageName, detailObject) {
    var objData = JSON.parse(decodeURIComponent(detailObject));
    console.log(objData);
    SaveLocalObject(localStorageName, objData);
}

// Delete LocalStorage Items
function DeleteLocalData(key) {
    localStorage.removeItem(key);
}

function Alert(text) {
    app.dialog.alert(text);
    $$(".dialog-title").addClass('dialog-logo');
}

function ErrorAlert(text) {
    app.dialog.alert(text);
    $$(".dialog-title").removeClass('success-img');
    $$(".dialog-title").addClass('failure-img');
}

function showPreLoader() {
    app.preloader.show();
    // $$(".preloader-modal").html(
    //     '<div class="animatePreloader size-25" style="font-weight: bold"></div>');
    // $$(".preloader-modal").html();
}

function hidePreLoader() {
    app.preloader.hide();
}

function onDeviceReady() {
    var Plat;
    Plat = device.platform;
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false);
}

window.addEventListener('keyboardDidHide', () => {

});

window.addEventListener('keyboardDidShow', (event) => {

});

function onBackKeyDown(e) {
    // $$(".toolbar").hide();
    window.Keyboard.hide();
    mainView.router.back();
}

function onPause() {
}

function onResume() {

}

function onMenuKeyDown() {
}

function onOnline() {
    console.log("You online");
}

function onOffline() {
    console.log("You offline");
}


window.addEventListener("click", function () {
    console.log("You knocked?");
});


function signOut() {
    if (GetLocalData("LoggedIn") == "true") {
        DeleteLocalData('TempProfileInfo');
        DeleteLocalData('LoggedIn');
        DeleteLocalData('signUpAddress');
        var lang = GetApplicationLanguage();
        var fingerPrint = GetLocalData("AllowFingerPrint");
        var loginData = GetLocalDataObject("LoginData");
        window.localStorage.clear();
        localStorage.setItem("ApplicationLanguage", lang);
        localStorage.setItem("AllowFingerPrint", fingerPrint);
        SaveLocalObject("LoginData", loginData);
        $$(".signOut").hide();
        $$(".signIn").show();
        $$(".navbar").hide();
        mainView.router.navigate('/', {reloadCurrent: true, clearPreviousHistory: true});
        getNews();
        $$(".panelTitle").html('BASHA');
    } else {
    }
}
