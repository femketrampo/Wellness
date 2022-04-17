// JavaScript source code
function initMap() {
    //Location
    const location = { lat: 50.801288877415146, lng: 3.7618512754829307 };
    //Map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location,
    });
    //Marker
    const marker = new google.maps.Marker
        ({
            position: location,
            map: map,
        });
}
/*Tabs*/
function openTab(evt, Accomodatie) {
    //Variables
    var i, tabcontent, tablinks;

    //Tabcontent/Hide
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Get Elements
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Show Active
    document.getElementById(Accomodatie).style.display = "block";
    evt.currentTarget.className += " active";
}
/*Checkboxes like radiobuttons*/
function onlyOne(checkbox)
{
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}