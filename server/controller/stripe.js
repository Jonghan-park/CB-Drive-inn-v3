const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const DOMAIN = "http://localhost:5000";

exports.checkoutStripe = async (req, res) => {
  const { items, totalAmount } = req.body;
  console.log("In stripe" + items);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${DOMAIN}?success=true`,
    cancel_url: `${DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
};
