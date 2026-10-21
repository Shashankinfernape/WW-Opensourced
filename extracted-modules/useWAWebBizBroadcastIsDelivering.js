__d("useWAWebBizBroadcastIsDelivering", [
    "WAWebBroadcastInsightStatus",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastCampaignByMsg",
    "useWAWebBroadcastInsights",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function useU(e) {
        const t = o("react-compiler-runtime").c(9);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebMsgGetters").getT,
                o("WAWebMsgGetters").getIsNewsletterMsg
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e, n);
        const i = a[0];
        const l = a[1];
        const u = a[2];
        const d = r("useWAWebBizBroadcastCampaignByMsg")(e.id);
        const m = r("useWAWebBroadcastInsights")(d ?? "");
        const m_insights = m.insights;
        const _ = useState(c);
        const nowMs = _[0];
        const g = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(e, u);
        if (!i || g == null || !o("WAWebChatGetters").getIsBroadcast(g) || d == null || m_insights == null) {
            return false;
        }
        const sentTimestampMs = l * 1000;
        let y;
        if (t[1] !== m_insights.deliveredCount || t[2] !== m_insights.readCount || t[3] !== m_insights.recipientCount || t[4] !== nowMs || t[5] !== sentTimestampMs) {
            y = o("WAWebBroadcastInsightStatus").getInsightStatus({
                deliveredCount: m_insights.deliveredCount,
                nowMs,
                readCount: m_insights.readCount,
                recipientCount: m_insights.recipientCount,
                sentTimestampMs
            });
            t[1] = m_insights.deliveredCount;
            t[2] = m_insights.readCount;
            t[3] = m_insights.recipientCount;
            t[4] = nowMs;
            t[5] = sentTimestampMs;
            t[6] = y;
        } else {
            y = t[6];
        }
        const C = y !== o("WAWebBroadcastInsightStatus").InsightStatus.SENT;
        let b;
        if (t[7] !== C) {
            b = C && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastInThreadInsightMetricsEnabled();
            t[7] = C;
            t[8] = b;
        } else {
            b = t[8];
        }
        return b;
    }
    function c() {
        return Date.now();
    }
    l.default = useU;
}, 98);