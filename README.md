<!-- npm install
npm install -D sass -->

Sure! Below is a **README.md** file that you can include in your project.

---

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

🚀 **Live Preview:** _(If deployed, add the link here)_

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

## **Usage**

1. On launch, the app fetches and displays **7-8 latest African-themed images** from the Unsplash API.
2. Use the **search bar** to find specific images.
3. Click on an image to **open a modal** and view it in higher resolution.
4. The app provides a **lazy-loading skeleton placeholder** while images are being fetched.
5. The layout is **responsive** and adjusts to different screen sizes.

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

For more details, check out the [Unsplash API Docs](https://unsplash.com/documentation).

---

## **Screenshots**

### 🔹 **Landing Page**

_(Insert a screenshot of the grid layout here)_

### 🔹 **Search Results**

_(Insert a screenshot of the search results here)_

### 🔹 **Image Modal**

_(Insert a screenshot of the modal here)_

---

## **Contributing**

If you'd like to contribute, feel free to fork the repository and submit a pull request.

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Submit a Pull Request 🎉

---

## **License**

This project is licensed under the **MIT License**.

---

## **Author**

👨‍💻 Developed by **Samuel**  
💼 [LinkedIn](https://www.linkedin.com/in/yourprofile)  
🐦 [Twitter](https://twitter.com/yourprofile)  
📧 [Email](mailto:your.email@example.com)

---

This **README.md** should be enough to document your project. You can add images, links, or deployment instructions as needed. 🚀🔥
