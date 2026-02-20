import { formSchema } from "@/schemas/fedback";
import z from "zod";

export function buildTelegramMessage(data: z.infer<typeof formSchema>) {
  const saleText = data.sale ? "Да, хочет получить скидку" : "Нет, без акции";

  return `
🆕 <b>Новая заявка с сайта</b>

👤 <b>Имя:</b> ${data.name}
📞 <b>Телефон:</b> ${data.phone}

🎁 <b>Интерес к акции:</b> ${saleText}
🔐 <b>Согласие на обработку данных:</b> Получено

⏱ <i>Рекомендуется связаться с клиентом в течение 5 минут.</i>
`.trim();
}
