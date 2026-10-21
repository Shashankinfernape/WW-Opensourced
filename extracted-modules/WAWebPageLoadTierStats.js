__d("WAWebPageLoadTierStats", [
    "CometQPLPayloadStore",
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Map([
        [
            "avif",
            "img"
        ],
        [
            "css",
            "css"
        ],
        [
            "gif",
            "img"
        ],
        [
            "ico",
            "img"
        ],
        [
            "jpeg",
            "img"
        ],
        [
            "jpg",
            "img"
        ],
        [
            "js",
            "js"
        ],
        [
            "mjs",
            "js"
        ],
        [
            "otf",
            "font"
        ],
        [
            "png",
            "img"
        ],
        [
            "svg",
            "img"
        ],
        [
            "ttf",
            "font"
        ],
        [
            "webp",
            "img"
        ],
        [
            "woff",
            "font"
        ],
        [
            "woff2",
            "font"
        ]
    ]);
    function u() {
        const e = c();
        const t = d();
        const n = m(t);
        const r = {};
        const o = {
            cache_count: 0,
            cache_rate: 0,
            decoded_body_size: 0,
            encoded_body_size: 0,
            total_count: 0,
            transfer_size: 0
        };
        for (const a of e){
            const { refs: i, url: l } = a;
            const s = n.get(v(l));
            if (s) {
                o.decoded_body_size += s.decodedBodySize;
                o.encoded_body_size += s.encodedBodySize;
                o.transfer_size += +s.transferSize;
                o.total_count += 1;
                if (+s.transferSize == 0) {
                    o.cache_count += 1;
                }
                for (const u of i){
                    const g = `${u}_start`;
                    const h = `${u}_end`;
                    r[g] = Math.min(s.requestStart, r[g] ?? Number.POSITIVE_INFINITY);
                    r[h] = Math.max(s.responseEnd, r[h] ?? Number.NEGATIVE_INFINITY);
                }
            }
        }
        if (o.total_count > 0) {
            o.cache_rate = Math.round(o.cache_count / o.total_count * 100);
        }
        return [
            r,
            babelHelpers.extends({}, o, p(e, t))
        ];
    }
    function c() {
        const e = o("CometQPLPayloadStore").getPayloadMap();
        if (!e) {
            return [];
        }
        const t = Object.values(e).at(0);
        if (t) {
            return Object.values(t);
        }
        return [];
    }
    function d() {
        if (typeof (e || (e = r("performance"))).getEntriesByType !== "function") {
            return [];
        }
        return (e || (e = r("performance"))).getEntriesByType("resource");
    }
    function m(e) {
        const t = new Map;
        e.forEach((e)=>{
            const n = v(e.name);
            t.set(n, e);
        });
        return t;
    }
    function p(e, t) {
        const n = _(e);
        const r = f();
        const o = new Set;
        for (const a of t){
            const l = v(a.name);
            const s = b(l);
            if (!(s == null || o.has(l) || !n.has(s.host))) {
                o.add(l);
                const u = r[y(s.pathname)] ?? r.other;
                h(u, a);
            }
        }
        return C(r);
    }
    function _(e) {
        const t = new Set;
        for (const n of e){
            const o = n.url;
            const a = b(o)?.host;
            if (a != null) {
                t.add(a);
            }
        }
        return t;
    }
    function f() {
        return {
            css: g(),
            font: g(),
            img: g(),
            js: g(),
            other: g()
        };
    }
    function g() {
        return {
            count: 0,
            decodedBodySize: 0,
            encodedBodySize: 0,
            transferSize: 0
        };
    }
    function h(e, t) {
        e.count += 1;
        e.decodedBodySize += t.decodedBodySize;
        e.encodedBodySize += t.encodedBodySize;
        e.transferSize += +t.transferSize;
    }
    function y(e) {
        const n = e.slice(e.lastIndexOf(".") + 1).toLowerCase();
        return s.get(n) ?? "other";
    }
    function C(e) {
        return {
            static_css_count: e.css.count,
            static_css_decoded_body_size: e.css.decodedBodySize,
            static_css_encoded_body_size: e.css.encodedBodySize,
            static_css_transfer_size: e.css.transferSize,
            static_font_count: e.font.count,
            static_font_decoded_body_size: e.font.decodedBodySize,
            static_font_encoded_body_size: e.font.encodedBodySize,
            static_font_transfer_size: e.font.transferSize,
            static_img_count: e.img.count,
            static_img_decoded_body_size: e.img.decodedBodySize,
            static_img_encoded_body_size: e.img.encodedBodySize,
            static_img_transfer_size: e.img.transferSize,
            static_js_count: e.js.count,
            static_js_decoded_body_size: e.js.decodedBodySize,
            static_js_encoded_body_size: e.js.encodedBodySize,
            static_js_transfer_size: e.js.transferSize,
            static_other_count: e.other.count,
            static_other_decoded_body_size: e.other.decodedBodySize,
            static_other_encoded_body_size: e.other.encodedBodySize,
            static_other_transfer_size: e.other.transferSize
        };
    }
    function b(e) {
        try {
            return new URL(e);
        } catch (e) {
            return null;
        }
    }
    function v(e) {
        return e.split("#")[0];
    }
    l.getTierStats = u;
}, 98);