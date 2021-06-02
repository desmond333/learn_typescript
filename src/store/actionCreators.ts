import {tasksReducerATType, addTaskAC, completeTaskAC, deleteTaskAC, sortTasksAC } from '../types/tasksReducerActionTypes'

export const addTask = (description: string): addTaskAC => ({
  type: tasksReducerATType.ADD_TASK,
  description,
})

export const completeTask = (taskID: number): completeTaskAC => ({
  type: tasksReducerATType.COMPLETE_TASK,
  taskID,
})

export const deleteTask = (taskID: number): deleteTaskAC => ({
  type: tasksReducerATType.DELETE_TASK,
  taskID,
})

export const sortTasks = (): sortTasksAC => ({ type: tasksReducerATType.SORT_TASKS })
