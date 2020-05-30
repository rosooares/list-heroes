import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const styles = () => ({
  wrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

const ButtonLoader = ({ children, classes, loading, disabled, ...rest }) => (
  <div className={classes.wrapper}>
    <Button
      disabled={loading || disabled}
      {...rest}
    >
      {children}
    </Button>
    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
  </div>
);

ButtonLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

ButtonLoader.defaultProps = {
  disabled: false,
};

export default withStyles(styles)(ButtonLoader);
