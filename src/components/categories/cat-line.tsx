"use client";
const CatLine: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <li className='w-full flex justify-between gap-4 sm:gap-8'>
      <span>{title}</span>
      <span className='font-medium'>{description}</span>
    </li>
  );
};

export default CatLine;
