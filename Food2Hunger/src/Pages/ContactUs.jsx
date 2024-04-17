import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { GrMail } from "react-icons/gr";
function ContactUs() {
  return (
    <>
      <div className="grid grid-cols-2 overflow-y-hidden ">
        {/* left side one */}
        <div>
          <div
            id="1st block of texts"
            className="grid gap-2 pt-24 text-3xl pl-32 font-sans text-blue-950 font-bold"
          >
            <p>Lets chat</p>
            <p>Tell me about your</p>
            <p>Project or Our Service.</p>
          </div>
          <div className="pt-8 pl-32">Let's build something together.</div>
          {/* for three borders */}
          {/* first border */}
          <div className="flex  items-center border border-black-200 shadow-xl rounded-xl h-24 w-2/3  ml-32 mt-8">
            <div className="pl-4 pr-4 pt-2 pb-2 border rounded-xl bg-gray-300 text-gray-600 text-3xl ml-5">
              <MdLocationOn />
            </div>
            <div className="ml-5">
              <p className="text-xl text-blue-950">Visit us at</p>
              <p>Butwal</p>
            </div>{" "}
            {/* closing div of right side of location */}
          </div>

          {/* second border */}
          <div className="flex  items-center border border-black-200 shadow-xl rounded-xl h-24 w-2/3  ml-32 mt-8">
            <div className="pl-4 pr-4 pt-2 pb-2 border rounded-xl bg-gray-300 text-gray-600 text-3xl ml-5">
              <MdCall />
            </div>
            <div className="ml-5">
              <p className="text-xl text-blue-950">Call us at</p>
              <p>Number / Number</p>
            </div>{" "}
            {/* closing div of right side of location */}
          </div>

          {/* third border */}
          <div className="flex  items-center border border-black-200 shadow-xl rounded-xl h-24 w-2/3  ml-32 mt-8">
            <div className="pl-4 pr-4 pt-2 pb-2 border rounded-xl bg-gray-300 text-gray-600 text-3xl ml-5">
              <GrMail />
            </div>
            <div className="ml-5">
              <p className="text-xl text-blue-950">Mail us at</p>
              <p>food2hungry@gmail.com</p>
            </div>{" "}
            {/* closing div of right side of location */}
          </div>
        </div>

        {/* right side one */}
        <div id="right all" className="py-20 px-12">
          <div className=" border-2 rounded border-black-200 shadow-2xl w-full h-auto ">
            <div className="px-10 py-8 text-2xl font-bold text-blue-900">
              Send Us Message
            </div>

            {/* for input */}
            <div className="grid gap-1">
              <input
                className="mx-10 h-12 w-6/7 p-2 border-2 border-solid black rounded"
                type="text"
                placeholder="Your Name"
              />

              <input
                className="mx-10 my-5 h-12 p-2 w-6/7 border-2 rounded"
                type="text"
                placeholder="Your Email"
              />
              <textarea
                className="mx-10 w-6/7 px-2 border-2 rounded resize-none"
                id="message"
                cols="full"
                rows="6"
                placeholder="Message"
              ></textarea>

              <button className="my-6 h-12 mx-10 bg-orange-600 text-white py-3 text-center border rounded-xl">
                Send Message
              </button>
              <div className="w-full  p-1 flex items-center mx-4 gap-5">
                <div className="border w-52 border-slate-800"></div>
                <div className="text-blue-950 font-bold text-xl">Find Us</div>
                <div className="border 0 px w-52 border-slate-800"></div>
              </div>
              <div className="my-4 flex justify-center gap-3 text-2xl text-blue-950">
                <FaFacebook />
                <AiFillInstagram />
                <RiWhatsappFill />
                <AiFillLinkedin />
              </div>
            </div>
            {/* for anchor tag */}

            {/* <div className='h-14 w-96
bg-blue-600 text-white px-44 py-4'>
<a href="#">Send Message</a>
</div> */}
          </div>
        </div>
      </div>
      <div className="h-96 px-16 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28259.13642959322!2d83.4943041472351!3d27.705178969657865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sne!2snp!4v1689737680709!5m2!1sne!2snp"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className=" h-96 w-full border rounded-lg"
          title="one"
        ></iframe>
      </div>
    </>

    // footer is in app.js
  );
}
export default ContactUs;
