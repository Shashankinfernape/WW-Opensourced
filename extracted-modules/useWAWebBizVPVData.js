__d("useWAWebBizVPVData", [
    "WAWebABProps",
    "WAWebBizMessageAttributionFields",
    "WAWebBizVPVEligibility",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "WAWebWamEnumMessageBodyTypeEnum",
    "WAWebWamEnumQbmFlag",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u(e) {
        const a = o("react-compiler-runtime").c(20);
        let i;
        if (a[0] !== e) {
            i = o("WAWebFrontendMsgGetters").getChat(e);
            a[0] = e;
            a[1] = i;
        } else {
            i = a[1];
        }
        const l = i;
        const messageId = e.id?.id;
        const u = o("WAWebABProps").getABPropConfigValue("biz_vpv_impression_logging_enabled") === true;
        const c = l?.id;
        const e_from = e.from;
        let m;
        if (a[2] === Symbol.for("react.memo_cache_sentinel")) {
            let p;
            m = [
                (p = o("WAWebChatGetters")).getIsNewsletter,
                p.getIsGroup,
                p.getArchive,
                p.getMuteExpiration
            ];
            a[2] = m;
        } else {
            m = a[2];
        }
        const _ = o("useWAWebChatValues").useChatValues(c, m);
        const f = _[0];
        const g = _[1];
        const h = _[2];
        const y = _[3];
        let C;
        if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
            C = [
                o("WAWebContactGetters").getIsEnterprise,
                o("WAWebContactGetters").getIsHosted
            ];
            a[3] = C;
        } else {
            C = a[3];
        }
        const b = o("useWAWebContactValues").useOptionalContactValues(e_from, C);
        const isEnterprise = b?.[0] ?? false;
        const isHosted = b?.[1] ?? false;
        let R;
        if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
            let L;
            R = [
                (L = o("WAWebMsgGetters")).getHsmTag,
                L.getT,
                L.getClientReceivedTsMillis,
                L.getBizSource
            ];
            a[4] = R;
        } else {
            R = a[4];
        }
        const E = o("useWAWebMsgValues").useMsgValues(e.id, R);
        const hsmTagStr = E[0];
        const serverTimestamp = E[1];
        const clientReceivedTsMillis = E[2];
        const D = E[3];
        const x = o("WAWebBizVPVEligibility").isEligibleForBizVPV({
            isEnterprise,
            isGroupChat: g ?? false,
            isHosted,
            msg: e
        });
        const $ = u && !f && messageId != null && c != null && x;
        let P;
        e: {
            if (!$ || messageId == null || c == null) {
                P = null;
                break e;
            }
            const qbmFlag = o("WAWebMsgGetters").isBizSourceFromMarketingMessage(D) ? o("WAWebWamEnumQbmFlag").QBM_FLAG.MARKETING_MESSAGE_SMB : hsmTagStr === "UTILITY" ? o("WAWebWamEnumQbmFlag").QBM_FLAG.TRANSACTIONAL : hsmTagStr === "MARKETING" ? o("WAWebWamEnumQbmFlag").QBM_FLAG.PROMOTIONAL : hsmTagStr === "AUTHENTICATION" ? o("WAWebWamEnumQbmFlag").QBM_FLAG.OTP : o("WAWebWamEnumQbmFlag").QBM_FLAG.OTHER;
            let M;
            if (a[5] !== e) {
                M = o("WAWebBizMessageAttributionFields").extractBizMessageAttribution(e);
                a[5] = e;
                a[6] = M;
            } else {
                M = a[6];
            }
            const w = M;
            let A;
            if (a[7] !== c) {
                A = c.toString();
                a[7] = c;
                a[8] = A;
            } else {
                A = a[8];
            }
            const contactType = isEnterprise ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE : o("WAWebWamEnumContactType").CONTACT_TYPE.SMB;
            const chatsFolderType = h ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX;
            const isMuted = y > 0;
            let W;
            if (a[9] !== w || a[10] !== clientReceivedTsMillis || a[11] !== hsmTagStr || a[12] !== qbmFlag || a[13] !== serverTimestamp || a[14] !== messageId || a[15] !== A || a[16] !== contactType || a[17] !== chatsFolderType || a[18] !== isMuted) {
                W = babelHelpers.extends({
                    messageId,
                    chatId: A,
                    qbmFlag,
                    contactType,
                    hsmTagStr,
                    readReceiptsEnabled: true,
                    chatsFolderType,
                    isMuted,
                    isBroadcastMessage: false,
                    isInsubContact: false,
                    serverTimestamp,
                    clientReceivedTsMillis
                }, w, {
                    messageBodyType: o("WAWebWamEnumMessageBodyTypeEnum").MESSAGE_BODY_TYPE_ENUM.MESSAGE
                });
                a[9] = w;
                a[10] = clientReceivedTsMillis;
                a[11] = hsmTagStr;
                a[12] = qbmFlag;
                a[13] = serverTimestamp;
                a[14] = messageId;
                a[15] = A;
                a[16] = contactType;
                a[17] = chatsFolderType;
                a[18] = isMuted;
                a[19] = W;
            } else {
                W = a[19];
            }
            P = W;
        }
        return P;
    }
    l.default = u;
}, 98);