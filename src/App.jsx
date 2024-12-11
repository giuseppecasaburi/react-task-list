import taskArray from "../tasks.js";

function App() {

  const inProgress = taskArray.filter(currItem => currItem.state.includes("backlog") || currItem.state.includes("in_progress")) 
  
  const completed = taskArray.filter(currItem => currItem.state === "completed") 

  console.log(completed, inProgress);
  
  
  return (
    <>
    <h1>Task Manager</h1>
    <h2>Current task {inProgress.length}</h2>
    <ul>
      {inProgress.map((currItem) => (<li key={currItem.id} className="style-none">
        <div><strong>{currItem.title}</strong></div>
        <div>Priorità: {currItem.priority}</div>
        <div>Tempo stimato: {currItem.estimatedTime}</div>
      </li>))}
    </ul>
    <h2>Completed task {completed.length}</h2>
    <ul>
      {completed.map(currItem => <li key={currItem.id} className="style-none">
        <div><strong>{currItem.title}</strong></div>
        <div>Priorità: {currItem.priority}</div>
        <div>Tempo stimato: {currItem.estimatedTime}</div>
        </li>)}
    </ul>
    </>
  )
}

export default App
