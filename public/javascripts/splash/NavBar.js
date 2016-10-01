import React, {Component} from 'react';
import darkBaseTheme from '../themes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAppBar from './MyAppBar';

const muiTheme = getMuiTheme(darkBaseTheme);

class NavBar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
			<div>
      	<MuiThemeProvider muiTheme={muiTheme}>
        	<MyAppBar/>
      	</MuiThemeProvider>
			</div>
    );
  }
}

export default NavBar;
