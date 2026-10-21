__d("WAWebMediaLoad", [
    "Promise",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WAOpusRecorderPlayer",
    "WAPromiseDelays",
    "WAPromiseTimeout",
    "WAWebMediaFileErrors",
    "WAWebMediaLoadErrors",
    "WAWebMimeTypes",
    "WAWebNoop",
    "WAWebPonyfillsMediaError",
    "WAWebUA",
    "WAWebWamEnumWebcMediaLoadResultCode",
    "WAWebWebcMediaLoadWamEvent",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    const y = 600000;
    const C = new Audio().canPlayType("audio/ogg");
    let b = 0;
    let v = (h || (h = n("Promise"))).resolve();
    function S(e) {
        if (!e || !e.error) {
            return null;
        }
        const n = e.error;
        const o = Object.keys(r("WAWebPonyfillsMediaError"));
        const a = o.find((e)=>r("WAWebPonyfillsMediaError")[e] === n.code) ?? `UNKNOWN CODE ${n.code}`;
        const i = n.message;
        const l = i != null && ~i.indexOf(":") ? i.split(":")[0] : "";
        if (l) {
            return `${a}: ${l}`;
        }
        return a;
    }
    function R(e, t = true) {
        let a;
        return new (h || (h = n("Promise")))(function(n, i) {
            a = new Image;
            const l = /^(?:data|blob):/.test(e);
            if (t && !l) {
                a.setAttribute("crossOrigin", "anonymous");
            }
            a.onload = n;
            a.onabort = function() {
                i(r("err")("loadImage onabort"));
            };
            a.onerror = function(e) {
                i(new (o("WAWebMediaFileErrors")).InvalidImageFileType("Image tag load error"));
            };
            a.src = e;
        }).then(()=>a);
    }
    function L(e) {
        return R(e).then((e)=>{
            if (e && e.naturalWidth > 0) {
                return {
                    img: e,
                    fullWidth: e.naturalWidth,
                    fullHeight: e.naturalHeight
                };
            }
            throw new (o("WAWebMediaLoadErrors")).MediaLoadError("image loaded with zero width");
        }).catch(()=>{
            throw new (o("WAWebMediaLoadErrors")).MediaLoadError("unable to render image");
        });
    }
    function E(e) {
        const t = v.then(()=>k(e));
        v = o("WAPromiseTimeout").promiseTimeout(t, 1000).then(r("WAWebNoop"), r("WAWebNoop"));
        return t;
    }
    function k(t) {
        const r = new (o("WAWebWebcMediaLoadWamEvent")).WebcMediaLoadWamEvent;
        let a = null;
        let i;
        let l;
        const f = ++b;
        function g() {
            if (i && a) {
                if (document.body) {
                    document.body.removeChild(a);
                }
                a = null;
            }
        }
        let y = true;
        const C = new (h || (h = n("Promise")))(function(n, r) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "MediaLoad:video called (#",
                ")"
            ])), f);
            let d = false;
            let m = false;
            i = document.createElement("video");
            i.setAttribute("crossOrigin", "anonymous");
            i.volume = 0;
            i.muted = true;
            const p = i;
            p.playsinline = true;
            const _ = function() {
                if (m && d) {
                    n();
                }
            };
            i.onloadedmetadata = function() {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaLoad:video.onloadedmetadata #",
                    " ready=",
                    " w=",
                    ""
                ])), f, m, i.videoWidth);
                i.onloadedmetadata = null;
                d = true;
                _();
            };
            i.oncanplaythrough = function() {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaLoad:video.oncanplaythrough #",
                    " meta=",
                    " w=",
                    ""
                ])), f, d, i.videoWidth);
                i.oncanplaythrough = null;
                i.onseeked = function() {
                    m = true;
                    i.onseeked = null;
                    _();
                };
                i.currentTime = 0;
            };
            i.onerror = function() {
                const e = i.error ? i.error.message : "no error message";
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaLoad:video.onerror #",
                    ": ",
                    "\n Blob info -> size:",
                    ", type: ",
                    ""
                ], [
                    "MediaLoad:video.onerror #",
                    ": ",
                    "\\n Blob info -> size:",
                    ", type: ",
                    ""
                ])), f, String(e), t.size, t.type);
                const n = S(i);
                r(new (o("WAWebMediaLoadErrors")).UnableToPlayVideoError(n));
            };
            i.src = l = window.URL.createObjectURL(t);
            if (o("WAWebUA").UA.isSafari) {
                a = document.createElement("div");
                const g = a;
                g.style = "opacity: 0.004";
                g.appendChild(i);
                if (document.body) {
                    document.body.appendChild(g);
                }
            }
            i.load();
            i.currentTime = 1;
        }).finally(()=>{
            y = false;
        });
        self.setTimeout(function() {
            g();
            if (y) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "unable to load video #",
                    " (",
                    " bytes)"
                ])), f, t.size);
                new (o("WAWebWebcMediaLoadWamEvent")).WebcMediaLoadWamEvent({
                    webcMediaLoadResult: o("WAWebWamEnumWebcMediaLoadResultCode").WEBC_MEDIA_LOAD_RESULT_CODE.SILENCE
                }).commit();
            }
        }, 8000);
        const v = 20000;
        const R = 10;
        const L = o("WAPromiseTimeout").promiseTimeout(C, v).then(()=>o("WAPromiseDelays").delayMs(R)).then(()=>{
            r.markWebcMediaLoadT();
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "MediaLoad:video #",
                " successful"
            ])), f);
            i.pause();
            if (i.videoWidth > 0) {
                r.webcMediaLoadResult = o("WAWebWamEnumWebcMediaLoadResultCode").WEBC_MEDIA_LOAD_RESULT_CODE.SUCCESS;
                r.commit();
                return {
                    video: i,
                    fullWidth: i.videoWidth,
                    fullHeight: i.videoHeight,
                    duration: i.duration
                };
            }
            throw i.duration > 0 ? (o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "MediaLoad:video #",
                " no dims, state=",
                " w=",
                ""
            ])), f, i.readyState, i.videoWidth), new (o("WAWebMediaLoadErrors")).MediaUnsupportedError("video loaded with duration but no dims")) : (r.webcMediaLoadResult = o("WAWebWamEnumWebcMediaLoadResultCode").WEBC_MEDIA_LOAD_RESULT_CODE.ZEROWIDTH, r.commit(), new (o("WAWebMediaLoadErrors")).MediaLoadError("video loaded with zero width"));
        }).catch(o("WAFilteredCatch").filteredCatch(o("WACustomError").TimeoutError, function(e) {
            o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "MediaLoad:video load error, currentTime=",
                ". duration=",
                ""
            ])), i.currentTime, i.duration).sendLogs("video-load-timeout", {
                sampling: 0.01
            });
            throw e;
        })).finally(()=>{
            g();
            if (i) {
                i.onloadedmetadata = null;
                i.onloadeddata = null;
                i.oncanplaythrough = null;
                i.ontimeupdate = null;
                i.onerror = null;
            }
            if (l) {
                window.URL.revokeObjectURL(l);
            }
        });
        L.catch(()=>{
            T(i);
        });
        return L;
    }
    function I(e) {
        return E(e).then(({ duration: t, fullHeight: n, fullWidth: r, video: o })=>{
            T(o);
            return {
                width: r,
                height: n,
                duration: t
            };
        });
    }
    function T(e) {
        try {
            e.pause();
            e.src = "";
            e.load();
        } catch (e) {
            o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "Error"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("dispose-video-error");
        }
    }
    function D(e, t) {
        const a = t != null && t !== "" ? t : e.type;
        if (o("WAWebMimeTypes").isOpus(a) && !C) {
            if (e.size <= y) {
                const i = new (r("WAOpusRecorderPlayer"))(e);
                return i.generateBlob();
            }
            o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "MediaLoad:transcode blob too large=",
                ""
            ])), e.size);
            return (h || (h = n("Promise"))).reject(new (o("WAWebMediaLoadErrors")).TranscodeBlobTooLargeError);
        }
        return (h || (h = n("Promise"))).resolve(e);
    }
    l.canPlayOgg = C;
    l.loadImage = R;
    l.image = L;
    l.loadVideo = E;
    l.videoWidthHeightDuration = I;
    l.disposeVideo = T;
    l.transcode = D;
}, 98);