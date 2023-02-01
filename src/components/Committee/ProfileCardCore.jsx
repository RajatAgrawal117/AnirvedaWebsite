import {React,useState} from "react"
import {Icon} from "@iconify/react"
import { Link } from "react-router-dom";
export default function ProfileCardCore() {
     const Departments = ["Event Management","Logistics","Social Media","Publicity","Video Editing","Content & Documentation","Graphic Design","Technical","Sponsorship"];
     return(
        <div className="departments bg-black">
            <div className=" w-full mt-3 grid font-Abel font-extrabold text-lg grid-flow-row grid-cols-1 items-center p-3 gap-2 lg:gap-5 duration-300 opacity-95 sm:pl-5 sm:pr-5 text-black sm:grid-cols-2 md:grid-cols-3 lg:text-xl mb-5 md:mb-8 md:mt-28">
             
               <Link to={"/em"}><div className="cursor-pointer p-6 hover:scale-110 hover:duration-700 hover:bg-primary bg-gray-600 rounded-3xl text-center lg:p-12">Event Management</div></Link> 
                <Link to={"/logs"}><div  className="cursor-pointer p-6 hover:scale-110 hover:duration-700 hover:bg-primary bg-gray-600 rounded-3xl text-center lg:p-12">Logistics</div></Link>
                <Link to={"/sm"}><div  className="cursor-pointer p-6 hover:scale-110 hover:duration-700 hover:bg-primary bg-gray-600 rounded-3xl text-center lg:p-12">Social Media</div></Link>
                <Link to={"/publicity"}><div  className="cursor-pointer p-6 hover:scale-110 hover:duration-700 hover:bg-primary bg-gray-600 rounded-3xl text-center lg:p-12">Publicity</div></Link>
                <Link to={"/cnd"}><div  className="cursor-pointer p-6 hover:scale-110 hover:duration-700 hover:bg-primary bg-gray-600 rounded-3xl text-center lg:p-12">Content & Documentation</div></Link>
                <Link to={"/tech"}><div  className="cursor-pointer p-6 hover:scale-110 hover:duration-700 hover:bg-primary bg-gray-600 rounded-3xl text-center lg:p-12">Technical</div></Link>
                <Link to={"/ve"}><div  className="cursor-pointer p-6 hover:scale-110 hover:duration-700 hover:bg-primary bg-gray-600 rounded-3xl text-center lg:p-12">Video Editing</div></Link>
                <Link to={"/gd"}><div  className="cursor-pointer p-6 hover:scale-110 hover:duration-700 hover:bg-primary bg-gray-600 rounded-3xl text-center lg:p-12">Graphic Design</div></Link>
                <Link to={"/sponsor"}><div  className="cursor-pointer p-6 hover:scale-110 hover:duration-700 hover:bg-primary bg-gray-600 rounded-3xl text-center lg:p-12">Sponsorship</div></Link>


            </div>
              







        </div>
     )
         
}