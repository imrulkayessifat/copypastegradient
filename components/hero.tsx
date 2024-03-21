import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <div className='mx-auto px-10 w-full mt-24 py-10'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <div>
                        {/* <h1 className='font-bold bg-gradient-to-r from-blue-500 via-violet-600 to-indigo-800 bg-clip-text text-transparent text-center text-7xl mb-4'>100+</h1>
                        <p
                            className='dark:bg-[#0f0f0f] text-4xl  px-10 bg-white'
                        >
                            beautiful svg gradients!
                        </p> */}
                        <p className='font-bold text-center leading-tight md:leading-normal text-[60px]'>100+ beautiful svg gradients!</p>
                    </div>
                    <p
                        className='dark:bg-[#0f0f0f] text-center bg-white px-8 py-2 mt-7 border-gradient'
                    >
                        Directly usable in any design software
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero