export default class EnhancedSlider extends HTMLElement {
  shadowRoot;
  slider;
  currentValue;

  constructor() {
    super();

    this.initSlider();
  }

  initSlider() {
    this.slider = document.createElement("input");
    this.slider.setAttribute("type", "range");
    this.slider.setAttribute("min", 5);
    this.slider.setAttribute("max", 50);
    this.slider.setAttribute("name", this.getAttribute("name") || "length");
    this.slider.value = 20;

    this.currentValue = document.createElement("span");
    this.currentValue.innerText = this.slider.value;

    this.slider.addEventListener("input", () => {
      this.currentValue.innerText = this.slider.value;
      this.setAttribute('value', this.slider.value);
    });

    this.appendChild(this.slider);
    this.appendChild(this.currentValue);
  }
}

customElements.define("enhanced-slider", EnhancedSlider);
