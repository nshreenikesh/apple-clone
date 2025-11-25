import CardOne from '../assets/images/card-one.jpg'
import CardTwo from '../assets/images/card-two.jpg'
import CardThree from '../assets/images/card-three.jpg'

function Section(){
    return (
        <>
        <div className='bg-black text-white pt-10'>
            <div className='text-center p-4'>
                <p className='text-[#FF791B] font-bold text-xl p-1'>Accessories</p>
                <h1 className='font-bold text-4xl md:text-6xl py-2 text-white'>Pro pairings.</h1>
                <p className='text-blue-500 text-xs md:text-xl hover:underline py-4'>Shop all iPhone accessories</p>
            </div>
            <div className='flex items-center justify-center py-10 md:px-20'>
                <div className='md:w-[80%] md:h-[80%] md:mt-[-1%]'>
                    <img className='w-[100px] ml-3 h-[200px] px-0 md:w-[75%] md:h-[30vw] rounded-lg' src={CardOne} alt="" />
                    <p className='md:pr-20 md:p-3 ml-3 pr-5 text-[9px] md:text-[16px]'>
                        <strong>TechWoven Case. </strong>
                         Made from a custom technical woven fabric of multiple coloured yarns. The sides of the case are coated and textured for a better grip. Available in five colours.
                        </p>
                </div>
                <div className='md:w-[80%] md:h-[80%]'>
                    <img className='w-[100px] px-0 h-[200px] md:w-[75%] md:h-[30vw] rounded-lg'  src={CardTwo} alt="" />
                    <p className='md:pr-36 md:p-3 pr-5 text-[9px] md:text-[16px]'>
                        <strong>Crossbody Strap. </strong>
                         Allows you to comfortably wear your iPhone hands‑free. Embedded flexible magnets with stainless steel sliding mechanisms make it effortless to adjust for a perfect fit.
                        </p>
                </div>
                <div className='md:w-[80%] md:h-[80%] md:mt-[-5%] pr-3'>
                    <img className='w-[100px] px-0 h-[200px] md:w-[75%] md:h-[30vw] rounded-lg' src={CardThree} alt="" />
                    <p className='md:pr-10 md:p-3 pr-3 text-[9px] md:text-[16px]'>
                        <strong>Silicone Case. </strong>
                         Six striking colours, now with two connection points that allow secure attachment to the new Crossbody Strap
                        </p>
                </div>
            </div>
        </div>
        </>
    )
}


export default Section;