__d("WAWebQuickReplyPickerPlugin", [
    "fbt",
    "WALogger",
    "WATypeUtils",
    "WAWebBizQuickRepliesDrawerLoadable",
    "WAWebBizSendOrderAction",
    "WAWebBusinessProfileCollection",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebFrontendContactGetters",
    "WAWebLexicalTypeAheadList.react",
    "WAWebPixWamLogger",
    "WAWebQuickRepliesPluginLogEvents",
    "WAWebQuickRepliesPluginResult.react",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyEnum",
    "WAWebQuickReplyGetters",
    "WAWebSendContactsAction",
    "WAWebSendLocationChatAction",
    "WAWebSendTextMsgChatAction",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPaymentActionTypes",
    "WDSButton.react",
    "WDSIconIcEdit.react",
    "react",
    "useWAWebLexicalTypeAhead"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useMemo, useRef } = m;
    const g = 52;
    const h = "/";
    const y = 25;
    const C = 30;
    function b({ composerAnchorRef, editor, onPickerClose, onQuickReplySelect, openedFromMenu }) {
        const u = editor;
        const c = r("WDSIconIcEdit.react");
        const m = o("useWAWebLexicalTypeAhead").useTypeAhead(u, h, {
            boundary: true,
            maxQueryLength: y
        });
        const { leadOffset, omitQuery, query, replaceQuery } = m;
        const DRef = useRef();
        const xRef = useRef(false);
        useEffect(function() {
            o("WAWebQuickReplyCollection").QuickReplyCollection.addSmartDefaultsIfNeeded();
        }, []);
        const $ = query != null && openedFromMenu === true;
        const PRef = useRef(query);
        useEffect(function() {
            const e = PRef.current != null;
            PRef.current = query;
            if (e && query == null) {
                if (onPickerClose != null) {
                    onPickerClose();
                }
            }
        }, [
            query,
            onPickerClose
        ]);
        const NComponent = (t, n)=>{
            if (t.itemKey === "quick-replies-header") {
                const Component = r("WDSButton.react");
                return <div key="quick-replies-header" className="x889kno xf159sx x1a8lsjc xmzvs34 x6prxxf xhslqc4 x1yc453h x78zum5 x1qughib x6s0dn4"><span>{s._("Quick replies")}</span><Component variant="borderless" type="default" size="small" Icon={c} onPress={function() {
                    const Component = o("WAWebBizQuickRepliesDrawerLoadable").WAWebBizQuickRepliesDrawerLoadable;
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component onBack={o("WAWebDrawerManager").closeDrawerRight} isInitialStep={false}/>);
                }} aria-label={s._("Edit Quick Replies")}/></div>;
            }
            if (!t.quickReply) {
                return <div/>;
            }
            const t_quickReply = t.quickReply;
            return d.jsx(r("WAWebQuickRepliesPluginResult.react"), {
                quickReply: t_quickReply,
                query: t.query,
                selected: n
            }, t_quickReply.id.toString());
        };
        const M = (t)=>{
            if (t.itemKey !== "quick-replies-header") {
                const e = t.quickReply;
                if (e) {
                    onQuickReplySelect?.();
                    DRef.current = e.message;
                    switch(o("WAWebQuickReplyGetters").getType(e)){
                        case o("WAWebQuickReplyEnum").QuickReplyTypes.PROFILE_SMART_DEFAULT:
                            omitQuery();
                            E(e);
                            break;
                        case o("WAWebQuickReplyEnum").QuickReplyTypes.ADDRESS_SMART_DEFAULT:
                            omitQuery();
                            L(e);
                            break;
                        case o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT:
                            omitQuery();
                            R(e);
                            break;
                        case o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT:
                            omitQuery();
                            k(e, $);
                            break;
                        default:
                            replaceQuery(e.message, {
                                select: true
                            });
                            e.useOnce();
                    }
                    if (o("WAWebQuickReplyGetters").getType(e) === o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT) {
                        o("WAWebQuickRepliesPluginLogEvents").logPixSmartSelectEvent($);
                    } else if (e.isSmartDefault()) {
                        o("WAWebQuickRepliesPluginLogEvents").logSmartDefaultSelectEvent($);
                    } else {
                        o("WAWebQuickRepliesPluginLogEvents").logSelectEvent($);
                    }
                    xRef.current = $;
                }
            }
        };
        const w = function() {
            omitQuery();
        };
        const A = useMemo(function() {
            if (query == null) {
                return null;
            }
            const e = v(query, $);
            if (e.length === 0) {
                return null;
            }
            const t = {
                height: C,
                itemKey: "quick-replies-header",
                contentKey: "header",
                index: 0,
                quickReply: null,
                query: "",
                selectable: false
            };
            const n = e.map((quickReply, t)=>({
                    height: g,
                    itemKey: quickReply.id,
                    contentKey: query,
                    index: t + 1,
                    quickReply,
                    query,
                    selectable: true
                }));
            return [
                t
            ].concat(n);
        }, [
            query,
            $
        ]);
        const F = 600;
        const O = (A ?? []).map((e)=>({
                renderFn: function(n) {
                    return NComponent(e, n);
                },
                onSelect: function() {
                    return M(e);
                },
                width: F,
                height: e.height ?? g,
                skipKeyboardNav: e.itemKey === "quick-replies-header"
            }));
        const startingIndex = O.findIndex((e)=>e.skipKeyboardNav === false);
        const Component = r("WAWebLexicalTypeAheadList.react");
        return <Component leadOffset={leadOffset} items={O} onCancel={w} startingIndex={startingIndex} anchorElRef={$ ? composerAnchorRef : undefined}/>;
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    function v(query, t) {
        let n = o("WAWebQuickReplyCollection").QuickReplyCollection.filterShortcuts(query);
        const r = o("WAWebChatCollection").ChatCollection.getActive();
        n = S(r, n);
        if (n.length) {
            o("WAWebQuickRepliesPluginLogEvents").logFilterEvent(n.length, t);
        }
        return n;
    }
    function S(e, t) {
        return t.filter((t)=>!t.hideForChat(e));
    }
    function R(t) {
        const n = o("WAWebChatCollection").ChatCollection.getActive();
        if (n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendBusinessHours inside WAWebQuickReplyPickerPlugin"
            ])));
            o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, t.message);
            t.useOnce();
        }
    }
    function L(e) {
        const t = o("WAWebChatCollection").ChatCollection.getActive();
        const meUser = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        const a = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(meUser);
        const i = o("WAWebContactCollection").ContactCollection.get(meUser);
        if (!(!t || !a)) {
            const { address, latitude, longitude } = a;
            if (o("WATypeUtils").isNumber(latitude) && o("WATypeUtils").isNumber(longitude) && i) {
                let loc = o("WAWebFrontendContactGetters").getDisplayName(i);
                if (a.address != null && a.address !== "") {
                    loc += `
${a.address}`;
                }
                r("WAWebSendLocationChatAction")({
                    chat: t,
                    lat: latitude,
                    lng: longitude,
                    loc,
                    meUser
                });
                e.useOnce();
            } else {
                if (address != null && address !== "") {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "sendBusinessAddress inside WAWebQuickReplyPickerPlugin"
                    ])));
                    o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, address);
                    e.useOnce();
                }
            }
        }
    }
    function E(e) {
        const t = o("WAWebChatCollection").ChatCollection.getActive();
        const n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        if (n != null) {
            const a = o("WAWebContactCollection").ContactCollection.get(n);
            if (!(!t || !a)) {
                r("WAWebSendContactsAction")({
                    chat: t,
                    contacts: [
                        a
                    ]
                });
                e.useOnce();
            }
        }
    }
    function k(e, t) {
        const n = o("WAWebChatCollection").ChatCollection.getActive();
        if (n) {
            o("WAWebBizSendOrderAction").sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner(n);
            e.useOnce();
            o("WAWebPixWamLogger").logPixSenderEvent({
                actionTarget: undefined,
                chat: n,
                paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
                pixData: o("WAWebUserPrefsCustomPaymentMethods").getPIX(),
                previousScreenName: t ? "chat_attachment" : "chat",
                referral: "quick_reply",
                screen: "quick_reply"
            });
        }
    }
    l.default = b;
}, 226);