import React from 'react'

const users = [
    { id: '1', firstName: 'Robin', lastName: 'Wieruch' },
    { id: '2', firstName: 'Dennis', lastName: 'Wieruch' },
  ];
  
  
  function Item({ item }) {
      console.log(item)
      return (
          <li>
        {item.firstName} {item.lastName}
      </li>
    );
}

function List({ list }) {
    console.log(list)
  if (!list) {
    return null;
  }
console.log(list)
  return (
    <ul>
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

const MoreExamples = () => {
    return (
      <div>
         <h1>Hello Conditional Rendering</h1>
          <List list={users} />
        
      </div>
    )
  }
  
  export default MoreExamples
  


//! this is not best practice
// function List({ list }) {
//     if (!list) {
//       return null;
//     }
  
//     if (!list.length) {
//       return <p>Sorry, the list is empty.</p>;
//     } else {
//       return (
//         <div>
//           {list.map(item => (
//             <Item item={item} />
//           ))}
//         </div>
//       );
//     }
//   }

//todo here is best practice
//   function List({ list }) {
//     if (!list) {
//       return null;
//     }
  
//     if (!list.length) {
//       return <p>Sorry, the list is empty.</p>;
//     }
  
//     return (
//       <div>
//         {list.map(item => (
//           <Item item={item} />
//         ))}
//       </div>
//     );
//   }


//?? switch case example
// function Notification({ text, status }) {
//     if (status === 'info') {
//       return <Info text={text} />;
//     }
  
//     if (status === 'warning') {
//       return <Warning text={text} />;
//     }
  
//     if (status === 'error') {
//       return <Error text={text} />;
//     }
  
//     return null;
//   }





 