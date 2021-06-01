import AT from './constants'
import { actionTypes } from './actionCreators';

type taskType = {
  description: string
  completed: boolean
  id: number
}
type initialStateType = {
  allTasks: Array<taskType>
}

let initialState: initialStateType = {
  allTasks: [
    { description: 'погулять с собакой', completed: false, id: 0 },
    { description: 'сделать домашку по русскому', completed: false, id: 1 },
    { description: 'сходить в магазин за хлебом', completed: false, id: 2 },
  ],
}

const tasksReducer = (state = initialState, action: actionTypes): initialStateType => {
  switch (action.type) {
    case AT.ADD_TASK:
      return {
        allTasks: [
          ...state.allTasks,
          { description: action.description, completed: false, id: state.allTasks.length },
        ],
      }
    case AT.COMPLETE_TASK:
      return {
        allTasks: [
          ...state.allTasks.map((task, index) => {
            if (index === action.taskId) {
              return { ...task, completed: !task.completed }
            }
            return { ...task }
          }),
        ],
      }
    case AT.DELETE_TASK:
      state.allTasks.splice(action.taskId, 1)
      return {
        allTasks: [...state.allTasks],
      }
    case AT.SORT_TASKS:
      const sortedTasksTRUE: Array<taskType> = [],
      const sortedTasksFALSE: Array<taskType> = [],
      state.allTasks.map((task: taskType) => {
        //добавляем в начало невыполненные tasks
        task.completed ? sortedTasksTRUE.push(task) : sortedTasksFALSE.push(task)
      })
      return {
        allTasks: [...sortedTasksFALSE, ...sortedTasksTRUE],
      }
    // case AT.CHANGE_TASK_ID:
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
