__d("WAWebCommentRow.react", [
    "fbt",
    "WAWebBox.react",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebCiphertext.react",
    "WAWebClock",
    "WAWebCommentAuthor.react",
    "WAWebCommentBody.react",
    "WAWebCommentGetters",
    "WAWebCommentSendFailIcon.react",
    "WAWebCommentToCommentMsgData",
    "WAWebContactCollection",
    "WAWebCopyToClipboard",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebDevOnlyBadge.react",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatRevokedMsg",
    "WAWebGroupChatProfilePicture.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgKeyUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebProcessBaseMsgInfo",
    "WAWebReactionCellDetailThumb.react",
    "WAWebReportMsgPopup.react",
    "WAWebSpamConstants",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebWidFactory",
    "WDSIconIcBlock.react",
    "WDSIconIcChevronDown.react",
    "WDSIconIcDelete.react",
    "WDSIconIcThumbDown.react",
    "WDSMargins.stylex",
    "gkx",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useHoverState",
    "useWAWebCommentValues",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useRef, useState } = c;
    const p = {
        marginInlineEnd5: {
            marginInlineEnd: "xf6vk7d",
            $$css: true
        },
        marginInlineEnd3: {
            marginInlineEnd: "x1p8j9ns",
            $$css: true
        }
    };
    const _ = {
        icon: {
            display: "x1rg5ohu",
            color: "x181wc8j",
            minWidth: "xnei2rj",
            marginInlineStart: "xe9ewy2",
            $$css: true
        },
        secondaryColor: {
            color: "xhslqc4",
            $$css: true
        },
        placeholder: {
            fontStyle: "x1k4tb9n",
            color: "xhslqc4",
            $$css: true
        },
        body: {
            overflowWrap: "x1h4wwuj",
            $$css: true
        },
        row: {
            position: "x1n2onr6",
            overflowWrap: "x1mzt3pk",
            $$css: true
        },
        context: {
            position: "x10l6tqk",
            insetInlineEnd: "xdg88n9",
            left: null,
            right: null,
            $$css: true
        },
        thumbnail: {
            position: "x10l6tqk",
            insetInlineEnd: "x1g9hn12",
            left: null,
            right: null,
            $$css: true
        }
    };
    function FComponent({ comment, isAlbumMsg }) {
        let t;
        const i = r("useHoverState")();
        const { isHovered, onMouseEnter, onMouseLeave } = i;
        const h = o("useWAWebCommentValues").useCommentValues(comment.id, [
            (t = o("WAWebCommentGetters")).getAuthor,
            t.getParentMsgKey,
            t.getBody,
            t.getT,
            t.getRead,
            t.getSubtype,
            t.getRevokeSender,
            t.getLinks,
            t.getLinksIndexParsed,
            t.getPhoneNumbers,
            t.getPhoneNumbersIndexParsed,
            t.getProtocolMessageKey,
            t.getIsFailed
        ]);
        const y = h[0];
        const C = h[1];
        const b = h[2];
        const v = h[3];
        const S = h[4];
        const R = h[5];
        const L = h[6];
        const E = h[7];
        const k = h[8];
        const I = h[9];
        const T = h[10];
        const D = h[11];
        const x = h[12];
        const $ = o("WAWebMsgCollection").MsgCollection.get(C);
        const P = useState(false);
        const N = P[0];
        const M = P[1];
        const wRef = useRef(null);
        const A = r("nullthrows")(o("WAWebChatCollection").ChatCollection.get(C.remote));
        let F = y;
        if (D != null) {
            const O = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(D, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
            if (O.author != null) {
                F = o("WAWebWidFactory").asUserWidOrThrow(O.author);
            }
        }
        const B = r("nullthrows")(o("WAWebContactCollection").ContactCollection.get(F));
        let W;
        if (N) {
            const q = function() {
                const e = o("WAWebCommentToCommentMsgData").commentToCommentMsgData(comment);
                const t = new (o("WAWebMsgModel")).Msg(babelHelpers.extends({}, o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(e), {
                    type: o("WAWebMsgType").MSG_TYPE.CHAT,
                    body: b
                }));
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportMsgPopup.react"), {
                    msg: t,
                    spamFlow: o("WAWebSpamConstants").SpamFlow.CommentActions
                }));
            };
            const U = function() {
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
                    chat: A,
                    commentList: [
                        o("WAWebCommentToCommentMsgData").commentToCommentMsgData(comment)
                    ],
                    msgList: []
                }));
            };
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            const V = [
                <Component key="delete" action={U} icon={u.jsx(r("WDSIconIcDelete.react"), {})} testid="mi-msg-delete" theme={o("WAWebDropdownItem.react").DropdownItemThemeType.Negative}>{s._("Delete")}</Component>
            ];
            if (!comment.id.fromMe) {
                const Component = o("WAWebDropdownItem.react").DropdownItem;
                V.push(<Component key="mi-report" action={q} icon={u.jsx(r("WDSIconIcThumbDown.react"), {})} testid="mi-msg-report">{s._("Report")}</Component>);
            }
            if (r("gkx")("16539")) {
                V.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {}));
                const Component = o("WAWebDropdownItem.react").DropdownItem;
                V.push(<Component key="copy-id" action={function() {
                    o("WAWebCopyToClipboard").copyTextToClipboard(comment.id.toString());
                }} addSpacing testid="mi-msg-copy-id">{u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                    label: "Copy Msg ID"
                })}</Component>);
            }
            const contextMenu = {
                menu: V,
                anchor: wRef.current
            };
            const Component_1 = o("WAWebUimUie.react").UIE;
            W = <Component_1 dismissOnWindowResize displayName="CommentContextMenu" escapable popable requestDismiss={function() {
                return M(false);
            }}>{u.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu
            })}</Component_1>;
        }
        const G = r("useWAWebEventTargetValue")(o("WAWebContactCollection").ContactCollection, [
            "add",
            "remove",
            "change:name"
        ], function() {
            return o("WAWebFormatRevokedMsg").formatRevokedComment(comment);
        });
        const Component = r("WAWebFlexItem.react");
        const Component_1 = r("WAWebFlexItem.react");
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const z = <Component_2><Component xstyle={[
            _.icon,
            p.marginInlineEnd5
        ]}>{u.jsx(r("WDSIconIcBlock.react"), {
            height: 22,
            width: 22
        })}</Component><Component_1 xstyle={[
            _.placeholder,
            o("WDSMargins.stylex").wdsMargins.marginTop2,
            o("WDSMargins.stylex").wdsMargins.marginBottom2
        ]}>{G}</Component_1></Component_2>;
        const j = ()=>{
            if (R === "admin" || R === "sender") {
                return z;
            }
            if (b != null) {
                return u.jsx(r("WAWebCommentBody.react"), {
                    comment
                });
            }
            return u.jsx(r("WAWebCiphertext.react"), {
                subtype: R ?? ""
            });
        };
        const Component_3 = r("WAWebFlexItem.react");
        const Component_4 = r("WAWebFlexItem.react");
        const Component_5 = r("WAWebFlexItem.react");
        const Component_6 = o("WAWebFlex.react").FlexRow;
        const Component_7 = o("WAWebFlex.react").FlexColumn;
        const Component_8 = o("WAWebFlex.react").FlexRow;
        const Component_9 = o("WAWebReactionCellDetailThumb.react").ReactionCellDetailThumb;
        const Component_10 = o("WAWebFlex.react").FlexRow;
        const Component_11 = r("WAWebUnstyledButton.react");
        const Component_12 = r("WAWebFlexItem.react");
        const Component_13 = r("WAWebBox.react");
        return <Component_13 flex onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} testid="comment-row" xstyle={[
            o("WDSMargins.stylex").wdsMargins.marginBottom12,
            _.row
        ]}><Component_3 xstyle={[
            o("WDSMargins.stylex").wdsMargins.marginEnd12,
            o("WDSMargins.stylex").wdsMargins.marginTop2
        ]}>{u.jsx(r("WAWebGroupChatProfilePicture.react"), {
            chatWid: A.id,
            disableClick: true,
            usePicInBubbleLayout: true,
            userContact: B
        })}</Component_3><Component_8><Component_7 xstyle={_.body} grow={1}><Component_6><Component_4 xstyle={o("WDSMargins.stylex").wdsMargins.marginEnd8}>{u.jsx(r("WAWebCommentAuthor.react"), {
            chat: A,
            contact: B
        })}</Component_4><Component_5><G1Component t={v}/></Component_5></Component_6>{j()}</Component_7></Component_8>{u.jsx(r("WAWebCommentSendFailIcon.react"), {
            comment
        })}<Component_10 xstyle={_.thumbnail}>{$ && isAlbumMsg && <Component_9 msg={$} onCloseDetailsPane={o("WAWebModalManager").closeModalManager} reactionText="" showReactionText={false}/>}</Component_10>{o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(A) ? null : <Component_12 xstyle={[
            o("WDSMargins.stylex").wdsMargins.marginStart12,
            p.marginInlineEnd3,
            o("WDSMargins.stylex").wdsMargins.marginTop2,
            _.context
        ]}>{isHovered || W != null ? <Component_11 aria-label={r("WAWebFbtCommon")("Context menu")} onClick={function() {
            return M(true);
        }} ref={wRef}>{u.jsx(r("WDSIconIcChevronDown.react"), {
            height: 24,
            width: 24,
            iconXstyle: _.secondaryColor
        })}{W}</Component_11> : null}</Component_12>}</Component_13>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    function G1Component(e) {
        const t = o("react-compiler-runtime").c(4);
        const n = e.t;
        let r;
        if (t[0] !== n) {
            r = o("WAWebClock").Clock.timestampStr(n);
            t[0] = n;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        let i;
        if (t[2] !== a) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            const Component_1 = o("WAWebText.react").WAWebTextMuted;
            i = <Component_1><Component>{a}</Component></Component_1>;
            t[2] = a;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    l.default = FComponent;
}, 226);