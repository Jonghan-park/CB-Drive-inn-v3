require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const DOMAIN = "https://cb-drive-inn-client.onrender.com/";
let CHECKOUT_SESSION_ID = "";

exports.checkoutStripe = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: req.body.cartItems.map((item) => {
      return {
        price_data: {
          currency: "cad",
          // tax_behavior: "exclusive",
          product_data: {
            name: item.title,
            // images: [item.img],
            // tax_code: "txcd_20030000",
          },
          unit_amount: parseInt(item.price * 100),
        },
        quantity: item.amount,
        // tax_rates: ["txr_1LkFckGOncvPLaJPM6W7b27R"],
      };
    }),
    // automatic_tax: {
    //   enabled: true,
    // },
    mode: "payment",
    success_url: `${DOMAIN}/success?session_id=${CHECKOUT_SESSION_ID}`,
    cancel_url: `${DOMAIN}/cart/summary`,
  });
  CHECKOUT_SESSION_ID = session.id;
  return res.json({ session });
};

exports.orderSuccess = async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  // const customer = await stripe.customers.retrieve(session.customer);
  // return res.json({ customer: customer, session: session });
};
