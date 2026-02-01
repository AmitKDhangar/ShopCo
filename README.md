🛍️ Shop.co ( React + Redux Toolkit)
===================================

**Developed by Amit & Abhivansh Pal**

Shop.co is a simple and modern e-commerce web app built with **React** and **Redux Toolkit**. It demonstrates how to manage a shopping cart and product listings efficiently using global state management.

* * * * *

✅ Features
----------

-   Product listing with images and price

-   Add to cart, remove from cart, and update quantity

-   Global state handling with Redux Toolkit

-   Responsive design for desktop & mobile

-   Clean and modular code structure

* * * * *

👥 Collaboration
----------------

-   **Amit** -- React components, UI & routing

-   **Abhivansh Pal** -- Redux Toolkit store & state management

* * * * *

🛠 Tech Stack
-------------

-   **React 18+**

-   **Redux Toolkit + React-Redux**

-   **CSS / Tailwind CSS** (based on setup)

-   **Fake Store API / Local JSON** for products

* * * * *

📂 Project Structure
--------------------

bash
```
Shop.co/
│
├── src/
│   ├── app/          # Redux store setup
│   ├── features/     # Redux slices (products, cart)
│   ├── components/   # Reusable components (Navbar, ProductCard)
│   ├── pages/        # Pages (Home, Cart)
│   ├── App.js        # Root component
│   └── index.js      # Entry point
```

* * * * *

⚙️ Installation
---------------

1.  **Clone & Open Project**

bash

```

git clone https://github.com/your-username/Shop.co.git
cd Shop.co
```
1.  **Install Packages**

bash

```

npm install
```
1.  **Run Development Server**

bash
```

npm run dev
```
Then open <http://localhost:5173> (if using Vite).

* * * * *

🛒 How It Works
---------------

1.  Products are loaded into the Redux store.

2.  Users add/remove items to the cart.

3.  Cart slice updates total items & price automatically.

4.  Components update instantly using `useSelector` & `useDispatch`.

* * * * *

🚀 Future Improvements
----------------------

-   Search & product filters

-   Checkout & payment integration

-   User authentication

-   Wishlist & dark mode

* * * * *

🤝 Contributing
---------------

1.  **Fork** the repo

2.  **Create a branch** -- `git checkout -b feature-branch`

3.  **Commit changes** -- `git commit -m "Added feature"`

4.  **Push & submit PR**

* * * * *

📝 License
----------

This project is licensed under the **MIT License**.

* * * * *

### ✨ Credits

-   **Amit** -- UI & React setup

-   **Abhivansh Pal** -- Redux Toolkit logic
