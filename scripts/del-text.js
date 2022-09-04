/**
 * @author: huge-pancake
 */
export default class DelText extends HTMLElement {
  static get is() {
    return 'del-text';
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }
  connectedCallback() {
    this.title = '你知道的太多了';
  }
  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
      <style>${this.renderStyle()}</style>
      <slot></slot>
    `;
  }
  renderStyle() {
    return `
      :host {
        display: content;
        background-color: currentColor;
        transition: 120ms background-color;
        transition-delay: 0s;
        cursor: default;
      }
      :host(:hover) {
        background-color: transparent;
        transition-delay: 350ms; /* appear with tooltip */
      }
    `;
  }
}

customElements.define(DelText.is, DelText);
