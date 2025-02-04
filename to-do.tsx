import React, { useRef, useState } from 'react'
import Confetti from 'js-confetti'
import './style.css'

const confetti = new Confetti()


const App = () => {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const [edit, setEdit] = useState(null); // Use `null` to signify no task is being edited

  const addItem = () => {
    if (text.trim()) {
      setTask([...task, text]);
      setText('');
    }
  };

  const removeItem = (index) => {
    setTask(task.filter((_, idx) => idx !== index));
  };

  const startEdit = (index) => {
    setEdit(index);   // Set `edit` to the index of the task being edited
    setText(task[index]);  // Set the text input to the current task's text
  };


  const updateItem = () =>{
    if(edit !== null){
      const data = task.map((item,idx) =>
          idx == edit ? text : item
        )
    setTask(data)
    setText('')
    setEdit(null)
    }

  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={edit === null ? addItem : updateItem}>
        {edit === null ? "Submit" : "Update"} {/* Change button text based on edit state */}
      </button>
      {
        task.map((item, key) => (
          <div key={key}>
            <p>{item}</p>
            <button onClick={() => removeItem(key)}>-</button>
            <button onClick={() => startEdit(key)}>+</button>
          </div>
        ))
      }
    </div>
  );
};





export default App
