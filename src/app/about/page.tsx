import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

function TestimonialCard(props: any) {
  return (
    <Card className="w-full max-w-md p-8 grid gap-6 bg-opacity-55 bg-gradient-to-b from-amber-800 to-amber-500 text-white text-center">
      <div className="flex flex-col items-center gap-4">
        <Avatar className='!h-52 !w-52 mb-4'>
          <AvatarImage src={props.image} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-2xl font-semibold">{props.name}</h3>
          <p className="text-white opacity-75">{props.position}</p>
        </div>
      </div>
      <blockquote className="text-lg font-medium leading-relaxed">
        {`"${props.quote}"`}
      </blockquote>
    </Card>
  )
}

export default function page() {
    const testimonials = [
        {
          name: "Sydney Blakely",
          position: "Senator ‘23 - ’24",
          quote: `Why NSBE?... Because I found a community of like-minded engineering students!`,
          image: "/testimonials/sydney.jpg"
        },
        {
          name: "Micah Le-Masakela",
          position: "Chair ‘23 - ’24",
          quote: `The first time I felt seen not only as a black student but a woman pursuing a STEM degree was by joining NSBE. They believed in me before I even saw my potential as a leader.`,
          image: "/testimonials/micah.jpg"
        },
        {
          name: "Evan Sherman",
          position: "Financial Advisor '23 - '24",
          quote: `Why NSBE?... I did better in my classes by making friends in UH-NSBE.`,
          image: "/testimonials/evan.jpg"
        }
      ];

      
    return (
        <>
            <h1 className='text-6xl md:text-7xl text-center py-16 sm:py-24   relative'>All About NSBE</h1>

            <section className="chicagosix w-11/12 mx-auto pt-12ds py-16 sm:py-28">
                <div className='flex flex-col-reverse xl:flex-row w-10/12 mx-auto items-center gap-12'>
                    <div className='flex flex-col gap-12'>
                        <p className='text-2xl md:text-3xl text-center'>The National Society of Black Engineers was founded in 1974 by 6 engineering students: <span className='italic font-bold text-amber-500'>Edward Coleman, Anthony Harris, Brian Harris, Stanley L. Kirtley, John W. Logan Jr., and George Smith</span>, known as the “Chicago Six” at Purdue University.</p>
                        <Link href="https://nsbe.org/home/about/"><button className='btn !w-full !rounded-lg'>Learn More</button></Link>
                    </div>
                    <Image className='w-full sm:w-96 sm:h-96 lg:w-[700px] lg:h-[500px]' alt="Founding NSBE Members - Chicago Six" src="/event-gallery/chicagosix.jpg" height={500} width={500}/>
                </div>
            </section>
            
            <section className='w-11/12 mx-auto py-32'>
                <h2 className='text-5xl text-center mb-12  '>Our Mission</h2>
                <p className='text-center w-11/12 sm:w-4/5 mx-auto text-base sm:text-lg'>The National Society of Black Engineers at University of Houston is to increase the number of culturally responsible Black Engineers who excel academically, succeed professionally and positively impact the community. At the University of Houston NSBE, we envision a world where Black Engineers are leaders in innovation and creators of positive change within their communities. Our organization strives to empower students with the tools, resources, and networks necessary to thrive in their academic and professional endeavors. We are committed to building a strong, supportive community that fosters excellence, collaboration, and leadership among our members. We call the motivation that pushes us to bring to fruition our mission, our <i className='font-bold '>NSBE Why</i>.</p>
            </section>

            <section className="w-11/12 mx-auto py-16">
                <h2 className="text-5xl text-center mb-12  ">Why NSBE?</h2>
                <p className="text-center w-11/12 sm:w-3/5 mx-auto text-base sm:text-lg mb-16">
                {`At our chapter, we stay motivated to succeed in engineering in black excellence by having a deep understanding of our "Why NSBE". Discover what our members have to say about their experiences with NSBE at the University of Houston.`}
                </p>

                <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard name={testimonial.name} position={testimonial.position} quote={testimonial.quote} image={testimonial.image} key={index}></TestimonialCard>
                    ))}
                </div>
            </section>

            <section className="h-[90vh] flex justify-center items-center w-11/12 mx-auto">
                <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row-reverse justify-between gap-6">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-right">
                        <h1 className="text-4xl   mb-6">Join our community</h1>
                        <p>UH NSBE is more than just an organization, it’s a family!
                            Come learn more about what it means to be a part of the wonderful  NSBE community, otherwise known as the NSBEfam, at the University of Houston.</p>
                        
                        <div className='mt-6 flex gap-3 justify-center lg:justify-end'>
                            {/* <button className="bg-amber-600 px-6 py-3 rounded-full w-max">Find out more</button> */}
                            <Link href='/membership' className="btn">Become a member</Link>
                        </div>
                        
                    </div>

                    <Image className='mx-auto lg:mx-0' src="/event-gallery/gbmshot.png" alt="" width={700} height={700} />
                </div>
            </section>
        </>
    )
  }
  