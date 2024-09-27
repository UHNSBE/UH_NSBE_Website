'use client'
import Image from 'next/image'
import Link from 'next/link'
import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        uhId: '',
        email: '',
        major: '',
        gender: '',
        classification: '',
        tShirtSize: '',
        internationalStudent: '',
        birthday: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        

        const stripe = await loadStripe(
            process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
        );
        if(!stripe){
            return;
        }
        try {
            const response = await axios.post('/api/membership', formData);
            const data = response.data;

            if (!data.ok) throw new Error('Something went wrong');
            await stripe.redirectToCheckout({
                sessionId: data.result.id
            });
        } catch (error) {
            console.log(error);
        }
    };

    // Handler to toggle modal
    const handleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        // Disable scrolling on body when modal is open
        if (showModal) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
    
        // Cleanup function to reset overflow style
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [showModal]);
      
    
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
                        <button className='text-left p-2 rounded-md bg-amber-600 flex justify-between mt-4' onClick={handleModal}>
                            <div>
                                <p className='text-sm'>Register Now</p>
                                <p>Fall & Spring Semester</p>
                            </div>
                            <h1 className='text-3xl flex items-center h-full'>$20</h1>
                        </button>
                    </div>
                </div>

                {/* Modal for Local Membership Registration */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                        <div className="bg-white rounded-lg w-11/12 max-w-2xl text-black">
                            <div className="flex justify-between items-center p-4 bg-neutral-800 text-white rounded-t-lg">
                                <h2 className="text-xl font-bold">Local Membership Form</h2>
                                <button
                                    onClick={handleModal}
                                    className="text-3xl font-bold text-gray-600 hover:text-red-600"
                                >
                                    &times;
                                </button>
                                
                            </div>
                            <div className="overflow-y-auto h-[70vh] p-4">
                                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                    <label className="flex flex-col">
                                        First Name:
                                        <input type="text" name="firstName" className="p-2 rounded-md border border-gray-300" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
                                    </label>

                                    <label className="flex flex-col">
                                        Last Name:
                                        <input type="text" name="lastName" className="p-2 rounded-md border border-gray-300" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
                                    </label>

                                    <label className="flex flex-col">
                                        UH ID:
                                        <input type="text" name="uhId" className="p-2 rounded-md border border-gray-300" placeholder="UH ID" value={formData.uhId} onChange={handleChange}/>
                                    </label>

                                    <label className="flex flex-col">
                                        Email:
                                        <input type="email" name="email" className="p-2 rounded-md border border-gray-300" placeholder="Email" value={formData.email} onChange={handleChange} />
                                    </label>

                                    <label className="flex flex-col">
                                        Major:
                                        <input type="text" name="major" className="p-2 rounded-md border border-gray-300" placeholder="Major" value={formData.major} onChange={handleChange}/>
                                    </label>

                                    <label className="flex flex-col">
                                        Gender:
                                        <select name="gender" className="p-2 rounded-md border border-gray-300" value={formData.gender} onChange={handleChange}>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </label>

                                    <label className="flex flex-col">
                                        Classification:
                                        <select name="classification" className="p-2 rounded-md border border-gray-300" value={formData.classification} onChange={handleChange}>
                                            <option value="Freshman">Freshman</option>
                                            <option value="Sophomore">Sophomore</option>
                                            <option value="Junior">Junior</option>
                                            <option value="Senior">Senior</option>
                                            <option value="Graduate">Graduate</option>
                                        </select>
                                    </label>

                                    <label className="flex flex-col">
                                        T-Shirt Size:
                                        <select name="tShirtSize" className="p-2 rounded-md border border-gray-300" value={formData.tShirtSize} onChange={handleChange}>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                        </select>
                                    </label>

                                    <label className="flex flex-col">
                                        Are you an international student?:
                                        <select name="internationalStudent" className="p-2 rounded-md border border-gray-300" value={formData.internationalStudent} onChange={handleChange}>
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
                                    </label>

                                    <label className="flex flex-col">
                                        Birthday:
                                        <input type="date" name="birthday" className="p-2 rounded-md border border-gray-300" value={formData.birthday} onChange={handleChange}/>
                                    </label>

                                    <button type="submit" className="p-3 bg-amber-600 text-white rounded-md mt-4">
                                        Proceed to Payment
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                )}

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