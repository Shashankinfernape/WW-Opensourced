__d("WAWebMessageStickerBubble.react", [
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebInMemoryLottieStickerCache",
    "WAWebL10N",
    "WAWebMediaDataGetters",
    "WAWebMessageStickerLikeBubbleContainer.react",
    "WAWebMessageStickerMediaControl.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebSoundStickerButtonLoadable.react",
    "WAWebSoundStickerGating",
    "WAWebSoundStickerUtils",
    "WAWebStateUtils",
    "WAWebSticker.react",
    "WAWebStickerOverlayAnimation.react",
    "WAWebStickerPremiumStatus",
    "WAWebStopEvent",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujSurface",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebIntersection",
    "useWAWebMarkAnimatedAsNewMsg",
    "useWAWebMediaDataValues",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
    "useWAWebWaPlusBenefitJourneyViewOnMount"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useRef, useState } = u;
    const p = new WeakSet;
    const _ = {
        overlayActive: {
            zIndex: "xfo81ep",
            pointerEvents: "x47corl",
            $$css: true
        }
    };
    function FComponent(e) {
        const t = o("react-compiler-runtime").c(12);
        const { animateOnView, displayAuthor, displayType, forwardRef, isGroupedSticker, mediaData, msgKey, onDetailsPaneClosed, position, quotedMsg, stickerLikeBubbleContainerRef } = e;
        const f = isGroupedSticker === undefined ? false : isGroupedSticker;
        if (mediaData == null) {
            return null;
        }
        let h;
        if (t[0] !== animateOnView || t[1] !== displayAuthor || t[2] !== displayType || t[3] !== forwardRef || t[4] !== f || t[5] !== mediaData || t[6] !== msgKey || t[7] !== onDetailsPaneClosed || t[8] !== position || t[9] !== quotedMsg || t[10] !== stickerLikeBubbleContainerRef) {
            h = <G2Component animateOnView={animateOnView} displayAuthor={displayAuthor} displayType={displayType} forwardRef={forwardRef} isGroupedSticker={f} mediaData={mediaData} msgKey={msgKey} onDetailsPaneClosed={onDetailsPaneClosed} position={position} quotedMsg={quotedMsg} stickerLikeBubbleContainerRef={stickerLikeBubbleContainerRef}/>;
            t[0] = animateOnView;
            t[1] = displayAuthor;
            t[2] = displayType;
            t[3] = forwardRef;
            t[4] = f;
            t[5] = mediaData;
            t[6] = msgKey;
            t[7] = onDetailsPaneClosed;
            t[8] = position;
            t[9] = quotedMsg;
            t[10] = stickerLikeBubbleContainerRef;
            t[11] = h;
        } else {
            h = t[11];
        }
        return h;
    }
    function G2Component(e) {
        const t = o("react-compiler-runtime").c(72);
        const { animateOnView, displayAuthor, displayType, forwardRef, isGroupedSticker, mediaData, msgKey, onDetailsPaneClosed, position, quotedMsg, stickerLikeBubbleContainerRef } = e;
        let v;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            v = [
                o("WAWebMsgGetters").getIsNewMsg,
                o("WAWebMsgGetters").getIsSentByMe
            ];
            t[0] = v;
        } else {
            v = t[0];
        }
        const S = o("useWAWebMsgValues").useMsgValues(msgKey, v);
        const isNewMsg = S[0];
        const L = S[1];
        const E = useState(false);
        const forcePlay = E[0];
        const I = E[1];
        const T = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(msgKey);
        const DRef = useRef(null);
        const x = r("useMergeRefs")(forwardRef, DRef);
        let $;
        if (t[1] !== displayType || t[2] !== msgKey) {
            $ = displayType != null && o("WAWebDisplayType").isConversationDisplay(displayType) && o("WAWebSoundStickerUtils").isSoundStickerPlayable(o("WAWebMsgCollection").MsgCollection.get(msgKey)) && o("WAWebSoundStickerGating").isSoundStickerPlaybackEnabled();
            t[1] = displayType;
            t[2] = msgKey;
            t[3] = $;
        } else {
            $ = t[3];
        }
        const P = $;
        let N;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            N = function() {
                DRef.current?.playAnimationOnce();
            };
            t[4] = N;
        } else {
            N = t[4];
        }
        const onPlaybackStart = N;
        let w;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            w = {
                root: null,
                threshold: 0
            };
            t[5] = w;
        } else {
            w = t[5];
        }
        const A = r("useWAWebIntersection")(w);
        const F = A[0];
        const O = A[1];
        const O_isIntersecting = O.isIntersecting;
        let W;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            W = [
                o("WAWebMediaDataGetters").getMediaStage
            ];
            t[6] = W;
        } else {
            W = t[6];
        }
        o("useWAWebMediaDataValues").useMediaDataValues(mediaData, W);
        let q;
        if (t[7] !== msgKey) {
            q = function() {
                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                return e != null && p.has(e);
            };
            t[7] = msgKey;
            t[8] = q;
        } else {
            q = t[8];
        }
        const U = useState(q);
        const V = U[0];
        const H = U[1];
        let G;
        if (t[9] !== mediaData || t[10] !== msgKey) {
            G = function(t) {
                o("WAWebStateUtils").unproxy(mediaData).set("animatedAsNewMsg", t);
                if (t) {
                    const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                    if (e != null) {
                        p.add(e);
                    }
                    H(true);
                }
            };
            t[9] = mediaData;
            t[10] = msgKey;
            t[11] = G;
        } else {
            G = t[11];
        }
        o("useWAWebMarkAnimatedAsNewMsg").useMarkAnimatedAsNewMsg(forcePlay, G);
        let j;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
            j = function() {
                I(false);
            };
            t[12] = j;
        } else {
            j = t[12];
        }
        const K = j;
        const Q = mediaData.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM;
        if (!forcePlay && O_isIntersecting && isNewMsg === true && !V && o("WAWebInMemoryLottieStickerCache").canShowSecondaryAnimation(mediaData.filehash, mediaData.mimetype, mediaData.stickerPremiumStatus)) {
            I(true);
        }
        let X;
        if (t[13] !== forwardRef || t[14] !== mediaData.filehash || t[15] !== mediaData.mimetype || t[16] !== mediaData.stickerPremiumStatus || t[17] !== msgKey) {
            X = function(t) {
                o("WAWebStopEvent").stopPropagation(t);
                if (o("WAWebInMemoryLottieStickerCache").canShowSecondaryAnimation(mediaData.filehash, mediaData.mimetype, mediaData.stickerPremiumStatus)) {
                    I(true);
                    return;
                }
                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (e != null) {
                    o("WAWebCmd").Cmd.mediaViewerModal({
                        msg: o("WAWebStateUtils").unproxy(e),
                        getZoomNode: function() {
                            return forwardRef?.current?.getImgNode();
                        }
                    });
                }
            };
            t[13] = forwardRef;
            t[14] = mediaData.filehash;
            t[15] = mediaData.mimetype;
            t[16] = mediaData.stickerPremiumStatus;
            t[17] = msgKey;
            t[18] = X;
        } else {
            X = t[18];
        }
        const Y = X;
        let J;
        if (t[19] !== Q || t[20] !== L) {
            J = Q && L === r("WAWebL10N").isRTL();
            t[19] = Q;
            t[20] = L;
            t[21] = J;
        } else {
            J = t[21];
        }
        const Z = J;
        let ee;
        if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
            ee = {
                className: "x1n2onr6 x1plvlek xryxfnj x1vjgj0v x1rg5ohu x3ajldb"
            };
            t[22] = ee;
        } else {
            ee = t[22];
        }
        let te;
        if (t[23] !== Z) {
            te = ({
                0: {},
                1: {
                    className: "x1rg5ohu xpk2tj9"
                }
            })[!!Z << 0];
            t[23] = Z;
            t[24] = te;
        } else {
            te = t[24];
        }
        let ne;
        if (t[25] !== animateOnView || t[26] !== T || t[27] !== isNewMsg || t[28] !== Y || t[29] !== mediaData || t[30] !== x || t[31] !== forcePlay) {
            const Component = r("WAWebSticker.react");
            ne = <Component ref={x} mediaData={mediaData} theme="conversation" isNewMsg={isNewMsg} downloadMedia={T} animateOnView={animateOnView} onClick={Y} onEnter={Y} forcePlay={forcePlay}/>;
            t[25] = animateOnView;
            t[26] = T;
            t[27] = isNewMsg;
            t[28] = Y;
            t[29] = mediaData;
            t[30] = x;
            t[31] = forcePlay;
            t[32] = ne;
        } else {
            ne = t[32];
        }
        let re;
        if (t[33] !== te || t[34] !== ne) {
            re = <span {...babelHelpers.extends({}, te, {
                children: ne
            })}/>;
            t[33] = te;
            t[34] = ne;
            t[35] = re;
        } else {
            re = t[35];
        }
        let oe;
        if (t[36] !== mediaData || t[37] !== msgKey || t[38] !== re) {
            const Component = r("WAWebMessageStickerMediaControl.react");
            oe = <Component mediaData={mediaData} msgKey={msgKey}>{re}</Component>;
            t[36] = mediaData;
            t[37] = msgKey;
            t[38] = re;
            t[39] = oe;
        } else {
            oe = t[39];
        }
        let ae;
        if (t[40] !== O_isIntersecting || t[41] !== msgKey || t[42] !== P) {
            const Component = r("WAWebSoundStickerButtonLoadable.react");
            ae = P && <Component isVisible={O_isIntersecting} msgKey={msgKey} onPlaybackStart={onPlaybackStart}/>;
            t[40] = O_isIntersecting;
            t[41] = msgKey;
            t[42] = P;
            t[43] = ae;
        } else {
            ae = t[43];
        }
        let ie;
        if (t[44] !== mediaData || t[45] !== Z || t[46] !== forcePlay) {
            const Component = r("WAWebStickerOverlayAnimation.react");
            ie = forcePlay && <div {...babelHelpers.extends({}, {
                0: {},
                1: {
                    className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod xpk2tj9"
                }
            }[!!Z << 0], {
                children: <Component mediaData={mediaData} onClose={K} sizePercent={387}/>
            })}/>;
            t[44] = mediaData;
            t[45] = Z;
            t[46] = forcePlay;
            t[47] = ie;
        } else {
            ie = t[47];
        }
        let le;
        if (t[48] !== F || t[49] !== oe || t[50] !== ae || t[51] !== ie) {
            le = <div {...babelHelpers.extends({
                ref: F
            }, ee, {
                children: [
                    oe,
                    ae,
                    ie
                ]
            })}/>;
            t[48] = F;
            t[49] = oe;
            t[50] = ae;
            t[51] = ie;
            t[52] = le;
        } else {
            le = t[52];
        }
        const se = le;
        const bubbleStyle = forcePlay ? _.overlayActive : undefined;
        let ce;
        if (t[53] !== displayAuthor || t[54] !== displayType || t[55] !== isGroupedSticker || t[56] !== mediaData || t[57] !== se || t[58] !== msgKey || t[59] !== onDetailsPaneClosed || t[60] !== position || t[61] !== quotedMsg || t[62] !== stickerLikeBubbleContainerRef || t[63] !== bubbleStyle) {
            const Component = r("WAWebMessageStickerLikeBubbleContainer.react");
            ce = <Component displayAuthor={displayAuthor} mediaData={mediaData} msgKey={msgKey} quotedMsg={quotedMsg} position={position} displayType={displayType} onDetailsPaneClosed={onDetailsPaneClosed} msgContent={se} ref={stickerLikeBubbleContainerRef} displayCtwaContext isGroupedSticker={isGroupedSticker} bubbleStyle={bubbleStyle}/>;
            t[53] = displayAuthor;
            t[54] = displayType;
            t[55] = isGroupedSticker;
            t[56] = mediaData;
            t[57] = se;
            t[58] = msgKey;
            t[59] = onDetailsPaneClosed;
            t[60] = position;
            t[61] = quotedMsg;
            t[62] = stickerLikeBubbleContainerRef;
            t[63] = bubbleStyle;
            t[64] = ce;
        } else {
            ce = t[64];
        }
        let de;
        if (t[65] !== Q || t[66] !== L || t[67] !== msgKey) {
            de = Q && <H1 isSentByMe={L === true} msgId={msgKey.toString()}/>;
            t[65] = Q;
            t[66] = L;
            t[67] = msgKey;
            t[68] = de;
        } else {
            de = t[68];
        }
        let me;
        if (t[69] !== ce || t[70] !== de) {
            me = <>{ce}{de}</>;
            t[69] = ce;
            t[70] = de;
            t[71] = me;
        } else {
            me = t[71];
        }
        return me;
    }
    function H1(e) {
        const t = o("react-compiler-runtime").c(5);
        const { isSentByMe, msgId } = e;
        const dedupeKey = `premium_sticker_view:${msgId}`;
        const sticker_received_or_sent = isSentByMe ? "sticker_sent" : "sticker_received";
        let customFields;
        if (t[0] !== sticker_received_or_sent) {
            customFields = {
                sticker_received_or_sent
            };
            t[0] = sticker_received_or_sent;
            t[1] = customFields;
        } else {
            customFields = t[1];
        }
        let u;
        if (t[2] !== dedupeKey || t[3] !== customFields) {
            u = {
                benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS,
                surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.STICKER_RECEIVED,
                dedupeKey,
                customFields
            };
            t[2] = dedupeKey;
            t[3] = customFields;
            t[4] = u;
        } else {
            u = t[4];
        }
        r("useWAWebWaPlusBenefitJourneyViewOnMount")(u);
        return null;
    }
    l.default = FComponent;
}, 98);