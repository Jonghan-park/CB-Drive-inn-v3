const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const DOMAIN = "http://localhost:5000";

exports.checkoutStripe = async (req, res) => {
  const { items, totalAmount } = req.body;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "cad",
          product_data: {
            name: items[0].title,
          },
          unit_amount: items[0].price * 100,
        },
        quantity: items[0].amount,
      },
    ],
    mode: "payment",
    success_url: `${DOMAIN}/success`,
    cancel_url: `${DOMAIN}/canceled`,
  });

  res.send({ url: session.url });
};
