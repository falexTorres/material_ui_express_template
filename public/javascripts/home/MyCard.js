import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
//import ElementalCard from 'elemental/lib/components/ElementalCard';
import ElementalCard from './ElementalCard';

const cardStyles = {
	marginBottom: 0,
	position: 'relative',
	bottom: 0,
	//paddingBottom: '25%',
	height: 600
};

const MyCard = () => (
  <Card style={cardStyles}>
    	<CardHeader
      	title="Tiny Town Consulting"
      	subtitle="Tourism Growth"
    	/>
    	<CardText>
				<div>
					<ElementalCard>
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
					</ElementalCard>
      		<Slider name="slider0" defaultValue={0.5} />
					<ElementalCard>
						Heres some more stuff
					</ElementalCard>
				</div>
    	</CardText>
	</Card>
);

export default MyCard;
