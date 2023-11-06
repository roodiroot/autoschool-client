"use client";

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import ChekInput from "./chek-input";
import Input from "./input";
import { Button } from "./ui/button";
import { useState } from "react";
import usePopap from "@/hooks/usePopap";

export type IFormValues = {
  name: string;
  phone: number | null;
};

const Form = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [sale, setSale] = useState<boolean>(false);
  const [privacy, setPrivacy] = useState<boolean>(true);
  const { onClose } = usePopap();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      name: "",
      phone: null,
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = async (data: any) => {
    setDisabled(true);
    if (!privacy) {
      toast.error("Согласитесь с условиями о персональных данных!");
      return setDisabled(false);
    }
    let string = [];
    for (let block in data) {
      if (data[block]) {
        string.push(`<b>${block}:</b> <i>${String(data[block])}</i>`);
      }
    }
    const dataString = string.join().replace(/,/g, "%0A");
    const text = `<b>Форма обратной связи:</b>%0A%0A${dataString}`;

    // onClose();
    // console.log(text);
    // setDisabled(false);
    // reset();
    await fetch(`/api/order?text=${text}`)
      .then((data) => {
        if (data.status === 200) {
          onClose();
          return toast.success("Отлично! Ожидайте звонка.");
        }
        toast.error("Ошибка попробуйте ещё раз!");
      })
      .catch(() => {
        toast.error("Ошибка попробуйте ещё раз!");
      })
      .finally(() => {
        reset();
        setDisabled(false);
      });
  };

  return (
    <div>
      <div className='w-full space-y-5 mb-6'>
        <Input
          placeholder='Имя'
          label='name'
          title='Введите имя'
          register={register}
          required
          error={errors.name}
        />
        <Input
          placeholder='Телефон'
          label='phone'
          title='Введите телефон'
          register={register}
          required
          error={errors.phone}
          type='tel'
        />
      </div>
      <div className='space-y-4 mb-5'>
        <ChekInput id='sale' checked={sale} onClick={() => setSale(!sale)}>
          Тест-день! Получить скидку 2000р?
        </ChekInput>
        <ChekInput
          id='privacy'
          checked={privacy}
          onClick={() => setPrivacy(!privacy)}
        >
          Согласен с{" "}
          <Link href='/' className='text-mgreen'>
            условиями сотрудничества
          </Link>
        </ChekInput>
      </div>
      <div className='w-full mx-auto text-start mb-6'>
        <p>
          Ожидайте звонка в течении пяти минут. Благодарим вас за обращение !!!
        </p>
      </div>
      <div className='w-full text-center '>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant='mfull'
          className='w-full max-w-[324px] '
          disabled={disabled}
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};

export default Form;
