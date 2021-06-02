import styles from './TasksSpace.module.scss';
import OneTask from './OneTask/OneTask';
import { useSelector } from 'react-redux';

const TasksSpace = (props) => {
  const allTasks = useSelector((state) => state.tasks.allTasks);

  return (
    <section className={styles.container}>
      <div className={styles.tasksArea}>
        <span className={styles.tasksArea__title}>Список дел:</span>
        <div className={styles.tasksArea__toDoTaskWrapper}>
          {allTasks !== undefined &&
            allTasks.map((task, index) => (
              <OneTask key={`${task.description}_${index}`} index={index} task={task} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TasksSpace;
