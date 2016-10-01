import React, {Component} from 'react';
import darkBaseTheme from '../themes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyFlatButton from './MyFlatButton';

const muiTheme = getMuiTheme(darkBaseTheme);

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
     	<MuiThemeProvider muiTheme={muiTheme}>
				<MyFlatButton />
     	</MuiThemeProvider>
    );
  }
}

export default Main;
