__d("WAWebBizTemplateButtons.react", [
    "WALogger",
    "WAWebApiParse",
    "WAWebBizMessageOpenCallModal",
    "WAWebCouponCodeHelper",
    "WAWebExecApiCmd",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageBubbleActions.react",
    "WAWebMsgCollection",
    "WAWebMuseCtaLinkOverride",
    "WAWebOTPHelper",
    "WAWebSendTextMsgChatAction",
    "WAWebTemplateButtonSubtype",
    "WDSIconIcCall.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcOpenInNew.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebSourceSnapshot"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useMemo = s.useMemo;
    const d = new EventTarget;
    function m(t) {
        const n = o("react-compiler-runtime").c(21);
        const { chat, msgKey } = t;
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebFrontendMsgGetters").getButtons
            ];
            n[0] = l;
        } else {
            l = n[0];
        }
        const s = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const c = s[0];
        let m;
        if (n[1] !== c) {
            m = function() {
                return c?.map(p) ?? [];
            };
            n[1] = c;
            n[2] = m;
        } else {
            m = n[2];
        }
        const f = r("useWAWebSourceSnapshot")(c ?? d, "change:selected", m);
        let g;
        if (n[3] !== chat || n[4] !== msgKey) {
            g = function(n) {
                const { displayText, id, selectionId, subtype, url } = n;
                if (subtype === o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.CALL) {
                    r("WAWebBizMessageOpenCallModal")();
                } else if (subtype === o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL && url != null) {
                    if (o("WAWebOTPHelper").isOTPCopyCodeButton(n)) {
                        const d = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                        if (d != null) {
                            o("WAWebOTPHelper").copyOTPCode(n, d);
                        }
                        return;
                    }
                    if (o("WAWebCouponCodeHelper").isCouponCodeButton(n)) {
                        o("WAWebCouponCodeHelper").copyCouponCode(n);
                        return;
                    }
                    const m = o("WAWebMuseCtaLinkOverride").overrideCtaUrlIfNeeded(url);
                    const cmdData = o("WAWebApiParse").parseAPICmd(m);
                    if (cmdData.resultType === "OPEN_CATALOG" || cmdData.resultType === "CTWA_ADS_DATA_SHARING" || cmdData.resultType === "BIZ_AGENTS_ONBOARDING" || cmdData.resultType === "BIZ_BROADCAST_AUDIENCE_MODAL" || cmdData.resultType === "BIZ_BROADCAST_HOME") {
                        cmdData.resultType;
                        r("WAWebExecApiCmd")({
                            cmdData,
                            isExternal: false
                        });
                        return;
                    }
                    o("WAWebExternalLink.react").openExternalLink(m);
                } else if (subtype === o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.QUICK_REPLY) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "handleClick inside WAWebBizTemplateButtons"
                    ])));
                    const f = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                    if (f == null) {
                        return;
                    }
                    o("WAWebSendTextMsgChatAction").sendTextMsgToChat(chat, displayText, {
                        quotedMsg: f,
                        selectedIndex: parseInt(id, 10),
                        selectedId: selectionId
                    }).then(()=>{
                        n.selected = true;
                    });
                }
            };
            n[3] = chat;
            n[4] = msgKey;
            n[5] = g;
        } else {
            g = n[5];
        }
        const h = g;
        let y;
        if (n[6] !== c || n[7] !== f) {
            y = c == null ? [] : c.map((e, t)=>{
                if (f[t] === true) {
                    return "selected";
                }
                return null;
            });
            n[6] = c;
            n[7] = f;
            n[8] = y;
        } else {
            y = n[8];
        }
        const C = y;
        let b;
        if (n[9] !== c) {
            b = c ?? [];
            n[9] = c;
            n[10] = b;
        } else {
            b = n[10];
        }
        let v;
        if (n[11] !== C || n[12] !== h || n[13] !== b) {
            let S;
            if (n[15] !== C || n[16] !== h) {
                S = function(t, n) {
                    let e;
                    e: switch(t.subtype){
                        case o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.CALL:
                            {
                                e = r("WDSIconIcCall.react");
                                break e;
                            }
                        case o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL:
                            e = o("WAWebOTPHelper").isOTPCopyCodeButton(t) || o("WAWebCouponCodeHelper").isCouponCodeButton(t) ? r("WDSIconIcContentCopy.react") : r("WDSIconIcOpenInNew.react");
                    }
                    const a = C[n] != null;
                    return babelHelpers.extends({}, e == null ? {} : {
                        Icon: e
                    }, {
                        disabled: a,
                        label: t.displayText,
                        onClick: a ? null : function() {
                            return h(t);
                        },
                        testid: `biz-template-button-${n}`
                    });
                };
                n[15] = C;
                n[16] = h;
                n[17] = S;
            } else {
                S = n[17];
            }
            v = b.map(S);
            n[11] = C;
            n[12] = h;
            n[13] = b;
            n[14] = v;
        } else {
            v = n[14];
        }
        const R = v;
        let L;
        if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                className: "x9otpla xwib8y2 x1bjonze x7coems"
            };
            n[18] = L;
        } else {
            L = n[18];
        }
        let E;
        if (n[19] !== R) {
            E = <div {...babelHelpers.extends({}, L, {
                children: u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                    direction: "vertical",
                    items: R
                })
            })}/>;
            n[19] = R;
            n[20] = E;
        } else {
            E = n[20];
        }
        return E;
    }
    function p(e) {
        return e.selected;
    }
    function _(e) {}
    l.default = m;
}, 98);