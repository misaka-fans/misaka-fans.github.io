/**
 * @author: huge-pancake
 */
export default class ContributorCard extends HTMLElement {
  static get is() {
    return "con-card";
  }
  get avatar() {
    return (
      this.getAttribute("avatar") ||
      `https://avatars.githubusercontent.com/${this.username}?s=200&v=4`
    );
  }
  get username() {
    return this.getAttribute("username");
  }
  get name() {
    return this.getAttribute("name");
  }
  get email() {
    return this.getAttribute("email");
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
      <div class="headline">
        <div class="avatar">
          <img src="${this.avatar}" alt="${this.name}">
        </div>
        <div class="info">
        <span class="name">${this.name}</span>
          <a class="github" href="https://github.com/${this.username}">@${
      this.username
    }</a>
          <a class="email" href="mailto:${this.email}">*联系</a>
        </div>
      </div>
      <hr />
      <div class="content">
        <slot></slot>
      </div>
      `;
  }
  renderStyle() {
    return /* css */ `
      :host {
        margin-bottom: 8px;
        display: inline-block;
        padding-right: 16px;
        padding-bottom: 16px;
        width: 100%;
        border: 1px solid #9a9a9a;
        border-radius: 16px;
      }
      .headline {
        display: flex;
        margin-top: 16px;
      }
      .avatar img {
        margin-left: 16px;
        width: 50px;
        height: 50px;
        border-radius: 16px;
      }
      .info {
        margin-left: 16px;
      }
      .info a {
        display: block;
        color: var(--theme-color);
        font-weight: 500;
        text-decoration: none;
      }
      hr {
        margin-left: 16px;
        border-color: #eaeaea;
      }
      .content {
        margin-top: 16px;
        margin-left: 16px;
      }
    `;
  }
}

customElements.define(ContributorCard.is, ContributorCard);
