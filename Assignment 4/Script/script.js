// This works
(function(window){
    var helloSpeaker={}
    helloSpeaker.speakWord = "Hello";
    helloSpeaker.speak=function(name) {
      console.log(helloSpeaker.speakWord + " " + name);
    }
    window.helloSpeaker=helloSpeaker;
  })(window);
  
  // helloSpeaker.speak("Mick");
  // up till here
  
  // And this works too 
  (function(window){
    var byeSpeaker={}
    byeSpeaker.speakWord = "Good Bye";
    byeSpeaker.speak=function(name) {
      console.log(byeSpeaker.speakWord + " " + name);
    }
    window.byeSpeaker=byeSpeaker;
  })(window);
  
  // byeSpeaker.speak("Daddy");
  // Down to here
  
  // And this too
  (function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
      for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
          byeSpeaker.speak(names[i]);
        } else {
          helloSpeaker.speak(names[i]);
        }
      }  
  })();
  // All Done