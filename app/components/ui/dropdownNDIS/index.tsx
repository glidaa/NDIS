import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BottomArrowIcon } from 'app/components/icons/bottom-arrow-icon';
import { Typography } from '@mui/material';

interface IDropdownNDIS { }

const DropdownNDIS = ({ label, links }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDropdownClick = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        onClick={handleClick}
        sx={{ textTransform: 'none' }}
      >
        <Typography mr={'10px'} color={'#22272B'} fontWeight={700} fontSize={'20px'}>{label}</Typography>
        <BottomArrowIcon fill='#056FD9' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          links?.map(item => (
            <MenuItem onClick={handleDropdownClick}>{item.label}</MenuItem>
          ))
        }
      </Menu>
    </div>
  )
}

export { DropdownNDIS, type IDropdownNDIS }