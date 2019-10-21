// const input = +prompt('Any number');
//
// switch (input) {
//   case 18:
//     console.log('You are 18');
//     showMessage();
//     break;
//   case 22:
//   case 23:
//     console.log('You are 22 & 23');
//     showMessage()
//     break;
//   default:
//     console.log('You are not 18 or 22');
//     showMessage();
// }
//
// function showMessage(message) {
//   // var внутри функции остается там
//   console.log(message);
// }
//

function ask(question, yes, no) {
  let isYes = confirm(question);
  isYes ? yes() : no ();
}

function yes() {
 alert('yesssss');
}

function no() {
  alert('nooo');
}


ask ('Do youdfdfdf want?', yes, no)