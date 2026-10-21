__d("WAWebUnifiedResponseUtils", [
    "WACryptoSha256",
    "WAHex",
    "WAWebBotUnifiedResponseGating",
    "WAWebQplFlowWrapper",
    "asyncToGeneratorRuntime",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(891428050, "1412");
    const s = new Set([
        "LOCAL",
        "SAVED"
    ]);
    const u = (()=>{
        function t() {}
        const n = t.prototype;
        n.markerStart = function(n) {
            if (e != null) {
                o("WAWebQplFlowWrapper").QPL.markerStart(e, {
                    annotations: n
                });
            }
        };
        n.markerEnd = function(n) {
            if (e != null) {
                o("WAWebQplFlowWrapper").QPL.markerEnd(e, n);
            }
        };
        n.markerPoint = function(n) {
            if (e != null) {
                o("WAWebQplFlowWrapper").QPL.markerPoint(e, n);
            }
        };
        return t;
    })();
    function c(e) {
        if (e == null) {
            return [];
        }
        if (e.primitive) {
            return [
                e.primitive
            ];
        }
        if (e.primitives) {
            return e.primitives;
        }
        return [];
    }
    function d(e) {
        const t = [];
        for (const n of e.sections){
            for (const r of c(n.view_model)){
                if ("imagine_type" in r) {
                    t.push(r);
                }
            }
        }
        return t;
    }
    function m(e) {
        return String(e) === "ANIMATE";
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WACryptoSha256").sha256(new TextEncoder().encode(e));
            return o("WAHex").toLowerCaseHex(new Uint8Array(t));
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        const t = e.unifiedResponse;
        if (t == null) {
            return false;
        }
        return g(t) || o("WAWebBotUnifiedResponseGating").isUnifiedResponseReceiverEnabled(e.t);
    }
    function g(e) {
        return h(e) && o("WAWebBotUnifiedResponseGating").isUnifiedResponseImagineReceiverEnabled();
    }
    function h(e) {
        if (e == null) {
            return false;
        }
        let t = false;
        for (const n of e.sections){
            const r = c(n.view_model);
            for (const o of r){
                if (o.__typename === "GenAIImaginePrimitive") {
                    t = true;
                } else if (o.__typename === "GenAIMarkdownTextUXPrimitive") {
                    if (o.inline_entities && o.inline_entities.length > 0) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }
        return t;
    }
    function y(e) {
        return C(e) != null;
    }
    function C(e) {
        if (e == null) {
            return null;
        }
        const n = [].concat(e.sections, e.footer_sections ?? []);
        for (const r of n){
            for (const o of c(r.view_model)){
                if (o.__typename === "GenAIMetaSubsQuotaUpsellPrimitive") {
                    return o;
                }
            }
        }
        return null;
    }
    function b(e) {
        if (e == null || (e.footer_sections ?? []).length > 0) {
            return null;
        }
        const n = e.sections.at(-1);
        const r = c(n?.view_model).at(-1);
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAIBrowserTaskPrimitive" && "browser_task_id" in e) {
                const t = e.browser_task_id;
                if (typeof t === "string" && t.trim() !== "") {
                    return t.trim();
                }
                return null;
            }
            return null;
        })(r);
    }
    function v(e) {
        const r = e.sections;
        return b(e) != null && r.length === 1 && c(r[0].view_model).length === 1 && (e.embedded_screens ?? []).length === 0 && (e.nested_responses ?? []).length === 0 && e.streaming_action == null;
    }
    function S(e) {
        return C(e)?.benefit_type;
    }
    const R = [
        "GenAIFilePrimitive",
        "GenAIImaginePrimitive",
        "GenAIImagePrimitive",
        "GenAIReelPrimitive"
    ];
    function L(e) {
        if (e != null) {
            return {
                data: e
            };
        }
    }
    function E(e) {
        if (e == null) {
            return false;
        }
        for (const t of e.sections){
            const n = c(t.view_model);
            for (const r of n){
                if (R.includes(r.__typename)) {
                    return true;
                }
            }
        }
        return false;
    }
    function k(e) {
        if (e == null) {
            return false;
        }
        return N(e).some((e)=>c(e.view_model).some(T));
    }
    function I(e) {
        let t = 0;
        for (const n of [].concat(e.sections, e.footer_sections ?? [])){
            t += c(n.view_model).filter(T).length;
        }
        return t >= 2;
    }
    function T(e) {
        return (typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAIMuseConnectorActionCardPrimitive";
    }
    function D(e) {
        if (e == null) {
            return false;
        }
        return M(e).some((e)=>c(e).some($));
    }
    function x(e) {
        const n = e.sections;
        if (n.length !== 1 || (e.footer_sections ?? []).length > 0 || j(e) || e.streaming_action != null) {
            return false;
        }
        const r = c(n[0].view_model);
        return r.length === 1 && P(r[0]);
    }
    function $(e) {
        return (typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAISpaceCardPrimitive";
    }
    function P(e) {
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAISpaceCardPrimitive" && "display_name" in e && "source" in e) {
                const { display_name: t, source: n } = e;
                return typeof t === "string" && t.trim() !== "" && s.has(n);
            }
            return false;
        })(e);
    }
    function N(e) {
        return [].concat(A(e), (e.nested_responses ?? []).flatMap(A));
    }
    function M(e) {
        return [].concat(N(e).map((e)=>e.view_model), [
            e
        ].concat(e.nested_responses ?? []).flatMap(w));
    }
    function w(e) {
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAIUnifiedResponseInsertToStreamingCacheAction" && "insertions" in e) {
                const t = e.insertions;
                return (t ?? []).map((e)=>e.content);
            }
            return [];
        })(e.streaming_action);
    }
    function A(e) {
        return [].concat(e.sections ?? [], e.footer_sections ?? [], (e.embedded_screens ?? []).flatMap(F));
    }
    function F(e) {
        return (e.content ?? []).flatMap((e)=>{
            if ("view_model" in e) {
                return [
                    e
                ];
            }
            if ("sections" in e) {
                return e.sections ?? [];
            }
            if ("tabs" in e) {
                return (e.tabs ?? []).flatMap((e)=>e.sections ?? []);
            }
            return [];
        });
    }
    function O(e) {
        if (e == null) {
            return false;
        }
        return N(e).some((e)=>c(e.view_model).some(B));
    }
    function B(e) {
        return (typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAISecureCredentialRequestPrimitive";
    }
    function W(e) {
        const t = e?.embedded_screens;
        if (t == null || t.length === 0) {
            return [];
        }
        const n = [];
        for (const r of t){
            for (const o of r.content ?? []){
                if ("viewModel" in o) {
                    const i = o.viewModel;
                    if (i != null) {
                        for (const l of i.sources ?? []){
                            if (l.source_url != null && l.source_url !== "") {
                                n.push(l);
                            }
                        }
                    }
                }
            }
        }
        return n;
    }
    function q(e) {
        if (e.embedded_screens == null || e.embedded_screens.length === 0) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            embedded_screens: void 0
        });
    }
    function U(e) {
        const t = e.sections;
        const n = t.map(V);
        const r = new Map;
        n.forEach((e, t)=>{
            if (e != null) {
                const o = r.get(e.browser_task_id);
                const a = o != null ? n[o] : null;
                if (a == null || H(e, a)) {
                    r.set(e.browser_task_id, t);
                }
            }
        });
        const o = t.filter((e, t)=>{
            const o = n[t];
            return o == null || r.get(o.browser_task_id) === t;
        });
        if (o.length === t.length) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            sections: o
        });
    }
    function V(e) {
        const t = c(e.view_model);
        if (t.length !== 1) {
            return null;
        }
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAIBrowserTaskPrimitive") {
                return e;
            }
            return null;
        })(t[0]);
    }
    function H(e, t) {
        const o = e.version ?? 0;
        const a = t.version ?? 0;
        if (o !== a) {
            return o > a;
        }
        return G(e) >= G(t);
    }
    function G(e) {
        const n = Number(e.updated_at_ms ?? 0);
        if (Number.isFinite(n)) {
            return n;
        }
        return 0;
    }
    function z(e) {
        if (e == null || j(e)) {
            return false;
        }
        const n = [].concat(e.sections, e.footer_sections ?? []);
        return n.length > 0 && n.every(K);
    }
    function j(e) {
        return (e.nested_responses ?? []).length > 0 || (e.embedded_screens ?? []).length > 0;
    }
    function K(e) {
        const t = c(e.view_model);
        return t.length > 0 && t.every(Q);
    }
    function Q(e) {
        return (typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAIBotProgressStatusPrimitive" && e.is_in_progress === false;
    }
    l.UnifiedResponseQPLLogger = u;
    l.getPrimitives = c;
    l.getImaginePrimitives = d;
    l.isAnimateImagineType = m;
    l.computeRichResponseMediaId = p;
    l.isUnifiedResponseVisible = f;
    l.isImagineResponse = h;
    l.isQuotaUpsellResponse = y;
    l.trailingBrowserTaskId = b;
    l.isSoleBrowserTaskCardResponse = v;
    l.getQuotaUpsellBenefitType = S;
    l.buildUnifiedResponseFromRawData = L;
    l.unifiedResponseHasMediaContent = E;
    l.unifiedResponseHasConnectorActionCard = k;
    l.hasMultipleConnectorActionCards = I;
    l.unifiedResponseHasSpaceCard = D;
    l.isSoleSpaceCardResponse = x;
    l.unifiedResponseHasSecureCredentialRequest = O;
    l.isSecureCredentialRequest = B;
    l.getMetaAiEmbeddedSources = W;
    l.stripEmbeddedScreens = q;
    l.highestVersionBrowserTasks = U;
    l.isSettledProgressStatusOnly = z;
    l.hasNestedOrEmbeddedContent = j;
}, 98);