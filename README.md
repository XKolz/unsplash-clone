# **Unsplash Mini Clone**

This is a Vue 3 project that replicates Unsplash's image display using the Unsplash API. It allows users to view a grid of African-themed images, search for other images, and view full-resolution images in a modal.

## **Features**

✅ **Vue 3 with Composition API**  
✅ **Fetch images using Unsplash API**  
✅ **Lazy loading with skeleton placeholders**  
✅ **CSS Grid & Flexbox for layout**  
✅ **CSS animations and transitions**  
✅ **SCSS with CSS Variables**  
✅ **Modal for viewing full-resolution images**  
✅ **Fully responsive design**

---

## **Demo**

🚀 **Live Preview:** https://unsplash-min-clone.netlify.app/

---

## **Installation & Setup**

### **1. Clone the repository**

```sh
git clone https://github.com/yourusername/unsplash-clone.git
cd unsplash-clone
```

### **2. Install dependencies**

```sh
npm install
```

### **3. Set up environment variables**

Create a `.env` file in the root directory and add your Unsplash API key:

```
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

### **4. Run the project**

```sh
npm run dev
```

---

## **Project Structure**

```
/src
  /components
    - SearchBar.vue        # Handles user search input
    - ImageGrid.vue        # Displays images in a responsive grid
    - ImageCard.vue        # Renders individual images with overlay and details
    - ImageModal.vue       # Displays full-size image in a modal
  /views
    - Home.vue             # Main page layout
  /styles
    - main.scss            # Global SCSS styles
  main.js                  # Vue application entry point
  App.vue                  # Root component
```

---

## **Technologies Used**

- **Vue 3 + Vite** for frontend framework
- **Axios** for making API requests
- **SCSS** for styling
- **CSS Grid & Flexbox** for layout
- **CSS animations & transitions** for a smooth UI

---

## **API Reference**

This project uses the **Unsplash API** to fetch random images.

- **Fetch latest images:**

  ```sh
  GET https://api.unsplash.com/photos/random?query=africa&count=8
  Headers: Authorization: Client-ID YOUR_ACCESS_KEY
  ```

- **Fetch images by search query:**
  ```sh
  GET https://api.unsplash.com/search/photos?query={searchTerm}&per_page=8
  Headers: Authorization: Client-ID YOUR_ACCESS_KEY
  ```

---

## **Author**

👨‍💻 Developed by **Samuel**

---
