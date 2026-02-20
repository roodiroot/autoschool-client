"use client";

import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const ChekInput: React.FC<{
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  children: React.ReactNode;
  error?: string;
}> = ({ children, id, checked, onCheckedChange }) => {
  return (
    <div className="flex items-start space-x-3">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(v) => onCheckedChange(v === true)}
      />
      <Label htmlFor={id}>{children}</Label>
    </div>
  );
};

export default ChekInput;
