import React from "react";
import MyForm from "../form/form";

function Home(props) {
  console.log("Home component props:", props);
  return (
    <div>
     
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      
    </div>
  );
}
export default Home;