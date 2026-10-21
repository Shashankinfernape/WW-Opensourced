__d("WAWebBotUtils", [
    "WALogger",
    "WAWebDebugHiddenBotChats",
    "WAWebMsgKey",
    "WAWebWid",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = (s = o("WAWebWidFactory")).createUserWidOrThrow("13135550002@c.us");
    const c = s.createUserWidOrThrow("867051314767696@bot");
    const d = s.createUserWidOrThrow("13135550202@c.us");
    const m = s.createUserWidOrThrow("718584497008509@bot");
    const p = s.createUserWidOrThrow("1273596044787272@bot");
    const _ = s.createUserWidOrThrow("1807055946647697@bot");
    const f = s.createUserWidOrThrow("1807055946647698@bot");
    const g = s.createUserWidOrThrow("165332417282214@lid");
    const h = s.createUserWidOrThrow("2942131436135992@bot");
    const y = s.createUserWidOrThrow("867051314767696555@bot");
    const C = s.createUserWidOrThrow("103242709127222@lid");
    const b = [
        _
    ];
    function v(e) {
        return e.equals(u) || e.equals(c);
    }
    function S(e) {
        return e.equals(d) || e.equals(m);
    }
    function R(e) {
        return e.equals(h) || e.equals(y);
    }
    function L(e) {
        return v(e) || I(e) || e.equals(p) || R(e);
    }
    function E(e) {
        return e.equals(_);
    }
    function k(e) {
        return e.equals(f);
    }
    function I(e) {
        return b.some((t)=>e.equals(t));
    }
    function T(e) {
        const t = e.botResponseTargetId;
        if (t == null) {
            return null;
        }
        return new (r("WAWebMsgKey"))({
            fromMe: true,
            remote: e.id.remote,
            id: t
        });
    }
    function D(e) {
        if (e instanceof r("WAWebWid")) {
            return e?.equals(c);
        }
        return false;
    }
    function x(e) {
        if (e instanceof r("WAWebWid")) {
            return e?.equals(p);
        }
        return false;
    }
    function $(e) {
        return e instanceof r("WAWebWid") && e.isFbidBot() && !D(e) && !x(e);
    }
    function P(e) {
        return e instanceof r("WAWebWid") && e.isFbidBot();
    }
    function N(e) {
        if (o("WAWebDebugHiddenBotChats").isShowHiddenBotChatsEnabled()) {
            return false;
        }
        if (e instanceof r("WAWebWid")) {
            return e.equals(p) || R(e) || e.equals(C);
        }
        return false;
    }
    function M(t) {
        let n = false;
        for (const r of t){
            const a = D(r.id);
            const i = x(r.id);
            if (a) {
                if (n) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "unexpected tee and open bot in same group"
                    ]))).sendLogs("unexpected tee and open bot in same group");
                }
                return {
                    includeOpenMetabot: true,
                    includeTeeMetabot: false
                };
            }
            if (i) {
                n = true;
            }
        }
        return {
            includeOpenMetabot: false,
            includeTeeMetabot: n
        };
    }
    l.META_BOT_PN_WID = u;
    l.META_BOT_FBID_WID = c;
    l.META_BOT_SMB_PN_WID = d;
    l.META_BOT_SMB_FBID_WID = m;
    l.META_BOT_TEE_FBID_WID = p;
    l.HATCH_BOT_FBID_WID = _;
    l.MAIBA_AI_HUB_FBID_WID = f;
    l.MAIBA_AI_HUB_LID_WID = g;
    l.META_BOT_SIDECHAT_FBID_WID = h;
    l.META_BOT_SIDECHAT_LEGACY_FBID_WID = y;
    l.META_BOT_LID_WID = C;
    l.isMetaAiBot = v;
    l.isBusinessAssistantBot = S;
    l.isSideChatBotWid = R;
    l.isAnyMetaAiBot = L;
    l.isHatchBot = E;
    l.isMaibaAiHubFbid = k;
    l.isBotChannelFBID = I;
    l.getBotResponseTargetMsgKey = T;
    l.isWidOpenGroupMetaBotFbidWid = D;
    l.isWidTeeGroupMetaBotFbidWid = x;
    l.isWidStandardGroupAgentFbidWid = $;
    l.isWidGroupAgentFbidWid = P;
    l.isHiddenBotWid = N;
    l.participantListIncludeOpenOrTeeGroupBotWid = M;
}, 98);