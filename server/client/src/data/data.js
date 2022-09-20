import regularBurger from "../images/regular_burger.png";
import doubleBurger from "../images/double_burger.png";
import tripleBurger from "../images/triple_burger.png";
import quadrupleBurger from "../images/quadruple_burger.png";
import bacon from "../images/bacon.png";
import mushroomSwiss from "../images/mushroom_swiss.png";
import cheese from "../images/cheese.png";
import chili from "../images/chili.png";
import backbacon from "../images/backbacon.png";
import fishBurger from "../images/fish_burger.png";
import chickenBurger from "../images/chicken_burger.png";
import sweetChiliChickenBurger from "../images/sweet_chili_chicken_burger.png";
import veggieBurger from "../images/vegie_burger.png";
import mushroomSwissBurger from "../images/mushroom_swiss_burger.png";
import chickenFingerDinner from "../images/chicken_finger_dinner.png";
import shrimpDinner from "../images/shrimp_dinner.png";
import fishAndChips from "../images/fish_and_chips.png";
import regularFries from "../images/regular_fries.png";
import familyFries from "../images/family_fries.png";
import poutine from "../images/poutine.png";
import chiliCheeseFries from "../images/chili_cheese_fries.png";
import regularOnionRings from "../images/regular_onion_rings.png";
import familyOnionRings from "../images/family_onion_rings.png";
import chickenFingers from "../images/chicken_fingers.png";
import chickenNuggets from "../images/chicken_nuggets.png";
import chickenNuggets10 from "../images/chicken_nuggets_10pc.png";
import zucchiniSticks from "../images/zucchini_sticks.png";
import deepFriedMushrooms from "../images/deep_fried_mushroom.png";
import pizzaPop from "../images/pizza_pop.png";
import cornDog from "../images/corn_dog.png";
import applePie from "../images/apple_pie.png";
import deepFriedPickle from "../images/deep_fried_pickle.png";
import gravy from "../images/gravy.png";
import cupOfChili from "../images/cup_of_chili.png";
import garlicMayo from "../images/garlic_mayo.png";
import hotDog from "../images/hot_dog.png";
import chiliDog from "../images/chili_dog.png";
import cheeseDog from "../images/cheese_dog.png";
import chiliCheeseDog from "../images/chili_cheese_dog.png";
import pop from "../images/pop.png";
import slush from "../images/slush.png";
import milkShakes from "../images/milkshake.png";
import float from "../images/float.png";
import screamers from "../images/screamer.png";
import whiteMilk from "../images/milk.png";
import chocoMilk from "../images/chocolate_milk.png";
import coffee from "../images/coffee.png";
import hotChoco from "../images/hot_choco.png";

