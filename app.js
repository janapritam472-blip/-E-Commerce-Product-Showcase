// E-Commerce Application JavaScript

// Application State
const state = {
    products: [
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            category: "electronics",
            price: 2499,
            originalPrice: 3499,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
            description: "Premium wireless headphones with noise cancellation",
            fullDescription: "High-quality wireless Bluetooth headphones featuring active noise cancellation, 30-hour battery life, premium sound quality, and comfortable over-ear design. Perfect for music lovers and professionals.",
            specifications: {
                "Battery Life": "30 hours",
                "Connectivity": "Bluetooth 5.0",
                "Weight": "250g",
                "Warranty": "1 year"
            },
            stock: 15,
            discount: 29
        },
        {
            id: 2,
            name: "Smartphone Stand",
            category: "accessories",
            price: 599,
            originalPrice: 799,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
            description: "Adjustable aluminum smartphone stand",
            fullDescription: "Durable aluminum smartphone stand with multiple viewing angles. Compatible with all smartphone sizes and tablets. Non-slip base ensures stability while maintaining elegant design.",
            specifications: {
                "Material": "Aluminum Alloy",
                "Compatibility": "4-10 inch devices",
                "Weight": "200g",
                "Colors": "Silver, Black"
            },
            stock: 25,
            discount: 25
        },
        {
            id: 3,
            name: "LED Desk Lamp",
            category: "home-garden",
            price: 1299,
            originalPrice: 1699,
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
            description: "Modern LED desk lamp with touch control",
            fullDescription: "Sleek LED desk lamp with touch-sensitive controls, multiple brightness levels, and color temperature adjustment. Energy-efficient and eye-friendly for work and study.",
            specifications: {
                "Power": "12W LED",
                "Brightness Levels": "5 levels",
                "Color Temperature": "3000K-6500K",
                "USB Charging": "Yes"
            },
            stock: 8,
            discount: 24
        },
        {
            id: 4,
            name: "Cotton T-Shirt",
            category: "fashion",
            price: 899,
            originalPrice: 1199,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
            description: "Premium cotton casual t-shirt",
            fullDescription: "100% premium cotton t-shirt with comfortable fit and breathable fabric. Available in multiple colors and sizes. Perfect for casual wear and everyday comfort.",
            specifications: {
                "Material": "100% Cotton",
                "Fit": "Regular",
                "Care": "Machine Washable",
                "Sizes": "S, M, L, XL, XXL"
            },
            stock: 30,
            discount: 25
        },
        {
            id: 5,
            name: "Wireless Mouse",
            category: "electronics",
            price: 1099,
            originalPrice: 1399,
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
            description: "Ergonomic wireless optical mouse",
            fullDescription: "Ergonomic wireless mouse with precise optical tracking, long battery life, and comfortable grip. Suitable for both work and gaming with customizable buttons.",
            specifications: {
                "DPI": "1600 DPI",
                "Battery": "AA Battery",
                "Range": "10 meters",
                "Compatibility": "Windows, Mac, Linux"
            },
            stock: 20,
            discount: 21
        },
        {
            id: 6,
            name: "Phone Case",
            category: "accessories",
            price: 449,
            originalPrice: 599,
            image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
            description: "Protective silicone phone case",
            fullDescription: "Durable silicone phone case providing excellent protection against drops and scratches. Precise cutouts for all ports and buttons. Available for multiple phone models.",
            specifications: {
                "Material": "Premium Silicone",
                "Protection": "Drop & Scratch",
                "Thickness": "1.2mm",
                "Models": "iPhone, Samsung, OnePlus"
            },
            stock: 50,
            discount: 25
        },
        {
            id: 7,
            name: "Indoor Plant Pot",
            category: "home-garden",
            price: 799,
            originalPrice: 999,
            image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
            description: "Ceramic decorative plant pot",
            fullDescription: "Beautiful ceramic plant pot with drainage hole and saucer. Perfect for indoor plants and home decoration. Modern design complements any interior style.",
            specifications: {
                "Material": "Ceramic",
                "Size": "6 inch diameter",
                "Drainage": "Yes",
                "Saucer": "Included"
            },
            stock: 12,
            discount: 20
        },
        {
            id: 8,
            name: "Denim Jacket",
            category: "fashion",
            price: 2199,
            originalPrice: 2799,
            image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=400&h=400&fit=crop",
            description: "Classic blue denim jacket",
            fullDescription: "Timeless denim jacket made from premium denim fabric. Classic fit with traditional styling, perfect for layering and casual occasions. Durable construction and comfortable wear.",
            specifications: {
                "Material": "100% Denim",
                "Fit": "Classic",
                "Pockets": "4 pockets",
                "Care": "Machine Washable"
            },
            stock: 18,
            discount: 21
        },
        {
            id: 9,
            name: "USB Charging Cable",
            category: "electronics",
            price: 399,
            originalPrice: 599,
            image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
            description: "Fast charging USB-C cable",
            fullDescription: "High-quality USB-C charging cable with fast charging support. Durable braided design prevents tangling and extends lifespan. Compatible with most modern devices.",
            specifications: {
                "Length": "1.5 meters",
                "Type": "USB-C to USB-A",
                "Charging": "Fast Charge Support",
                "Material": "Braided Nylon"
            },
            stock: 40,
            discount: 33
        },
        {
            id: 10,
            name: "Laptop Sleeve",
            category: "accessories",
            price: 1299,
            originalPrice: 1699,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
            description: "Waterproof laptop sleeve bag",
            fullDescription: "Premium waterproof laptop sleeve with soft interior padding and external pocket for accessories. Slim design fits most 13-15 inch laptops while providing excellent protection.",
            specifications: {
                "Size": "13-15 inch",
                "Material": "Waterproof Nylon",
                "Padding": "Shock Absorbing",
                "Pockets": "External accessory pocket"
            },
            stock: 22,
            discount: 24
        },
        {
            id: 11,
            name: "Wall Clock",
            category: "home-garden",
            price: 1599,
            originalPrice: 1999,
            image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop",
            description: "Modern minimalist wall clock",
            fullDescription: "Elegant minimalist wall clock with silent movement and modern design. Perfect for living rooms, bedrooms, and offices. Easy to install and battery operated.",
            specifications: {
                "Size": "12 inch diameter",
                "Movement": "Silent Quartz",
                "Power": "AA Battery",
                "Style": "Modern Minimalist"
            },
            stock: 15,
            discount: 20
        },
        {
            id: 12,
            name: "Sports Cap",
            category: "fashion",
            price: 699,
            originalPrice: 899,
            image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop",
            description: "Adjustable sports baseball cap",
            fullDescription: "Comfortable sports cap with adjustable strap and breathable fabric. Perfect for outdoor activities, sports, and casual wear. Available in multiple colors.",
            specifications: {
                "Material": "Cotton Blend",
                "Adjustment": "Velcro Strap",
                "Style": "Baseball Cap",
                "Colors": "Black, Navy, Red, White"
            },
            stock: 35,
            discount: 22
        }
    ],
    cart: [],
    currentFilter: 'all',
    currentSort: 'name'
};

