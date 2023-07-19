import { IonPage } from "@ionic/react";
import { AiFillInstagram } from "react-icons/ai";
import { BsSoundwave } from "react-icons/bs";
import userImg from "/user.jpg";
import HomeCards from "./HomeCards";

const Home = () => {
  return (
    <IonPage className="home-page p-2 justify-start gap-10 items-center overflow-scroll">
      <div className="w-full flex justify-between items-center px-3 mt-5">
        <div className="user-img relative">
          <img src={userImg} alt="user-Img" className="w-11 rounded-[50%] overflow-hidden" />
        </div>
        <div className="flex items-center gap-3">
          <button className=" bg-purple-500 px-2 py-1 rounded-[50px] text-[15px] text-white">+ Invite</button>
          <AiFillInstagram size={'24px'} color="gray" />
        </div>
      </div>

      <div className="bot-circle flex flex-col items-center rounded-[50%] gap-4 p-10 border-[0px] border-[#cdaae3] bg-[#e4cff1c3] relative">
        <p className="text-gray-200 font-medium">Hi, Todd 👋</p>
        <h1 className="bot-btn text-2xl text-black">Tap to Chat</h1>
        <BsSoundwave size={'40px'} color="white" />
      </div>

      <div className="w-full flex flex-col gap-4">
        <h1 className="p-3 text-3xl font-medium text-white">Explore</h1>

        <HomeCards />
      </div>
    </IonPage>
  )
}

export default Home;