self.addEventListener('message', function(e) {
  function requestLoaded() {
    self.postMessage(this.responseText);
  }
  var request = new XMLHttpRequest();
  request.onload = requestLoaded;
  request.open("get", e.data, true);
  request.send();
});
