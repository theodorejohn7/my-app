import React from 'react';
import ReactDOM from 'react-dom';
// function formatName2(user) {
//     return user.firstName + ' ' + user.lastName;
//   }
//   const user = {
//     firstName: 'Hartrgper',
//     lastName: 'Perez'
//   };
//   function formatName(){
//     const element = (
//     <h1>
//       Hello, {formatName2(user)}
//     </h1>

//   );
// return element;
// }

function formatName(user) {
   

    const element = (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
    
    return element;





  }


export default formatName;
