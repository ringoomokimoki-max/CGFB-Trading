
// SHOPPING BAG

let count = 0;

let bag = [];

// ADD PRODUCT TO BAG

function addToBag(name, price) {

    bag.push({
        name: name,
        price: price
    });

    count++;

    document.getElementById("cart-count").textContent = count;

    alert(name + " added to your bag!");
}


// SHOW SHOPPING BAG

function showCart() {

    if (bag.length === 0) {

        alert("Your shopping bag is empty.");

        return;
    }

    let total = 0;

    let details = "YOUR SHOPPING BAG:\n\n";

    bag.forEach(function(item) {

        details += item.name + " - ₱" + item.price + "\n";

        total += item.price;

    });

    details += "\nTOTAL: ₱" + total;

    alert(details);
}


// EMAIL SUBSCRIPTION

function subscribe(event) {

    event.preventDefault();

    const email = document.getElementById("email");

    document.getElementById("message").textContent =
        "Thank you for subscribing!";

    email.value = "";

}

const products = {
    korean: {
        title: "Korean Blinds",
        image: "./korean blinds.jpg",
        description: "Give your windows a clean and elegant appearance with Korean Blinds. These window coverings are suitable for modern homes, offices, and other interior spaces."
    },

    curtains: {
        title: "Roll-up Blinds & Curtains",
        image: "./Curtains.jpg",
        description: "Upgrade your interior with stylish roll-up blinds and curtains. CGFB Trading offers manual and automatic curtain options for different customer requirements."
    },

    doors: {
        title: "Foldable Doors",
        image: "./fdoor.jpg",
        description: "Make better use of your space with practical foldable door solutions. Ideal for areas that need flexible room separation and convenient access."
    },

    pvc: {
        title: "PVC Curtain Strips",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900",
        description: "PVC Curtain Strips are designed for commercial and industrial applications, including refrigerated vans, manufacturing plants, warehouses, and semiconductor clean rooms."
    }
};

const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("productModalTitle");
const modalDescription = document.getElementById("productModalDescription");
const inquireButton = document.getElementById("inquireButton");

document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("click", () => {

        const product = products[card.dataset.product];

        if (!product) return;

        modalImage.src = product.image;
        modalTitle.textContent = product.title;
        modalDescription.textContent = product.description;
        

        const subject = encodeURIComponent(
            "Product Inquiry: " + product.title
        );

        inquireButton.href =
            "mailto:ccfbtrading@gmail.com?subject=" + subject;

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

});

function closeProductModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

document.getElementById("closeModal").addEventListener(
    "click", closeProductModal
);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeProductModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeProductModal();
    }
});


// PROJECT GALLERY DATA
const projectData = {

  sanpablo: {
    title: "San Pablo City Residential Project",
    category: "Residential",
    location: "San Pablo City, Laguna",
    description: "A residential project showcasing modern home design, construction materials, and residential development.",
    images: [
      "./pj1.jpg",
      "./pj3.jpg",
      "./pj4.jpg",
      "./pj5.jpg",
      "./pj6.jpg"
    ],
    video: "./sanp1.mp4"
  },

  dental: {
    title: "Dental Clinic Project",
    category: "Commercial",
    location: "Dental Clinic Development",
    description: "A commercial clinic project featuring a professional interior, modern facility design, and development requirements.",
    images: [
      "./D2.jpg",
      "./D3.jpg",
      "./D4.jpg",
      "./D5.jpg"
    ],
    video: "./sampvid1.mp4"
  },

  law: {
    title: "Law Office Project",
    category: "Commercial",
    location: "Office Development",
    description: "A professional office project featuring workspace development, modern interiors, and functional office facilities.",
    images: [
      "./L2.jpg",
      "./L3.jpg",
      "./L4.jpg",
      "./L5.jpg"
    ],
    video: "./vidL1.mp4"
  },

  mandaluyong: {
    title: "Mandaluyong Residential Project",
    category: "Residential",
    location: "Mandaluyong City, Metro Manila",
    description: "A residential development showcasing home construction, modern architectural design, and residential improvements.",
    images: [
      "./M2.jpg",
      "./M3.jpg",
      "./M4.jpg",
      "./M5.jpg"
    ],
    video: "./vidM1.mp4"
  }

};

let currentProject = null;
let currentImageIndex = 0;

// OPEN PROJECT
// OPEN PROJECT
function openProject(projectId) {

    currentProject = projectData[projectId];
    currentImageIndex = 0;

    if (!currentProject) return;

    const projectTitle = document.getElementById("projectModalTitle");
    const projectCategory = document.getElementById("modalCategory");
    const projectLocation = document.getElementById("modalLocation");
    const projectDescription = document.getElementById("projectModalDescription");
    const video = document.getElementById("projectVideo");
    const projectModal = document.getElementById("projectModal");

    // Check missing HTML elements
    if (!projectTitle || !projectCategory || !projectLocation ||
        !projectDescription || !video || !projectModal) {
        console.error("Missing Project Modal HTML element. Check your IDs.");
        return;
    }

    projectTitle.textContent = currentProject.title;
    projectCategory.textContent = currentProject.category;
    projectLocation.textContent = "📍 " + currentProject.location;
    projectDescription.textContent = currentProject.description;

    video.pause();
    video.src = currentProject.video;
    video.load();

    updateGallery();

    projectModal.classList.add("show");
    document.body.style.overflow = "hidden";
}
// UPDATE IMAGE GALLERY
function updateGallery() {

  const mainImage = document.getElementById("mainProjectImage");
  const thumbnails = document.getElementById("galleryThumbnails");

  mainImage.src = currentProject.images[currentImageIndex];

  thumbnails.innerHTML = "";

  currentProject.images.forEach((image, index) => {

    const thumbnail = document.createElement("img");

    thumbnail.src = image;
    thumbnail.alt = currentProject.title + " photo " + (index + 1);

    if (index === currentImageIndex) {
      thumbnail.classList.add("active");
    }

    thumbnail.onclick = function() {
      currentImageIndex = index;
      updateGallery();
    };

    thumbnails.appendChild(thumbnail);

  });
}

// NEXT / PREVIOUS IMAGE
function changeImage(direction) {

  if (!currentProject) return;

  const total = currentProject.images.length;

  currentImageIndex =
    (currentImageIndex + direction + total) % total;

  updateGallery();
}

// CLOSE PROJECT
function closeProject() {

  const modal = document.getElementById("projectModal");
  const video = document.getElementById("projectVideo");

  video.pause();
  modal.classList.remove("show");

  document.body.style.overflow = "";
}

// CLOSE WHEN CLICKING OUTSIDE
document.getElementById("projectModal").addEventListener("click", function(e) {

  if (e.target === this) {
    closeProject();
  }

});

// FILTER PROJECTS
document.querySelectorAll(".filter-btn").forEach(button => {

  button.addEventListener("click", function() {

    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    this.classList.add("active");

    const filter = this.dataset.filter;

    document.querySelectorAll(".project-card").forEach(card => {

      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });

  });

});

// ESCAPE KEY
document.addEventListener("keydown", function(e) {

  if (!document.getElementById("projectModal").classList.contains("show")) {
    return;
  }

  if (e.key === "Escape") closeProject();
  if (e.key === "ArrowRight") changeImage(1);
  if (e.key === "ArrowLeft") changeImage(-1);

});
