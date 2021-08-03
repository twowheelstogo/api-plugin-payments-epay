export default (shopperIP, auditNumber = "", email="", cardNumber = "", cardExpiry = "", amount = 0, cvv2 = "") => {
  let pan = cardNumber && cardNumber.replace(/ /g,"");
  let expvalues = cardExpiry && cardExpiry.split("/");
  let expdate =  `${expvalues[1]}${expvalues[0]}`
  const _epayModel = { shopperIP, pan, expdate, amount, cvv2, auditNumber, email };
  console.log("Epay_model", _epayModel);
  return _epayModel;
};
