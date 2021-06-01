import React, { useRef } from 'react'
import styles from './OneTask.module.scss'
import { completeTask, deleteTask, sortTasks } from '../../../store/actionCreators'
import { useDispatch } from 'react-redux'

const OneTask = (props) => {
  const taskRef = useRef()
  const dispatch = useDispatch()

  //выполняется при выполнении задачи
  const completeTask = () => {
    taskRef.current.classList.toggle(`${styles.taskСompleted}`)
    dispatch(completeTask(props.index))
    //после выполнения анимации передвигаем выполненные задачи в конец
    setTimeout(() => {
      dispatch(sortTasks())
    }, 1000)
  }

  //выполняется при удалении задачи
  const deleteTask = () => {
    console.log(styles)
    taskRef.current.classList.add(`${styles.taskRemote}`)
    setTimeout(() => {
      dispatch(deleteTask(props.index))
    }, 1000)
  }

  return (
    <div
      className={`${styles.task} ${props.task.completed ? styles.taskСompleted : ''}`}
      ref={taskRef}>
      <div className={styles.task__checkboxArea}>
        <label className={styles.task__checkboxOther} onClick={completeTask}>
          <input className={styles.task__customCheckbox} type="checkbox" />
        </label>
      </div>

      <div className={styles.task__description}>{props.task.description}</div>

      <button className={styles.task__btnDelete} onClick={deleteTask}>
        удалить
      </button>
    </div>
  )
}

export default OneTask
