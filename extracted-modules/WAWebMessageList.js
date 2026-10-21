__d("WAWebMessageList", [
    "fbt",
    "WAWebBizProductListMessagePreview",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebListMsgModalLoadable",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebMsgLinks",
    "WAWebMsgMentionMap",
    "WAWebMsgModelPropUtils",
    "WAWebMsgPhoneNumbers",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebProductMessageListCollection",
    "WAWebProtobufsE2E.pb",
    "WAWebQplFlowWrapper",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumCatalogEntryPoint",
    "WDSIconIcFormatListBulleted.react",
    "WDSMargins.stylex",
    "qpl",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = r("qpl")._(774777097, "3431");
    function m(msg, t) {
        const e_requiresDirectConnection = msg.requiresDirectConnection;
        const catalogOwnerJid = msg.isForwarded ? msg.businessOwnerJid : msg.from.toString({
            legacy: true
        });
        const productListInfo = msg.list.productListInfo;
        if (!(productListInfo == null || catalogOwnerJid == null)) {
            const IsCached = !!o("WAWebProductMessageListCollection").ProductMessageListCollection.get(msg.id);
            o("WAWebQplFlowWrapper").QPL.markerStart(d, {
                annotations: {
                    bool: {
                        IsCached
                    }
                }
            });
            const l = o("WAWebProductMessageListCollection").ProductMessageListCollection.getOrAdd({
                catalogOwnerJid,
                id: msg.id,
                productList: productListInfo,
                requiresDirectConnection: e_requiresDirectConnection,
                title: msg.list.title
            });
            if (l != null) {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
                    chat: o("WAWebFrontendMsgGetters").getChat(msg.unsafe()),
                    catalogOwnerJid,
                    productListId: l.id
                }), {
                    transition: "slide-left",
                    uim: t,
                    newDrawerContext: o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT, o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PRODUCT_LIST_MESSAGE)
                });
            } else {
                o("WAWebQplFlowWrapper").QPL.markerDrop(d);
            }
        }
    }
    function p(msg, t) {
        const listType = msg.list.listType;
        if (listType != null) {
            switch(listType){
                case o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.SINGLE_SELECT:
                    o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebListMsgModalLoadable").ListMsgModalLoadable, {
                        msg
                    }));
                    break;
                case o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST:
                    m(msg, t);
                    break;
                default:
            }
        }
    }
    function _(msg_list) {
        const e_listType = msg_list.listType;
        if (e_listType === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST) {
            return s._("View items");
        }
        return msg_list.buttonText;
    }
    function f(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = c.jsx(r("WDSIconIcFormatListBulleted.react"), babelHelpers.extends({}, e, {
                width: 20,
                height: 20
            }));
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function g({ listType }) {
        if (listType !== o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST) {
            return f;
        }
    }
    const h = {
        title: {
            display: "x1lliihq",
            fontSize: "x6prxxf",
            fontWeight: "xk50ysn",
            lineHeight: "xggjnk3",
            whiteSpace: "xeaf4i8",
            $$css: true
        },
        quotedElement: {
            marginTop: "x1198e8h",
            marginInlineEnd: "x1lxpwgx",
            marginBottom: "xzueoph",
            marginInlineStart: "xw01apr",
            $$css: true
        }
    };
    function y({ displayAuthor, msg, quotedMsg }) {
        const msg_list = msg.list;
        const u = r("useWAWebUIM")();
        if (!msg_list) {
            return null;
        }
        const d = {
            selectable: true,
            dirMismatch: o("WAWebFrontendMsgGetters").getRtl(msg.unsafe()) !== r("WAWebL10N").isRTL(),
            direction: o("WAWebFrontendMsgGetters").getDir(msg.unsafe()),
            inferLinesDirection: true
        };
        const m = o("WAWebFormatConfigurationConversation").Conversation({
            links: o("WAWebMsgLinks").getHeaderLinks(msg.unsafe()),
            phoneNumbers: o("WAWebMsgPhoneNumbers").getHeaderPhoneNumbersFromMsg(msg.unsafe()),
            selectable: true,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(msg.unsafe()),
            fromMe: msg.id.fromMe
        });
        const f = o("WAWebFormatConfigurationConversation").Conversation({
            mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(msg),
            groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(msg),
            links: o("WAWebMsgLinks").getLinksFromMsg(msg.unsafe()),
            phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(msg.unsafe()),
            selectable: true,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(msg.unsafe()),
            fromMe: msg.id.fromMe,
            fromChatWid: msg.id.remote
        });
        const Component = r("WAWebBizProductListMessagePreview");
        const y = msg_list.listType === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.quotedElement, msg.isForwarded && o("WDSMargins.stylex").wdsMargins.marginTop0), {
            children: <Component msg={msg} onClick={function(t) {
                if (t) {
                    t.stopPropagation();
                }
                p(msg, u);
            }}/>
        })}/> : null;
        const C = msg_list.listType !== o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST ? c.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, d, {
            className: (e || (e = r("stylex")))(h.title, o("WDSMargins.stylex").wdsMargins.marginBottom8),
            text: msg_list.title,
            formatters: m,
            ellipsify: true
        })) : null;
        const b = c.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, d, {
            text: msg_list.description,
            formatters: f
        }));
        let v = null;
        if (msg.footer != null && msg.footer !== "") {
            const S = o("WAWebFormatConfigurationConversation").Conversation({
                links: o("WAWebMsgLinks").getFooterLinks(msg.unsafe()),
                phoneNumbers: o("WAWebMsgPhoneNumbers").getFooterPhoneNumbersFromMsg(msg.unsafe()),
                selectable: true,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(msg.unsafe()),
                fromMe: msg.id.fromMe
            });
            v = c.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, d, {
                className: "x1lliihq x1nxh6w3 xuy8w9f xhslqc4 x1k70j0n",
                text: msg.footer,
                formatters: S
            }));
        }
        const R = <div className="x10l6tqk xtijo5x x1o583il">{c.jsx(o("WAWebMessageMeta.react").Meta, {
            msgKey: msg.id
        })}</div>;
        const L = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [
                {
                    label: _(msg_list) ?? "",
                    Icon: g(msg_list),
                    onClick: function(t) {
                        if (t) {
                            t.stopPropagation();
                        }
                        p(msg, u);
                    }
                }
            ]
        });
        let E = null;
        if (quotedMsg) {
            E = <div className="x1198e8h x1lxpwgx xzueoph xw01apr">{quotedMsg}</div>;
        }
        const Component_1 = r("WAWebMessageSpacerText.react");
        const Component_2 = r("WAWebMessageTextBubble.react");
        return <div className="x1n2onr6 x1vjfegm x9f619 x3orp4s x193iq5w"><Component_2 msgKey={msg.id} displayAuthor={displayAuthor} hideMeta>{E}{y}{C}<Component_1 msgKey={msg.id} data-id={msg.id}>{b}{v}{R}</Component_1>{L}</Component_2></div>;
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    l.default = y;
}, 226);