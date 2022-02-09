import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { DrawerHeader } from './Drawer.styled';
import { IconButton, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


// type Props = {
//   rotate?:string
//   isOpen?:boolean;
//   setIsOpen?:() => void
//   children:React.ReactNode
// }

export const DrawerContent: React.FunctionComponent<any> = ({ rotate = "left", isOpen = false, setIsOpen, children }) => {
  const theme = useTheme();

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
