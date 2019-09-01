function Stopwatch() {
  let stopT,
    startT,
    running,
    duration = 0;

  this.start = function() {
    if (running) throw new Error("Stopwatch has already started.");
    running = true;
    startT = new Date();
  };
  this.stop = function() {
    if (!running) throw new Error("Stopwatch is not started.");
    running = false;
    stopT = new Date();
    const seconds = (stopT.getTime() - startT.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function() {
    stopT = null;
    startT = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}
const sw = new Stopwatch();
