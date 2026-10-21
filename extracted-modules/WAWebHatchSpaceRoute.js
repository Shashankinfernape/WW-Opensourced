__d("WAWebHatchSpaceRoute", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 2048;
    const l = 32;
    const s = 3;
    const u = /^[A-Za-z0-9._-]{1,128}$/;
    const c = /^(?:\.?\/)+/;
    const d = 32;
    const m = 127;
    const p = Object.freeze({
        method: "GET",
        query: null,
        route: "bundle",
        subpath: ""
    });
    function _(e) {
        if (u.test(e) && !e.startsWith(".")) {
            return e;
        }
        return null;
    }
    function f(t, n) {
        if (t.length > e) {
            return null;
        }
        const r = g(t);
        const o = r[0];
        const query = r[1];
        if (!h(o, query) || !y(o)) {
            return null;
        }
        const subpath = C(o);
        if (!b(subpath)) {
            return null;
        }
        const l = x(subpath);
        if (l != null && l.method === n.toUpperCase()) {
            return babelHelpers.extends({}, l, {
                query,
                subpath
            });
        }
        return null;
    }
    function g(e) {
        const t = e.split("#", 1)[0];
        const n = t.indexOf("?");
        if (n < 0) {
            return [
                t,
                null
            ];
        }
        const r = t.slice(n + 1);
        return [
            t.slice(0, n),
            r === "" ? null : r
        ];
    }
    function h(e, query) {
        return !I(e, D) && (query == null || !I(query, D) && !L(query));
    }
    function y(e) {
        return !e.includes("\\") && !e.includes("://") && !e.startsWith("//");
    }
    function C(e) {
        const t = e.replace(c, "");
        const n = t.split("/").filter((e)=>e !== "").join("/");
        if (t.endsWith("/") && n !== "") {
            return `${n}/`;
        }
        return n;
    }
    function b(subpath) {
        const t = v(subpath);
        if (t == null) {
            return false;
        }
        const n = S(subpath, t);
        return n != null && !n.some(E) && n.every((e)=>e.split("/").filter((e)=>e !== "").length <= l);
    }
    function v(e) {
        try {
            return decodeURIComponent(e);
        } catch (e) {
            return null;
        }
    }
    function S(e, t) {
        for(var n = [
            e,
            t
        ], r = R(t); r !== n[n.length - 1];){
            if (n.length > s) {
                return null;
            }
            n.push(r);
            r = R(r);
        }
        return n;
    }
    function R(e) {
        return e.replace(/%([0-9A-Fa-f]{2})/g, (e, t)=>String.fromCharCode(parseInt(t, 16)));
    }
    function L(query) {
        const t = v(query);
        const n = t == null ? null : S(query, t);
        return n == null || n.some((e)=>I(e, T));
    }
    function E(e) {
        return e.includes("\\") || I(e, T) || e.split("/").some((e)=>e === "." || e === "..") || k(e);
    }
    function k(e) {
        const t = e.toLowerCase().split("/").filter((e)=>e !== "");
        return t.some((e, n)=>e === "spaces" && t[n + 1] === "cvm");
    }
    function I(e, t) {
        for(let n = 0; n < e.length; n++){
            if (t(e.charCodeAt(n))) {
                return true;
            }
        }
        return false;
    }
    function T(e) {
        return e < d || e === m;
    }
    function D(e) {
        return e <= d || e === m;
    }
    function x(subpath) {
        if (subpath === "") {
            return {
                method: "GET",
                route: "bundle"
            };
        }
        if (subpath === "icon.jpg" || subpath === "icon.png") {
            return {
                method: "GET",
                route: "icon"
            };
        }
        if (subpath === "actions") {
            return {
                method: "POST",
                route: "actions"
            };
        }
        if (subpath === "actions_stream") {
            return {
                method: "POST",
                route: "actions_stream"
            };
        }
        return $(subpath);
    }
    function $(subpath) {
        if (P(subpath, "assets/")) {
            return {
                method: "GET",
                route: "asset"
            };
        }
        if (P(subpath, "blobs/")) {
            return {
                method: "GET",
                route: "blob"
            };
        }
        return null;
    }
    function P(e, t) {
        return e.length > t.length && e.startsWith(t);
    }
    i.HATCH_SPACE_BUNDLE_PATH = p;
    i.toHatchSpaceSlug = _;
    i.resolveHatchSpacePath = f;
}, 66);