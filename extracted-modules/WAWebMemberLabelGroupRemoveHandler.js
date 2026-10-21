__d("WAWebMemberLabelGroupRemoveHandler", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabelGating",
    "WAWebMemberLabelJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (o("WAWebMemberLabelGating").isMemberLabelInfraEnabled()) {
                try {
                    const r = [];
                    const a = t.chatId;
                    const i = o("WAWebWidToJid").widToGroupJid(a);
                    const l = [];
                    const s = n.participants.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e.id));
                    if (s) {
                        const u = yield o("WAWebMemberLabelJob").deleteAllMemberLabelsForGroup({
                            chatId: i
                        });
                        for (const c of u){
                            r.push({
                                type: "DELETE",
                                data: {
                                    chatId: i,
                                    member: c
                                }
                            });
                        }
                    } else {
                        for (const d of n.participants){
                            const m = o("WAWebLidMigrationUtils").toUserLid(d.id);
                            if (m) {
                                const p = o("WAWebWidToJid").userLidtoLidUserJid(m);
                                l.push(p);
                            }
                        }
                        const _ = yield o("WAWebMemberLabelJob").deleteMemberLabelsForGroup({
                            chatId: i,
                            members: l
                        });
                        for (const f of _){
                            r.push({
                                type: "DELETE",
                                data: {
                                    chatId: i,
                                    member: f
                                }
                            });
                        }
                    }
                    if (r.length > 0) {
                        o("WAWebBackendApi").frontendFireAndForget("updateMemberLabelCollection", {
                            updates: r
                        });
                    }
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[Member Labels] cleanup failed for removed members"
                    ])));
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.handleMemberLabelUpdatesOnGroupParticipantRemoval = s;
}, 98);