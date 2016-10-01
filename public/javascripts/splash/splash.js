import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavBar from './NavBar';
import Main from './Main';
import LineBreak from './LineBreak';
import $ from 'jquery';

injectTapEventPlugin();

render(<NavBar/>, document.getElementById('navbar'));
render(<Main/>, document.getElementById('main-content'));
render(<LineBreak/>, document.getElementById('linebreak'));
render(<LineBreak/>, document.getElementById('linebreak2'));
