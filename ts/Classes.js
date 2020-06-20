//CLASSES
var tour = /** @class */ (function () {
    function tour(name, infoTitle, infoDescription) {
        this.name = name;
        this.infoTitle = infoTitle;
        this.infoDescription = infoDescription;
    }
    return tour;
}());
var pins = /** @class */ (function () {
    function pins(infoTitle, infoDescription) {
        this.infoTitle = infoTitle;
        this.infoDescription = infoDescription;
    }
    return pins;
}());
//Creating objects & an array for walkingTour
var tourDescription = new tour("Walking Tour", "Tour Description", "bbbbbLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var tourEnd = new tour("Walking Tour End", "The end", "dis is le end mistar.");
var ingolfstorg = new pins("Ingólfstorg", "aaaaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var althingi = new pins("Althingi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var fogetagardur = new pins("Fógetagarður", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var walkingTour = [tourDescription, ingolfstorg, althingi, fogetagardur, tourEnd];
//creating functions for prev, curr and next.
var previousIndex = -1;
var currentIndex = 0;
var nextIndex = 1;
var end = walkingTour.indexOf(tourEnd);
var start = walkingTour.indexOf(tourDescription);
// for changing which pin object to show
var previousId = document.getElementById('previousLocation');
var currentId = document.getElementById('currentLocation');
var nextId = document.getElementById('nextLocation');
//to show the content of clicked pins
var showTitleId = document.getElementById('showTitle');
var showContentId = document.getElementById('showInfo');
// changing the pin values 
currentId.innerHTML = walkingTour[currentIndex].infoTitle;
nextId.innerHTML = walkingTour[nextIndex].infoTitle;
showTitleId.innerHTML = walkingTour[currentIndex].infoTitle;
showContentId.innerHTML = walkingTour[currentIndex].infoTitle;
function previousLocation() {
    /*if (previousIndex == start){
        showTitleId.innerHTML = walkingTour[previousIndex].infoTitle;
        showContentId.innerHTML = walkingTour[previousIndex].infoDescription;
    }
    else{*/
    showTitleId.innerHTML = walkingTour[previousIndex].infoTitle;
    showContentId.innerHTML = walkingTour[previousIndex].infoDescription;
    nextId.innerHTML = walkingTour[--nextIndex].infoTitle;
    currentId.innerHTML = walkingTour[--currentIndex].infoTitle;
    previousId.innerHTML = walkingTour[--currentIndex].infoTitle;
    //}
}
function nextLocation() {
    /*if (nextIndex == end){
        showTitleId.innerHTML = walkingTour[nextIndex].infoTitle;
        showContentId.innerHTML = walkingTour[nextIndex].infoDescription;
    }
    else {*/
    showTitleId.innerHTML = walkingTour[nextIndex].infoTitle;
    showContentId.innerHTML = walkingTour[nextIndex].infoDescription;
    nextId.innerHTML = walkingTour[++nextIndex].infoTitle;
    currentId.innerHTML = walkingTour[++currentIndex].infoTitle;
    previousId.innerHTML = walkingTour[++previousIndex].infoTitle;
    //}
}
//TODO Figure out how to make a function that: when nextPin is clicked it becomes the currentPin, currentPin becomes previousPin. And then a new pin is pulled for the next pin.
// one way would be to pop the first item of the arraylist and then create another arraylist to hold those items for the previous pins however we'd get into trouble when going backwards..
// so i think the way to go is going with walkingTour[x] and then increment x, that way we keep the array in tact. 
