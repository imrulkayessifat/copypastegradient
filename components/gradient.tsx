"use client";

import Image from "next/image"
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { toast } from "sonner"

import { gradients } from "@/lib/gradient"

const Gradient = () => {

    const handleDownload = (text: string) => {
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'image/svg+xml' });
        element.href = URL.createObjectURL(file);
        element.download = 'data.svg';
        document.body.appendChild(element);
        element.click();

    };


    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => toast('svg code copied'))
    };

    return (
        <div className='mx-auto px-10 w-full mt-12'>
            <div className='grid w-full grid-cols-2 lg:grid-cols-3 justify-between gap-8 xl:grid-cols-4'>
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
                            <IoMdDownload
                                onClick={() => handleDownload(data.text)}

                                className="absolute cursor-pointer mr-5 md:mr-0 p-2 w-8 h-8 rounded-sm text-white bg-[#0f0f0f] bottom-[4%] right-[20%]"
                            />
                            <MdOutlineContentCopy
                                onClick={() => copyToClipboard(data.text)}
                                className="absolute cursor-pointer p-2 w-8 h-8 rounded-sm text-white bg-[#0f0f0f] bottom-[4%] right-[5%]"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Gradient