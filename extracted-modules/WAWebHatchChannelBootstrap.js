__d("WAWebHatchChannelBootstrap", [
    "WALogger",
    "WAWebHatchLinkedStatusManager",
    "WAWebNoop",
    "WAWebSendHatchMetadataRequest",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = [
        "agent.status",
        "identity.updated",
        "hitl.snapshot"
    ];
    function d(e) {
        if (e != null && typeof e === "object") {
            const t = e.accepted;
            if (Array.isArray(t)) {
                return t;
            }
        }
        return [];
    }
    function m() {
        o("WAWebSendHatchMetadataRequest").sendHatchMetadataRequest({
            method: "channel.bootstrap",
            sections: c
        }).then((t)=>{
            if (t.outcome !== "response" || t.response.status !== "ok") {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-metadata: channel.bootstrap not acked outcome=",
                    ""
                ])), t.outcome).sendLogs("hatch-bootstrap-not-acked");
                return;
            }
            const n = d(t.response.body);
            const r = c.filter((e)=>!n.includes(e));
            if (r.length > 0) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-metadata: channel.bootstrap missing sections ",
                    ""
                ])), r.join(", ")).sendLogs("hatch-bootstrap-missing-sections");
            }
        }).catch((e)=>{
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-metadata: channel.bootstrap failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("hatch-bootstrap-error");
        });
    }
    function p() {
        if (r("WAWebHatchLinkedStatusManager").isLinked()) {
            m();
            return r("WAWebNoop");
        }
        let e = r("WAWebNoop");
        e = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function() {
            if (r("WAWebHatchLinkedStatusManager").isLinked()) {
                e();
                m();
            }
        });
        return function() {
            e();
        };
    }
    l.bootstrapHatchWhenLinked = p;
}, 98);