import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../Components/Productitem";
import Productitemlistview from "../../Components/Productitemlistview";
import Button from "@mui/material/Button";
import { IoGrid } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';



const ProductListing = () => {
  const [IsItemViwe,setIsItemViwe] = useState('grid')
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="py-5">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className="link">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/" className="link">
            Feshion
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>
          <div className="rightContent w-[80%] py-3 ">
            <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-2 ItemViewAction">
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${IsItemViwe=== 'list' && 'active'}`} onClick={()=>setIsItemViwe('list')}>
                  {" "}
                  <IoMenuOutline className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${IsItemViwe=== 'list' && 'active'}`} onClick={()=>setIsItemViwe('grid')}>
                  {" "}
                  <IoGrid className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <span className="text-[14px] font-[600] pl-3 text-[rgba(0,0,0,0.7)]">
                  There are 18 products.
                </span>
              </div>

              <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                <span className="text-[14px] font-[600] pl-3 text-[rgba(0,0,0,0.7)]">
                 Sort By
                </span>
                  <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!bg-white !text-[12px] !text-[#000] !capitalize !border-1 !border-[#000]"
      >
        Sales, highest to lowest
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Sales, highest to lowest</MenuItem>
        <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Relevance</MenuItem>
        <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Name, A to Z</MenuItem>
        <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Name, Z to A</MenuItem>
        <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Price, Low to High</MenuItem>
        <MenuItem onClick={handleClose} className="!text-[13px] !text-[#000] !capitalize">Price, High to Low</MenuItem>
      </Menu>
              </div>
            </div>
            <div className={`grid ${IsItemViwe=== 'grid' ?'grid-cols-4 md:grid-cols-4': 'grid-cols-1 md:grid-cols-1'}  gap-3`}>

{
  IsItemViwe === 'grid' ? <>
  
       <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
  </>
  :
  <>
  <Productitemlistview/>
  </>
}

         
            </div>
            <div className="flex items-center justify-center mt-3">

            <Pagination count={10} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
