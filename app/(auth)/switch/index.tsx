import { Switch } from '@expo/ui/swift-ui';
import React from 'react';
const Switchs = () => {
    const [checked, setChecked] = React.useState(false);

  return (
   
<Switch
  value={checked}
  onValueChange={(checked) => {
    setChecked(checked);
  }}
    style={{width:'50%',alignSelf:'center',justifyContent:'center',marginVertical:100}}
  variant='switch'
  label={checked ? "Switch is ON" : "Switch is OFF"}
/>

  )
}

export default Switchs