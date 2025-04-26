const list = ({tasks, children}) => {
  return (
    <div className="border my-5 py-5 w-full">
        <div className="flex justify-between gap-x-4  px-5 w-full">
        <ul>
            {tasks.map((task, index) => (<li key={index} className="py-2">{task.work}</li>))}
            
        </ul>
        <ul>
            {tasks.map((task, index) => (<li key={index} className="py-2">{task.date}</li>))}
            
        </ul>
        <div>
            {children}
        </div>
    </div>
    </div>
    
  )
}

export default list