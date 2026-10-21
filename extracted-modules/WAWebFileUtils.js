__d("WAWebFileUtils", [
    "Promise",
    "WAWebBoolFunc",
    "WAWebMediaLoadErrors",
    "WAWebMimeTypes",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = Object.freeze({
        IMAGE: "image",
        VIDEO: "video",
        AUDIO: "audio",
        DOCUMENT: "document",
        STICKER: "sticker",
        STICKER_PACK: "sticker-pack"
    });
    const u = "NotReadableError";
    function c(e) {
        return e?.message ?? "";
    }
    function d(t) {
        let a;
        return new (e || (e = n("Promise")))(function(e, n) {
            a = new FileReader;
            a.onload = e;
            a.onerror = function() {
                n(a.error?.name === u ? new (o("WAWebMediaLoadErrors")).FileNotReadableError(`blobToArrayBuffer error: ${c(a.error)}`) : r("err")(`blobToArrayBuffer error: ${c(a.error)}`));
            };
            a.onabort = function() {
                n(r("err")(`blobToArrayBuffer abort: ${c(a.error)}`));
            };
            a.readAsArrayBuffer(t);
        }).then(()=>a.result);
    }
    function m(e) {
        const t = e.webkitSlice ? e.webkitSlice(0, 1) : e.slice(0, 1);
        return d(t).then((e)=>e.byteLength === 1).catch(o("WAWebBoolFunc").returnFalse);
    }
    function p(t) {
        let o;
        let a;
        return new (e || (e = n("Promise")))(function(e, n) {
            o = document.createElement("audio");
            o.addEventListener("loadeddata", e);
            o.addEventListener("error", function() {
                n(r("err")("getAudioDuration: error loading audio"));
            });
            o.src = a = URL.createObjectURL(t);
        }).then(()=>~~o.seekable.end(0)).finally(()=>{
            if (a) {
                URL.revokeObjectURL(a);
            }
        });
    }
    function _(e) {
        const t = e.split("/")[0];
        if (t === s.IMAGE) {
            return s.IMAGE;
        }
        if (t === s.VIDEO) {
            return s.VIDEO;
        }
        if (t === s.AUDIO) {
            return s.AUDIO;
        }
        return s.DOCUMENT;
    }
    function f(e) {
        const t = h(e);
        const n = o("WAWebMimeTypes").isAllowedDocumentMimetype(r("isStringNullOrEmpty")(t) ? null : o("WAWebMimeTypes").EXT_TO_MIME && o("WAWebMimeTypes").EXT_TO_MIME[t], e, false);
        return n;
    }
    function g(e) {
        return e.replace(/\.+$/, "");
    }
    function h(e) {
        const t = g(e.trimRight());
        const n = t.split(".");
        if (n.length > 1) {
            return n[n.length - 1].toLowerCase();
        }
        return null;
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (typeof t.text === "function") {
                return t.text();
            }
            const o = new FileReader;
            yield new (e || (e = n("Promise")))(function(e, n) {
                o.onload = e;
                o.onerror = function(e) {
                    n(r("err")(`blobToText error: ${String(e)}`));
                };
                o.onabort = function(e) {
                    n(r("err")(`blobToText abort: ${String(e)}`));
                };
                o.readAsText(t);
            });
            if (o.result instanceof ArrayBuffer) {
                const a = new TypeError("blobToText error: Invalid result type: ArrayBuffer");
                a.stack;
                throw a;
            }
            if (o.result == null) {
                const i = new TypeError("blobToText: Invalid result type: null");
                i.stack;
                throw i;
            }
            return o.result;
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
    }
    l.FILETYPE = s;
    l.blobToArrayBuffer = d;
    l.validateBlob = m;
    l.getAudioDuration = p;
    l.typeFromMimetype = _;
    l.getMimeTypeForFilepath = f;
    l.removeTrailingDots = g;
    l.getFileExtension = h;
    l.blobToText = y;
    l.isDocument = b;
}, 98);