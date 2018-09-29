module.exports = function check(str, bracketsConfig) {
  var temporary = str.split('');

  for (let a = 1; a < temporary.length; a++) {
    for (let b = 0; b < bracketsConfig.length; b++) {
      if ((temporary[a] === bracketsConfig[b][1]) && (temporary[a - 1] === bracketsConfig[b][0])) {
        temporary.splice(a - 1, 2);
        a = a - 2;
      }
    }
  }
  return (temporary.length > 0) ? false : true;
}
