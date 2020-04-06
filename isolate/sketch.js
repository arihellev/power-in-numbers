/*
Midterm Project Pt 1 for CT Environments Studio & Lab
April 6, 2020
--

The Power in Numbers

--
A generative text project that randomly spits out up to date COVID-19 statistics for New York City as of April 6, 2020. All live data has been compiled from the nychealth github posted on nyc.gov. The data presented below reflect the most recent information the Health Department has collected about people who have tested positive for COVID-19 in NYC. They are discouraging people with mild to moderate symptoms from being tested at this time, so the data primarily represent people with more severe illness. This project represents how we can drown in data and information and feel detached from the humanity behind the numbers. 
*/

let myFont;


//declarations for boro csv file 
let boroTable;
let boro_row;
let boroSentence = [];

//declarations for case summary csv file 
let summaryTable;
let summary_row;
let summarySentence = [];

//declarations for bysex csv file 
let sexTable;
let sex_row;
let sexSentence = [];

//declarations for byage csv file 
let ageTable;
let age_row;
let ageSentence = [];




//preloading files 
function preload() {
  boroTable = loadTable('casebyboro.csv');
  summaryTable = loadTable('casesummary.csv');
  sexTable = loadTable('bysex.csv');
  ageTable = loadTable('byage.csv');
  myFont = loadFont('display.otf');
  
}

function setup() {
  
  //  button
  button = createButton("isolate further"); 
  
  
  button.mousePressed(() => {
    
  //boro
  boro_row = int(random(boroTable.getRowCount()));
  
  boroSentence.splice(0, 0, "As of today, there are " + boroTable.getString(boro_row, 0));

  print(boroSentence);
  
  //summary 
  summary_row = int(random(summaryTable.getRowCount()));
  
  summarySentence.splice(0, 0, "In New York City, there have been " + summaryTable.getString(summary_row, 0) + "of COVID-19." );

  print(summarySentence);
    
  //sex
    sex_row = int(random(sexTable.getRowCount()));
  
  sexSentence.splice(0, 0, "There are " + sexTable.getString(sex_row, 0) + " per 100,000 people. ");

  print(sexSentence);
    
  //age
    age_row = int(random(ageTable.getRowCount()));
  
  ageSentence.splice(0, 0, "Today "+ ageTable.getString(age_row, 0) + " per 100,000 people. ");

  print(ageSentence);
    
  
})
    
  
  createCanvas(1450, 800);
  
  
  
}

function draw() {
  
  background(0);
  textFont(myFont);
  
  fill(0)
   .strokeWeight(10)
   .textSize(30);
  
  fill(255);
  
  
  //param; formatting minx, miny, maxx, maxy
  let consolidatedText = ''
  for (let i = 0; i < boroSentence.length; i++) {
    consolidatedText+=boroSentence[i];
    consolidatedText+=summarySentence[i];
    consolidatedText+=sexSentence[i];
    consolidatedText+=ageSentence[i];
  }
  text(consolidatedText, 20, 20, 1430, 770);
  
}


