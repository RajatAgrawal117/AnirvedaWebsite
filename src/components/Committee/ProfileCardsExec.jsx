import {React,useState} from "react"
import {Icon} from "@iconify/react"
import img1 from "../Committee/images/harshvarshan.jpg"
import img2 from "../Committee/images/riya.jpg"
import img3 from "../Committee/images/dhaivat.jpg"
import img4 from "../Committee/images/neeha.jpg"
import img5 from "../Committee/images/jhanvi.jpg"

export default function ProfileCardExec() {
     const people = [
            {
              id: 1,
              name: "Harshvardhan Gaikwad",
              position: "President",
              linkedIn:"https://www.linkedin.com/in/harshvardhan-gaikwad-8471971bb/"
              
            },
            {
              id: 2,
              name: "Aayushi Shah",
              position: "Vice President",
              linkedIn:"https://www.linkedin.com/in/riya-sharma17/"
              
            },
            {
              id: 3,
              name: "Dhaivat Jani",
              position: "Vice President",
              linkedIn:"https://www.linkedin.com/in/dhaivat-jani-42103521b/"
            },
            {
                id: 4,
                name: "Neeha Aggarwal",
                position: "Treasurer",
                linkedIn:"https://www.linkedin.com/in/neeha-agrawal-50bb5b243/"
                
              },
              {
                id: 5,
                name: "Jhanvi Thakkar",
                position: "General Secretary",
                linkedIn:"https://www.linkedin.com/in/jhanvithakkar14/"
              },
          ]
      
          let [current, setCurrent] = useState(0)
        
          const studList = people.map((people) => {
            const img_URL = [img1,img2,img3,img4,img5];
       
            return (
              <div
                key={people.id}
                className={
                  "xs:w-4/5 relative w-full rounded-2xl  py-8 drop-shadow-md sm:w-[85%] xl:px-2"
                }>
      <section class=" w-full lg:w-full h-full px-5 py-5 text-center bg-gray-600 hover:bg-primary hover:text-black rounded-[2rem] duration-200 shadow-lg p-8">  
     
     <div class="w-full text-center max-w-md ml-auto mr-auto mt-8">   

          <div className="rounded-full border-2 border-black h-[16rem] w-[16rem] flex items-center text-center justify-center lg:h-36 lg:w-36 bg-grey-light mx-auto mt-6 mb-8"><img class="rounded-full" src={img_URL[people.id-1]} /></div>

          <div className="font-Abel font-bold text-2xl text-black mb-2">{people.name}</div>

          <p className="text-grey-darker -translate-y-1 text-base mb-4">{people.position}</p>
          <div className="bg-black hover:bg-blue font-Abel cursor-pointer text-white text-lg rounded-full font-semibold  hover:text-primary py-2 px-4 border border-black"><a href={people.linkedIn} target="_blank">Contact</a></div>
        
  </div>
</section>
</div>
 )
          })
          return (
            <div className=" bg-black pb-8 btwnMdAndLg:pt-10 xl:pl-2 xl:pr-2">
              <div className=" w-full relative mt-8 flex items-center justify-center sm:p-10 md:mt-0 md:px-5 lg:px-8">
                <div className=" ml-3 lg:hidden">
                  <Icon
                    icon="ic:baseline-chevron-left"
                    className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-0 text-5xl"
                    color="#B69575"
                    onClick={() => {
                      if (current === 0) {
                        current = studList.length
                      }
                      setCurrent(current - 1)
                    }}
                  />
                </div>
                {/* All Testimonials */}
                <div className="w-full relative bg-black flex justify-center lg:hidden">
                  {studList[current]}
                </div>
                <div className="hidden lg:flex lg:h-full md:gap-5 xl:gap-2 lg:mx-auto lg:w-full lg:gap-8">
                  {studList}
                </div>
                <div className="mr-3 lg:hidden">
                  <Icon
                    icon="ic:baseline-chevron-right"
                    color="#B69575"
                    className="cursor-pointer rounded-full bg-secondary-15 p-1 pr-0 text-5xl"
                    onClick={() => {
                      if (current === studList.length - 1) {
                        current = -1
                      }
                      setCurrent(current + 1)
                    }}
                  />
                </div>
              </div>
            </div>
          )
}

 