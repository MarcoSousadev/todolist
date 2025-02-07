import { useState } from "react"
import styles from './noContent.module.css'


export function NoTask() {

  return (
    <div className={styles.noTaskDisplay}>
      <img className={styles.contentImgSize} src='../formsImage.png' alt="" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}