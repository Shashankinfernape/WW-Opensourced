__d("WAWebBotTypes", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    let e;
    const l = (e = n("$InternalEnum"))({
        FIRST: "first",
        INNER: "inner",
        LAST: "last",
        FULL: "full"
    });
    const s = e({
        BIZ_1P: "biz_1p",
        BIZ_3P: "biz_3p"
    });
    const u = e.Mirrored([
        "POSITIVE",
        "NEGATIVE_GENERIC",
        "NEGATIVE_HELPFUL",
        "NEGATIVE_INTERESTING",
        "NEGATIVE_ACCURATE",
        "NEGATIVE_SAFE",
        "NEGATIVE_OTHER",
        "NEGATIVE_REFUSED",
        "NEGATIVE_NOT_VISUALLY_APPEALING",
        "NEGATIVE_NOT_RELEVANT_TO_TEXT",
        "NEGATIVE_NOT_ENTERTAINING",
        "NEGATIVE_NOT_CUSTOMIZABLE",
        "NEGATIVE_NOT_INTERESTING"
    ]);
    const c = e({
        UNKNOWN: "unknown",
        PARTIAL_1P: "1p_partial",
        FULL_3P: "3p_full"
    });
    function d(e) {
        if (e === s.BIZ_1P) {
            return c.PARTIAL_1P.valueOf();
        }
        if (e === s.BIZ_3P) {
            return c.FULL_3P.valueOf();
        }
        return null;
    }
    const m = e({
        NONE: "none",
        BASIC: "basic"
    });
    const p = e({
        PROMPT: "prompt",
        COMMAND: "command",
        VOICE: "voice"
    });
    const _ = e({
        DEFAULT: "default",
        UGC: "ugc",
        FIRST_PARTY_CHARACTER: "1p"
    });
    const f = e({
        UNKNOWN: "unknown",
        YES: "yes",
        NO: "no"
    });
    i.BotMsgEditType = l;
    i.BizBotType = s;
    i.BotFeedbackKind = u;
    i.BizBotAutomatedType = c;
    i.getBotLocalAutomatedType = d;
    i.BotWelcomeMsgProtocolModeType = m;
    i.BotMsgBodyType = p;
    i.BotPersonaType = _;
    i.BotPosingAsProfessionalType = f;
}, 66);