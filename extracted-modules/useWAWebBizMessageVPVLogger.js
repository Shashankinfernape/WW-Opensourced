__d("useWAWebBizMessageVPVLogger", [
    "WAWebMerlinImpressionManager",
    "react",
    "react-compiler-runtime",
    "useVPVDImpression"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    function u(e) {
        const t = o("react-compiler-runtime").c(28);
        const { bodyUrlCountInt, bodyUrlUniqueCountInt, buttonValueJsonArray, chatId, chatsFolderType, clientReceivedTsMillis, contactType, ctaUrlUniqueCountInt, hsmTagStr, isBroadcastMessage, isInsubContact, isMuted, messageBodyType, messageFieldJsonArray, messageId, mmCarouselCardIndex, onVisibilityChange, qbmFlag, readReceiptsEnabled, serverTimestamp, submessageFieldJsonArray, urlUniqueCountInt } = e;
        let k;
        if (t[0] !== bodyUrlCountInt || t[1] !== bodyUrlUniqueCountInt || t[2] !== buttonValueJsonArray || t[3] !== chatId || t[4] !== chatsFolderType || t[5] !== clientReceivedTsMillis || t[6] !== contactType || t[7] !== ctaUrlUniqueCountInt || t[8] !== hsmTagStr || t[9] !== isBroadcastMessage || t[10] !== isInsubContact || t[11] !== isMuted || t[12] !== messageBodyType || t[13] !== messageFieldJsonArray || t[14] !== messageId || t[15] !== mmCarouselCardIndex || t[16] !== onVisibilityChange || t[17] !== qbmFlag || t[18] !== readReceiptsEnabled || t[19] !== serverTimestamp || t[20] !== submessageFieldJsonArray || t[21] !== urlUniqueCountInt) {
            k = function({ entry, hiddenTime, visibleTime }) {
                onVisibilityChange?.(false);
                const I = entry?.boundingClientRect;
                const T = typeof window !== "undefined" && window.devicePixelRatio || 1;
                const messageBubbleWidthPx = I != null ? Math.round(I.width * T) : undefined;
                const messageBubbleHeightPx = I != null ? Math.round(I.height * T) : undefined;
                o("WAWebMerlinImpressionManager").logBizMessageVisibility({
                    enter_ts: visibleTime,
                    exit_ts: hiddenTime,
                    itemId: messageId,
                    visibilityData: {
                        bodyUrlCountInt,
                        bodyUrlUniqueCountInt,
                        buttonValueJsonArray,
                        chatId,
                        chatsFolderType,
                        clientReceivedTsMillis,
                        contactType,
                        ctaUrlUniqueCountInt,
                        hsmTagStr,
                        isBroadcastMessage,
                        isInsubContact,
                        isMuted,
                        messageBodyType,
                        messageBubbleHeightPx,
                        messageBubbleWidthPx,
                        messageFieldJsonArray,
                        messageId,
                        mmCarouselCardIndex,
                        qbmFlag,
                        readReceiptsEnabled,
                        serverTimestamp,
                        submessageFieldJsonArray,
                        urlUniqueCountInt
                    }
                });
            };
            t[0] = bodyUrlCountInt;
            t[1] = bodyUrlUniqueCountInt;
            t[2] = buttonValueJsonArray;
            t[3] = chatId;
            t[4] = chatsFolderType;
            t[5] = clientReceivedTsMillis;
            t[6] = contactType;
            t[7] = ctaUrlUniqueCountInt;
            t[8] = hsmTagStr;
            t[9] = isBroadcastMessage;
            t[10] = isInsubContact;
            t[11] = isMuted;
            t[12] = messageBodyType;
            t[13] = messageFieldJsonArray;
            t[14] = messageId;
            t[15] = mmCarouselCardIndex;
            t[16] = onVisibilityChange;
            t[17] = qbmFlag;
            t[18] = readReceiptsEnabled;
            t[19] = serverTimestamp;
            t[20] = submessageFieldJsonArray;
            t[21] = urlUniqueCountInt;
            t[22] = k;
        } else {
            k = t[22];
        }
        const I = k;
        let T;
        if (t[23] !== onVisibilityChange) {
            T = function(t) {
                onVisibilityChange?.(true);
            };
            t[23] = onVisibilityChange;
            t[24] = T;
        } else {
            T = t[24];
        }
        const onVPVDStart = T;
        let x;
        if (t[25] !== I || t[26] !== onVPVDStart) {
            x = {
                onVPVDEnd: I,
                onVPVDStart
            };
            t[25] = I;
            t[26] = onVPVDStart;
            t[27] = x;
        } else {
            x = t[27];
        }
        return r("useVPVDImpression")(x);
    }
    l.default = u;
}, 98);