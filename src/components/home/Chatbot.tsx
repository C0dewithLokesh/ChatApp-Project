import { useState, useRef } from "react";
import {
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonTextarea,
  IonToolbar,
} from "@ionic/react";
import { sendOutline } from "ionicons/icons";

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");

  const userInputRef = useRef<HTMLIonTextareaElement>(null);

  const handleUserMessage = () => {
    const enteredInput = userInputRef.current!.value;

    const newMessage: Message = {
      text: `${enteredInput}`,
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setUserInput("");

    setTimeout(() => {
      const botMessage: Message = {
        text: `${enteredInput}`,
        isUser: false,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 500);
  };

  return (
    <IonPage className="home-page p-2 pt-0 items-center">
      <IonHeader className="header shadow-none border-b-2 border-[#7c3aed] w-screen bg-[#ead5f6]">
        <IonToolbar className="header-wrapper flex flex-row items-center">
          <div className="header-container flex items-center justify-between px-5 text-black">
            <div className=" max-w-fit">
              <h1 className="user-name mt-3 mb-0 font-medium text-[20px]">
                Retentive Bot
              </h1>
              <p className="user-status mb-3 text-sm text-[#4ac14a] mt-1">
                Active
              </p>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <div className="msg-container max-h-full h-full w-full overflow-y-scroll flex flex-col-reverse">
        {messages
          .slice()
          .reverse()
          .map((message, index) => (
            <div
              key={index}
              className={`msg-content ${message.isUser ? "user" : "bot"}`}
            >
              <div
                className={`msg-content-inside ${
                  message.isUser ? "user" : "bot"
                }`}
              >
                <span className={`${message.isUser ? "user" : "bot"} msg-text`}>
                  {message.text}
                </span>
              </div>
            </div>
          ))
        }
      </div>

      {/* Message Input */}
      <div className="msg-input-container w-full">
        <IonItem className="msg-input rounded-lg w-full border-[3px] border-gray-400 text-black rounded-b-[30px]">
          <IonTextarea
            autoGrow={true}
            rows={1}
            placeholder="Write your message here..."
            className=" max-h-[80px] overflow-scroll bg-transparent outline-none w-full overflow-x-hidden"
            value={userInput}
            ref={userInputRef}
            onIonChange={(e) => setUserInput(e.detail.value!)}
          ></IonTextarea>
          <IonIcon
            icon={sendOutline}
            className=" text-[#9663d2]"
            onClick={handleUserMessage}
          />
        </IonItem>
      </div>
    </IonPage>
  );
};

export default Chatbot;
