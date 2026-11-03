/* =========================================================
   THEME DATA
   Each theme is a complete fictional restaurant: its own name,
   copy, photos, menu and look. Add / remove / reorder themes here.
   Photos live in /img and are free stock photos from Pexels.
   ========================================================= */

window.SELLER = {
  // Edit these so prospects can reach you from the demo
  name: "Your Name",
  business: "Your Web Studio",
  email: "hello@yourdomain.com",
  phone: "(555) 010-2026",
};

window.THEMES = [
  /* ---------------------------------------------------- 1 */
  {
    id: "pub",
    headerCta: ["Order Online", "order"],
    label: "Pizzeria & Sports Bar",
    name: "Vinnie's Pizza & Pub",
    logoMark: "V",
    eyebrow: "Hand-tossed since 1998",
    tagline: "Fresh dough every morning, cold beer on tap, and every game on the big screens.",
    hero: { img: "img/pz-hero.jpg", layout: "left" },
    heroNote: "That's your own photo up there. A pizza coming out of your oven, your dining room, or the sign out front.",
    ownerEmail: "owner@vinniespizzapub.com",
    phone: "(555) 610-2930",
    address: "2200 Oak Ave",
    defaultLayout: "grid",
    about:
      "Vinnie's started as a six-table pizza counter. Today it's a full kitchen, a sports bar and a back room the whole family can fit in. The dough is still made every morning and the sauce is still Vinnie's mother's recipe.",
    aboutImg: "img/pz-room.jpg",
    stats: [["27", "years in the neighborhood"], ["14", "beers on tap"], ["9", "big screens"]],
    highlights: [["Made from scratch", "Dough, sauce and meatballs, every day."], ["Delivery & takeout", "Order by phone or online."], ["Gluten-free crust", "Vegan cheese on request."]],
    feature: {
      kicker: "Beyond the pizza",
      title: "The bar & game room",
      text: "Pull up a stool for happy hour, catch the game on nine screens, or let the kids loose in the game room while the pizza bakes.",
      img: "img/pz-bar.jpg",
      list: [["Happy hour", "Mon–Fri, 3 to 6pm. $2 off drafts and wells."], ["Game days", "Every NFL Sunday, with wing specials."], ["Game room", "Arcade and pinball in the back."], ["Parties", "Book the back room for up to 40 people."]],
      cta: ["Book the back room", "reserve"],
    },
    featureNote: "This block is whatever makes your place different. Here it's the bar and arcade. Yours could be catering, a patio, live music or a lunch special.",
    gallery: [
      ["img/pz-oven.jpg", "Straight from the oven"],
      ["img/pz-friends.jpg", "Friday night"],
      ["img/pz-pie.jpg", "The House Special"],
      ["img/pz-bottles.jpg", "The back bar"],
      ["img/pz-slice.jpg", "By the slice at lunch"],
      ["img/pz-box.jpg", "Takeout"],
    ],
    hours: [["Mon", "11:00-23:00"], ["Tue", "11:00-23:00"], ["Wed", "11:00-23:00"], ["Thu", "11:00-23:00"], ["Fri", "11:00-00:30"], ["Sat", "11:00-00:30"], ["Sun", "11:00-22:00"]],
    reviews: [["Best crust in town and the wings are a close second.", "Dana R."], ["We come every Sunday for the game. Staff knows our order.", "Marcus T."], ["Kids played in the arcade, we actually got to talk. Win.", "Priya S."]],
    menu: {
      Pizza: [
        ["Pepperoni", "Cup-and-char pepperoni, whole-milk mozzarella", 18, [], "img/pz-pepperoni.jpg"],
        ["The House Special", "Sausage, pepperoni, mushroom, peppers, onion, olives", 23, [], "img/pz-pie.jpg"],
        ["Garden", "Peppers, tomato, red onion, olives, basil", 19, ["v"], "img/pz-veg.jpg"],
        ["Margherita", "San Marzano tomato, fresh mozzarella, basil", 17, ["v"], "img/tr-margherita.jpg"],
      ],
      "Subs & Wings": [
        ["Meatball Sub", "House meatballs, marinara, provolone", 13, []],
        ["Italian Sub", "Salami, capicola, ham, provolone, pepperoncini", 13, []],
        ["Wings (10)", "Buffalo, garlic parm or sesame", 15, ["gf", "spicy"]],
      ],
      Salads: [
        ["Antipasto", "Salami, provolone, olives, peppers, greens", 13, ["gf"]],
        ["Caesar", "Romaine, parmesan, garlic croutons", 10, ["v"]],
      ],
      "On Tap": [
        ["Local IPA", "Rotating, ask your server", 7, ["v", "vg"]],
        ["House Lager", "Pint or pitcher", 5, ["v", "vg"]],
      ],
    },
  },

  /* ---------------------------------------------------- 2 */
  {
    id: "trattoria",
    headerCta: ["Reserve a Table", "reserve"],
    label: "Italian Trattoria",
    name: "Trattoria Fiorella",
    logoMark: "F",
    eyebrow: "Seasonal Italian kitchen",
    tagline: "Pasta rolled by hand and a menu that changes with the farmers market.",
    hero: { img: "img/tr-hero.jpg", layout: "center" },
    heroNote: "Use a photo of your dining room to show the feel of the place before anyone walks in.",
    ownerEmail: "chef@trattoriafiorella.com",
    phone: "(555) 271-4490",
    address: "117 Main St",
    defaultLayout: "list",
    about:
      "Chef Marco cooked in restaurants in Bologna and Chicago for twenty years before opening Fiorella. The pasta is made here every afternoon, and most of the produce comes from the Saturday farmers market, so the menu follows the season.",
    aboutImg: "img/tr-dinner.jpg",
    stats: [["20 yrs", "in professional kitchens"], ["Daily", "fresh pasta"], ["32", "seats"]],
    highlights: [["Handmade pasta", "Rolled and cut every afternoon."], ["Dinner to take home", "Family meals, packed and ready to heat."], ["Gift cards", "Bought online, sent by email."]],
    feature: {
      kicker: "What's in season",
      title: "Cooked from the farmers market",
      text: "Every Saturday morning Marco walks the market and builds the week's menu from what looks best. Here's what's on it right now.",
      img: "img/tr-market.jpg",
      list: [["Heirloom tomatoes", "In the panzanella and the Sunday sugo"], ["Butternut squash", "Roasted, folded into ravioli with sage butter"], ["Peppers from Pueblo", "Charred and served with burrata"], ["Take-home dinners", "Lasagna or ragù for four, ready Thursday"]],
      cta: ["Buy a gift card", "gift"],
    },
    featureNote: "Here the special section is the seasonal menu and gift cards. Owners can update a list like this themselves, or text the changes to me.",
    gallery: [
      ["img/tr-table.jpg", "Sunday supper"],
      ["img/tr-tagliatelle.jpg", "Tagliatelle al ragù"],
      ["img/tr-pizzas.jpg", "From the wood oven"],
      ["img/tr-spaghetti.jpg", "Spaghetti pomodoro"],
      ["img/tr-carbonara.jpg", "Carbonara"],
      ["img/tr-lasagna.jpg", "Lasagna verde"],
    ],
    hours: [["Mon", null], ["Tue", "17:00-21:30"], ["Wed", "17:00-21:30"], ["Thu", "17:00-21:30"], ["Fri", "17:00-22:00"], ["Sat", "17:00-22:00"], ["Sun", "16:00-20:30"]],
    reviews: [["The tagliatelle tastes like the ones I had in Bologna.", "Elena V."], ["Small room, big flavor. Book ahead on Fridays.", "Tom H."], ["The take-home lasagna saved our week.", "The Garcia family"]],
    menu: {
      Antipasti: [
        ["Burrata", "Charred Pueblo peppers, olive oil, grilled bread", 15, ["v"]],
        ["Arancini", "Saffron risotto, mozzarella, marinara", 12, ["v"]],
        ["Panzanella", "Heirloom tomato, bread, basil, red wine vinegar", 13, ["v", "vg"]],
      ],
      Pasta: [
        ["Tagliatelle al Ragù", "Slow-cooked beef and pork, parmigiano", 24, [], "img/tr-tagliatelle.jpg"],
        ["Squash Ravioli", "Brown butter, sage, toasted hazelnut", 23, ["v"]],
        ["Carbonara", "Guanciale, egg yolk, pecorino, black pepper", 22, [], "img/tr-carbonara.jpg"],
        ["Spaghetti Pomodoro", "Tomato, garlic, basil, olive oil", 18, ["v", "vg"], "img/tr-spaghetti.jpg"],
      ],
      Secondi: [
        ["Chicken Piccata", "Lemon, capers, white wine, greens", 26, ["gf"]],
        ["Grilled Branzino", "Salsa verde, roasted potatoes", 32, ["gf"]],
      ],
      Dolci: [
        ["Tiramisù", "Made the morning it's served", 10, ["v"]],
        ["Panna Cotta", "Honey, seasonal fruit", 9, ["v", "gf"]],
      ],
    },
  },

  /* ---------------------------------------------------- 3 */
  {
    id: "catering",
    headerCta: ["Get a Quote", "quote"],
    label: "Family Kitchen & Catering",
    name: "Mama Rosa's Kitchen",
    logoMark: "MR",
    eyebrow: "Italian catering & carry-out · since 1975",
    tagline: "Mostaccioli, meatballs and three generations of Sunday dinners, ready for your next event.",
    hero: { img: "img/ct-hero.jpg", layout: "split" },
    heroNote: "This style puts the photo beside the text instead of behind it. Any section can be laid out the way you like.",
    ownerEmail: "orders@mamarosaskitchen.com",
    phone: "(555) 318-7720",
    address: "742 Elm St",
    defaultLayout: "list",
    about:
      "Rosa opened the kitchen in 1975 to feed the neighborhood. Her grandkids run it now, and the recipes haven't changed. We cater weddings, graduations, funerals and office lunches, from 10 people to 500.",
    aboutImg: "img/ct-family.jpg",
    stats: [["50", "years of family recipes"], ["500", "guests, our biggest event"], ["9", "catering packages"]],
    highlights: [["Catering for 10 to 500", "Delivered, set up and cleared."], ["Carry-out daily", "Call ahead and it's ready."], ["Pans to go", "Half and full pans of any specialty."]],
    feature: {
      kicker: "Planning an event?",
      title: "How catering works",
      text: "Pick a package from the menu below, tell us how many people and when, and we'll handle the rest. Most events are booked in one phone call.",
      img: "img/ct-banquet.jpg",
      list: [["1. Choose a package", "Nine set menus, or build your own"], ["2. Send the details", "Date, headcount and address, by form or phone"], ["3. We deliver and set up", "Chafing dishes, serving utensils and plates included"], ["4. We clean up", "Optional pickup the next morning"]],
      cta: ["Request a quote", "quote"],
    },
    featureNote: "For a catering business this section explains how ordering works. A quote form can send the event details straight to your email.",
    gallery: [
      ["img/ct-carving.jpg", "Wedding reception"],
      ["img/ct-lasagna.jpg", "Lasagna, by the pan"],
      ["img/ct-buffet.jpg", "Office lunch buffet"],
      ["img/ct-skewers.jpg", "Appetizer trays"],
      ["img/ct-platter.jpg", "Antipasto platter"],
      ["img/ct-server.jpg", "Full-service events"],
    ],
    hours: [["Mon", "11:00-19:00"], ["Tue", "11:00-19:00"], ["Wed", "11:00-19:00"], ["Thu", "11:00-19:00"], ["Fri", "11:00-19:00"], ["Sat", "11:00-19:00"], ["Sun", null]],
    reviews: [["They fed 200 people at our wedding and everyone asked for the meatballs.", "Angela & Chris"], ["Same lasagna I grew up on. Nothing else comes close.", "Frank D."], ["Our office orders every Friday. Always on time.", "Parkview Dental"]],
    menu: {
      "Catering Packages": [
        ["Package 1", "Mostaccioli, meatballs, roll. Per person", 11, []],
        ["Package 3", "Mostaccioli, meatball, Italian sausage, roll. Per person", 13, []],
        ["Package 5", "Mostaccioli, meatball, sausage, salad, roll. Per person", 15, []],
        ["Package 9", "Baked chicken, mostaccioli, meatball, sausage, salad, roll. Per person", 19, []],
      ],
      Specialties: [
        ["Lasagna", "Half pan serves 12, full pan serves 24", 75, [], "img/ct-lasagna.jpg"],
        ["Manicotti", "Ricotta-filled, marinara, mozzarella", 14, ["v"]],
        ["Chicken Parmesan", "Breaded cutlet, marinara, spaghetti", 16, []],
        ["Gnocchi", "Potato gnocchi, meat sauce or marinara", 14, ["v"]],
      ],
      Sandwiches: [
        ["Italian Sausage", "Peppers, onions, marinara, on a hoagie", 11, []],
        ["Meatball", "Three meatballs, marinara, provolone", 11, []],
        ["Steak", "Shaved steak, peppers, provolone", 13, []],
      ],
      Trays: [
        ["Antipasto Tray", "Serves 15 to 20", 65, ["gf"], "img/ct-platter.jpg"],
        ["Appetizer Skewers", "Caprese and salami bites, 50 pieces", 55, ["gf"], "img/ct-skewers.jpg"],
      ],
    },
  },

  /* ---------------------------------------------------- 4 */
  {
    id: "taqueria",
    headerCta: ["Order Ahead", "order"],
    label: "Taquería",
    name: "Taquería El Faro",
    logoMark: "EF",
    eyebrow: "Tacos · Burritos · Aguas frescas",
    tagline: "Handmade tortillas, slow-cooked meats and salsas made every morning.",
    hero: { img: "img/tq-hero.jpg", layout: "left" },
    heroNote: "A bright food photo works well for a casual spot. The colors on the page are chosen to go with it.",
    ownerEmail: "hola@taqueriaelfaro.com",
    phone: "(555) 404-8226",
    address: "905 E 4th St",
    defaultLayout: "grid",
    about:
      "The Morales family opened El Faro in a former gas station on 4th Street. The tortillas are pressed to order, the carnitas cook for six hours, and there are always at least five salsas on the bar.",
    aboutImg: "img/tq-patio.jpg",
    stats: [["5+", "salsas, made daily"], ["6 hrs", "carnitas cook time"], ["2", "locations"]],
    highlights: [["Order ahead", "Skip the line at lunch."], ["Family packs", "Feeds four to six."], ["Open late on weekends", "Until 2am Friday and Saturday."]],
    feature: {
      kicker: "Feeding a crowd?",
      title: "Family packs & taco bars",
      text: "Pick up a family pack for dinner tonight, or book a taco bar for your next party. We bring the tortillas, meats, salsas and toppings.",
      img: "img/tq-salsa.jpg",
      list: [["Family pack", "12 tacos, rice, beans, chips and salsa, $42"], ["Taco bar", "Two meats, all the toppings, from 20 people"], ["Salsa by the pint", "Roja, verde, habanero or pico"]],
      cta: ["Order for pickup", "order"],
    },
    featureNote: "Online ordering can link to Square, Toast, Clover or DoorDash, whatever the restaurant already uses.",
    gallery: [
      ["img/tq-plate.jpg", "Plato de tacos"],
      ["img/tq-spread.jpg", "Lunch for two"],
      ["img/tq-tacos.jpg", "Carnitas"],
      ["img/tq-salsa.jpg", "The salsa bar"],
      ["img/tq-patio.jpg", "The patio at night"],
      ["img/tq-hero.jpg", "Tacos de asada"],
    ],
    hours: [["Mon", "10:00-21:00"], ["Tue", "10:00-21:00"], ["Wed", "10:00-21:00"], ["Thu", "10:00-21:00"], ["Fri", "10:00-02:00"], ["Sat", "09:00-02:00"], ["Sun", "09:00-20:00"]],
    reviews: [["Al pastor is the best I've had outside Mexico City.", "Lucia M."], ["Fast, cheap, and the salsa bar is huge.", "Ben K."], ["Got the taco bar for my son's graduation. Perfect.", "Rosa P."]],
    menu: {
      Tacos: [
        ["Al Pastor", "Marinated pork, pineapple, onion, cilantro", 3.5, ["gf"], "img/tq-tacos.jpg"],
        ["Carnitas", "Slow-cooked pork, salsa verde", 3.5, ["gf"], "img/tq-plate.jpg"],
        ["Carne Asada", "Grilled steak, onion, cilantro", 4, ["gf"]],
        ["Hongos", "Roasted mushrooms, poblano, queso fresco", 3.5, ["v", "gf"]],
      ],
      Platos: [
        ["Burrito", "Choice of meat, rice, beans, cheese, salsa", 11, [], "img/tq-spread.jpg"],
        ["Enchiladas Rojas", "Chicken, red chile, crema, queso fresco", 13, ["gf", "spicy"]],
        ["Quesadilla", "Oaxaca cheese, flour tortilla, guacamole", 9, ["v"]],
      ],
      Drinks: [
        ["Horchata", "Rice, cinnamon, vanilla", 3.5, ["v", "gf"]],
        ["Agua de Jamaica", "Hibiscus, lightly sweet", 3.5, ["v", "vg", "gf"]],
        ["Mexican Coke", "Glass bottle", 3, ["v", "vg", "gf"]],
      ],
    },
  },

  /* ---------------------------------------------------- 5 */
  {
    id: "cafe",
    headerCta: ["Call In an Order", "call"],
    label: "Breakfast Café",
    name: "Bluebird Café",
    logoMark: "B",
    eyebrow: "Breakfast & lunch",
    tagline: "Pancakes, strong coffee and a seat by the window. Breakfast served all day.",
    hero: { img: "img/cf-hero.jpg", layout: "card" },
    heroNote: "Every part of the design follows your brand: colors, fonts, logo and photos.",
    ownerEmail: "hello@bluebirdcafe.com",
    phone: "(555) 909-2121",
    address: "55 Park Ave",
    defaultLayout: "grid",
    about:
      "Bluebird is a small corner café with twelve tables, a counter, and a griddle that's been running since 6am every day for fifteen years. The coffee is roasted across town and the pancake batter is made fresh every morning.",
    aboutImg: "img/cf-room.jpg",
    stats: [["15", "years on the corner"], ["6am", "doors open"], ["All day", "breakfast"]],
    highlights: [["Breakfast all day", "Pancakes at 2pm are fine."], ["Local coffee", "Roasted across town."], ["Call-in orders", "Ready in 15 minutes."]],
    feature: {
      kicker: "This week",
      title: "On the specials board",
      text: "The board by the register changes every Monday. Owners can update this list from their phone in a minute.",
      img: "img/cf-latte.jpg",
      list: [["Pumpkin pancakes", "Whipped butter, maple, pecans · $11"], ["Green chile breakfast burrito", "Smothered or handheld · $10"], ["Soup of the day", "Ask your server · $6"], ["Seasonal latte", "Maple cinnamon · $5.50"]],
      cta: ["Call in an order", "call"],
    },
    featureNote: "A weekly specials board keeps regulars checking the site. It could also be a jobs page, an events calendar or a kids' menu.",
    gallery: [
      ["img/cf-pancakes.jpg", "Buttermilk stack"],
      ["img/cf-bright.jpg", "The front room"],
      ["img/cf-bowl.jpg", "Fruit & yogurt bowl"],
      ["img/cf-burger.jpg", "Lunch: the Bluebird burger"],
      ["img/cf-toast.jpg", "Avocado toast"],
      ["img/cf-salad.jpg", "Sweet potato hash"],
    ],
    hours: [["Mon", "06:00-14:00"], ["Tue", "06:00-14:00"], ["Wed", "06:00-14:00"], ["Thu", "06:00-14:00"], ["Fri", "06:00-14:00"], ["Sat", "07:00-15:00"], ["Sun", "07:00-14:00"]],
    reviews: [["The pancakes are the size of the plate.", "Jess M."], ["Coffee refills before you even ask.", "Leo C."], ["Our Sunday spot for ten years running.", "Ari & Dan N."]],
    menu: {
      Breakfast: [
        ["Buttermilk Pancakes", "Three cakes, whipped butter, warm syrup", 10, ["v"], "img/cf-pancakes.jpg"],
        ["Two Eggs Any Style", "Hash browns, toast, bacon or sausage", 11, [], "img/cf-hero.jpg"],
        ["Breakfast Burrito", "Eggs, potato, cheese, green chile", 10, ["spicy"]],
        ["Avocado Toast", "Sourdough, poached egg, chili flakes", 11, ["v"], "img/cf-toast.jpg"],
      ],
      Lunch: [
        ["Bluebird Burger", "Half-pound, cheddar, fries", 14, [], "img/cf-burger.jpg"],
        ["Club Sandwich", "Turkey, bacon, lettuce, tomato", 12, []],
        ["Cobb Salad", "Chicken, egg, bacon, avocado, blue cheese", 13, ["gf"]],
      ],
      Drinks: [
        ["Drip Coffee", "Bottomless", 3, ["v", "vg", "gf"]],
        ["Latte", "Whole, oat or almond milk", 4.5, ["v", "gf"], "img/cf-latte.jpg"],
        ["Fresh Orange Juice", "Squeezed to order", 5, ["v", "vg", "gf"]],
      ],
    },
  },
];

window.DIET_TAGS = {
  v: { label: "Vegetarian", short: "V" },
  vg: { label: "Vegan", short: "VG" },
  gf: { label: "Gluten-free", short: "GF" },
  spicy: { label: "Spicy", short: "Hot" },
};
