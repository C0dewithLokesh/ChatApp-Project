import { IonButton, IonPage } from "@ionic/react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const LogIn = () => {
  return (
    <IonPage className="login-page flex realtive justify-start">
      <div className="flex justify-between items-center mt-7 text-white px-6">
        <AiOutlineLeft className="font-bold" />
        <div className="flex justify-end items-center gap-2">
          <p className="text-gray-300 text-sm">Dont't have an Account?</p>
          <button className="backdrop-blur-sm bg-white/30 px-2 py-1 rounded-md text-[15px]">Get Started</button>
        </div>
      </div>

      <h1 className="mt-16 text-center text-5xl font-semibold text-white">
        Jobsly
      </h1>

      <div className="login-bottom bg-white text-black absolute w-full bottom-0 h-[65%] flex items-center rounded-t-[30px] p-6 flex-col gap-[50px]">
        <div className="text-center w-full">
          <h1 className=" font-bold text-2xl">Welcome Back</h1>
          <p className=" text-gray-400 text-sm">Enter Yours detail below</p>
        </div>

        <form className="w-full flex flex-col p-4 gap-4">
          <div className="flex flex-col border-[2px] border-gray-300 py-1 px-2 rounded-md gap-1">
            <label htmlFor="email" className=" text-xs font-semibold text-gray-400">Email Address</label>
            <input id="email" type="email" className=" bg-transparent outline-none" />
          </div>

          <div className="flex flex-col border-[2px] border-gray-300 py-1 px-2 rounded-md gap-1">
            <label htmlFor="password" className=" text-xs font-semibold text-gray-400">Password</label>
            <div className="flex relative items-center justify-center">
              <input id="password" type="password" className=" bg-transparent outline-none w-full" />
              <BsEye className="absolute right-2" color="gray" size={'20px'} />
            </div>
          </div>

          <IonButton routerLink={'/home'} className="login-btn text-white p-2 rounded-md">Login</IonButton>
          <p className="w-full text-center text-gray-400">Forgot your Password?</p>
        </form>
      </div>
    </IonPage>
  )
}

export default LogIn;