import React from "react";

const Set = () => {
  return (
    <div>
      <form>
        <input type="text" name="excersize_name" id="excersize_name" placeholder="excersize name" />
        <input type="number" name="weight" id="weight" placeholder="lbs" />
        <input type="number" name="reps" id="reps" placeholder="Must be greater than 0" />

        <button>submit</button>
      </form>
    </div>
  )
}

export default Set;