type APIResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
};
const sendMessage = async (
  message: string
): Promise<APIResponse<{ data: any }>> => {
  try {
    const response = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: message }),
    });
    if (!response.ok) {
      return {
        success: false,
        message: "Failed to send message",
      };
    } else {
      return {
        success: true,
        message: "Message sent successfully",
        data: await response.json(),
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while sending the message",
    };
  }
};

export default sendMessage;
