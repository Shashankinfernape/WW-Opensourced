__d("WAWebAddOnBubblesContainer.react", [
    "WAWebAddOnBubble.react",
    "WAWebAddOnBubbleRenderUtils",
    "WAWebAddOnBubbleType",
    "WAWebAddOnBubblesContainerConditions",
    "WAWebBroadcastInsightsChip.react",
    "WAWebCommentsBubbleContainer.react",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMessageHandlers",
    "WAWebMsgGetters",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebReactionsBubbleContainer.react",
    "WAWebRollerCounter.react",
    "WAWebUnstyledButton.react",
    "WDSIconIcFastForward.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        container: {
            display: "x78zum5",
            bottom: "xbfrwjf",
            zIndex: "x8k05lb",
            width: "xeq5yr9",
            $$css: true
        },
        positionRelative: {
            position: "x1n2onr6",
            $$css: true
        },
        startAlign: {
            insetInlineStart: "xrr41r3",
            left: null,
            right: null,
            alignSelf: "xqcrz7y",
            $$css: true
        },
        endAlign: {
            insetInlineEnd: "x1f889gz",
            left: null,
            right: null,
            alignSelf: "xpvyfi4",
            $$css: true
        },
        startAlignMediaViewer: {
            position: "x10l6tqk",
            insetInlineStart: "xaoy8p5",
            insetInlineEnd: "xvihmje",
            left: null,
            right: null,
            bottom: "x130t2gz",
            $$css: true
        },
        endAlignMediaViewer: {
            position: "x10l6tqk",
            insetInlineStart: "x1tvzbhf",
            insetInlineEnd: "xz03a8w",
            left: null,
            right: null,
            bottom: "x130t2gz",
            $$css: true
        },
        sticker: {
            insetInlineStart: "x1tvzbhf",
            insetInlineEnd: "xz03a8w",
            left: null,
            right: null,
            $$css: true
        },
        image: {
            bottom: "x1wa3icf",
            $$css: true
        },
        wideSticker: {
            insetInlineStart: "xrr41r3",
            insetInlineEnd: "xvihmje",
            left: null,
            right: null,
            $$css: true
        },
        svgColorRefreshed: {
            color: "xhslqc4",
            $$css: true
        },
        button: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            paddingInlineStart: "x181vq82",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(34);
        const { bubbleType, canHaveComments, displayType, isOutgoingMsg, parentIds } = t;
        let p;
        let _;
        let f;
        let g;
        if (n[0] !== bubbleType || n[1] !== canHaveComments || n[2] !== displayType || n[3] !== isOutgoingMsg || n[4] !== parentIds || n[5] !== t.displayReactionBubble || n[6] !== t.hasReaction || n[7] !== t.onDetailsPaneClosed) {
            const h = o("WAWebDisplayType").isWideDisplay(displayType);
            const y = isOutgoingMsg && !h;
            const C = !y;
            p = null;
            f = null;
            let b;
            if (n[12] !== bubbleType || n[13] !== displayType || n[14] !== parentIds) {
                b = <M15 parentIds={parentIds} displayType={displayType} bubbleType={bubbleType}/>;
                n[12] = bubbleType;
                n[13] = displayType;
                n[14] = parentIds;
                n[15] = b;
            } else {
                b = n[15];
            }
            _ = b;
            if (canHaveComments !== false && parentIds != null && parentIds.length > 0) {
                let v;
                if (n[16] !== parentIds) {
                    v = u.jsx(r("WAWebCommentsBubbleContainer.react"), {
                        msgIds: parentIds
                    });
                    n[16] = parentIds;
                    n[17] = v;
                } else {
                    v = n[17];
                }
                p = v;
            }
            if (parentIds != null && parentIds.length > 0) {
                let S;
                if (n[18] !== bubbleType || n[19] !== displayType || n[20] !== isOutgoingMsg || n[21] !== parentIds || n[22] !== t.displayReactionBubble || n[23] !== t.hasReaction || n[24] !== t.onDetailsPaneClosed) {
                    const Component = o("WAWebReactionsBubbleContainer.react").ReactionBubbleContainer;
                    S = <Component msgIds={parentIds} isOutgoingMsg={isOutgoingMsg} displayType={displayType} reactionBubbleType={bubbleType} hasReaction={t.hasReaction} onDetailsPaneClosed={t.onDetailsPaneClosed} reactionBubbleVisible={t.displayReactionBubble}/>;
                    n[18] = bubbleType;
                    n[19] = displayType;
                    n[20] = isOutgoingMsg;
                    n[21] = parentIds;
                    n[22] = t.displayReactionBubble;
                    n[23] = t.hasReaction;
                    n[24] = t.onDetailsPaneClosed;
                    n[25] = S;
                } else {
                    S = n[25];
                }
                f = S;
            }
            g = (e || (e = r("stylex"))).props(c.container, (!o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(displayType) || bubbleType !== o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG) && c.positionRelative, C && c.startAlign, y && c.endAlign, bubbleType === o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG && c.sticker, bubbleType === o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG && h && c.wideSticker, bubbleType === o("WAWebAddOnBubbleType").AddOnBubbleType.IMAGE_MSG && c.image, bubbleType === o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER && C && c.startAlignMediaViewer, bubbleType === o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER && y && c.endAlignMediaViewer);
            n[0] = bubbleType;
            n[1] = canHaveComments;
            n[2] = displayType;
            n[3] = isOutgoingMsg;
            n[4] = parentIds;
            n[5] = t.displayReactionBubble;
            n[6] = t.hasReaction;
            n[7] = t.onDetailsPaneClosed;
            n[8] = p;
            n[9] = _;
            n[10] = f;
            n[11] = g;
        } else {
            p = n[8];
            _ = n[9];
            f = n[10];
            g = n[11];
        }
        let R;
        if (n[26] !== t.insightsChipMsg) {
            R = t.insightsChipMsg != null && u.jsx(r("WAWebBroadcastInsightsChip.react"), {
                msg: t.insightsChipMsg
            });
            n[26] = t.insightsChipMsg;
            n[27] = R;
        } else {
            R = n[27];
        }
        let L;
        if (n[28] !== p || n[29] !== _ || n[30] !== f || n[31] !== g || n[32] !== R) {
            L = <div {...babelHelpers.extends({}, g, {
                "data-testid": "addon-bubble-container",
                children: [
                    R,
                    f,
                    p,
                    _
                ]
            })}/>;
            n[28] = p;
            n[29] = _;
            n[30] = f;
            n[31] = g;
            n[32] = R;
            n[33] = L;
        } else {
            L = n[33];
        }
        return L;
    }
    function M15(e) {
        const a = o("react-compiler-runtime").c(6);
        const { bubbleType, displayType, parentIds } = e;
        const d = o("WAWebAddOnBubblesContainerConditions").getForwardBubbleTargetMsg(parentIds, displayType, bubbleType);
        let m;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                o("WAWebMsgGetters").getForwardsCount
            ];
            a[0] = m;
        } else {
            m = a[0];
        }
        const p = o("useWAWebMsgValues").useOptionalMsgValues(d?.id, m);
        if (!d) {
            return null;
        }
        let _;
        if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
            _ = u.jsx(r("WDSIconIcFastForward.react"), {
                directional: true,
                iconXstyle: c.svgColorRefreshed,
                height: 20
            });
            a[1] = _;
        } else {
            _ = a[1];
        }
        const f = _;
        const g = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (d != null) {
                    o("WAWebMessageHandlers").handleOpenForwardFlow({
                        msg: d,
                        multiSelect: false
                    });
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const counter = d != null && d.forwardedNewsletterMessageInfo ? 0 : p?.[0] ?? 0;
        const y = counter > 0 && o("WAWebNewsletterExtendedGatingUtils").shouldShowNewsletterForwardCounterBubble(o("WAWebFrontendMsgGetters").getChat(d)) ? u.jsx(r("WAWebRollerCounter.react"), {
            counter,
            shouldAnimate: false,
            rollerCounterOptions: {
                showAggregateMax: true,
                showOneToTwoAnimation: false
            }
        }) : null;
        let C;
        if (a[2] !== f || a[3] !== y || a[4] !== g) {
            const Component = r("WAWebUnstyledButton.react");
            const Component_1 = r("WAWebAddOnBubble.react");
            C = <Component_1><Component xstyle={c.button} onClick={g}>{f}{y}</Component></Component_1>;
            a[2] = f;
            a[3] = y;
            a[4] = g;
            a[5] = C;
        } else {
            C = a[5];
        }
        return C;
    }
    l.default = d;
}, 98);