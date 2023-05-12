// import React, {useState} from "react";
// import {Link, useLoaderData} from "react-router-dom";
// const users = () => {
//   const data = useLoaderData();
//   const [users, setUsers] = useState(data);

//   const handleDelete = _id => {
//     console.log(_id);
//     fetch(`http://localhost:5000/users/${_id}`, {
//       method: "DELETE",
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         if (data.deletedCount > 0) {
//           alert("deleted successfully");
//           const remaining = users.filter(user => user._id !== _id);
//           setUsers(remaining);
//         }
//       });
//   };
//   return (
//     <div>
//       <h1>users: {data.length}</h1>
//       <div>
//         {users.map(d => (
//           <p key={d._id}>
//             {d.name} : {d.email} {d._id}{" "}
//             <Link to={`/update/${d._id}`}>
//               <button>Update</button>
//             </Link>
//             <button onClick={() => handleDelete(d._id)}>X</button>
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default users;
