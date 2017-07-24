import axios from 'axios';
import * as httpUtil from './httpUtil';

// callback hell
// request('something', (response) => {
//   request(responst.data, (response) => {
//     request(responst.data, (response) => {
//       request(responst.data, (response) => {
//         request(responst.data, (response) => {
//           request(responst.data, (response) => {
//             request(responst.data, (response) => {
//               request(responst.data, (response) => {
//                 request(responst.data, (response) => {

//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// })

// // Promise = Things to study
// request('something').then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).catch(err => {

// })

const BASE_URL = 'https://todo-simple-api.herokuapp.com';

const TODO_URL = `${BASE_URL}/todos`;

httpUtil.get(TODO_URL).then(response => {

  response.data.data.forEach((todo) => {
    let div = document.createElement('div');
    div.innerHTML = todo.title;
    document.getElementsByTagName('body')[0].appendChild(div);
  })
})

