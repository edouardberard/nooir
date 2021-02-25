// Credits
// Most of code from by The Coding Train / Daniel Shiffman
//
//
// All styling mostly happens in this file as I couldn't move it over HTML & CSS
// Sorry for all the styling tags
// 
// 

function setup() {
  noCanvas();


  // Button 
  


  // Description / Instruction styling
  p3 = createP('Say something and check if your speech is toxic.');
  p3.style('color', 'black');
  p3.style('font-size', '18px');
  p3.style('font-family', 'nooir');
  p3.style('position', 'fixed');
  p3.style('bottom', '0');
  p3.style('right', '0');
  p3.style('padding', '20px');

  //poseNet set up
  
    //noCanvas();
    let lang = navigator.language || 'en-US';
    let speechRec = new p5.SpeechRec('en-GB', gotSpeech);
  
    let continuous = true;
    let interim = false;
    speechRec.start(continuous, interim);
  
    function gotSpeech() {
      if (speechRec.resultValue) {
        p = createP(speechRec.resultString);
        //p.style('position', 'absolute');
        p.style('font-size', '35px');
        p.style('font-family', 'nooir');
        p.style('top', '30%');
        p.style('margin-left', 'auto');
        p.style('margin-right', 'auto');
        p.style('right', '0');
        p.style('left', '0');
        p.style('text-align', 'left');
        p.style('line-height', '1');
        p.style('width','50%');
      }
    }
  
}



  


