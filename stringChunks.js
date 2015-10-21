function stringChunk(str, n) {

  var empty = [];

  if (n > 0) {
    return str.match(new RegExp('.{1,' + n + '}', 'g'));
  } else {
    return empty;
  }
}
