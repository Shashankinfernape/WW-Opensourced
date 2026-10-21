__d("WAWebMexNewsletterAdminInviteRevokeNotificationHandler", [
    "$InternalEnum",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebDBProcessMessage",
    "WAWebJidToWid",
    "WAWebLidMigrationDbUtils",
    "WAWebLidMigrationUtils",
    "WAWebNewsletterDBUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = n("$InternalEnum").Mirrored([
        "ACTOR",
        "USER",
        "OBSERVER"
    ]);
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                const a = n.xwa2_notify_newsletter_admin_invite_revoke;
                const { actor, id, user } = a;
                const _ = user.id;
                const f = actor.id;
                if (f == null || _ == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[handleNewsletterAdminInviteRevoke] actor or user is null"
                    ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-admin-invite-revoke-null-actor-or-user");
                    return;
                }
                const g = o("WAJids").toNewsletterJid(id);
                const h = o("WAWebJidToWid").newsletterJidToWid(g);
                const y = o("WAWebLidMigrationUtils").toUserLid(o("WAWebWidFactory").createWid(_));
                const C = o("WAWebLidMigrationUtils").toUserLid(o("WAWebWidFactory").createWid(f));
                if (!y || !C) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[handleNewsletterAdminInviteRevoke] non-lid user/actor id"
                    ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-admin-invite-revoke-non-lid-user-or-actor-id");
                    return;
                }
                let b = m.OBSERVER;
                if (o("WAWebUserPrefsMeUser").isMeAccount(y)) {
                    b = m.USER;
                }
                if (o("WAWebUserPrefsMeUser").isMeAccount(C)) {
                    b = m.ACTOR;
                }
                if (b === m.OBSERVER) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[handleNewsletterAdminInviteRevoke] Message sent to observer"
                    ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-admin-invite-revoke-sent-to-observer", {
                        sendLogsType: o("WALogger").SendLogsType.MINOR_ISSUE
                    });
                    return;
                }
                let v = null;
                if (b === m.ACTOR) {
                    v = yield o("WAWebLidMigrationDbUtils").getChatWidFromUserLid(y);
                } else {
                    v = yield o("WAWebLidMigrationDbUtils").getChatWidFromUserLid(C);
                }
                if (v == null) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[handleNewsletterAdminInviteRevoke] chat id not found"
                    ]))).tags("mex", "newsletter").sendLogs("newsletter-mex-admin-invite-revoke-actor-or-user-chat-id-not-found");
                    return;
                }
                const expiredMsgData = yield o("WAWebNewsletterDBUtils").getUnexpiredNewsletterAdminInviteMessageRecordsFromChat(o("WAWebWidFactory").asNewsletterWidOrThrow(h), v);
                expiredMsgData.forEach((e)=>{
                    if (e.newsletterAdminInviteInfo?.inviteExpiration != null) {
                        e.newsletterAdminInviteInfo.inviteExpiration = o("WATimeUtils").castToUnixTime(0);
                    }
                });
                yield o("WAWebDBProcessMessage").updateExistingMessages(expiredMsgData, v);
                o("WAWebBackendApi").frontendFireAndForget("expireNewsletterAdminInvites", {
                    expiredMsgData
                });
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleNewsletterAdminInviteRevoke] failed"
                ]))).catching(r("getErrorSafe")(error)).tags("mex", "newsletter").sendLogs("newsletter-mex-admin-invite-revoke-failed");
            }
        });
        return _.apply(this, arguments);
    }
    l.handleNewsletterAdminInviteRevoke = p;
}, 98);