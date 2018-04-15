//StopWatch

class stopWatch{
    constructor(duration = 0,running = false){
      this.duration = duration;
      this.running = running;
      this.help;
    }
    start(){
      if(this.running){
        throw new Error('Stopwatch has already started');
      }
      this.running = true;
      let self = this;
        if (this.running){
           self.help = setInterval(function(){
              self.duration+=.01
            },1)
        } else {
          clearInterval(help)
        }
      }
    
    stop(){
      if (!this.running){
        throw new Error('Stopwatch has already stopped');
      }
      clearInterval(this.help);
      this.running = false;
      return this.duration;
    }
    reset(){
      this.duration = 0;
    }
    
  }
  
  
  const cool = new stopWatch();
  
  
  cool.start();
  cool.stop();
  cool.reset();
  