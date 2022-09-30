import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

/**
  * @param rows
  * @param defaultValue
**/

export default function InputTextField() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={1}
          defaultValue="Default Value"
          value={value}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}