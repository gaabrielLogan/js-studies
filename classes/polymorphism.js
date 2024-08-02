class Bird {
    speak() {
      return 'Bird chirps.';
    }
  }
  
  class Parrot extends Bird {
    speak() {
      return 'Parrot talks.';
    }
  }
  
  const bird = new Bird();
  const parrot = new Parrot();
  
  console.log(bird.speak()); 
  console.log(parrot.speak()); 
  