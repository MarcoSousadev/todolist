import { useState } from 'react'
import { Task } from './Task'
import styles from './TaskArea.module.css'
import { NoTask } from './noContent'




export function TaskArea (){

  const [task, setTask] = useState([])

  const [newTaskInputText, setNewTaskInputText ] = useState('')


  function handleCreateNewTask() {
    event.preventDefault()

    setTask([...task, newTaskInputText])

    setNewTaskInputText('')
  }

  function handleNewTextChange() {
    setNewTaskInputText(event.target.value)
  }

  function deleteTask(taskToDelete) {
    const taskWithoutDeletedOne = task.filter(task => {
      return task !== taskToDelete
    })
    setTask(taskWithoutDeletedOne)
  }

  return (
    <div>
      <div className={styles.contetContainer}>
        <form onSubmit={handleCreateNewTask} className={styles.form}>
          <textarea
            value={newTaskInputText}
            name="taskText"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTextChange}
          />
          <button className={styles.create}>
            Criar
            <img
              className={styles.contentImgSizePlus}
              src="../plus.png"
              alt=""
            />
          </button>
        </form>
      </div>
      <div className={styles.taskContent}>
        <header className={styles.taskContentContainer}>
          <div className={styles.headerContainer}>
            <div className={styles.headerTaskContainer}>
              <strong className={styles.createdCounterTaskContent}>
                tarefas criadas
              </strong>
              <span className={styles.contentSpan} id="value">
                {task.length}
              </span>
            </div>
            <div className={styles.headerTaskContainer}>
              <strong className={styles.doneCounterTaskContent}>
                Concluidas
              </strong>
              <span className={styles.contentSpan} id="value">
                0
              </span>
            </div>
          </div>
          <div className={styles.taskContentContainerDiv}>
            <div>
              {task.length !== 0 ? (
                task.map(task => {
                  return (
                    <Task
                      content={task}
                      deleteTask={deleteTask}
                      toggleToConcludeTask={checked}
                    />
                  )
                })
              ) : (
                <NoTask />
              )}
            </div>
          </div>
        </header>
        <div></div>
      </div>
    </div>
  )
}