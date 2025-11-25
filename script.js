const body = document.getElementById('body')

// ________ HEADER ________ 

let navigation = document.createElement('nav')
let header = document.createElement('header')
let navList = document.createElement('ul')
header.classList.add('navigation')

navList.innerHTML =  `
  <li>
    <a href="#calculateSection">CALCULATE</a>
  </li>
  <li>
    <a href="#greenCheckSection">GREENCHECK</a>
  </li>
  <li>
    <a href="#ourMissionSection">OUR MISSION</a>
  </li>
  <li>
    <a href="#resourceSection">RESOURCE</a>
  </li>
`
navigation.appendChild(navList);
header.appendChild(navigation);
body.appendChild(header);

// ________ HERO ________ 

let heroSection = document.createElement('section');
heroSection.classList.add('heroSection')

let bigCircle = document.createElement('div');
bigCircle.classList.add('circle', 'bigCircle')

let smallCircle = document.createElement('div');
smallCircle.classList.add('circle', 'smallCircle')

let heroTitle = document.createElement("h1");
heroTitle.textContent =
  "Web Carbon Emission Project";

let heroText = document.createElement("p");
heroText.textContent =
  "SCROLL DOWN TO LERN MORE";
  smallCircle.appendChild(heroText);

heroSection.appendChild(bigCircle);
heroSection.appendChild(smallCircle);
heroSection.appendChild(heroTitle);
body.appendChild(heroSection)


// ________ CALCULATE ________ 

let calcSection = document.createElement('section');
calcSection.classList.add('calcSection')

let calcCircle = document.createElement('div');
calcCircle.classList.add('circle', 'lightCircle');

let anchorCalcText = document.createElement("p");
anchorCalcText.textContent =
  "CALCULATE";
calcCircle.appendChild(anchorCalcText);
  

let calcTitle = document.createElement('h2');
calcTitle.textContent =
  "DID YOU KNOW";

let calcSub = document.createElement('h3');
calcSub.textContent =
  "The internet alone consumes 416.2TWh electricity per year";

let calcText = document.createElement('p');
calcText.textContent =
  "To begin calculation how much CO2 your website uses enter the URL in the field below and hit calculate";

let calcForm = document.createElement('form');
calcForm.classList.add('calcForm');

let calcInput = document.createElement('input');
  calcInput.type = 'text';
  calcInput.name = 'userName';
  calcInput.placeholder = 'www.mywebsite.com';

  calcForm.appendChild(calcInput);

let calcButton = document.createElement('button')
  calcButton.type = 'submit';
calcButton.textContent = 'CALCULATE';

  calcForm.appendChild(calcButton);


calcSection.appendChild(calcCircle);
calcSection.appendChild(calcTitle);
calcSection.appendChild(calcSub);
calcSection.appendChild(calcText);
calcSection.appendChild(calcForm);
body.appendChild(calcSection);

// ________ GREENCHECK ________ 

let grCheckSection = document.createElement('section');
grCheckSection.classList.add('grCheckSection');

let grCheckCircle = document.createElement('div');
grCheckCircle.classList.add('circle', 'darkCircle');

let anchorGrCheckText = document.createElement("p");
anchorGrCheckText.textContent =
  "GREENCHECK";
grCheckCircle.appendChild(anchorGrCheckText);


let grCheckSub = document.createElement('h3');
grCheckSub.textContent =
  "We love the green energy and renewable energy sourses. Does your provider?";

let grCheckText = document.createElement('p');
grCheckText.textContent =
  "Enter a website URL in the field below to look check if the site providers use green and renewable energy souces for hosting";

let grCheckForm = document.createElement('form');
grCheckForm.classList.add('grCheckForm');

let grCheckInput = document.createElement('input');
  grCheckInput.type = 'text';
  grCheckInput.name = 'userName';
  grCheckInput.placeholder = 'www.mywebsite.com';

  grCheckForm.appendChild(grCheckInput);

let grCheckButton = document.createElement('button')
  grCheckButton.type = 'submit';
grCheckButton.textContent = 'BEGIN';

  grCheckForm.appendChild(grCheckButton);


grCheckSection.appendChild(grCheckCircle)
grCheckSection.appendChild(grCheckSub)
grCheckSection.appendChild(grCheckText)
grCheckSection.appendChild(grCheckForm);
body.appendChild(grCheckSection);

// ________ RESOURCE ________ 

let resSection = document.createElement('section');
resSection.classList.add('resSection');

let resCircle = document.createElement('div');
resCircle.classList.add('circle', 'lightCircle');

let resGridCircle = document.createElement('div');
resGridCircle.classList.add('resGridCircle');

let resGridCircleTitle = document.createElement('div');
resGridCircleTitle.classList.add('circle', 'resGridCircleTitle');

let anchorResText = document.createElement("p");
anchorResText.textContent = "RESOURCE";
resCircle.appendChild(anchorResText);

let resTitle = document.createElement('h2');
resTitle.textContent = "EVERY byte MATTERS";
resTitle.classList.add('resTitle')

let resText = document.createElement('p');
resText.textContent = "We work towards a cleaner internet, free form as much carbon emision as possible. There are many yhings you can do as a web developer to help. Read more about how you can contribute here";
resText.classList.add('resText')

let resList = document.createElement('ul')
header.classList.add('resList')
resList.innerHTML = `
  <li>
    <a href="#">Substainable Web Design</a>
  </li>
  <li>
    <a href="#"> The Green Foundation</a>
  </li>
  <li>
    <a href="#">Website Carbon</a>
  </li>
`
resList.classList.add('resList')

resSection.appendChild(resCircle);
resSection.appendChild(resGridCircle);
resGridCircle.appendChild(resGridCircleTitle);
resSection.appendChild(resTitle);
resSection.appendChild(resText);
resSection.appendChild(resList);
body.appendChild(resSection);

// ________ GREENCHECK dabl ________ 

let missionSection = document.createElement('section');
missionSection.classList.add('missionSection');

let missionCircle = document.createElement('div');
missionCircle.classList.add('circle', 'darkCircle');

let anchorMissionText = document.createElement("p");
anchorMissionText.textContent =
  "THE MISSION";
missionCircle.appendChild(anchorMissionText);


let missionSub = document.createElement('h3');
missionSub.textContent =
  "We love the green energy and renewable energy sourses. Does your provider?";

let missionText = document.createElement('p');
missionText.textContent =
  "Enter a website URL in the field below to look check if the site providers use green and renewable energy souces for hosting";

let missionForm = document.createElement('form');
missionForm.classList.add('missionForm');

let missionInput = document.createElement('input');
  missionInput.type = 'text';
  missionInput.name = 'userName';
  missionInput.placeholder = 'www.mywebsite.com';

  missionForm.appendChild(missionInput);

let missionButton = document.createElement('button')
  missionButton.type = 'submit';
  missionButton.textContent = 'BEGIN';

  missionForm.appendChild(missionButton);


missionSection.appendChild(missionCircle)
missionSection.appendChild(missionSub)
missionSection.appendChild(missionText)
missionSection.appendChild(missionForm);
body.appendChild(missionSection);
