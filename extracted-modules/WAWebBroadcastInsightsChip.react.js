__d("WAWebBroadcastInsightsChip.react", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebAddOnBubble.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebChatGetters",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumEntryPoint",
    "WDSIconIcReply.react",
    "WDSIconIcVisibility.react",
    "WDSIconWdsIcRead.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastCampaignByMsg",
    "useWAWebBroadcastInsights"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    const d = r("JSResourceForInteraction")("WAWebBroadcastDetailsDrawerFromChat.react").__setRef("WAWebBroadcastInsightsChip.react");
    function m(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_msg = e.msg;
        const a = r("useWAWebBizBroadcastCampaignByMsg")(e_msg.id.id);
        let i;
        let l;
        if (t[0] !== a || t[1] !== e_msg) {
            i = o("WAWebFrontendMsgGetters").getChat(e_msg);
            l = !o("WAWebMsgGetters").getIsSentByMe(e_msg) || i == null || !o("WAWebChatGetters").getIsBroadcast(i) || a == null || !o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastInThreadInsightMetricsEnabled();
            t[0] = a;
            t[1] = e_msg;
            t[2] = i;
            t[3] = l;
        } else {
            i = t[2];
            l = t[3];
        }
        if (l) {
            return null;
        }
        let s;
        if (t[4] !== a || t[5] !== i || t[6] !== e_msg) {
            s = <P8Component campaignId={a} chat={i} msg={e_msg}/>;
            t[4] = a;
            t[5] = i;
            t[6] = e_msg;
            t[7] = s;
        } else {
            s = t[7];
        }
        return s;
    }
    function P8Component(e) {
        const t = o("react-compiler-runtime").c(21);
        const { campaignId, chat, msg } = e;
        const l = r("useWAWebBroadcastInsights")(campaignId);
        const l_insights = l.insights;
        let m;
        if (t[0] !== campaignId || t[1] !== chat || t[2] !== msg.id) {
            m = function() {
                o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.inThreadInsightMetricsChipClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, campaignId, msg.id.toString());
                d.load().then((E1)=>{
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(<E1 chat={chat} msgId={msg.id.id}/>, {
                        transition: "slide-left"
                    });
                });
            };
            t[0] = campaignId;
            t[1] = chat;
            t[2] = msg.id;
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        if (l_insights == null) {
            return null;
        }
        const { deliveredCount, readCount, repliedCount } = l_insights;
        if (deliveredCount === 0 && readCount === 0 && repliedCount === 0) {
            return null;
        }
        let h;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("View broadcast insights");
            t[4] = h;
        } else {
            h = t[4];
        }
        let y;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            y = u.jsx(r("WDSIconWdsIcRead.react"), {
                colorName: "contentDeemphasized",
                height: 14,
                width: 14
            });
            t[5] = y;
        } else {
            y = t[5];
        }
        const C = String(deliveredCount);
        let b;
        if (t[6] !== C) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            b = <Component_1 align="center" gap={2}>{y}<Component type="Body3" colorName="contentDeemphasized">{C}</Component></Component_1>;
            t[6] = C;
            t[7] = b;
        } else {
            b = t[7];
        }
        let v;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            v = u.jsx(r("WDSIconIcVisibility.react"), {
                colorName: "contentDeemphasized",
                height: 14,
                width: 14
            });
            t[8] = v;
        } else {
            v = t[8];
        }
        const S = String(readCount);
        let R;
        if (t[9] !== S) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            R = <Component_1 align="center" gap={2}>{v}<Component type="Body3" colorName="contentDeemphasized">{S}</Component></Component_1>;
            t[9] = S;
            t[10] = R;
        } else {
            R = t[10];
        }
        let L;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            L = u.jsx(r("WDSIconIcReply.react"), {
                colorName: "contentDeemphasized",
                directional: true,
                height: 14,
                width: 14
            });
            t[11] = L;
        } else {
            L = t[11];
        }
        const E = String(repliedCount);
        let k;
        if (t[12] !== E) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            k = <Component_1 align="center" gap={2}>{L}<Component type="Body3" colorName="contentDeemphasized">{E}</Component></Component_1>;
            t[12] = E;
            t[13] = k;
        } else {
            k = t[13];
        }
        let I;
        if (t[14] !== k || t[15] !== b || t[16] !== R) {
            const Component = o("WAWebFlex.react").FlexRow;
            I = <Component align="center" gap={4}>{b}{R}{k}</Component>;
            t[14] = k;
            t[15] = b;
            t[16] = R;
            t[17] = I;
        } else {
            I = t[17];
        }
        let T;
        if (t[18] !== p || t[19] !== I) {
            const Component = r("WAWebUnstyledButton.react");
            const Component_1 = r("WAWebAddOnBubble.react");
            T = <Component_1><Component aria-label={h} onClick={p} testid="broadcast_insights_chip">{I}</Component></Component_1>;
            t[18] = p;
            t[19] = I;
            t[20] = T;
        } else {
            T = t[20];
        }
        return T;
    }
    l.default = m;
}, 226);