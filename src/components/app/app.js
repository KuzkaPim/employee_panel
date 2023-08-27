import { Component } from 'react';

import './app.scss';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAdd from '../employee-add/employee-add';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Ilia Shubin', salary: 1000, isIncrease: false, isLike: false, id: 1},
                {name: 'Kuzma Pimenov', salary: 1500, isIncrease: false, isLike: false, id: 2},
                {name: 'Anton Bragin', salary: 1200, isIncrease: false, isLike: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (name, salary) => {
        if (name.length > 3 && salary > 0) {
            const newItem = {name, salary, isIncrease: false, isLike: false, id: this.maxId++};
            this.setState(({data}) => ({
                data: [...data, newItem]
            }))
        }
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, isIncrease: !oldItem.isIncrease};
            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newData
            }
        })
    }

    onToggleLike = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, isLike: !item.isLike};
                }
                return item;
            })
        }))
    }

    searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState(({term}))
    }

    filterItems = (items, btn) => {
        if (btn === 'all') {
            return items;
        } else if (btn === 'liked') {
            return items.filter(item => item.isLike);
        } else {
            return items.filter(item => item.salary > 1000);
        }
    }

    onToggleFilter = (filter) => {
        this.setState(({filter}))
    }

    render() {
        const {data, term, filter} = this.state,
              visibleData = this.filterItems(this.searchItem(data, term), filter);

        return (
            <div className="app">
                <AppInfo data={data}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onToggleFilter={this.onToggleFilter} filter={filter}/>
                </div>
    
                <EmployeeList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleLike={this.onToggleLike}/>
                <EmployeeAdd onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;