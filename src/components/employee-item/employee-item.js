import './employee-item.scss';

const EmployeeItem = (props) => {
    const {name, salary, onDelete, onToggleIncrease, onToggleLike, isIncrease, isLike} = props;
    let classNames = 'list-group-item d-flex justify-content-between';

    if (isIncrease) {
        classNames += ' increase';
    }

    if (isLike) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span onClick={onToggleLike} className="list-group-item-label">{name}</span>
            <input className="list-group-item-input" defaultValue={salary + '$'} type="text" />
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={onToggleIncrease} type="button" className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeeItem;