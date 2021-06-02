export enum tasksReducerATType {
  ADD_TASK = 'ADD_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
  DELETE_TASK = 'DELETE_TASK',
  SORT_TASKS = 'SORT_TASKS',
  CHANGE_TASK_ID = 'CHANGE_TASK_ID',
}

export type tasksReducerAction = addTaskAC | completeTaskAC | deleteTaskAC | sortTasksAC

export interface addTaskAC {
  type: tasksReducerATType.ADD_TASK
  description: string
}

export interface completeTaskAC {
  type: tasksReducerATType.COMPLETE_TASK
  taskID: number
}

export interface deleteTaskAC {
  type: tasksReducerATType.DELETE_TASK
  taskID: number
}

export interface sortTasksAC {
  type: tasksReducerATType.SORT_TASKS
}
