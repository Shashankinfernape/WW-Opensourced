__d("WAWebBot3pMediaGating", [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebBotSupportGating",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum")({
        None: 0,
        ImageOnly: 1,
        AllMedia: 2,
        AllMediaAndExpressions: 3
    });
    const u = new Set;
    const c = new Set([
        (e = o("WAWebMsgType")).MSG_TYPE.IMAGE
    ]);
    const d = [
        e.MSG_TYPE.AUDIO,
        e.MSG_TYPE.DOCUMENT,
        e.MSG_TYPE.IMAGE,
        e.MSG_TYPE.PTT,
        e.MSG_TYPE.VIDEO
    ];
    const m = new Set(d);
    const p = new Set([].concat(d, [
        e.MSG_TYPE.STICKER
    ]));
    function _(e, t) {
        if (o("WAWebBotSupportGating").isSupportedThirdPartyBot(e, t)) {
            return s.cast(o("WAWebABProps").getABPropConfigValue("ai_3p_agent_media_support_mode")) ?? s.None;
        }
        return null;
    }
    function f(e) {
        if (e === s.None) {
            return u;
        }
        if (e === s.ImageOnly) {
            return c;
        }
        if (e === s.AllMedia) {
            return m;
        }
        if (e === s.AllMediaAndExpressions) {
            return p;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function g(e) {
        return e === s.AllMediaAndExpressions;
    }
    l.Bot3pMediaSupportMode = s;
    l.getBot3pMediaSupportMode = _;
    l.getBot3pSupportedMediaTypes = f;
    l.isBot3pExpressionsSupported = g;
}, 98);