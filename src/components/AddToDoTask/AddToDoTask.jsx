import React, { useRef } from 'react'
import styles from './AddToDoTask.module.scss'

import { addTask } from '../../store/actionCreators'
import { useDispatch } from 'react-redux'

const AddToDoTask = () => {
  const inputEl = useRef()
  const dispatch = useDispatch()
  const addTaskOnClick = () => {
    dispatch(addTask(inputEl.current.value))
    inputEl.current.value = ''
  }
  return (
    <section className={styles.container}>
      <div className={styles.addToDoArea}>
        <div className={styles.addToDoArea__inputWrapper}>
          <input
            className={styles.addToDoArea__descriptionTask}
            type="text"
            placeholder="Опишите задачу"
            ref={inputEl}
          />
        </div>
        <div className={styles.addToDoArea__buttonWrapper}>
          <button className={styles.addTask} onClick={addTaskOnClick}>
            add
          </button>
        </div>
      </div>
    </section>
  )
}

export default AddToDoTask
