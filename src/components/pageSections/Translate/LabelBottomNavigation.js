import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AssistantIcon from '@mui/icons-material/Assistant';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: "100%", display: "flex", justifyContent: "center" }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
        fontSize="large"
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
        fontSize="large"
      />
      <BottomNavigationAction
        label="Share"
        value="share"
        icon={<MobileScreenShareIcon />}
        fontSize="large"
      />
      <BottomNavigationAction
        label="Suggest"
        value="suggest"
        icon={<AssistantIcon />}
        fontSize="large"
      />
    </BottomNavigation>
  );
}