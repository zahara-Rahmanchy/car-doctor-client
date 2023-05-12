// import {useState} from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Header from "./components/Header";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleInput = e => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const user = {name, email};
//     console.log(user);

//     // sending the data using post method
//     fetch("http://localhost:5000/users", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//       });
//   };
//   return (
//     <>
//       <Header></Header>
//       <h1>Car crud</h1>
//       <form onSubmit={handleInput}>
//         <input type="text" name="name" placeholder="name" />
//         <br />
//         <input type="email" name="email" placeholder="Email" />
//         <br />
//         <input type="submit" value="Add User" />
//       </form>
//     </>
//   );
// }

// export default App;
