
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
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
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
