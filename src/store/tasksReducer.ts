import { tasksReducerType, taskType } from '../types/tasksReducerTypes'
import { tasksReducerATType, tasksReducerAction } from '../types/tasksReducerActionTypes'

const initialState: tasksReducerType = {
  allTasks: [
    { description: 'погулять с собакой', completed: false, taskID: 0 },
    { description: 'сделать домашку по русскому', completed: false, taskID: 1 },
    { description: 'сходить в магазин за хлебом', completed: false, taskID: 2 },
  ],
}

const tasksReducer = (state = initialState, action: tasksReducerAction): tasksReducerType => {
  switch (action.type) {
    case tasksReducerATType.ADD_TASK:
      return {
        allTasks: [
          ...state.allTasks,
          { description: action.description, completed: false, taskID: state.allTasks.length },
        ],
      }
    case tasksReducerATType.COMPLETE_TASK:
      return {
        allTasks: [
          ...state.allTasks.map((task, index) => {
            if (index === action.taskID) {
              return { ...task, completed: !task.completed }
            }
            return { ...task }
          }),
        ],
      }
    case tasksReducerATType.DELETE_TASK:
      state.allTasks.splice(action.taskID, 1)
      return {
        allTasks: [...state.allTasks],
      }
    case tasksReducerATType.SORT_TASKS:
      const sortedTasksTRUE: Array<taskType> = []
      const sortedTasksFALSE: Array<taskType> = []
      const allTasks: Array<taskType> = state.allTasks
      allTasks.map((task: taskType): void => {
        //добавляем в начало невыполненные tasks
        task.completed ? sortedTasksTRUE.push(task) : sortedTasksFALSE.push(task)
      })
      return {
        allTasks: [...sortedTasksFALSE, ...sortedTasksTRUE],
      }
    // case tasksReducerATType.CHANGE_TASK_ID:
    //   return {
    //     allTasks: [
    //       ...state.allTasks.map((task, index) => {
    //         task.id = index
    //       }),
    //     ],
    //   }
    default:
      return state
  }
}

export default tasksReducer
