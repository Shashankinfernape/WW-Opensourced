__d("WAWebMemberLabelHistorySync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabel.flow",
    "WAWebMemberLabelBridgeApi",
    "WAWebMemberLabelBulkJob",
    "WAWebMemberLabelGating",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (o("WAWebMemberLabelGating").isMemberLabelInfraEnabled()) {
                try {
                    const a = [];
                    const i = t.conversations.filter((e)=>{
                        const t = o("WAWebWidFactory").createWid(e.id);
                        if (t.isGroup()) {
                            return e.participant.length > 0;
                        }
                        return false;
                    }).flatMap((t)=>{
                        const n = o("WAWebWidFactory").createWid(t.id);
                        const a = o("WAWebWidToJid").widToGroupJid(n);
                        return r("compactMap")(t.participant, function(t) {
                            try {
                                if (t.memberLabel == null) {
                                    return null;
                                }
                                const i = o("WAWebWidFactory").createWid(t.userJid);
                                if (!i) {
                                    return null;
                                }
                                const l = o("WAWebLidMigrationUtils").toUserLid(i);
                                if (!l) {
                                    return null;
                                }
                                const u = o("WAWebWidToJid").userLidtoLidUserJid(l);
                                const c = t.memberLabel;
                                const d = o("WAWebMemberLabel.flow").castToMemberLabeString(String(c?.label ?? ""));
                                const lastEditTimestamp = o("WATimeUtils").castToUnixTime(Number(c?.labelTimestamp));
                                return {
                                    chatId: a,
                                    member: u,
                                    label: d,
                                    lastEditTimestamp
                                };
                            } catch (error) {
                                if (r("gkx")("26258")) {
                                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "[history sync] Error processing member label"
                                    ]))).sendLogs("Failed to handle member label change");
                                } else {
                                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                        "[history sync] Error processing member label: ",
                                        ""
                                    ])), error).sendLogs("Failed to handle member label change");
                                }
                                return null;
                            }
                        });
                    });
                    for (const l of i){
                        const { chatId, label, lastEditTimestamp, member } = l;
                        a.push(o("WAWebMemberLabelBridgeApi").createUpsert(chatId, member, {
                            label,
                            lastEditTimestamp
                        }));
                    }
                    if (a.length === 0) {
                        return;
                    }
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] processing ",
                        " member label updates"
                    ])), a.length);
                    const y = yield (p || (p = n("Promise"))).all(a.map(o("WAWebMemberLabelBulkJob").updateMemberLabelsBatched));
                    const C = y.filter(Boolean);
                    if (C.length === 0) {
                        return;
                    }
                    o("WAWebBackendApi").frontendFireAndForget("updateMemberLabelCollection", {
                        updates: C
                    });
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] successfully processed ",
                        " member label updates"
                    ])), C.length);
                } catch (error) {
                    if (r("gkx")("26258")) {
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] Failed to process member labels"
                        ]))).sendLogs("Failed to process member labels from history sync");
                    } else {
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] Failed to process member labels: ",
                            ""
                        ])), error).sendLogs("Failed to process member labels from history sync");
                    }
                }
            }
        });
        return f.apply(this, arguments);
    }
    l.processMemberLabels = _;
}, 98);