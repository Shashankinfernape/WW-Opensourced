__d("WAWebOutContactInviteUtils", [
    "fbt",
    "WALogger",
    "WAWebMexGroupStoreInviteSmsJob",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = "https://www.whatsapp.com/dl";
    function c() {
        return String(s._("Chat with me on WhatsApp! It lets us message privately on iPhone, Android, and more. This invite expires soon. {download_url}", [
            s._param("download_url", u)
        ]));
    }
    function d(e) {
        if (e != null && e !== "") {
            return `${u}/code=${e}`;
        }
        return u;
    }
    function m(e) {
        const t = d(e);
        return String(s._("Chat with me on WhatsApp! It lets us message privately on iPhone, Android, and more. This invite expires soon. {invite_url}", [
            s._param("invite_url", t)
        ]));
    }
    function p() {
        return String(s._("You're invited to join a group chat on WhatsApp! It's the world's most popular messaging app. This invite expires in 3 days. {download_url}", [
            s._param("download_url", u)
        ]));
    }
    function _(e) {
        return s._("_j{\"*\":\"Couldn't add users to the group.\",\"_1\":\"Couldn't add user to the group.\"}", [
            s._plural(e)
        ]);
    }
    function f(e, t, n) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            try {
                const a = n.map((e)=>({
                        user_jid: o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").createUserWidOrThrow(e)).toString()
                    }));
                return yield o("WAWebMexGroupStoreInviteSmsJob").mexGroupStoreInviteSms(t, a, r.toString());
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[out-contact-invite] bulk invite sms store err: ",
                    ""
                ])), error).tags("GQL", "MEX").sendLogs("out-contact-invite-store-group-sms-failed");
                return [];
            }
        });
        return g.apply(this, arguments);
    }
    l.getInviteMessageText = c;
    l.getInviteUrl = d;
    l.getInviteMessageTextWithCode = m;
    l.getMultiGroupInviteMessageText = p;
    l.getGroupInviteAddFailedToastText = _;
    l.storeMultiGroupInviteSms = f;
}, 226);