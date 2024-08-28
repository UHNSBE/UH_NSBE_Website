import Image from "next/image";
import Link from "next/link";
import Slideshow from "./components/slideshow";

export default function Home() {
  return (
    <>
      <section className="hero w-full h-[70vh] py-6 flex items-center relative">
        <div className="flex justify-between w-11/12 mx-auto z-[3]">
          <div className="flex flex-col gap-5">
            <p>University of Houston</p>
            <h1 className="font-serif text-6xl w-7/12">National Society of Black Engineers</h1>
            <button className="bg-amber-600 px-8 py-3 rounded-full w-max mt-3">Become a member</button>
          </div>
          <div><Image className="-mt-5" src="/NSBE-General-BlackShield 1.png" alt="NSBE LOGO" width={250} height={250}/></div>
        </div>
        <Slideshow />
      </section>

      <div className="marquee text-4xl italic opacity-35 my-6">
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

      <section className="pt-60 pb-52">
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
          <Link href="/learn-more" className="bg-amber-600 text-white px-8 py-3 rounded-full my-3 inline-block w-max">
              Learn More
          </Link>
        </div>
      </section>

      <section className="py-16 pb-32">
        <div className="w-10/12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Card 1 */}
          <div className="bg-yellow-600 text-center h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image path
              alt="Excel Academically"
              width={400}
              height={500}
              className="w-full h-4/6 object-cover"
            />
            <div className="p-4">
              <h3 className="text-left mb-2 bg-black p-2 w-max">Excel Academically</h3>
              <p className="text-left">
                With study nights, mentorship program initiatives, and tutoring
                opportunities!
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#8C3C3C] text-center h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1630649945248-dc7d7c9ba79e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image path
              alt="Excel Academically"
              width={400}
              height={500}
              className="w-full h-4/6 object-cover"
            />
            <div className="p-4">
              <h3 className="text-left mb-2 bg-black p-2 w-max">Suceed Professionally</h3>
              <p className="text-left">
                With study nights, mentorship program initiatives, and tutoring
                opportunities!
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#698038] text-center h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image path
              alt="Excel Academically"
              width={400}
              height={500}
              className="w-full h-4/6 object-cover"
            />
            <div className="p-4">
              <h3 className="text-left mb-2 bg-black p-2 w-max">Positively Impact the Community</h3>
              <p className="text-left">
                With study nights, mentorship program initiatives, and tutoring
                opportunities!
              </p>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <Link href="/resources" className="bg-amber-600 text-white px-8 py-3 rounded-full inline-block"> View Our Resources</Link>
        </div>
      </section>


      <section className="h-[90vh] flex justify-center items-center">
        <div className="w-11/12 sm:w-10/12 mx-auto flex flex-col lg:flex-row justify-between gap-6">
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <h1 className="text-4xl font-serif mb-6">Don't miss out on our upcoming events</h1>
            <p>Welcome to the University of Houston Chapter of the National Society of Black Engineers. Come out and enjoy yourself at any of our events! Each event we host is eligible for points. Points are used to determine a member's participation and factor into conferences, sponsorships, and scholarships.</p>
          </div>

          <div className="text-2xl">
            <iframe className="w-full h-96 lg:w-[32rem] lg:h-[32rem]" src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&showTabs=0&showPrint=0&showTz=0&showTitle=0&src=dWhuc2JlLm9yZ19kc3JyOG1kYWQ2c2UxNHVrdTAwam1icjV2b0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB" width="500" height="500"></iframe>
          </div>
        </div>
      </section>

      <section className="h-[90vh] flex justify-center items-center">
        <div className="w-11/12 sm:w-10/12 mx-auto flex flex-col lg:flex-row-reverse justify-between gap-6">
          <div className="w-full lg:w-5/12 flex flex-col justify-center text-left lg:text-right">
            <h1 className="text-4xl font-serif mb-6">Join our community</h1>
            <p>UH NSBE is more than just an organization, it’s a family!
            Come learn more about what it means to be a part of the wonderful  NSBE community, otherwise known as the NSBEfam, at the University of Houston.</p>
            <button className="bg-amber-600 px-6 py-3 rounded-full w-max mt-6 mr-auto ml-0 lg:ml-auto lg:mr-0">Become a member</button>
          </div>

          <Image src="/event-gallery/gbmshot.png" alt="" width={700} height={700}/>
        </div>
      </section>

      <section className="h-[90vh] my-8 flex flex-col justify-center items-center">

          <p className="underline mb-4">
            Contact Us
          </p>
        <div className="p-8 max-w-3xl mx-auto text-[#f2ba62]">
          <form action="https://formsubmit.co/b3ef9d60a2dff5e611619ba0bfea1fc3" method="POST" className="flex flex-col space-y-4">
            <label htmlFor="name" className="text-sm">Name (Required)</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-3 bg-[#f2ba62] text-[#181309] rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2ba62]"
            />

            <label htmlFor="email" className="text-sm">Email (Required)</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-3 bg-[#f2ba62] text-[#181309] rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2ba62]"
            />

            <label htmlFor="category" className="text-sm">I am ...</label>
            <select
              id="category"
              name="category"
              required
              className="p-3 bg-[#f2ba62] text-[#181309] rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2ba62]"
            >
              <option value="" disabled selected>Select an option</option>
              <option value="option1">A Student</option>
              <option value="option2">An Alum</option>
              <option value="option3">A Sponsper</option>
              <option value="option4">An Company Representative</option>
            </select>

            <label htmlFor="message" className="text-sm">Message (Required)</label>
            <textarea
              id="message"
              name="message"
              required
              className="p-3 bg-[#f2ba62] text-[#181309] rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2ba62]"
            ></textarea>

            <button
              type="submit"
              className="p-3 border-2 border-[#f2ba62] text-[#f2ba62] rounded-md hover:bg-[#f2ba62] hover:text-[#181309] transition-colors duration-300"
            >
              Send
            </button>
          </form>

          <p className="text-center mt-6">
            Have any questions? Feel free to reach out to us through the contact form – emailing our secretary directly, or any of our socials! <br />
            <a href="mailto:secretary@uhnsbe.org" className="text-[#f2ba62] underline">secretary@uhnsbe.org</a>
          </p>
        </div>
      </section>

    </>
  );
}
