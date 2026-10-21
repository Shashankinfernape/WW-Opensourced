__d("WAWebSyncButtonState", [
    "WALogger",
    "WAWebAck",
    "WAWebBizInteractiveMessageQuickReplyAction",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveCtaActions",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgButtonReplyMsgCollection",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQuotedMsgModelUtils",
    "WAWebTemplateButtonReplyMsgCollection",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        c(e);
        d(e);
        p(e);
        _(e);
    }
    function c(e) {
        const t = ()=>{
            const t = e[a];
            if (!t || t.selectedCarouselCardIndex != null) {
                return 0;
            }
            if (y(t)) {
                const n = o("WAWebFrontendMsgGetters").getChat(t);
                if (n.msgUnsyncedButtonReplyMsgs == null) {
                    n.msgUnsyncedButtonReplyMsgs = new (r("WAWebMsgButtonReplyMsgCollection"));
                }
                const i = n.msgUnsyncedButtonReplyMsgs;
                const l = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(t);
                if (!l) {
                    return 0;
                }
                let s = i.get(l.id);
                if (!s) {
                    i.add({
                        id: l.id,
                        unsyncedButtonReplies: new (r("WAWebTemplateButtonReplyMsgCollection"))
                    });
                    s = i.get(l.id);
                }
                const u = r("nullthrows")(s);
                const c = u.unsyncedButtonReplies;
                c.add(t);
                const d = o("WAWebMsgCollection").MsgCollection.get(l.id);
                if (d != null && d.buttons) {
                    const m = d.buttons.get(`${r("nullthrows")(t.selectedIndex)}`);
                    if (m) {
                        m.selected = true;
                    }
                    c.remove(t);
                }
            } else if (t.isFromTemplate && t.buttons) {
                const p = o("WAWebFrontendMsgGetters").getChat(t);
                const _ = p.msgUnsyncedButtonReplyMsgs;
                if (_ == null) {
                    return 0;
                }
                const f = _.get(t.id);
                if (f) {
                    f.unsyncedButtonReplies.forEach((e)=>{
                        const n = r("nullthrows")(t.buttons).get(`${r("nullthrows")(e.selectedIndex)}`);
                        if (n) {
                            n.selected = true;
                        }
                    });
                    f.unsyncedButtonReplies.delete();
                }
            }
        };
        let n;
        for(var a = 0; a < e.length; a++){
            n = t();
        }
    }
    function d(e) {
        const t = ()=>{
            const t = e[r];
            if (!t || t.selectedCarouselCardIndex != null) {
                return 0;
            }
            if (m(t)) {
                const n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(t);
                if (!n) {
                    return 0;
                }
                const a = o("WAWebMsgCollection").MsgCollection.get(n.id);
                if (a != null && a.replyButtons) {
                    const i = a.replyButtons.get(t.selectedButtonId);
                    if (i) {
                        i.selected = true;
                    }
                }
            } else if (t.isDynamicReplyButtonsMsg && t.replyButtons && t.replyButtons.every((e)=>!e.selected) && o("WAWebFrontendMsgGetters").getChat(t)) {
                const l = Math.max(0, o("WAWebFrontendMsgGetters").getChat(t).msgs.length - 1000);
                o("WAWebFrontendMsgGetters").getChat(t).msgs.getModelsArray().slice(l).filter((e)=>m(e) && o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e)?.id.toString() === t.id.toString()).map(({ selectedButtonId })=>selectedButtonId).forEach((e)=>{
                    const r = t.replyButtons?.get(e);
                    if (r != null) {
                        r.selected = true;
                    }
                });
            }
        };
        let n;
        for(var r = 0; r < e.length; r++){
            n = t();
        }
    }
    function m(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.BUTTONS_RESPONSE && e.selectedButtonId != null && e.isSendFailure !== true && (e.ack ?? o("WAWebAck").ACK.CLOCK) >= o("WAWebAck").ACK.CLOCK && C(e);
    }
    function p(e) {
        const t = ()=>{
            const t = e[a];
            if (!t) {
                return 0;
            }
            if (y(t) && t.selectedCarouselCardIndex != null) {
                const n = r("nullthrows")(t.selectedCarouselCardIndex);
                const i = r("nullthrows")(t.selectedIndex);
                const l = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(t);
                if (!l) {
                    return 0;
                }
                const s = o("WAWebMsgCollection").MsgCollection.get(l.id);
                if (s == null || s.carouselCardsParsed == null || s.carouselCardsParsed[n] == null) {
                    return 0;
                }
                const u = s.carouselCardsParsed.slice();
                u[n] = babelHelpers.extends({}, u[n], {
                    interactivePayload: o("WAWebBizInteractiveMessageQuickReplyAction").rebuildInteractivePayloadWithDisabledButton(u[n].interactivePayload, i)
                });
                s.carouselCardsParsed = u;
            } else if (t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && t.carouselCardsParsed != null && o("WAWebFrontendMsgGetters").getChat(t)) {
                const c = Math.max(0, o("WAWebFrontendMsgGetters").getChat(t).msgs.length - 1000);
                const d = o("WAWebFrontendMsgGetters").getChat(t).msgs.getModelsArray().slice(c).filter((e)=>y(t) && e.selectedCarouselCardIndex != null && o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e)?.id.toString() === t.id.toString());
                if (d.length === 0) {
                    return 0;
                }
                const m = r("nullthrows")(t.carouselCardsParsed).slice();
                for (const p of d){
                    const _ = r("nullthrows")(p.selectedCarouselCardIndex);
                    const f = r("nullthrows")(p.selectedIndex);
                    if (m[_] != null) {
                        m[_] = babelHelpers.extends({}, m[_], {
                            interactivePayload: o("WAWebBizInteractiveMessageQuickReplyAction").rebuildInteractivePayloadWithDisabledButton(m[_].interactivePayload, f)
                        });
                    }
                }
                t.carouselCardsParsed = m;
            }
        };
        let n;
        for(var a = 0; a < e.length; a++){
            n = t();
        }
    }
    function _(e) {
        const t = ()=>{
            const t = e[a];
            if (!t) {
                return 0;
            }
            if (f(t)) {
                const n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(t);
                if (!n) {
                    return 0;
                }
                const i = o("WAWebMsgCollection").MsgCollection.get(n.id);
                if (i != null) {
                    g(i, t);
                }
            } else if (t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && t.interactivePayload != null && t.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY && o("WAWebFrontendMsgGetters").getChat(t)) {
                const l = o("WAWebFrontendMsgGetters").getChat(t);
                const s = Math.max(0, l.msgs.length - 1000);
                l.msgs.getModelsArray().slice(s).filter((e)=>f(e) && o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e)?.id.toString() === t.id.toString()).forEach((e)=>{
                    g(t, e);
                });
            }
        };
        let n;
        for(var a = 0; a < e.length; a++){
            n = t();
        }
    }
    function f(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE || e.interactivePayload == null || !C(e)) {
            return false;
        }
        const e_interactivePayload = e.interactivePayload;
        return e_interactivePayload.name === r("WAWebInteractiveMessagesNativeFlowName").MENU_OPTIONS;
    }
    function g(t, n) {
        const i = h(n);
        if (i != null) {
            const l = o("WAWebGetInteractiveCtaActions").getNativeFlowCtasFromInteractiveMsg(t)?.find(function(e) {
                return e.name === "quick_reply" && e.data.selectionId === i;
            });
            if (!(l == null || l.data.disabled === true)) {
                o("WAWebBizInteractiveMessageQuickReplyAction").markInteractiveButtonClicked(t, l.index).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncButtonState: failed to persist proactive CTA disable"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("menu-options-cta-disable-failed");
                });
            }
        }
    }
    function h(e) {
        if (e.interactivePayload == null) {
            return null;
        }
        const e_interactivePayload = e.interactivePayload;
        try {
            const n = JSON.parse(e_interactivePayload.paramsJson);
            if (n == null || typeof n !== "object") {
                return null;
            }
            if (typeof n.id === "string") {
                return n.id;
            }
            return null;
        } catch (error) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncButtonState: failed to parse menu_options paramsJson"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("menu-options-params-parse-failed");
            return null;
        }
    }
    function y(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY && e.selectedIndex != null && C(e);
    }
    var C = (t)=>{
        const e = o("WAWebMsgGetters").getSender(t);
        if (e != null) {
            return o("WAWebUserPrefsMeUser").isMeAccount(e);
        }
        return false;
    };
    l.default = u;
}, 98);