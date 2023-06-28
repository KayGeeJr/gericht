import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'R650',
    tags: 'AU | Bottle',
  },
  {
    title: 'Cabernet Sauvignon',
    price: 'R600',
    tags: 'SA | Bottle',
  },
  {
    title: 'Rupert & Rothschild',
    price: 'R300',
    tags: 'SA | 750 ml',
  },
  {
    title: 'Chenin Blanc',
    price: 'R500',
    tags: 'Sa| 750 ml',
  },
  {
    title: 'Pinot noir',
    price: 'R400',
    tags: 'SA | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: 'R80',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'R58',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'R40',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Pina Colada',
    price: 'R108',
    tags: 'Rum | Coconut | Pineapple juice | 30 ml',
  },
  {
    title: 'Sex on the Beach',
    price: 'R95',
    tags: 'Vodka | Peach schnapps | Orange juice | Cranberry juice | 30 ml',
  },
];
const awards = [
  {
    imgUrl: images.award02,
    title: 'Service Excellence',
    subtitle: 'Providing exceptional service that exceeds expectations.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Recognizing emerging talent and innovation in the culinary industry.',
  },
  {
    imgUrl: images.award05,
    title: 'Sustainability Award',
    subtitle: 'Acknowledging commitment to eco-friendly practices and sustainable sourcing.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Celebrating culinary mastery and extraordinary culinary creations.',
  },
];

const headers = [
  {
    subHeading: 'Chase the new flavour',
    heading: 'The Key To Fine Dining',
    description: 'Indulge in a culinary journey like no other. Our carefully crafted dishes combine exquisite flavors and premium ingredients to elevate your fine dining experience.',
    image: images.welcome,
  },
  {
    subHeading: 'Chase the new flavour',
    heading: 'Quality Served Timely',
    description: 'Experience exceptional service that values your time. Our dedicated staff ensures that every dish is prepared with precision and served promptly, guaranteeing a delightful dining experience.',
    image: images.m2,
  },
  {
    subHeading: 'Chase the new flavour',
    heading: 'Food That Surprise You',
    description: 'Prepare to be amazed by our innovative and adventurous menu. Our talented chefs push the boundaries of taste, presenting dishes that will leave you pleasantly surprised and craving for more.',
    image: images.m3,
  },
  {
    subHeading: 'Chase the new flavour',
    heading: 'Love The Original Taste',
    description: 'Discover the timeless flavors that have made us a beloved institution. With each bite, you will experience the essence of culinary tradition and our commitment to preserving the original taste.',
    image: images.m4,
  },
];

const blogs = [
  {
    image: images.blogCake,
    title: 'Mellow Pastry With Pistachios and Spicy Peanut',
    date: 'May 15, 2023',
    blogger: 'Annalisa M',
    description: "Indulge in this mellow pastry bursting with flavors of pistachios and a touch of spicy peanut goodness.",
  },
  {
    image: images.blogb,
    title: 'Make The Tasty Eggplant Dish At Home',
    date: 'May 23, 2023',
    blogger: 'Jessie P',
    description: "Discover the secrets to creating a mouthwatering eggplant dish that will tantalize your taste buds.",
  },

  {
    image: images.blogYogurt,
    title: 'How To Prepare The  Italian Yogurt Dish',
    date: 'June 15, 2023',
    blogger: 'Lizzette W',
    description: "Embark on a culinary journey with this guide to creating the  Italian yogurt dish that will transport you to Italy.",
  },
];

