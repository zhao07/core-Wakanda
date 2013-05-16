﻿/**

* @author ouissam.gouni@4d.com

*/

directory.setLoginListener("myLogin");

addHttpRequestHandler("/getSessionCookie/", "bootStrap.js", "getSessionCookie");

addHttpRequestHandler("/getCookies/", "bootStrap.js", "getCookies");

addHttpRequestHandler("/invalidateSessionCookie/", "bootStrap.js", "invalidateSessionCookie");

function getSessionCookie(request, response) {
    var cookies = request.headers["Cookie"];
    console.log(cookies);
    if (cookies != null) {
        var key = "WASID";
        var i, x, y, ARRcookies = cookies.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == key) {
                return unescape(y);
            }
        }
    }
    return "undefined";

}

function getCookies(request, response) {
    var cookies = request.headers["Cookie"];
    if (cookies != null) {
        return cookies;
    }
    else {
        return "undefined";
    }
}

function invalidateSessionCookie(request, response) {
    var key = "WASID"
    var date = new Date();
    date.setDate(date.getDate() - 1);
    var setCookie = escape(key) + '=; Path=/;expires=' + date.toUTCString();
    response.headers["Set-Cookie"] = setCookie;
    return setCookie;
}