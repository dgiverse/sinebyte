'use client'
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function CoachAbout(){
    const [isOpen, setOpen] = useState(false)
    return(
        <div class="container relative">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div class="lg:col-span-5 md:col-span-6">
                <div class="relative">
                    <Image src="/images/coach/about.jpg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} class="rounded-full" alt=""/>
                    <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                        <Link href="#" scroll={false} onClick={() => setOpen(true)}
                            class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                            <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

                    <div class="absolute top-0 start-0 -z-1">
                        <Image src="/images/illustrator/dots.svg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7 md:col-span-6">
                <div class="lg:ms-5">
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">About Me</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Unleash Your Real <br/> Potential and <br/> Live Limitless!</h3>

                    <p class="text-slate-400 max-w-xl">I am glad that you have made it here to send a distress signal, and inform the Senate that all on board were killed. Dantooine.  I’m not going to Alderaan. I really got to go.</p>
                    <p class="text-slate-400 max-w-xl mt-2">But that to me. Send a distress signal, and inform the Senate that all on board were killed. Dantooine. They’re on Dantooine. The plans you refer to will soon be back in our hands. Alderaan? I’m not going to Alderaan. I got to go home.</p>
                    <Image src="/images/sign.png" width={128} height={32} class="mt-3" alt=""/>                            
                </div>
            </div>
        </div>
    </div>
    )
}