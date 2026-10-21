__d("useWAWebHdBubbleState", [
    "WALogger",
    "WAWebAck",
    "WAWebFrontendMsgGetters",
    "WAWebGetDisplayType",
    "WAWebHDMediaUtils",
    "WAWebHdDownloadAffordance",
    "WAWebMediaDisplaySurface",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebDualUploadsMediaSource",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const useEffect = (s || (s = o("react"))).useEffect;
    function useC(t, n, r) {
        const a = o("react-compiler-runtime").c(34);
        let i;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebMsgGetters")).getAck,
                o("WAWebFrontendMsgGetters").getBotGroupParticipant,
                l.getIsMetaBotInvokeResponse,
                l.getIsNewsletterMsg,
                l.getIsStatus,
                l.getType
            ];
            a[0] = i;
        } else {
            i = a[0];
        }
        const s = o("useWAWebMsgValues").useMsgValues(t, i);
        const c = s[0];
        const botGroupParticipant = s[1];
        const isBotInvokeResponse = s[2];
        const p = s[3];
        const isStatus = s[4];
        const f = s[5];
        let g;
        if (a[1] !== botGroupParticipant || a[2] !== isBotInvokeResponse || a[3] !== p || a[4] !== isStatus || a[5] !== t || a[6] !== r.displayType || a[7] !== f) {
            g = r.displayType ?? o("WAWebGetDisplayType").getDisplayTypeFor({
                botGroupParticipant,
                chat: o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(t, p),
                isBotInvokeResponse,
                isStatus,
                msgKey: t,
                type: f
            });
            a[1] = botGroupParticipant;
            a[2] = isBotInvokeResponse;
            a[3] = p;
            a[4] = isStatus;
            a[5] = t;
            a[6] = r.displayType;
            a[7] = f;
            a[8] = g;
        } else {
            g = a[8];
        }
        let y;
        if (a[9] !== r.displayTheme || a[10] !== r.hasOverlay || a[11] !== g) {
            y = o("WAWebMediaDisplaySurface").isPairedMediaSurface({
                displayTheme: r.displayTheme,
                displayType: g,
                hasOverlay: r.hasOverlay
            });
            a[9] = r.displayTheme;
            a[10] = r.hasOverlay;
            a[11] = g;
            a[12] = y;
        } else {
            y = a[12];
        }
        const C = y;
        const b = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(t);
        const v = o("useWAWebDualUploadsMediaSource").useDualUploadsMediaSource(t, n, C);
        const { displayMediaData, hdFilesize, hdStage, isDisplayingHd, isHdReachable, rehydrateHd, requestHd, resumeHdUpload } = v;
        let x;
        if (a[13] !== hdStage || a[14] !== isHdReachable) {
            x = o("WAWebHdDownloadAffordance").getHdDownloadAffordance(hdStage, isHdReachable);
            a[13] = hdStage;
            a[14] = isHdReachable;
            a[15] = x;
        } else {
            x = a[15];
        }
        const $ = x;
        const P = o("WAWebHdDownloadAffordance").isOutgoingHdStage(hdStage);
        const N = P && $ === "request";
        const M = n.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED || n.mediaStage === o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY;
        const w = P ? c != null && c >= o("WAWebAck").ACK.SENT && M : M;
        const canOfferHdControl = C && w;
        let F;
        if (a[16] !== $ || a[17] !== n.fullHeight || a[18] !== n.fullWidth) {
            F = $ !== "none" && o("WAWebHDMediaUtils").isHdPhoto(n.fullHeight, n.fullWidth);
            a[16] = $;
            a[17] = n.fullHeight;
            a[18] = n.fullWidth;
            a[19] = F;
        } else {
            F = a[19];
        }
        const O = F;
        let B;
        let W;
        if (a[20] !== O) {
            B = function() {
                if (O) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[dual-uploads] SD parent is HD-sized, badge and download control contend"
                    ]))).sendLogs("dual-uploads-hd-sized-sd-parent");
                }
            };
            W = [
                O
            ];
            a[20] = O;
            a[21] = B;
            a[22] = W;
        } else {
            B = a[21];
            W = a[22];
        }
        useEffect(B, W);
        const downloadDisplayedLeg = isDisplayingHd ? rehydrateHd : b;
        const onRequest = N ? resumeHdUpload : requestHd;
        let hdControl;
        if (a[23] !== hdFilesize || a[24] !== hdStage || a[25] !== isHdReachable || a[26] !== onRequest) {
            hdControl = {
                filesize: hdFilesize,
                isLocallyReachable: isHdReachable,
                onRequest,
                stage: hdStage
            };
            a[23] = hdFilesize;
            a[24] = hdStage;
            a[25] = isHdReachable;
            a[26] = onRequest;
            a[27] = hdControl;
        } else {
            hdControl = a[27];
        }
        let H;
        if (a[28] !== canOfferHdControl || a[29] !== displayMediaData || a[30] !== isDisplayingHd || a[31] !== downloadDisplayedLeg || a[32] !== hdControl) {
            H = {
                canOfferHdControl,
                displayMediaData,
                downloadDisplayedLeg,
                hdControl,
                isDisplayingHd
            };
            a[28] = canOfferHdControl;
            a[29] = displayMediaData;
            a[30] = isDisplayingHd;
            a[31] = downloadDisplayedLeg;
            a[32] = hdControl;
            a[33] = H;
        } else {
            H = a[33];
        }
        return H;
    }
    l.useHdBubbleState = useC;
}, 98);