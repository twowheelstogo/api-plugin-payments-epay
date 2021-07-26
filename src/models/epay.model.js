export default (shopperIP, auditNumber = "", cardNumber = "", cardExpiry = "", amount = 0, cvv2 = "") => {
  let pan = cardNumber && cardNumber.replace(" ","");
  let expvalues = cardExpiry && cardExpiry.split("/");
  let expdate =  `${expvalues[1]}${expvalues[0]}`
  const _epayModel = { shopperIP, pan, expdate, amount, cvv2, auditNumber };
  return _epayModel;
};
