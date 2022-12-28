import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.taimerRef = React.createRef();
//   }
//   state = {
//     numbers: [],
//   };
//   startFunc = () => {
//     this.taimerRef.current = setInterval(
//       () =>
//         this.setState({
//           numbers: [...this.state.numbers, this.state.numbers.length + 1],
//         }),
//       1000
//     );
//   };
//   stopFunc = () => {
//     clearInterval(this.taimerRef.current);
//   };
//   againFunc = () => {
//     clearInterval(this.taimerRef.current);
//     this.setState({
//       numbers: [],
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.startFunc}>start</button>
//         <button onClick={this.stopFunc}>stop</button>
//         <button onClick={this.againFunc}>again</button>
//         <ul>
//           {this.state.numbers.map((num) => (
//             <li key={num}>{num}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
//}
function App() {
  const [value, setvalue] = useState("");
  const [items, setitems] = useState([]);

  const onChange = (event) => {
    setvalue(event.target.value);
  };

  const onAddClick = () => {
    const newItem = { value: value, id: uuidv4(), completed: false };
    setitems([...items, newItem]);
    setvalue("");
  };

  const onCheckChange = (id) => {
    setitems(
      items.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return {
          ...item,
          completed: !item.completed,
        };
      })
    );
  };

  const onRemove = (removeItem) => {
    setitems(
      items.filter((item) => {
        return item.id !== removeItem.id;
      })
    );
  };
  const onSave = (newValue, newItem) => {
    setitems(
      items.map((item) => {
        if (item.id !== newItem.id) {
          return item;
        }
        return {
          ...item,
          value: newValue,
        };
      })
    );
  };

  return (
    <div className="App">
      <div>
        <TextField
          label="Todo"
          variant="outlined"
          value={value}
          onChange={onChange}
        />
        <Button onClick={onAddClick} variant="contained">
          Add
        </Button>
      </div>
      <ul>
        {items.map((elem) => (
          <TodoItem
            key={elem.id}
            data={elem}
            onCheckChange={onCheckChange}
            onRemove={onRemove}
            onSave={onSave}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
