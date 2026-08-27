const businessWhatsAppNumber = "2349024337630";
const slides = [];
for(let i = 1; i <= 5; i++) {
    slides.push(document.getElementById(`hero-slide-${i}`));
}

let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove("opacity-100");
    slides[currentSlide].classList.add("opacity-0");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove("opacity-0");
    slides[currentSlide].classList.add("opacity-100");
}

setInterval(showNextSlide, 4000);

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

menuToggle.addEventListener('click', function() {
    bar1.classList.toggle('rotate-45');
    bar1.classList.toggle('translate-y-2');
    bar2.classList.toggle('opacity-0');
    bar3.classList.toggle('-rotate-45');
    bar3.classList.toggle('-translate-y-2');

    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

let menuItems = [
    {name: "Jollof Rice & Chicken", description: "Classic smoky jollof rice with grilled chicken", price: "₦4,500", image: "images/menu/mains/jollof-and-chicken.jpg", category: "mains", orderable: true},
    {name: "Smoothie (Mixed Fruit)", description: "Blended seasonal fruit smoothie", price: "₦2,500", image: "images/menu/drinks/smoothies.jpg", category: "drinks", orderable: true},
    {name: "Peppered Snails", description: "Tender snails tossed in a spicy pepper sauce", price: "₦3,500", image: "images/menu/starters/peppered-snail.jpg", category: "starters", orderable: true},
    {name: "Puff Puff Bites", description: "Sweet fried dough bites served warm", price: "₦1,500", image: "images/menu/starters/puff-puff.jpg", category: "starters", orderable: true},
    {name: "Chicken Spring Rolls", description: "Crispy rolls filled with seasoned chicken and vegetables", price: "₦2,500", image: "images/menu/starters/chicken-spring-rolls.jpg", category: "starters", orderable: true},
    {name: "Fish Small Chops", description: "Assorted bite-sized fried fish and sides", price: "₦3,000", image: "images/menu/starters/small-chops.jpg", category: "starters", orderable: true},
    {name: "Moi Moi", description: "Steamed bean pudding with egg and fish", price: "₦1,800", image: "images/menu/starters/moi-moi.webp", category: "starters", orderable: true},
    {name: "Grilled Prawns", description: "Charred prawns in garlic butter sauce", price: "₦4,000", image: "images/menu/starters/grilled-prawn.jpg", category: "starters", orderable: true},
    {name: "Vegetable Samosa", description: "Crispy pastry filled with spiced vegetables", price: "₦1,800", image: "images/menu/starters/vegetable-samosa.jpg", category: "starters", orderable: true},
    {name: "Pepper Soup (Goat Meat)", description: "Spicy traditional broth with tender goat meat", price: "₦3,200", image: "images/menu/starters/goat-peppersoup.jpg", category: "starters", orderable: true},
    {name: "Suya Skewers", description: "Grilled spiced beef skewers with onions and tomatoes", price: "₦2,000", image: "images/menu/starters/suya-skewers.jpg", category: "starters", orderable: true},
    {name: "Fried Rice & Beef", description: "Nigerian-style fried rice with tender beef", price: "₦4,500", image: "images/menu/mains/fried-rice-beef.jpg", category: "mains", orderable: true},
    {name: "Pounded Yam & Egusi", description: "Smooth pounded yam with rich melon seed soup", price: "₦5,000", image: "images/menu/mains/pounded-yam-egusi.jpg", category: "mains", orderable: true},
    {name: "Grilled Tilapia & Plantain", description: "Whole grilled fish served with fried plantain", price: "₦5,500", image: "images/menu/mains/grilled-tilapia-plantain.jpg", category: "mains", orderable: true},
    {name: "Ofada Rice & Ayamase Sauce", description: "Local rice with spicy green pepper stew", price: "₦4,800", image: "images/menu/mains/ofada-ayamase.jpg", category: "mains", orderable: true},
    {name: "Beef Suya Platter", description: "Grilled beef suya with onions, cabbage, and sauce", price: "₦5,200", image: "images/menu/mains/pounded-yam-egusi.jpg", category: "mains", orderable: true},
    {name: "Chicken Alfredo Pasta", description: "Creamy pasta with grilled chicken strips", price: "₦5,000", image: "images/menu/mains/alfredo-pasta.jpg", category: "mains", orderable: true},
    {name: "Efo Riro & Semo", description: "Vegetable soup with assorted meat and semolina", price: "₦4,700", image: "images/menu/mains/Efo Riro & Semo.jpg", category: "mains", orderable: true},
    {name: "Grilled Chicken & Chips", description: "Continental-style grilled chicken with fries", price: "₦4,500", image: "images/menu/mains/chicken-chips.jpg", category: "mains", orderable: true},
    {name: "Chapman", description: "Classic Nigerian fruit cocktail, non-alcoholic", price: "₦2,000", image: "images/menu/drinks/chapman.jpg", category: "drinks", orderable: true},
    {name: "Zobo", description: "Chilled hibiscus drink with ginger and fruit", price: "₦1,500", image: "images/menu/drinks/zobo.jpg", category: "drinks", orderable: true},
    {name: "Fresh Orange Juice", description: "Freshly squeezed orange juice", price: "₦1,800", image: "images/menu/drinks/orange-juice.jpg", category: "drinks", orderable: true},
    {name: "Chilled Palm Wine", description: "Traditional fresh palm wine, served cold", price: "₦2,200", image: "images/menu/drinks/palm-wine.jpeg", category: "drinks", orderable: true},
    {name: "Soft Drinks", description: "Chilled bottled soft drink", price: "₦1,000", image: "images/menu/drinks/soft-drink.jpg", category: "drinks", orderable: true},
    {name: "Iced Tea", description: "Refreshing chilled tea with lemon", price: "₦1,800", image: "images/menu/drinks/ice-tea.jpg", category: "drinks", orderable: true},
    {name: "Sparkling Water", description: "Chilled sparkling mineral water", price: "₦1,200", image: "images/menu/drinks/sparkling-water.jpg", category: "drinks", orderable: true},
    {name: "Ginger Shot", description: "Concentrated fresh ginger juice shot", price: "₦1,500", image: "images/menu/drinks/ginger-shots.jpg", category: "drinks", orderable: true},
    {name: "Chin Chin", description: "Crunchy sweet fried pastry bites", price: "₦1,200", image: "images/menu/desserts/chinchin.jpg", category: "desserts", orderable: true},
    {name: "Coconut Candy", description: "Sweet chewy coconut treats", price: "₦1,000", image: "images/menu/desserts/coconut-candy.jpg", category: "desserts", orderable: true},
    {name: "Chocolate Lava Cake", description: "Warm cake with a molten chocolate center", price: "₦2,800", image: "images/menu/desserts/chocolate-lava-cake.jpg", category: "desserts", orderable: true},
    {name: "Puff Pancake with Honey", description: "Soft pancakes drizzled with honey", price: "₦2,000", image: "images/menu/desserts/puff-pancakes.jpg", category: "desserts", orderable: true},
    {name: "Fruit Salad", description: "Fresh mixed seasonal fruits", price: "₦2,200", image: "images/menu/desserts/fruit-salad.jpg", category: "desserts", orderable: true},
    {name: "Ice Cream (2 Scoops)", description: "Choice of vanilla, chocolate, or strawberry", price: "₦2,500", image: "images/menu/desserts/ice-cream.jpg", category: "desserts", orderable: true},
    {name: "Bread Pudding", description: "Warm spiced bread pudding with custard", price: "₦2,300", image: "images/menu/desserts/bread-pudding.jpg", category: "desserts", orderable: true},
    {name: "Banana Fritters", description: "Sweet fried banana fritters", price: "₦1,800", image: "images/menu/desserts/banana-fritters.jpg", category: "desserts", orderable: true},
    {name: "Red Velvet Cake Slice", description: "Rich red velvet cake with cream cheese frosting", price: "₦2,600", image: "images/menu/desserts/red-velvet.jpg", category: "desserts", orderable: true}
];

const menuGrid = document.getElementById('menu-grid');

function renderMenu(items) {
    let html = "";

    for(let i = 0; i < items.length; i++) {
        const dish = items[i];

        html += `
            <div class="bg-white rounded-lg shadow-md overflow-hidden mt-8 hover:shadow-xl hover:translate-y-2 transition delay-150 duration-300 ease-in-out flex md:flex-col max-w-full">
                <img src="${dish.image}" alt="${dish.name}" class="w-1/2 md:w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-heading font-bold text-lg">${dish.name}</h3>
                    <p class="font-body text-sm text-gray-600 mt-2">${dish.description}</p>
                </div>
            </div>
        `;
    }
    
    menuGrid.innerHTML = html;
}

const categoryButtons = document.querySelectorAll('[data-category]');

for (let i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].addEventListener('click', function() {
        const selectedCategory = categoryButtons[i].dataset.category;

        for (let j = 0; j < categoryButtons.length; j++) {

            categoryButtons[j].classList.remove('bg-primary', 'text-white');
        }

        categoryButtons[i].classList.add('bg-primary', 'text-white');

        if(selectedCategory === 'all') {
            renderMenu(menuItems);
        } else {

                const filteredItems = menuItems.filter(function(dish) {
            return dish.category === selectedCategory;
        });
        renderMenu(filteredItems);

        }
        
    });
}

renderMenu(menuItems);
categoryButtons[0].classList.add('bg-primary', 'text-white');

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    navbar.classList.add('bg-gray-900', 'shadow-md');
  } else {
    navbar.classList.remove('bg-gray-900', 'shadow-md');
  }
});

