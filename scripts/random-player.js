/**
 * @author: huge-pancake
 */
export default class RandomPlayer extends HTMLElement {
  static get is() {
    return "random-player";
  }
  get ids() {
    return ['28012031', '725692', '26341140'];
  }
  get randomMusicId() {
    return this.ids[Math.floor(Math.random() * (this.ids.length + 1))];
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
      <iframe
        frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="86"
        src="https://music.163.com/outchain/player?type=2&id=${this.randomMusicId}&auto=1&height=66"
      ></iframe>
    `;
  }
  renderStyle() {
    return `
      :host {
        display: block;
      }
    `;
  }
}

customElements.define(RandomPlayer.is, RandomPlayer);
