import { Collapse, Stack } from "@mui/material"
import { YourGov } from "app/components/icons/your-gov"
import { DropdownNDIS } from "../dropdownNDIS"
import { ButtonNDIS } from "../buttonNDIS"
import { useWindowSize } from "usehooks-ts"
import { useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ChevronDown, ChevronUp, InboxIcon, MailIcon, Menu } from "lucide-react"

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface IHeader2 {
  headerDropdowns: {
    label: string,
    links: {
      label: string,
      link: string
    }[]
  }[]
}

const Header2 = ({ headerDropdowns }: IHeader2) => {
  const { width = 0 } = useWindowSize()


  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const menuItems = headerDropdowns?.reduce((acc, dropdown) => {
    acc.push({ ...dropdown })
    return acc;
  }, [])

  const [openStates, setOpenStates] = useState({})

  const handleClick = (index) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  const list = (anchor) => (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
      {menuItems?.map((menu, index) => (
        <React.Fragment key={index}>
          <ListItemButton onClick={() => handleClick(index)}>
            <ListItemText primary={menu?.label} />
            {openStates[index] ? <ChevronDown /> : <ChevronUp />}
          </ListItemButton>
          <Collapse in={openStates[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menu?.links.map((link, linkIndex) => (
                <ListItemButton
                  key={linkIndex}
                  sx={{ pl: 4 }}
                  onClick={() => window.open(link?.link)}
                >
                  <ListItemText primary={link?.label} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  )

  return (
    <Stack>
      {width > 1200 ? (
        <Stack display={'flex'} direction={'row'} alignItems={'center'} justifyContent={'center'} bgcolor={'#056FD9'} width={'100%'} height={'160px'} px={'2%'}>
          <YourGov />
          {
            headerDropdowns?.map((dropdown, i) => (
              <DropdownNDIS label={dropdown.label} links={dropdown.links} color={'#FFFFFF'} iconColor={'#FFFFFF'} sx={i === 0 ? { marginLeft: '2%' }: null} />
            ))
          }
          <ButtonNDIS label="Signup" variant="blue" sx={{ marginLeft: '3%' }} />
          <ButtonNDIS label="Login" variant="outlined" sx={{ marginLeft: '16px' }} />
        </Stack>
      ) : (
        <Stack display={'flex'} direction={'row'} alignItems={'center'} justifyContent={'space-between'} bgcolor={'#056FD9'} width={'100%'} height={'160px'} px={'5%'}>
          <YourGov width={'150px'} />
          <Stack>
            <ButtonNDIS label={<Menu />} onClick={toggleDrawer('right', true)} variant="outlined" />
            <Drawer
              anchor={'right'}
              open={state['right']}
              onClose={toggleDrawer('right', false)}
            >
              {list('right')}
            </Drawer>
          </Stack>
        </Stack>
      )
      }
    </Stack >
  )
}

export { Header2, type IHeader2 }