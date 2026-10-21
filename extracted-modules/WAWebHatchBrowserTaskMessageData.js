__d("WAWebHatchBrowserTaskMessageData", [
    "WAWebHatchBrowserTaskState",
    "WAWebUnifiedResponseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = function(n) {
            return ((e)=>{
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAIBrowserTaskPrimitive") {
                    return t(e);
                }
                return n;
            })(n);
        };
        return babelHelpers.extends({}, e, {
            sections: e.sections.map((e)=>babelHelpers.extends({}, e, {
                    view_model: ((t)=>{
                        if ((typeof t === "object" && t !== null || typeof t === "function") && t.__typename === "GenAISingleLayoutViewModel" && "primitive" in t) {
                            const r = t.primitive;
                            return babelHelpers.extends({}, t, {
                                primitive: n(r)
                            });
                        }
                        if ((typeof t === "object" && t !== null || typeof t === "function") && (t.__typename === "GenAIHScrollLayoutViewModel" || t.__typename === "GenAIGridLayoutViewModel" || t.__typename === "GenAIVStackLayoutViewModel") && "primitives" in t) {
                            const a = t.primitives;
                            return babelHelpers.extends({}, t, {
                                primitives: a.map(n)
                            });
                        }
                        return e.view_model;
                    })(e.view_model)
                }))
        });
    }
    function s(e, t) {
        if (e == null) {
            return t == null;
        }
        return Number.isFinite(e) && e >= 0 && (t == null || e >= t);
    }
    function u(e) {
        return ((e)=>{
            if (e === "complete" || e === "completed") {
                return "completed";
            }
            if (e === "failed") {
                return "failed";
            }
            return null;
        })(e == null ? undefined : e.trim().toLowerCase());
    }
    function c(e) {
        return JSON.stringify([
            e.id?.toString(),
            e.type,
            e.subtype ?? null,
            e.latestEditMsgKey?.toString() ?? null,
            e.latestEditSenderTimestampMs ?? null,
            e.unifiedResponseRawData == null ? null : Array.from(e.unifiedResponseRawData),
            e.botSignatureVerificationMetadata ?? null
        ], function(e, t) {
            if (t instanceof ArrayBuffer) {
                return Array.from(new Uint8Array(t));
            }
            return t;
        });
    }
    function d(e) {
        return o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(e).trim();
    }
    function m(t, n) {
        const t_unifiedResponse = t.unifiedResponse;
        const a = n?.unifiedResponse;
        if (n == null || a == null || t_unifiedResponse == null || c(n) !== c(t)) {
            return t_unifiedResponse;
        }
        const i = new Map;
        for (const l of a.sections){
            for (const m of o("WAWebUnifiedResponseUtils").getPrimitives(l.view_model)){
                const _ = p(m);
                if (_ != null) {
                    const f = d(_.browser_task_id);
                    const g = i.get(f);
                    if (g == null || s(_.version, g.version)) {
                        i.set(f, _);
                    }
                }
            }
        }
        return e(t_unifiedResponse, (e)=>{
            const t = i.get(d(e.browser_task_id));
            if (t == null || !s(t.version, e.version) || u(t.state == null ? t.status : String(t.state)) == null) {
                return e;
            }
            return babelHelpers.extends({}, e, {
                state: t.state,
                status: t.status,
                version: t.version,
                title: t.title,
                status_label: t.status_label,
                activity_title: t.activity_title,
                terminal_reason: t.terminal_reason
            });
        });
    }
    function p(e) {
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.__typename === "GenAIBrowserTaskPrimitive") {
                return e;
            }
            return null;
        })(e);
    }
    function _(e) {
        return u(e.status) ?? u(e.displayState ?? e.displayStatus);
    }
    l.mapBrowserTasks = e;
    l.canReplace = s;
    l.terminal = u;
    l.messageIdentity = c;
    l.normalizedTaskID = d;
    l.preserveBrowserTaskMessageResponse = m;
    l.browserTaskMessageTerminalState = _;
}, 98);