// DOM Elements
const elements = {
    productsGrid: document.getElementById('productsGrid'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    sortSelect: document.getElementById('sortSelect'),
    cartToggle: document.getElementById('cartToggle'),
    cartSidebar: document.getElementById('cartSidebar'),
    cartClose: document.getElementById('cartClose'),
    cartCount: document.getElementById('cartCount'),
    cartTotal: document.getElementById('cartTotal'),
    cartContent: document.getElementById('cartContent'),
    cartItems: document.getElementById('cartItems'),
    cartEmpty: document.getElementById('cartEmpty'),
    cartFooter: document.getElementById('cartFooter'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartTotalFinal: document.getElementById('cartTotalFinal'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    productModal: document.getElementById('productModal'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalClose: document.getElementById('modalClose'),
    modalTitle: document.getElementById('modalTitle'),
    modalImage: document.getElementById('modalImage'),
    modalDiscount: document.getElementById('modalDiscount'),
    modalDiscountText: document.getElementById('modalDiscountText'),
    modalProductName: document.getElementById('modalProductName'),
    modalCurrentPrice: document.getElementById('modalCurrentPrice'),
    modalOriginalPrice: document.getElementById('modalOriginalPrice'),
    modalStock: document.getElementById('modalStock'),
    modalDescription: document.getElementById('modalDescription'),
    modalSpecifications: document.getElementById('modalSpecifications'),
    specsList: document.getElementById('specsList'),
    modalQuantity: document.getElementById('modalQuantity'),
    decreaseQty: document.getElementById('decreaseQty'),
    increaseQty: document.getElementById('increaseQty'),
    modalAddToCart: document.getElementById('modalAddToCart'),
    successMessage: document.getElementById('successMessage'),
    mobileMenuToggle: document.getElementById('mobileMenuToggle')
};

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(price).replace('₹', '₹');
}

function getStockStatus(stock) {
    if (stock > 10) return { class: 'in-stock', text: `In Stock (${stock} items)` };
    if (stock > 0) return { class: 'low-stock', text: `Low Stock (${stock} left)` };
    return { class: 'out-of-stock', text: 'Out of Stock' };
}

function showSuccessMessage(message) {
    const successElement = elements.successMessage;
    successElement.querySelector('.success-text').textContent = message;
    successElement.classList.remove('hidden');
    successElement.classList.add('show');
    
    setTimeout(() => {
        successElement.classList.remove('show');
        setTimeout(() => {
            successElement.classList.add('hidden');
        }, 300);
    }, 3000);
}

// Product Rendering
function renderProducts(products = state.products) {
    const grid = elements.productsGrid;
    
    if (products.length === 0) {
        grid.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
        return;
    }
    
    grid.innerHTML = products.map(product => {
        const stockInfo = getStockStatus(product.stock);
        return `
            <div class="product-card fade-in" data-product-id="${product.id}">
                <div class="product-card__image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.discount ? `<div class="product-card__discount">${product.discount}% OFF</div>` : ''}
                </div>
                <div class="product-card__content">
                    <h3 class="product-card__title">${product.name}</h3>
                    <p class="product-card__description">${product.description}</p>
                    <div class="product-card__price">
                        <span class="price__current">₹${product.price.toLocaleString('en-IN')}</span>
                        ${product.originalPrice ? `<span class="price__original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                    </div>
                    <div class="product-card__stock">
                        <span class="stock-indicator ${stockInfo.class}">${stockInfo.text}</span>
                    </div>
                    <div class="product-card__actions">
                        <button class="btn btn--primary add-to-cart-btn" data-product-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                            Add to Cart
                        </button>
                        <button class="btn btn--outline view-details-btn" data-product-id="${product.id}">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add event listeners to new buttons
    addProductEventListeners();
}

function addProductEventListeners() {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.productId);
            addToCart(productId);
        });
    });
    
    // View details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.productId);
            openProductModal(productId);
        });
    });
}

