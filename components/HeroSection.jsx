import HeroImg from "../assets/images/iphone-hero.jpg";
function HeroSection(){
    return (
        <>
        <div className="relative">
      <img 
        src={HeroImg} 
        alt="iPhone" 
        className="w-full h-auto"
      />
      <div className="text-white text-center absolute bottom-5 left-1/2 -translate-x-1/2 md:bottom-10 md:left-[35%] md:-translate-x-0">
        <button className="rounded-lg py-2 px-4 text-xs md:rounded-3xl text-white md:text-xl bg-[#0076DF] md:py-2 md:px-6 hover:bg-[#045094] font-semibold">Buy</button>
        <p className="text-xs md:text-xl font-semibold">From ₹134900.00* or ₹21650.00/mo. for 6 mo.‡</p>
      </div>
       </div>
        </>
    )
}
export default HeroSection;