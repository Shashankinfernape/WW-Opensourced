__d("WAWebHandleMemberLabelChange", [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabel.flow",
    "WAWebMemberLabelCommonUtils",
    "WAWebMemberLabelJob",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ baseMessage: r, memberLabel: a }) {
            const i = r.id.remote;
            const l = r.id.participant;
            if (!i.isGroup()) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMemberLabelChange]: chat is not a group"
                ]))).sendLogs("Failed to handle member label change");
                return;
            }
            if (l == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMemberLabelChange]: member is null"
                ]))).sendLogs("Failed to handle member label change");
                return;
            }
            const p = o("WAWebLidMigrationUtils").toUserLid(l);
            if (!p) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMemberLabelChange]: member id→lid failed"
                ]))).sendLogs("Failed to handle member label change");
                return;
            }
            const _ = a.labelTimestamp;
            if (_ == null) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMemberLabelChange]: timestamp is null"
                ]))).sendLogs("Failed to handle member label change");
                return;
            }
            const f = a.label ?? "";
            if (!o("WAWebMemberLabelCommonUtils").isMemberLabelStrValid(f)) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMemberLabelChange]: member label is invalid"
                ]))).sendLogs("Failed to handle member label change");
                return;
            }
            const g = {
                chatId: o("WAWebWidToJid").widToGroupJid(i),
                member: o("WAWebWidToJid").userLidtoLidUserJid(p),
                memberLabel: {
                    label: o("WAWebMemberLabel.flow").castToMemberLabeString(String(f)),
                    lastEditTimestamp: o("WATimeUtils").castToUnixTime(Number(_))
                }
            };
            const h = yield o("WAWebMemberLabelJob").createOrUpdateMemberLabel(g);
            if (h) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleMemberLabelChange]: member label updated successfully"
                ])));
                yield o("WAWebBackendApi").frontendSendAndReceive("updateMemberLabelCollection", {
                    updates: [
                        {
                            type: "UPSERT",
                            data: g
                        }
                    ]
                });
            }
        });
        return _.apply(this, arguments);
    }
    l.handleMemberLabelChange = p;
}, 98);