// console.log(document.getElementById('abc'));
// console.log(document.getElementsByClassName('xyz'));
// console.log(document.getElementsByTagName('h1'));

// const id = document.getElementById('abc')
// console.log(id);

const parent = document.getElementById('parent')
const child = document.getElementById('child')
const subchild = document.getElementById('subchild')

parent.addEventListener('click', () => { console.log(parent.innerHTML) }, true)
child.addEventListener('click', () => { console.log(child.innerHTML) }, true)
subchild.addEventListener('click', (e) => { console.log(subchild.innerHTML) }, true)