import PasswordGeneratorElement from "./PasswordGeneratorElement.js";
import { onConfigChange } from "./config.js";
import { generatePassword } from "./generator.js";

class PasswordOutput extends PasswordGeneratorElement {
  passwordEl;
  pbCopyEl;

  constructor() {
    super();
    this.initStyle();
    this.initGenerator();
  }

  initStyle() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'PasswordGenerator/PasswordOutput.css');

    this.shadowRoot.appendChild(link);
  }

  initGenerator() {
    this.passwordEl = document.createElement("output");
    this.shadowRoot.appendChild(this.passwordEl);

    if (navigator.clipboard && navigator.clipboard.writeText) {
      this.pbCopyEl = document.createElement('button');
      this.pbCopyEl.innerText = '📋';
      this.pbCopyEl.setAttribute('title', 'copy password');
      this.pbCopyEl.addEventListener('click', async e => {
        e.preventDefault();
        await navigator.clipboard.writeText(this.passwordEl.value);
        alert(`copied ${this.passwordEl.value} to clipboard`);
      });
    }

    onConfigChange(config => {
      this.setPassword(generatePassword(config));
    });
  }

  setPassword(password) {
    this.passwordEl.value = password;

    if (password && this.pbCopyEl.parentNode !== this.shadowRoot) {
      this.shadowRoot.appendChild(this.pbCopyEl);
    } else if (!password && this.pbCopyEl.parentNode === this.shadowRoot) {
      this.shadowRoot.removeChild(this.pbCopyEl);
    }
  }
}

customElements.define("password-output", PasswordOutput);
