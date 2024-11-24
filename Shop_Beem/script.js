function addToCart(productName, price) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");

    // ตั้งค่าข้อความในป็อปอัพ
    popupMessage.innerText = `เพิ่ม ${productName} ราคา ${price} บาท ลงในตะกร้าเรียบร้อยแล้ว!`;

    // แสดงป็อปอัพ
    popup.classList.add("show");

    // ซ่อนป็อปอัพหลังจาก 2 วินาที
    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}