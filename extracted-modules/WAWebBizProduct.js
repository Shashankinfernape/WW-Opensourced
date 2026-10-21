__d("WAWebBizProduct", [
    "fbt",
    "WALogger",
    "WAWebBizProductInfo.react",
    "WAWebCatalogCollection",
    "WAWebContactUtils",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageAuthor.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePicture.react",
    "WAWebMessageSpacerText.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgPhoneNumbers",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogGetLatestProduct",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebStateUtils",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWidFactory",
    "WDSPaddings.stylex",
    "react",
    "useWAWebMsgValues",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useEffect, useMemo } = d;
    const f = {
        paddingTop7: {
            paddingTop: "xm7lytj",
            $$css: true
        },
        paddingBottom10: {
            paddingBottom: "x1a8lsjc",
            $$css: true
        }
    };
    const g = {
        productCta: {
            display: "x1lliihq",
            fontSize: "x1f6kntn",
            fontWeight: "xk50ysn",
            color: "x1ph7ams",
            textAlign: "x2b8uid",
            cursor: "x1ypdohk",
            ":hover_textDecoration": "x1lku1pv",
            $$css: true
        },
        productCtaColorV2: {
            color: "xo1mcw5",
            $$css: true
        },
        btnBorder: {
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            $$css: true
        },
        caption: {
            fontSize: "x1f6kntn",
            $$css: true
        },
        footer: {
            display: "x1lliihq",
            fontSize: "x1nxh6w3",
            lineHeight: "xwn7fz2",
            color: "xhslqc4",
            $$css: true
        },
        footerMargin: {
            marginTop: "x1gslohp",
            $$css: true
        }
    };
    function h({ displayAuthor, displayType, isCarouselCard, msgKey, onProductClick, quotedMsg, trusted }) {
        let n;
        let a;
        const b = r("useWAWebUIM")();
        const v = useMemo(function() {
            return new (o("WAWebProductCatalogSession")).ProductCatalogSession;
        }, []);
        const S = o("WAWebDisplayType").isWideDisplay(displayType);
        const R = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (n = o("WAWebMsgGetters")).getBusinessOwnerJid,
            n.getCaption,
            (a = o("WAWebFrontendMsgGetters")).getDir,
            n.getFooter,
            n.getId,
            n.getIsGroupMsg,
            a.getAsProductInquiry,
            a.getMediaData,
            n.getProductId,
            n.getProductImageCount,
            n.getRetailerId,
            a.getRtl,
            a.getSenderObj,
            n.getT,
            n.getTitle,
            n.getType,
            n.getUrl,
            n.getSender,
            n.getSupportsMessageFooterLinks,
            n.getIsNewsletterMsg
        ]);
        const L = R[0];
        const E = R[1];
        const k = R[2];
        const I = R[3];
        const T = R[4];
        const D = R[5];
        const x = R[6];
        const $ = R[7];
        const productId = R[8];
        const N = R[9];
        const M = R[10];
        const w = R[11];
        const A = R[12];
        const msgT = R[13];
        const O = R[14];
        const B = R[15];
        const W = R[16];
        const q = R[17];
        const U = R[18];
        const V = R[19];
        useEffect(function() {
            const e = L != null && o("WAWebWidFactory").createWid(L);
            if (e != null) {
                const t = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (t != null) {
                    o("WAWebCatalogCollection").CatalogCollection.addMsgAsProduct(t);
                }
            }
        }, []);
        const H = useCallback(function(t) {
            if (t) {
                t.stopPropagation();
            }
            if (!(productId == null || L == null)) {
                o("WAWebUtilsLogQplEvents").qplStartProductView("Message");
                const n = r("WAWebProductCatalogGetLatestProduct")({
                    productId,
                    businessOwnerJid: L,
                    msgT
                });
                if (!n) {
                    o("WAWebUtilsLogQplEvents").qplDropProductView();
                    return;
                }
                const a = o("WAWebProductCatalogContext").buildProductCatalogContext(v, o("WAWebContactUtils").getMaybeBizPlatformForLogging(L), o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_MESSAGE);
                o("WAWebProductCatalogLogEvents").logProductMsgClick({
                    product: o("WAWebStateUtils").unproxy(n),
                    catalogContext: a
                });
                const i = o("WAWebProductCatalogSession").ProductCatalogSession.toString();
                if (onProductClick) {
                    onProductClick(n, i);
                    return;
                }
                const l = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, V);
                if (l == null) {
                    o("WAWebUtilsLogQplEvents").qplDropProductView();
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[product-msg] no chat for the product message"
                    ]))).sendLogs("biz-product-missing-chat");
                    return;
                }
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
                    refreshCarousel: true,
                    chat: l,
                    product: n
                }), {
                    transition: "slide-left",
                    uim: b,
                    newDrawerContext: a
                });
            }
        }, [
            productId,
            L,
            onProductClick,
            msgT,
            msgKey,
            V,
            v,
            b
        ]);
        const G = E != null && E !== "" || I != null;
        const z = G || isCarouselCard;
        let j;
        if (G) {
            const K = {
                selectable: trusted,
                dirMismatch: w !== r("WAWebL10N").isRTL(),
                direction: k,
                inferLinesDirection: true,
                formatters: o("WAWebFormatConfigurationConversation").Conversation({
                    links: U && I != null ? o("WAWebMsgLinks").getLinksFromText(I, q) : [],
                    phoneNumbers: U && I != null ? o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(I) : [],
                    trusted,
                    fromMe: T.fromMe
                })
            };
            const Component = r("WAWebMessageSpacerText.react");
            j = <div {...babelHelpers.extends({}, {
                0: {
                    className: "x1n2onr6 x1xmf6yo x1xegmmw x1e56ztr x13fj5qh"
                },
                1: {
                    className: "x1n2onr6 x1xmf6yo x1xegmmw x1e56ztr x13fj5qh x1hr2gdg"
                }
            }[!!r("WAWebL10N").isRTL() << 0], {
                children: [
                    E != null ? <Component msgKey={msgKey} spacer={false}>{c.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, K, {
                        text: E,
                        xstyle: g.caption,
                        element: "p"
                    }))}</Component> : null,
                    I != null ? c.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, K, {
                        text: I,
                        xstyle: [
                            g.footer,
                            E != null && g.footerMargin
                        ]
                    })) : null,
                    <div {...babelHelpers.extends({}, {
                        0: {
                            className: "x10l6tqk xtijo5x x1o583il"
                        },
                        1: {
                            className: "x10l6tqk x1o583il xwukr4l"
                        }
                    }[!!r("WAWebL10N").isRTL() << 0], {
                        children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                            msgKey
                        })
                    })}/>
                ]
            })}/>;
        }
        const Q = displayAuthor ? <div className="xyqdw3p x1icxu4v xs9asl8 x25sj25">{c.jsx(r("WAWebMessageAuthor.react"), {
            msgKey,
            contact: A,
            displayType
        })}</div> : null;
        const Component = r("WAWebBizProductInfo.react");
        const Component_1 = o("WAWebMessagePicture.react").ImageMessage;
        const Component_2 = o("WAWebEmojiText.react").EmojiText;
        return <div {...babelHelpers.extends({}, {
            0: {
                className: "x1n2onr6 x1vjfegm x9f619 x13nahy2"
            },
            1: {
                className: "x1n2onr6 x1vjfegm x9f619 xmewjk2"
            }
        }[!!S << 0], {
            children: [
                Q,
                <Component_1 msgKey={msgKey} mediaData={$} hideMeta={z} trusted={trusted} displayAuthor={false} displayType={displayType} contentContainerClassName="x1n2onr6 x6ikm8r x10wlt62" captionComponent=<Component trusted={trusted} onClick={H} msgKey={msgKey} displayType={displayType}/> thumbClassName="x1n2onr6 x78zum5 x6s0dn4 xl56j7k x193iq5w x6ikm8r x10wlt62 x1ypdohk x1i282gy xx9ypkp" onThumbClick={H} quotedMsg={quotedMsg}/>,
                j,
                <Component_2 xstyle={[
                    g.productCta,
                    g.productCtaColorV2,
                    G && g.btnBorder,
                    f.paddingTop7,
                    isCarouselCard ? o("WDSPaddings.stylex").wdsPaddings.paddingBottom0 : f.paddingBottom10
                ]} onClick={H} text={s._("View")}/>
            ]
        })}/>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    l.default = h;
}, 226);