import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Chip from "@material-ui/core/Chip";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 345
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  record_title: {
    fontSize: 16,
    lineHeight: 1.2,
    fontWeight: "bold"
  },
  record_short_detail_wrapper: {
    fontSize: 14,
    lineHeight: 1.2,
    marginTop: 0,
    paddingTop: 0
  },
  record_chip: {
    labelStyle: {
      fontSize: 1
    }
  },
  grid_record_details_item: {
    paddingTop: 0
  }
});

export default function RecordCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <Avatar variant="square" src="https://i.imgur.com/IbZv075.png" />
            </Grid>

            <Grid item xs={7}>
              <Typography component="div">
                <Box className={classes.record_title}>
                  Louver market street west side...
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={2} className={classes.grid_record_details_item} />

            <Grid item xs={10} className={classes.grid_record_details_item}>
              <Typography component="div">
                <Box className={classes.record_short_detail_wrapper}>
                  <Box component="span" mr={1}>
                    2 hours ago
                  </Box>
                  <Box component="span" mr={1}>
                    <Chip
                      className={classes.record_chip}
                      size="small"
                      icon={<AttachFileIcon />}
                      label="2"
                    />
                  </Box>
                  <Box component="span" mr={1}>
                    <Chip
                      size="small"
                      color="secondary"
                      icon={<PriorityHighIcon />}
                      label="3/4"
                    />
                  </Box>
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
