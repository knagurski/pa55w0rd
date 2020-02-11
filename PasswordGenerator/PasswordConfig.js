import PasswordGeneratorElement from "./PasswordGeneratorElement.js";
import EnhancedSlider from './EnhancedSlider.js';
import { setConfig } from "./config.js";

class PasswordConfig extends PasswordGeneratorElement {
  form;

  constructor() {
    super();
    this.initStyle();
    this.initForm();
  }

  initStyle() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'PasswordGenerator/PasswordConfig.css');

    this.shadowRoot.appendChild(link);
  }

  initForm() {
    this.form = document.createElement("form");
    this.form.addEventListener("submit", e => {
      e.preventDefault();
      setConfig(
        [...new FormData(this.form).entries()].reduce(
          (configs, [key, val]) =>
            key === "length"
              ? { ...configs, length: val }
              : { ...configs, [key]: [...(configs[key] || []), val] },
          {}
        )
      );
    });

    this.form.innerHTML = `
      <label for="generator-upper">Uppercase letters</label>
      <input type="checkbox" value="upper" name="generator" id="generator-upper" checked />
      <label for="generator-lower">Lowercase letters</label>
      <input type="checkbox" value="lower" name="generator" id="generator-lower" checked />
      <label for="generator-number">Numbers</label>
      <input type="checkbox" value="number" name="generator" id="generator-number" checked />
      <label for="generator-symbol">Symbols</label>
      <input type="checkbox" value="symbol" name="generator" id="generator-symbol" />
      <label for="length">Password length</label>
      <enhanced-slider name="length" id="length"></enhanced-slider>
      <button type="submit">Generate password</button>
    `;

    this.shadowRoot.appendChild(this.form);
  }
}

customElements.define("password-config", PasswordConfig);
