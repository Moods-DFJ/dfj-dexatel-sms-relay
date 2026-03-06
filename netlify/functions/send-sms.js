export async function handler(event) {

  const body = JSON.parse(event.body);

  const response = await fetch("https://api.dexatel.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Dexatel-Key": process.env.DEXATEL_API_KEY
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
    statusCode: 200,
    body: result
  };

}