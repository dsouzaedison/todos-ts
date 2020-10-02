import React from 'react'
import {AppBar, Box, Typography, Grid, TextField, Button} from "@material-ui/core";

export class TodoContainer extends React.Component<any, any> {
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
                    <Grid container spacing={1}>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                label="TODO"
                                placeholder="Start typing.."
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary">
                                ADD
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}
