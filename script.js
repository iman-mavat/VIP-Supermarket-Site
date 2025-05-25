    // JavaScript code
        document.addEventListener('DOMContentLoaded', function() {
            // Show loading overlay
            const loadingOverlay = document.getElementById('loading-overlay');
            loadingOverlay.classList.add('active');
            
            // Hide loading overlay after 1.5 seconds (simulating data loading)
            setTimeout(() => {
                loadingOverlay.classList.remove('active');
            }, 1500);
            
            // Sample product data
            const products = [
                {
                    id: 1,
                    title: 'شیر پاستوریزه پرچرب صباح ۱ لیتری',
                    price: 45000,
                    originalPrice: 55000,
                    category: 'لبنیات و تخم مرغ',
                    image: '',
                    isNew: true,
                    isBestSeller: true,
                    isFeatured: true,
                    views: 1200,
                    rating: 4.5
                },
                {
                    id: 2,
                    title: 'نوشابه کوکاکولا ۱.۵ لیتری',
                    price: 35000,
                    originalPrice: 40000,
                    category: 'نوشیدنی‌ها',
                    image: '',
                    isBestSeller: true,
                    isFeatured: true,
                    views: 1800,
                    rating: 4.2
                },
                {
                    id: 3,
                    title: 'برنج ایرانی طارم هاشمی ۵ کیلویی',
                    price: 320000,
                    originalPrice: 350000,
                    category: 'کالاهای اساسی',
                    image: '',
                    isNew: true,
                    views: 800,
                    rating: 4.8
                },
                {
                    id: 4,
                    title: 'سیب درختی قرمز ۱ کیلویی',
                    price: 60000,
                    originalPrice: 65000,
                    category: 'میوه و سبزیجات',
                    image: '',
                    isBestSeller: true,
                    views: 1500,
                    rating: 4.6
                },
                {
                    id: 5,
                    title: 'چیپس سیب زمینی پرینگلز ۱۰۰ گرمی',
                    price: 25000,
                    originalPrice: 30000,
                    category: 'تنقلات',
                    image: '',
                    isNew: true,
                    isFeatured: true,
                    views: 900,
                    rating: 4.3
                },
                {
                    id: 6,
                    title: 'مرغ کامل تازه ۲ کیلویی',
                    price: 180000,
                    originalPrice: 200000,
                    category: 'مواد پروتئینی',
                    image: 'https://images.unsplash.com/photo-1601342630314-8427c38bf5e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                    isBestSeller: true,
                    views: 2000,
                    rating: 4.7
                },
                {
                    id: 7,
                    title: 'ماست پرچرب کاله ۹۰۰ گرمی',
                    price: 38000,
                    originalPrice: 45000,
                    category: 'لبنیات و تخم مرغ',
                    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                    isNew: true,
                    views: 1100,
                    rating: 4.4
                },
                {
                    id: 8,
                    title: 'آب معدنی دماوند ۱.۵ لیتری',
                    price: 12000,
                    originalPrice: 15000,
                    category: 'نوشیدنی‌ها',
                    image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                    isBestSeller: true,
                    isFeatured: true,
                    views: 1700,
                    rating: 4.1
                },
                {
                    id: 9,
                    title: 'روغن مایع نباتی لادن ۹۰۰ میلی لیتر',
                    price: 85000,
                    originalPrice: 95000,
                    category: 'کالاهای اساسی',
                    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                    isNew: true,
                    views: 700,
                    rating: 4.5
                },
                {
                    id: 10,
                    title: 'موز وارداتی ۱ کیلویی',
                    price: 50000,
                    originalPrice: 55000,
                    category: 'میوه و سبزیجات',
                    image: 'https://images.unsplash.com/photo-1603833665858-e61bb17a55b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                    isBestSeller: true,
                    views: 1600,
                    rating: 4.6
                },
                {
                    id: 11,
                    title: 'پفک نمکی ۴۰ گرمی',
                    price: 15000,
                    originalPrice: 18000,
                    category: 'تنقلات',
                    image: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                    isNew: true,
                    isFeatured: true,
                    views: 950,
                    rating: 4.0
                },
                {
                    id: 12,
                    title: 'تخم مرغ محلی ۱۰ عددی',
                    price: 75000,
                    originalPrice: 80000,
                    category: 'مواد پروتئینی',
                    image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                    isBestSeller: true,
                    views: 1900,
                    rating: 4.7
                }
            ];
            
            // Current page state
            let currentPage = 'home';
            let currentCategory = '';
            let currentFilter = '';
            
            // Cart functionality
            let cart = [];
            const cartIcon = document.getElementById('cart-icon');
            const cartModal = document.getElementById('cart-modal');
            const closeCart = document.getElementById('close-cart');
            const cartItemsContainer = document.getElementById('cart-items');
            const cartCount = document.getElementById('cart-count');
            const cartTotal = document.getElementById('cart-total');
            const subtotal = document.getElementById('subtotal');
            const shipping = document.getElementById('shipping');
            const discount = document.getElementById('discount');
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toast-message');
            
            // Quick view functionality
            const quickViewModal = document.getElementById('quick-view-modal');
            const closeQuickView = document.getElementById('close-quick-view');
            const quickViewImg = document.getElementById('quick-view-img');
            const quickViewTitle = document.getElementById('quick-view-title');
            const quickViewPrice = document.getElementById('quick-view-price');
            const quickViewAddToCart = document.getElementById('quick-view-add-to-cart');
            let currentProductInQuickView = null;
            
            // Auth functionality
            const authModal = document.getElementById('auth-modal');
            const closeAuth = document.getElementById('close-auth');
            const loginTab = document.getElementById('login-tab');
            const signupTab = document.getElementById('signup-tab');
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            const loginLink = document.getElementById('login-link');
            
            // Price range slider
            const rangeMin = document.querySelector('.range-min');
            const rangeMax = document.querySelector('.range-max');
            const progress = document.querySelector('.progress');
            const minPrice = document.getElementById('min-price');
            const maxPrice = document.getElementById('max-price');
            
            // Page elements
            const homePage = document.getElementById('home-page');
            const productsPage = document.getElementById('products-page');
            const discountsPage = document.getElementById('discounts-page');
            const bestSellersPage = document.getElementById('best-sellers-page');
            const newArrivalsPage = document.getElementById('new-arrivals-page');
            const featuredPage = document.getElementById('featured-page');
            const aboutPage = document.getElementById('about-page');
            const contactPage = document.getElementById('contact-page');
            const supportPage = document.getElementById('support-page');
            const categoryPage = document.getElementById('category-page');
            
            // Links
            const homeLink = document.getElementById('home-link');
            const discountsLink = document.getElementById('discounts-link');
            const bestSellersLink = document.getElementById('best-sellers-link');
            const newArrivalsLink = document.getElementById('new-arrivals-link');
            const featuredLink = document.getElementById('featured-link');
            const aboutLink = document.getElementById('about-link');
            const contactLink = document.getElementById('contact-link');
            const supportLink = document.getElementById('support-link');
            const viewProductsBtn = document.getElementById('view-products-btn');
            
            // Category links
            const categoryLinks = document.querySelectorAll('.category-link');
            
            // Filter links
            const cheapestFilter = document.getElementById('cheapest-filter');
            const expensiveFilter = document.getElementById('expensive-filter');
            const popularFilter = document.getElementById('popular-filter');
            const topRatedFilter = document.getElementById('top-rated-filter');
            
            // Search
            const searchInput = document.getElementById('search-input');
            const searchBtn = document.getElementById('search-btn');
            
            // Format price with commas
            function formatPrice(price) {
                return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
            }
            
            // Show page
            function showPage(page) {
                // Hide all pages
                homePage.style.display = 'none';
                productsPage.style.display = 'none';
                discountsPage.style.display = 'none';
                bestSellersPage.style.display = 'none';
                newArrivalsPage.style.display = 'none';
                featuredPage.style.display = 'none';
                aboutPage.style.display = 'none';
                contactPage.style.display = 'none';
                supportPage.style.display = 'none';
                categoryPage.style.display = 'none';
                
                // Show selected page
                switch(page) {
                    case 'home':
                        homePage.style.display = 'block';
                        break;
                    case 'products':
                        productsPage.style.display = 'block';
                        displayAllProducts();
                        break;
                    case 'discounts':
                        discountsPage.style.display = 'block';
                        displayDiscountProducts();
                        break;
                    case 'best-sellers':
                        bestSellersPage.style.display = 'block';
                        displayBestSellers();
                        break;
                    case 'new-arrivals':
                        newArrivalsPage.style.display = 'block';
                        displayNewArrivals();
                        break;
                    case 'featured':
                        featuredPage.style.display = 'block';
                        displayFeaturedProducts();
                        break;
                    case 'about':
                        aboutPage.style.display = 'block';
                        break;
                    case 'contact':
                        contactPage.style.display = 'block';
                        break;
                    case 'support':
                        supportPage.style.display = 'block';
                        break;
                    case 'category':
                        categoryPage.style.display = 'block';
                        break;
                }
                
                currentPage = page;
            }
            
            // Display products
            function displayProducts() {
                const productsContainer = document.getElementById('products-container');
                const bestSellersContainer = document.getElementById('best-sellers-container');
                const newArrivalsContainer = document.getElementById('new-arrivals-container');
                
                productsContainer.innerHTML = '';
                bestSellersContainer.innerHTML = '';
                newArrivalsContainer.innerHTML = '';
                
                // Filter featured products (3 items)
                const featuredProducts = products.filter(p => p.isFeatured).slice(0, 3);
                
                // Filter best sellers (6 items)
                const bestSellers = products.filter(p => p.isBestSeller).slice(0, 6);
                
                // Filter new arrivals (6 items)
                const newArrivals = products.filter(p => p.isNew).slice(0, 6);
                
                featuredProducts.forEach(product => {
                    productsContainer.appendChild(createProductElement(product));
                });
                
                bestSellers.forEach(product => {
                    bestSellersContainer.appendChild(createProductElement(product));
                });
                
                newArrivals.forEach(product => {
                    newArrivalsContainer.appendChild(createProductElement(product));
                });
            }
            
            // Display all products
            function displayAllProducts() {
                const container = document.getElementById('all-products-container');
                container.innerHTML = '';
                
                let filteredProducts = [...products];
                
                // Apply category filter
                if (currentCategory) {
                    filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
                }
                
                // Apply price filter
                const minPriceValue = parseInt(rangeMin.value);
                const maxPriceValue = parseInt(rangeMax.value);
                filteredProducts = filteredProducts.filter(p => p.price >= minPriceValue && p.price <= maxPriceValue);
                
                // Apply other filters
                if (currentFilter === 'cheapest') {
                    filteredProducts.sort((a, b) => a.price - b.price);
                } else if (currentFilter === 'expensive') {
                    filteredProducts.sort((a, b) => b.price - a.price);
                } else if (currentFilter === 'popular') {
                    filteredProducts.sort((a, b) => b.views - a.views);
                } else if (currentFilter === 'top-rated') {
                    filteredProducts.sort((a, b) => b.rating - a.rating);
                }
                
                filteredProducts.forEach(product => {
                    container.appendChild(createProductElement(product));
                });
            }
            
            // Display discount products
            function displayDiscountProducts() {
                const container = document.getElementById('discounts-container');
                container.innerHTML = '';
                
                const discountedProducts = products.filter(p => p.originalPrice);
                
                discountedProducts.forEach(product => {
                    container.appendChild(createProductElement(product));
                });
            }
            
            // Display best sellers
            function displayBestSellers() {
                const container = document.getElementById('best-sellers-page-container');
                container.innerHTML = '';
                
                const bestSellers = products.filter(p => p.isBestSeller);
                
                bestSellers.forEach(product => {
                    container.appendChild(createProductElement(product));
                });
            }
            
            // Display new arrivals
            function displayNewArrivals() {
                const container = document.getElementById('new-arrivals-page-container');
                container.innerHTML = '';
                
                const newArrivals = products.filter(p => p.isNew);
                
                newArrivals.forEach(product => {
                    container.appendChild(createProductElement(product));
                });
            }
            
            // Display featured products
            function displayFeaturedProducts() {
                const container = document.getElementById('featured-container');
                container.innerHTML = '';
                
                const featuredProducts = products.filter(p => p.isFeatured);
                
                featuredProducts.forEach(product => {
                    container.appendChild(createProductElement(product));
                });
            }
            
            // Display category products
            function displayCategoryProducts(category) {
                const container = document.getElementById('category-products-container');
                const title = document.getElementById('category-title');
                const description = document.getElementById('category-description');
                
                container.innerHTML = '';
                currentCategory = category;
                
                title.textContent = category;
                description.textContent = `محصولات دسته‌بندی ${category}`;
                
                const categoryProducts = products.filter(p => p.category === category);
                
                categoryProducts.forEach(product => {
                    container.appendChild(createProductElement(product));
                });
                
                showPage('category');
            }
            
            // Create product element
            function createProductElement(product) {
                const productElement = document.createElement('div');
                productElement.className = 'product-card';
                productElement.setAttribute('data-id', product.id);
                
                const discountPercent = product.originalPrice ? 
                    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
                
                productElement.innerHTML = `
                    ${product.isNew ? `<div class="product-badge">جدید</div>` : ''}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <span class="product-category">${product.category}</span>
                        <div class="product-rating">
                            <div class="stars">
                                ${generateStars(product.rating)}
                            </div>
                            <span class="count">(${Math.floor(Math.random() * 100) + 1} نظر)</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">${formatPrice(product.price)}</span>
                            ${product.originalPrice ? `
                                <span class="original-price">${formatPrice(product.originalPrice)}</span>
                                <span class="discount">${discountPercent}%</span>
                            ` : ''}
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart"><i class="fas fa-cart-plus"></i> افزودن</button>
                            <div class="action-buttons">
                                <button class="quick-view"><i class="fas fa-eye"></i></button>
                                <button class="compare"><i class="fas fa-exchange-alt"></i></button>
                                <button class="wishlist"><i class="far fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                `;
                
                // Add event listeners
                const addToCartBtn = productElement.querySelector('.add-to-cart');
                const wishlistBtn = productElement.querySelector('.wishlist');
                const quickViewBtn = productElement.querySelector('.quick-view');
                
                addToCartBtn.addEventListener('click', () => addToCart(product));
                wishlistBtn.addEventListener('click', () => toggleWishlist(wishlistBtn));
                quickViewBtn.addEventListener('click', () => showQuickView(product));
                
                return productElement;
            }
            
            // Generate star rating
            function generateStars(rating) {
                let stars = '';
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 >= 0.5;
                
                for (let i = 0; i < fullStars; i++) {
                    stars += '<i class="fas fa-star"></i>';
                }
                
                if (hasHalfStar) {
                    stars += '<i class="fas fa-star-half-alt"></i>';
                }
                
                const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                for (let i = 0; i < emptyStars; i++) {
                    stars += '<i class="far fa-star"></i>';
                }
                
                return stars;
            }
            
            // Add to cart function
            function addToCart(product) {
                const existingItem = cart.find(item => item.id === product.id);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        ...product,
                        quantity: 1
                    });
                }
                
                updateCart();
                showToast('محصول به سبد خرید اضافه شد');
            }
            
            // Toggle wishlist
            function toggleWishlist(button) {
                button.classList.toggle('active');
                if (button.classList.contains('active')) {
                    showToast('محصول به علاقه‌مندی‌ها اضافه شد');
                } else {
                    showToast('محصول از علاقه‌مندی‌ها حذف شد');
                }
            }
            
            // Show quick view
            function showQuickView(product) {
                currentProductInQuickView = product;
                quickViewImg.src = product.image;
                quickViewTitle.textContent = product.title;
                quickViewPrice.textContent = formatPrice(product.price);
                quickViewModal.classList.add('active');
                
                document.body.style.overflow = 'hidden';
            }
            
            // Close quick view
            function closeQuickViewModal() {
                quickViewModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            // Update cart
            function updateCart() {
                cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
                
                // Update cart items
                cartItemsContainer.innerHTML = '';
                
                if (cart.length === 0) {
                    cartItemsContainer.innerHTML = `
                        <div class="empty-cart">
                            <i class="fas fa-shopping-cart"></i>
                            <p>سبد خرید شما خالی است</p>
                            <button class="continue-shopping">ادامه خرید</button>
                        </div>
                    `;
                    
                    const continueShoppingBtn = cartItemsContainer.querySelector('.continue-shopping');
                    continueShoppingBtn.addEventListener('click', () => {
                        cartModal.classList.remove('active');
                    });
                } else {
                    cart.forEach(item => {
                        const cartItemElement = document.createElement('div');
                        cartItemElement.className = 'cart-item';
                        cartItemElement.setAttribute('data-id', item.id);
                        
                        cartItemElement.innerHTML = `
                            <button class="cart-item-remove"><i class="fas fa-times"></i></button>
                            <div class="cart-item-image">
                                <img src="${item.image}" alt="${item.title}">
                            </div>
                            <div class="cart-item-details">
                                <h3 class="cart-item-title">${item.title}</h3>
                                <span class="cart-item-price">${formatPrice(item.price)}</span>
                                <div class="cart-item-actions">
                                    <button class="remove-item">حذف</button>
                                    <div class="quantity-control">
                                        <button class="quantity-btn decrease">-</button>
                                        <span class="quantity">${item.quantity}</span>
                                        <button class="quantity-btn increase">+</button>
                                    </div>
                                </div>
                            </div>
                        `;
                        
                        const removeBtn = cartItemElement.querySelector('.remove-item');
                        const decreaseBtn = cartItemElement.querySelector('.decrease');
                        const increaseBtn = cartItemElement.querySelector('.increase');
                        const quantityElement = cartItemElement.querySelector('.quantity');
                        const cartItemRemove = cartItemElement.querySelector('.cart-item-remove');
                        
                        removeBtn.addEventListener('click', () => removeFromCart(item.id));
                        cartItemRemove.addEventListener('click', () => removeFromCart(item.id));
                        decreaseBtn.addEventListener('click', () => updateQuantity(item.id, -1));
                        increaseBtn.addEventListener('click', () => updateQuantity(item.id, 1));
                        
                        cartItemsContainer.appendChild(cartItemElement);
                    });
                }
                
                // Update cart totals
                const subtotalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
                const shippingValue = subtotalValue > 500000 ? 0 : 25000;
                const discountValue = 0; // Can be calculated based on promotions
                const totalValue = subtotalValue + shippingValue - discountValue;
                
                subtotal.textContent = formatPrice(subtotalValue);
                shipping.textContent = formatPrice(shippingValue);
                discount.textContent = formatPrice(discountValue);
                cartTotal.textContent = formatPrice(totalValue);
            }
            
            // Remove from cart
            function removeFromCart(productId) {
                cart = cart.filter(item => item.id !== productId);
                updateCart();
                showToast('محصول از سبد خرید حذف شد');
            }
            
            // Update quantity
            function updateQuantity(productId, change) {
                const item = cart.find(item => item.id === productId);
                
                if (item) {
                    item.quantity += change;
                    
                    if (item.quantity <= 0) {
                        removeFromCart(productId);
                    } else {
                        updateCart();
                    }
                }
            }
            
            // Show toast notification
            function showToast(message) {
                toastMessage.textContent = message;
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }
            
            // Initialize price range slider
            function initPriceRangeSlider() {
                let minVal = parseInt(rangeMin.value);
                let maxVal = parseInt(rangeMax.value);
                
                rangeMin.addEventListener('input', function() {
                    minVal = parseInt(this.value);
                    if (minVal > maxVal) {
                        this.value = maxVal;
                        minVal = maxVal;
                    }
                    updatePriceRange();
                });
                
                rangeMax.addEventListener('input', function() {
                    maxVal = parseInt(this.value);
                    if (maxVal < minVal) {
                        this.value = minVal;
                        maxVal = minVal;
                    }
                    updatePriceRange();
                });
                
                function updatePriceRange() {
                    minPrice.textContent = formatPrice(minVal);
                    maxPrice.textContent = formatPrice(maxVal);
                    progress.style.left = (minVal / rangeMin.max) * 100 + '%';
                    progress.style.right = 100 - (maxVal / rangeMax.max) * 100 + '%';
                    
                    // Update products if on products page
                    if (currentPage === 'products') {
                        displayAllProducts();
                    }
                }
                
                updatePriceRange();
            }
            
            // Search products
            function searchProducts(query) {
                if (query.trim() === '') return;
                
                showPage('products');
                currentCategory = '';
                currentFilter = '';
                
                const container = document.getElementById('all-products-container');
                container.innerHTML = '';
                
                const filteredProducts = products.filter(p => 
                    p.title.includes(query) || 
                    p.category.includes(query)
                );
                
                if (filteredProducts.length === 0) {
                    container.innerHTML = `
                        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #888;">
                            <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                            <p>هیچ محصولی یافت نشد</p>
                        </div>
                    `;
                } else {
                    filteredProducts.forEach(product => {
                        container.appendChild(createProductElement(product));
                    });
                }
            }
            
            // Event listeners
            cartIcon.addEventListener('click', () => {
                cartModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            closeCart.addEventListener('click', () => {
                cartModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            closeQuickView.addEventListener('click', closeQuickViewModal);
            
            quickViewAddToCart.addEventListener('click', () => {
                if (currentProductInQuickView) {
                    addToCart(currentProductInQuickView);
                    closeQuickViewModal();
                }
            });
            
            // Auth modal
            loginLink.addEventListener('click', () => {
                authModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            closeAuth.addEventListener('click', () => {
                authModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            loginTab.addEventListener('click', () => {
                loginTab.classList.add('active');
                signupTab.classList.remove('active');
                loginForm.style.display = 'block';
                signupForm.style.display = 'none';
            });
            
            signupTab.addEventListener('click', () => {
                signupTab.classList.add('active');
                loginTab.classList.remove('active');
                signupForm.style.display = 'block';
                loginForm.style.display = 'none';
            });
            
            // Page navigation
            homeLink.addEventListener('click', () => showPage('home'));
            discountsLink.addEventListener('click', () => showPage('discounts'));
            bestSellersLink.addEventListener('click', () => showPage('best-sellers'));
            newArrivalsLink.addEventListener('click', () => showPage('new-arrivals'));
            featuredLink.addEventListener('click', () => showPage('featured'));
            aboutLink.addEventListener('click', () => showPage('about'));
            contactLink.addEventListener('click', () => showPage('contact'));
            supportLink.addEventListener('click', () => showPage('support'));
            viewProductsBtn.addEventListener('click', () => showPage('products'));
            
            // Category links
            categoryLinks.forEach(link => {
                link.addEventListener('click', () => {
                    const category = link.getAttribute('data-category');
                    displayCategoryProducts(category);
                });
            });
            
            // Filter links
            cheapestFilter.addEventListener('click', () => {
                currentFilter = 'cheapest';
                showPage('products');
                displayAllProducts();
            });
            
            expensiveFilter.addEventListener('click', () => {
                currentFilter = 'expensive';
                showPage('products');
                displayAllProducts();
            });
            
            popularFilter.addEventListener('click', () => {
                currentFilter = 'popular';
                showPage('products');
                displayAllProducts();
            });
            
            topRatedFilter.addEventListener('click', () => {
                currentFilter = 'top-rated';
                showPage('products');
                displayAllProducts();
            });
            
            // Search
            searchBtn.addEventListener('click', () => {
                searchProducts(searchInput.value);
            });
            
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    searchProducts(searchInput.value);
                }
            });
            
            // Close modals when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === cartModal) {
                    cartModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
                
                if (e.target === quickViewModal) {
                    closeQuickViewModal();
                }
                
                if (e.target === authModal) {
                    authModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Initialize
            displayProducts();
            initPriceRangeSlider();
            showPage('home');
            
            // Animate elements on scroll
            const animateOnScroll = () => {
                const elements = document.querySelectorAll('.product-card, .category-title, .banner');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;
                    
                    if (elementPosition < screenPosition) {
                        element.style.animation = 'fadeInUp 0.5s ease forwards';
                    }
                });
            };
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Run once on page load
        });