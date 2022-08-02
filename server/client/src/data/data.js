import img1 from "../images/item-1.jpeg";
import img2 from "../images/item-2.jpeg";
import img3 from "../images/item-3.jpeg";
import img4 from "../images/item-4.jpeg";
import img5 from "../images/item-5.jpeg";
import img6 from "../images/item-6.jpeg";
import img7 from "../images/item-7.jpeg";
import img8 from "../images/item-8.jpeg";
import img9 from "../images/item-9.jpeg";
import img10 from "../images/item-10.jpeg";

const menu = [
  {
    id: 1,
    title: "Regular(Single patty)",
    category: "Burgers",
    price: 4.35,
    img: img1,
    InStock: true,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Master(Double patties)",
    category: "Burgers",
    price: 5.8,
    img: img2,
    InStock: true,
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Centenniel(Triple patties)",
    category: "Burgers",
    price: 7.2,
    img: img3,
    InStock: true,
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Monster(Quadriple patties)",
    category: "Burgers",
    price: 8.55,
    img: img4,
    InStock: true,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Bacon or Mushrooom",
    category: "Extra Toppings",
    price: 1.5,
    img: img5,
    InStock: true,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 6,
    title: "Cheese",
    category: "Extra Toppings",
    price: 0.75,
    img: img7,
    InStock: true,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 7,
    title: "Chili",
    category: "Extra Toppings",
    price: 1.95,
    img: img8,
    InStock: true,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 8,
    title: "Backbacon",
    category: "Extra Toppings",
    price: 2.25,
    img: img10,
    InStock: true,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 9,
    title: "Fish Burger",
    category: "Special Burgers",
    price: 6.25,
    img: img5,
    InStock: true,
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 10,
    title: "Chicken Burger",
    category: "Special Burgers",
    price: 6.5,
    img: img8,
    InStock: true,
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 40,
    title: "Sweet Chili Chicken Burger",
    category: "Special Burgers",
    price: 6.5,
    img: img4,
    InStock: true,
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 11,
    title: "Veggie Burger",
    category: "Special Burgers",
    price: 6.25,
    img: img2,
    InStock: true,
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 12,
    title: "Mushroom Swiss",
    category: "Special Burgers",
    price: 6.75,
    img: img9,
    InStock: true,
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 13,
    title: "Chicken Finger Dinner",
    category: "Dinner box",
    price: 11.25,
    img: img9,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "Shrimp Dinner",
    category: "Dinner box",
    price: 11.95,
    img: img1,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "Fish and Chips",
    category: "Dinner box",
    price: 12.45,
    img: img9,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 16,
    title: "Regular Fries",
    category: "Side Orders",
    price: 3.5,
    img: img2,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 17,
    title: "Family Fries",
    category: "Side Orders",
    price: 9.95,
    img: img2,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 18,
    title: "Poutine",
    category: "Side Orders",
    price: 6.25,
    img: img7,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 19,
    title: "Chili Cheese Fries",
    category: "Side Orders",
    price: 7.75,
    img: img4,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 20,
    title: "Regular Onion Rings",
    category: "Side Orders",
    price: 3.5,
    img: img6,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 21,
    title: "Family Onion Rings",
    category: "Side Orders",
    price: 10.25,
    img: img6,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 22,
    title: "Chicken Fingers 4pcs",
    category: "Side Orders",
    price: 7.95,
    img: img7,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 23,
    title: "Chicken Nuggets 6pcs",
    category: "Side Orders",
    price: 5.75,
    img: img7,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 24,
    title: "Chicken Nuggets 10pcs",
    category: "Side Orders",
    price: 9.45,
    img: img7,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 25,
    title: "Zucchini Sticks",
    category: "Side Orders",
    price: 5.95,
    img: img1,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 26,
    title: "Deep Fried Mushrooms",
    category: "Side Orders",
    price: 5.95,
    img: img9,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 27,
    title: "Pizza pop / Corndog",
    category: "Side Orders",
    price: 2.45,
    img: img8,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 28,
    title: "Apple Pie Turnover",
    category: "Side Orders",
    price: 2.45,
    img: img5,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 29,
    title: "Deep Fried Pickle Stick",
    category: "Side Orders",
    price: 5.95,
    img: img3,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 30,
    title: "Gravy",
    category: "Side Orders",
    price: 1.95,
    img: img3,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 31,
    title: "A cup of chili",
    category: "Side Orders",
    price: 5.95,
    img: img3,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 32,
    title: "Garlic Mayo",
    category: "Side Orders",
    price: 1.95,
    img: img7,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 33,
    title: "Hot Dog",
    category: "Hot Dogs",
    price: 3.5,
    img: img7,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 34,
    title: "Chili Dog",
    category: "Hot Dogs",
    price: 5.45,
    img: img7,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 35,
    title: "Cheese Dog",
    category: "Hot Dogs",
    price: 4.25,
    img: img8,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 36,
    title: "Chili Cheese Dog",
    category: "Hot Dogs",
    price: 6.2,
    img: img5,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 37,
    title: "Regular size POP",
    category: "Beverages",
    price: 1.95,
    img: img1,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 38,
    title: "Large size POP",
    category: "Beverages",
    price: 2.45,
    img: img1,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 39,
    title: "Regular size Slush",
    category: "Beverages",
    price: 1.95,
    img: img1,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 40,
    title: "Large size Slush",
    category: "Beverages",
    price: 2.45,
    img: img1,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 41,
    title: "Regular size Milk Shakes",
    category: "Beverages",
    price: 4.75,
    img: img5,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 42,
    title: "Large size Milk Shakes",
    category: "Beverages",
    price: 5.5,
    img: img5,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 43,
    title: "Float(One Size)",
    category: "Beverages",
    price: 5,
    img: img4,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 44,
    title: "Regular size Screamers",
    category: "Beverages",
    price: 4.75,
    img: img4,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 45,
    title: "Large size Screamers",
    category: "Beverages",
    price: 5.5,
    img: img4,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 46,
    title: "White Milk",
    category: "Beverages",
    price: 1.75,
    img: img2,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 47,
    title: "Choco Milk",
    category: "Beverages",
    price: 2.75,
    img: img2,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 48,
    title: "Coffee / Tea",
    category: "Beverages",
    price: 2.45,
    img: img6,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 49,
    title: "Hot Chocolate",
    category: "Beverages",
    price: 2.45,
    img: img7,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
export default menu;