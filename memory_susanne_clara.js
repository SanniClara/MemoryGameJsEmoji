
function startmenü (){
background (120,150,255);

fill(255);
textSize(40);
text ("Hier kannst du Memory spielen",140,100);

fill(200,240,200);
noStroke();
rect (140,240,150,80);
fill(0,0,200);
textSize(40);
text("Level 1",150,293);


fill(200,240,200);
noStroke();
rect (340,240,150,80);
fill(0,0,200);
textSize(40);
text("Level 2",350,293);


fill(200,240,200);
noStroke();
rect (540,240,170,80);
fill(0,0,200);
textSize(27);
text("Beastmode !!",545,293);

}



var startmenüVariable = true;
var Level1 = false;
var Level2 = false;
var Level3 = false;  

function mousePressed() {
    
    if(startmenü){

    if(mouseX>=140 && mouseX<=290 && mouseY>=240 && mouseY<=320) {
        console.log("Level 1");   
        Level1 = true;
        startmenüVariable = false;
    }

     
    if(mouseX>=340 && mouseX<=490 && mouseY>=240 && mouseY<=320) {
            console.log("Level 2");  
            Level2 = true; 
            startmenüVariable = false;
    }
   

    if(mouseX>=540 && mouseX<=690 && mouseY>=240 && mouseY<=320) {
        console.log("Level 3"); 
        Level3 = true;
        startmenüVariable = false;
    
    }
    }
}


var symboleLevel1 = [
    
        "A", "A",
        "B", "B",
        
    ];




    var symboleLevel2 = [
        
            "🎺", "🎺",
            "🎸", "🎸",
            "🥁", "🥁",
            "🎼", "🎼",
            "🎹", "🎹",
            "🎤", "🎤",
            "🎻", "🎻",
            "🎷", "🎷",
        ];



        var symboleLevel3 = [
            
                    "🐶","🐶",
                    "🐱","🐱",
                    "🐭","🐭",
                    "🐹","🐹",
                    "🐰","🐰",
                    "🦊","🦊",
                    "🐻","🐻",
                    "🐼","🐼",
                    "🐨","🐨",
                    "🐯","🐯",
                    "🦁","🦁",
                    "🐧","🐧",
                    "🦋","🦋",
                    "🐌","🐌",
                    "🐚","🐚",
                    "🐞","🐞",
                    "🐜","🐜",
                    "🐢","🐢"
                  
                     
            ];

    var karten = [];





function karteLevel1() {
    this.symbol = "";
    this.aufgedeckt = false;
    this.positionx = 0;
    this.positiony = 0;
    this.gelöst = false;
}


function karteLevel2() {
    this.symbol = "";
    this.aufgedeckt = false;
    this.positionx = 0;
    this.positiony = 0;
    this.gelöst = false;
}



function karteLevel3() {
    this.symbol = "";
    this.aufgedeckt = false;
    this.positionx = 0;
    this.positiony = 0;
    this.gelöst = false;
}



function gewonnen (){
    var allegelöst = true;
    for(var i = 0; i < karten.length; i++){
        if (karten[i].gelöst == false){
            allegelöst = false;
        }
     
    }
    return allegelöst;
}


var einmalig = false;
var randomNumber;

function startLevel1 (){
for (var positionX = 1; positionX < 3; positionX++) {
    for (var positionY = 1; positionY < 3; positionY++) {
        karten.push(new karteLevel1());
        
        karten[karten.length - 1].positionx = positionX * 110;
        karten[karten.length - 1].positiony = positionY * 110;
        randomNumber = round(random(0, symboleLevel1.length));
        if (randomNumber >= symboleLevel1.length) {
            randomNumber -= 1;
        }
        karten[karten.length - 1].symbol = symboleLevel1[randomNumber];
        symboleLevel1.splice(randomNumber, 1);


    }
}
}

