import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="p-5 border border-t-0">
            <div className="container mx-auto border p-5 flex xl:flex-row lg:flex-row flex-col xl:items-center lg:items-center">
                <div className="xl:w-1/2 lg:w-1/2 xl:py-0 lg:py-0 md:py-10">
                    <h2 className="2xl:text-[80px] xl:text-[70px] lg:text-[50px] md:text-7xl text-[44px] merriweather-regular font-bold 2xl:leading-[100px] xl:leading-[90px] mb-2">Textiles Art has <span className="text-[#C3002F]">Versatile</span> Fashion</h2>
                    <p className="poppins-regular xl:text-lg lg:text-base md:text-lg mb-5">It is additionally connected with the production of clothes. The crude material of textiles is the fiber which might be regular regenerated.</p>
                    <button className="merriweather-regular text-lg px-5 py-2 rounded-[25px] border border-black text-black flex items-center justify-center gap-2 hover:bg-black hover:text-white">Discover more <FaArrowRight /></button>
                </div>
                <div className="w-1/2 xl:flex lg:flex items-center justify-center border-l hidden">
                    <img className="inline-block rounded-[50px]" src="https://preyantechnosys.com/wordpress/fabiflex/demo2/wp-content/uploads/sites/2/2023/12/sec1.jpg" alt="hero-image" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
