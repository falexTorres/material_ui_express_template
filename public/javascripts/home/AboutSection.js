import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import ElementalCard from './ElementalCard';

const cardStyles = {
	marginBottom: 0,
	//paddingBottom: '65%',
	position: 'relative',
	bottom: 0,
	height: 600
};

const AboutSection = () => (
  <Card style={cardStyles}>
    <CardHeader
      title="About Us"
      subtitle="What gets us off?"
    />
    <CardText>
			<div>
				<ElementalCard>This is the about section.</ElementalCard>
      	<Slider name="slider1" defaultValue={0.5} />
				<hr/>
				<br/>
				<div className="row text-center">
					<div className="col-sm-12 col-md-12 col-lg-12">
						<ElementalCard>Heres some more stuff</ElementalCard>
					</div>
				</div>
				<br/>
				<br/>
				<br/>
			</div>
    </CardText>
  </Card>
);

export default AboutSection;
