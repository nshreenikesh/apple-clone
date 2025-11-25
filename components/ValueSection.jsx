import {FaEarthAmericas, FaApple} from "react-icons/fa6";
import { IconBase } from "react-icons/lib";
import {MdAccessibility} from "react-icons/md";

let valueData=[
    {
        icon:<FaEarthAmericas/>,
        title:"A Plan as innovative as our products",
        desc1:"we're committed to bringing net emission to zero across our entire carbon footprint by 2030",
        desc2:"Learn about environment"
    },
    {
        icon:<FaApple/>,
        title:" Privacy. That’s Apple.",
        desc1:"Privacy is a fundamental human right. Every product and service is designed to help keep your data safe and secure.",
        desc2:"Learn more about privacy"
    },
    {
        icon:<MdAccessibility/>,
        title:"Innovation that’s accessible by design.",
        desc1:"Our products and services are designed for everyone, with built-in features to help you do what you love, your way.",
        desc2:"Learn more about accessibility"
    },
]

function ValueSection(){
    return (
        <>
        <div className="py-10">
            <h1 className="text-2xl mb-4 py-2 px-4 md:text-6xl font-bold md:mb-10 md:p-10">Our values lead the way.</h1>
            <div className="flex flex-wrap items-center justify-center  gap-5">
            {valueData.map((data,index)=>(

                <div key={index} className="w-[70%] h-[200px] md:w-[30%] md:h-[250px] py-4 px-6 md:p-6 bg-gray-100 rounded-lg shadow-gray-500 shadow-xl">
                    < h1 className=" text-xl md:text-4xl mb-1 md:mb-4">{data.icon}</h1>
                    <h2 className="font-bold text-xl md:text-2xl">{data.title}</h2>
                    <p className="md:p-1 text-[12px] md:text-[16px]">{data.desc1} </p>
                    <p className="text-blue-600 text-xs font-semibold">{data.desc2} </p>
                </div>

))}
</div>                
        </div>
        </>
    )
}

export default ValueSection;