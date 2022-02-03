import "./test.css"
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import { DeleteOutline } from "@material-ui/icons";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    button: {
      margin: theme.spacing(1),
    }
  }))

export default function Test() {
    const classes = useStyles()
    const [inputFields, setInputFields] = useState([
      { id: uuidv4(), firstName: '', lastName: '' },
    ]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("InputFields", inputFields);
    };
  
    const handleChangeInput = (id, event) => {
      const newInputFields = inputFields.map(i => {
        if(id === i.id) {
          i[event.target.name] = event.target.value
        }
        return i;
      })
      
      setInputFields(newInputFields);
    }
  
    const handleAddFields = () => {
      setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
    }
  
    const handleRemoveFields = id => {
      const values  = [...inputFields];
      values.splice(values.findIndex(value => value.id === id), 1);
      setInputFields(values);
    }


  return <div className="test">
      <Container>
      <h1 className="h1title">Add New Product</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
          <div className="inputtext" key={inputField.id}>
            <TextField
              name="firstName"
              label="Description"
              variant="filled"
              value={inputField.firstName}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
           
            <TextField
              name="lastName"
              label="input field"
              variant="filled"
              value={inputField.lastName}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <DeleteOutline />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <Button
         className="button"
          variant="contained" 
          color="primary" 
          type="submit" 
          onClick={handleSubmit}
        >
            Create
            </Button>
      </form>
    </Container>
 

      </div>;
}
