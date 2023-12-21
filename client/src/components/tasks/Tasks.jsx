import React, { useState } from 'react'
import "./Tasks.scss"
import TaskModal from '../taskModal/TaskModal'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Tasks = () => {

  const [modalShow, setModalShow] = useState(false);

  const handleComplete = ()=> {};

    const tasks = [
      {
        id:"2313",
        title: "Task 1",
        details: "Cras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odio",
        status: "completed",
      },
      {
        id:"2312",
        title: "Task 2",
        details: "Cras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odio",
        status: "tobedone",
      },
      {
        id:"2311",
        title: "Task 3",
        details: "Cras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odio",
        status: "tobedone",
      },
      {
        id:"2314",
        title: "Task 4",
        details: "Cras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odio",
        status: "completed",
      },
      {
        id:"2315",
        title: "Task 5",
        details: "Cras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odio",
        status: "completed",
      },
      {
        id:"2316",
        title: "Task 6",
        details: "Cras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odio",
        status: "tobedone",
      },
      {
        id:"2317",
        title: "Task 7",
        details: "Cra justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odio",
        status: "completed",
      },
      {
        id:"1315",
        title: "Task 8",
        details: "Cras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odio",
        status: "tobedone",
      },
      {
        id:"3315",
        title: "Task 9",
        details: "Cras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odio",
        status: "completed",
      },
      {
        id:"4315",
        title: "Task 10",
        details: "Cras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odio",
        status: "tobedone",
      },
      {
        id:"6315",
        title: "Task 11",
        details: "Cras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odioCras justo odio",
        status: "tobedone",
      },
    ]

    const tasksList = [];
    tasks.forEach(task => {
      tasksList.push(
        <div id={task.id} className={"list-group-item list-group-item-action item1"}>
          {
            task.status=="completed" ?
              <div className={"ttl completed"} onClick={()=> setModalShow(true)}>
                {task.title }
              </div> :
              <div className={"ttl"} onClick={()=> setModalShow(true)}>
                {task.title}
              </div>
          }

          <div>
            {/* <button className='view-btn'>
              View
            </button>  */}
            {
              task.status=="completed" ?
              <button className={'mrk-btn dis'} onClick={handleComplete} >
                Completed
              </button> :
              <button className={'mrk-btn'} onClick={handleComplete}>
                Mark as Completed
              </button>
            }
            
          </div>
          
          
        </div>
      )
    });



  return (
    <div className='tasksl'>
        <div className='head'>
            Tasks assigned to me :
        </div>
        <div className='tasks-list'>
            <div className='tasks-list-body'>

              <div class="list-group">
                {tasksList}
              </div>
            </div>
        </div>
        
        <TaskModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default Tasks