import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Search as SearchIcon,
  CloseOutlined as CloseOutlinedIcon
} from "@material-ui/icons";
import { Box, InputBase, IconButton, Snackbar, ClickAwayListener } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  search: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: theme.spacing(1)
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    flex: 1,
    alignItems: "center"
  },
  inputInput: {
    width: "100%"
  }
}));

const SearchBar = (props,{ onSearchClose }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [isFocussed, setFocussed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isShowingToast, showToast] = useState(false);
  const onSearchCancel = () => {
    setSearchTerm("");
    setFocussed(false);
  };
  const onSearch = (event) => {
    setFocussed(true);
    if (event.key === "Enter") {
      showToast(true);
      setFocussed(false);
    }
  }
  const onFocusLoss = () => {
    setFocussed(false);
  }
  const handleToastClose = () => {
    showToast(false);
  }

  return (
    <ClickAwayListener onClickAway={onFocusLoss}>
      <Box
        className={classes.search}
        borderRadius={theme.shape.borderRadius}
        bgcolor={
          isFocussed
            ? theme.palette.background.default
            : theme.palette.background.highlight
        }
        boxShadow={isFocussed ? 2 : 0}
        height={"2.5rem"}
        width='100%'
      >
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder={props.cedula}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          onClick={props.cl}
          value={props.value}
          onChange={props.onchange}
          inputProps={{ "aria-label": "search" }}
          onKeyDown={onSearch}
        />
        {isFocussed ? (
          <IconButton hidden={!isFocussed} onClick={props.cancel}>
            <CloseOutlinedIcon htmlColor={theme.custom.palette.iconColor} />
          </IconButton>
        ) : null}
        <Snackbar open={isShowingToast} message={"Search not implemented ;)"} autoHideDuration={2000} onClose={handleToastClose} />
      </Box>
    </ClickAwayListener>
  );
};

export default SearchBar;
