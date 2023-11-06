import Icon from "@/components/utils/icon";

const AdvItem: React.FC<{
  icon:
    | "call"
    | "burger"
    | "ex"
    | "rooby"
    | "lock"
    | "stellar"
    | "grand"
    | "dindin"
    | "lamp"
    | "vk"
    | "tg"
    | "ws"
    | "left"
    | "right"
    | "star"
    | "chat";
  description: string;
}> = ({ icon, description }) => {
  return (
    <div>
      <div className='flex flex-col items-center text-center  gap-2'>
        <Icon
          className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20'
          variant={icon}
        />
        <p className='text-xs sm:text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default AdvItem;
