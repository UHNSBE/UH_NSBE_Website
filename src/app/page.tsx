import Image from "next/image";
import Link from "next/link";
import Slideshow from "./components/slideshow";
import ContactForm from "./components/contactform";

export default function Home() {
  return (
    <>
      <section className="hero w-full h-[71.5vh] py-6 flex items-center relative">
        <div className="flex justify-between w-11/12 mx-auto z-[3]">
          <div className="flex flex-col gap-5 text-white">
            <p>University of Houston</p>
            <h1 className="md:text-6xl text-5xl w-7/12">National Society of Black Engineers</h1>
            <Link href="/membership" className="btn mt-3">Become a member</Link>
          </div>
          <div><Image className="-mt-5" src="/NSBE-General-BlackShield 1.png" alt="NSBE LOGO" width={250} height={250}/></div>
        </div>
        <Slideshow />
      </section>

      <div className="marquee text-4xl italic opacity-50 my-6">
        <ul className="marquee__content">
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
        </ul>

        <ul aria-hidden="true" className="marquee__content">
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
          <li>ENGINEERED TO WITHSTAND</li>
          <li>•</li>
        </ul>
      </div>

      <section className="pt-48 pb-44">
        <div className="w-11/12 mx-auto text-center flex flex-col gap-6 items-center">
          <p className="underline mb-4 text-lg sm:text-xl">
            The mission of the National Society of Black Engineers is:
          </p>
          <div className="quote flex flex-col">
            <span className="text-amber-600 text-[5rem] text-left -mb-16 sm:-ml-5">“</span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif leading-relaxed mx-auto max-w-6xl relative">
              To increase the number of culturally responsible Black engineers who excel
              academically, succeed professionally, and positively impact the
              community
            </blockquote>
            <span className="text-amber-600 text-[5rem] text-right -mt-8 sm:-mr-5 h-12">”</span>
          </div>
          <Link href="/about" className="btn">
              Learn More
          </Link>
        </div>
      </section>

      <section className="py-16 pb-32 text-white">
        <div className="w-11/12 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-20">
          {/* Card 1 */}
          <div className="bg-yellow-600 text-center h-auto flex flex-col">
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Excel Academically"
              width={400}
              height={500}
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-left mb-2 bg-black p-2 w-max">Excel Academically</h3>
              <p className="text-left">
                NSBE's main goal is to strive for black excellence. That includes hosting academic excellence focused events like study nights, mentorship program initiatives, and tutoring opportunities!
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#a73d3d] text-center h-auto flex flex-col">
            <Image
              src="https://images.unsplash.com/photo-1630649945248-dc7d7c9ba79e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Succeed Professionally"
              width={400}
              height={500}
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-left mb-2 bg-black p-2 w-max">Succeed Professionally</h3>
              <p className="text-left">
                NSBE fosters a culturally responsible STEM community through events with company partners, the Engineering Career Center, and professional development opportunities.
              </p>
            </div>
          </div>

          {/* Card 3 (Centered in md) */}
          <div className="bg-[#698038] text-center h-auto flex flex-col md:col-span-2 md:flex md:justify-center xl:col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Positively Impact the Community"
              width={400}
              height={500}
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="p-4 flex-grow">
              <h3 className="text-left mb-2 bg-black p-2 w-max">Positively Impact the Community</h3>
              <p className="text-left">
                NSBE goes beyond academic and professional success, making a positive impact through collaborations with members and companies across the Greater Houston area.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="https://discord.com/invite/UK7evmj9d5" className="btn">View Our Resources</Link>
        </div>
      </section>


      <section className="h-[80vh] flex justify-center items-center">
        <div className="w-11/12 sm:w-10/12 mx-auto flex flex-col lg:flex-row justify-between gap-6">
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <h1 className="text-4xl mb-6">{`Don't miss out on our upcoming events`}</h1>
          <p>{`Welcome to the University of Houston Chapter of the National Society of Black Engineers. Come out and enjoy yourself at any of our events! Each event we host is eligible for points. Points are used to determine a member's participation and factor into conferences, sponsorships, and scholarships.`}</p>
          </div>

          <div className="text-2xl">
            <iframe className="w-full h-96 lg:w-[42rem] lg:h-[32rem]" src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&showTabs=0&showPrint=0&showTz=0&showTitle=0&src=dWhuc2JlLm9yZ19kc3JyOG1kYWQ2c2UxNHVrdTAwam1icjV2b0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB" width="500" height="500"></iframe>
          </div>
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

      <section className="h-[80vh] my-24 flex flex-col justify-center items-center">

          <p className="underline mb-4">
            Contact Us
          </p>
        <ContactForm />
      </section>

    </>
  );
}
