var recipes = [
    {
      title: "Lasagna Bolognese",
      description: "Layered Italian pasta with rich meat sauce and béchamel",
      image: "images/photo-1574894709920-11b28e7367e3.avif",
      rating: 4.9,
      reviews: 478,
      level: "Intermediate",
      cuisine: "Italian",
      prepTime: "30 min",
      cookTime: "90 min",
      servings: "4 people",
      warning: "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
      ingredients: [
        "12 lasagna sheets",
        "500g ground beef",
        "400g canned tomatoes",
        "1 onion, diced",
        "2 carrots, diced",
        "500ml béchamel sauce",
        "200g mozzarella, grated",
        "100g parmesan cheese",
        "Fresh basil"
      ],
      instructions: [
        "Heat oil in a large pot. Sauté onion until soft, add garlic and cook for 1 minute.",
        "Add ground beef and cook until browned.",
        "Pour in canned tomatoes and simmer for 20 minutes.",
        "Layer lasagna sheets, meat sauce, and béchamel in a baking dish.",
        "Top with mozzarella and parmesan, bake at 180°C for 45 minutes."
      ],
      nutrition: {
        calories: "520 kcal",
        protein: "28g",
        carbs: "45g",
        fat: "24g",
        fiber: "4g",
        sodium: "620mg"
      },
      chefTips: [
        "Let the lasagna rest for 10 minutes before slicing.",
        "Use fresh pasta sheets for a softer texture.",
        "Add a pinch of nutmeg to the béchamel for extra flavor.",
        "Cover with foil for the first 30 minutes of baking to avoid burning."
      ]
    },
    {
      title: "Chicken Alfredo",
      description: "Creamy pasta with grilled chicken and parmesan",
      image: "images/photo-1603133872878-684f208fb84b.avif",
      rating: 4.7,
      reviews: 312,
      level: "Easy",
      cuisine: "Italian",
      prepTime: "15 min",
      cookTime: "25 min",
      servings: "3 people",
      warning: "Sauce can separate if overcooked, keep heat low!",
      ingredients: [
        "300g fettuccine pasta",
        "2 chicken breasts",
        "200ml heavy cream",
        "100g parmesan cheese",
        "3 garlic cloves",
        "2 tbsp butter",
        "Salt and pepper"
      ],
      instructions: [
        "Cook fettuccine according to package instructions.",
        "Season and grill chicken breasts, then slice.",
        "Melt butter, sauté garlic, add cream and simmer.",
        "Stir in parmesan until sauce thickens.",
        "Combine pasta, sauce, and chicken. Serve hot."
      ],
      nutrition: {
        calories: "610 kcal",
        protein: "35g",
        carbs: "52g",
        fat: "28g",
        fiber: "2g",
        sodium: "540mg"
      },
      chefTips: [
        "Use freshly grated parmesan for a smoother sauce.",
        "Don't boil the cream, keep heat medium-low.",
        "Reserve some pasta water to adjust sauce thickness.",
        "Add black pepper generously for authentic flavor."
      ]
    },
    {
      title: "Vegetable Curry",
      description: "Rich coconut curry loaded with seasonal vegetables",
      image: "images/photo-1585032226651-759b368d7246.avif",
      rating: 4.8,
      reviews: 356,
      level: "Easy",
      cuisine: "Indian",
      prepTime: "20 min",
      cookTime: "30 min",
      servings: "4 people",
      warning: "Contains coconut milk, adjust for allergies.",
      ingredients: [
        "2 potatoes, cubed",
        "2 carrots, sliced",
        "1 cauliflower, chopped",
        "1 can chickpeas",
        "400ml coconut milk",
        "2 tbsp curry powder",
        "1 onion, diced",
        "2 garlic cloves",
        "Fresh spinach"
      ],
      instructions: [
        "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
        "Add potatoes and carrots, cook for 5 minutes.",
        "Pour in coconut milk and 1 cup water. Bring to simmer.",
        "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
        "Stir in fresh spinach and cook until wilted."
      ],
      nutrition: {
        calories: "380 kcal",
        protein: "14g",
        carbs: "48g",
        fat: "16g",
        fiber: "12g",
        sodium: "480mg"
      },
      chefTips: [
        "Add vegetables in order of cooking time needed",
        "Adjust curry powder amount to taste",
        "Use full-fat coconut milk for creamier curry",
        "Add protein like tofu or paneer if desired"
      ]
    }
  ];
  var currentRecipe = recipes[0];
  function renderIngredients(recipe) {
    document.getElementById("recipeIngredients").innerHTML = recipe.ingredients
      .map(
        (item, index) => `
        <li class="d-flex align-items-center gap-3 py-2">
          <span
            class="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold"
            style="width: 26px; height: 26px; font-size: 0.8rem"
            >${index + 1}</span
          >
          ${item}
        </li>`
      )
      .join("");
  }
  function renderInstructions(recipe) {
    document.getElementById("recipeInstructions").innerHTML = recipe.instructions
      .map(
        (step, index) => `
        <li class="d-flex align-items-start gap-3 py-2">
          <span
            class="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold flex-shrink-0"
            style="width: 30px; height: 30px; font-size: 0.85rem"
            >${index + 1}</span
          >
          <span>${step}</span>
        </li>`
      )
      .join("");
  }
  function renderNutrition(recipe) {
    const n = recipe.nutrition;
    const items = [
      { label: "Calories", value: n.calories, icon: "fa-fire", bg: "bg-danger-subtle", color: "text-danger" },
      { label: "Protein", value: n.protein, icon: "fa-dumbbell", bg: "bg-primary-subtle", color: "text-primary" },
      { label: "Carbohydrates", value: n.carbs, icon: "fa-wheat-awn", bg: "bg-warning-subtle", color: "text-warning" },
      { label: "Fat", value: n.fat, icon: "fa-droplet", bg: "bg-danger-subtle", color: "text-danger" },
      { label: "Fiber", value: n.fiber, icon: "fa-seedling", bg: "bg-success-subtle", color: "text-success" },
      { label: "Sodium", value: n.sodium, icon: "fa-cube", bg: "bg-danger-subtle", color: "text-danger" }
    ];

    document.getElementById("recipeNutrition").innerHTML = items
      .map(
        (item) => `
        <div class="col-6">
          <div class="d-flex align-items-center gap-3 bg-light rounded-3 p-3">
            <div
              class="${item.bg} ${item.color} rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style="width: 36px; height: 36px"
            >
              <i class="fa-solid ${item.icon}"></i>
            </div>
            <div class="d-flex justify-content-between align-items-center w-100">
              <span class="text-muted">${item.label}</span>
              <span class="fw-bold">${item.value}</span>
            </div>
          </div>
        </div>`
      )
      .join("");
  }
  function renderChefTips(recipe) {
    document.getElementById("recipeChefTips").innerHTML = recipe.chefTips
      .map(
        (tip) => `
        <div class="d-flex align-items-center gap-3 bg-warning-subtle border-start border-warning border-4 rounded-3 p-3 mb-2">
          <div
            class="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
            style="width: 26px; height: 26px"
          >
            <i class="fa-solid fa-check small"></i>
          </div>
          <span>${tip}</span>
        </div>`
      )
      .join("");
  }
  function renderRecipe(recipe) {
    currentRecipe = recipe;

    document.getElementById("recipeImage").src = recipe.image;
    document.getElementById("recipeImage").alt = recipe.title;
    document.getElementById("recipeRating").textContent = recipe.rating;
    document.getElementById("recipeReviews").textContent = `(${recipe.reviews} reviews)`;
    document.getElementById("recipePrepTime").textContent = recipe.prepTime;
    document.getElementById("recipeCookTime").textContent = recipe.cookTime;
    document.getElementById("recipeServings").textContent = recipe.servings;
    document.getElementById("recipeLevel").textContent = recipe.level;
    document.getElementById("recipeCuisine").textContent = recipe.cuisine;
    document.getElementById("recipeTitle").textContent = recipe.title;
    document.getElementById("recipeDescription").textContent = recipe.description;
    document.getElementById("recipeWarning").textContent = recipe.warning;

    renderIngredients(recipe);
    renderInstructions(recipe);
    renderNutrition(recipe);
    renderChefTips(recipe);

    switchTab("ingredients");
  }
  function switchTab(tabName) {
    document.querySelectorAll(".tab-pane").forEach((pane) => {
      pane.classList.add("d-none");
    });
    document.getElementById(`tab-${tabName}`).classList.remove("d-none");

    document.querySelectorAll(".tab-link").forEach((link) => {
      link.classList.remove("active", "text-danger", "fw-bold");
      link.classList.add("text-dark");
    });
    const activeLink = document.querySelector(`.tab-link[data-tab="${tabName}"]`);
    activeLink.classList.add("active", "text-danger", "fw-bold");
    activeLink.classList.remove("text-dark");
  }
  function showRandomRecipe() {
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    renderRecipe(randomRecipe);
  }
  document.querySelectorAll(".tab-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab(link.dataset.tab);
    });
  });
  window.addEventListener("DOMContentLoaded", showRandomRecipe);
  document.getElementById("tryAnotherBtn").addEventListener("click", showRandomRecipe);