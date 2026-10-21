__d("WAWebPwaManifest", [
    "WAWebBuildConstants",
    "WAWebUA"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC) {
            document.getElementById("whatsapp-pwa-manifest-link")?.setAttribute("href", `${o("WAWebBuildConstants").WEB_PUBLIC_PATH}manifest-apple.json`);
        }
    }
    l.updatePwaManifestOnMacOS = e;
}, 98);