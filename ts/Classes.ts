//CLASSES
class tour{
	name: string;
	infoTitle: string;
	infoDescription: string;

	constructor(name: string, infoTitle: string, infoDescription: string){
		this.name = name;
		this.infoTitle = infoTitle;
		this.infoDescription = infoDescription;
	}

}

class pins{
	infoTitle: string;
	infoDescription: string;

	constructor(infoTitle: string, infoDescription: string){
		this.infoTitle = infoTitle;
		this.infoDescription = infoDescription;
	}
}

//Creating objects & an array for walkingTour
let tourDescription = new tour("Walking Tour", "Tour Description", "bbbbbLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
let tourEnd = new tour ("Walking Tour End", "The end", "dis is le end mistar.")
let ingolfstorg = new pins("Ingólfstorg", "aaaaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
let althingi = new pins("Althingi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
let fogetagardur = new pins("Fógetagarður", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

let walkingTour = [tourDescription, ingolfstorg, althingi, fogetagardur, tourEnd];


//creating functions for prev, curr and next.
let previousIndex = -1;
let currentIndex = 0;
let nextIndex = 1;
let end = walkingTour.indexOf(tourEnd);
let start = walkingTour.indexOf(tourDescription);

		// for changing which pin object to show
const previousId = document.getElementById('previousLocation');
const currentId = document.getElementById('currentLocation');
const nextId = document.getElementById('nextLocation');

		//to show the content of clicked pins
const showTitleId = document.getElementById('showTitle');
const showContentId = document.getElementById('showInfo');

	// changing the pin values 
currentId.innerHTML = walkingTour[currentIndex].infoTitle;
nextId.innerHTML = walkingTour[nextIndex].infoTitle;
showTitleId.innerHTML = walkingTour[currentIndex].infoTitle;
showContentId.innerHTML = walkingTour[currentIndex].infoTitle;

function previousLocation(){
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

function nextLocation(){
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