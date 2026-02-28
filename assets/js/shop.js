// =============================================
// PETSHOP - shop.js
// Shop page: products, filtering, sorting
// =============================================

const PRODUCTS = [
  // ── RAÇÃO ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Ração Premium Golden Adulto",
    cat: "racao",
    species: "caes",
    price: 89.9,
    oldPrice: 105.9,
    rating: 5,
    reviews: 124,
    badge: "sale",
    img: "assets/img/rac1.jpg",
    desc: "Ração super premium para cães adultos com proteína de alta qualidade. Fórmula balanceada com vitaminas e minerais essenciais para uma vida longa e saudável.",
  },

  {
    id: 5,
    name: "Ração Hill's Kitten Gatos",
    cat: "racao",
    species: "gatos",
    price: 76.9,
    oldPrice: 89.9,
    rating: 5,
    reviews: 98,
    badge: "sale",
    img: "assets/img/rac3.jpg",
    desc: "Ração premium para filhotes de gato. Fórmula especial com taurina para desenvolvimento saudável dos olhos e coração.",
  },

  {
    id: 13,
    name: "Ração Royal Canin Filhote",
    cat: "racao",
    species: "caes",
    price: 119.9,
    oldPrice: 139.9,
    rating: 5,
    reviews: 211,
    badge: "sale",
    img: "assets/img/rac2.jpg",
    desc: "Nutrição específica para filhotes de raças médias. Rico em antioxidantes, DHA e proteínas nobres para desenvolvimento ósseo e imunológico saudável.",
  },

  {
    id: 14,
    name: "Ração Whiskas Adulto Frango",
    cat: "racao",
    species: "gatos",
    price: 42.9,
    rating: 4,
    reviews: 178,
    img: "assets/img/rac4.jpg",
    desc: "Ração completa para gatos adultos com sabor irresistível de frango. Enriquecida com taurina e ômega 3 para pelagem brilhante e saúde cardíaca.",
  },

  // ── BRINQUEDOS ────────────────────────────────────────────────────────────
  {
    id: 3,
    name: "Kit Brinquedos Divertidos",
    cat: "brinquedos",
    species: "todos",
    price: 49.9,
    rating: 4,
    reviews: 56,
    badge: "promo",
    img: "assets/img/brinq1.jpg",
    desc: "Kit com 5 brinquedos variados para cães e gatos. Inclui bola, corda, ratinho, mordedor e varinha. Materiais seguros e duráveis.",
  },

  {
    id: 6,
    name: "Arranhador Torre Deluxe",
    cat: "brinquedos",
    species: "gatos",
    price: 189.9,
    rating: 4,
    reviews: 45,
    badge: "new",
    img: "assets/img/brinq4.jpg",
    desc: "Torre arranhadora com 3 níveis, casinha e brinquedo pendente. Ideal para gatos de qualquer porte. Estrutura estável e resistente.",
  },

  {
    id: 10,
    name: "Bola Interativa com LED",
    cat: "brinquedos",
    species: "gatos",
    price: 29.9,
    rating: 4,
    reviews: 67,
    badge: "new",
    img: "assets/img/brinq3.jpg",
    desc: "Bola com LED e movimento autônomo para entreter seu gato por horas. Funciona com pilhas e tem desligamento automático.",
  },

  {
    id: 17,
    name: "Corda Entrelaçada Resistente",
    cat: "brinquedos",
    species: "caes",
    price: 22.9,
    rating: 5,
    reviews: 134,
    img: "assets/img/brinq2.jpg",
    desc: "Corda de algodão multicolorida para cães que adoram puxar. Excelente para limpeza natural dos dentes e estimulação física durante as brincadeiras.",
  },

  // ── ACESSÓRIOS ────────────────────────────────────────────────────────────
  {
    id: 4,
    name: "Coleira Fashion com Plaquinha",
    cat: "acessorios",
    species: "caes",
    price: 38.9,
    rating: 5,
    reviews: 203,
    img: "assets/img/aces3.jpg",
    desc: "Coleira ajustável de couro sintético com fivela resistente. Acompanha plaquinha personalizável com nome e telefone do pet.",
  },
  {
    id: 9,
    name: "Comedouro Inox Antiderrapante",
    cat: "acessorios",
    species: "todos",
    price: 45.9,
    oldPrice: 55.9,
    rating: 5,
    reviews: 178,
    badge: "sale",
    img: "assets/img/aces1.jpg",
    desc: "Comedouro de inox com base antiderrapante de borracha. Higieniza facilmente, durável e não enferruja. Disponível em 3 tamanhos.",
  },
  {
    id: 12,
    name: "Bebedouro Fonte Elétrica",
    cat: "acessorios",
    species: "todos",
    price: 239.9,
    rating: 5,
    reviews: 42,
    badge: "new",
    img: "assets/img/aces2.jpg",
    desc: "Bebedouro com fonte elétrica circulante que filtra e oxigena a água, estimulando o pet a beber mais. Silencioso, fácil de limpar, capacidade 2L.",
  },
  {
    id: 21,
    name: "Guia Retrátil 5 Metros",
    cat: "acessorios",
    species: "caes",
    price: 58.9,
    oldPrice: 72.9,
    rating: 5,
    reviews: 156,
    badge: "sale",
    img: "assets/img/aces4.jpg",
    desc: "Guia retrátil com trava de segurança e cabo de nylon resistente. Permite até 5 metros de liberdade ao seu cão durante os passeios.",
  },

  // ── CAMAS ─────────────────────────────────────────────────────────────────
  {
    id: 2,
    name: "Cama Confort Pelúcia Luxo",
    cat: "camas",
    species: "todos",
    price: 129.9,
    rating: 5,
    reviews: 87,
    badge: "new",
    img: "assets/img/cama1.jpg",
    desc: "Cama de pelúcia super macia com bordas acolchoadas. Perfeita para cães e gatos de pequeno e médio porte. Lavável na máquina.",
  },
  {
    id: 25,
    name: "Cama Ortopédica Memory Foam",
    cat: "camas",
    species: "caes",
    price: 279.9,
    oldPrice: 319.9,
    rating: 5,
    reviews: 74,
    badge: "sale",
    img: "assets/img/cama2.jpg",
    desc: "Cama ortopédica com espuma viscoelástica que alivia pressão nas articulações. Ideal para cães idosos ou com problemas articulares. Capa removível e lavável.",
  },
  {
    id: 26,
    name: "Iglu Aconchego Gato Inverno",
    cat: "camas",
    species: "gatos",
    price: 89.9,
    rating: 5,
    reviews: 118,
    img: "assets/img/cama3.jpg",
    desc: "Iglu de pelúcia extra macia com entrada redonda. O abrigo perfeito para gatos que adoram se esconder e se sentir seguros. Lavável na máquina.",
  },
  {
    id: 27,
    name: "Rede Hammock para Janela",
    cat: "camas",
    species: "gatos",
    price: 64.9,
    oldPrice: 79.9,
    rating: 4,
    reviews: 52,
    badge: "promo",
    img: "assets/img/cama4.jpg",
    desc: "Rede de descanso que se prende no canto da janela com ventosas. Seu gato vai adorar tomar sol e observar tudo do alto com total segurança.",
  },

  // ── ROUPINHAS ─────────────────────────────────────────────────────────────
  {
    id: 8,
    name: "Roupa Moletom Inverno",
    cat: "roupinhas",
    species: "caes",
    price: 59.9,
    rating: 4,
    reviews: 33,
    img: "assets/img/roupa1.jpg",
    desc: "Roupa quentinha de moletom para cães de pequeno porte. Disponível em tamanhos P, M e G. Muito fofa e confortável!",
  },
  {
    id: 29,
    name: "Fantasia Super-Herói Pet",
    cat: "roupinhas",
    species: "caes",
    price: 44.9,
    oldPrice: 54.9,
    rating: 4,
    reviews: 128,
    badge: "promo",
    img: "assets/img/roupa2.jpg",
    desc: "Fantasia divertida de super-herói para cães. Perfeita para festas, aniversários e ensaios fotográficos. Tecido leve, não restringe movimentos.",
  },
  {
    id: 30,
    name: "Capa de Chuva Impermeável",
    cat: "roupinhas",
    species: "caes",
    price: 49.9,
    rating: 5,
    reviews: 76,
    badge: "new",
    img: "assets/img/roupa3.jpg",
    desc: "Capa de chuva 100% impermeável com capuz. Mantém seu pet seco e aquecido nos dias de chuva. Velcro ajustável e fácil de vestir.",
  },
  {
    id: 31,
    name: "Vestidinho Floral Verão",
    cat: "roupinhas",
    species: "caes",
    price: 38.9,
    rating: 4,
    reviews: 64,
    img: "assets/img/roupa4.jpg",
    desc: "Vestidinho florido leve e fresco para os dias quentes. Tecido de algodão respirável, ideal para fêmeas de pequeno e médio porte. Lavar à mão.",
  },

  // ── HIGIENE ───────────────────────────────────────────────────────────────
  {
    id: 7,
    name: "Shampoo Profissional Hipoalergênico",
    cat: "higiene",
    species: "todos",
    price: 32.9,
    rating: 5,
    reviews: 156,
    img: "assets/img/hig1.jpg",
    desc: "Shampoo suave e hipoalergênico para cães e gatos de pele sensível. Fórmula pH balanceado com aloe vera e vitamina E.",
  },
  {
    id: 11,
    name: "Escova Removedora de Pelos",
    cat: "higiene",
    species: "todos",
    price: 24.9,
    rating: 5,
    reviews: 211,
    img: "assets/img/hig3.jpg",
    desc: "Escova especial com cerdas de aço inox para remoção eficiente de pelos soltos. Ergonômica, com cabo antiderrapante.",
  },
  {
    id: 33,
    name: "Kit Dental Completo Pet",
    cat: "higiene",
    species: "todos",
    price: 36.9,
    rating: 5,
    reviews: 93,
    badge: "new",
    img: "assets/img/hig2.jpg",
    desc: "Kit completo de higiene bucal com escova de dente, pasta sabor frango e dedo de borracha. Previne tártaro, gengivite e mantém o hálito fresco.",
  },
  {
    id: 34,
    name: "Condicionador Brilho & Maciez",
    cat: "higiene",
    species: "todos",
    price: 28.9,
    rating: 4,
    reviews: 72,
    img: "assets/img/hig4.jpg",
    desc: "Condicionador de uso profissional com queratina vegetal e óleo de argan. Desenrola pelos, reduz frizz e proporciona pelagem brilhante e sedosa.",
  },
];

