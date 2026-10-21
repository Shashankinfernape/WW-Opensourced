__d("WAWebURLUtils", [
    "WABase64",
    "WABinary",
    "WACryptoHmac",
    "WALogger",
    "WAMemoizeCache",
    "WATypeUtils",
    "WAWebCreateFile",
    "WAWebDataUrlToBlob",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebURLValidSchemes"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/;
    const u = "https://l.wl.co/l";
    const c = "AIzaSyBsgqekZoWfPW9nHXH-d2XRNSHW11GPibg";
    var d = {
        URL_REGEX: s,
        build: function(t, n) {
            const e = new URLSearchParams;
            const r = n || {};
            Object.keys(r).forEach((t)=>{
                e.set(t, String(r[t]));
            });
            return `${t}?${e.toString()}`;
        },
        canMuckHistory: function() {
            if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "URLUtils: canMuckHistory() invalid in worker"
                ])));
                return false;
            }
            return !!(window.history?.pushState && self.location);
        },
        relToAbs: function(t) {
            const e = new URL(t, self.location.href);
            return e.href;
        },
        hostname: o("WAMemoizeCache").memoizeWithArgs(function(e) {
            try {
                const t = new URL(d.isHttp(e) ? e : `http://${e}`);
                return t.hostname;
            } catch (e) {
                return "";
            }
        }, function(e) {
            return e;
        }),
        withoutWww: function(t) {
            return t.split("www.").join("");
        },
        isHttp: function(t) {
            return t && (t.toLowerCase().substring(0, 8) === "https://" || t.toLowerCase().substring(0, 7) === "http://");
        },
        isHttps: function(t) {
            return t && t.toLowerCase().substring(0, 8) === "https://";
        },
        hasValidUrlScheme: function(t) {
            const e = t.trim().toLowerCase();
            return o("WAWebURLValidSchemes").VALID_URL_SCHEMES.some((t)=>e.indexOf(t) === 0);
        },
        isBlob: function(t) {
            return o("WATypeUtils").isString(t) && t.substring(0, 5) === "blob:";
        },
        isData: function(t) {
            return o("WATypeUtils").isString(t) && t.substring(0, 5) === "data:";
        },
        parseDataURL: function(t) {
            const e = t.indexOf(":");
            const n = t.indexOf(";");
            const r = t.indexOf(",");
            return {
                mimetype: t.substring(e + 1, n),
                data: t.substring(r + 1)
            };
        },
        dataURLtoFile: function(t) {
            const e = this.parseDataURL(t).mimetype;
            return o("WAWebCreateFile").createFile([
                o("WAWebDataUrlToBlob").dataURLtoBlob(t)
            ], "", {
                type: e
            });
        },
        GSM_API_KEY: c,
        GSM_API_KEY_SECRET: "TkKfl2pAWhxFWBWx7_4NI8DMuMs=",
        gsmURL: function(t, n) {
            const e = n.replace(/\-/g, "+").replace(/_/g, "/");
            const r = o("WABase64").decodeB64(e);
            const a = new URL(t);
            const i = (a.pathname || "") + (a.search || "");
            const l = o("WABinary").Binary.build(i).readByteArrayView();
            return o("WACryptoHmac").hmacSha1(r, l).then((e)=>`${t}&signature=${o("WABase64").encodeB64UrlSafe(e)}`);
        },
        thumbToCSSURL: function(t) {
            let e;
            if (d.isHttp(t) || t.startsWith("data:")) {
                e = t;
            } else {
                e = `data:image/jpeg;base64,${t}`;
            }
            return `url("${e}")`;
        },
        thumbAsBackgroundImage: function(t) {
            if (t) {
                return {
                    backgroundImage: this.thumbToCSSURL(t)
                };
            }
            return {};
        },
        isValid: function(t) {
            return s.test(t);
        },
        toMaliciousSiteRedirect: function(t) {
            if (t === "" || t.indexOf(u) === 0) {
                return t;
            }
            return `${u}?u=${encodeURIComponent(t)}`;
        },
        consumeLoginNextParam: function(t) {
            const e = new URLSearchParams(t);
            const n = e.get("next");
            let r;
            if (n == null) {
                r = "/";
            } else {
                if (!n.startsWith("/") || n.startsWith("//") || n.includes("\\") || n === "/login" || n.startsWith("/login/") || n.startsWith("/login?")) {
                    return "/";
                }
                r = n;
            }
            e.delete("next");
            const o = e.toString();
            if (o === "") {
                return r;
            }
            const a = r.includes("?") ? "&" : "?";
            return r + a + o;
        },
        buildLoginUrlWithNext: function(t, n) {
            if (t === "/login" || t.startsWith("/login/")) {
                return t + n;
            }
            const e = new URLSearchParams(n);
            e.delete("next");
            const r = e.toString();
            const o = t === "" || t === "/";
            if (o) {
                if (r === "") {
                    return "/login/";
                }
                return `/login/?${r}`;
            }
            const a = `/login/?next=${encodeURIComponent(t)}`;
            if (r === "") {
                return a;
            }
            return `${a}&${r}`;
        }
    };
    l.default = d;
}, 98);