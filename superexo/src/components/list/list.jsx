import style from './list.module.css';
import Element from './../element/element';
import PropTypes from 'prop-types';

const List = (props) => {

    // Utilisation de la fonction "map" pour transformer l'array JS en array JSX
    const tasksJSX = props.taskList.map(
        task => <Element key={task.id} {...task} onDelete={props.onDeleteTask} onFinished={props.onFinishedTask} />
    );

    return (
        <div className={style.containerList}>
            {tasksJSX}
        </div>
    )
}

List.defaultProps = {
    taskList: [],
    onDeleteTask: () => {},
    onFinishedTask: () => {}
}

List.propTypes = {
    taskList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
        // Permet de définir que l'array doit contenir au minimum l'id
    })),
    onDeleteTask: PropTypes.func,
    onFinishedTask: PropTypes.func
}

export default List;