import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import MyCard from './MyCard';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

const styles = {
	//height: '75%',
	//minHeight: '75%'
};

function handleActive(tab) {
  //alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const MyTabs = () => (
  <Tabs style={{margin: 0, padding: 0}}>
    <Tab label="Home" >
			<div style={styles}>
				<MyCard/>
			</div>
    </Tab>
    <Tab label="About" >
			<div style={styles}>
				<AboutSection/>
			</div>
    </Tab>
    <Tab
      label="Contact"
      data-route="/home"
      onActive={handleActive}
    >
			<div style={styles}>
				<ContactSection/>
			</div>
    </Tab>
  </Tabs>
);

export default MyTabs;
