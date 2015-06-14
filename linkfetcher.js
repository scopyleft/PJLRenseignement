self.addEventListener('message', function(e) {
  function reqListener() {
    self.postMessage(this.responseText);
  }
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open("get", e.data, true);
  oReq.send();
});
