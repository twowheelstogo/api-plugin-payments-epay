export default (shopperIP, auditNumber = "", pan = "", expdate = "", amount = 0, cvv2 = "") => {
  const _epayModel = { shopperIP, pan, expdate, amount, cvv2, auditNumber };
  return _epayModel;
};
