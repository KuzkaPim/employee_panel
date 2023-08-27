import EmployeeItem from "../employee-item/employee-item";

import './employee-list.scss';

const EmployeeList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <EmployeeItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleLike={() => onToggleLike(id)}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeeList;