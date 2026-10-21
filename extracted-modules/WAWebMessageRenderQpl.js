__d("WAWebMessageRenderQpl", [
    "QPLFlow",
    "WAWebChatCollection",
    "gkx",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(891426174, "3263");
    const s = 60 * 1000;
    const u = 200;
    const c = new Map;
    function d(t, n, a) {
        if (r("gkx")("20665") && o("WAWebChatCollection").ChatCollection.get(t)?.active === true) {
            const is_group = t.isGroup();
            const u = new Set(a.map((e)=>String(e.id)));
            n.filter((e)=>e.isNewMsg === true && !e.id.fromMe && u.has(e.id.toString())).forEach((t)=>{
                const r = t.id.toString();
                f(r, "superseded");
                _();
                c.set(r, o("QPLFlow").startQPLFlow(e, {
                    annotations: {
                        bool: {
                            is_group
                        },
                        string: {
                            msg_type: t.type ?? "unknown"
                        }
                    },
                    timeoutInMs: s
                }));
            });
        }
    }
    function m(e) {
        e.forEach((e)=>c.get(e.toString())?.addPoint("added_to_chat"));
    }
    function p(e) {
        const t = c.get(e);
        if (t != null) {
            c.delete(e);
            t.endSuccess();
        }
    }
    function _() {
        if (!(c.size < u)) {
            const e = c.keys().next().value;
            if (e != null) {
                f(e, "evicted");
            }
        }
    }
    function f(e, cancel_reason) {
        c.get(e)?.endCancel(4, {
            string: {
                cancel_reason
            }
        });
        c.delete(e);
    }
    l.MAX_OPEN_MESSAGE_RENDER_FLOWS = u;
    l.startMessageRenderFlows = d;
    l.markMessageRenderAddedToChat = m;
    l.endMessageRenderFlow = p;
}, 98);