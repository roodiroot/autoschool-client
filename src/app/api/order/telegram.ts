import { makePostRequest } from "./api";

const telegramBotKey = process.env.BOT_TOKEN;
const chat_id = process.env.CHAT_ID;

export const sendNotification = async (text: string, parse_mode = "HTML") => {
  const endpoint = `https://api.telegram.org/bot${telegramBotKey}/sendMessage`;
  const response = await makePostRequest(endpoint, {
    text,
    parse_mode,
    chat_id,
  });
  if (!response) {
    return null;
  }
  return response;
};
