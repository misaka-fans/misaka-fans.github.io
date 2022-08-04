const initLive2d = () => {
  let pio_container = document.createElement("div");
  pio_container.classList.add("pio-container");
  pio_container.classList.add("right");
  pio_container.style.bottom = "-2rem";
  pio_container.style.zIndex = "1";
  document.body.insertAdjacentElement("beforeend", pio_container);
  let pio_action = document.createElement("div");
  pio_action.classList.add("pio-action");
  pio_container.insertAdjacentElement("beforeend", pio_action);
  let pio_canvas = document.createElement("canvas");
  pio_canvas.id = "pio";
  pio_canvas.style.width = "14rem";
  pio_canvas.width = "750";
  pio_canvas.height = "1000";
  pio_container.insertAdjacentElement("beforeend", pio_canvas);
  let pio = new Paul_Pio({
    mode: "fixed",
    hidden: false,
    content: {
      link: ["https://github.com/misaka-fans/misaka-fans.github.io"],
      skin: ["要换成我的朋友吗？", "让她放个假吧~"],
      hidden: true,
      custom: [],
    },
    model: [
      "https://misaka-fans.github.io/live2d/mikoto/mikoto.model.json",
      "https://misaka-fans.github.io/live2d/kuroko/kuroko.model.json",
      "https://misaka-fans.github.io/live2d/uiharu/uiharu.model.json",
      "https://misaka-fans.github.io/live2d/saten/saten.model.json",
      "https://misaka-fans.github.io/live2d/index/index.model.json",
    ],
  });
};

addEventListener("load", initLive2d);
