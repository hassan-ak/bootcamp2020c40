// Imports
// React Imports
import React from "react";
// Material UI Imports
import { IconButton, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
// Styles Imports
import "./header.css";

// Header Component
const Header = () => {
  //  Header Function Return
  return (
    <div className='root'>
      <AppBar position='relative' elevation={1}>
        <Toolbar className='transparent'>
          <IconButton edge='start' aria-label='Shoe Store'>
            <BookmarksIcon />
          </IconButton>
          <Typography variant='h5'>Bookmarking App</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