const menu = [
  {
    id: 1,
    title: "Regular(Single patty)",
    category: "Burgers",
    price: 4.35,
    img: regularBurger,
    InStock: true,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Master(Double patties)",
    category: "Burgers",
    price: 5.8,
    img: doubleBurger,
    InStock: true,
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Centenniel(Triple patties)",
    category: "Burgers",
    price: 7.2,
    img: tripleBurger,
    InStock: true,
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Monster(Quadriple patties)",
    category: "Burgers",
    price: 8.55,
    img: quadrupleBurger,
    InStock: true,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Bacon",
    category: "Extra Toppings",
    price: 1.5,
    img: bacon,
    InStock: true,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 50,
    title: "Mushrooom swiss",
    category: "Extra Toppings",
    price: 1.5,
    img: mushroomSwiss,
    InStock: true,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 6,
    title: "Cheese",
    category: "Extra Toppings",
    price: 0.75,
    img: cheese,
    InStock: true,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 7,
    title: "Chili",
    category: "Extra Toppings",
    price: 1.95,
    img: chili,
    InStock: true,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 8,
    title: "Backbacon",
    category: "Extra Toppings",
    price: 2.25,
    img: backbacon,
    InStock: true,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 9,
    title: "Fish Burger",
    category: "Special Burgers",
    price: 6.25,
    img: fishBurger,
    InStock: true,
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 10,
    title: "Chicken Burger",
    category: "Special Burgers",
    price: 6.5,
    img: chickenBurger,
    InStock: true,
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 40,
    title: "Sweet Chili Chicken Burger",
    category: "Special Burgers",
    price: 6.5,
    img: sweetChiliChickenBurger,
    InStock: true,
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 11,
    title: "Veggie Burger",
    category: "Special Burgers",
    price: 6.25,
    img: veggieBurger,
    InStock: true,
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 12,
    title: "Mushroom Swiss",
    category: "Special Burgers",
    price: 6.75,
    img: mushroomSwissBurger,
    InStock: true,
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 13,
    title: "Chicken Finger Dinner",
    category: "Dinner box",
    price: 11.25,
    img: chickenFingerDinner,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "Shrimp Dinner",
    category: "Dinner box",
    price: 11.95,
    img: shrimpDinner,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "Fish and Chips",
    category: "Dinner box",
    price: 12.45,
    img: fishAndChips,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 16,
    title: "Regular Fries",
    category: "Side Orders",
    price: 3.5,
    img: regularFries,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 17,
    title: "Family Fries",
    category: "Side Orders",
    price: 9.95,
    img: familyFries,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 18,
    title: "Poutine",
    category: "Side Orders",
    price: 6.25,
    img: poutine,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 19,
    title: "Chili Cheese Fries",
    category: "Side Orders",
    price: 7.75,
    img: chiliCheeseFries,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 20,
    title: "Regular Onion Rings",
    category: "Side Orders",
    price: 3.5,
    img: regularOnionRings,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 21,
    title: "Family Onion Rings",
    category: "Side Orders",
    price: 10.25,
    img: familyOnionRings,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 22,
    title: "Chicken Fingers 4pcs",
    category: "Side Orders",
    price: 7.95,
    img: chickenFingers,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 23,
    title: "Chicken Nuggets 6pcs",
    category: "Side Orders",
    price: 5.75,
    img: chickenNuggets,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 24,
    title: "Chicken Nuggets 10pcs",
    category: "Side Orders",
    price: 9.45,
    img: chickenNuggets10,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 25,
    title: "Zucchini Sticks",
    category: "Side Orders",
    price: 5.95,
    img: zucchiniSticks,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 26,
    title: "Deep Fried Mushrooms",
    category: "Side Orders",
    price: 5.95,
    img: deepFriedMushrooms,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 27,
    title: "Pizza pop",
    category: "Side Orders",
    price: 2.45,
    img: pizzaPop,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 27,
    title: "Corndog",
    category: "Side Orders",
    price: 2.45,
    img: cornDog,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 28,
    title: "Apple Pie Turnover",
    category: "Side Orders",
    price: 2.45,
    img: applePie,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 29,
    title: "Deep Fried Pickle Stick",
    category: "Side Orders",
    price: 5.95,
    img: deepFriedPickle,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 30,
    title: "Gravy",
    category: "Side Orders",
    price: 1.95,
    img: gravy,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 31,
    title: "A cup of chili",
    category: "Side Orders",
    price: 5.95,
    img: cupOfChili,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 32,
    title: "Garlic Mayo",
    category: "Side Orders",
    price: 1.95,
    img: garlicMayo,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 33,
    title: "Hot Dog",
    category: "Hot Dogs",
    price: 3.5,
    img: hotDog,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 34,
    title: "Chili Dog",
    category: "Hot Dogs",
    price: 5.45,
    img: chiliDog,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 35,
    title: "Cheese Dog",
    category: "Hot Dogs",
    price: 4.25,
    img: cheeseDog,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 36,
    title: "Chili Cheese Dog",
    category: "Hot Dogs",
    price: 6.2,
    img: chiliCheeseDog,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 37,
    title: "Regular size POP",
    category: "Beverages",
    price: 1.95,
    img: pop,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 38,
    title: "Large size POP",
    category: "Beverages",
    price: 2.45,
    img: pop,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 39,
    title: "Regular size Slush",
    category: "Beverages",
    price: 1.95,
    img: slush,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 40,
    title: "Large size Slush",
    category: "Beverages",
    price: 2.45,
    img: slush,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 41,
    title: "Regular size Milk Shakes",
    category: "Beverages",
    price: 4.75,
    img: milkShakes,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 42,
    title: "Large size Milk Shakes",
    category: "Beverages",
    price: 5.5,
    img: milkShakes,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 43,
    title: "Float(One Size)",
    category: "Beverages",
    price: 5,
    img: float,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 44,
    title: "Regular size Screamers",
    category: "Beverages",
    price: 4.75,
    img: screamers,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 45,
    title: "Large size Screamers",
    category: "Beverages",
    price: 5.5,
    img: screamers,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 46,
    title: "White Milk",
    category: "Beverages",
    price: 1.75,
    img: whiteMilk,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 47,
    title: "Choco Milk",
    category: "Beverages",
    price: 2.75,
    img: chocoMilk,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 48,
    title: "Coffee",
    category: "Beverages",
    price: 2.45,
    img: coffee,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 49,
    title: "Hot Chocolate",
    category: "Beverages",
    price: 2.45,
    img: hotChoco,
    InStock: true,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
export default menu;
