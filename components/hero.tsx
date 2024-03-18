import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <div className='mx-auto px-10 w-full mt-24 py-10'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-center text-7xl mb-9'>Copy Paste Gradient</h1>
                    <p
                        className='dark:bg-[#0f0f0f]  px-10 py-2 bg-white border-gradient'
                        
                    >
                        Click to gradient to copy as svg image
                    </p>
                    <p
                        className='dark:bg-[#0f0f0f] px-8 py-2 mt-4 bg-white border-gradient'
                        
                    >
                        Click to solid color to copy the hex value
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero