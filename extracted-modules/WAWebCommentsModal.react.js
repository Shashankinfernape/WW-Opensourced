__d("WAWebCommentsModal.react", [
    "fbt",
    "WAWebChatGroupUtils",
    "WAWebCommentComposeBox.react",
    "WAWebCommentFrontendUtils",
    "WAWebCommentList.react",
    "WAWebDrawerHeader.react",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebMarkAddOnsAsReadAction",
    "WAWebMessageAddOnType",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebCommentMessages",
    "useWAWebCommentModalListeners",
    "useWAWebCommentReplyCount"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useRef } = d;
    const _ = {
        paddingBlock6: {
            paddingTop: "x1yrsyyn",
            paddingBottom: "x10b6aqq",
            $$css: true
        },
        paddingInline10: {
            paddingInlineStart: "xe2zdcy",
            paddingInlineEnd: "x2vl965",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const f = {
        content: {
            maxHeight: "x3d5gib",
            $$css: true
        },
        pillContainer: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            textAlign: "x2b8uid",
            $$css: true
        },
        pill: {
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            color: "xsztnxe",
            backgroundColor: "x4pcxzf",
            alignItems: "x6s0dn4",
            textAlign: "x2b8uid",
            $$css: true
        },
        footer: {
            bottom: "x1ey2m1c",
            position: "x7wzq59",
            $$css: true
        },
        emptyState: {
            paddingTop: "x11408do",
            paddingBottom: "x1ej9moc",
            $$css: true
        }
    };
    function GComponent(t) {
        const n = o("react-compiler-runtime").c(27);
        const t_parentMsgs = t.parentMsgs;
        const parent = t_parentMsgs[0];
        let l;
        if (n[0] !== t_parentMsgs) {
            l = t_parentMsgs.map(C);
            n[0] = t_parentMsgs;
            n[1] = l;
        } else {
            l = n[1];
        }
        const comments = o("useWAWebCommentMessages").useHydrateAndAggregateComments(l);
        const d = o("WAWebFrontendMsgGetters").getChat(parent);
        const g = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead();
        let v;
        if (n[2] !== parent) {
            v = [
                parent
            ];
            n[2] = parent;
            n[3] = v;
        } else {
            v = n[3];
        }
        const S = o("useWAWebCommentReplyCount").useWAWebCommentReplyCount(v);
        const RRef = useRef(null);
        let L;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            L = function() {
                if (RRef.current != null) {
                    const top = RRef.current.scrollHeight;
                    RRef.current.scrollTo({
                        top,
                        behavior: "smooth"
                    });
                }
            };
            n[4] = L;
        } else {
            L = n[4];
        }
        const scrollReplyModalToBottom = L;
        let k;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            k = {
                scrollReplyModalToBottom
            };
            n[5] = k;
        } else {
            k = n[5];
        }
        r("useWAWebCommentModalListeners")(k);
        let I;
        let T;
        if (n[6] !== comments || n[7] !== g) {
            I = function() {
                const e = comments.filter(y);
                if (e.length !== 0) {
                    g({
                        addOnType: o("WAWebMessageAddOnType").MessageAddOnType.Comment,
                        addOns: e.map(h)
                    });
                }
            };
            T = [
                comments,
                g
            ];
            n[6] = comments;
            n[7] = g;
            n[8] = I;
            n[9] = T;
        } else {
            I = n[8];
            T = n[9];
        }
        useEffect(I, T);
        let D;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            D = s._("Use WhatsApp on your primary device to see older replies.");
            n[10] = D;
        } else {
            D = n[10];
        }
        const x = D;
        const Modal = o("WAWebModal.react").Modal;
        const ModalTheme = o("WAWebModal.react").ModalTheme;
        const ErrorBoundary = o("WAWebErrorBoundary.react").ErrorBoundary;
        const M = "comments-modal";
        let w;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            w = <Component title={s._("Replies")} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP} onCancel={o("WAWebModalManager").closeModalManager}/>;
            n[11] = w;
        } else {
            w = n[11];
        }
        let A;
        if (n[12] !== comments || n[13] !== t_parentMsgs || n[14] !== S) {
            const Component = r("WAWebFlexItem.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            A = comments.length > 0 ? <div className="x3d5gib x14aock7 x1rife3k" ref={RRef}>{b(S, comments.length) ? <Component_1 xstyle={[
                o("WDSPaddings.stylex").wdsPaddings.paddingVer16,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
                f.pillContainer
            ]}><Component xstyle={[
                _.paddingBlock6,
                _.paddingInline10,
                f.pill
            ]}>{x}</Component></Component_1> : null}<Component_2 xstyle={[
                o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
                f.content
            ]} align="stretch">{c.jsx(r("WAWebCommentList.react"), {
                comments,
                isAlbumMsg: o("WAWebCommentFrontendUtils").isAlbumMessageContainer(t_parentMsgs)
            })}</Component_2></div> : <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.emptyState, o("WDSPaddings.stylex").wdsPaddings.paddingHor24), {
                children: [
                    <div className="x2b8uid x1w7chpp x1jchvi3 xk50ysn">{s._("No replies yet")}</div>,
                    <div className="x2b8uid xhslqc4 x1f6kntn xo1l8bm">{s._("Share your thoughts")}</div>
                ]
            })}/>;
            n[12] = comments;
            n[13] = t_parentMsgs;
            n[14] = S;
            n[15] = A;
        } else {
            A = n[15];
        }
        const Component = o("WAWebFlex.react").FlexColumn;
        const F = !o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(d) && !o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(d) && t_parentMsgs != null && t_parentMsgs.length === 1 ? <Component xstyle={[
            f.footer,
            o("WDSPaddings.stylex").wdsPaddings.paddingTop8
        ]}>{c.jsx(r("WAWebCommentComposeBox.react"), {
            parent
        })}</Component> : null;
        let O;
        if (n[16] !== w || n[17] !== A || n[18] !== F) {
            O = <>{w}{A}{F}</>;
            n[16] = w;
            n[17] = A;
            n[18] = F;
            n[19] = O;
        } else {
            O = n[19];
        }
        let B;
        if (n[20] !== ErrorBoundary || n[21] !== O) {
            B = <ErrorBoundary name={M}>{O}</ErrorBoundary>;
            n[20] = ErrorBoundary;
            n[21] = O;
            n[22] = B;
        } else {
            B = n[22];
        }
        let W;
        if (n[23] !== Modal || n[24] !== B || n[25] !== ModalTheme.Comments) {
            W = <Modal type={ModalTheme.Comments}>{B}</Modal>;
            n[23] = Modal;
            n[24] = B;
            n[25] = ModalTheme.Comments;
            n[26] = W;
        } else {
            W = n[26];
        }
        return W;
    }
    function h(e) {
        return {
            msgKey: e.id,
            sender: e.author.toString()
        };
    }
    function y(e) {
        return !e.read;
    }
    function C(e) {
        return e.id;
    }
    function b(e, t) {
        return e !== t;
    }
    l.default = GComponent;
}, 226);