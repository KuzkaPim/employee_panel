import { Component } from 'react';

import './search-panel.scss'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onValueChange = (e) => {
        const term = e.target.value;
        this.setState(({term}))
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input 
                onChange={this.onValueChange}
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}/>
        );
    }
};

export default SearchPanel;