const fixedOrderBtn = document.getElementById('fixed-order-btn');

window.addEventListener('scroll', function() {
    if (window.scrollY > 1024) {
        fixedOrderBtn.classList.remove('hidden');
    } else {
        fixedOrderBtn.classList.add('hidden');
    }
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// MODAL FOR ORDERING

let cart = [];
const categories = ["Mains", "Proteins", "Starters", "Desserts", "Drinks"];

let orderItems = [
    {name: "Jollof Rice", description: "Classic smoky jollof rice", unit: "portion", price: 1000, image: "images/order-items/mains/jollof-and-chicken.jpg", category: "Mains", orderable: true},

    {name: "Boiled Egg", description: "Perfectly boiled egg", unit: "piece", price: 400, image: "images/order-items/mains/jollof-and-chicken.jpg", category: "Proteins", orderable: true},

    {name: "Fried fish", description: "Crispy fried fish", unit: "piece", price: 1500, image: "images/order-items/mains/jollof-and-chicken.jpg", category: "Proteins", orderable: true},

    {name: "Fresh fish", description: "Tasty fresh fish", unit: "piece", price: 2500, image: "images/order-items/mains/jollof-and-chicken.jpg", category: "Proteins", orderable: true},

    {name: "Panla fish", description: "Fried Panla fish", unit: "piece", price: 1500, image: "images/order-items/mains/jollof-and-chicken.jpg", category: "Proteins", orderable: true},

    { name: "Chicken (Small)", description: "Spicy grilled chicken", unit: "piece", price: 1200, image: "images/order-items/mains/jollof-and-chicken.jpg", category: "Proteins", orderable: true },

    { name: "Chicken (Medium)", description: "Spicy grilled chicken", unit: "piece", price: 1500, image: "images/order-items/mains/jollof-and-chicken.jpg", category: "Proteins", orderable: true },

    { name: "Chicken (Large)", description: "Spicy grilled chicken", unit: "piece", price: 2000, image: "images/order-items/mains/jollof-and-chicken.jpg", category: "Proteins", orderable: true },

    { name: "Smoothie (Strawberry-Banana)", description: "Blended seasonal fruit smoothie", unit: "35CL", price: 2500, image: "images/order-items/drinks/smoothies.jpg", category: "Drinks", orderable: true },

    { name: "Smoothie (Mixed Berry)", description: "Blended seasonal fruit smoothie", unit: "35CL", price: 2500, image: "images/order-items/drinks/smoothies.jpg", category: "Drinks", orderable: true },

    { name: "Smoothie (Spinach-Banana-Kiwi)", description: "Blended seasonal fruit smoothie", unit: "35CL", price: 2500, image: "images/order-items/drinks/smoothies.jpg", category: "Drinks", orderable: true },

    { name: "Smoothie (Peach)", description: "Blended seasonal fruit smoothie", unit: "35CL", price: 2500, image: "images/order-items/drinks/smoothies.jpg", category: "Drinks", orderable: true },

    { name: "Smoothie (Peanut Butter Banana)", description: "Blended seasonal fruit smoothie", unit: "35CL", price: 2500, image: "images/order-items/drinks/smoothies.jpg", category: "Drinks", orderable: true },

    {name: "Peppered Snails", description: "Tender snails tossed in a spicy pepper sauce", unit: "plate", price: 3500, image: "images/order-items/starters/peppered-snail.jpg", category: "Starters", orderable: true},

    {name: "Puff Puff Bites", description: "Sweet fried dough bites served warm", unit: "portion", price: 1500, image: "images/order-items/starters/puff-puff.jpg", category: "Starters", orderable: true},

    {name: "Chicken Spring Rolls", description: "Crispy rolls filled with seasoned chicken and vegetables",unit: "piece", price: 2500, image: "images/order-items/starters/chicken-spring-rolls.jpg", category: "Starters", orderable: true},

    {name: "Fish Small Chops", description: "Assorted bite-sized fried fish and sides",unit: "portion", price: 3000, image: "images/order-items/starters/small-chops.jpg", category: "Starters", orderable: true},

    {name: "Moi Moi", description: "Steamed bean pudding with egg and fish",unit: "piece", price: 800, image: "images/order-items/starters/moi-moi.webp", category: "Starters", orderable: true},

    {name: "Grilled Prawns", description: "Charred prawns in garlic butter sauce",unit: "portion", price: 4000, image: "images/order-items/starters/grilled-prawn.jpg", category: "Starters", orderable: true},

    {name: "Vegetable Samosa", description: "Crispy pastry filled with spiced vegetables",unit: "portion", price: 1800, image: "images/order-items/starters/vegetable-samosa.jpg", category: "Starters", orderable: true},

    {name: "Pepper Soup (Goat Meat)", description: "Spicy traditional broth with tender goat meat",unit: "portion", price: 3200, image: "images/order-items/starters/goat-peppersoup.jpg", category: "Starters", orderable: true},

    {name: "Suya Skewers", description: "Grilled spiced beef skewers with onions and tomatoes",unit: "stick", price: 2000, image: "images/order-items/starters/suya-skewers.jpg", category: "Starters", orderable: true},

    {name: "Fried Rice", description: "Nigerian-style fried rice",unit: "portion", price: 1000, image: "images/order-items/mains/fried-rice-beef.jpg", category: "Mains", orderable: true},

    {name: "Beef", description: "Tender beef",unit: "piece", price: 2000, image: "images/order-items/mains/fried-rice-beef.jpg", category: "Proteins", orderable: true},

    { name: "Eba (with soup)", description: "Specify soup: Egusi, Ogbono, Afang, or Efo Riro", unit: "wrap", price: 500, image: "images/order-items/mains/pounded-yam-egusi.jpg", category: "Mains", orderable: true },

    { name: "Pounded Yam (with soup)", description: "Specify soup: Egusi, Ogbono, Afang, or Efo Riro", unit: "wrap", price: 500, image: "images/order-items/mains/pounded-yam-egusi.jpg", category: "Mains", orderable: true },

    { name: "Amala (with soup)", description: "Specify soup: Egusi, Ogbono, Afang, or Efo Riro", unit: "wrap", price: 500, image: "images/order-items/mains/pounded-yam-egusi.jpg", category: "Mains", orderable: true },

    { name: "Semo (with soup)", description: "Specify soup: Egusi, Ogbono, Afang, or Efo Riro", unit: "wrap", price: 500, image: "images/order-items/mains/pounded-yam-egusi.jpg", category: "Mains", orderable: true },

    {name: "Grilled Tilapia & Plantain", description: "Whole grilled fish served with fried plantain",unit: "portion", price: 5500, image: "images/order-items/mains/grilled-tilapia-plantain.jpg", category: "Mains", orderable: true},

    {name: "Ofada Rice & Ayamase Sauce", description: "Local rice with spicy green pepper stew",unit: "portion", price: 4800, image: "images/order-items/mains/ofada-ayamase.jpg", category: "Mains", orderable: true},

    {name: "Beef Suya Platter", description: "Grilled beef suya with onions, cabbage, and sauce",unit: "portion", price: 5200, image: "images/order-items/mains/pounded-yam-egusi.jpg", category: "Mains", orderable: true},

    {name: "Chicken Alfredo Pasta", description: "Creamy pasta with grilled chicken strips",unit: "portion", price: 5000, image: "images/order-items/mains/alfredo-pasta.jpg", category: "Mains", orderable: true},

    {name: "Grilled Chicken & Chips", description: "Continental-style grilled chicken with fries",unit: "portion", price: 4500, image: "images/order-items/mains/chicken-chips.jpg", category: "Mains", orderable: true},

    {name: "Chapman", description: "Classic Nigerian fruit cocktail, non-alcoholic",unit: "bottle", price: 2000, image: "images/order-items/drinks/chapman.jpg", category: "Drinks", orderable: true},

    {name: "Zobo", description: "Chilled hibiscus drink with ginger and fruit",unit: "bottle", price: 1500, image: "images/order-items/drinks/zobo.jpg", category: "Drinks", orderable: true},

    {name: "Fresh Orange Juice", description: "Freshly squeezed orange juice",unit: "bottle", price: 1800, image: "images/order-items/drinks/orange-juice.jpg", category: "Drinks", orderable: true},

    {name: "Chilled Palm Wine", description: "Traditional fresh palm wine, served cold",unit: "bottle", price: 2200, image: "images/order-items/drinks/palm-wine.jpeg", category: "Drinks", orderable: true},

    { name: "Soft Drink (Pepsi)", description: "Chilled bottled soft drink", unit: "bottle", price: 1000, image: "images/order-items/drinks/soft-drink.jpg", category: "Drinks", orderable: true },

    { name: "Soft Drink (Coca-Cola)", description: "Chilled bottled soft drink", unit: "bottle", price: 1000, image: "images/order-items/drinks/soft-drink.jpg", category: "Drinks", orderable: true },

    { name: "Soft Drink (Fanta)", description: "Chilled bottled soft drink", unit: "bottle", price: 1000, image: "images/order-items/drinks/soft-drink.jpg", category: "Drinks", orderable: true },

    { name: "Soft Drink (Sprite)", description: "Chilled bottled soft drink", unit: "bottle", price: 1000, image: "images/order-items/drinks/soft-drink.jpg", category: "Drinks", orderable: true },

    {name: "Iced Tea", description: "Refreshing chilled tea with lemon",unit: "bottle", price: 1800, image: "images/order-items/drinks/ice-tea.jpg", category: "Drinks", orderable: true},

    {name: "Sparkling Water", description: "Chilled sparkling mineral water",unit: "bottle", price: 1200, image: "images/order-items/drinks/sparkling-water.jpg", category: "Drinks", orderable: true},

    {name: "Ginger Shot", description: "Concentrated fresh ginger juice shot",unit: "bottle", price: 1500, image: "images/order-items/drinks/ginger-shots.jpg", category: "Drinks", orderable: true},

    {name: "Chin Chin", description: "Crunchy sweet fried pastry bites",unit: "portion", price: 1200, image: "images/order-items/desserts/chinchin.jpg", category: "Desserts", orderable: true},

    {name: "Coconut Candy", description: "Sweet chewy coconut treats",unit: "portion", price: 1000, image: "images/order-items/desserts/coconut-candy.jpg", category: "Desserts", orderable: true},

    {name: "Chocolate Lava Cake", description: "Warm cake with a molten chocolate center",unit: "piece", price: 2800, image: "images/order-items/desserts/chocolate-lava-cake.jpg", category: "Desserts", orderable: true},

    {name: "Puff Pancake with Honey", description: "Soft pancakes drizzled with honey",unit: "piece", price: 2000, image: "images/order-items/desserts/puff-pancakes.jpg", category: "Desserts", orderable: true},

    {name: "Fruit Salad", description: "Fresh mixed seasonal fruits",unit: "portion", price: 2200, image: "images/order-items/desserts/fruit-salad.jpg", category: "Desserts", orderable: true},

    {name: "Ice Cream (2 Scoops)", description: "Choice of vanilla, chocolate, or strawberry",unit: "portion", price: 2500, image: "images/order-items/desserts/ice-cream.jpg", category: "Desserts", orderable: true},

    {name: "Bread Pudding", description: "Warm spiced bread pudding with custard",unit: "piece", price: 2300, image: "images/order-items/desserts/bread-pudding.jpg", category: "Desserts", orderable: true},

    {name: "Banana Fritters", description: "Sweet fried banana fritters",unit: "piece", price: 1800, image: "images/order-items/desserts/banana-fritters.jpg", category: "Desserts", orderable: true},

    {name: "Red Velvet Cake Slice", description: "Rich red velvet cake with cream cheese frosting",unit: "piece", price: 2600, image: "images/order-items/desserts/red-velvet.jpg", category: "Desserts", orderable: true}
];
function openOrderModal() {
    if (document.getElementById("order-modal")) return;
    document.body.style.overflow = 'hidden';
    let modalHtml = "";

    let tabsHtml = "";
    for(let i = 0; i < categories.length; i++) {
        tabsHtml += `<button data-category="${categories[i]}" class="order-tab-btn border border-primary p-3 w-full font-bold font-body text-primary cursor-pointer">${categories[i]}</button>`
    }

    modalHtml = `<div id="order-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-md max-w-full">
                        <div class="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl h-3/4 flex flex-col overflow-hidden">
                            <div id="modal-nav" class="sticky top-0 z-50">
                                <div class="flex items-center justify-between text-2xl mb-5 text-primary">
                                    <button id="close-order-modal">&times;</button>
                                    <div class="font-heading font-bold text-xl">Savora</div>
                                    <button id="order-cart-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </button>
                                </div>
                                <div id="tabs-wrapper" class="relative border-y-1 border-primary border-x-2 flex items-center justify-between overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full rounded-md mb-5">
                                    ${tabsHtml}
                                    <div class="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                            <div id="order-menu-grid" class="overflow-y-auto"></div>
                            <div id="cart-review-panel" class="hidden flex-1 overflow-y-auto"></div>
                            <div id="cart-review-actions" class="hidden"></div>
                            <div id="checkout-panel" class="hidden flex-1 overflow-y-auto"></div>
                            <div id="order-cart-footer" class="hidden h-50 text-primary"></div>
                        </div>
                </div>`;

    document.body.insertAdjacentHTML("beforeend", modalHtml);

    renderOrderMenu();

    const orderTabBtn = document.querySelectorAll('.order-tab-btn');

    orderTabBtn[0].classList.add("active-tab");
    orderTabBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedCategory = this.dataset.category;
            const categoryItems = document.querySelectorAll('[data-category-panel]');
            for(let i = 0; i < categoryItems.length; i++) {
                categoryItems[i].classList.add('hidden');
            }
            const activePanel = document.querySelector(`[data-category-panel="${selectedCategory}"]`);
            activePanel.classList.remove('hidden');


            for(let j = 0; j < orderTabBtn.length; j++) {
                orderTabBtn[j].classList.remove("active-tab")
            }

            this.classList.add("active-tab");
        });
    });
    function closeOrderModal() {
        const orderModal = document.getElementById('order-modal');
        orderModal.remove();
        document.body.style.overflow = '';
    };

    document.getElementById('close-order-modal').addEventListener('click', closeOrderModal);

    const tabsWrapper = document.getElementById('tabs-wrapper');
    const scrollFade = tabsWrapper.querySelector('.absolute');

    tabsWrapper.addEventListener('scroll', function() {
        const isAtEnd = tabsWrapper.scrollLeft + tabsWrapper.clientWidth >= tabsWrapper.scrollWidth - 1;

        if (isAtEnd) {
            scrollFade.classList.add('hidden');
        } else {
            scrollFade.classList.remove('hidden');
        }
    });
};

