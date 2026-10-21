__d("WAWebOpenChatFlow.react", [
    "fbt",
    "$InternalEnum",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebBizGetWidFromPathCustomUrlAction",
    "WAWebBotProfileCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebContactSyncLogger",
    "WAWebDeepLinkClickWamEvent",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebLinkify",
    "WAWebNoop",
    "WAWebQueryExistsJob",
    "WAWebSpinner.react",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameKeyVerificationFlowLazy",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "react",
    "useWAWebFlow"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useRef } = m;
    const f = 250;
    const g = 500;
    const h = new Map;
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!e.isUser()) {
                return e;
            }
            const t = h.get(e.user);
            if (t) {
                return t;
            }
            const n = yield o("WAWebQueryExistsJob").queryWidExists(e, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DEEPLINK);
            const r = n == null ? e : n.wid;
            h.set(e.user, r);
            return r;
        });
        return C.apply(this, arguments);
    }
    const b = n("$InternalEnum").Mirrored([
        "Confirm",
        "Error",
        "UsernameNotFoundError"
    ]);
    function v(t) {
        const a = o("useWAWebFlow").useFlow();
        const I = a[0];
        const flow = a[1];
        const cRef = useRef();
        const m = (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t_target = t.target;
                const { customUrl, invalidUsernameKey, username, usernameKey, wid } = t_target;
                if (wid != null) {
                    return {
                        wid,
                        widLookupMethod: "directWid"
                    };
                }
                if (customUrl != null) {
                    const u = yield o("WAWebBizGetWidFromPathCustomUrlAction").getWidfromPath(customUrl);
                    if (u) {
                        return {
                            wid: u,
                            widLookupMethod: "customUrl"
                        };
                    }
                }
                if (username != null && o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
                    if (invalidUsernameKey === true) {
                        if (t.deepLinkLoggingData != null) {
                            new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent(babelHelpers.extends({}, t.deepLinkLoggingData, {
                                deepLinkRequirePinEntry: true
                            })).commit();
                        }
                        const c = yield o("WAWebUsernameKeyVerificationFlowLazy").usernameKeyVerificationFlow({
                            username
                        });
                        if (c != null) {
                            return {
                                wid: c,
                                widLookupMethod: "username"
                            };
                        }
                        return undefined;
                    }
                    const d = yield o("WAWebQueryExistsJob").queryUsernameExists(username, usernameKey, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CHAT_OPEN);
                    const deepLinkRequirePinEntry = d?.keyRequired === true;
                    if (t.deepLinkLoggingData != null) {
                        new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent(babelHelpers.extends({}, t.deepLinkLoggingData, {
                            deepLinkRequirePinEntry
                        })).commit();
                    }
                    let p;
                    if (deepLinkRequirePinEntry) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "OpenChatFlow: username query returned keyRequired"
                        ])));
                        p = yield o("WAWebUsernameKeyVerificationFlowLazy").usernameKeyVerificationFlow({
                            username
                        });
                    } else {
                        p = d?.wid;
                    }
                    if (p != null) {
                        return {
                            wid: p,
                            widLookupMethod: "username"
                        };
                    }
                }
            });
            return function() {
                return r.apply(this, arguments);
            };
        })();
        const h = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                let t_ctwaContextLinkData = t.ctwaContextLinkData;
                let t_msgText = t.msgText;
                const t_clearPreviousText = t.clearPreviousText;
                const i = t_clearPreviousText === undefined ? false : t_clearPreviousText;
                if (t_ctwaContextLinkData) {
                    const l = o("WAWebLinkify").findLink({
                        httpOnly: false,
                        sender: o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                        text: t_ctwaContextLinkData.sourceUrl || ""
                    });
                    const s = l?.suspiciousCharacters != null && l.suspiciousCharacters.size > 0;
                    if (s) {
                        t_ctwaContextLinkData = undefined;
                    }
                }
                if (t_ctwaContextLinkData) {
                    t_msgText = t_ctwaContextLinkData.icebreaker;
                }
                if (e.active && t_msgText != null && t_msgText !== "") {
                    if (i) {
                        o("WAWebComposeBoxActions").ComposeBoxActions.setTextContent(e, "");
                    }
                    o("WAWebComposeBoxActions").ComposeBoxActions.paste(e, t_msgText);
                    if (t_ctwaContextLinkData) {
                        o("WAWebComposeBoxActions").ComposeBoxActions.setCtwaContextLinkData(e, t_ctwaContextLinkData);
                    }
                } else {
                    if (i) {
                        e.setComposeContents({
                            text: ""
                        });
                    }
                    if (t_msgText != null && t_msgText !== "") {
                        e.setComposeContents({
                            text: t_msgText,
                            timestamp: o("WATimeUtils").unixTime()
                        });
                    }
                    yield o("WAWebCmd").Cmd.openChatFromUnread({
                        chat: e,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink
                    }).then((t)=>{
                        if (t) {
                            o("WAWebComposeBoxActions").ComposeBoxActions.focus(e);
                            if (t_ctwaContextLinkData) {
                                o("WAWebComposeBoxActions").ComposeBoxActions.setCtwaContextLinkData(e, t_ctwaContextLinkData);
                            }
                        }
                    });
                }
                if (t.sendLogAttributes != null) {
                    o("WAWebComposeBoxActions").ComposeBoxActions.addMsgSendingLogAttributes(e, t.sendLogAttributes);
                }
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const C = ()=>{
            flow.push(b.Error);
        };
        const v = function() {
            cRef.current?.controller.abort();
            cRef.current = undefined;
            flow.end();
        };
        useEffect(function() {
            const e = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    let e = false;
                    const a = new AbortController;
                    o("WAPromiseDelays").delayMs(f).then(()=>{
                        if (a.signal.aborted) {
                            throw new (o("WAAbortError")).AbortError;
                        }
                        e = true;
                        flow.push(b.Confirm);
                    }).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
                    const i = Date.now();
                    const controller = new AbortController;
                    const s_signal = controller.signal;
                    const p = yield m();
                    if (p == null) {
                        const _ = t.target;
                        const { fallbackUrl, username } = _;
                        if (username != null && o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
                            a.abort();
                            flow.push(b.UsernameNotFoundError);
                            return;
                        }
                        if (fallbackUrl != null) {
                            o("WAWebExternalLink.react").openExternalLink(fallbackUrl);
                            flow.end();
                            return;
                        }
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "OpenChatFlow chat open was no-op from provided props."
                        ])));
                        flow.end();
                        return;
                    }
                    const promise = y(p.wid).then((e)=>{
                        const n = o("WAWebBotProfileCollection").BotProfileCollection.getDefaultBot()?.id;
                        if (e.isBot() && (n == null || !n.equals(e))) {
                            throw r("err")("invalid bot chat");
                        }
                        return o("WAWebFindChatAction").findOrCreateLatestChat(e, "debugOpenChatFlow", {
                            forceUsync: true
                        });
                    }).then((()=>{
                        const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                            if (s_signal.aborted) {
                                throw new (o("WAAbortError")).AbortError;
                            }
                            if (!e) {
                                a.abort();
                            }
                            const r = Date.now() - i;
                            const s = e ? Math.max(g + f - r, 0) : 0;
                            yield h(n.chat);
                            yield o("WAPromiseDelays").delayMs(s);
                            flow.end();
                            t.onSuccess(babelHelpers.extends({}, n, {
                                widLookupMethod: p.widLookupMethod
                            }));
                        });
                        return function(e) {
                            return r.apply(this, arguments);
                        };
                    })()).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch((e)=>{
                        a.abort();
                        t.onError?.(r("getErrorSafe")(e));
                        C();
                    });
                    cRef.current = {
                        controller,
                        promise
                    };
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            e().catch(r("WAWebNoop"));
        }, []);
        if (flow.step == null) {
            return null;
        }
        let S = null;
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        switch(flow.step){
            case b.Confirm:
                S = <Component_1 title={s._("Starting chat")} onCancel={v} cancelText={r("WAWebFbtCommon")("Cancel")} tsNavigationData={{
                    surface: "unknown",
                    viewName: "open-chat-starting"
                }}><Component justify="center" align="center">{d.jsx(o("WAWebSpinner.react").Spinner, {
                    stroke: 6,
                    size: 24
                })}</Component></Component_1>;
                break;
            case b.Error:
                if (t.customError != null) {
                    S = t.customError;
                } else {
                    const R = t.target.wid;
                    const L = o("WAWebWidFormat").widToFormattedUser(R);
                    const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                    S = <Component onOK={function() {
                        return flow.end();
                    }} okText={r("WAWebFbtCommon")("OK")} tsNavigationData={{
                        surface: "unknown",
                        viewName: "open-chat-not-found"
                    }}>{s._("The number {formattedNumber} isn't on WhatsApp.", [
                        s._param("formattedNumber", L)
                    ])}</Component>;
                }
                break;
            case b.UsernameNotFoundError:
                {
                    const E = t.target.username;
                    const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                    S = <Component onOK={function() {
                        return flow.end();
                    }} okText={r("WAWebFbtCommon")("OK")} tsNavigationData={{
                        surface: "unknown",
                        viewName: "open-chat-username-not-found"
                    }}>{s._("The username \u0040{username} isn't on WhatsApp.", [
                        s._param("username", E)
                    ])}</Component>;
                    break;
                }
        }
        return <I flow={flow}>{S}</I>;
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    l.OpenChatFlow = v;
}, 226);