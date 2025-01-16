import React from 'react'

const Banner = () => {
    return (
        <div className="section-container bg-gradient-to-r from[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
            <div className="py-48 flex flex-col justify-center items-center">
                <div className="text-center space-y-7 px-4">
                    <h2 className="md:text-4xl front-blod md:leading-sung leading-snug">
                    </h2>
                    <p className="text-xl text-[#4A4A4A]">
                        Unleash Your Inner Geek:
                        Shop Our Exclusive Tech-themed Merchandise!

                        We offer a curated selection of high-quality products ranging from clothing and accessories to home
                        decor and office essentials. Each item is carefully chosen to meet our standards of quality,
                        functionality, and style.
                    </p>
                    <a className="btn bg-red px-8 py-3 font-semibold text-white rounded-full" href="/shop">
                        Order Now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner;

//มีบรรทัดไม่ครบ