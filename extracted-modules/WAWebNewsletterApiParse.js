__d("WAWebNewsletterApiParse", [
    "$InternalEnum",
    "WAWebApiParseUtils",
    "WAWebChatEntryPoint",
    "WAWebWamEnumTsSurface"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "Handle",
        "InviteCode",
        "Id"
    ]);
    const s = "channel";
    const u = "create";
    const c = "directory";
    const d = new RegExp(`^${o("WAWebApiParseUtils").ORIGIN}${o("WAWebApiParseUtils").OPTIONAL_PATH_PART}/accept/?\\?channel_invite_code=(\\w+)(?:&.*)?\$`, "i");
    const m = new RegExp(`^whatsapp://(${s})/(\\w+)/?(?:\\?.*)?\$`, "i");
    function p(e) {
        return e.length === 0 || e.length === 1 && e[0] === "";
    }
    function _(t, n) {
        try {
            const r = new URL(t);
            const a = r.pathname;
            const i = a.split("/");
            const l = i[0];
            const _ = i[1];
            const g = i[2];
            const h = babelHelpers.arrayLikeToArray(i).slice(3);
            if (_ === s && o("WAWebApiParseUtils").isWhatsappHost(r)) {
                if (p(h)) {
                    switch(g){
                        case u:
                            return {
                                type: "create",
                                url: r.href
                            };
                        case c:
                            return {
                                type: "directory",
                                url: r.href
                            };
                        default:
                            if (g != null && g !== "") {
                                return {
                                    identifier: g,
                                    url: r.href,
                                    identifierType: e.InviteCode,
                                    type: "view",
                                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Link,
                                    discoverySurface: n ?? o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_LINK
                                };
                            }
                    }
                }
                if (g !== u && g !== c && (h.length === 1 || h.length === 2 && h[1] === "")) {
                    const y = parseInt(h[0], 10);
                    return babelHelpers.extends({
                        identifier: g,
                        url: r.href,
                        identifierType: e.InviteCode,
                        type: "view",
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Link,
                        discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_LINK
                    }, !Number.isNaN(y) && {
                        serverId: y
                    });
                }
            }
            const C = f(d, t, r.searchParams.get("message_id"));
            if (C != null) {
                return C;
            }
            const b = f(m, t);
            return b ?? null;
        } catch (e) {
            return null;
        }
    }
    function f(t, n, r) {
        const a = n.match(t);
        if (a) {
            const i = a[2];
            const l = r == null ? null : parseInt(r, 10);
            if (i === u) {
                return {
                    type: "create",
                    url: n
                };
            }
            if (i === c) {
                return {
                    type: "directory",
                    url: n
                };
            }
            return babelHelpers.extends({
                identifier: a[2],
                url: a[1] || "/",
                identifierType: e.InviteCode,
                type: "view",
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink,
                discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_LINK
            }, l != null && !Number.isNaN(l) && {
                serverId: l
            });
        }
        return null;
    }
    function g(e) {
        if (e == null) {
            return false;
        }
        if (e.startsWith("http://") || e.startsWith("https://")) {
            return _(e) != null;
        }
        return _(`https://${e}`) != null;
    }
    l.NewsletterIdentifierType = e;
    l.parseNewsletter = _;
    l.isNewsletterInviteCode = g;
}, 98);