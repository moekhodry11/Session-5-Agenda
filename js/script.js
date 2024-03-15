function selectText() {
  const codeBlock = document.getElementById("codeBlock");
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(codeBlock);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(codeBlock);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

function copyText() {
  /* Select text area by id*/
  var Text = document.getElementById("textbox");

  /* Select the text inside text area. */
  Text.select();

  /* Copy selected text into clipboard */
  navigator.clipboard.writeText(Text.value);

  /* Set the copied text as text for 
  div with id clipboard */
  document.getElementById("clipboard").innerHTML = Text.value;
}

