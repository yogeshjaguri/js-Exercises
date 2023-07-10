// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

function animate_string(id) {
  const element = document.getElementById(id);
  const textNode = element.childNodes[0]; // assuming no other children
  let text = textNode.data;

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}

animate_string("yogi");
