hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];

rainbow = hero.concat(native, destination);
rainbow.reverse();

temp = rainbow.splice(0, 1);
rainbow.splice(rainbow.length - 1);
rainbow.shift();
rainbow.unshift('Richard');
rainbow.push('Gave', 'Battle', temp.join(''), 'Vain');

console.log(rainbow);

htmlString = `<div class="container">`;

for (i = 0; i < rainbow.length; i++) {
    htmlString += `<div class="item">`;
    htmlString += `<div class="circle ${rainbow[i]}"></div>`;
    htmlString += `<p class="text">${rainbow[i]}</p>`;
    htmlString += `</div>`;
}

htmlString += `</div>`;
document.write(htmlString);