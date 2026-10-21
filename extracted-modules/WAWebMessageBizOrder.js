__d("WAWebMessageBizOrder", [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebBizOrderPreview.react",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebContactUtils",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageLogQplEvents",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderCollection",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderGatingUtils",
    "WAWebOrderLogEvents",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumOrderDetailsCreationAction",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebConversationPanelCanCompose",
    "useWAWebMsgValues",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        messageText: {
            width: "x1m258z3",
            marginBottom: "x12nagc",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(43);
        const { displayAuthor, msgKey } = e;
        const i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMsgGetters").getSender,
                o("WAWebMsgGetters").getIsNewsletterMsg,
                o("WAWebFrontendMsgGetters").getOrderStatus,
                o("WAWebMsgGetters").getMessage,
                o("WAWebFrontendMsgGetters").getRtl,
                o("WAWebFrontendMsgGetters").getDir
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const m = d[0];
        const p = d[1];
        const _ = d[2];
        const f = d[3];
        const g = d[4];
        const h = d[5];
        const userIsCartOwner = m?.equals(i) === true;
        const C = r("useWAWebUIM")();
        let b;
        if (t[1] !== p || t[2] !== msgKey) {
            const v = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, p);
            let S;
            if (t[4] !== msgKey) {
                S = msgKey.toString();
                t[4] = msgKey;
                t[5] = S;
            } else {
                S = t[5];
            }
            b = r("nullthrows")(v, `Order bubble ${S} rendered without its chat`);
            t[1] = p;
            t[2] = msgKey;
            t[3] = b;
        } else {
            b = t[3];
        }
        const R = b;
        const L = r("useWAWebConversationPanelCanCompose")(R);
        const E = L[0];
        let k;
        if (t[6] !== E || t[7] !== R || t[8] !== i || t[9] !== msgKey || t[10] !== _ || t[11] !== C || t[12] !== userIsCartOwner) {
            k = function(t) {
                if (t) {
                    t.stopPropagation();
                }
                if (E) {
                    new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
                        orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.CLICK_VIEW_RECEIVED_CART,
                        actionCategory: String(r("WAWebOrderDetailsActionCategory").RECEIVED_CART),
                        orderDetailEntryPoint: String(r("WAWebBizEntryPoint").FROM_CART),
                        hasCatalog: i != null && o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(i))
                    }).commit();
                    const orderMessage = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
                    if (!(orderMessage == null || orderMessage.type !== o("WAWebMsgType").MSG_TYPE.ORDER)) {
                        const { orderId, sellerJid, token } = orderMessage;
                        if (orderId != null && sellerJid != null && token != null) {
                            if (o("WAWebOrderGatingUtils").isBuyerOrderRevampEnabled() && _ != null && _ !== o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus.INQUIRY) {
                                return;
                            }
                            const d = o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession, o("WAWebContactUtils").getMaybeBizPlatformForLogging(sellerJid), o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_ORDER_MESSAGE);
                            o("WAWebOrderLogEvents").logOrderMessageClick({
                                catalogContext: d,
                                catalogOwnerJid: sellerJid
                            });
                            if (orderMessage.orderId != null) {
                                o("WAWebMessageLogQplEvents").qplStartOrderView(!!o("WAWebOrderCollection").OrderCollection.get(orderId));
                                o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
                                    chat: R,
                                    orderMessage,
                                    orderId,
                                    token,
                                    userIsCartOwner,
                                    sellerJid
                                }), {
                                    transition: "slide-left",
                                    uim: C,
                                    newDrawerContext: d
                                });
                            }
                        }
                    }
                }
            };
            t[6] = E;
            t[7] = R;
            t[8] = i;
            t[9] = msgKey;
            t[10] = _;
            t[11] = C;
            t[12] = userIsCartOwner;
            t[13] = k;
        } else {
            k = t[13];
        }
        const I = k;
        let T;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            T = r("WAWebL10N").isRTL();
            t[14] = T;
        } else {
            T = t[14];
        }
        const D = g !== T;
        let x;
        if (t[15] !== h || t[16] !== f || t[17] !== D) {
            x = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: f,
                dirMismatch: D,
                direction: h,
                inferLinesDirection: true
            });
            t[15] = h;
            t[16] = f;
            t[17] = D;
            t[18] = x;
        } else {
            x = t[18];
        }
        const $ = x;
        let P;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            P = {
                className: "x10l6tqk xtijo5x x1ey2m1c"
            };
            t[19] = P;
        } else {
            P = t[19];
        }
        let N;
        if (t[20] !== msgKey) {
            N = <div {...babelHelpers.extends({}, P, {
                children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey
                })
            })}/>;
            t[20] = msgKey;
            t[21] = N;
        } else {
            N = t[21];
        }
        const M = N;
        let w;
        if (t[22] !== _) {
            w = function() {
                if (o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()) {
                    return _ == null || _ === o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus.INQUIRY;
                }
                return true;
            };
            t[22] = _;
            t[23] = w;
        } else {
            w = t[23];
        }
        const A = w;
        let F;
        if (t[24] === Symbol.for("react.memo_cache_sentinel")) {
            F = o("WAWebOrderGatingUtils").isBuyerOrderRequestVariantEnabled() ? s._("View details") : s._("View sent cart");
            t[24] = F;
        } else {
            F = t[24];
        }
        const O = F;
        let B;
        if (t[25] === Symbol.for("react.memo_cache_sentinel")) {
            B = o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled() ? s._("View order request") : s._("View received cart");
            t[25] = B;
        } else {
            B = t[25];
        }
        const q = userIsCartOwner ? O : B;
        let U;
        if (t[26] !== I || t[27] !== q) {
            U = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: q,
                        testid: "view-cart-button",
                        onClick: I
                    }
                ]
            });
            t[26] = I;
            t[27] = q;
            t[28] = U;
        } else {
            U = t[28];
        }
        const V = U;
        let H;
        if (t[29] === Symbol.for("react.memo_cache_sentinel")) {
            H = {
                className: "x1198e8h x1lxpwgx xzueoph xw01apr"
            };
            t[29] = H;
        } else {
            H = t[29];
        }
        let G;
        if (t[30] !== msgKey || t[31] !== I) {
            const Component = o("WAWebBizOrderPreview.react").OrderPreview;
            G = <div {...babelHelpers.extends({}, H, {
                children: <Component msgKey={msgKey} onClick={I}/>
            })}/>;
            t[30] = msgKey;
            t[31] = I;
            t[32] = G;
        } else {
            G = t[32];
        }
        let z;
        if (t[33] !== $ || t[34] !== M || t[35] !== msgKey) {
            const Component = r("WAWebMessageSpacerText.react");
            z = <Component msgKey={msgKey} data-id={msgKey} xstyle={c.messageText}>{$}{M}</Component>;
            t[33] = $;
            t[34] = M;
            t[35] = msgKey;
            t[36] = z;
        } else {
            z = t[36];
        }
        const j = E && A() && V;
        let K;
        if (t[37] !== displayAuthor || t[38] !== msgKey || t[39] !== G || t[40] !== z || t[41] !== j) {
            const Component = r("WAWebMessageTextBubble.react");
            K = <Component msgKey={msgKey} displayAuthor={displayAuthor} hideMeta>{G}{z}{j}</Component>;
            t[37] = displayAuthor;
            t[38] = msgKey;
            t[39] = G;
            t[40] = z;
            t[41] = j;
            t[42] = K;
        } else {
            K = t[42];
        }
        return K;
    }
    l.default = d;
}, 226);