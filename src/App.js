import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function addData() {
    setData([...data, { name, email }]);
  }

  function removeData(index) {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <div className="form p-4">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button
            color="success"
            variant="contained"
            onClick={addData}
            className="flex items-center"
          >
            <AddIcon className="center" />
          </Button>
        </Stack>
      </div>
      <div className="data mt-4">
        {data.map((element, index) => {
          return (
            <div
              key={index}
              className="data_val p-3 bg-white rounded-lg shadow-md flex justify-between items-center mb-3"
            >
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeData(index)}
                  className="flex items-center mt-2"
                >
                  <DeleteIcon className="center" />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
