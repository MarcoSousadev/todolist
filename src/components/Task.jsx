import { useState } from 'react'
import styles from './Task.module.css'

export function Task({ content, deleteTask, onDoneTasks }) {
  const [checked, setChecked] = useState(false)
  const [counter, setCounter] = useState(1)

  const [newObject, setNewObject] = [{ checked, counter }]

  const toggleToConcludeTask = () => {
    setChecked(tagChecked => !tagChecked)
    if (checked === true) {
      setCounter(counter + 1)
    }
    const functionToTest = () => {
      setNewObject({ ...checked, ...counter })
      const sumOfNewObject = newObject.reduce(function (total = 0, item) {
        return total + item.counter
      }, 0)
    }
    console.log(newObject)
    console.log(sumOfNewObject)
  }

  function handleDeleteTask() {
    deleteTask(content)
    console.log(content)
  }
  return (
    <div className={styles.contentTaskContainer}>
      <button onClick={toggleToConcludeTask}>
        {checked ? (
          <img
            className={styles.checkboxImg}
            alt="checked"
            src="/checked.png"
          />
        ) : (
          <img
            className={styles.checkboxImg}
            alt="noncheked"
            src="/nonchecked.png"
          />
        )}
      </button>
      <p className={styles.taskContentDescription}>{content}</p>
      <button onClick={handleDeleteTask} title="Deletar task">
        <img className={styles.trashCamImg} src="./Trash.png" alt="" />
      </button>
    </div>
  )
}

//{`/public/${item?.checked ?"checked.png" : "nonchecked.png"}`}
