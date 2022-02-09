import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { DrawerHeader } from './Drawer.styled';

// type Props = {
//   rotate?:string
//   isOpen?:boolean;
//   setIsOpen?:() => void
//   children:React.ReactNode
// }

export const DrawerContent: React.FunctionComponent<any> = ({ rotate = "left", isOpen = false, setIsOpen, children }) => {

  return (
    <Drawer
      anchor={rotate}
      open={isOpen}
      onClose={setIsOpen}
    >
      <DrawerHeader/>
      <Divider />
      {children}
    </Drawer>
  );
}
