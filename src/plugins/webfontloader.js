/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
    const webFontLoader = await import(
      /* webpackChunkName: "webfontloader" */ "webfontloader"
    );
  
    webFontLoader.load({
      google: {
        families: [
          "Open Sans:300,400,600,700,800&display=swap",
          "Lato:100,300,400,700,900&display=swap",
          "Poppins:100,300,400,500,600,700&display=swap",
          "Nunito:200,300,400,600,700,800&display=swap",
        ],
      },
    });
  }