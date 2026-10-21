__d("WAWebNewsletterPinnedMessagesBanner.react", [
    "fbt",
    "WAJids",
    "WAReplaceRepeatingWhitespace",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebChatMsgSymbol.react",
    "WAWebConversationBanner.react",
    "WAWebDashes.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatConfiguration",
    "WAWebFormatMsgText",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebMsgMentionMap",
    "WAWebMsgModelPropUtils",
    "WAWebNewsletterOpenAtAction",
    "WAWebNewsletterPinMessageFlow",
    "WAWebSpoilerRevealLogger",
    "WAWebUimUie.react",
    "WDSHoverStateStyles",
    "WDSIconIcArrowForward.react",
    "WDSIconIcPushPin.react",
    "WDSIconWdsIcPushPinSlash.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebNewsletterPinnedMessages"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        paddingBlock0: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            $$css: true
        },
        paddingInlineEnd0: {
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        paddingInlineStart14: {
            paddingInlineStart: "x1onr9mi",
            $$css: true
        },
        paddingInlineStart16: {
            paddingInlineStart: "xf7dkkf",
            $$css: true
        }
    };
    const p = {
        banner: {
            minHeight: "xuwdbiy",
            backgroundColor: "x1h3rtpe",
            $$css: true
        },
        icon: {
            display: "x1rg5ohu",
            color: "xhslqc4",
            $$css: true
        },
        bannerBody: {
            height: "xsdox4t",
            width: "xh8yej3",
            $$css: true
        },
        clearMinWidth: {
            minWidth: "xaaagfd",
            $$css: true
        },
        dashContainer: {
            width: "xfo62xy",
            $$css: true
        },
        previewText: {
            fontSize: "x1f6kntn",
            lineHeight: "x1fc57z9",
            display: "x1rg5ohu",
            color: "xhslqc4",
            $$css: true
        },
        previewContent: {
            height: "x5yr21d",
            whiteSpace: "xuxw1ft",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            paddingInlineEnd: "x5s3kwk",
            $$css: true
        }
    };
    function _() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <div className="x78zum5 x6s0dn4 xl56j7k x25sj25 xf159sx">{c.jsx(r("WDSIconIcPushPin.react"), {
                xstyle: p.icon,
                "aria-hidden": true,
                testid: "channel_pinned_banner_icon"
            })}</div>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function F6Component({ msg }) {
        const n = o("WAWebFrontendMsgGetters").getDir(msg);
        const a = o("WAWebFrontendMsgGetters").getRtl(msg);
        const i = r("WAWebFormatMsgText")({
            msg,
            options: {
                unformat: false
            }
        }).toString();
        const Component = o("WAWebFlex.react").FlexRow;
        return <Component xstyle={p.previewContent} align="center" testid="channel_pinned_banner_body">{o("WAWebMsgModelPropUtils").hasSymbol(msg.unsafe()) ? c.jsx(r("WAWebChatMsgSymbol.react"), {
            msg: msg.unsafe()
        }, "msg-symbol") : null}{c.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: p.previewText,
            direction: n,
            text: r("WAReplaceRepeatingWhitespace")(i, true),
            dirMismatch: a !== r("WAWebL10N").isRTL(),
            ellipsify: true,
            inlineblock: true,
            formatters: o("WAWebFormatConfiguration").InlineMessage({
                mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(msg),
                groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(msg),
                messageHasSpoiler: o("WAWebMsgGetters").getIsSpoiler(msg),
                spoilerRevealContext: o("WAWebSpoilerRevealLogger").getSpoilerRevealContext(msg)
            })
        }, "text")}</Component>;
    }
    F6Component.displayName = `${F6Component.name} [from ${i.id}]`;
    function GComponent(t) {
        const n = o("react-compiler-runtime").c(48);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const a_chat = a.chat;
        const g = r("useWAWebNewsletterPinnedMessages")(a_chat);
        const h = u_useState(null);
        const y = h[0];
        const C = h[1];
        const b = u_useState(false);
        const v = b[0];
        const S = b[1];
        if (g.length === 0) {
            return null;
        }
        let R;
        if (n[3] !== y || n[4] !== g) {
            R = y != null ? g.findIndex((e)=>e.serverId === y) : -1;
            n[3] = y;
            n[4] = g;
            n[5] = R;
        } else {
            R = n[5];
        }
        const L = R;
        const E = L >= 0 ? L : 0;
        const k = g[E];
        if (y !== k.serverId) {
            C(k.serverId);
        }
        let I;
        if (n[6] !== g || n[7] !== E) {
            I = function() {
                const e = (E - 1 + g.length) % g.length;
                C(g[e].serverId);
            };
            n[6] = g;
            n[7] = E;
            n[8] = I;
        } else {
            I = n[8];
        }
        const T = I;
        let D;
        if (n[9] !== a_chat || n[10] !== k.serverId) {
            D = function() {
                const k_serverId = k.serverId;
                if (k_serverId != null) {
                    o("WAWebNewsletterOpenAtAction").openNewsletterAt({
                        newsletterJid: o("WAJids").toNewsletterJid(a_chat.id.toString()),
                        serverId: k_serverId,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.PinnedMessage
                    });
                }
            };
            n[9] = a_chat;
            n[10] = k.serverId;
            n[11] = D;
        } else {
            D = n[11];
        }
        const x = D;
        let $;
        if (n[12] !== T || n[13] !== x) {
            $ = function(t) {
                t.stopPropagation();
                x();
                T();
            };
            n[12] = T;
            n[13] = x;
            n[14] = $;
        } else {
            $ = n[14];
        }
        const P = $;
        let N;
        if (n[15] !== a_chat) {
            N = o("WAWebChatGetters").getIsNewsletter(a_chat) && (a_chat.newsletterMetadata?.iAmAdminOrOwner() ?? false);
            n[15] = a_chat;
            n[16] = N;
        } else {
            N = n[16];
        }
        const A = N;
        let F;
        if (n[17] === Symbol.for("react.memo_cache_sentinel")) {
            F = s._("Go to message");
            n[17] = F;
        } else {
            F = n[17];
        }
        let O;
        if (n[18] !== x) {
            const Component = r("WDSMenuItem.react");
            O = <Component testid="channel_pinned_banner_menu_go_to_message" Icon={r("WDSIconIcArrowForward.react")} title={F} onPress={x}/>;
            n[18] = x;
            n[19] = O;
        } else {
            O = n[19];
        }
        let B;
        if (n[20] !== A || n[21] !== a_chat || n[22] !== k) {
            const Component = r("WDSMenuItem.react");
            B = A ? <Component testid="channel_pinned_banner_menu_unpin" Icon={r("WDSIconWdsIcPushPinSlash.react")} title={s._("Unpin")} onPress={function() {
                o("WAWebNewsletterPinMessageFlow").runUnpinNewsletterMessageFlow(a_chat, k);
            }}/> : null;
            n[20] = A;
            n[21] = a_chat;
            n[22] = k;
            n[23] = B;
        } else {
            B = n[23];
        }
        let W;
        if (n[24] !== O || n[25] !== B) {
            const Component = r("WDSMenu.react");
            W = <Component>{O}{B}</Component>;
            n[24] = O;
            n[25] = B;
            n[26] = W;
        } else {
            W = n[26];
        }
        const wdsMenuContent = W;
        const U = v && o("WDSHoverStateStyles").WDSHoverStateStyles.genericHoverPersistent;
        let V;
        if (n[27] !== U) {
            V = [
                p.banner,
                m.paddingInlineStart16,
                m.paddingBlock0,
                m.paddingInlineEnd0,
                U
            ];
            n[27] = U;
            n[28] = V;
        } else {
            V = n[28];
        }
        let H;
        if (n[29] === Symbol.for("react.memo_cache_sentinel")) {
            H = c.jsx(r("WAWebFlexItem.react"), {
                "aria-label": s._("Pinned update")
            });
            n[29] = H;
        } else {
            H = n[29];
        }
        let G;
        if (n[30] !== g.length || n[31] !== E) {
            G = g.length > 1 ? c.jsx(r("WAWebDashes.react"), {
                count: g.length,
                activeIndex: g.length - 1 - E
            }) : null;
            n[30] = g.length;
            n[31] = E;
            n[32] = G;
        } else {
            G = n[32];
        }
        let z;
        if (n[33] !== G) {
            const Component = r("WAWebFlexItem.react");
            z = <Component xstyle={p.dashContainer}>{G}</Component>;
            n[33] = G;
            n[34] = z;
        } else {
            z = n[34];
        }
        let j;
        if (n[35] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            j = <Component xstyle={p.clearMinWidth} align="center" justify="center"><_/></Component>;
            n[35] = j;
        } else {
            j = n[35];
        }
        let K;
        if (n[36] === Symbol.for("react.memo_cache_sentinel")) {
            K = [
                m.paddingInlineStart14,
                p.bannerBody
            ];
            n[36] = K;
        } else {
            K = n[36];
        }
        let Q;
        if (n[37] !== k) {
            const Component = r("WAWebFlexItem.react");
            Q = <Component xstyle={K}><F6Component msg={k}/></Component>;
            n[37] = k;
            n[38] = Q;
        } else {
            Q = n[38];
        }
        let X;
        if (n[39] !== z || n[40] !== Q) {
            const Component = o("WAWebFlex.react").FlexRow;
            X = <Component align="center" grow={1}>{H}{z}{j}{Q}</Component>;
            n[39] = z;
            n[40] = Q;
            n[41] = X;
        } else {
            X = n[41];
        }
        let Y;
        if (n[42] !== P || n[43] !== i || n[44] !== V || n[45] !== X || n[46] !== wdsMenuContent) {
            const Component = r("WAWebConversationBanner.react");
            const Component_1 = o("WAWebUimUie.react").UIE;
            Y = <Component_1 displayName="NewsletterPinnedMessagesBanner"><Component ref={i} xstyle={V} onClick={P} onHoverChange={S} wdsMenuContent={wdsMenuContent}>{X}</Component></Component_1>;
            n[42] = P;
            n[43] = i;
            n[44] = V;
            n[45] = X;
            n[46] = wdsMenuContent;
            n[47] = Y;
        } else {
            Y = n[47];
        }
        return Y;
    }
    function h(e) {
        return r("useWAWebNewsletterPinnedMessages")(e).length > 0;
    }
    l.WAWebNewsletterPinnedMessagesBanner = GComponent;
    l.useWAWebNewsletterPinnedMessagesBanner = h;
}, 226);