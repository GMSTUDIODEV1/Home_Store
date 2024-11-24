const cart = [];

// ฟังก์ชันเพิ่มสินค้าในตะกร้า
function addToCart(productName, productPrice) {
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    showPopup(`${productName} ถูกเพิ่มในตะกร้าแล้ว!`);
    updateCart();
}

// ฟังก์ชันแสดงป๊อปอัป
function showPopup(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");
    popupMessage.textContent = message;
    popup.classList.add("show");

    // ซ่อนป๊อปอัปหลังจาก 2 วินาที
    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}

// ฟังก์ชันจัดการรายการสินค้าในตะกร้า
function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalPriceEl = document.getElementById("total-price");
    cartList.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ${item.price} บาท x ${item.quantity}
            <div>
                <button onclick="changeQuantity('${item.name}', -1)">-</button>
                <button onclick="changeQuantity('${item.name}', 1)">+</button>
                <button onclick="removeFromCart('${item.name}')">ลบ</button>
            </div>
        `;
        cartList.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    totalPriceEl.textContent = `ราคารวม: ${totalPrice} บาท`;
}

// ฟังก์ชันเปลี่ยนจำนวนสินค้า
function changeQuantity(productName, delta) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productName);
        }
    }
    updateCart();
}

// ฟังก์ชันลบสินค้า
function removeFromCart(productName) {
    const index = cart.findIndex(item => item.name === productName);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    updateCart();
}