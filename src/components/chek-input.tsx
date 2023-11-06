"use client";

import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const ChekInput: React.FC<{
  id: string;
  checked: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ children, id, checked, onClick }) => {
  return (
    <div className='flex items-start space-x-3'>
      <Checkbox onClick={onClick} id={id} checked={checked} />
      <Label htmlFor={id}>{children}</Label>
    </div>
  );
};

export default ChekInput;
