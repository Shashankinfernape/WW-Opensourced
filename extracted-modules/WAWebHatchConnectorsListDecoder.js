__d("WAWebHatchConnectorsListDecoder", [
    "WATypeUtils",
    "WAWebHatchJsonReaders",
    "WAWebURLUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        ".fbcdn.net",
        ".whatsapp.net"
    ];
    function s(e) {
        const t = o("WAWebHatchJsonReaders").readArray(e, "connectors");
        if (t == null) {
            return null;
        }
        const n = [];
        for (const r of t){
            const a = u(r);
            if (a != null) {
                n.push(a);
            }
        }
        return n;
    }
    function u(e) {
        const t = o("WAWebHatchJsonReaders").readTrimmedString(e, "id");
        const n = o("WAWebHatchJsonReaders").readTrimmedString(e, "name");
        if (o("WAWebHatchJsonReaders").isBlankText(t) || o("WAWebHatchJsonReaders").isBlankText(n)) {
            return null;
        }
        return {
            id: t,
            name: n,
            description: o("WAWebHatchJsonReaders").trimToNull(o("WAWebHatchJsonReaders").readTrimmedString(e, "description")),
            iconUrl: c(e),
            state: d(e),
            managementKind: m(e),
            supportsMultipleAccounts: o("WAWebHatchJsonReaders").readBool(e, "supports_multiple_accounts") === true,
            isCustom: o("WAWebHatchJsonReaders").readBool(e, "is_custom") === true,
            consent: p(o("WAWebHatchJsonReaders").readObject(e, "consent"))
        };
    }
    function c(t) {
        const n = o("WAWebHatchJsonReaders").trimToNull(o("WAWebHatchJsonReaders").readTrimmedString(t, "icon_url"));
        if (n == null || r("WAWebURLUtils").isHttps(n) !== true) {
            return null;
        }
        const a = r("WAWebURLUtils").hostname(n).toLowerCase();
        if (e.some((e)=>a.endsWith(e))) {
            return n;
        }
        return null;
    }
    function d(e) {
        return ((e)=>{
            switch(e){
                case "connected":
                    return "connected";
                case "disconnected":
                    return "disconnected";
                case "coming_soon":
                    return "coming_soon";
                default:
                    return "unknown";
            }
        })(o("WAWebHatchJsonReaders").readTrimmedString(e, "state"));
    }
    function m(e) {
        return ((e)=>{
            switch(e){
                case "auth":
                    return "auth";
                case "policy_only":
                    return "policy_only";
                default:
                    return "unknown";
            }
        })(o("WAWebHatchJsonReaders").readTrimmedString(e, "management_kind"));
    }
    function p(e) {
        const n = o("WAWebHatchJsonReaders").readObject(e, "hatch") ?? e;
        const r = _(n);
        const a = g(n);
        if (r.length === 0 && a.length === 0) {
            return null;
        }
        return {
            bullets: r,
            footerParagraphs: a
        };
    }
    function _(e) {
        const t = [];
        for (const n of o("WAWebHatchJsonReaders").readArray(e, "bullets") ?? []){
            const a = o("WAWebHatchJsonReaders").trimToNull(o("WAWebHatchJsonReaders").readTrimmedString(n, "text"));
            if (a != null) {
                t.push({
                    icon: f(n),
                    title: o("WAWebHatchJsonReaders").trimToNull(o("WAWebHatchJsonReaders").readTrimmedString(n, "title")),
                    text: a
                });
            }
        }
        return t;
    }
    function f(e) {
        return ((e)=>{
            switch(e){
                case "storage":
                    return "storage";
                case "data_types":
                    return "data_types";
                case "caution":
                    return "caution";
                case "info":
                    return "info";
                default:
                    return "unspecified";
            }
        })(o("WAWebHatchJsonReaders").readTrimmedString(e, "icon"));
    }
    function g(e) {
        const t = [];
        for (const n of o("WAWebHatchJsonReaders").readArray(e, "footer_paragraphs") ?? []){
            const a = o("WATypeUtils").isString(n) ? o("WAWebHatchJsonReaders").trimToNull(n) : null;
            if (a != null) {
                t.push(a);
            }
        }
        return t;
    }
    l.decodeHatchConnectorsList = s;
    l.decodeHatchConnectConsent = p;
}, 98);