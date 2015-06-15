self.addEventListener('message', function(e) {
  function listener() {
    self.postMessage(this.responseText);
  }
  var request = new XMLHttpRequest();
  request.onload = listener;
  request.open("get", e.data, true);
  request.send();
});
