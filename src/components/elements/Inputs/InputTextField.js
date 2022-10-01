import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

/**
  * @param params
  * @param rows
  * @param defaultValue
  * @param isDisabled
  * @param label
**/

export default function InputTextField(props) {
  const [value, setValue] = React.useState(props.params.defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '95%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label={props.params.label}
          multiline
          rows={props.params.rows}
          value={value}
          onChange={handleChange}
          disabled={props.params.isDisabled}
          spellCheck="false"
        />
      </div>
    </Box>
  );
}