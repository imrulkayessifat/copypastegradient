"use client";

import Image from "next/image"
import { MdOutlineContentCopy } from "react-icons/md";
import { toast } from "sonner"

import { gradients } from "@/lib/gradient"

const Gradient = () => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => toast('svg code copied'))
    };

    return (
        <div className='mx-auto px-10 w-full mt-12'>
            <div className='grid w-full grid-cols-2 lg:grid-cols-3 justify-between gap-10 xl:grid-cols-4'>
                {
                    gradients.map((data, key) => (
                        <div key={key} className={`relative`}>
                            <Image
                                src={data.src}
                                alt="Hero2"
                                width={400}
                                height={400}
                                layout="responsive"
                                className="w-[196px] h-[400px] shrink-0 rounded-md"

                            />
                            <MdOutlineContentCopy
                                onClick={() => copyToClipboard(data.text)}
                                className="absolute cursor-pointer text-white top-[90%] right-[10%]"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Gradient