function startLevel2 (){
    for (var positionX = 1; positionX < 5; positionX++) {
        for (var positionY = 1; positionY < 5; positionY++) {
            karten.push(new karteLevel2());
            
            karten[karten.length - 1].positionx = positionX * 110;
            karten[karten.length - 1].positiony = positionY * 110;
            randomNumber = round(random(0, symboleLevel2.length));
            if (randomNumber >= symboleLevel2.length) {
                randomNumber -= 1;
            }
            karten[karten.length - 1].symbol = symboleLevel2[randomNumber];
            symboleLevel2.splice(randomNumber, 1);
    
    
        }
    }
    } 

    function startLevel3 (){
        for (var positionX = 1; positionX < 7; positionX++) {
            for (var positionY = 1; positionY < 7; positionY++) {
                karten.push(new karteLevel3());
                
                karten[karten.length - 1].positionx = positionX * 110;
                karten[karten.length - 1].positiony = positionY * 110;
                randomNumber = round(random(0, symboleLevel3.length));
                if (randomNumber >= symboleLevel3.length) {
                    randomNumber -= 1;
                }
                karten[karten.length - 1].symbol = symboleLevel3[randomNumber];
                symboleLevel3.splice(randomNumber, 1);
        
        
            }
        }
        }


var lastCardIndex = -1;


