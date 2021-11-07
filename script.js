//Övre delen
const body = document.querySelector('body');
let ul = document.createElement('ul');
ul.setAttribute('class','list');
body.appendChild(ul);
document.body.style.textAlign = 'center'

for (let i = 1; i < 6; i++) {
    const h3 = document.createElement('h3');
    body.appendChild(h3);
    h3.innerText = "Rad " + i;
    h3.style.textAlign = 'center';
    const textStorlek = i * 7; 
    h3.style.fontSize = `${textStorlek}px`;
    h3.style.color = 'hsl(240,89%,70%)';
}
const allH3 = document.querySelectorAll('h3')
for (let i = 0; i < allH3.length; i++) {
    let backHue = (60 / allH3.length) * i+495;     
    allH3[i].style.backgroundColor = `hsl(${backHue},89%, 84%)`;
}
//Nedre delen
let nummer = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
boxNummer = document.createElement('div');

body.appendChild(boxNummer);
boxNummer.style.display='flex';
boxNummer.style.border='1px solid black';
boxNummer.style.justifyContent='space-evenly';

for(let i=0; i < 3; i++) {
    let ul1 = document.createElement('ul');
    boxNummer.appendChild(ul1);
    ul1.style.listStyle='none';
    ul1.style.border='10px solid hsl(240,70%,80%)';
    ul1.style.padding='0';
    ul1.style.width='2.8rem';
    ul1.style.background='hsl(240,70%,80%)';
    if(i===0){
        for(let i=0; i < 10; i++) {
            let li = document.createElement('li');
            ul1.appendChild(li);
            li.innerHTML=i;
            li.style.textAlign='left';
            if (i%2){
                li.style.background='white';
            }
            else if(i===4) {
                li.style.background='transparent';
            }
            else {
                li.style.background='black';
                li.style.color='white';
            }
        }
    }
    else if(i===1){
        for(let i=10; i > 0; i--) {
            let li = document.createElement("li");
            ul1.appendChild(li);
            li.innerHTML=i;
            li.style.textAlign='center';
            if (i%2){
                li.style.background='black';
                li.style.color='white';
            }
            else if(i===8) {
                li.style.background='transparent';
            }
            else {
                li.style.background='white';
            }
        }
    }
    else if(i===2){
        for(let i=0; i < nummer.length; i++) {
            let li = document.createElement("li");
            ul1.appendChild(li);
            li.innerHTML=nummer[i];
            li.style.textAlign='right';
            if (i%2){
                li.style.background='white';
                li.style.color='black';
            }
            else if(i===5) {
                li.style.background='transparent';
            }
            else {
                li.style.background='black';
                li.style.color='white';
            }
        }
    }
}
