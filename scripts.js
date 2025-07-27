var friends = ["Jessi", "Demel", "Bida", "Morellas", "Supli"];
var locations = ["Living Room", "Kitchen", "Home Theatre Room", "Bedroom", "Bathroom",
    "Garage", "Library", "Playroom", "Dining Room", "Guest Room"];
var weapons = ["Beisbol Bat", "Book", "Cards Deck", "Butter Knife", "Bleach",
    "Curtain", "Quill", "Candle", "Flowerpot", "Pillow", "Toothbrush", "Projector",
    "Fireplace poker", "Charging cable", "Metal Straw", "Bookmark", "Scredriver",
    "Darts", "Blender", "Fan"];

$(function () {

    var $ele;

    for (var i = 0; i < 100; i++) {
        $ele = createAccusationElement(i + 1);
        $($ele).on('click', createAlert(i, $ele));
    }

})

// Creates one accusation and shows it on the page
function createAccusationElement(number) {
    var $divCol = $('<div class="col-6 col-md-4 col-lg-2"></div>');
    var $divH3 = $('<div class="bg-secondary-subtle text-secondary-emphasis rounded shadow-sm"></div>');
    var $h3 = $('<h3 class="text-center" id=Accusation' + number + '>Accusation ' + number + '</h3>');
    $($h3).appendTo($($divH3));
    $($divH3).appendTo($($divCol));
    $($divCol).appendTo($('#accusations'));

    return $h3;
}

function createAlert(number, element) {

    var friend = friends[(number % friends.length)];
    var location = locations[(number % locations.length)];
    var weapon = weapons[(number % weapons.length)];
    var msg = "Accusation " + (number + 1) + ": I accuse " + friend +
        ", with the " + weapon + " in the " + location;

    var $alert = $('<div class="alert alert-warning fs-6" role="alert">' + msg + '</div>');

    $($alert).css('visibility', 'hidden');
    $($alert).appendTo($(element));

    function displayAlert() {
        $($alert).css('visibility', 'visible');
    }

    return displayAlert;
}