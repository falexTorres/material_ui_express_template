import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import PhoneLinkIcon from 'material-ui/svg-icons/hardware/phonelink';
import Glyph from 'elemental/lib/components/Glyph';

const glyphStyles = {
	//textColor: 'white'
};

const DropDownPhone = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><Glyph icon="device-mobile" style={glyphStyles}/></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
    >
      <MenuItem primaryText="608.622.0491"/>
    </IconMenu>
  </div>
);

export default DropDownPhone;
