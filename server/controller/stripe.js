require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const DOMAIN = "http://localhost:3000";

exports.checkoutStripe = async (req, res) => {
  const { items, totalAmount } = req.body;
  const session = await stripe.checkout.sessions.create({
    line_items: req.body.items.map((item) => {
      return {
        price_data: {
          currency: "cad",
          product_data: {
            name: item.title,
            images: [item.img],
          },
          unit_amount: parseInt(item.price * 100),
        },
        quantity: item.amount,
      };
    }),
    mode: "payment",
    success_url: `${DOMAIN}/success`,
    cancel_url: `${DOMAIN}/cart/summary`,
  });

  res.send({ url: session.url });
};
