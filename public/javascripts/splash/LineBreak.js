import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import darkBaseTheme from '../themes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme(darkBaseTheme);

class LineBreak extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<Divider />
			</MuiThemeProvider>
    );
  }
}

export default LineBreak;
