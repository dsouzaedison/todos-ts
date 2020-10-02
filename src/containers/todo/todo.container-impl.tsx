import React from 'react'
import {AppBar, Box, Typography, Grid, TextField, Button} from "@material-ui/core";
import {Todo, TodoComponent} from "../../components";

interface TodoContainerState {
    todos: Array<Todo>;
    userInput: string;
}

const defaultTodo: Todo = {
    id: 123456,
    value: 'Default Todo'
}

export class TodoContainer extends React.Component<any, TodoContainerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            todos: [defaultTodo],
            userInput: '',
        };
    }

    addTodo = () => {
       const newTodo: Todo = {
           id: new Date().valueOf(),
           value: this.state.userInput,
       };

       // We want a new copy. And not a reference
       const updatedTodos: Todo[] = [...this.state.todos];
        updatedTodos.push(newTodo);
        this.setState({todos: updatedTodos, userInput: ''});
    }

    render() {
        return (
            <div>
                {/*navbar*/}
                <AppBar position="static">
                    <Box my={2} mx={5}>
                        <Grid container>
                            <img
                                width={30}
                                height={30}
                                src="https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                                alt=""
                            />
                            <Box ml={1}>
                                <Typography variant="h6">
                                    TODO APP
                                </Typography>
                            </Box>
                        </Grid>
                    </Box>
                </AppBar>
                {/*Content*/}
                <Box m={4}>
                    {/*Input Grid*/}
                    <Grid container spacing={1}>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                label="TODO"
                                placeholder="Start typing.."
                                value={this.state.userInput}
                                onChange={(e) => this.setState({userInput: e.target.value})}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={this.addTodo}>
                                ADD
                            </Button>
                        </Grid>
                    </Grid>
                    {/*Todo list*/}
                    <Box mt={2}>
                        <Grid container spacing={1}>
                            {
                                this.state.todos.map((todo) => (
                                    <Grid item key={todo.id}>
                                        <TodoComponent todo={todo}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </Box>
            </div>
        )
    }
}
