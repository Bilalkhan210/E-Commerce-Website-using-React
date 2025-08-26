import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button"
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategroyPanel";
import "../navgasion/style.css"


const Navigation = () => {

    const [isopen, setIsOpen] = useState(false)

    const OpenCategroyPanel = () => {
        setIsOpen(true)
    }
    return (
        <>
            <nav className="py-2">
                <div className="container flex items-center justify-end gap-5">
                    <div className="col-1 w-[20%]">
                        <Button className="!text-black gap-2 w-full " onClick={OpenCategroyPanel}><RiMenu2Fill /> Shop By categories <LiaAngleDownSolid className="ml-auto" /></Button>
                    </div>
                    <div className="col-2 w-[60%]">
                        <ul className="flex items-center gap-5 nav">
                            <li className="list-none ">
                                <Link to="/" className="link transetion text-[14px] font-[500]"><Button className="link transition !text-black hover:!text-[#ff5252] hover:!bg-[rgba(0,0,0,0.1)] !py-4">Home</Button> </Link>
                            </li>
                            <li className="list-none relative">
                                <Link to="/" className="link transetion text-[14px] font-[500]"> <Button className="link transition !text-black  hover:!text-[#ff5252] hover:!bg-[rgba(0,0,0,0.1)] !py-4">Fashion</Button>
                                </Link>
                                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all ">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">Men</Button>
                                               <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all ">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">Men</Button>
                                          
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">women</Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">kids</Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">Men</Button>
                                            </Link>
                                        </li>
                                    </ul>


                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">women</Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">kids</Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">Men</Button>
                                            </Link>
                                        </li>
                                    </ul>


                                </div>

                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transetion text-[14px] font-[500]"> <Button className="link transition !text-black  hover:!text-[#ff5252] hover:!bg-[rgba(0,0,0,0.1)] !py-4">Electronic</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transetion text-[14px] font-[500]"> <Button className="link transition !text-black  hover:!text-[#ff5252] hover:!bg-[rgba(0,0,0,0.1)] !py-4">Bags</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transetion text-[14px] font-[500]"> <Button className="link transition !text-black  hover:!text-[#ff5252] hover:!bg-[rgba(0,0,0,0.1)] !py-4">Footwera</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transetion text-[14px] font-[500]"> <Button className="link transition !text-black  hover:!text-[#ff5252] hover:!bg-[rgba(0,0,0,0.1)] !py-4">Grocries</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transetion text-[14px] font-[500]"> <Button className="link transition !text-black  hover:!text-[#ff5252] hover:!bg-[rgba(0,0,0,0.1)] !py-4">Beauty</Button></Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transetion text-[14px] font-[500]"> <Button className="link transition !text-black  hover:!text-[#ff5252] hover:!bg-[rgba(0,0,0,0.1)] !py-4">Wellness</Button></Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-3 w-[20%]">
                        <p className="font-[500] flex items-center gap-3 mb-0 mt-0"><GoRocket />Free International Delivery</p>
                    </div>
                </div>
            </nav>
            <CategoryPanel isopen={isopen} setIsOpen={setIsOpen} />
        </>
    )
}
export default Navigation