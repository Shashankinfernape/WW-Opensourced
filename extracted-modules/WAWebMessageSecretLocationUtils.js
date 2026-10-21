__d("WAWebMessageSecretLocationUtils", [
    "$InternalEnum",
    "WALogger",
    "WAWebProtobufValidationErrorWamEvent",
    "WAWebWamEnumProtobufValidationFlow"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = n("$InternalEnum")({
        Sender: "sender",
        Receiver: "receiver"
    });
    const d = "79";
    const m = "80";
    const p = new Set([
        "deviceSentMessage",
        "$$unknownFieldCount"
    ]);
    const _ = 15;
    const f = 4;
    const g = 0.01;
    function h({ messageContextInfo: t }) {
        if (t != null) {
            return t.messageSecret != null;
        }
        return false;
    }
    function y(e) {
        if (e != null && typeof e === "object" && !Array.isArray(e)) {
            return e;
        }
        return null;
    }
    function C({ depth: r = 0, path: i = "", proto: l }) {
        if (r >= _) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "messageSecret location check exceeded max depth: path:",
                ""
            ])), i).tags("messaging", "wa-ice", "message-secret-location").sendLogs("message-secret-location-max-depth");
            return null;
        }
        if (h(l) && r > 0) {
            return {
                violationPath: i || "unknown"
            };
        }
        for (const s of Object.keys(l)){
            if (!(p.has(s) || s === "messageContextInfo")) {
                const u = l[s];
                if (!(u == null || typeof u !== "object")) {
                    const c = i ? `${i}.${s}` : s;
                    const d = Array.isArray(u) ? u : [
                        u
                    ];
                    for (const m of d){
                        const f = y(m);
                        if (f != null) {
                            const g = C({
                                depth: r + 1,
                                path: c,
                                proto: f
                            });
                            if (g != null) {
                                return g;
                            }
                        }
                    }
                }
            }
        }
        return null;
    }
    function b({ context: t, proto: n, ruleId: r, stanzaId: a }) {
        const i = C({
            proto: n
        });
        if (i != null) {
            const l = t === c.Sender ? "sender" : t === c.Receiver ? "receiver" : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            })();
            const m = `message-secret-location-violation-${l}`;
            const p = a == null ? "unknown" : a.slice(0, f);
            if (t === c.Receiver) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "messageSecret location violation on ",
                    ": path:",
                    " stanzaIdPrefix:",
                    ""
                ])), l, i.violationPath, p).tags("messaging", "wa-ice", "message-secret-location").sendLogs(m, {
                    sampling: g
                });
            } else {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "messageSecret location violation on ",
                    ": path:",
                    " stanzaIdPrefix:",
                    ""
                ])), l, i.violationPath, p).tags("messaging", "wa-ice", "message-secret-location");
            }
            if (t === c.Sender) {
                new (o("WAWebProtobufValidationErrorWamEvent")).ProtobufValidationErrorWamEvent({
                    protobufValidationDropped: false,
                    protobufLegacyValidationDropped: false,
                    protobufValidationFlow: o("WAWebWamEnumProtobufValidationFlow").PROTOBUF_VALIDATION_FLOW.STANZA_MESSAGE_SEND,
                    protobufValidationPath: i.violationPath,
                    protobufValidationRuleId: r ?? d
                }).commit();
            }
        }
    }
    l.MessageSecretCheckContext = c;
    l.MESSAGE_SECRET_RULE_ID_OUTGOING = d;
    l.MESSAGE_SECRET_RULE_ID_GROUP_HISTORY = m;
    l.findMessageSecretViolation = C;
    l.verifyTopLevelMessageSecret = b;
}, 98);