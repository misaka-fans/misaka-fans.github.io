/**
 * @author: huge-pancake
 */
export default class ImgLink extends HTMLElement {
  static get is() {
    return "img-a";
  }
  get url() {
    return this.getAttribute("url");
  }
  get text() {
    return this.getAttribute("text");
  }
  get prefixUrl() {
    return (
      this.parentNode.getAttribute("prefix-url") ||
      "https://misaka-fans-photos.netlify.app/pic/"
    );
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
      <style>${this.renderStyle()}</style>
      <a href="${this.prefixUrl + this.url}" title="${
      this.text
    }" target="_blank">
        <img src="${this.prefixUrl + this.url}" alt="${this.text}" />
      </a>
    `;
  }
  renderStyle() {
    return `
      :host {
        display: block;
        margin-bottom: 10px;
      }
      a,
      img {
        width: 100%;
        height: 100%;
      }
    `;
  }
}

customElements.define(ImgLink.is, ImgLink);
