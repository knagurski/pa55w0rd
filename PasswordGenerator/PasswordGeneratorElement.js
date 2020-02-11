export default class PasswordGeneratorElement extends HTMLElement {
  shadowRoot;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.attachGlobalStyle();
  }

  attachGlobalStyle() {
    if (this.getAttribute("global-style")) {
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", this.getAttribute("global-style"));

      this.shadowRoot.appendChild(link);
    }
  }
}
