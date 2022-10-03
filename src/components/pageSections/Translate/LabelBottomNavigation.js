import * as React from "react";
import { useDispatch } from "react-redux";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AssistantIcon from "@mui/icons-material/Assistant";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import CustomSnackbar from "../../elements/SnackBars/SnackBars";

import Suggestion from "./Suggestion";
import { saveFavourite } from "../../../redux/features/noteSlice";
import Recents from "./Recents";

export default function LabelBottomNavigation() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const [saveFav, setSaveFav] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);

  const [recents, setRecents] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setSaveFav(false);
      setRedirect(false);
      setValue("");
    }, 5000);
  }, [saveFav, redirect, recents, value]);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      if (value === "favorites") {
        dispatch(saveFavourite()).then((data) => {
          if (data.payload.message === "Favourite Added.") {
            setSaveFav(true);
          } else {
            console.log(data.payload.message);
          }
        });
      } else if (value === "recents") {
        setRecents(true);
      }
    } else {
      setRedirect(true);
    }
  }, [value]);

  return (
    <>
      <BottomNavigation
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        value={value}
        onChange={handleChange}
      >
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
      {value === "suggest" && <Suggestion />}
      {saveFav && (
        <CustomSnackbar
          message="This translation is saved to your favourites."
          severity="success"
          run="1"
        />
      )}
      {redirect && (
        <CustomSnackbar
          message="Register or login to continue."
          severity="warning"
          run="1"
        />
      )}
      {recents && <Recents onClose={() => setRecents(false)}/>}
    </>
  );
}
