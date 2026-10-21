__d("WAWebHatchSpaceCardOpenTarget", [
    "WAWebHatchSpaceRoute"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "succeeded";
    const s = [
        "constructing",
        "updating"
    ];
    const u = "READY";
    const c = [
        "muse.ai",
        "meta.ai",
        "metaaiusercontent.com"
    ];
    function d(e, t) {
        if (!t || !p(e)) {
            return {
                kind: "none"
            };
        }
        for (const r of [
            e.shareUrl,
            e.source === "SAVED" ? e.sourceUrl : null
        ]){
            const o = r != null ? _(r) : null;
            if (o != null) {
                return {
                    kind: "url",
                    url: o
                };
            }
        }
        return m(e) ?? {
            kind: "unavailable"
        };
    }
    function m(e) {
        const n = e.source === "LOCAL" && e.status === u && e.slug != null ? o("WAWebHatchSpaceRoute").toHatchSpaceSlug(e.slug) : null;
        if (n == null) {
            return null;
        }
        return {
            kind: "host",
            slug: n,
            title: e.displayName ?? ""
        };
    }
    function p(e) {
        return e.canOpen && (y(e.shareUrl) || e.source === "LOCAL" && y(e.slug) || e.source === "SAVED" && y(e.sourceUrl));
    }
    function _(e) {
        if (!h(e)) {
            return null;
        }
        let t;
        try {
            t = new URL(e);
        } catch (e) {
            return null;
        }
        const n = t;
        const { hostname, password, port, protocol, username } = n;
        if (protocol !== "https:" || username !== "" || password !== "" || port !== "" || hostname === "" || hostname.endsWith(".") || !c.some((e)=>hostname === e || hostname.endsWith(`.${e}`))) {
            return null;
        }
        return t.href;
    }
    function f(t) {
        if (t.constructionStatus === e) {
            const n = o("WAWebHatchSpaceRoute").toHatchSpaceSlug(t.itemKey);
            if (n != null) {
                return {
                    kind: "host",
                    slug: n,
                    title: t.displayName
                };
            }
            const r = t.shareUrl != null ? _(t.shareUrl) : null;
            if (r != null) {
                return {
                    kind: "url",
                    url: r
                };
            }
            return {
                kind: "unavailable"
            };
        }
        const a = t.constructionStatus != null && s.includes(t.constructionStatus) && t.shareUrl != null ? _(t.shareUrl) : null;
        if (a != null) {
            return {
                kind: "url",
                url: a
            };
        }
        return {
            kind: "none"
        };
    }
    function g(e) {
        return _(e) != null;
    }
    function h(e) {
        if (/[\s\u0000-\u001f\u007f]/.test(e) || !/^https:\/\//i.test(e)) {
            return false;
        }
        const t = e.slice(8).split(/[/?#]/, 1)[0];
        return t !== "" && /^[\u0021-\u007e]+$/.test(t) && !/[@\\%]/.test(t);
    }
    function y(e) {
        return e != null && e !== "";
    }
    l.getHatchSpaceCardOpenTarget = d;
    l.toHatchShareUrl = _;
    l.getHatchLibrarySpaceOpenTarget = f;
    l.isHatchShareUrl = g;
}, 98);