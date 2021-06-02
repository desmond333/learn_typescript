export interface taskType {
  description: string
  completed: boolean
  taskID: number
}

export interface tasksReducerType {
  allTasks: Array<taskType>
  loading?: boolean
  error?: null | string
}
