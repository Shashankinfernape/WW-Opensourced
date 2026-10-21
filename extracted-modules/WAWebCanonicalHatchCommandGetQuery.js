__d("WAWebCanonicalHatchCommandGetQuery", [
    "WAWebCanonicalHatchCommandGetQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e !== undefined ? e : e = n("WAWebCanonicalHatchCommandGetQuery.graphql");
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebRelayClient").fetchQuery(s, {}, {
                environmentType: "whatsapp_web"
            });
            const t = e?.wa_genai_hatch_command_get;
            if (t == null) {
                return [];
            }
            return t.filter((e)=>e.id != null && e.name != null && e.prompt != null).map((e)=>({
                    id: e.id ?? "",
                    name: e.name ?? "",
                    description: e.description ?? "",
                    prompt: e.prompt ?? ""
                }));
        });
        return c.apply(this, arguments);
    }
    l.fetchHatchCommandGet = u;
}, 98);