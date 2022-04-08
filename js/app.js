//This selects the sections and saves them to a variable
let sectionTitles = document.getElementsByTagName('section');

//This changes the HTML Collection into an array
let sectionTitlesArray = Array.from(sectionTitles);

//This selects the last section of the sectionTitlesArray and saves it to a variable
let lastItem = sectionTitlesArray.slice(-1);

//This selects the unordered list and saves it to a variable
let navigationBar = document.getElementById('nav');



//This helper function appends the last section, the footer, of the sectionTitlesArray to the navigation bar
//It will be called after the other nav items are appended
function appendLastItem () {
    // This creats a "li" and "a" tag for the footer
    let itemLi = document.createElement('li');
    let itemA = document.createElement('a');

    //This appends the "a" tag to the "li" tag, and the updated "li" tag to the navigation bar
    itemLi.appendChild(itemA);
    navigationBar.appendChild(itemLi)

    //This sets the text of the navigation bar's last child equal to the title of the footer
    navigationBar.lastChild.children[0].innerText = lastItem[0].children[0].children[0].children[0].innerText;

    //This adds styling to the navigation's last child by setting classes and an id
    navigationBar.lastChild.children[0].classList.add('title-animation');
    navigationBar.lastChild.children[0].classList.add('connect');
    navigationBar.lastChild.children[0].id = 'lastATag';

    //This generates a random id
    let generateId = Math.random().toString(36).slice(2);

    //This formats the random number-letter combination and saves that format into a variable
    let randomId = `${generateId}`;

    //This grabs that id and sets it as the target of the navigation bar's last child's 'a' tag
    navigationBar.lastChild.children[0].setAttribute("href",`#${randomId}`);   

    //This gives each the footer the newly generated id
    lastItem[0].id = randomId;
}



//This loops through the sectionTitlesArray, except for the last child, to create the navigation bar
for(let i = 0; i < sectionTitlesArray.length - 1; i++) {
    
    //This creates a li and a element for each section
    let lists = document.createElement('li');
    let links = document.createElement('a');

    //This appends the a elements to the li elements
    lists.appendChild(links);

    //This appends the updated li elemnts to the navigation bar, the ul
    navigationBar.appendChild(lists);

    //This sets the values of the links equal to the titles of each section
    navigationBar.children[i].children[0].innerText = sectionTitles[i].children[0].children[0].innerText;

    //This sets an id to each link
    navigationBar.children[i].children[0].classList.add('nav-links');

    //This generates a random number-letter combination
    let generateId = Math.random().toString(36).slice(2);

    //This formats the random number-letter combination and saves that format into a variable
    let randomId = `${generateId}`;

    //This generates a random id for each link
    // let selectId = navigationBar.children[i].children[0].id = randomId;

    //This grabs that id and sets it as the target of the links
    navigationBar.children[i].children[0].setAttribute("href",`#${randomId}`);

    //This gives each section the newly generated id
    sectionTitles[i].id = randomId;
    }



//This calls the previously created helper function, appendLastItem(), to append the last item of the
//sectionTitlesArray, which is the footer, to the navigation bar
appendLastItem();



//Listens for viewport scroll for Introduction
window.addEventListener('scroll', 
function addClass() {
    let isInViewport = false;

    //selects element with data-nav attribute and saves it to a variable
    let intro = document.querySelector('[data-nav="Introduction"]');

    //Gets the viewport bounds and sets that object to a variable
    let introInViewport = intro.getBoundingClientRect();

    //if the element is in the viewport, set class to active, otherwise remove that class
    if (introInViewport.top >= 0 && introInViewport.left >= 0 && introInViewport.right <= window.innerWidth && introInViewport.bottom <= window.innerHeight) {
        isInViewport = true;
        navigationBar.children[0].children[0].classList.add('active');
    }   else {
            navigationBar.children[0].children[0].classList.remove('active');
    } 
});

//Listens for viewport scroll for Howl's Moving Castle
window.addEventListener('scroll', 
function addClass() {
    let isInViewport = false;
    let howl = document.querySelector('[data-nav="Howl"]');
    let howlInViewport = howl.getBoundingClientRect();
    if (howlInViewport.top >= 0 && howlInViewport.left >= 0 && howlInViewport.right <= window.innerWidth && howlInViewport.bottom <= window.innerHeight) {
        isInViewport = true;
        navigationBar.children[1].children[0].classList.add('active');
    }   else {
            navigationBar.children[1].children[0].classList.remove('active');
    } 
});

//Listens for viewport scroll for Spirited Away
window.addEventListener('scroll', 
function addClass() {
    let isInViewport = false;
    let spirited = document.querySelector('[data-nav="Spirited"]');
    let spiritedInViewport = spirited.getBoundingClientRect();
    if (spiritedInViewport.top >= 0 && spiritedInViewport.left >= 0 && spiritedInViewport.right <= window.innerWidth && spiritedInViewport.bottom <= window.innerHeight) {
        isInViewport = true;
        navigationBar.children[2].children[0].classList.add('active');
    }   else {
            navigationBar.children[2].children[0].classList.remove('active');
    } 
});

//Listens for viewport scroll for Whisper of the Heart
window.addEventListener('scroll', 
function addClass() {
    let isInViewport = false;
    let whisper = document.querySelector('[data-nav="Whisper"]');
    let whisperInViewport = whisper.getBoundingClientRect();
    if (whisperInViewport.top >= 0 && whisperInViewport.left >= 0 && whisperInViewport.right <= window.innerWidth && whisperInViewport.bottom <= window.innerHeight) {
        isInViewport = true;
        navigationBar.children[3].children[0].classList.add('active');
    }   else {
            navigationBar.children[3].children[0].classList.remove('active');
    } 
});

//Listens for viewport scroll for When Marnie Was Here
window.addEventListener('scroll', 
function addClass() {
    let isInViewport = false;
    let marnie = document.querySelector('[data-nav="Marnie"]');
    let marnieInViewport = marnie.getBoundingClientRect();
    if (marnieInViewport.top >= 0 && marnieInViewport.left >= 0 && marnieInViewport.right <= window.innerWidth && marnieInViewport.bottom <= window.innerHeight) {
        isInViewport = true;
        navigationBar.children[4].children[0].classList.add('active');
    }   else {
            navigationBar.children[4].children[0].classList.remove('active');
    } 
});

//Listens for viewport scroll for Connect section
window.addEventListener('scroll', 
function addClass() {
    let isInViewport = false;
    let connect = document.querySelector('[data-nav="Connect"]');
    let connectInViewport = connect.getBoundingClientRect();
    if (connectInViewport.top >= 0 && connectInViewport.left >= 0 && connectInViewport.right <= window.innerWidth && connectInViewport.bottom <= window.innerHeight) {
        isInViewport = true;
        navigationBar.lastChild.children[0].classList.add('connect-active');
    }   else {
            navigationBar.lastChild.children[0].classList.remove('connect-active');
    } 
});