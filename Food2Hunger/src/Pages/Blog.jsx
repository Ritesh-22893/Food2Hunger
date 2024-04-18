import React from "react";
import Footer from '../Components/Navigation/Footer';

function Blog() {
  return (
    <>
      <div className="mainscreen">
        <div className=" w-full h-full flex-row " id="firstsection">
          <div className="leftpartofscreen">
            <div
              id="first line of text"
              className="text-[32px] font-semibold absolute top-28 left-16 gap-4 flex-col tracking-wider"
            >
              Welcome to
              <div className="text-orange-600 font-extrabold uppercase">
                Blog page of food2hunger
              </div>
            </div>
            <div
              id="second 3 lines of text"
              className="mt-12 absolute top-48 left-16 text-xl tracking-wide flex flex-col gap-1 "
            >
              Here, we present you amazing post and various achievements of
              NGOs.
              <div className="flex-col mt-6 ">
                Enjoy the beautiful memories
                <div className="text-orange-500 font-sans font-bold">Gui</div>
              </div>
              Click the button below to view
            </div>
            <div
              id="for buttons"
              className="absolute top-[400px] left-16 flex gap-6"
            >
              <button className="mt-10 text-[20px] font-semibold tracking-wide h-16 w-60 rounded-full text-white bg-orange-500 hover:scale-110">
                Read More...
              </button>

              <button className="mt-10 text-[20px] font-semibold tracking-wide h-16 w-60 rounded-full text-orange-400 bg-gray-200 hover:scale-110 ease-in-out">
                View Acheivements
              </button>
            </div>
          </div>
          <div className="w-2/5 float-right" id="left_halfpartofscreen">
            <img
              className="mt-16 w-screen h-[500px] rounded-full border-8 border-orange-500"
              src="..\public\images\photo-1488521787991-ed7bbaae773c.avif"
              alt=""
            />
          </div>
        </div>

        <div className="searchblog">
          <div className="mt-12 text-center bg-gray-100 h-72 w-screen flex flex-col gap-3">
            <div className="pt-16 text-[34px] font-sans font-extrabold text-gray-600">
              All Blog Post
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search Blog"
                className="p-5 border border-solid border-black h-16 w-[400px] rounded-full"
              />
              <div className="flex items-center justify-center ml-3">
                <img
                  src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
                  alt=""
                  className="h-12 cursor-pointer "
                />
              </div>
              {/* <button className="ml-4 text-white bg-black rounded-full tracking-wider h-16 w-44">
                Search
              </button> */}
            </div>
          </div>
        </div>

        <div className="seconndsection">
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://static.wixstatic.com/media/5fba06_b352272f7eed45338a9b7f697ca20b63~mv2.jpeg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5fba06_b352272f7eed45338a9b7f697ca20b63~mv2.jpeg"
                />
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Donating food to shopkeeper
                  <br class="hidden lg:inline-block" />
                  whose lifestyle was deteriorating
                </h1>
                <p class="mb-8 leading-relaxed">
                  Shopkeeper with deteriorating life was provided support with
                  foods to improve his lifestyle and improve his daily life,
                  making him to survive with sort of ease. Authentic tumeric
                  truffaut hexagon try-hard chambray...
                </p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-xl text-lg">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="thirdscreen">
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Members of NGO providing
                  <br class="hidden lg:inline-block" />
                  homemade goods to banke district
                </h1>
                <p class="mb-8 leading-relaxed">
                  Helping a community donating tons of foods in banke district.
                  Making the lives of people better and ease which will
                  ultimately lead in better living. Uplifting the lives of
                  thousands and showing a beautiful message to the whole
                  world...
                </p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded-xl text-lg">
                    Read More
                  </button>
                </div>
              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://pbs.twimg.com/media/EYOABkIU0AE33tU.jpg:large"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="fourthscreen">
          <div className="seconndsection">
            <section class="text-gray-600 body-font">
              <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img
                    class="object-cover object-center rounded"
                    alt="hero"
                    src="../public/images/blog3.jpeg"
                  />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Giving healthy snacks
                    <br class="hidden lg:inline-block" />
                    to society members in hot day
                  </h1>
                  <p class="mb-8 leading-relaxed">
                    Watch how NGO is providing healthy snacks to the people of
                    nearby locality making their day better in summer season.
                    With help of collaborating skill many ocals were getting
                    facilities that they were hoping with programs nearby...
                  </p>
                  <div class="flex justify-center">
                    <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-xl text-lg">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Blog;
