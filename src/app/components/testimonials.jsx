import React from 'react'
import Image from 'next/image'

export default function Testimonials() {
    return (
        <section className="w-11/12 mx-auto py-32">
            <h2 className="text-5xl text-center mb-12 font-serif">What People Say</h2>
            <p className="text-center w-3/5 mx-auto text-lg mb-16">
                Discover what our members have to say about their experiences with NSBE at the University of Houston.
            </p>
            <div className="flex justify-center gap-12">
                <div className="relative flex flex-col items-center p-8 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 text-white max-w-sm shadow-lg">
                    <Image
                        src="/testimonials/sarah-johnson.jpg"
                        alt="Sarah Johnson"
                        className="rounded-full mb-4"
                        width={100}
                        height={100}
                    />
                    <h3 className="text-2xl font-semibold">Sarah Johnson</h3>
                    <p className="text-lg italic">Small Business Owner</p>
                    <p className="text-center mt-4">
                        {`"Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration."`}
                    </p>
                </div>
                <div className="relative flex flex-col items-center p-8 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 text-white max-w-sm shadow-lg">
                    <Image
                        src="/testimonials/david-patel.jpg"
                        alt="David Patel"
                        className="rounded-full mb-4"
                        width={100}
                        height={100}
                    />
                    <h3 className="text-2xl font-semibold">David Patel</h3>
                    <p className="text-lg italic">Project Manager</p>
                    <p className="text-center mt-4">
                        {`"I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality."`}
                    </p>
                </div>
                <div className="relative flex flex-col items-center p-8 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 text-white max-w-sm shadow-lg">
                    <Image
                        src="/testimonials/emily-carter.jpg"
                        alt="Emily Carter"
                        className="rounded-full mb-4"
                        width={100}
                        height={100}
                    />
                    <h3 className="text-2xl font-semibold">Emily Carter</h3>
                    <p className="text-lg italic">Operations Manager</p>
                    <p className="text-center mt-4">
                        {`"The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow."`}
                    </p>
                </div>
            </div>
        </section>
    )
}
