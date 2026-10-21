__d("WAWebCopyToClipboard", [
    "Promise",
    "WALogger",
    "WAWebGetUserMediaErrors",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        try {
            r("nullthrows")(window.getSelection()).removeAllRanges();
            const t = document.createRange();
            t.selectNode(e);
            r("nullthrows")(window.getSelection()).addRange(t);
            const n = document.execCommand("copy");
            r("nullthrows")(window.getSelection()).removeAllRanges();
            return n;
        } catch (e) {
            return false;
        }
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield e.navigator.permissions.query({
                    name: "clipboard-write"
                });
                return t.state === "granted";
            } catch (e) {
                return false;
            }
        });
        return d.apply(this, arguments);
    }
    function m() {
        return !(!("clipboard" in navigator) || !("ClipboardItem" in window) || o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.SAFARI);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = t ?? window;
            const r = yield c(n);
            if (r) {
                try {
                    yield n.navigator.clipboard.writeText(e);
                    return true;
                } catch (error) {
                    if (error instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
                        return false;
                    }
                }
            }
            let a = false;
            const n_document = n.document;
            const i_body = n_document.body;
            if (i_body) {
                const s = n_document.createElement("textarea");
                s.textContent = e;
                i_body.appendChild(s);
                s.focus();
                s.select();
                try {
                    n_document.execCommand("copy");
                    a = true;
                } catch (e) {
                    a = false;
                } finally{
                    i_body.removeChild(s);
                }
            }
            return a;
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!m()) {
                throw r("err")("Clipboard API not supported");
            }
            const n = new window.ClipboardItem({
                "image/png": h(t)
            });
            try {
                yield navigator.clipboard.write([
                    n
                ]);
                return true;
            } catch (error) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Write image to clipboard failed"
                ]))).sendLogs(String(error));
                return false;
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        if (e.type === "image/png") {
            return (s || (s = n("Promise"))).resolve(e);
        }
        const t = URL.createObjectURL(e);
        return new (s || (s = n("Promise")))(function(e, n) {
            const o = new Image;
            o.onload = function() {
                try {
                    const t = document.createElement("canvas");
                    t.width = o.naturalWidth;
                    t.height = o.naturalHeight;
                    r("nullthrows")(t.getContext("2d")).drawImage(o, 0, 0);
                    t.toBlob(function(t) {
                        if (t == null) {
                            n(r("err")("PNG conversion failed"));
                        } else {
                            e(t);
                        }
                    }, "image/png", 1);
                } catch (error) {
                    n(error);
                }
            };
            o.onerror = function() {
                return n(r("err")("Image decode failed"));
            };
            o.src = t;
        }).finally(()=>URL.revokeObjectURL(t));
    }
    l.copyElementContentsToClipboard = u;
    l.supportsCopyImageToClipboard = m;
    l.copyTextToClipboard = p;
    l.copyImageToClipboard = f;
}, 98);