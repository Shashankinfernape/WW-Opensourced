__d("WAWebSupportChatUtils", [
    "WALogger",
    "WAWebABPropsSupportLid",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebFindChatAction",
    "WAWebModalManager",
    "WAWebOpenChatFlow.react",
    "WAWebSupportAIInfoNuxLoadable",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportChatConfirmationModal.react",
    "WAWebWamEnumSupportAiEventType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    function d() {
        new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
            supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.SUPPORT_AI_SCREEN_SHOWN_ON_THE_CHAT
        }).commit();
        o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable, {}), {
            transition: "modal-flow"
        });
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WAWebWidFactory").createWid(t);
            const Component = o("WAWebOpenChatFlow.react").OpenChatFlow;
            o("WAWebModalManager").ModalManager.open(<Component target={{
                wid: n
            }} onSuccess={function() {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "openSupportChat: successfully opened support chat"
                ])));
                o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
            }} msgText={null} customError=<div>{c.jsx(r("WAWebSupportChatConfirmationModal.react"), {})}</div> onError={function(t) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "InAppSupport: Error opening support chat: ",
                    ""
                ])), t);
            }}/>, {
                transition: "modal-flow"
            });
        });
        return p.apply(this, arguments);
    }
    function _() {
        const e = o("WAWebABPropsSupportLid").getWaSupportAgentFbid();
        if (e == null) {
            return null;
        }
        return o("WAWebWidFactory").createWid(`${e}@bot`);
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebFindChatAction").findOrCreateLatestChat(e, "openSupportAgentChat", {
                signal: t
            });
            const n_chat = n.chat;
            if (t?.aborted !== true) {
                const i = yield o("WAWebCmd").Cmd.openChatFromUnread({
                    chat: n_chat,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SupportAgent
                });
                if (!i) {
                    throw r("err")("support agent chat did not open");
                }
                o("WAWebComposeBoxActions").ComposeBoxActions.focus(n_chat);
                o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
            }
        });
        return g.apply(this, arguments);
    }
    l.openSupportAINux = d;
    l.openSupportChat = m;
    l.getSupportAgentChatWid = _;
    l.openSupportAgentChat = f;
}, 98);