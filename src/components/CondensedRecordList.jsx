import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },

  listItemText: {
    fontSize: "0.8em"
  },

  List: {
    dense: true
  }
}));

export default function SimpleList() {
  const classes = useStyles();
  const dense = React.useState(false);

  return (
    <div className={classes.root}>
      <List dense={dense} component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <IconButton aria-label="" color="inherit">
              <PlayCircleOutlineIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
              secondary: classes.listItemText
            }}
            secondary="started"
            primary="2020-03-01 15:04 PST"
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <IconButton aria-label="1 missing" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <DoneAllIcon />
              </Badge>
            </IconButton>
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
              secondary: classes.listItemText
            }}
            secondary="not finalized"
            primary="3 / 4 committed, missing @john"
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <IconButton aria-label="" color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
              secondary: classes.listItemText
            }}
            secondary="are stakeholders"
            primary="@steven, @bob, @john, @kai"
          />
        </ListItem>

        {/* 

        <ListItem button>
          <ListItemIcon>
            <IconButton aria-label="" color="inherit">
              <ChatBubbleIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
              secondary: classes.listItemText
            }}
            secondary="last activity"
            primary="2020-03-06 9:37 PST"
          />
        </ListItem>

    */}
      </List>
    </div>
  );
}
