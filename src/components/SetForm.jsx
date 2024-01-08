import React from "react";
import { useState } from "react";

const Set = () => {

  const [newSet, setNewSet] = useState("");
  // const [input, setInput] = useState({ exerciseName: '', weight: '', reps: ''});
  const [input, setInput] = useState([]);
  // console.log(input);

  const handleSubmit = (event) => {
    event.preventDafault(); // prevent page from refreshing

    setInput((input) => {
      return [
        ...input.value
      ]
    })

    setNewSet("")
  }
  
  // const change = (e) => {
  //   setNewSet(e.target.value)
  // }

  return (
    <div>
      {/* <form> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="excersize_name" 
          id="excersize_name" 
          placeholder="excersize name"
          value={newSet}
          onChange={e => setNewSet(e.target.value)}
        />

        <input type="number" name="weight" id="weight" placeholder="lbs" />
        <input type="number" name="reps" id="reps" placeholder="Must be greater than 0" />

        <button type="submit">Submit</button>
      </form>

      <ol>
        {input.map(e => {
          return(
            <li key={input.id}>
              {input.value}
            </li>
          )
        })}
        {/* <li>{newSet}</li> */}
      </ol>
    </div>
  )
}

export default Set;