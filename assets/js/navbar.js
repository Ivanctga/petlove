// navbar.js - Injects shared Navbar and Footer
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return currentPage === page ? 'active' : '';
  }

  const navbarHTML = `
  <nav id="navbar">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-icon"><i class="fa-solid fa-paw"></i></div>
      <div class="nav-logo-text">Pet<span>Love</span></div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
      <li><a href="shop.html" class="${isActive('shop.html')}">Shop</a></li>
      <li><a href="services.html" class="${isActive('services.html')}">Services</a></li>
      <li><a href="blog.html" class="${isActive('blog.html')}">Blog</a></li>
      <li><a href="contact.html" class="${isActive('contact.html')}">Contact</a></li>
    </ul>
    <div class="nav-right">
      <button class="cart-btn" onclick="openCart()" title="Ver Carrinho">
        <span class="cart-icon"><i class="fa-solid fa-cart-shopping"></i></span>
        <span class="cart-count" style="display:none">0</span>
      </button>
      <a href="contact.html#schedule" class="btn-schedule"><i class="fa-solid fa-scissors"></i> Agendar Banho &amp; Tosa</a>
      <button class="hamburger" id="hamburger" onclick="toggleMenu()">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div id="mobile-menu">
    <a href="index.html" class="${isActive('index.html')}"><i class="fa-solid fa-house"></i> Home</a>
    <a href="shop.html" class="${isActive('shop.html')}"><i class="fa-solid fa-cart-shopping"></i> Shop</a>
    <a href="services.html" class="${isActive('services.html')}"><i class="fa-solid fa-scissors"></i> Services</a>
    <a href="blog.html" class="${isActive('blog.html')}"><i class="fa-solid fa-newspaper"></i> Blog</a>
    <a href="contact.html" class="${isActive('contact.html')}"><i class="fa-solid fa-envelope"></i> Contact</a>
    <a href="contact.html#schedule" class="btn-schedule" style="margin-top:0.5rem"><i class="fa-solid fa-scissors"></i> Agendar Banho &amp; Tosa</a>
  </div>
  `;

  const cartModalHTML = `
  <div class="modal-overlay" id="cart-modal" onclick="if(event.target===this)closeCart()">
    <div class="modal-panel">
      <div class="cart-header">
        <h3><i class="fa-solid fa-cart-shopping"></i> Meu Carrinho</h3>
        <button class="close-btn" onclick="closeCart()" aria-label="Fechar"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div id="cart-items"></div>
      <div class="cart-footer">
        <div class="cart-total-row">
          <span>Total:</span>
          <span id="cart-total">R$ 0,00</span>
        </div>
        <button class="btn-primary" style="width:100%;justify-content:center">Finalizar Compra <i class="fa-solid fa-paw"></i></button>
      </div>
    </div>
  </div>
  `;

  const footerHTML = `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo" style="margin-bottom:1rem;display:inline-flex">
          <div class="nav-logo-icon"><i class="fa-solid fa-paw"></i></div>
          <div class="nav-logo-text">Pet<span style="color:white">Love</span></div>
        </a>
        <p>Cuidamos do seu pet com amor, dedicação e todo carinho que ele merece. Porque pet feliz é família feliz! <i class="fa-solid fa-dog"></i> <i class="fa-solid fa-cat"></i></p>
        <div class="footer-socials">
          <a href="#" class="social-btn" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="social-btn" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="social-btn" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="#" class="social-btn" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Links Rápidos</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Loja</a></li>
          <li><a href="services.html">Serviços</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contato</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Serviços</h4>
        <ul>
          <li><a href="services.html">Banho e Tosa</a></li>
          <li><a href="services.html">Consulta Vet</a></li>
          <li><a href="services.html">Hotel Pet</a></li>
          <li><a href="services.html">Vacinação</a></li>
          <li><a href="services.html">Adestramento</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contato</h4>
        <div class="footer-contact-item">
          <span class="icon"><i class="fa-solid fa-location-dot"></i></span>
          <span>Rua dos Pets, 123 - Centro, São Paulo/SP</span>
        </div>
        <div class="footer-contact-item">
          <span class="icon"><i class="fa-solid fa-phone"></i></span>
          <span>(11) 9 9999-8888</span>
        </div>
        <div class="footer-contact-item">
          <span class="icon"><i class="fa-solid fa-envelope"></i></span>
          <span>contato@petlove.com.br</span>
        </div>
        <div class="footer-contact-item">
          <span class="icon"><i class="fa-solid fa-clock"></i></span>
          <span>Seg-Sáb: 8h–18h | Dom: 9h–14h</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 PetLove. Todos os direitos reservados.</span>
      <span class="footer-paws"><i class="fa-solid fa-paw"></i><i class="fa-solid fa-paw"></i><i class="fa-solid fa-paw"></i></span>
    </div>
  </footer>
  `;

  // Inject navbar before body content
  document.body.insertAdjacentHTML('afterbegin', navbarHTML + cartModalHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
