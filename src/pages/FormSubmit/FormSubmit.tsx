// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/';
// import {Button} from '@material-ui';

// const useStyles = makeStyles((theme) => ({
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
//   submitButton: {
//     margin: theme.spacing(2),
//   },
// }));

// const SubmitForm = () => {
//   const classes = useStyles();
//   const [inputValue, setInputValue] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputValue); // Do something with the submitted value
//   };

//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <TextField
//         label="Enter something"
//         variant="outlined"
//         value={inputValue}
//         onChange={(e:any) => setInputValue(e.target.value)}
//       />
//       <Button
//         className={classes.submitButton}
//         variant="contained"
//         color="primary"
//         type="submit"
//       >
//         Submit
//       </Button>
//     </form>
//   );
// };

// export default SubmitForm;
export {}