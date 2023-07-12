import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../files/Netflix-Logo.wine.svg";
import InPageContent from "../components/InPageContent";
import tvImg from "../files/tv.png";
import downImg from "../files/mobile-st.jpg";
import watchImg from "../files/watch-img.png";
import kidsImg from "../files/kidsImg.png";
import Faq from "../components/Faq";
import { useNetflixContext } from "../context/Context";
import Footer from "../components/Footer";
// import video from "./files/video-devices-in";
const InPage = () => {
  const Navigate = useNavigate();
  const { setEmail } = useNetflixContext();
  const HandleSubmit = (e) => {
    e.preventDefault();
    Navigate("/SignUp");
  };
  return (
    <div className="h-full bg-customBackGround text-white">
      <div className="h-[110vh] bg-[url('./files/netflix-in-img.jpg')] bg-cover">
        <div className="bg-black h-full bg-opacity-60 font-sans font-semibold text-white">
          <div className="flex justify-between items-center">
            <div className="">
              <img className=" h-32" src={Img} alt=" " />
            </div>
            <div className="grid grid-cols-2 gap-10">
              <select className=" w-32 h-8 bg-transparent border-2 border-gray-300">
                <option label="English" value="">
                  English
                </option>
                <option label="हिंदी" value="">
                  हिंदी
                </option>
              </select>
              <button
                onClick={() => Navigate("Login")}
                className="h-8 flex justify-center items-center bg-redButton w-20  rounded-sm"
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="grid place-content-center">
            <div className="w-[80vw] h-[40vh] grid place-content-center m-28">
              <h1 className="text-5xl font-extrabold text-center m-3">
                Unlimited movies, TV shows and more
              </h1>
              <p className="text-center m-3 text-lg">
                Watch anywhere. Cancel anytime.
              </p>
              <h3 className="text-center m-3 text-lg">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="flex justify-center">
                <form onSubmit={HandleSubmit}>
                  <input
                    className="h-12 w-64 bg-transparent border-2 border-gray-300 rounded-sm text-white font-semibold"
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="h-12 w-32 m-4 bg-redButton text-center rounded-sm"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-2 pt-2">
        <InPageContent
          title={"Enjoy on your TV"}
          titleContent={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
          tImg={tvImg}
          // video={video}
        />
        <InPageContent
          title={"Download your shows to watch offline"}
          titleContent={
            "Save your favourites easily and always have something to watch."
          }
          tImg={downImg}
          flexDirection={"flex-row-reverse"}
        />

        <InPageContent
          title={"Watch everywhere"}
          titleContent={
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          }
          tImg={watchImg}
        />

        <InPageContent
          title={"Create profiles for kids"}
          titleContent={
            "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          }
          tImg={kidsImg}
          flexDirection={"flex-row-reverse"}
        />
      </div>
      <div className="bg-black w-full">
        <h1 className="text-5xl text-white font-extrabold text-center mt-2 p-4">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col justify-center items-center gap-2">
          <Faq
            question={"What is Netflix?"}
            answer={
              "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
            }
          />
          <Faq
            question={"How much does Netflix cost?"}
            answer={
              "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
            }
          />
          <Faq
            question={"Where can I watch?"}
            answer={
              "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
            }
          />
          <Faq
            question={"How do I cancel?"}
            answer={
              "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
            }
          />
          <Faq
            question={"What can I watch on Netflix"}
            answer={
              "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
            }
          />
          <Faq
            question={"Is Netflix good foe kids?"}
            answer={
              "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
            }
          />
        </div>
        <h3 className="text-center m-3 text-lg text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="flex justify-center">
          <form>
            <input
              className="h-12 w-64 bg-transparent border-2 border-gray-300 rounded-sm text-white font-semibold"
              type="email"
              placeholder="Email address"
            />
            <button className="h-12 w-32 m-4 bg-redButton text-center rounded-sm">
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div className="bg-black h-[350px] p-2 py-[50px] px-[160px] gap-2 text-[rgba(255,255,255,0.7)]">
        <Footer />
      </div>
    </div>
  );
};

export default InPage;
