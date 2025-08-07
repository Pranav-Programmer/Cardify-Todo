# CardifyTodo

**A responsive, card-based To-Do List built with React class components.**

---

## 🚀 Features

- **Add / Edit / Delete** tasks with:
  - **Title**, **Body** (multi-line), **Date**, **From/To** times  
- **Done** button dims completed cards  
- **4 cards per row** on desktop, **2** on tablet, **1** on mobile  
- **Scroll-inside** cards (hidden scrollbars)  
- **Light / Dark** themes  
- **Persisted** in `localStorage`

---

## 🛠️ Installation & Dev

1. Clone the repo  
   ```bash
   git clone https://github.com/USERNAME/REPO.git
   cd REPO
  
2. Install dependencies
   ```bash
   npm install

3. Start the development server
   ```bash
   npm start

🔧 How It Works
State lives in React class components (this.state).
Tasks are loaded/saved to localStorage under key todo_app_items.
Responsive layout via CSS Grid + media queries.
Hidden scrollbars allow overflowing card bodies to scroll without showing bars.
   
