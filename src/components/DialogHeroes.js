import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DialogHeroes({ open, onClose, heroeSelected }) {
  console.log('heroeSelected', heroeSelected);
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{heroeSelected.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img className="img-heroes" alt="Heroes image" src={heroeSelected.image && heroeSelected.image.url} />
            <p>Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
