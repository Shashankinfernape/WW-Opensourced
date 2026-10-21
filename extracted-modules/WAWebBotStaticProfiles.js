__d("WAWebBotStaticProfiles", [
    "WAWebBotProduct",
    "WAWebBotUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new Map([
        [
            (e = o("WAWebBotUtils")).META_BOT_PN_WID.toString(),
            (s = o("WAWebBotProduct")).BotProduct.META_AI
        ],
        [
            e.META_BOT_FBID_WID.toString(),
            s.BotProduct.META_AI
        ],
        [
            e.META_BOT_SMB_PN_WID.toString(),
            s.BotProduct.META_AI
        ],
        [
            e.META_BOT_SMB_FBID_WID.toString(),
            s.BotProduct.META_AI
        ],
        [
            e.META_BOT_TEE_FBID_WID.toString(),
            s.BotProduct.TEE_META_AI_GROUP
        ],
        [
            e.HATCH_BOT_FBID_WID.toString(),
            s.BotProduct.HATCH
        ],
        [
            e.META_BOT_SIDECHAT_FBID_WID.toString(),
            s.BotProduct.SIDE_CHAT
        ],
        [
            e.META_BOT_SIDECHAT_LEGACY_FBID_WID.toString(),
            s.BotProduct.SIDE_CHAT
        ]
    ]);
    function c(e) {
        const t = u.get(e.toString());
        return t ?? (e.isSupportAgentBot() ? o("WAWebBotProduct").BotProduct.SUPPORT : null);
    }
    function d(e) {
        return c(e) != null;
    }
    function m(e) {
        return e.isFbidBot() || d(e);
    }
    function p(e) {
        const t = c(e);
        if (t == null) {
            return null;
        }
        return {
            product: t.valueOf(),
            isDeprecated: false
        };
    }
    l.isStaticProfile = d;
    l.isBotSupportClassifiable = m;
    l.getStaticBotSupportInput = p;
}, 98);