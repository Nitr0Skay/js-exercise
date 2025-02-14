//document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link'); 
anchorElement.href = 'https://google.com';

let newAnchorELement = document.createElement('a');
newAnchorELement.href = 'https://google.com';
newAnchorELement.textContent = 'This leads to Google!';
let firstParagraph = document.querySelector('p');
firstParagraph.append(newAnchorELement);

let firstH1Element = document.querySelector('h1');
firstH1Element.parentElement.removeChild(firstH1Element);

firstParagraph.parentElement.append(firstParagraph);