import './app-filter.scss';

const AppFilter = ({onToggleFilter, filter}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'liked', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name,
              clazz = active ? 'btn btn-light' : 'btn btn-outline-light';

        return (
            <button
                onClick={() => onToggleFilter(name)}
                className={clazz}
                type="button"
                data-filter={name}
                key={name}>
                    {label}
            </button> 
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;