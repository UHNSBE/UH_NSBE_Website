'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';

export default function Page() {
    // Ensure scroll always enabled (legacy modal removed)
    useEffect(() => { document.body.style.overflow = 'auto'; }, []);
    return (
    <>
        <h1 className='text-6xl w-11/12 mx-auto md:text-7xl text-center pt-24  relative'>Become a Member</h1>

        <section className='pt-15 mx-auto w-11/12 my-24'>
            <h2 className="text-4xl  my-6 text-center">Steps to Membership</h2>
            <p className='text-center w-full sm:w-8/12 mx-auto mb-12'>To become a NSBE member, click the local membership card below to register with our chapter. We ask that you also purchase the national membership to reap the perks and benefits of a national network of black engineers and partners.</p>

            {/* Recreated Component Here */}
            <div className='flex flex-col xl:flex-row gap-8 text-white'>
                <div className='flex gap-4 w-full xl:w-6/12 p-4 mt-5 bg-black bg-opacity-75 rounded-xl'>
                    <div className='rounded-xl w-[300px] h-auto overflow-hidden relative hidden min-[600px]:block'>
                        <Image src="https://images.unsplash.com/photo-1612214495858-4f32b96155a7?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Micah Le-Masakela" layout="fill" objectFit="cover"/>
                    </div>
                    <div className='flex-1 flex flex-col justify-between'>
                        <div>
                            <h3 className="text-2xl mb-4 font-bold flex flex-row-reverse justify-end items-center gap-3">Local Membership
                                <div className='rounded-xl w-[150px] h-[100px] overflow-hidden relative block min-[600px]:hidden'>
                                    <Image src="https://images.unsplash.com/photo-1612214495858-4f32b96155a7?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Micah Le-Masakela" layout="fill" objectFit="cover"/>
                                </div>
                            </h3>
                            <ol className='list-disc ml-6'>
                                <li>2023-2024 Membership shirt</li>
                                <li>Access to the UH NSBE scholarships, resume templates, partner job postings, career roadmaps, and more!</li>
                                <li>Discounted travel/housing rates to Regional and National Conferences (Must be National Member to attend conferences)</li>
                                <li>Resume included into resume bank sent to corporate partners</li>
                            </ol>
                        </div>
                        <Link href='/membership/uh' className='text-left p-2 rounded-md bg-amber-600 flex justify-between mt-4'>
                            <div>
                                <p className='text-sm'>Register Now</p>
                                <p>Fall & Spring Semester</p>
                            </div>
                            <h1 className='text-3xl flex items-center h-full'>$20</h1>
                        </Link>
                    </div>
                </div>
                {/* Local membership registration moved to /membership/uh */}

                <div className='flex gap-4 w-full xl:w-6/12 p-4 mt-5 bg-black bg-opacity-75 rounded-xl'>
                    <div className='rounded-xl w-[300px] h-auto overflow-hidden relative hidden min-[600px]:block'>
                        <Image src="https://images.unsplash.com/photo-1581094368940-5a08c24fd0a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Micah Le-Masakela" layout="fill" objectFit="cover"/>
                    </div>
                    <div className='flex-1 flex flex-col justify-between'>
                        <div>
                            <h3 className="text-2xl mb-4 font-bold flex flex-row-reverse justify-end items-center gap-3">National Membership
                                <div className='rounded-xl w-[150px] h-[100px] overflow-hidden relative block min-[600px]:hidden'>
                                    <Image src="https://images.unsplash.com/photo-1581094368940-5a08c24fd0a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Micah Le-Masakela" layout="fill" objectFit="cover"/>
                                </div>
                            </h3>
                            <ol className='list-disc ml-6'>
                                <li>MUST be a national member to attend Regional and National Conferences</li>
                                <li>Access to 300+ companies offering internships/co-ops/full-time positions at regional and national career fairs</li>
                                <li>Access to National Scholarships</li>
                                <li>An unparalleled network of diverse engineers and scientists</li>
                            </ol>
                        </div>
                        <Link href='https://nsbe.org/collegiate/' className='text-left p-2 rounded-md bg-amber-600 flex justify-between mt-4'>
                            <div>
                                <p className='text-sm'>Register Now</p>
                                <p>12 Months</p>
                            </div>
                            <h1 className='text-3xl flex items-center'>$15</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </section>


        <section className='mx-auto w-11/12  mt-12 lg:mb-24'>
            <h2 className="text-4xl  my-6 text-center">Benefits of Membership</h2>
            <div className='flex w-full lg:w-10/12 mx-auto gap-12 my-20 mb-32'>
                <div className="flex flex-col gap-12 text-left w-full lg:w-8/12 justify-center">
                    <div className='flex flex-col gap-14'>
                        <div>
                            <h3 className="text-xl mb-4 font-bold">Professional and Academic Development</h3>
                            <p>UH NSBE hosts countless events every year to make sure that you are always pushing towards your dream career. We understand the challenges that come with pursuing a STEM major so we want to support you every step of the way. It’s 4.0 season!</p>
                            <div className='block lg:hidden'><Image className="my-3" src="/event-gallery/gbmshot1.png" alt="" width={600} height={700} /></div>
                        </div>
                        
                        <div>
                            <h3 className="text-xl mb-4 font-bold">Networking and Scholarships</h3>
                            <p>Active NSBE memberships have no problem connecting with industry professionals and securing their bags. We also have company sponsors that hand out scholarships exclusively to NSBE members every year. Don’t miss out on all the fantastic opportunities that we have to offer!</p>
                            <div className='block lg:hidden'><Image className="my-3" src="/event-gallery/networkevent.png" alt="" width={600} height={700} /></div>
                        </div>
                        
                        <div>
                            <h3 className="text-xl mb-4 font-bold">Family and Community</h3>
                            <p>NSBE is committed to being a positive impact to its members and their respective communities. Join us and support our mission to give back through PCI events, volunteering, and more.</p>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <Image className="mb-3" src="/event-gallery/gbmshot1.png" alt="" width={600} height={700} />
                    <Image className="mb-3" src="/event-gallery/networkevent.png" alt="" width={600} height={700} />
                </div>
            </div>
        </section>

   </>
  )
}