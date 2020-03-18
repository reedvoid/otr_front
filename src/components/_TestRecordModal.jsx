import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import AlarmIcon from "@material-ui/icons/Alarm";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

import Divider from "@material-ui/core/Divider";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CheckIcon from "@material-ui/icons/Check";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const useStyles = makeStyles({
  divider: {
    marginTop: 20,
    marginBottom: 20
  },
  divider_bottom: {
    marginTop: 20,
    marginBottom: 10
  },
  top_container: {
    marginTop: 20
  },
  record_top: {
    paddingBottom: 0
  },
  message_panel: {
    padding: 0,
    border: "none",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  }
});

export default function AlertDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Record
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
      >
        <DialogTitle id="form-dialog-title" className={classes.record_top}>
          <Container maxWidth="xs" className={classes.top_container}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Badge badgeContent={1} color="secondary">
                  <Avatar
                    variant="square"
                    src="https://i.imgur.com/IbZv075.png"
                  />
                </Badge>
              </Grid>

              <Grid item xs={10}>
                <Typography variant="h6" gutterBottom>
                  Louver market street west side confirmation
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </DialogTitle>
        <DialogContent style={{ marginBottom: 10 }}>
          <Container maxWidth="xs">
            <Grid container spacing={2}>
              <Grid item xs={2} />
              <Grid item xs={4}>
                <Typography>4 hours ago</Typography>
              </Grid>
              <Grid item xs={4}>
                <Chip
                  size="small"
                  color="secondary"
                  icon={<PriorityHighIcon />}
                  label="3/4 committed"
                />
              </Grid>
            </Grid>
          </Container>

          <Divider className={classes.divider} />

          {/* stakeholder list */}
          <Container maxWidth="xs">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <ExpansionPanel className={classes.message_panel}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ padding: 0 }}
                  >
                    <Typography className={classes.heading}>
                      Stakeholders - 4 total
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                  >
                    <Grid container spacing={0}>
                      <Grid item xs={10}>
                        <Typography> steven@acme.com </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <CheckIcon color="primary" />
                      </Grid>

                      <Grid item xs={10}>
                        <Typography> bob@acme.com </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <AlarmIcon color="secondary" />
                      </Grid>

                      <Grid item xs={10}>
                        <Typography> steven@acme.com </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <CheckIcon color="primary" />
                      </Grid>

                      <Grid item xs={10}>
                        <Typography> steven@acme.com </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <CheckIcon color="primary" />
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </Grid>

            {/* message */}

            <Grid container spacing={0} style={{ marginTop: 20 }}>
              <Grid item xs={12}>
                <Typography>
                  <Box color="text.secondary">Message</Box>
                </Typography>
                <ExpansionPanel className={classes.message_panel}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ padding: 0 }}
                  >
                    <Typography className={classes.heading}>
                      Hey guys, just to confirm that we're going ahead with
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails
                    style={{ padding: 0, marginBottom: 0 }}
                  >
                    <Typography>
                      the louver plans (see attached). We got sign off from, Dan
                      on the architecture side John from the mechanic side
                      Xavier from the curtain wall sub Pls sign off when you the
                      call back email thx. - Steven
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </Grid>

            {/* message */}

            <Grid container spacing={0} style={{ marginTop: 20 }}>
              <Grid item xs={12} style={{ marginBottom: 10 }}>
                <Typography>
                  <Box color="text.secondary">Files</Box>
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary.light"
                  className={classes.button}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Louverplans.pdf
                </Button>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
        <Divider className={classes.divider_bottom} />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Validate
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Share
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
