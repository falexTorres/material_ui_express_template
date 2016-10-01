import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import DropDownPhone from './DropDownPhone';

const appBarStyles = {
	height: 40
};

const iconStyles = {
	marginTop: -12.5
};

const MyAppBar = () => (
  <AppBar
		className="container-fluid"
		zDepth={3}
		showMenuIconButton={false}
		iconElementRight={
			<div style={iconStyles}>	
				<DropDownPhone/>
			</div>
		}
		style={appBarStyles}
  />
);

export default MyAppBar;
