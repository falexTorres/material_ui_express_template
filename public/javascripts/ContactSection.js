import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import ElementalCard from './ElementalCard';

const cardStyles = {
	marginBottom: 0,
	//paddingBottom: '68%',
	position: 'relative',
	bottom: 0,
	height: 600
};

const ContactSection = () => (
  <Card style={cardStyles}>
    <CardHeader
      title="Contact Us"
      subtitle="Just don't be creepy"
    />
    <CardText>
			<div>
				<ElementalCard>This is the contact section.</ElementalCard>
      	<Slider name="slider2" defaultValue={0.5} />
				<hr/>
				<br/>
				<div className="row text-center">	
					<div className="col-sm-12 col-md-12 col-lg-12">
						<ElementalCard>Heres some more stuff</ElementalCard>
					</div>
				</div>
			</div>
    </CardText>
  </Card>
);

export default ContactSection;
