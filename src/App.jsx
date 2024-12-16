import taskArray from "../tasks.js";

function App() {

  const inProgress = taskArray.filter(currItem => currItem.state === "backlog" || currItem.state === "in_progress");

  const completed = taskArray.filter(currItem => currItem.state === "completed");

  const printList = (array) => {
    return array.map((currItem) =>
    (<li key={currItem.id} className="style-none">
      <div className="title-elem"><strong>{currItem.title}</strong></div>
      <span className={`state ${currItem.state}`}>{currItem.state}</span>
      <div className="elem">Priorità: {currItem.priority}</div>
      <div className="elem">Tempo stimato: {currItem.estimatedTime}</div>
    </li>))
  }


  return (
    <>
      <header className="header">
        <h1 className="container">Task Manager</h1>
      </header>
      
      <main>
        
      <div className="container">
        <section className="current-task">
          <h2 className="curr-task">Current task {inProgress.length}</h2>
          <ul>
            {printList(inProgress)}
          </ul>
        </section>
        
        <hr />
        <section className="completed-task">
          <h2 className="completed-task">Completed task {completed.length}</h2>
          <ul>
            {printList(completed)}
          </ul>
        </section>
      </div>

      </main>
    </>
  )
}

export default App
