import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const MyFlatButton = props => (
  <div>
    <FlatButton label="Enter" primary={true} href="/home">
			{props.children}
		</FlatButton>
  </div>
);

export default MyFlatButton;
