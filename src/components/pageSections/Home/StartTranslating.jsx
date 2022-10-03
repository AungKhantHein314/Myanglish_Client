import React from 'react';
import Button from './../../elements/Buttons/Button';
import NearMeIcon from '@mui/icons-material/NearMe';

const StartTranslating = () => {
  return (
    <div>
      <Button size="20" variant="outlined" href="translate" > <NearMeIcon /> Start Translating </Button>
    </div>
  )
}

export default StartTranslating
