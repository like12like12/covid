var name = ""
var id = {}

function getdata() {
    var json_str = getCookie('mycookie');
        id = JSON.parse(json_str);
    $.ajaxSetup({
        headers: {
            'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
            'Accept-Language': 'th'
        }
    })
    
    for (let i = 0; i < id.length; i++) { 
        // api = "https://tatapi.tourismthailand.org/tatapi/v5/accommodation/P02000001"
            api = "https://tatapi.tourismthailand.org/tatapi/v5/" + id[i]
            // console.log("https://tatapi.tourismthailand.org/tatapi/v5/" + "accommodation" + "/" + id[i])
            console.log(api)
            $.getJSON(api, function(json) {
                console.log(json)
                console.log(JSON.stringify(json.result.place_name).slice(1, -1))
                name = (JSON.stringify(json.result.place_name).slice(1, -1))
                $(".name").eq(i).text((JSON.stringify(json.result.place_name).slice(1, -1)));
                $(".detail").eq(i).text((JSON.stringify(json.result.destination).slice(1, -1)));
                $(".pic").eq(i).attr('src', JSON.stringify(json.result.web_picture_urls[0]).slice(1, -1));
        })
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function readcookie() {
    try {
        var json_str = getCookie('mycookie');
        arr = JSON.parse(json_str);
        console.log("Saved in Cookie "+ arr)
    } catch {
        arr = []
        console.log("No Cookie Saved")
    }
}

function fav(id) {
    alert("Faving")
    var json_str = JSON.stringify(arr);
    console.log("Saved " + JSON.stringify(id))
    arr.push(id)
    var json_str = JSON.stringify(arr);
    setCookie("mycookie", json_str, 30);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

