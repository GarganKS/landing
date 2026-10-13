import "./styles/base.css";
import { getSettings, getPages } from "./api";
import { renderBlocks } from "./render";
import { header } from "../../cms/src/app/layout/header";
import { footer } from "../../cms/src/app/layout/footer";

async function start() {
  // const settings = await getSettings();
  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPages(location.pathname),
    ]);

    document.title = `${page.title} - ${settings.siteName}`;

    app.innerHTML = `
      ${header(settings)}
      <main>${renderBlocks(page.blocks)}</main>
      ${footer(settings)}`;
  } catch (error) {
    app.textContent = `Something went wrong: ${error.message}`;
  }
}

start();