let filtered = [...PRODUCTS];
let currentView = "grid";
let activeCategory = "todos";
let activeSpecies = "todos";
let maxPrice = 500;
let activeRating = 0;

function renderProducts(products) {
  const container = document.getElementById("products-container");
  const count = document.getElementById("products-count");

  if (!container) return;

  if (count)
    count.textContent = `Mostrando ${products.length} produto${products.length !== 1 ? "s" : ""}`;

  if (products.length === 0) {
    container.innerHTML = `<div class="no-products"><span><i class="fa-solid fa-magnifying-glass"></i></span><p>Nenhum produto encontrado com esses filtros.</p></div>`;
    return;
  }

  container.innerHTML = products
    .map(
      (p) => `
    <div class="product-card-shop animate-on-scroll" data-product-id="${p.id}">
      <div class="product-img-shop">
        ${p.badge ? `<span class="badge badge-${p.badge === "sale" ? "sale" : p.badge === "new" ? "new" : "promo"}">${p.badge === "sale" ? "Oferta" : p.badge === "new" ? "Novo" : "Promo"}</span>` : ""}
        <img src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/280x220/FFD166/333?text=Pet'">
        <div class="product-overlay-shop">
          <button type="button" class="overlay-quick-view">👁 Ver Detalhes</button>
        </div>
        <button type="button" class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
      </div>
      <div class="product-body-shop">
        <div class="product-meta-shop">
          <span class="product-cat-tag">${getCatLabel(p.cat)}</span>
          <div class="product-rating-shop">
            <span class="stars">${"★".repeat(p.rating)}${"☆".repeat(5 - p.rating)}</span>
            <span class="review-count-shop">(${p.reviews})</span>
          </div>
        </div>
        <h3 class="product-title-shop">${p.name}</h3>
        <div class="product-footer-shop">
          <div class="product-pricing">
            ${p.oldPrice ? `<span class="old-price">R$ ${p.oldPrice.toFixed(2).replace(".", ",")}</span>` : ""}
            <span class="current-price">R$ ${p.price.toFixed(2).replace(".", ",")}</span>
          </div>
          <button type="button" class="add-to-cart-shop"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  // Re-init animations
  document.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
    setTimeout(() => el.classList.add("animated"), i * 40);
  });
}

function getCatLabel(cat) {
  const labels = {
    racao: '<i class="fa-solid fa-bowl-food"></i> Ração',
    brinquedos: '<i class="fa-solid fa-gamepad"></i> Brinquedos',
    acessorios: '<i class="fa-solid fa-ribbon"></i> Acessórios',
    camas: '<i class="fa-solid fa-bed"></i> Camas',
    roupinhas: '<i class="fa-solid fa-shirt"></i> Roupinhas',
    higiene: '<i class="fa-solid fa-bath"></i> Higiene',
  };
  return labels[cat] || cat;
}

function applyFilters() {
  filtered = PRODUCTS.filter((p) => {
    const catOk = activeCategory === "todos" || p.cat === activeCategory;
    const speciesOk =
      activeSpecies === "todos" ||
      p.species === activeSpecies ||
      p.species === "todos";
    const priceOk = p.price <= maxPrice;
    const ratingOk = activeRating === 0 || p.rating >= activeRating;
    return catOk && speciesOk && priceOk && ratingOk;
  });

  const sort = document.getElementById("sort-select")?.value;
  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  else if (sort === "rating")
    filtered.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
  else if (sort === "name")
    filtered.sort((a, b) => a.name.localeCompare(b.name));

  renderProducts(filtered);
}

function setView(view) {
  currentView = view;
  const container = document.getElementById("products-container");
  if (!container) return;
  document
    .querySelectorAll(".view-btn")
    .forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.view === view),
    );
  container.classList.toggle("list-view", view === "list");
}

// ── Product card click delegation (Ver Detalhes, Comprar, Wishlist) ─────────
function setupProductCardDelegation() {
  const container = document.getElementById("products-container");
  if (!container) return;

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card-shop");
    if (!card) return;

    const productId = parseInt(card.dataset.productId, 10);
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    // Botão "Ver Detalhes" ou clique no card (exceto botões de ação)
    if (e.target.closest(".overlay-quick-view")) {
      e.stopPropagation();
      if (typeof openProductModal === "function") {
        openProductModal(product);
      }
      return;
    }

    // Botão "Comprar"
    if (e.target.closest(".add-to-cart-shop")) {
      e.stopPropagation();
      if (typeof addToCart === "function") {
        addToCart({ id: product.id, name: product.name, price: product.price, img: product.img });
      }
      return;
    }

    // Wishlist
    if (e.target.closest(".wishlist-btn")) {
      e.stopPropagation();
      e.target.closest(".wishlist-btn").classList.toggle("loved");
      return;
    }

    // Clique no card (área da imagem, overlay ou corpo) abre modal
    if (typeof openProductModal === "function") {
      openProductModal(product);
    }
  });
}

// ── Init ────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(PRODUCTS);
  setupProductCardDelegation();

  // Category filter buttons
  document.querySelectorAll(".cat-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".cat-filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.cat;
      applyFilters();
    });
  });

  // Species buttons
  document.querySelectorAll(".species-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".species-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeSpecies = btn.dataset.species;
      applyFilters();
    });
  });

  // Price range
  const priceRange = document.getElementById("price-range");
  const priceLabel = document.getElementById("price-max-label");
  if (priceRange) {
    priceRange.addEventListener("input", () => {
      maxPrice = parseInt(priceRange.value);
      if (priceLabel) priceLabel.textContent = `R$ ${maxPrice}`;
      applyFilters();
    });
  }

  // Sort
  document
    .getElementById("sort-select")
    ?.addEventListener("change", applyFilters);

  // Rating filter — now wired to activeRating
  document
    .querySelectorAll('.rating-filter input[type="radio"]')
    .forEach((radio) => {
      radio.addEventListener("change", () => {
        activeRating = parseInt(radio.value) || 0;
        applyFilters();
      });
    });

  // Check URL params
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  if (cat) {
    activeCategory = cat;
    document.querySelectorAll(".cat-filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.cat === cat);
    });
    applyFilters();
  }
});

// ── ESC key closes product modal ─────────────────────────────────────────────
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // closeProductModal is defined in main.js
    if (typeof closeProductModal === "function") closeProductModal();
  }
});