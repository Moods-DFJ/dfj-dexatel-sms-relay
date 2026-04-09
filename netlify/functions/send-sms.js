export async function handler(event) {
  try {
    const body = JSON.parse(event.body || "{}");

    const response = await fetch("https://api.dexatel.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Dexatel-Key": process.env.976624233cd8b8b4d43c96c5ca9953bd
      },
      body: JSON.stringify({
        data: {
          channel: "SMS",
          from: "TrenthamJC",
          to: [body.to],
          type: "text",
          text: body.text
        }
      })
    });

    const result = await response.text();

    return {
      statusCode: response.status,
      body: result
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
}
