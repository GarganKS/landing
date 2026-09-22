import { getSettings, getPages } from "./api";

async function start() {
  // const settings = await getSettings();
  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPages(location.pathname),
    ]);

    document.title = `${page.title} - ${settings.siteName}`;

    console.log(settings, page);
  } catch (error) {
    app.textContent = `Something went wrong: ${error.message}`;
  }
}

start();
