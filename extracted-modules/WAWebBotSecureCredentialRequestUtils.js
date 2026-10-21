__d("WAWebBotSecureCredentialRequestUtils", [
    "WAWebUnifiedResponseUtils",
    "isStringNotNullAndNotWhitespaceOnly"
], function(t, n, r, o, a, i, l) {
    const e = new Set([
        "PASSWORD",
        "USERNAME"
    ]);
    function s({ footer_sections, sections }) {
        const length = [].concat(sections, footer_sections ?? []).flatMap((e)=>o("WAWebUnifiedResponseUtils").getPrimitives(e.view_model)).filter(o("WAWebUnifiedResponseUtils").isSecureCredentialRequest).length;
        return length === 1 && sections.some((e)=>((e)=>{
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAISingleLayoutViewModel" && (typeof e.primitive === "object" && e.primitive !== null || typeof e.primitive === "function") && e.primitive.__typename === "GenAISecureCredentialRequestPrimitive" && "fields" in e.primitive) {
                    const t = e.primitive.fields;
                    const n = e.primitive;
                    return u(t) && c(n);
                }
                return false;
            })(e.view_model));
    }
    function u(t) {
        return Array.isArray(t) && t.some((e)=>e != null) && t.every((t)=>t == null || e.has(String(t.name)));
    }
    function c(e) {
        e: {
            const t = e;
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.__typename === "GenAISecureCredentialRequestPrimitive") {
                const n = t;
                const { fields, host, page_url, request_id, status, title } = n;
                return [
                    request_id,
                    title,
                    host,
                    page_url
                ].every(d) && Array.isArray(fields) && fields.some((e)=>d(e?.label)) && status === "PENDING" && m(page_url, host);
            }
            return false;
        }
    }
    function d(e) {
        return typeof e === "string" && r("isStringNotNullAndNotWhitespaceOnly")(e);
    }
    function m(page_url, host) {
        try {
            const n = new URL(page_url);
            const { hostname, password, protocol, username } = n;
            return protocol === "https:" && username === "" && password === "" && p(hostname) === p(host);
        } catch (e) {
            return false;
        }
    }
    function p(e) {
        return e.trim().toLowerCase().replace(/^www\./, "");
    }
    l.isLoneTopLevelLoginRequest = s;
    l.isLoginRequest = u;
    l.normalizeHost = p;
}, 98);