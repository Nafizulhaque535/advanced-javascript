const students = [
    {id: 21, name: 'Nafiz'},
    {id: 31, name: 'Meherab'},
    {id: 41, name: 'Aftab'},
    {id: 71, name: 'Jony'}
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id > 40);
const biggerOne = students.find( s => s.id > 40);
console.log(biggerOne);