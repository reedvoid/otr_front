import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import SimpleList from "./CondensedRecordList";

import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  CardContent: {
    paddingTop: 0,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  CardHeader: {
    paddingBottom: 10
  }
}));

export default function RecordCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.CardHeader}
        avatar={
          <Avatar variant="square" src="https://i.imgur.com/IbZv075.png" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{ variant: "h6" }}
        title="Louver changes"
        subheader="updated: 2020-03-05 15:04 PST"
      />
      <Divider variant="middle" />

      <CardContent className={classes.CardContent}>
        <SimpleList />
      </CardContent>
    </Card>
  );
}
