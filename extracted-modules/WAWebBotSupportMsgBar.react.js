__d("WAWebBotSupportMsgBar.react", [
    "fbt",
    "WALogger",
    "WAWebBotComposerSupport",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebTabOrder",
    "WDSButton.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_treatment = e.treatment;
        let r;
        if (t[0] !== e_treatment) {
            r = e_treatment === o("WAWebBotComposerSupport").BotComposerTreatment.UPGRADE ? <M3Component/> : e_treatment === o("WAWebBotComposerSupport").BotComposerTreatment.DEPRECATED ? <P2Component/> : e_treatment === o("WAWebBotComposerSupport").BotComposerTreatment.DELETED ? <_/> : e_treatment === o("WAWebBotComposerSupport").BotComposerTreatment.COMPOSE ? null : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e_treatment}`);
            })();
            t[0] = e_treatment;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function M3Component() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            t = <Component>{s._("To use this chat, update to the latest version of WhatsApp.")}</Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSButton.react");
            const Component_1 = r("WAWebFlexItem.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            n = <div data-testid="bot_support_upgrade_msg_bar"><Component_2 align="center">{t}<Component_1><Component label={s._("Update")} onPress={g} tabOrder={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} testid="bot_support_upgrade_cta" variant="borderless"/></Component_1></Component_2></div>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function P2Component() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <F7Component testid="bot_support_deprecated_msg_bar" message={s._("This chat is no longer active. You can still view your message history.")}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function _() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <F7Component testid="bot_support_deleted_msg_bar" message={s._("You removed this agent.")}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function F7Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { message, testid } = e;
        let i;
        if (t[0] !== message) {
            const Component = r("WAWebFlexItem.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            i = <Component_1 align="center"><Component>{message}</Component></Component_1>;
            t[0] = message;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== i || t[3] !== testid) {
            l = <div data-testid={testid}>{i}</div>;
            t[2] = i;
            t[3] = testid;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    function g() {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[sbp] bot upgrade CTA pressed"
        ])));
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getStandardBotProfileLearnMoreUrl());
    }
    l.default = d;
}, 226);