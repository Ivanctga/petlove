// =============================================
// PETSHOP - main.js
// Shared JavaScript for all pages
// =============================================

// --- NAVBAR STICKY & SCROLL ---
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// --- MOBILE MENU TOGGLE ---
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');
  if (mobileMenu) {
    mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  }
}

// --- SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- CART ---
// Single source of truth: localStorage key 'petshop_cart'
const CART_KEY = 'petshop_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {}
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((acc, item) => acc + (item.qty || 1), 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
  updateCartCount();
  showCartNotification(product.name);
}

function showCartNotification(name) {
  // Remove any existing notification
  const old = document.querySelector('.cart-notif');
  if (old) old.remove();

  const notif = document.createElement('div');
  notif.className = 'cart-notif';
  notif.innerHTML = `<span><i class="fa-solid fa-cart-shopping"></i></span> <b>${name}</b> adicionado ao carrinho!`;
  document.body.appendChild(notif);
  // Trigger transition
  notif.offsetHeight; // eslint-disable-line no-unused-expressions
  setTimeout(() => notif.classList.add('show'), 10);
  setTimeout(() => {
    notif.classList.remove('show');
    setTimeout(() => notif.remove(), 400);
  }, 2500);
}

// --- CART MODAL ---
function openCart() {
  const modal = document.getElementById('cart-modal');
  if (modal) {
    renderCart();
    modal.classList.add('open');
  }
}

function closeCart() {
  const modal = document.getElementById('cart-modal');
  if (modal) modal.classList.remove('open');
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  if (!cartItems) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="cart-empty"><span><i class="fa-solid fa-paw"></i></span><p>Seu carrinho está vazio!</p></div>`;
    if (cartTotal) cartTotal.textContent = 'R$ 0,00';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://placehold.co/60x60/FFD166/333?text=Pet'">
      <div class="cart-item-info">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">R$ ${((item.price || 0) * (item.qty || 1)).toFixed(2).replace('.', ',')}</span>
      </div>
      <div class="cart-item-qty">
        <button onclick="changeQty(${item.id}, -1)">−</button>
        <span>${item.qty || 1}</span>
        <button onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remover"><i class="fa-solid fa-xmark"></i></button>
    </div>
  `).join('');

  const total = cart.reduce((acc, item) => acc + (item.price || 0) * (item.qty || 1), 0);
  if (cartTotal) cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = (item.qty || 1) + delta;
    if (item.qty <= 0) {
      const updated = cart.filter(i => i.id !== id);
      saveCart(updated);
    } else {
      saveCart(cart);
    }
    updateCartCount();
    renderCart();
  }
}

function removeFromCart(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  updateCartCount();
  renderCart();
}

// --- NEWSLETTER FORM ---
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  const btn = e.target.querySelector('button');
  if (input && input.value) {
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Inscrito!';
    btn.style.background = '#4CAF50';
    input.value = '';
    setTimeout(() => {
      btn.textContent = 'Inscrever';
      btn.style.background = '';
    }, 3000);
  }
}

// --- RATING STARS ---
document.querySelectorAll('.star-rating').forEach(rating => {
  const stars = rating.querySelectorAll('.star');
  stars.forEach((star, i) => {
    star.addEventListener('click', () => {
      stars.forEach((s, j) => s.classList.toggle('active', j <= i));
      rating.dataset.value = i + 1;
    });
  });
});

// --- ANIMATE ON SCROLL ---
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(el => observer.observe(el));
}

// --- TESTIMONIAL CAROUSEL ---
function initCarousel() {
  const carousel = document.querySelector('.testimonial-carousel');
  if (!carousel) return;
  const slides = carousel.querySelectorAll('.testimonial-slide');
  const dotsContainer = carousel.querySelector('.carousel-dots');
  let current = 0;
  let autoplay;

  if (dotsContainer && slides.length > 0) {
    dotsContainer.innerHTML = Array.from(slides).map((_, i) =>
      `<span class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></span>`
    ).join('');
  }

  window.goToSlide = function(index) {
    slides[current].classList.remove('active');
    if (dotsContainer) dotsContainer.querySelectorAll('.dot')[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    if (dotsContainer) dotsContainer.querySelectorAll('.dot')[current].classList.add('active');
  };

  function next() {
    goToSlide((current + 1) % slides.length);
  }

  if (slides.length > 0) {
    slides[0].classList.add('active');
    autoplay = setInterval(next, 4000);
    carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
    carousel.addEventListener('mouseleave', () => { autoplay = setInterval(next, 4000); });
  }

  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide((current - 1 + slides.length) % slides.length));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide((current + 1) % slides.length));
}

// --- PRODUCT MODAL ---
function openProductModal(product) {
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  // Populate image
  const imgEl = modal.querySelector('.modal-img');
  if (imgEl) {
    imgEl.src = product.img || '';
    imgEl.alt = product.name || '';
  }

  // Populate name
  const nameEl = modal.querySelector('.modal-name');
  if (nameEl) nameEl.textContent = product.name || '';

  // Populate price (supports oldPrice)
  const priceEl = modal.querySelector('.modal-price');
  if (priceEl) {
    const current = `<span class="current-price" style="font-size:1.5rem;color:var(--orange);font-weight:900">R$ ${(product.price || 0).toFixed(2).replace('.', ',')}</span>`;
    const old = product.oldPrice
      ? `<span class="old-price" style="text-decoration:line-through;color:#aaa;margin-right:8px;font-size:1rem">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span>`
      : '';
    priceEl.innerHTML = old + current;
  }

  // Populate description
  const descEl = modal.querySelector('.modal-desc');
  if (descEl) descEl.textContent = product.desc || '';

  // Wire add-to-cart button
  const addBtn = modal.querySelector('.modal-add-cart');
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart({ id: product.id, name: product.name, price: product.price, img: product.img });
      closeProductModal();
    };
  }

  // Open: remove inline display:none then apply .open class for CSS transition
  modal.style.display = 'flex';
  // Force reflow so the CSS transition fires
  modal.offsetHeight; // eslint-disable-line no-unused-expressions
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  // Hide after transition completes (350ms matches CSS transition)
  setTimeout(() => {
    if (!modal.classList.contains('open')) {
      modal.style.display = 'none';
    }
  }, 360);
}

// --- CLOSE MODALS ON OVERLAY CLICK ---
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  animateOnScroll();
  initCarousel();

  // Newsletter forms
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', handleNewsletter);
  });

  // Scheduling form
  const scheduleForm = document.getElementById('schedule-form');
  if (scheduleForm) {
    scheduleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = scheduleForm.querySelector('button[type="submit"]');
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Agendado com sucesso!';
      btn.style.background = '#4CAF50';
      setTimeout(() => {
        btn.textContent = 'Confirmar Agendamento';
        btn.style.background = '';
        scheduleForm.reset();
      }, 3000);
    });
  }
});
