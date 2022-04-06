//This selects the sections and saves them to a variable
let sectionTitles = document.getElementsByTagName('section');
// console.log(sectionTitles[4].children[0].children[0].children[0].innerText);


//This selects the ul and saves it to a variable
let navigationBar = document.getElementById('nav');
/*
//This loops through the sectionTitles object
for (const sectionTitle of sectionTitles) {
    //This creates a new li element that corresponds to each section
    let lists = document.createElement('li');

    //This creates four 'a' tags
    let links = document.createElement('a');

    //This appends each new 'a' tag to each li, and each li to the ul
    lists.appendChild(links);
    navigationBar.appendChild(lists);
}
console.log(navigationBar)

//This sets the values of the links equal to the titles of each section
navigationBar.children[0].children[0].innerText = sectionTitles[0].children[0].children[0].innerText;
navigationBar.children[1].children[0].innerText = sectionTitles[1].children[0].children[0].innerText;
navigationBar.children[2].children[0].innerText = sectionTitles[2].children[0].children[0].innerText;
navigationBar.children[3].children[0].innerText = sectionTitles[3].children[0].children[0].innerText;
navigationBar.children[4].children[0].innerText = sectionTitles[4].children[0].children[0].children[0].innerText;


//This creates the href attribute linking to each section
navigationBar.children[0].children[0].setAttribute("href","#intro");
navigationBar.children[1].children[0].setAttribute("href","#howl");
navigationBar.children[2].children[0].setAttribute("href","#spirited");
navigationBar.children[3].children[0].setAttribute("href","#whisper");
navigationBar.children[4].children[0].setAttribute("href","#connect");

//sets id of each link
navigationBar.children[0].children[0].id = "intro-link";
navigationBar.children[1].children[0].id = "howl-link";
navigationBar.children[2].children[0].id = "spirited-link";
navigationBar.children[3].children[0].id = "whisper-link";
navigationBar.children[4].children[0].id = "connect-link";


let introLink = document.getElementById("intro-link");
let howlLink = document.getElementById("howl-link");
let spiritedLink = document.getElementById("spirited-link");
let whisperLink = document.getElementById("whisper-link");
let connectLink = document.getElementById("connect-link");

let allLinks = [introLink,howlLink,spiritedLink,whisperLink];
allLinks.push(connectLink)
console.log(allLinks)

// for(i = 0; i < allLinks.length; i++) {
//     allLinks[i].addEventListener('click', function scrollSmooth() {
//         navigationBar.scroll({
//             behavior: "smooth"
//         })
//         console.log('worked')
//     })
// }
*/

//This loops through the SectionTitles object, except for the last child, to create the navigation
for(let i = 0; i < sectionTitles.length - 1; i++) {
    
    //This creates a li and a element for each section
    let lists = document.createElement('li');
    let links = document.createElement('a');

    //This appends the a elements to the li elements
    lists.appendChild(links);

    //This appends the updated li elemnts to the navigation bar, the ul
    navigationBar.appendChild(lists);

    //This sets the values of the links equal to the titles of each section
    navigationBar.children[i].children[0].innerText = sectionTitles[i].children[0].children[0].innerText;

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

    



console.log(navigationBar)
console.log(sectionTitles)
