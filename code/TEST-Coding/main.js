console.log("TEST");

dateBetween(now(), prop("Next Rev"), "days") >= 1
  ? "1🟥Due"
  : and(
      dateBetween(now(), prop("Next Rev"), "days") < 1,
      dateBetween(now(), prop("Next Rev"), "days") >= 0
    )
  ? "2🟧Today"
  : and(
      dateBetween(now(), prop("Next Rev"), "days") < 0,
      dateBetween(now(), prop("Next Rev"), "days") >= -2
    )
  ? "3🟨Tomorrow"
  : and(
      dateBetween(now(), prop("Next Rev"), "days") <= -2,
      dateBetween(now(), prop("Next Rev"), "days") > -7
    )
  ? "4🟩This Week"
  : and(
      dateBetween(now(), prop("Next Rev"), "days") <= -7,
      dateBetween(now(), prop("Next Rev"), "days") > -14
    )
  ? "5🟦Next Week"
  : and(
      dateBetween(now(), prop("Next Rev"), "days") <= -14,
      dateBetween(now(), prop("Next Rev"), "days") > -30
    )
  ? "6🟪This Month"
  : and(
      dateBetween(now(), prop("Next Rev"), "days") <= -30,
      dateBetween(now(), prop("Next Rev"), "days") > -60
    )
  ? "7🟫Next Month"
  : and(
      dateBetween(now(), prop("Next Rev"), "days") <= -60,
      dateBetween(now(), prop("Next Rev"), "days") > -120
    )
  ? "8⬜This Cohort"
  : "9⬛Next Cohort";
