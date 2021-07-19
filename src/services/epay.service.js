import fetch from "node-fetch";

export default async (body, action = 1) => {
  const invoiceUrl = process.env.INVOICE_URL;
  let data = await fetch(
    `${invoiceUrl}/api/epay?action=${action}`,
    { method: "POST", body }
  );
  data = data.json();
  return data;
};
