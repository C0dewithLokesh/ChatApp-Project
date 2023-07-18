import { IonPage } from "@ionic/react";
import { AiFillInstagram } from "react-icons/ai";
import { BsSoundwave } from "react-icons/bs";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import userImg from "/user.jpg";
import artLogo from "/code.png";

const Home = () => {
  return (
    <IonPage className="p-2 justify-start gap-10 items-center overflow-scroll bg-white">
      <div className="w-full flex justify-between items-center px-3 mt-5">
        <div className="user-img relative">
          <img src={userImg} alt="user-Img" className="w-11 rounded-[50%] overflow-hidden" />
        </div>
        <div className="flex items-center gap-3">
          <button className=" bg-purple-500 px-2 py-1 rounded-[50px] text-[15px] text-white">+ Invite</button>
          <AiFillInstagram size={'24px'} color="gray" />
        </div>
      </div>

      <div className="flex flex-col items-center rounded-[50%] gap-4 p-10 border-[2px] border-gray-400">
        <p className="text-gray-500 font-medium">Hi, Todd 👋</p>
        <h1 className=" text-2xl">Tap to Chat</h1>
        <BsSoundwave size={'40px'} color="gray" />
      </div>

      <div className="w-full flex flex-col gap-4">
        <h1 className="p-3 text-3xl font-medium">Explore</h1>

        <div className="flex gap-3 flex-wrap justify-center">

          <div className="p-2 px-3 w-[48%] flex flex-col bg-[#525151] rounded-[20px] text-white gap-3">
            {/* <img src={artLogo} alt="art-logo" className=" w-10" /> */}
            <BsFillFileEarmarkCodeFill color="lightgreen" size={'32px'} />
            <div className="text">
              <h1 className=" text-2xl font-medium">Code</h1>
              <p>Write programming code or algorithms for complex applications.</p>
            </div>
          </div>

          <div className="p-2 px-3 w-[48%] flex flex-col bg-[#525151] rounded-[20px] text-white gap-3">
            <BsFillFileEarmarkCodeFill color="lightgreen" size={'32px'} />
            <div className="text">
              <h1 className=" text-2xl font-medium">Code</h1>
              <p>Write programming code or algorithms for complex applications.</p>
            </div>
          </div>

          <div className="p-2 px-3 w-[48%] flex flex-col bg-[#525151] rounded-[20px] text-white gap-3">
            <BsFillFileEarmarkCodeFill color="lightgreen" size={'32px'} />
            <div className="text">
              <h1 className=" text-2xl font-medium">Code</h1>
              <p>Write programming code or algorithms for complex applications.</p>
            </div>
          </div>
          
          <div className="p-2 px-3 w-[48%] flex flex-col bg-[#525151] rounded-[20px] text-white gap-3">
            <BsFillFileEarmarkCodeFill color="lightgreen" size={'32px'} />
            <div className="text">
              <h1 className=" text-2xl font-medium">Code</h1>
              <p>Write programming code or algorithms for complex applications.</p>
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  )
}

export default Home;