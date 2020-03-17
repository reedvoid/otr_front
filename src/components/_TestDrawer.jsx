import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import AlarmIcon from "@material-ui/icons/Alarm";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AddIcon from "@material-ui/icons/Add";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import LabelIcon from "@material-ui/icons/Label";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  listItemText: {
    fontSize: 14
  },
  userNameText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  divider: {
    marginTop: 15,
    marginBottom: 15
  },
  userNameListItem: {
    marginBottom: 0,
    paddingBottom: 100
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const dense = React.useState(true);

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List dense={dense}>
        <ListItem>
          <Avatar>H</Avatar>
        </ListItem>

        <ListItem classes={classes.userNameListItem}>
          <ListItemText
            classes={{ primary: classes.userNameText }}
            primary="Steven Banks"
          />
        </ListItem>

        <ListItem>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="steven@acme.com"
          />
        </ListItem>
      </List>

      <Divider className={classes.divider} />

      <List>
        <ListItem button key="Pending">
          <ListItemIcon>
            <AlarmIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Pending"
          />
        </ListItem>

        <ListItem button key="Timeline">
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Timeline"
          />
        </ListItem>

        <ListItem button key="Received">
          <ListItemIcon>
            <CallReceivedIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Received"
          />
        </ListItem>

        <ListItem button key="Sent">
          <ListItemIcon>
            <CallMadeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Sent"
          />
        </ListItem>

        <Divider variant="inset" className={classes.divider} />

        <ListItem button key="add Tags">
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="add Tags"
          />
        </ListItem>

        <ListItem button key="tag1">
          <ListItemIcon>
            <LabelIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="tag1"
          />
        </ListItem>

        <ListItem button key="tag2">
          <ListItemIcon>
            <LabelIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="tag2"
          />
        </ListItem>

        <ListItem button key="tag3">
          <ListItemIcon>
            <LabelIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="tag3"
          />
        </ListItem>

        <ListItem button key="tag4">
          <ListItemIcon>
            <LabelIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="tag4"
          />
        </ListItem>

        <Divider variant="inset" className={classes.divider} />

        <ListItem button key="Settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Settings"
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>Open Left</Button>

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
}
