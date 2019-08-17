onmessage = function(e){
    var total = 0;
      for (var i = 0; i <e.data; i++) {
        total += i;
      }
      console.log(total);
      postMessage(total);
}