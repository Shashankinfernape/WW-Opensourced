__d("WAWebNotificationIcon", [
    "WAAbortError",
    "WALogger",
    "WAWebAssetLoader",
    "WAWebAssetLoaderSingleton",
    "WAWebCometRouterMetaManager",
    "WAWebFbtCommon",
    "WAWebL10N",
    "WAWebMobilePlatforms",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebUA",
    "cr:16769",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = "v4";
    function m(e) {
        const t = [];
        if (e > 0) {
            t.push(`(${r("WAWebL10N").n(e)})`);
        }
        const a = n("cr:16769") == null ? void 0 : n("cr:16769").getTitle();
        if (a != null) {
            t.push(a.toString());
        } else if (o("WAWebMobilePlatforms").isSMB()) {
            t.push(r("WAWebFbtCommon")("WhatsApp Business").toString());
        } else {
            t.push(r("WAWebFbtCommon")("WhatsApp").toString());
        }
        const i = t.join(" ");
        o("WAWebCometRouterMetaManager").updateUnreadTitle(i);
        if (o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()) {
            o("WAWebPwaDocumentMetadataUtils").setAppBadge(e);
        }
        f(e);
    }
    let p;
    function _() {
        p = null;
        document.getElementById("favicon")?.remove();
    }
    function f(t) {
        if (!o("WAWebUA").UA.isSafari) {
            let a;
            if (t === -1) {
                a = "favicon-error2";
            } else if (t === 0) {
                a = "favicon";
            } else if (t < 10) {
                a = `f0${t}`;
            } else if (t < 100) {
                a = `f${t}`;
            } else {
                a = "f00";
            }
            p = a;
            document.getElementById("favicon")?.remove();
            const i = {
                id: `${a}-${d}`,
                low: {
                    default: `/favicon/1x/${a}/${d}/`
                },
                high: {
                    default: `/favicon/2x/${a}/${d}/`
                }
            };
            o("WAWebAssetLoaderSingleton").AssetLoader.loadAsset(i, o("WAWebAssetLoader").LOAD_PRIORITY.NOTIFICATION_ICON, false).then((t)=>{
                if (p !== a) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[favicon] skipped: ",
                        " because of newer favicon: ",
                        ""
                    ])), a, p);
                    return;
                }
                const n = document.createElement("link");
                n.setAttribute("id", "favicon");
                n.setAttribute("rel", "icon");
                n.setAttribute("type", "image/png");
                n.setAttribute("href", t);
                const r = document.getElementsByTagName("head");
                if (r != null && r[0]) {
                    r[0].appendChild(n);
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[favicon] updated: ",
                    ""
                ])), a);
            }).catch(o("WAAbortError").catchAbort(function() {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[favicon] update aborted: ",
                    ""
                ])), a);
            })).catch((e)=>{
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[favicon] update failed id=",
                    ""
                ])), i.id).catching(r("getErrorSafe")(e)).sendLogs("favicon-fetch-error");
            });
        }
    }
    l.setTitleAndIcon = m;
    l.clearIcon = _;
}, 98);