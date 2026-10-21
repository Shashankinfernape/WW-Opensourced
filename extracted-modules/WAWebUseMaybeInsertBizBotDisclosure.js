__d("WAWebUseMaybeInsertBizBotDisclosure", [
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBusinessProfileGetters",
    "WAWebCreateBizBotSysMsgAction",
    "WAWebFrontendChatGetters",
    "WAWebTos",
    "WAWebUseBusinessProfile.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBusinessProfileValues",
    "useWAWebChatValues",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const useEffect = (s || (s = o("react"))).useEffect;
    function c(e) {
        const n = o("react-compiler-runtime").c(10);
        let r;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendChatGetters").getBizBotSystemMsgType
            ];
            n[0] = r;
        } else {
            r = n[0];
        }
        const a = o("useWAWebChatValues").useChatValues(e.id, r);
        const i = a[0];
        const l = o("WAWebBotBaseGating").isBizBot1pEnabled() ? e.id : null;
        o("WAWebUseBusinessProfile.react").useBusinessProfile(l);
        const s = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(l, [
            o("WAWebBusinessProfileGetters").getIsBizBot1p
        ]) ?? [];
        const c = s[0];
        const m = c === true;
        let p;
        if (n[1] !== i || n[2] !== e || n[3] !== m) {
            p = function() {
                d(e, m, i);
            };
            n[1] = i;
            n[2] = e;
            n[3] = m;
            n[4] = p;
        } else {
            p = n[4];
        }
        o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", p);
        let _;
        let f;
        if (n[5] !== i || n[6] !== e || n[7] !== m) {
            _ = function() {
                d(e, m, i);
            };
            f = [
                e,
                m,
                i
            ];
            n[5] = i;
            n[6] = e;
            n[7] = m;
            n[8] = _;
            n[9] = f;
        } else {
            _ = n[8];
            f = n[9];
        }
        useEffect(_, f);
    }
    function d(t, n, r) {
        if (o("WAWebBotBaseGating").isBizBot1pEnabled() && o("WAWebBotTos").hasAcceptedBizBotTos() && n && r !== o("WAWebBotTypes").BizBotType.BIZ_1P) {
            o("WAWebCreateBizBotSysMsgAction").maybeCreateBizBot1pDisclosureSysMsg(t).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "biz_ai: failed to insert 1p disclosure ",
                    ""
                ])), t).sendLogs("biz-ai-1p-disclosure-insert-failed");
            });
        }
    }
    l.useMaybeInsertBizBotDisclosure = c;
}, 98);