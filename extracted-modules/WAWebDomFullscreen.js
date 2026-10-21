__d("WAWebDomFullscreen", [
    "Promise",
    "WALogger",
    "WAWebEventEmitter"
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
    let y;
    let C;
    const b = {
        fullscreenEnabled: 0,
        fullscreenElement: 1,
        requestFullscreen: 2,
        exitFullscreen: 3,
        fullscreenchange: 4,
        fullscreenerror: 5
    };
    const v = [
        "webkitFullscreenEnabled",
        "webkitFullscreenElement",
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
    ];
    const S = [
        "mozFullScreenEnabled",
        "mozFullScreenElement",
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozfullscreenchange",
        "mozfullscreenerror"
    ];
    const R = [
        "msFullscreenEnabled",
        "msFullscreenElement",
        "msRequestFullscreen",
        "msExitFullscreen",
        "msfullscreenchange",
        "msfullscreenerror"
    ];
    let L;
    let E;
    const k = ((t)=>{
        function r() {
            let n;
            n = t.call(this) || this;
            n.requestFullscreen = function(t) {
                if (!t) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "The element requesting fullscreen is null or undefined."
                    ])));
                    return;
                }
                if (!L) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Your browser does not support fullscreen API."
                    ])));
                    return;
                }
                t[L[b.requestFullscreen]]();
            };
            n.$Fullscreen$p_1 = function(e) {
                n.trigger("fullscreen_change", e);
            };
            n.$Fullscreen$p_2 = function(e) {
                n.trigger("fullscreen_error", e);
            };
            if (typeof window !== "object" || typeof window.document !== "object") {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "document object does not exist"
                ])));
                return babelHelpers.assertThisInitialized(n);
            }
            E = window.document;
            const r = E;
            if ("fullscreenEnabled" in E) {
                L = Object.keys(b);
            } else if (v[b.fullscreenEnabled] in E) {
                L = v;
            } else if (S[b.fullscreenEnabled] in E) {
                L = S;
            } else if (R[b.fullscreenEnabled] in E) {
                L = R;
            }
            if (!L) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Your browser does not support fullscreen API."
                ])));
                return babelHelpers.assertThisInitialized(n);
            }
            const a = L;
            r.addEventListener(a[b.fullscreenchange], n.$Fullscreen$p_1);
            r.addEventListener(a[b.fullscreenerror], n.$Fullscreen$p_2);
            return n;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.exitFullscreen = function() {
            if (E) {
                if (L) {
                    return E[L[b.exitFullscreen]].bind(E)();
                }
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Your browser does not support fullscreen API."
                ])));
                return (C || (C = n("Promise"))).resolve();
            }
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "document object does not exist"
            ])));
            return (C || (C = n("Promise"))).resolve();
        };
        r_prototype.isFullscreenMode = function() {
            if (E) {
                if (L) {
                    return !!E[L[b.fullscreenElement]];
                }
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Your browser does not support fullscreen API."
                ])));
                return false;
            }
            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "document object does not exist"
            ])));
            return false;
        };
        r_prototype.isFullscreenEnabled = function() {
            if (E) {
                if (L) {
                    return !!E[L[b.fullscreenEnabled]];
                }
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "Your browser does not support fullscreen API."
                ])));
                return false;
            }
            o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "document object does not exist"
            ])));
            return false;
        };
        r_prototype.getFullscreenElement = function() {
            if (!E) {
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "document object does not exist"
                ])));
                return;
            }
            if (!L) {
                o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "Your browser does not support fullscreen API."
                ])));
                return;
            }
            return E[L[b.fullscreenElement]];
        };
        return r;
    })(r("WAWebEventEmitter"));
    const I = new k;
    l.default = I;
}, 98);