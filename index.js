function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var stringTest = "hello!";
  var stringTest2 = "HELLO!";
  var stringTest3 = "I love you, Grandma.";
  if (string === stringTest)
    return "I can't hear you!";
  else if (string === stringTest2)
    return "YES INDEED!";
  else if (string === stringTest3)
    return "I love you, too.";
}
