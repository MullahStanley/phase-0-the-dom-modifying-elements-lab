// Write your code here!
const main= document.querySelector("#main");
main.remove();

const newHeader= document.createElement('h1')
newHeader.setAttribute('id','victory')
document.body.append(newHeader)
newHeader.innerText="MUllah is the champion"