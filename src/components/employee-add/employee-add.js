import { Component } from 'react';

import './employee-add.scss';

class EmployeeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input
                        onChange={this.onValueChange}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        value={name}
                        name="name" />
                    <input
                        onChange={this.onValueChange}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        value={salary}
                        name="salary" />
                    <button
                        onClick={this.onSubmit}
                        type="submit"
                        className="btn btn-outline-light">
                            Добавить
                    </button>
                </form>
            </div>
        );
    }
};

export default EmployeeAdd;