import React, {Component} from 'react';
import darkBaseTheme from '../themes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyTabs from './MyTabs';

const muiTheme = getMuiTheme(darkBaseTheme);

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      	<MuiThemeProvider muiTheme={muiTheme}>
					<div style={{marginBottom: 0, paddingBottom: 0}}>	
						<MyTabs/>
					</div>
      	</MuiThemeProvider>
    );
  }
}

export default Main;
