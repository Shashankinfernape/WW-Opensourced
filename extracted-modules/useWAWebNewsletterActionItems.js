__d("useWAWebNewsletterActionItems", [
    "fbt",
    "WALogger",
    "WAWebApiParse",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardTabUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebQuestionsRenderingUtils",
    "WAWebSendStickerToActiveChatStickersAction",
    "WAWebStickerPackCollectionMd",
    "WAWebStickerPackUtils",
    "WAWebStickerStoreFlowLoadable",
    "react",
    "react-compiler-runtime",
    "useWAWebForwardedNewsletterMessageClickHandler",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(e) {
        const t = o("react-compiler-runtime").c(30);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let r;
            n = [
                (r = o("WAWebMsgGetters")).getUnreadQuestionResponsesCount,
                r.getServerId,
                o("WAWebFrontendMsgGetters").getIsTransparentMsg,
                r.getHasOriginatedFromNewsletter,
                r.getIsNewsletterMsg,
                r.getIsQuestion,
                r.getType,
                r.getIsForwarded,
                r.getBody,
                r.getForwardedNewsletterMessageInfo
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e, n);
        const i = a[0];
        const l = a[1];
        const s = a[2];
        const hasOriginatedFromNewsletter = a[3];
        const c = a[4];
        const isQuestion = a[5];
        const p = a[6];
        const isForwarded = a[7];
        const f = a[8];
        const g = a[9];
        const h = o("useWAWebForwardedNewsletterMessageClickHandler").useForwardedNewsletterMessageClickHandler(e, o("WAWebNewsletterGatingUtils").isNewsletterForwardBottomButtonEnabled);
        if (!hasOriginatedFromNewsletter || s) {
            let y;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                y = [];
                t[1] = y;
            } else {
                y = t[1];
            }
            return y;
        }
        let C;
        if (t[2] !== f || t[3] !== g?.newsletterId || t[4] !== h || t[5] !== isForwarded || t[6] !== hasOriginatedFromNewsletter || t[7] !== c || t[8] !== isQuestion || t[9] !== e || t[10] !== l || t[11] !== p || t[12] !== i) {
            C = [];
            let b;
            if (t[14] !== c || t[15] !== isQuestion || t[16] !== e || t[17] !== p || t[18] !== i) {
                b = o("WAWebQuestionsRenderingUtils").getQuestionAction(e, {
                    isNewsletterMsg: c,
                    isQuestion,
                    type: p
                }, i);
                t[14] = c;
                t[15] = isQuestion;
                t[16] = e;
                t[17] = p;
                t[18] = i;
                t[19] = b;
            } else {
                b = t[19];
            }
            const v = b;
            if (v != null) {
                C.push(v);
            }
            let S;
            if (t[20] !== f || t[21] !== isForwarded || t[22] !== hasOriginatedFromNewsletter || t[23] !== e) {
                S = m(e, {
                    body: f,
                    hasOriginatedFromNewsletter,
                    isForwarded
                });
                t[20] = f;
                t[21] = isForwarded;
                t[22] = hasOriginatedFromNewsletter;
                t[23] = e;
                t[24] = S;
            } else {
                S = t[24];
            }
            const R = S;
            if (R != null) {
                C.push(R);
            }
            if (h != null) {
                const L = g?.newsletterId === e.remote ? l : null;
                let E;
                if (t[25] !== L) {
                    E = o("WAWebCommonNewsletterStrings").getNewsletterLinkActionLabel("view", L);
                    t[25] = L;
                    t[26] = E;
                } else {
                    E = t[26];
                }
                let k;
                if (t[27] !== h || t[28] !== E) {
                    k = {
                        label: E,
                        onClick: h,
                        testid: "newsletter-invite-link-action"
                    };
                    t[27] = h;
                    t[28] = E;
                    t[29] = k;
                } else {
                    k = t[29];
                }
                C.push(k);
            }
            t[2] = f;
            t[3] = g?.newsletterId;
            t[4] = h;
            t[5] = isForwarded;
            t[6] = hasOriginatedFromNewsletter;
            t[7] = c;
            t[8] = isQuestion;
            t[9] = e;
            t[10] = l;
            t[11] = p;
            t[12] = i;
            t[13] = C;
        } else {
            C = t[13];
        }
        return C;
    }
    function m(t, { body, hasOriginatedFromNewsletter, isForwarded }) {
        if (!isForwarded || !hasOriginatedFromNewsletter || !o("WAWebNewsletterGatingUtils").isStickerPackForwardedAttributionEnabled() || body == null || !o("WAWebApiParse").isStickerPackURL(body)) {
            return null;
        }
        const u = (a)=>{
            const n = o("WAWebMsgCollection").MsgCollection.get(t);
            if (n == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-actions] sticker pack drawer skipped, message left the collection"
                ])));
                return;
            }
            const Component = r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component stickerPackId={a} onSticker={r("WAWebSendStickerToActiveChatStickersAction")} msg={n}/>, {
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
            });
        };
        const d = s._("View sticker pack");
        const m = function() {
            const e = o("WAWebStickerPackUtils").extractStickerPackIdFromUrl(body);
            if (e != null) {
                o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.fetchStickerPack(e).then(()=>{
                    u(e);
                }).catch(r("WAWebNoop"));
            }
        };
        return {
            label: d,
            title: d,
            onClick: m,
            disabled: false,
            testid: "view-sticker-pack"
        };
    }
    l.useWAWebNewsletterActionItems = d;
}, 226);