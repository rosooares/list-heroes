import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/LineProgress.css';

function LineProgress({ value, titulo, color }) {
  return (
    <div className="lineProgress">
      <Typography variant="caption"> {titulo}: {value}% </Typography>
      <div className="life-bar">
        <div className="life" style={{ width: `${value > 100 ? 100 : value}%`, backgroundColor: `${color}` }}></div>
      </div>
    </div>
  );
}

export default LineProgress;
