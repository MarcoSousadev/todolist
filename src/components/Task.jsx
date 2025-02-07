import {useState, useEffect} from 'react'
import styles from './Task.module.css'



export function Task({content, deleteTask}){
  const [checked, setChecked] = useState(false)

  const toggleToConcludeTask = () =>  {
    
    setChecked(tagChecked => !tagChecked)


    console.log(checked)
  }

  function handleDeleteTask () {

    deleteTask(content)

  }
  
  
  return(
    <div className={styles.contentTaskContainer}>
      <button onClick={toggleToConcludeTask}>
        {checked ? <img className={styles.checkboxImg} alt='checked' src="/checked.png"/> : <img className={styles.checkboxImg} alt="noncheked" src="/nonchecked.png"/>}
      </button>
      <p className={styles.taskContentDescription}>{content}</p>
      <button onClick={handleDeleteTask} title='Deletar task'>
        <img className={styles.trashCamImg} src="./Trash.png" alt="" />
      </button>
    </div>
  )
}

//{`/public/${item?.checked ?"checked.png" : "nonchecked.png"}`}