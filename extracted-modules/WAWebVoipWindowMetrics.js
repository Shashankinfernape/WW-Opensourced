__d("WAWebVoipWindowMetrics", [
    "WALogger",
    "WAWebVoipVideoRendererInterface"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f = false;
    let windowDragged = false;
    let windowResized = false;
    let selfPreviewResized = false;
    let selfPreviewSize = "normal";
    let b = null;
    let v = null;
    function S() {
        R();
        selfPreviewSize = "normal";
    }
    function R() {
        windowDragged = false;
        windowResized = false;
        selfPreviewResized = false;
    }
    function L() {
        if (f) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:windowMetrics] already active, skipping start"
            ])));
            return;
        }
        f = true;
        v = null;
        S();
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[voip:windowMetrics] started"
        ])));
    }
    function E() {
        if (f) {
            v = k();
            f = false;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:windowMetrics] stopped"
            ])));
        }
    }
    function k() {
        if (f) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:windowMetrics] snapshot: dragged=",
                " resized=",
                " selfPreviewResized=",
                " selfPreviewSize=",
                " renderer=",
                ""
            ])), String(windowDragged), String(windowResized), String(selfPreviewResized), selfPreviewSize, b ?? "none");
            return {
                rendererType: b,
                selfPreviewResized,
                selfPreviewSize,
                windowDragged,
                windowResized
            };
        }
        return v;
    }
    function I() {
        R();
    }
    function T(e) {
        if (f) {
            selfPreviewResized = true;
            selfPreviewSize = e;
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:windowMetrics] self-preview size changed: ",
                ""
            ])), e);
        }
    }
    function D() {
        if (f) {
            windowDragged = true;
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:windowMetrics] window dragged"
            ])));
        }
    }
    function x() {
        if (f) {
            windowResized = true;
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:windowMetrics] window resized"
            ])));
        }
    }
    function $(e, t) {
        const n = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.getName(e);
        const r = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.getName(t);
        b = `${n}:${r}`;
        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[voip:windowMetrics] renderer type set: ",
            ""
        ])), b);
    }
    l.startWindowMetrics = L;
    l.stopWindowMetrics = E;
    l.snapshotWindowMetrics = k;
    l.resetWindowMetrics = I;
    l.recordSelfPreviewSizeChanged = T;
    l.recordWindowDragged = D;
    l.recordWindowResized = x;
    l.setRendererType = $;
}, 98);