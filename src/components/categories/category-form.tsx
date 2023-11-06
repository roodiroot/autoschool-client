"use client";

import Link from "next/link";
import ChekInput from "@/components/chek-input";
import { Button } from "@/components/ui/button";
import usePopap from "@/hooks/usePopap";
import { useState } from "react";

const CategoryForm = () => {
  const { onOpen } = usePopap();
  const [sale, setSale] = useState<boolean>(false);
  const [privacy, setPrivacy] = useState<boolean>(true);
  return (
    <>
      <div className='space-y-4'>
        <ChekInput id='sale' checked={sale} onClick={() => setSale(!sale)}>
          Тест-день! Получить скидку 2000р?
        </ChekInput>
        <ChekInput
          id='personal'
          checked={privacy}
          onClick={() => setPrivacy(!privacy)}
        >
          Согласен с{" "}
          <Link href='/' className='text-mgreen'>
            условиями сотрудничества
          </Link>
        </ChekInput>
      </div>
      <Button onClick={onOpen} className='max-w-[300px]' variant='mfull'>
        Подробнее
      </Button>
    </>
  );
};

export default CategoryForm;
