import React from 'react'
import '../../App.css';
import {Todo} from "./todo.component";

interface TodoComponentProps {
    todo: Todo;
}

export class TodoComponent extends React.Component<TodoComponentProps, any> {
    render() {
        return (
            <div className="Todo">
                <b>ID</b>
                <div>{this.props.todo.id}</div>
                <b>TODO</b>
                <div>{this.props.todo.value}</div>
            </div>
        )
    }
}