const specialMenu =[{
  title:'Spicy Prawn Pasta',
  ingredients: 'Prawns | Pasta | Tomato | Chilli | Garlic | Olive oil  ',
  image: images.prawnPasta,
  price: 145,
},
{
  title:'Shrimp Spaghetti',
  ingredients: 'Shrimp | Spaghetti | Tomato | Chilli | Garlic | Olive oil ',
  image: images.spaghetti,
  price: 125,
},
{
  title: 'Pumpkin Soup',
  ingredients: 'Pumpkin | Cream | Onion | Garlic | Gouda ',
  image: images.pumpkinSoup,
  price: 96,
},
{
  title: 'Vegetable Steak Frittata',
  ingredients: ' Steak |Cavallion | Onion | Sour Cream| Jalapeno ',
  image: images.fritata,
  price: 180,
},
{
  title: 'Grilled Mackerel With Green Sauce',
  ingredients: 'Mackerel | Green Sauce | Yogurt | Carrot | Miso ',
  image : images.mackerel,
  price: 130,
},

{
  title: 'Salmon Lox',
  ingredients: 'Salmon | Lox | Onion | Sour Cream| Jalapeno ',
  image : images.salmonLox,
  price: 108,
},


]

  const breakfasts = [

    {
    title: 'Full English Breakfast',
    ingredients: 'Eggs | Bacon | Sausage | Baked Beans | Grilled Tomato | Mushrooms | Toast',
    price: 90,
    },
    
  
    {
    title: 'Continental Breakfast',
    ingredients: 'Assorted Pastries | Bread Rolls | Butter | Jams | Cold Cuts | Cheese | Yogurt | Fresh Fruits | Coffee | Tea',
    price: 60,
    },
    
   
    {
    title: 'Omelette',
    ingredients: 'Eggs | Cheese | Vegetables | Ham | Mushrooms | Onions | Toast',
    price: 55,
    },
    
   
    {
    title: 'Pancakes',
    ingredients: 'Pancake Batter | Butter | Syrup | Fresh Fruits | Chocolate | Nutella | Whipped Cream',
    price: 40,
    },
    

    {
    title: 'Breakfast Burrito',
    ingredients: 'Tortilla | Scrambled Eggs | Cheese | Bacon | Sausage | Peppers | Onions | Salsa | Sour Cream',
    price: 65,
    },
    
  
    {
    title: 'Strawberry Waffles',
    ingredients: 'Waffle Batter | Strawberries | Whipped Cream | Syrup',
    price: 50,
    }
  ]

  const starters=[



{
  title: 'Bruschetta',
  ingredients: 'Baguette | Tomatoes | Basil | Garlic | Olive Oil',
  price: 45,
},
{
  title: 'Chicken Wings',
  ingredients: 'Chicken Wings | BBQ Sauce | Buffalo Sauce | Ranch Dressing',
  price: 65,
},
{
  title: 'Caprese Salad',
  ingredients: 'Tomatoes | Mozzarella Cheese | Fresh Basil | Balsamic Glaze',
  price: 55,
},
{
  title: 'Nachos',
  ingredients: 'Tortilla Chips | Cheese | Guacamole | Salsa | Sour Cream',
  price: 60,
},



{
  title: 'Spring Rolls',
  ingredients: 'Spring Roll Wrappers | Vegetables | Shrimp or Chicken | Soy Sauce',
  price: 50,
},


{
  title: 'Soup of the Day',
  ingredients: 'Varies depending on the day',
  price: 40,
}


]

const mains=[
  {
    'title': 'Grilled Kingklip',
    'ingredients': 'Kingklip Fish | Lemon Butter Sauce | Seasonal Vegetables | Rice or Potatoes',
    'price': 150
  },
  
  {
    'title': 'Beef Fillet',
    'ingredients': 'Beef Fillet Steak | Red Wine Sauce | Roasted Vegetables | Mashed Potatoes',
    'price': 180
  },
  
  {
    'title': 'Chicken Parmesan',
    'ingredients': 'Chicken Breast | Marinara Sauce | Mozzarella Cheese | Spaghetti | Garlic Bread',
    'price': 140
  },
  
  {
    'title': 'Seafood Paella',
    'ingredients': 'Rice | Shrimp | Mussels | Calamari | Chorizo | Bell Peppers | Saffron',
    'price': 170
  },
  
  {
    title: 'Pepperoni Pizza',
    ingredients: 'Lasagna Sheets | Mixed Vegetables | Tomato Sauce | Bechamel Sauce | Cheese',
    'price': 120
  }
]

const desserts=[
  {
    'title': 'Chocolate Brownie Sundae',
    'ingredients': 'Chocolate Brownie | Vanilla Ice Cream | Chocolate Sauce | Whipped Cream | Nuts',
    'price': 50
    },
    {
      'title': 'Cheesecake',
      'ingredients': 'Cream Cheese | Graham Cracker Crust | Fruit Topping (varies) | Whipped Cream',
      'price': 60
    },
    
    {
      'title': 'Tiramisu',
      'ingredients': 'Ladyfingers | Mascarpone Cheese | Espresso | Cocoa Powder',
      'price': 70
    },
    
    {
      'title': 'Apple Pie',
      'ingredients': 'Apples | Cinnamon | Pie Crust | Sugar | Butter',
      'price': 45
    },
    
    {
      'title': 'Ice Cream Sundae',
      'ingredients': 'Assorted Flavors of Ice Cream | Toppings (chocolate syrup, caramel, sprinkles, etc.) | Whipped Cream | Cherry',
      'price': 40
    },
    
    {
      'title': 'Fresh Fruit Salad',
      'ingredients': 'Assorted Fresh Fruits (strawberries, melon, grapes, etc.) | Honey or Lime Juice',
      'price': 35
    }
]

const gallery =[
  {
    image: images.g1,
  },
  {
    image: images.g2,
  },
  {
    image: images.g3,
  },
  {
    image: images.g4,
  },
  {
    image: images.g5,
  },
  {
    image: images.g6,
  },
  {
    image: images.g7,
  },
  {
    image: images.gallery02,
  },
  {
    image: images.g8,
  },
  {
    image: images.g9,
  },
  {
    image: images.g10,
  },
  {
    image: images.g11,
  },
  {
    image: images.gallery01, 
  },
  {
    image: images.g12,
  },
  {
    image: images.g13,
  },
  {
    image: images.g14,
  },
  {
    image: images.g15,
  },
  {
    image: images.bramble,
  },
  {
    image: images.g16,
  },
  {
    image: images.choc,
  },
  {
    image: images.gallery04,
  },
  {
    image: images.gallery03,
  },
  {
    image: images.cream,
  },
     
]


export default { wines, cocktails, awards, headers,blogs, 
  specialMenu, breakfasts, starters, mains, desserts, gallery };
