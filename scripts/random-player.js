/**
 * @author: huge-pancake
 */
export default class RandomPlayer extends HTMLElement {
  static get is() {
    return 'random-player';
  }
  get ids() {
    return ['28012031', '26379178', '1831600483', '27528656', '1833118660'];
  }
  get randomMusicId() {
    return this.ids[Math.floor(Math.random() * this.ids.length)];
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }
  render() {
    if (!this.shadowRoot) return;

      this.shadowRoot.innerHTML = `
      <style>${this.renderStyle()}</style>
      <iframe style="border:0"
        width="100%" height="86"
        src="https://music.163.com/outchain/player?type=2&id=${this.randomMusicId}&auto=1&height=66" id="musics"
      ></iframe>

    `;

  }
  SetCookie(name,value){
    document.cookie = name + "="+ value;
  }
  getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null){
      return arr[2];
    }else{
      return "null";
    }
  }
  renderStyle() {
    return `
      :host {
        display: block;
      }
    `;
  }
}
function flush()
{
  if (!this.shadowRoot) return;
  if(this.getCookie("onmusic")!="null")
  {
    this.shadowRoot.innerHTML = `
      <style>${this.renderStyle()}</style>
      <iframe style="border:0"
        width="100%" height="86"
        src="https://music.163.com/outchain/player?type=2&id=${this.randomMusicId}&auto=1&height=66" id="musics"
      ></iframe>

    `;
  }

}
customElements.define(RandomPlayer.is, RandomPlayer);