// Filtering and Sorting
function filterProducts(category) {
    state.currentFilter = category;
    let filteredProducts = category === 'all' 
        ? state.products 
        : state.products.filter(product => product.category === category);
    
    filteredProducts = sortProducts(filteredProducts);
    
    // Add fade effect
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => card.classList.add('fade-out'));
    
    setTimeout(() => {
        renderProducts(filteredProducts);
        updateFilterButtons();
    }, 150);
}

function sortProducts(products) {
    const sortedProducts = [...products];
    
    switch (state.currentSort) {
        case 'price-low':
            return sortedProducts.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedProducts.sort((a, b) => b.price - a.price);
        case 'discount':
            return sortedProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        case 'name':
        default:
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
}

function updateFilterButtons() {
    elements.filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === state.currentFilter);
    });
}

// Cart Management
function addToCart(productId, quantity = 1) {
    const product = state.products.find(p => p.id === productId);
    if (!product || product.stock === 0) return;
    
    const existingItem = state.cart.find(item => item.id === productId);
    
    if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity <= product.stock) {
            existingItem.quantity = newQuantity;
        } else {
            showSuccessMessage(`Only ${product.stock} items available in stock!`);
            return;
        }
    } else {
        if (quantity <= product.stock) {
            state.cart.push({
                id: productId,
                quantity: quantity,
                ...product
            });
        } else {
            showSuccessMessage(`Only ${product.stock} items available in stock!`);
            return;
        }
    }
    
    updateCartUI();
    showSuccessMessage(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartQuantity(productId, newQuantity) {
    const item = state.cart.find(item => item.id === productId);
    const product = state.products.find(p => p.id === productId);
    
    if (!item || !product) return;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity <= product.stock) {
        item.quantity = newQuantity;
        updateCartUI();
    } else {
        showSuccessMessage(`Only ${product.stock} items available in stock!`);
        // Reset the input to current quantity
        const quantityInput = document.querySelector(`input[data-product-id="${productId}"]`);
        if (quantityInput) quantityInput.value = item.quantity;
    }
}