function draw () {

   if (startmenüVariable == true){
       startmenü ();
   }
    
   if (Level1 == true){
       
   clear();
     
     karteLevel1();   
    

     if(einmalig == false){
     startLevel1 ();
     einmalig = true;

   }


     gewonnen ();
    


     background (120,150,255);
     fill(25);
     textSize(30);
     text ("Level 2",350,40);
     fill(30,30,220);
     rect (60,60,310,310);
     fill(255);
     rect (80,80,270,270);
       
    
       
    
    
    
        for (var p = 0; p < karten.length; p++) {
            fill(120, 150, 255);
            
            if (karten[p].gelöst == false) {
                rect(karten[p].positionx, karten[p].positiony, 100, 100);            
            }
    
            if (karten[p].aufgedeckt == true) {
    
                textSize(60);
                fill(0);
                text(karten[p].symbol, karten[p].positionx, karten[p].positiony + 70);
            }

            if (karten[p].gelöst == false && mouseIsPressed && mouseX > karten[p].positionx && mouseX < karten[p].positionx + 100 && mouseY > karten[p].positiony && mouseY < karten[p].positiony + 100) {
                if (p != lastCardIndex) {
                    if (lastCardIndex == -1) {
                        karten[p].aufgedeckt = true;
                        lastCardIndex = p;
                        console.log("1 Karte aufgedeckt");
                        console.log(lastCardIndex);
                    } else {
                                
                        if (karten[p].symbol == karten[lastCardIndex].symbol) {
                            karten[p].aufgedeckt = true;
                            karten[p].gelöst = true;
                            karten[lastCardIndex].gelöst = true;
                            lastCardIndex = -1;
                            console.log("karten gleich");
                            console.log(lastCardIndex);
                        } else {
                            karten[p].aufgedeckt = false;
                            karten[lastCardIndex].aufgedeckt = false;
                            lastCardIndex = -1;
                            console.log("karten ungleich");
                            console.log(lastCardIndex);
                        } 
                    }
                }
            }
        }
    
    
    
        if(gewonnen() == true) {
           
            
       
            /*clear();
            background (120,150,255);
            textSize (60);
            text("Du hast es geschafft ✌🏻",100,420); */
            clear();
            startmenüVariable = true;
            startmenü (); 
            Level1 = false; 
            karten = [];
            allegelöst = false;
            
        }
  
    
   }

   function karte() {
    this.symbol = "";
    this.aufgedeckt = false;
    this.positionx = 0;
    this.positiony = 0;
    this.gelöst = false;
}
    
   if (Level2 == true){
       clear();

        

     karteLevel2();


     if(einmalig == false){
        startLevel2 ();
        einmalig = true;
      }
        
     //var karten = [];
        
        
     gewonnen ();   
        
  
        

        
        
            background (120,150,255);
            fill(25);
            textSize(30);
            text ("Level 2",350,40);
            fill(30,30,200);
            rect (60,60,550,550);
            fill(255);
            rect (80,80,500,500);
           
        
        
        
            for (var e = 0; e < karten.length; e++) {
                fill(120, 150, 255);
                
                if (karten[e].gelöst == false) {
                    rect(karten[e].positionx, karten[e].positiony, 100, 100);            
                }
        
                if (karten[e].aufgedeckt == true) {
        
                    textSize(60);
                    text(karten[e].symbol, karten[e].positionx, karten[e].positiony + 70);
                }
        
                if (karten[e].gelöst == false && mouseIsPressed && mouseX > karten[e].positionx && mouseX < karten[e].positionx + 100 && mouseY > karten[e].positiony && mouseY < karten[e].positiony + 100) {
                    if (e != lastCardIndex) {
                        if (lastCardIndex == -1) {
                            karten[e].aufgedeckt = true;
                            lastCardIndex = e;
                            console.log("1 Karte aufgedeckt");
                            console.log(lastCardIndex);
                        } else {
        
                            if (karten[e].symbol == karten[lastCardIndex].symbol) {
                                karten[e].aufgedeckt = true;
                                karten[e].gelöst = true;
                                karten[lastCardIndex].gelöst = true;
                                lastCardIndex = -1;
                                console.log("karten gleich");
                                console.log(lastCardIndex);
                            } else {
                                karten[e].aufgedeckt = false;
                                karten[lastCardIndex].aufgedeckt = false;
                                lastCardIndex = -1;
                                console.log("karten ungleich");
                                console.log(lastCardIndex);
                            } 
                        }
                    }
                }
            }
        
        
        
            if(gewonnen() == true) {
                          
              
        
                /*clear();
                background (255);
                textSize (60);
                text("Du hast es geschafft ✌🏻",100,420); */
                
                startmenüVariable = true;
                startmenü ();  
                Level2 = false;

                karten = [];

                
            

            
                
    
            
                
        
        }
           
        
        
   } 

   if (Level3 == true){
    clear();
    
            
    
         karteLevel3();
    
    
         if(einmalig == false){
            startLevel3 ();
            einmalig = true;
          }
            
         //var karten = [];
            
            
         gewonnen ();   
            
      
            
    
            
         background (120,150,255);
         fill(255);
         textSize(30);
         text ("Level 3",350,40);
         fill(30,30,200);
         rect (60,60,770,750);
         fill(255);
         rect (80,80,720,700);
        
     
               
            
            
            
               for (var b = 0; b < karten.length; b++) {
                    fill(120, 150, 255);
                    
                    if (karten[b].gelöst == false) {
                        rect(karten[b].positionx, karten[b].positiony, 100, 100);            
                    }
            
                    if (karten[b].aufgedeckt == true) {
            
                        textSize(60);
                        text(karten[b].symbol, karten[b].positionx, karten[b].positiony + 70);
                    }
            
                    if (karten[b].gelöst == false && mouseIsPressed && mouseX > karten[b].positionx && mouseX < karten[b].positionx + 100 && mouseY > karten[b].positiony && mouseY < karten[b].positiony + 100) {
                        if (b != lastCardIndex) {
                            if (lastCardIndex == -1) {
                                karten[b].aufgedeckt = true;
                                lastCardIndex = b;
                                console.log("1 Karte aufgedeckt");
                                console.log(lastCardIndex);
                            } else {
            
                                if (karten[b].symbol == karten[lastCardIndex].symbol) {
                                    karten[b].aufgedeckt = true;
                                    karten[b].gelöst = true;
                                    karten[lastCardIndex].gelöst = true;
                                    lastCardIndex = -1;
                                    console.log("karten gleich");
                                    console.log(lastCardIndex);
                                } else {
                                    karten[b].aufgedeckt = false;
                                    karten[lastCardIndex].aufgedeckt = false;
                                    lastCardIndex = -1;
                                    console.log("karten ungleich");
                                    console.log(lastCardIndex);
                                } 
                            }
                        }
                    }
                }
            
            
            
                if(gewonnen() == true) {
                                     
                    
            
                    clear();
                    background (255);
                    textSize (60);
                    text("Du hast es geschafft ✌🏻",100,420);
            
                    startmenüVariable = true;
                    startmenü ();
                    Level3 = false;
                    karten = [];
                    
                    
            
                }
               
   }

}