// openOrderModal();

document.querySelectorAll(".order-now-btn").forEach(btn => {
     btn.addEventListener("click", openOrderModal);
});

function renderOrderMenu() {
    const orderMenuGrid = document.getElementById("order-menu-grid");
    let menuHtml = "";

    for(let c = 0; c < categories.length; c++) {
        const category = categories[c];
        const categoryItems = orderItems.filter(item => item.category === category);

        menuHtml += `<div data-category-panel="${category}" class="${c === 0 ? '' : 'hidden'}">`;

        for (let i = 0; i < categoryItems.length; i++) {
            const item = categoryItems[i];

                menuHtml += `
                    <div class="bg-white mb-3 shadow-lg rounded-lg h-35 relative">
                        <div class="flex  gap-2 h-full">
                            <div class="max-w-1/3 h-full">
                                <img src="${item.image}" alt="${item.name}" class="max-w-full h-full object-cover rounded-l-lg">
                            </div>

                            <div class="flex flex-col h-2/3">
                                <h4 class="text-primary font-bold leading-none mt-1 mb-1">${item.name}</h4>
                                <p class="leading-none">${item.description}</p>
                                <span class="mt-2"><span class="text-primary">₦${item.price}</span>/${item.unit}</span>

                                <div class="absolute bottom-2 right-5 flex items-center gap-3">
                                    <span class="text-primary">Quantity : </span>
                                    <button class="decrease-btn text-2xl text-primary border px-2 rounded-md w-8 h-8 active:bg-primary active:text-white cursor-pointer" data-name="${item.name}">-</button>
                                    <span class="quantity text-lg text-primary" data-name="${item.name}">0</span>
                                    <button class="increase-btn text-lg text-primary border px-2 rounded-md w-8 h-8 active:bg-primary active:text-white cursor-pointer" data-name="${item.name}">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        };
        menuHtml += `</div>`;
    };

    orderMenuGrid.innerHTML = menuHtml;

    const increaseBtn = orderMenuGrid.querySelectorAll('.increase-btn');
    increaseBtn.forEach(btn => {
        btn.addEventListener('click', function() {
           const clickedItemName = this.dataset.name;
           increaseQuantity(clickedItemName);
        });
    });

    const decreaseBtn = orderMenuGrid.querySelectorAll('.decrease-btn');
    decreaseBtn.forEach(btn => {
        btn.addEventListener('click', function() {
           const clickedItemName = this.dataset.name;
           decreaseQuantity(clickedItemName);
        });
    });
};

function increaseQuantity(itemName) {
    const itemData = orderItems.find(item => item.name === itemName);

    const existingItem = cart.find(item => item.name === itemName);

    if(existingItem){
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.unitPrice;
        document.querySelectorAll(`.quantity[data-name="${itemName}"]`).forEach(el => {
        el.textContent = existingItem.quantity;
        });
        document.querySelectorAll(`.line-total[data-name="${itemName}"]`).forEach(el => {
        el.textContent = `₦${existingItem.total}`;
        });
        document.querySelectorAll(`.line-qty[data-name="${itemName}"]`).forEach(el => {
        el.textContent = `Qty: ${existingItem.quantity}`;
        });
    } else {
        cart.push({
            name: itemData.name,
            unit: itemData.unit,
            quantity: 1,
            unitPrice: itemData.price,
            total: itemData.price
        });

        document.querySelectorAll(`.quantity[data-name="${itemName}"]`).forEach(el => {
        el.textContent = 1;
        });

        document.querySelectorAll(`.line-total[data-name="${itemName}"]`).forEach(el => {
        el.textContent = `₦${existingItem.total}`;
        });
        document.querySelectorAll(`.line-qty[data-name="${itemName}"]`).forEach(el => {
        el.textContent = 1;
        });
    };
    renderCartReview()
    updateCartFooter();
};

function decreaseQuantity(itemName) {
    const itemData = orderItems.find(item => item.name === itemName);

    const existingItem = cart.find(item => item.name === itemName);

    if(!existingItem) return;

    if(existingItem.quantity > 1){
        existingItem.quantity -= 1;
        existingItem.total = existingItem.quantity * existingItem.unitPrice;
        document.querySelectorAll(`.quantity[data-name="${itemName}"]`).forEach(el => {
        el.textContent = existingItem.quantity;
        });

        document.querySelectorAll(`.line-total[data-name="${itemName}"]`).forEach(el => {
        el.textContent = `₦${existingItem.total}`;
        });

        document.querySelectorAll(`.line-qty[data-name="${itemName}"]`).forEach(el => {
        el.textContent = `Qty: ${existingItem.quantity}`;
        });
    } else {
        cart = cart.filter(item => item.name !== itemName);
        document.querySelectorAll(`.quantity[data-name="${itemName}"]`).forEach(el => {
        el.textContent = 0;
        });

        document.querySelectorAll(`.line-total[data-name="${itemName}"]`).forEach(el => {
        el.textContent = `₦0`;
        });

        document.querySelectorAll(`.line-qty[data-name="${itemName}"]`).forEach(el => {
        el.textContent = `₦0`;
        });
};
    renderCartReview()
    updateCartFooter();
};

function updateCartFooter() {
    const orderCartFooter = document.getElementById("order-cart-footer");

    const totalUnits = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.total, 0);
    const cartReviewPanel = document.getElementById('cart-review-panel');

    let itemLines = "";
    for(let i = 0; i < cart.length; i++){
        const item = cart[i];
        itemLines += `<div>${item.name}/${item.unit}: ${item.quantity}</div>`;
    }

    let cartHtml = `
                    <div class="flex justify-between items-center border-t border-primary pt-4 mt-2">
                        <span class="text-lg font-bold">Total</span>
                        <span class="text-xl font-bold text-primary">₦${totalPrice}</span>
                    </div>

                    <div class="flex flex-col gap-3 mt-4 w-full">
                        <button id="view-cart-btn" class="bg-primary text-white font-bold py-3 rounded-lg cursor-pointer">View Cart</button>
                    </div>
                    `;

    orderCartFooter.innerHTML = cartHtml;

    document.getElementById('view-cart-btn').addEventListener('click', function() {
        document.getElementById('tabs-wrapper').classList.add('hidden');
        document.getElementById('order-menu-grid').classList.add('hidden');
        document.getElementById('cart-review-panel').classList.remove('hidden');
        document.getElementById('order-cart-footer').classList.add('hidden');
        document.getElementById('cart-review-actions').classList.remove('hidden');
        renderCartReview();
    });

    if(cartReviewPanel.classList.contains('hidden')) {
        if (cart.length >= 1) {
            orderCartFooter.classList.remove("hidden");
        } else {
        orderCartFooter.classList.add("hidden");
        }
    } else {
        orderCartFooter.classList.add("hidden");
    };
};

function renderCartReview() {
    const cartReviewPanel = document.getElementById('cart-review-panel');
    const totalPrice = cart.reduce((total, item) => total + item.total, 0);
    let reviewHtml = "";

    for(let i = 0; i < cart.length; i++) {
        const item = cart[i];
        reviewHtml += `<div class="flex items-center justify-between bg-white shadow-md rounded-lg p-3 mb-3">
                        <div class="flex flex-col">
                            <span class="font-bold text-primary">${item.name}/${item.unit}</span>
                            <span class="line-qty text-sm text-gray-500" data-name="${item.name}">Qty: ${item.quantity}</span>
                        </div>

                        <div class="flex items-center gap-3">
                            <button class="decrease-btn text-2xl text-primary border px-2 rounded-md w-8 h-8 active:bg-primary active:text-white cursor-pointer" data-name="${item.name}">-</button>
                            <span class="quantity text-lg text-primary font-bold" data-name="${item.name}">${item.quantity}</span>
                            <button class="increase-btn text-lg text-primary border px-2 rounded-md w-8 h-8 active:bg-primary active:text-white cursor-pointer" data-name="${item.name}">+</button>
                        </div>

                        <span class="line-total font-bold text-primary" data-name="${item.name}">₦${item.total}</span>
                    </div>`
    };

   const cartReviewActions = document.getElementById('cart-review-actions');

   let reviewFooter = `
        <div class="flex justify-between items-center border-t border-primary pt-4 mt-2">
            <span class="text-lg font-bold">Total</span>
            <span class="text-xl font-bold text-primary">₦${totalPrice}</span>
        </div>

        <div class="flex flex-col gap-3 mt-4 w-full">
            <button id="proceed-to-checkout" class="bg-primary text-white font-bold py-3 rounded-lg cursor-pointer">Proceed to Checkout</button>
            <button id="continue-shopping" class="border border-primary text-primary font-bold py-3 rounded-lg cursor-pointer">Continue Shopping</button>
        </div>`

    cartReviewPanel.innerHTML = reviewHtml;
    cartReviewActions.innerHTML = reviewFooter;

    document.getElementById('continue-shopping').addEventListener('click', function() {
        document.getElementById('tabs-wrapper').classList.remove('hidden');
        document.getElementById('order-menu-grid').classList.remove('hidden');
        document.getElementById('cart-review-actions').classList.add('hidden');
        document.getElementById('order-cart-footer').classList.remove('hidden');
        document.getElementById('cart-review-panel').classList.add('hidden');
    })

    document.getElementById('proceed-to-checkout').addEventListener('click', function() {
        document.getElementById('cart-review-panel').classList.add('hidden');
        document.getElementById('cart-review-actions').classList.add('hidden');
        document.getElementById('checkout-panel').classList.remove('hidden');
        renderCheckoutForm();
    });

    const increaseBtn = cartReviewPanel.querySelectorAll('.increase-btn');
    increaseBtn.forEach(btn => {
        btn.addEventListener('click', function() {
           const clickedItemName = this.dataset.name;
           increaseQuantity(clickedItemName);
        });
    });

    const decreaseBtn = cartReviewPanel.querySelectorAll('.decrease-btn');
    decreaseBtn.forEach(btn => {
        btn.addEventListener('click', function() {
           const clickedItemName = this.dataset.name;
           decreaseQuantity(clickedItemName);
        });
    });
};

function renderCheckoutForm() {
    const checkoutPanel = document.getElementById('checkout-panel');
    const totalPrice = cart.reduce((total, item) => total + item.total, 0);
    let checkoutHtml = "";

    checkoutHtml += `
                    <div class="min-h-100">
                        <h2 class="text-primary font-bold text-xl text-center mb-4">Order Form</h2>
                        <div class="flex text-primary justify-between mb-2">
                            <div id="back-to-cart" class="cursor-pointer">Back</div>
                            <div>Order Total: ₦${totalPrice}</div>
                        </div>

                        <div class="flex flex-col">
                            <label class="text-primary font-bold text-lg">Name:</label>
                            <input required id="checkout-name" type="text" placeholder="Enter your name here" class="p-2 border border-primary mb-3 text-primary focus:outline focus focus:outline-primary rounded-lg">

                            <label class="text-primary font-bold text-lg">Phone:</label>
                            <input required id="checkout-phone" type="tel" placeholder="Enter your phone number here" class="p-2 border border-primary mb-3 text-primary focus:outline focus focus:outline-primary rounded-lg">

                            <label class="text-primary font-bold text-lg">Address:</label>
                            <input required id="checkout-address" type="text" placeholder="Enter your address here" class="p-2 border border-primary mb-3 text-primary focus:outline focus focus:outline-primary rounded-lg">

                            <label class="text-primary font-bold text-lg">Additional Notes(Optional):</label>
                            <textarea id="checkout-notes" placeholder="Did you pick Swallow? Specify the soup you want" class="p-2 border border-primary mb-3 text-primary focus:outline focus focus:outline-primary rounded-lg h-40"></textarea>

                            <button id="send-order" class="text-white bg-primary font-bold py-3 rounded-lg cursor-pointer">Send order to Whatsapp</button>
                        </div>
                    </div>    
                    `

    checkoutPanel.innerHTML = checkoutHtml;

    document.getElementById('back-to-cart').addEventListener('click', function() {
        document.getElementById('checkout-panel').classList.add('hidden');
        document.getElementById('cart-review-panel').classList.remove('hidden');
        document.getElementById('cart-review-actions').classList.remove('hidden');
    });

    document.getElementById('send-order').addEventListener('click', function() {
        const customerName = document.getElementById('checkout-name').value;
        const customerPhone = document.getElementById('checkout-phone').value;
        const customerAddress = document.getElementById('checkout-address').value;
        const customerNotes = document.getElementById('checkout-notes').value;
        const totalPrice = cart.reduce((total, item) => total + item.total, 0);

        if(customerName === "" || customerPhone === "" || customerAddress === "") {
            alert('Please fill in all required fields');
            return;
        };

        let cartSummaryHtml = "";
        let orderMessage = `
                            🛒 NEW ORDER\n\n
                            👤 Customer: ${customerName}\n
                            📞 Phone: ${customerPhone}\n
                            📍 Location: ${customerAddress}\n
                            ITEMS:\n
                            `;

        for(let i = 0; i < cart.length; i++) {
            const item = cart[i];

            cartSummaryHtml += `
                                ${item.name}/${item.unit}\n
                                Quantity: ${item.quantity}\n
                                Unit Price: ${item.unitPrice}\n
                                Cost: ₦${item.total}\n
                                `
        };

        orderMessage += cartSummaryHtml;
        orderMessage += `
                            TOTAL: ₦${totalPrice}\n
                            Notes: ${customerNotes === "" ? "None" : customerNotes}
                        `
        
        const encodedMessage = encodeURIComponent(orderMessage);
        const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    });
};