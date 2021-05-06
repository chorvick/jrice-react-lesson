import React, { useState, useEffect } from "react";

export const Home = () => {
  const [person, setPerson] = useState("Justin");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setQuestions(res);
      });
  }, []);

  return (
    <div>
      <h1>Hello {person}</h1>
      <button onClick={() => setPerson("Cliff")}>Click here</button>
      <p>{JSON.stringify(questions)}</p>
    </div>
  );
  //     );;
};
// export class Home extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       person: "Justin"
//     };
//   }

//   handleChange = () => {
//     this.setState({ person: "Cliff" });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Hello {this.state.person}</h1>
//         <button onClick={() => this.handleChange()}>Click here</button>
//       </div>
//     );
//   }
// }
