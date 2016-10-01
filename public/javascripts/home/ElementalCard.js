import React from 'react';
import Card from 'elemental/lib/components/Card';
import Row from 'elemental/lib/components/Row';
import Col from 'elemental/lib/components/Col';
var _colors = require('material-ui/styles/colors');

const cardStyles = {
	marginBottom: 0,
	paddingBottom: '50%'
};

const ElementalCard = props => (
	<Card style={{color: _colors.grey900, backgroundColor: _colors.grey100}}>
		<p>{props.children}</p>
	</Card>
);

export default ElementalCard;