function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update cart count and total in header
    elements.cartCount.textContent = totalItems;
    elements.cartTotal.textContent = totalAmount.toLocaleString('en-IN');
    
    // Update cart sidebar
    if (state.cart.length === 0) {
        elements.cartEmpty.style.display = 'block';
        elements.cartItems.innerHTML = '';
        elements.cartFooter.style.display = 'none';
    } else {
        elements.cartEmpty.style.display = 'none';
        elements.cartItems.innerHTML = state.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item__image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item__details">
                    <div class="cart-item__name">${item.name}</div>
                    <div class="cart-item__price">₹${item.price.toLocaleString('en-IN')}</div>
                    <div class="cart-item__controls">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <input type="number" value="${item.quantity}" min="1" max="${item.stock}" 
                                   data-product-id="${item.id}" 
                                   onchange="updateCartQuantity(${item.id}, parseInt(this.value))"
                                   class="form-control">
                            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <button class="cart-item__remove" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        elements.cartSubtotal.textContent = totalAmount.toLocaleString('en-IN');
        elements.cartTotalFinal.textContent = totalAmount.toLocaleString('en-IN');
        elements.cartFooter.style.display = 'block';
    }
}

// Modal Management
function openProductModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    // Update modal content
    elements.modalTitle.textContent = product.name;
    elements.modalImage.src = product.image;
    elements.modalImage.alt = product.name;
    elements.modalProductName.textContent = product.name;
    elements.modalCurrentPrice.textContent = product.price.toLocaleString('en-IN');
    elements.modalDescription.textContent = product.fullDescription;
    
    // Update discount badge
    if (product.discount) {
        elements.modalDiscount.style.display = 'block';
        elements.modalDiscountText.textContent = `${product.discount}% OFF`;
    } else {
        elements.modalDiscount.style.display = 'none';
    }
    
    // Update original price
    if (product.originalPrice) {
        elements.modalOriginalPrice.textContent = `₹${product.originalPrice.toLocaleString('en-IN')}`;
        elements.modalOriginalPrice.style.display = 'inline';
    } else {
        elements.modalOriginalPrice.style.display = 'none';
    }
    
    // Update stock status
    const stockInfo = getStockStatus(product.stock);
    elements.modalStock.textContent = stockInfo.text;
    elements.modalStock.className = `stock-indicator ${stockInfo.class}`;
    
    // Update specifications
    elements.specsList.innerHTML = Object.entries(product.specifications)
        .map(([key, value]) => `
            <div class="spec-item">
                <span class="spec-name">${key}:</span>
                <span class="spec-value">${value}</span>
            </div>
        `).join('');
    
    // Reset quantity
    elements.modalQuantity.value = 1;
    elements.modalQuantity.max = product.stock;
    
    // Update add to cart button
    elements.modalAddToCart.onclick = () => {
        const quantity = parseInt(elements.modalQuantity.value);
        addToCart(productId, quantity);
    };
    
    elements.modalAddToCart.disabled = product.stock === 0;
    
    // Show modal
    elements.productModal.classList.remove('hidden');
    setTimeout(() => {
        elements.productModal.classList.add('show');
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    elements.productModal.classList.remove('show');
    setTimeout(() => {
        elements.productModal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// Event Listeners
function initializeEventListeners() {
    // Filter buttons
    elements.filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            filterProducts(category);
        });
    });
    
    // Sort select
    elements.sortSelect.addEventListener('change', (e) => {
        state.currentSort = e.target.value;
        const filteredProducts = state.currentFilter === 'all' 
            ? state.products 
            : state.products.filter(product => product.category === state.currentFilter);
        renderProducts(sortProducts(filteredProducts));
    });
    
    // Cart toggle
    elements.cartToggle.addEventListener('click', () => {
        elements.cartSidebar.classList.toggle('open');
    });
    
    // Cart close
    elements.cartClose.addEventListener('click', () => {
        elements.cartSidebar.classList.remove('open');
    });
    
    // Checkout button
    elements.checkoutBtn.addEventListener('click', () => {
        if (state.cart.length === 0) return;
        
        const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Thank you for your order! Total amount: ₹${total.toLocaleString('en-IN')}\n\nThis is a demo checkout. In a real store, you would be redirected to payment processing.`);
        
        // Clear cart after checkout
        state.cart = [];
        updateCartUI();
        elements.cartSidebar.classList.remove('open');
    });
    
    // Modal close buttons
    elements.modalClose.addEventListener('click', closeProductModal);
    elements.modalBackdrop.addEventListener('click', closeProductModal);
    
    // Modal quantity controls
    elements.decreaseQty.addEventListener('click', () => {
        const current = parseInt(elements.modalQuantity.value);
        if (current > 1) {
            elements.modalQuantity.value = current - 1;
        }
    });
    
    elements.increaseQty.addEventListener('click', () => {
        const current = parseInt(elements.modalQuantity.value);
        const max = parseInt(elements.modalQuantity.max);
        if (current < max) {
            elements.modalQuantity.value = current + 1;
        }
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (!elements.cartSidebar.contains(e.target) && !elements.cartToggle.contains(e.target)) {
            elements.cartSidebar.classList.remove('open');
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (elements.productModal.classList.contains('show')) {
                closeProductModal();
            }
            if (elements.cartSidebar.classList.contains('open')) {
                elements.cartSidebar.classList.remove('open');
            }
        }
    });
    
    // Mobile menu toggle (placeholder functionality)
    if (elements.mobileMenuToggle) {
        elements.mobileMenuToggle.addEventListener('click', () => {
            // In a real app, this would toggle mobile navigation
            alert('Mobile menu would open here. This is a demo implementation.');
        });
    }
}

// Newsletter subscription
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const input = newsletterForm.querySelector('input');
        const button = newsletterForm.querySelector('button');
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const email = input.value.trim();
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert(`Thank you for subscribing with ${email}! You'll receive updates about new products and offers.`);
            input.value = '';
        });
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                button.click();
            }
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scroll for navigation
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize Application
function initializeApp() {
    console.log('Initializing TechStore India E-Commerce App...');
    
    // Render initial products
    renderProducts();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize newsletter
    initializeNewsletter();
    
    // Initialize smooth scroll
    initializeSmoothScroll();
    
    // Initialize cart UI
    updateCartUI();
    
    // Set initial filter state
    updateFilterButtons();
    
    console.log('App initialized successfully!');
}

// Make functions globally available for inline event handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Add loading states for better UX
function showLoading() {
    elements.productsGrid.innerHTML = '<div class="loading">Loading products...</div>';
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) loading.remove();
}

// Performance optimization: Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}