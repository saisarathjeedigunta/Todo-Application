const button = ({tasks, onRemove}) => {
    
  return (
    <div className="flex flex-col gap-y-2"
    >
        {tasks.map((_, index) => (
            <button
            key={index}
            className="px-3 py-1 bg-blue-500 text-white rounded mt-1 hover:bg-red-400"
             onClick={() => onRemove(index)}>Remove</button>
        ))}
    </div>
  )
}

export default button