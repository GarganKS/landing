import "./styles/base.css";
import { getSettings, getPages } from "./api";
import { renderBlocks } from "./render";

async function start() {
  // const settings = await getSettings();
  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPages(location.pathname),
    ]);

    document.title = `${page.title} - ${settings.siteName}`;

    app.innerHTML = `<main>${renderBlocks(page.blocks)}</main>`;
  } catch (error) {
    app.textContent = `Something went wrong: ${error.message}`;
  }
}

start();
