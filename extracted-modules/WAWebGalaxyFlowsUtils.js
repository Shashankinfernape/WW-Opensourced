__d("WAWebGalaxyFlowsUtils", [
    "Promise",
    "WABase64",
    "WAFlowsExpiredCacheCleaner",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime",
    "tryParseJSONMixed"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "navigate";
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield o("WAFlowsExpiredCacheCleaner").clearExpiredCachedStates();
            } catch (e) {}
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return e === s;
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t != null && t.aborted) {
                const n = new Error("Request aborted");
                n.stack;
                throw n;
            }
            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints.FETCHING_FLOW_JSON_START);
            const r = yield window.fetch(`/flows/json/${e}`, {
                signal: t
            });
            const a = yield r.json();
            if (!(t != null && t.aborted)) {
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints.FETCHING_FLOW_JSON_END);
            }
            return a;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        const n = t.unsafe();
        n.type = o("WAWebMsgType").MSG_TYPE.UNKNOWN;
        n.subtype = o("WAWebCommonMsgSubtypeTypes").MsgSubtype.PhoneOnlyFeature;
        return t;
    }
    function f(e) {
        return e.nativeFlowResponseMessage?.name === String(r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW);
    }
    function g(e) {
        if (e.nativeFlowResponseMessage != null && e.nativeFlowResponseMessage.paramsJson != null) {
            const t = r("tryParseJSONMixed")(e.nativeFlowResponseMessage.paramsJson);
            if (t != null && typeof t === "object" && t.wa_flow_response_params != null && t.wa_flow_response_params.flow_creation_source != null) {
                const n = t.wa_flow_response_params.flow_creation_source === "FLEXIBLE_CHECKOUT";
                return n;
            }
        }
        return false;
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = v();
            return C(e.id, t).then(({ flowQPLMessageId: t, flowWAMMessageId: n })=>({
                    flowQPLMessageId: t,
                    flowWAMMessageId: n
                }));
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = new TextEncoder;
            const i = a.encode(`${t + r}_qpl`);
            const l = a.encode(`${t + r}_wam`);
            const s = yield (e || (e = n("Promise"))).all([
                crypto.subtle.digest({
                    name: "SHA-256"
                }, i),
                crypto.subtle.digest({
                    name: "SHA-256"
                }, l)
            ]);
            const u = s[0];
            const c = s[1];
            const d = o("WABase64").encodeB64(u);
            const m = o("WABase64").encodeB64(c);
            return {
                flowQPLMessageId: d,
                flowWAMMessageId: m
            };
        });
        return b.apply(this, arguments);
    }
    function v() {
        const e = new Uint8Array(16);
        crypto.getRandomValues(e);
        return Array.from(e, function(e) {
            return String.fromCharCode(e);
        }).join("");
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = t.filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW);
            if (a.length === 0) {
                return t;
            }
            const i = new Map;
            yield (e || (e = n("Promise"))).all(a.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        const t = yield h(e.id);
                        const { flowQPLMessageId: n, flowWAMMessageId: r } = t;
                        i.set(e.id.id, {
                            flowWAMMessageId: r,
                            flowQPLMessageId: n
                        });
                    } catch (e) {}
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            return t.map((e)=>{
                const t = i.get(e.id.id);
                if (t != null) {
                    return babelHelpers.extends({}, e, {
                        galaxyFlowWAMMessageId: t.flowWAMMessageId,
                        galaxyFlowQPLMessageId: t.flowQPLMessageId
                    });
                }
                return e;
            });
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        const a = t?.xwa_extensions_get_flow_data?.extensions_flow_data;
        if (a == null || a.length === 0) {
            return null;
        }
        const i = a.find((t)=>t.flow_id === e);
        return i?.extensions?.metadata ?? null;
    }
    l.clearGalaxyFlowsCache = u;
    l.isFlowInitWithoutDataChannel = d;
    l.fetchFlowJSON = m;
    l.getInvalidatedFlowMessageFromHistorySync = _;
    l.isResponseFlowSupported = f;
    l.isFlexibleCheckoutForm = g;
    l.computeMessageIds = h;
    l.maybeAddGalaxyFlowMessageIds = S;
    l.getFlowDataFromFetchedData = L;
}, 98);