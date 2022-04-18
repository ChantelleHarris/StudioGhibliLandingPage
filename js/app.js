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
    navigationBar.lastChild.children[0].classList.add('nav-anchors');
    navigationBar.lastChild.children[0].id = 'lastATag';

    //This generates a random id
    let generateId = Math.random().toString(36).slice(2);

    //This formats the random number-letter combination and saves that format into a variable
    let randomId = `${generateId}`;

    //This grabs that id and sets it as the target of the navigation bar's last child's 'a' tag
    navigationBar.lastChild.children[0].setAttribute("href",`#${randomId}`);   

    //This gives the footer the newly generated id
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

    //This adds classes to each link
    navigationBar.children[i].children[0].classList.add('nav-links');
    navigationBar.children[i].children[0].classList.add('nav-anchors');

    //This generates a random number-letter combination
    let generateId = Math.random().toString(36).slice(2);

    //This formats the random number-letter combination and saves that format into a variable
    let randomId = `${generateId}`;

    //This grabs that id and sets it as the target of the links
    navigationBar.children[i].children[0].setAttribute("href",`#${randomId}`);

    //This gives each section the newly generated id
    sectionTitles[i].id = randomId;
    }



//This calls the previously created helper function, appendLastItem(), to append the last item of the
//sectionTitlesArray, which is the footer, to the navigation bar
appendLastItem();



//This makes the quote button content appear and collapse
//I didn't like the idea of collapsible main sections
let buttons = document.getElementsByClassName('quotes');
let clicked;
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function showQuotes() {
        let quotes = document.getElementsByClassName('quote-content');
        quotes[i].classList.toggle('show-quote');  
    })
}



//Adds active class using the Intersection Observer API when section is in viewport for all but the Connect section, the footer
for(let i = 0; i < sectionTitlesArray.length - 1; i++) {
    //Sets the options for the Intersection Observer
    const rules = {
        root: null, //the browser, by default, is the root and grandparent of the sections
        threshold: 0.3, //activate when a section is 30% visible
        rootMargin: "0px", //do not extend or shrink the viewport
    }

    //Declares the Intersection observer with 2 arguments, function addClass(entries) and options
    const observeSection = new IntersectionObserver(function addClass(entries) {
        //saves the entry array into a variable
        const [entry] = entries;
        // console.log(entry);
    
        //adds class if the section is intersecting or within viewport
        if (entry.isIntersecting) {
            navigationBar.children[i].children[0].classList.add('active');
        } else {
            navigationBar.children[i].children[0].classList.remove('active');
        }
        
    }, rules);

    //Tells the observer to observe every section
    observeSection.observe(sectionTitlesArray[i]);
}


//Adds active class for Connect section (it has different styling)
let connect = document.querySelector('[data-nav="Connect"]');
const rules = {
    root: null,
    threshold: 0.3,
    rootMargin: "0px",
}
const observeSection = new IntersectionObserver(function addClass(entries) {    
    const [entry] = entries;

    if (entry.isIntersecting) {
        navigationBar.lastChild.children[0].classList.add('connect-active');
    } else {
        navigationBar.lastChild.children[0].classList.remove('connect-active');
    }

}, rules);
observeSection.observe(connect);


/*
//Selects the anchors of the navigation bar by class and converts the given HTML Collection to an array
let aTags = document.getElementsByClassName('nav-anchors');
let aTagsArray = Array.from(aTags);

//Sets smooth scrolling behavior for each anchor click
for(let i = 0; i < aTagsArray.length; i++) {
    aTagsArray[i].addEventListener('click', function scrollSmooth(e) {
        e.preventDefault();
        let clicked;
        let sectionsTop = sectionTitlesArray[i].getBoundingClientRect().top;
        window.scroll({top: `${sectionsTop}`, behavior: "smooth"});
    })
}
*/