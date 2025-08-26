import  React,{useState}  from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { MdClose } from "react-icons/md";
import "../navgasion/style.css"

import CategoryCollapse from '../../CategoryCollapse';





const CategoryPanel = ({ isopen, setIsOpen }) => {

const [submenuindex,setsubmenuindex] = useState(null);
const [Innersubmenuindex,setInnersubmenuindex] = useState(null);
  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
  };

  const Openmenu=(index)=>{
    if(submenuindex===index){

      setsubmenuindex(null)
    }else{

      setsubmenuindex(index)
    }
  }

  const OpenInnermenu=(index)=>{
    if(Innersubmenuindex===index){

      setInnersubmenuindex(null)
    }else{

      setInnersubmenuindex(index)
    }
  }
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation"  className="categroyPanel">
      <h1 className='p-3 border-t-gray-[1px] !border-b-gray-[1px] flex items-center justify-between'>Shop By categories <MdClose onClick={toggleDrawer(false)}  className='cursor-pointer'/> </h1>
    <CategoryCollapse/>
    </Box>
  );

  return (
    <>
      <div>
        <Drawer open={isopen} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  )
}

export default CategoryPanel;