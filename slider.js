const slider = document.getElementById('pricingSlider');
    const priceEl = document.getElementById('price');
    const pricing = {
    1: {price: 8 },
    2: {price: 12 },
    3: {price: 16 },
    4: {price: 24 },
    5: {price: 36 }
};

slider.addEventListener('input', () => {
    const value = slider.value;
    const month = document.getElementsByClassName("month")
    priceEl.textContent = `$${pricing[value].price.toFixed(2)}`;
});

const svgGreen = document.getElementById("svgGreen");

svgGreen.addEventListener("click", () => {
    console.log("salami")
});