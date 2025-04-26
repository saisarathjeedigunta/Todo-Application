import axios from 'axios'
import { useEffect, useState } from "react";
import Head from "./components/head";
import List from "./components/list";
import Input from "./components/input";
import Button from "./components/button";
function App() {
  const [tasks, setTasks] = useState([]);

  const handleRemove = async (index) => {
    const taskId = tasks[index].id;
    try{
      await axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}/`);
      setTasks(() => tasks.filter((_, i) => i !== index));
    }catch(error){
      console.error("Error deleting task:", error);
    }
};

useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/tasks/")
    .then(res => setTasks(res.data.results))
    .catch(err => console.error("Error fetching tasks : ", err))
}, []);


  return (
    <div>
        <Head />
        <Input tasks={tasks} setTasks={setTasks} />
          <List tasks={tasks} >
          <Button tasks={tasks} onRemove={handleRemove}/>
          </List>
    </div>
  );
}

export default App;
