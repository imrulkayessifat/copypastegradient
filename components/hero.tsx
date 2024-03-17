import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <div className='mx-auto px-10 w-full mt-24'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='font-bold text-6xl'>Copy Paste Gradient</h1>
                    <Button
                        className='dark:bg-[#0f0f0f] w-2/4 bg-white border-gradient'
                        variant={"outline"}
                    >
                        Click to gradient to copy as svg image
                    </Button>
                    <Button
                        className='dark:bg-[#0f0f0f] w-2/4 bg-white border-gradient'
                        variant={"outline"}
                    >
                        Click to solid color to copy the hex value
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero