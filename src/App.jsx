import taskArray from "../tasks.js";

function App() {

  const inProgress = taskArray.filter(currItem => currItem.state === "backlog" || currItem.state === "in_progress"); 
  
  const completed = taskArray.filter(currItem => currItem.state === "completed");

  const printList = (array) => {
    return array.map((currItem) => 
      (<li key={currItem.id} className="style-none">
        <div><strong>{currItem.title}</strong></div>
        <div>Priorità: {currItem.priority}</div>
        <div>Tempo stimato: {currItem.estimatedTime}</div>
      </li>))
  }
  
  
  return (
    <>
    <h1>Task Manager</h1>
    <h2>Current task {inProgress.length}</h2>
    <ul>
      {printList(inProgress)}
    </ul>
    <h2>Completed task {completed.length}</h2>
    <ul>
      {printList(completed)}
    </ul>
    </>
  )
}

export default App
