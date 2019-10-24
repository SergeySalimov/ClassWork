// let car = {
//   type: 'BMW',
//   model: '320D',
//   engine: 'Diesel',
//   'body color': 'red',
// };
// let modelVar = 'model';
// document.write(car.type);
// document.write('<br/>');
// document.write(car[modelVar]);
// document.write('<br/>');
// document.write(car['engine']);
//
//
// let year = prompt('Year of manufacturing?');
// if (year) {
//   car.year = year;
// }
// document.write('<br/>');
// document.write(car['year']);
//
//
// console.log(car);
//
// delete car.year;
// car['body color'] = 'grey';
// console.log(car);

function getUser(name, surname, age, gender) {
  return {
    name: `${name} ${surname}`,
    age,
    gender,
  }
}

let user = getUser('Vasia', 'Pupkin', 23, 'M');
console.log(user);


