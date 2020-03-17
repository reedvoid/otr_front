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

const useStyles = makeStyles({
  divider: {
    marginTop: 20,
    marginBottom: 20
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
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
          pending record
        </DialogTitle>
        <DialogContent>
          <Container maxWidth="xs">
            <Grid container spacing={2}>
              <Grid item md={12} style={{ textAlign: "center" }}>
                <AlarmIcon style={{ fontSize: 60 }} color="secondary" />
              </Grid>

              <Grid item md={12} style={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                  Louver market street west side confirmation
                </Typography>
              </Grid>

              <Grid item md={6} style={{ textAlign: "right" }}>
                <Typography>4 hours ago</Typography>
              </Grid>

              <Grid item md={6} style={{ textAlign: "left" }}>
                <Chip
                  size="small"
                  color="secondary"
                  icon={<PriorityHighIcon />}
                  label="3/4 committed"
                />
              </Grid>
            </Grid>

            <Divider variant="middle" className={classes.divider} />
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
