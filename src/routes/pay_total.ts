import express from "express";
const title = "PAY TOTAL";
const payTotalRouter = express.Router();

payTotalRouter.get("/", (req, res) => {
  //   console.log("req.statusCode");
  if (req.query.coins && req.query.people) {
    const coins = Number(req.query.coins);
    const people = Number(req.query.people);
    const result = Math.ceil(coins * people);
    res.render("pay_total/result", {coins, people, result, title});
  } else {
    res.render("pay_total/index", {title});
  }
});

export {payTotalRouter};
