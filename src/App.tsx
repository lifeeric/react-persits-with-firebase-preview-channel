import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { ADD_TASK, RM_TASK, COMPLETE_TASK } from "./store/action";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    input: {
      width: 320,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  })
);

function App() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const todolist = useSelector((state) => state);
  const dispatch = useDispatch();
  const taskRef = React.useRef<HTMLInputElement>(null);

  const addTaskHandler = async () => {
    if (taskRef.current) {
      let value = taskRef.current && taskRef.current.value;
      await dispatch({ value, type: ADD_TASK });
      taskRef.current.value = "";
    }
  };

  console.log(todolist);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h1" component="h2" gutterBottom>
          TODO LIST:
        </Typography>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className={classes.input}
            id="standard-basic"
            label="Your task here..."
            inputRef={taskRef}
          />
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <Button
            variant="contained"
            color="secondary"
            onClick={addTaskHandler}
          >
            Add
          </Button>
        </form>

        {/* Tasks */}
        <div className={classes.demo}>
          <List dense={dense}>
            {todolist.todolist.map((item: any, index: number) => (
              <ListItem button>
                <ListItemText primary="Single-line item" />
              </ListItem>
            ))}
          </List>
        </div>
      </Container>
    </div>
  );
}

export default App;
