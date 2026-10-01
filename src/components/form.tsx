"use client";

import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import ChekInput from "./chek-input";
import Input from "./input";
import { Button } from "./ui/button";
import { useState } from "react";
import usePopap from "@/hooks/usePopap";
import z from "zod";
import { formSchema } from "@/schemas/fedback";
import { buildTelegramMessage } from "@/lib/build-telegram-message";
import { sendFeedback } from "@/api/feedback";

const Form = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const { onClose } = usePopap();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      name: "",
      phone: "",
      sale: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setDisabled(true);

    try {
      const text = buildTelegramMessage(data);
      const res = await sendFeedback({
        to: "borisov130490@gmail.com",
        subject: "Обратная связь c autoschoolplus.ru",
        text,
      });

      if (res.ok) {
        onClose();
        toast.success("Отлично! Ожидайте звонка.");
        reset();
      } else {
        toast.error("Ошибка попробуйте ещё раз!");
      }
    } catch (error) {
      toast.error("Ошибка отправки сообщения!");
    }

    setDisabled(false);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full space-y-5 mb-6">
        <Input
          placeholder="Имя"
          label="name"
          title="Введите имя"
          register={register}
          required
          error={errors.name}
        />
        <Input
          placeholder="Телефон"
          label="phone"
          title="Введите телефон"
          register={register}
          required
          error={errors.phone}
          type="tel"
        />
      </div>
      <div className="space-y-4 mb-5">
        <Controller
          control={control}
          name="sale"
          render={({ field }) => (
            <ChekInput id="sale" checked={!!field.value} onCheckedChange={field.onChange}>
              Тест-день! Получить скидку 2000р?
            </ChekInput>
          )}
        />
        {/* <ChekInput
          id="sale"
          checked={!!sale}
          onClick={() => setValue("sale", !sale, { shouldValidate: true })}
        >
          Тест-день! Получить скидку 2000р?
        </ChekInput> */}
        <Controller
          control={control}
          name="privacy"
          render={({ field }) => (
            <ChekInput
              id="privacy"
              checked={!!field.value}
              onCheckedChange={field.onChange}
              error={errors.privacy?.message}
            >
              Согласие на{" "}
              <Link href="/docs/pd-consent" className="text-mgreen">
                обработку персональных данных
              </Link>
            </ChekInput>
          )}
        />

        {/* Ошибка по чекбоксу */}
        {errors.privacy?.message ? (
          <p className="text-sm text-red-500">{errors.privacy.message}</p>
        ) : null}
      </div>
      <div className="w-full mx-auto text-start mb-6">
        <p>Ожидайте звонка в течении пяти минут. Благодарим вас за обращение !!!</p>
      </div>
      <div className="w-full text-center ">
        <Button type="submit" variant="mfull" className="w-full max-w-[324px] " disabled={disabled}>
          Отправить
        </Button>
      </div>
    </form>
  );
};

export default Form;
