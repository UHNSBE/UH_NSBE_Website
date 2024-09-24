'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

export default function page(){
  const [selectedPackage, setSelectedPackage] = useState("Bronze");

  const packages = {
    Bronze: {
      title: "Bronze Sponsor",
      amount: "$500 - $1999",
      benefits: ["Access to UH NSBE resume bank", "Invitation to Winter & Spring banquet"],
    },
    Silver: {
      title: "Silver Sponsor",
      amount: "$2000 - $3999",
      benefits: ["Host ONE info session or professional workshop", "Feature job openings in 2 newsletters", "Benefits of Bronze level"],
    },
    Gold: {
      title: "Gold Sponsor",
      amount: "$4000 - $5999",
      benefits: ["Company logo on Chapter website", "Present at ONE General Body Meeting", "Benefits of Silver & Bronze levels"],
    },
    Platinum: {
      title: "Platinum Sponsor",
      amount: "$6000 - $7499",
      benefits: ["Company logo on Chapter T-shirt", "Feature job openings on NSBE social media", "Benefits of Gold, Silver & Bronze levels"],
    },
    Vanguard: {
      title: "Vanguard Sponsor",
      amount: "$7500 and above",
      benefits: ["Eligible for Sponsor of the Year Award", "Scholarship in company’s name", "Recognition at Chapter events", "Benefits of Platinum, Gold, Silver & Bronze levels"],
    },
  };

  return (
    <div>
      <h1 className='text-6xl w-11/12 mx-auto md:text-7xl text-center pt-24  relative'>Partner with UH NSBE</h1>

      <section className='pt-15 mx-auto w-11/12 my-24'>
        <p className='text-center w-full sm:w-8/12 mx-auto mb-3'>We would love for you to partner with the University of Houston chapter of the National Society of Black Engineers. A partnership is far greater than a financial commitment; it will help to build a solid foundation for engineers at  the University of Houston.</p>
        <p className='text-center w-full sm:w-8/12 mx-auto mb-8'>If you are interested in partnering with the University of Houston National Society of Black Engineers Chapter, please complete the <a href='/partners' className='text-amber-800 underline'>Sponsorship Packet</a> or become a partner electronically below.</p>
        <div className='text-center w-full sm:w-8/12 mx-auto mb-3 italic text-neutral-700'>
          <p className='text-sm'>If you have questions or comments regarding the Sponsorship Packet, please email our treasurer at treasurer@uhnsbe.org. Thank you!</p>
          <p className='text-sm'>Please note that UH NSBE is a 501(c)3 nonprofit organization and donors will be given an acknowledgement receipt for tax purposes.</p>
        </div>
        
      </section>

      <div className="flex py-20 mx-auto w-11/12 justify-center">
        {/* Sponsorship Package Section */}
        <div className="w-auto px-6 border-r-2 mr-6 border-black">
          <h1 className="text-4xl mb-6 text-center">Sponsorship Packages</h1>
          <div className="tabs mb-6 text-center">
            {Object.keys(packages).map((pkg) => (
              <button
                key={pkg}
                className={`px-4 py-2 m-2 ${selectedPackage === pkg ? "bg-amber-600 text-white" : "bg-gray-200"}`}
                onClick={() => setSelectedPackage(pkg)}
              >
                {pkg} Sponsor
              </button>
            ))}
          </div>

          <div className="bg-white p-8 shadow-lg flex flex-col h-64">
            <h2 className="text-2xl mb-4">{packages[selectedPackage].title}</h2>
            <p className="text-left">{packages[selectedPackage].amount}</p>
            <ul className="text-left list-disc list-inside">
              {packages[selectedPackage].benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            {/* <button className="btn mx-auto mt-auto">Sponsor Now</button> */}
          </div>
        </div>

        <section className="w-4/12">
          <h1 className="text-4xl mb-8 text-center">Payment Methods</h1>
          <div className="w-11/12 mx-auto">
            <p className='mt-4 font-semibold'>We accept the following digital payment methods:</p>
            <ul className="list-disc list-inside">
              <li className='mb-1'>Paypal: finance@uhnsbe.org</li>
              <li className='mb-1'>CashApp: $UHNSBE</li>
              <li className='mb-1'>Credit/Debit Cards</li>
            </ul>
            <p className='mt-6 font-semibold'>For Payment by Check:</p>
            <ul className="list-disc list-inside">
              <li className='mb-1'>All checks must be made payable to <i>National Society of Black Engineers at University of Houston</i></li>
              <li className='mb-1'>Campus Address: University of Houston National Society of Black Engineers | 4464 University Drive Commons Desk Mailbox #360 | Houston, TX 77204</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Current Partners Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl mb-12">Our Current Partners</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto items-center">
          <Image className='mx-auto w-auto h-52' src="/partners/albemarle.webp" alt="Partner 1" width={200} height={100} />
          <Image className='mx-auto w-auto h-52' src="/partners/black_and_veatch.png" alt="Partner 2" width={200} height={100} />
          <Image className='mx-auto w-72 h-auto' src="/partners/BP.jpeg" alt="Partner 3" width={200} height={100} />
          <Image className='mx-auto w-72 h-auto' src="/partners/kiewit.jpg" alt="Partner 4" width={200} height={100} />
          <Image className='mx-auto w-72 h-auto' src="/partners/linde.jpeg" alt="Partner 5" width={200} height={100} />
          <Image className='mx-auto w-72 h-auto' src="/partners/technipfmc.jpg" alt="Partner 6" width={200} height={100} />
          <Image className='mx-auto w-72 h-auto' src="/partners/visa.jpg" alt="Partner 7" width={200} height={100} />
        </div>
      </section>

    </div>
  );
};