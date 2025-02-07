import styles from './Header.module.css'
 

export function Header (){
  return (
    
    <header className={styles.header}>
      <img className={styles.rocketImage} src='../rocket.png' alt="" />
      <strong className={styles.contentHeaderLogo}>toDo</strong>
    </header>
  )
}