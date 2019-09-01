function Stopwatch() {
  let stopT,
    startT,
    running,
    duration = 0;
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    },set: function(value){
        duration = value;
    }
  });
   Object.defineProperty(this, "startT", {
    get: function() {
      return startT;
    },set: function(value){
        startT = value;
    }
  });
   Object.defineProperty(this, "running", {
    get: function() {
      return running;
    },set: function(value){
        running = value;
    }
  });
   Object.defineProperty(this, "stopT", {
    get: function() {
      return stopT;
    },set: function(value){
        stopT = value;
    }
  });
}
const sw = new Stopwatch();
Stopwatch.prototype.start = function() {
    if (this.running) throw new Error("Stopwatch has already started.");
    this.running = true;
    this.startT = new Date();
  };
Stopwatch.prototype.stop = function() {
    if (!this.running) throw new Error("Stopwatch is not started.");
    this.running = false;
    this.stopT = new Date();
    const seconds = (this.stopT.getTime() - this.startT.getTime()) / 1000;
    this.duration += seconds;
  };
  Stopwatch.prototype.reset = function() {
    this.stopT = null;
    this.startT = null;
    this.running = false;
    this.duration = 0;
  };