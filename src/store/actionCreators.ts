import AT from './constants'

export type actionTypes = addTaskType | completeTaskType | deleteTaskType | sortTasksType

type addTaskType = {
  type: typeof AT.ADD_TASK
  description: string
}
export const addTask = (description: string): addTaskType => ({ type: AT.ADD_TASK, description })

type completeTaskType = {
  type: typeof AT.COMPLETE_TASK
  taskId: number
}
export const completeTask = (taskId: number): completeTaskType => ({
  type: AT.COMPLETE_TASK,
  taskId,
})

type deleteTaskType = {
  type: typeof AT.DELETE_TASK
  taskId: number
}
export const deleteTask = (taskId: number): deleteTaskType => ({ type: AT.DELETE_TASK, taskId })

type sortTasksType = {
  type: typeof AT.SORT_TASKS
}
export const sortTasks = (): sortTasksType => ({ type: AT.SORT_TASKS })
