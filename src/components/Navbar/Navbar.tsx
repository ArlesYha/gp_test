import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CustomDialog, FavoriteTable } from "..";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";

const Navbar = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gentleman Programming react test
          </Typography>
          <IconButton
            color="secondary"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
