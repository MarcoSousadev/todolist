import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { TaskArea } from './components/TaskArea'


function App() {
  return ( 
    <div >
      <Header/>
        <div className={styles.wrapper}>
        
            <main> 
            <TaskArea/>
              
            </main>
        </div>
   

    </div>

  )
}

export default App
