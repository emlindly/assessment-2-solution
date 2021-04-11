import { useSelector } from 'react-redux';
import SubmitTask from './components/SubmitTask';

import './App.css';

import { selectTaskList } from './state/taskList/taskListSlice';
import ToDo from './components/ToDo';

function App() {
  const taskListArr = useSelector(selectTaskList);
  console.log(taskListArr);

  return (
    <div className="App">
      <section>
        <h1>Assessment #2 - The Todo List</h1>
        <SubmitTask />
        {taskListArr.map((todo, index) => {
          return <ToDo todo={todo} index={index} key={index}/>
        })}
      </section>
    </div>
  );
}

export default App;
