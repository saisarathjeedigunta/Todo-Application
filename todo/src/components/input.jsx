import { useState } from "react"
import axios from "axios"
const input = ({tasks, setTasks}) => {
const [work, setWork] = useState("");
const [date, setDate] = useState("");

const handleOnAdd = async () => {
    if(!work || !date) return;

    try{
      const response = await axios.post("http://127.0.0.1:8000/api/tasks/", {work,
        date,});
      setTasks([...tasks, response.data]);
      setWork("");
      setDate("");
    }catch(error){
      console.error('Error adding task : ', error);
    }
    
};

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 px-5 w-full">
          <input 
          className="border py-1 rounded border-gray-300 w-full sm:w-1/3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          type="text" 
          value={work}
          onChange={(e) => setWork(e.target.value)}
          placeholder="Enter Work" 
          />

          <input
           type="date"
           value={date}
           onChange={(e) => setDate(e.target.value)}
           className="border py-1 rounded border-gray-300 w-full sm:w-1/3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
           />

          <button 
        className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-400 w-full sm:w-1/3"
        onClick={handleOnAdd}>Add</button>
      </div>
     
  )
}

export default input