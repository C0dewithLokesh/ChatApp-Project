import { AiOutlineMessage } from "react-icons/ai";
import { BsClipboard } from "react-icons/bs";
import { RiHandHeartFill } from "react-icons/ri";
import { MdCardGiftcard } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";

interface CardProps {
  icon: JSX.Element;
  title: string;
}

const Card: React.FC<CardProps> = ({ icon, title }) => {
  return (
    <div className="home-card p-2 px-3 w-[48%] flex flex-col bg-[#fff] rounded-[20px] text-black gap-3 items-center">
      {icon}
      <div className="text">
        <h1 className="text-2xl font-medium text-center">{title}</h1>
      </div>
    </div>
  );
};

const HomeCards = () => {

  const cardData = [
    {
      icon: <BsClipboard size={"62px"} color="#8629bc"  />,
      title: 'Survey',
    },
    {
      icon: <AiOutlineMessage color="#8629bc" size={'62px'} />,
      title: 'Leave',
    },
    {
      icon: <RiHandHeartFill color="#8629bc" size={'62px'} />,
      title: 'Core HR',
    },
    {
      icon: <MdCardGiftcard color="#8629bc" size={'62px'} />,
      title: 'Payroll',
    },
    {
      icon: <FaFileInvoiceDollar color="#8629bc" size={'62px'} />,
      title: 'Employee Benefits',
    },
    // Add more data objects for additional cards
  ];

  return (
    <div className="flex gap-3 flex-wrap justify-start px-4">
      {cardData.map((data, index) => (
        <Card key={index} icon={data.icon} title={data.title} />
      ))}
    </div>
  );
};

export default HomeCards;
