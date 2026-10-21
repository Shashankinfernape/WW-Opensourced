__d("WAWebMuseCtaLinkOverride", [
    "WAWebHatchUrl",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    const e = "6760173601";
    function s(t) {
        try {
            const n = new URL(t);
            return n.protocol === "itms-apps:" && n.hostname === "itunes.apple.com" && n.pathname.endsWith(`/id${e}`);
        } catch (e) {
            return false;
        }
    }
    function u(e) {
        try {
            const t = new URL(e);
            if (t.protocol !== "whatsapp:" || t.hostname.toLowerCase() !== "hatch" || t.pathname !== "" && t.pathname !== "/") {
                return false;
            }
            const n = t.searchParams.get("link_to_open");
            return n == null || new URL(n).protocol.toLowerCase() === "hatch:";
        } catch (e) {
            return false;
        }
    }
    function c(e) {
        return s(e) || u(e);
    }
    function d(e) {
        if (e == null || !c(e) || r("justknobx")._("5912")) {
            return e;
        }
        return o("WAWebHatchUrl").getHatchJoinUrl() ?? e;
    }
    l.overrideCtaUrlIfNeeded = d;
}, 98);