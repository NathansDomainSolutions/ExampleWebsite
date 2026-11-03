/* =========================================================
   THEME DATA
   Each theme is a complete fictional restaurant: its own name,
   copy, menu and look. Add / remove / reorder themes here.
   ========================================================= */

window.SELLER = {
  // ✏️ Edit these so prospects can reach you from the demo
  name: "Your Name",
  business: "Your Web Studio",
  email: "hello@yourdomain.com",
  phone: "(555) 010-2026",
};

window.THEMES = [
  /* ---------------------------------------------------- 1 */
  {
    id: "ember",
    label: "Rustic Steakhouse",
    name: "Ember & Oak",
    logoMark: "E&O",
    eyebrow: "Wood-fired kitchen · Est. 2009",
    tagline: "Steaks, smoke and a long table for friends.",
    heroEmoji: "🔥",
    ownerEmail: "owner@emberandoak.com",
    phone: "(555) 214-8890",
    address: "418 Timber Lane, Riverside",
    defaultLayout: "list",
    about:
      "Everything here touches the fire. We cook over seasoned oak, source beef from two family ranches within 60 miles, and pour wine from small producers we've met in person.",
    stats: [["14", "years on Timber Lane"], ["60 mi", "farthest beef travels"], ["220+", "bottles in the cellar"]],
    highlights: [["🪵", "Live oak fire", "Every steak, every vegetable."], ["🍷", "Wine cellar", "Ask for the off-list bottles."], ["🎉", "Private room", "Seats 24 for celebrations."]],
    hours: [["Mon", null], ["Tue", "16:00-22:00"], ["Wed", "16:00-22:00"], ["Thu", "16:00-22:00"], ["Fri", "16:00-23:00"], ["Sat", "15:00-23:00"], ["Sun", "15:00-21:00"]],
    reviews: [["The ribeye ruined every other steak for me.", "Dana R."], ["Best anniversary dinner we've had.", "Marcus & Jo"], ["Ask for the corner booth by the fire.", "Priya S."]],
    menu: {
      Starters: [
        ["Ember Bread", "Sourdough, whipped bone-marrow butter, sea salt", 9, ["v"]],
        ["Smoked Beef Tartare", "Hand-cut, egg yolk, capers, grilled toast", 18, []],
        ["Charred Carrots", "Hot honey, labneh, dukkah", 13, ["v", "gf"]],
      ],
      "From the Fire": [
        ["Bone-in Ribeye 20oz", "Dry-aged 35 days, chimichurri", 64, ["gf"]],
        ["Oak-Grilled Half Chicken", "Lemon, garlic, pan jus", 32, ["gf"]],
        ["Cedar Plank Salmon", "Maple glaze, fennel slaw", 36, ["gf"]],
        ["Smoked Mushroom Steak", "King oyster, black garlic, herbs", 28, ["v", "vg", "gf"]],
      ],
      Sides: [
        ["Duck Fat Potatoes", "Rosemary, flaky salt", 10, ["gf"]],
        ["Creamed Kale", "Parmesan, nutmeg", 9, ["v"]],
      ],
      Dessert: [
        ["Skillet Cookie", "Brown butter, smoked salt, vanilla ice cream", 12, ["v"]],
        ["Bourbon Pecan Tart", "Whipped crème fraîche", 11, ["v"]],
      ],
    },
  },

  /* ---------------------------------------------------- 2 */
  {
    id: "sakura",
    label: "Minimal Japanese",
    name: "Hana Sushi",
    logoMark: "花",
    eyebrow: "Omakase & sushi bar",
    tagline: "Quiet room. Sharp knives. Fish flown in daily.",
    heroEmoji: "🍣",
    ownerEmail: "chef@hanasushi.com",
    phone: "(555) 380-1177",
    address: "22 Blossom Street, Old Town",
    defaultLayout: "compact",
    about:
      "Chef Kenji trained for eleven years in Osaka before opening Hana. Twelve seats at the counter, one seating per night for omakase, and an à-la-carte menu for everyone else.",
    stats: [["12", "counter seats"], ["11 yrs", "chef's training"], ["Daily", "fish deliveries"]],
    highlights: [["🔪", "Omakase", "18 courses, chef's choice."], ["🍶", "Sake flights", "Three pours, paired."], ["🥢", "Takeout", "Order online for pickup."]],
    hours: [["Mon", null], ["Tue", null], ["Wed", "17:30-22:00"], ["Thu", "17:30-22:00"], ["Fri", "17:30-22:30"], ["Sat", "17:00-22:30"], ["Sun", "17:00-21:00"]],
    reviews: [["Like being transported to Osaka.", "Elena V."], ["The toro melts. That's all I'll say.", "Tom H."], ["Book the omakase. Trust me.", "Aiko M."]],
    menu: {
      Nigiri: [
        ["Otoro", "Fatty bluefin tuna, 2 pc", 16, ["gf"]],
        ["Hamachi", "Yellowtail, yuzu kosho, 2 pc", 11, ["gf"]],
        ["Hotate", "Hokkaido scallop, sea salt, 2 pc", 12, ["gf"]],
        ["Tamago", "Sweet layered omelette, 2 pc", 6, ["v"]],
      ],
      Rolls: [
        ["Spicy Tuna", "Cucumber, chili oil, scallion", 14, ["spicy"]],
        ["Garden Roll", "Avocado, pickled radish, shiso", 11, ["v", "vg"]],
        ["Hana Signature", "Eel, crab, torched salmon, sweet soy", 19, []],
      ],
      Kitchen: [
        ["Miso Black Cod", "Marinated 3 days, pickled ginger", 28, ["gf"]],
        ["Agedashi Tofu", "Dashi broth, bonito, daikon", 10, ["v"]],
      ],
      Omakase: [
        ["Chef's Omakase", "18 courses · counter only · reservation required", 145, []],
      ],
    },
  },

  /* ---------------------------------------------------- 3 */
  {
    id: "sol",
    label: "Bright Street Food",
    name: "Taquería Sol",
    logoMark: "☀",
    eyebrow: "Tacos · Tortas · Aguas frescas",
    tagline: "Fresh tortillas pressed all day. Salsa bar always full.",
    heroEmoji: "🌮",
    ownerEmail: "hola@taqueriasol.com",
    phone: "(555) 772-4040",
    address: "901 Mercado Ave, Eastside",
    defaultLayout: "grid",
    about:
      "The Ramírez family started Sol as a Saturday stand in 2015. Today it's a full taquería, but the tortillas are still pressed by hand and Abuela still checks the salsa every morning.",
    stats: [["2,000+", "tortillas a day"], ["8", "house salsas"], ["2015", "first Saturday stand"]],
    highlights: [["🫓", "Hand-pressed", "Corn tortillas, made all day."], ["🌶️", "Salsa bar", "Eight salsas, mild to wild."], ["🛵", "Delivery", "Order direct and skip the fees."]],
    hours: [["Mon", "10:00-21:00"], ["Tue", "10:00-21:00"], ["Wed", "10:00-21:00"], ["Thu", "10:00-22:00"], ["Fri", "10:00-23:00"], ["Sat", "09:00-23:00"], ["Sun", "09:00-20:00"]],
    reviews: [["Al pastor straight off the trompo. Unreal.", "Luis G."], ["My lunch spot 3x a week.", "Kendra P."], ["Horchata is the best in town.", "Sam W."]],
    menu: {
      Tacos: [
        ["Al Pastor", "Marinated pork, pineapple, onion, cilantro", 4, ["gf"]],
        ["Carne Asada", "Grilled steak, guacamole, salsa verde", 4.5, ["gf"]],
        ["Baja Fish", "Beer-battered cod, chipotle crema, cabbage", 5, []],
        ["Hongos", "Roasted mushrooms, epazote, queso fresco", 4, ["v", "gf"]],
      ],
      "Tortas & Bowls": [
        ["Torta Ahogada", "Carnitas in spicy tomato broth", 13, ["spicy"]],
        ["Burrito Bowl", "Rice, black beans, choice of meat, pico", 12, ["gf"]],
        ["Veggie Bowl", "Grilled peppers, beans, avocado, rice", 11, ["v", "vg", "gf"]],
      ],
      Extras: [
        ["Elote", "Street corn, mayo, cotija, chile-lime", 5, ["v", "gf"]],
        ["Chips & Guac", "Made to order", 7, ["v", "vg", "gf"]],
      ],
      Drinks: [
        ["Horchata", "Rice, cinnamon, vanilla", 4, ["v", "gf"]],
        ["Agua de Jamaica", "Hibiscus, lime", 4, ["v", "vg", "gf"]],
      ],
    },
  },

  /* ---------------------------------------------------- 4 */
  {
    id: "bistro",
    label: "Elegant Fine Dining",
    name: "Le Petit Jardin",
    logoMark: "LPJ",
    eyebrow: "Modern French bistro",
    tagline: "Seasonal French cooking in a garden courtyard.",
    heroEmoji: "🥂",
    ownerEmail: "reservations@lepetitjardin.com",
    phone: "(555) 615-3302",
    address: "7 Rue Verte, Garden District",
    defaultLayout: "list",
    about:
      "A courtyard bistro inspired by the neighbourhood restaurants of Lyon. The menu changes with the market; the onion soup and the crème brûlée never will.",
    stats: [["40", "courtyard seats"], ["Weekly", "market menu"], ["1", "Michelin mention"]],
    highlights: [["🌿", "Garden courtyard", "Open May through October."], ["🧀", "Fromagerie", "Twelve French cheeses."], ["💍", "Events", "Rehearsal dinners & showers."]],
    hours: [["Mon", null], ["Tue", "17:00-22:00"], ["Wed", "17:00-22:00"], ["Thu", "17:00-22:00"], ["Fri", "17:00-23:00"], ["Sat", "11:00-23:00"], ["Sun", "10:00-15:00"]],
    reviews: [["Felt like a summer night in France.", "Claire D."], ["Flawless service from start to finish.", "Robert K."], ["Sunday brunch is a must.", "Nina F."]],
    menu: {
      "Hors d'œuvre": [
        ["Soupe à l'Oignon", "Gruyère crouton, beef broth", 14, []],
        ["Escargots", "Garlic-parsley butter, baguette", 16, []],
        ["Salade Niçoise", "Seared tuna, haricots verts, olives, egg", 18, ["gf"]],
      ],
      Plats: [
        ["Steak Frites", "Hanger steak, sauce au poivre, frites", 38, ["gf"]],
        ["Coq au Vin", "Red wine, lardons, mushrooms, pearl onions", 34, ["gf"]],
        ["Ratatouille Provençale", "Slow-baked summer vegetables, basil", 26, ["v", "vg", "gf"]],
      ],
      Fromages: [
        ["Plateau de Fromages", "Three French cheeses, honey, walnuts", 19, ["v"]],
      ],
      Desserts: [
        ["Crème Brûlée", "Tahitian vanilla", 12, ["v", "gf"]],
        ["Tarte Tatin", "Caramelized apple, crème fraîche", 13, ["v"]],
      ],
    },
  },

  /* ---------------------------------------------------- 5 */
  {
    id: "diner",
    label: "Retro Neon Diner",
    name: "Starlite Diner",
    logoMark: "★",
    eyebrow: "Burgers · Shakes · Open late",
    tagline: "Smash burgers, thick shakes, and a jukebox that still works.",
    heroEmoji: "🍔",
    ownerEmail: "manager@starlitediner.com",
    phone: "(555) 555-1957",
    address: "1957 Route 66, Midtown",
    defaultLayout: "grid",
    about:
      "Chrome stools, red booths, and the same flat-top grill since 1957. We smash our burgers, spin our shakes by hand and serve breakfast all day, every day.",
    stats: [["1957", "grill fired up"], ["24", "shake flavours"], ["2 AM", "last call Fri & Sat"]],
    highlights: [["🥤", "Hand-spun shakes", "24 flavours. Malt it."], ["🍳", "All-day breakfast", "Pancakes at midnight? Yes."], ["🎵", "Jukebox", "Three songs for a quarter."]],
    hours: [["Mon", "07:00-23:00"], ["Tue", "07:00-23:00"], ["Wed", "07:00-23:00"], ["Thu", "07:00-23:00"], ["Fri", "07:00-02:00"], ["Sat", "07:00-02:00"], ["Sun", "07:00-22:00"]],
    reviews: [["Best smash burger in the state.", "Jake T."], ["The milkshakes are ENORMOUS.", "Brianna L."], ["Pure nostalgia. Love it.", "Hal & Peggy"]],
    menu: {
      Burgers: [
        ["The Starlite", "Double smash, American cheese, special sauce", 13, []],
        ["Atomic Burger", "Jalapeños, pepper jack, ghost pepper mayo", 14, ["spicy"]],
        ["Garden Burger", "House black-bean patty, avocado", 12, ["v"]],
      ],
      Breakfast: [
        ["Short Stack", "Three buttermilk pancakes, maple syrup", 9, ["v"]],
        ["Lumberjack", "2 eggs, bacon, hash browns, toast", 12, []],
      ],
      Shakes: [
        ["Classic Vanilla", "Hand-spun, whipped cream, cherry", 7, ["v", "gf"]],
        ["Cookie Monster", "Oreo, cookie dough, fudge", 8, ["v"]],
        ["Strawberry Malt", "Fresh berries, malted milk", 8, ["v"]],
      ],
      Sides: [
        ["Chili Cheese Fries", "House chili, cheddar, onion", 7, ["spicy"]],
        ["Onion Rings", "Beer-battered, ranch", 6, ["v"]],
      ],
    },
  },

  /* ---------------------------------------------------- 6 */
  {
    id: "green",
    label: "Modern Café",
    name: "Greenhouse Café",
    logoMark: "G",
    eyebrow: "Coffee · Brunch · Bowls",
    tagline: "Good coffee, real food, and plenty of plants.",
    heroEmoji: "🥑",
    ownerEmail: "hello@greenhousecafe.com",
    phone: "(555) 909-2121",
    address: "55 Fern Row, Northside",
    defaultLayout: "grid",
    about:
      "A bright, plant-filled café serving locally roasted coffee and from-scratch brunch. Laptop-friendly mornings, buzzy weekends, and a menu that's 80% plant-based.",
    stats: [["80%", "plant-based menu"], ["Local", "roaster partner"], ["Free", "Wi-Fi & outlets"]],
    highlights: [["☕", "Specialty coffee", "Roasted 3 miles away."], ["🌱", "Plant-forward", "Clear allergy labels."], ["📱", "Order ahead", "Skip the line with your phone."]],
    hours: [["Mon", "07:00-15:00"], ["Tue", "07:00-15:00"], ["Wed", "07:00-15:00"], ["Thu", "07:00-15:00"], ["Fri", "07:00-16:00"], ["Sat", "08:00-16:00"], ["Sun", "08:00-14:00"]],
    reviews: [["My favourite place to work from.", "Ari N."], ["The avocado toast is a work of art.", "Jess M."], ["Oat latte perfection.", "Leo C."]],
    menu: {
      Coffee: [
        ["Flat White", "Double ristretto, steamed milk", 4.5, ["v", "gf"]],
        ["Iced Oat Latte", "Oat milk, house espresso", 5.5, ["v", "vg", "gf"]],
        ["Matcha Latte", "Ceremonial grade, choice of milk", 5.5, ["v", "gf"]],
      ],
      Brunch: [
        ["Avocado Toast", "Sourdough, chili flakes, pickled onion, seeds", 12, ["v", "vg", "spicy"]],
        ["Shakshuka", "Baked eggs, spiced tomato, feta, pita", 14, ["v"]],
        ["Ricotta Pancakes", "Berries, lemon curd, maple", 13, ["v"]],
      ],
      Bowls: [
        ["Buddha Bowl", "Quinoa, roast squash, kale, tahini", 14, ["v", "vg", "gf"]],
        ["Salmon Poke", "Brown rice, edamame, mango, sesame", 16, ["gf"]],
      ],
      Bakery: [
        ["Almond Croissant", "Baked in-house each morning", 5, ["v"]],
        ["Banana Bread", "Walnut, brown butter", 4.5, ["v"]],
      ],
    },
  },
];

window.DIET_TAGS = {
  v: { label: "Vegetarian", short: "V" },
  vg: { label: "Vegan", short: "VG" },
  gf: { label: "Gluten-free", short: "GF" },
  spicy: { label: "Spicy", short: "🌶" },
};
