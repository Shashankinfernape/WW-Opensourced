__d("WAWebViewOnceSunset.react", [
    "fbt",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebViewOnceScreenshotActionsWamEvent",
    "WAWebViewOnceSunsetIcon.react",
    "WAWebWamEnumVoMessageType",
    "WAWebWamEnumVoSsAction",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ displayType, msgKey }) {
        const i = o("useWAWebMsgValues").useMsgValues(msgKey, [
            o("WAWebMsgGetters").getSubtype,
            o("WAWebMsgGetters").getType,
            o("WAWebMsgGetters").getIsNewsletterMsg
        ]);
        const l = i[0];
        const c = i[1];
        const d = i[2];
        const m = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, d);
        const p = function() {
            const e = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = o("WAWebFaqUrl").getViewOnceScreenshotProtectionUrl();
                    let voMessageType;
                    switch(c){
                        case o("WAWebMsgType").MSG_TYPE.IMAGE:
                            voMessageType = o("WAWebWamEnumVoMessageType").VO_MESSAGE_TYPE.PHOTO;
                            break;
                        case o("WAWebMsgType").MSG_TYPE.VIDEO:
                            voMessageType = o("WAWebWamEnumVoMessageType").VO_MESSAGE_TYPE.VIDEO;
                            break;
                        case o("WAWebMsgType").MSG_TYPE.PTT:
                            voMessageType = o("WAWebWamEnumVoMessageType").VO_MESSAGE_TYPE.PTT;
                            break;
                    }
                    if (m != null) {
                        const isAGroup = o("WAWebChatGetters").getIsGroup(m);
                        const threadId = yield o("WAWebChatThreadLogging").getChatThreadID(m.id.toJid());
                        const a = new (o("WAWebViewOnceScreenshotActionsWamEvent")).ViewOnceScreenshotActionsWamEvent({
                            isAGroup,
                            threadId,
                            voMessageType,
                            voSsAction: o("WAWebWamEnumVoSsAction").VO_SS_ACTION.PLACEHOLDER_MESSAGE_LEARN_MORE_TAP
                        });
                        a.commit();
                    }
                    o("WAWebExternalLink.react").openExternalLink(e);
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            e();
        };
        const Component = r("WDSTextualLink.react");
        const _ = <Component testid="view-once-sunset-learn-more" onClick={p}>{r("WAWebFbtCommon")("Learn more")}</Component>;
        let f;
        switch(c){
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
                f = s._("You received a view once photo. For added privacy, you can only open it on your phone. {learn-more-link}", [
                    s._param("learn-more-link", _)
                ]);
                break;
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
                f = s._("You received a view once video. For added privacy, you can only open it on your phone. {learn-more-link}", [
                    s._param("learn-more-link", _)
                ]);
                break;
            case o("WAWebMsgType").MSG_TYPE.PTT:
                f = s._("You received a view once voice message. For added privacy, you can only open it on your phone. {learn-more-link}", [
                    s._param("learn-more-link", _)
                ]);
                break;
        }
        const Component_1 = r("WAWebMessageSpacerText.react");
        const Component_2 = r("WAWebMessageTextBubble.react");
        return <Component_2 msgKey={msgKey} displayAuthor displayType={displayType}><div className="x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1k4tb9n xd4r4e8 x1vvkbs x1n2onr6"><div className="x1okw0bk x7r5mf7 x1xegmmw xjpr12u x1lziwak">{u.jsx(o("WAWebViewOnceSunsetIcon.react").ViewOnceSunsetIcon, {})}</div><div className="x7r5mf7 x13m54ha"><Component_1 msgKey={msgKey} theme="placeholder">{f}</Component_1></div></div></Component_2>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);