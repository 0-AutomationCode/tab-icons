const subscription_v01 =
  format(
    prop("Pay Period") == "Yearly"
      ? prop("Amount") / 12
      : prop("Pay Period") == "Triannual"
      ? prop("Amount") / 4
      : prop("Pay Period") == "Quarterly"
      ? prop("Amount") / 3
      : prop("Amount") * (prop("Currency") == "$" ? 0.71 : 1)
  ) + " JD";

const subscription_v02 =
  format(
    prop("Pay Period") == "Yearly"
      ? prop("Amount") / 12
      : prop("Pay Period") == "Triannual"
      ? prop("Amount") / 4
      : prop("Pay Period") == "Quarterly"
      ? prop("Amount") / 3
      : prop("Amount")
  ) + " JD";

const subscription_v03 =
  format(
    prop("Pay Period") == "Yearly"
      ? prop("Amount") / 12
      : (prop("Pay Period") == "Triannual"
          ? prop("Amount") / 4
          : prop("Pay Period") == "Quarterly"
          ? prop("Amount") / 3
          : prop("Amount")) * (prop("Currency") == "$" ? 0.71 : 1)
  ) + " JD";

const subscription_v04 =
  format(
    prop("Pay Period") == "Yearly"
      ? prop("Amount") / 12
      : (prop("Pay Period") == "Triannual"
          ? prop("Amount") / 4
          : prop("Pay Period") == "Quarterly"
          ? prop("Amount") / 3
          : prop("Amount")) * (prop("Currency") == "$" ? 0.71 : 1)
  ) + " JD";

`
  format((prop("Pay Period") == "Yearly") ? (prop("Amount") / 12) : (((prop("Pay Period") == "Triannual") ? (prop("Amount") / 4) : ((prop("Pay Period") == "Quarterly") ? (prop("Amount") / 3) : prop("Amount"))) * ((prop("Currency") == "$") ? 0.71 : 1))) + " JD"
`;
