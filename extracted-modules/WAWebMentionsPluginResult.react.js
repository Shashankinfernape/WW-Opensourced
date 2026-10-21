__d("WAWebMentionsPluginResult.react", [
    "fbt",
    "WALogger",
    "WAWebBotFrontendUtils",
    "WAWebBotProfileGetters",
    "WAWebBotUtils",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendContactGetters",
    "WAWebGroupAgentOwnerLabel.react",
    "WAWebGroupHistoryAddMemberEntryPoint",
    "WAWebGroupHistoryAddMemberSendFlow",
    "WAWebGroupMetadataGetters",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebOrgNameWithIcon.react",
    "WAWebTeeLockBadge.react",
    "WAWebText.react",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnjoinedSubgroupMetadataGetters",
    "WAWebUnjoinedSubgroupMetadataModel",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WDSButton.react",
    "WDSIconIcGroupFilled.react",
    "WDSPaddings.stylex",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebGroupMetadataValues",
    "useWAWebOptionalBotProfileValues",
    "useWAWebOrgMemberIdentity",
    "useWAWebTextStatus"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useCallback, useState } = p;
    const g = {
        paddingBlock10: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        }
    };
    const h = {
        emojiScale: {
            transform: "x1nrvvgt",
            verticalAlign: "xxymvpz",
            $$css: true
        },
        mentionsResult: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            fontSize: "x1nxh6w3",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        },
        mentionsResultSelected: {
            color: "x14ug900",
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        disabledCTA: {
            lineHeight: "xo5v014",
            $$css: true
        },
        circleIconRefreshed: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            backgroundColor: "x1od0jb8",
            color: "xhslqc4",
            $$css: true
        },
        profilePictureOutlineRefreshed: {
            outline: "x4u6w88",
            outlineOffset: "x1g40iwv",
            $$css: true
        }
    };
    const y = 45;
    function C({ chat, contact, disabled = false, disabledCTA = null, elevatedPushNamesEnabled = false, selected, term }) {
        const C = o("useWAWebContactValues").useContactValues(contact.id, [
            o("WAWebContactGetters").getId,
            o("WAWebFrontendContactGetters").getFormattedName,
            o("WAWebFrontendContactGetters").getIsMyContact,
            o("WAWebContactGetters").getNotifyName,
            o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
            o("WAWebFrontendContactGetters").getTextStatusString,
            o("WAWebFrontendContactGetters").getTextStatusEmoji,
            o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
            o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
            o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration,
            o("WAWebFrontendContactGetters").getUsername,
            o("WAWebContactGetters").getPushname
        ]);
        const v = C[0];
        const S = C[1];
        const R = C[2];
        const L = C[3];
        const E = C[4];
        const k = C[5];
        const I = C[6];
        const textStatusLastUpdateTime = C[7];
        const D = C[8];
        const x = C[9];
        const $ = C[10];
        const P = C[11];
        const N = b(v, chat);
        const M = r("useWAWebOrgMemberIdentity")(contact, contact.id);
        const { displayName, membership } = M;
        const F = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(v);
        const O = F ? o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName() : displayName ?? S;
        const B = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
        const W = o("WAWebUsernameTypes").isPresentUsername($) && B;
        const q = displayName == null && W && !R;
        const U = o("WAWebTextStatusUtils").shouldDisplayTextStatus({
            textStatusEmoji: I,
            textStatusEphemeralDuration: x,
            textStatusExpiryTs: D,
            textStatusLastUpdateTime,
            textStatusString: k
        });
        r("useWAWebTextStatus")({
            contact
        });
        const V = o("WAWebFormatConfiguration").SearchName({
            terms: term ? [
                term
            ] : []
        });
        const H = null;
        let G;
        if (I != null) {
            const z = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(I);
            if (z != null) {
                G = <div {...babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingEnd2), {
                    children: m.jsx(r("WAWebEmoji.react"), {
                        xstyle: h.emojiScale,
                        emoji: z,
                        size: "small"
                    }, "low-res")
                })}/>;
            }
        }
        const Component = o("WAWebText.react").WAWebTextSmall;
        const Component_1 = o("WAWebFlex.react").FlexRow;
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        const j = U && <Component_2><Component_1 align="center">{G}{!!k && <div><Component as="div" color="secondaryEmphasized" paddingEnd={2}>{k}</Component></div>}</Component_1></Component_2>;
        const K = <div {...babelHelpers.extends({}, {
            0: {
                className: "xc8qplx xp4054r xhslqc4"
            },
            1: {
                className: "x78zum5 xeuugli"
            }
        }[!!q << 0], {
            "data-testid": "mention-secondary",
            dir: "auto",
            children: m.jsx(o("WAWebEmojiText.react").EmojiText, {
                formatters: V,
                text: P ?? E
            })
        })}/>;
        const Q = <><div className="x78zum5 xeuugli" data-testid="mention-primary" dir="auto">{m.jsx(o("WAWebEmojiText.react").EmojiText, {
            ariaLabel: o("WAWebChatContactUtils").getAccessibleNotifyName(L),
            formatters: V,
            text: o("WAWebChatContactUtils").getFormattedNotifyName(L)
        })}</div> {K}</>;
        const X = O.length > y ? `${O.slice(0, y)}...` : O;
        const Y = ()=>{
            if (disabled && !F) {
                return s._("{formatted_name} not available in this chat.", [
                    s._param("formatted_name", X)
                ]);
            }
            return X;
        };
        const J = <><div className="x78zum5 xeuugli" data-testid="mention-primary" dir="auto">{m.jsx(o("WAWebEmojiText.react").EmojiText, {
            formatters: V,
            text: Y()
        })}</div><div className="xc8qplx x10co9cg xp4054r" data-testid="mention-secondary" dir="auto">{!R && O === E && L != null ? m.jsx(o("WAWebEmojiText.react").EmojiText, {
            ellipsify: true,
            formatters: V,
            text: `~${L}`
        }) : null}</div></>;
        const Z = displayName == null && !R && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(contact) && elevatedPushNamesEnabled;
        let ee = Z ? Q : J;
        if (q) {
            ee = K;
        }
        if (N != null) {
            const Component = o("WAWebFlex.react").FlexColumn;
            ee = <Component><div className="x78zum5 xeuugli" data-testid="mention-primary" dir="auto">{m.jsx(o("WAWebEmojiText.react").EmojiText, {
                formatters: V,
                text: Y()
            })}</div><div className="xhslqc4" data-testid="mention-group-agent-owner-label" dir="auto">{N}</div></Component>;
        }
        const Component_3 = r("WAWebOrgNameWithIcon.react");
        const Component_4 = o("WAWebFlex.react").FlexRow;
        const te = <><Component_3 membership={membership}>{ee}</Component_3>{disabled && disabledCTA != null && <Component_4 xstyle={h.disabledCTA}>{disabledCTA}</Component_4>}{H}</>;
        const Component_5 = r("WAWebTeeLockBadge.react");
        const ne = <div className="x17pgkn5 x1sa5p1d">{F ? <Component_5 size="small"><div {...babelHelpers.extends({}, {
            0: {},
            1: {
                className: "xvpkmg4"
            }
        }[!!disabled << 0], {
            children: m.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: v,
                size: 32
            })
        })}/></Component_5> : <div {...babelHelpers.extends({}, {
            0: {},
            1: {
                className: "xvpkmg4"
            }
        }[!!disabled << 0], {
            children: m.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: v,
                size: 32
            })
        })}/>}</div>;
        const Component_6 = o("WAWebFlex.react").FlexItem;
        const Component_7 = o("WAWebFlex.react").FlexRow;
        const Component_8 = o("WAWebFlex.react").FlexItem;
        const Component_9 = o("WAWebFlex.react").FlexColumn;
        const Component_10 = o("WAWebFlex.react").FlexRow;
        const re = o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? <Component_10 align="center"><Component_6>{ne}</Component_6><Component_9><Component_7>{te}</Component_7>{j != null && j !== false && <Component_8>{j}</Component_8>}</Component_9></Component_10> : <>{ne}<div>{te}</div></>;
        return <div {...babelHelpers.extends({}, (c || (c = r("stylex"))).props(h.mentionsResult, g.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor8, selected === true && h.mentionsResultSelected), {
            "data-testid": "contact-mention-list-item",
            children: re
        })}/>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b(e, chat) {
        const n = o("react-compiler-runtime").c(9);
        let r;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebBotProfileGetters").getProduct,
                o("WAWebBotProfileGetters").getCreatorLid
            ];
            n[0] = r;
        } else {
            r = n[0];
        }
        const a = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(e.isFbidBot() ? e : null, r);
        const product = a[0];
        const creatorLid = a[1];
        if (chat == null || !o("WAWebChatGetters").getIsGroup(chat)) {
            return null;
        }
        let attribution;
        let u;
        if (n[1] !== chat || n[2] !== creatorLid || n[3] !== e || n[4] !== product) {
            attribution = o("WAWebGroupAgentOwnerLabel.react").getGroupAgentAttribution(e, chat, {
                creatorLid,
                product
            });
            u = attribution == null || !o("WAWebGroupAgentOwnerLabel.react").hasGroupAgentLabel(attribution, o("WAWebGroupAgentOwnerLabel.react").GroupAgentLabelSurface.MESSAGE_AUTHOR);
            n[1] = chat;
            n[2] = creatorLid;
            n[3] = e;
            n[4] = product;
            n[5] = attribution;
            n[6] = u;
        } else {
            attribution = n[5];
            u = n[6];
        }
        if (u) {
            return null;
        }
        let c;
        if (n[7] !== attribution) {
            c = m.jsx(o("WAWebGroupAgentOwnerLabel.react").WAWebGroupAgentOwnerLabel, {
                attribution,
                surface: o("WAWebGroupAgentOwnerLabel.react").GroupAgentLabelSurface.MESSAGE_AUTHOR
            });
            n[7] = attribution;
            n[8] = c;
        } else {
            c = n[8];
        }
        return c;
    }
    function v(e) {
        const t = o("react-compiler-runtime").c(8);
        const { groupMetadata, selected, term } = e;
        if (groupMetadata instanceof r("WAWebUnjoinedSubgroupMetadataModel")) {
            let l;
            if (t[0] !== groupMetadata || t[1] !== selected || t[2] !== term) {
                l = <R groupMetadata={groupMetadata} selected={selected} term={term}/>;
                t[0] = groupMetadata;
                t[1] = selected;
                t[2] = term;
                t[3] = l;
            } else {
                l = t[3];
            }
            return l;
        }
        let s;
        if (t[4] !== groupMetadata || t[5] !== selected || t[6] !== term) {
            s = <S groupMetadata={groupMetadata} selected={selected} term={term}/>;
            t[4] = groupMetadata;
            t[5] = selected;
            t[6] = term;
            t[7] = s;
        } else {
            s = t[7];
        }
        return s;
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(6);
        const { groupMetadata, selected, term } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebGroupMetadataGetters").getSubject
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebGroupMetadataValues").useGroupMetadataValues(groupMetadata.id, i);
        const s = l[0];
        let u;
        if (t[1] !== groupMetadata.id || t[2] !== selected || t[3] !== s || t[4] !== term) {
            u = <L id={groupMetadata.id} selected={selected} subject={s} term={term}/>;
            t[1] = groupMetadata.id;
            t[2] = selected;
            t[3] = s;
            t[4] = term;
            t[5] = u;
        } else {
            u = t[5];
        }
        return u;
    }
    function R(e) {
        const t = o("react-compiler-runtime").c(6);
        const { groupMetadata, selected, term } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebUnjoinedSubgroupMetadataGetters").getSubject
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebGroupMetadataValues").useUnjoinedSubgroupMetadataValues(groupMetadata.id, i);
        const s = l[0];
        let u;
        if (t[1] !== groupMetadata.id || t[2] !== selected || t[3] !== s || t[4] !== term) {
            u = <L id={groupMetadata.id} selected={selected} subject={s} term={term}/>;
            t[1] = groupMetadata.id;
            t[2] = selected;
            t[3] = s;
            t[4] = term;
            t[5] = u;
        } else {
            u = t[5];
        }
        return u;
    }
    function L({ id, selected, subject, term }) {
        const l = o("WAWebFormatConfiguration").Search({
            terms: term ? [
                term
            ] : [],
            boundary: true
        });
        return <div {...babelHelpers.extends({}, (c || (c = r("stylex"))).props(h.mentionsResult, g.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor8, selected === true && h.mentionsResultSelected), {
            "data-testid": "contact-mention-list-item",
            children: [
                <div className="x17pgkn5 x1sa5p1d">{m.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id,
                    size: 32
                })}</div>,
                <div className="x78zum5 xeuugli" dir="auto">{m.jsx(o("WAWebEmojiText.react").EmojiText, {
                    ellipsify: true,
                    formatters: l,
                    text: subject
                })}</div>
            ]
        })}/>;
    }
    L.displayName = `${L.name} [from ${i.id}]`;
    function E(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_selected = e.selected;
        let a;
        if (t[0] !== e_selected) {
            a = (c || (c = r("stylex"))).props(h.mentionsResult, g.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor8, e_selected === true && h.mentionsResultSelected);
            t[0] = e_selected;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x17pgkn5 x1sa5p1d"
            };
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                h.circleIconRefreshed,
                h.profilePictureOutlineRefreshed
            ];
            t[3] = l;
        } else {
            l = t[3];
        }
        let u;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            u = <div {...babelHelpers.extends({}, i, {
                children: m.jsx(r("WDSIconIcGroupFilled.react"), {
                    "aria-hidden": true,
                    iconXstyle: l,
                    testid: "default-group-refreshed",
                    viewBox: {
                        height: 40,
                        width: 40,
                        x: -8,
                        y: -8
                    },
                    width: 32
                })
            })}/>;
            t[4] = u;
        } else {
            u = t[4];
        }
        let d;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            d = <Component colorName="contentDefault" type="Body2">{s._("all")}</Component>;
            t[5] = d;
        } else {
            d = t[5];
        }
        let p;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            p = <Component_1 rowGap={0}>{d}<Component colorName="contentDeemphasized" type="Body3">{s._("Mention all members in this chat")}</Component></Component_1>;
            t[6] = p;
        } else {
            p = t[6];
        }
        let _;
        if (t[7] !== a) {
            _ = <div {...babelHelpers.extends({}, a, {
                "data-testid": "mention-all-list-item",
                children: [
                    u,
                    p
                ]
            })}/>;
            t[7] = a;
            t[8] = _;
        } else {
            _ = t[8];
        }
        return _;
    }
    function k({ chat, contact, elevatedPushNamesEnabled = false, onAddCancelled, onAddConfirmed, onAddDialogShown, selected, term }) {
        const R = useState(false);
        const loading = R[0];
        const E = R[1];
        const k = useState(false);
        const I = k[0];
        const T = k[1];
        const D = o("useWAWebContactValues").useContactValues(contact.id, [
            o("WAWebContactGetters").getId,
            o("WAWebFrontendContactGetters").getFormattedName,
            o("WAWebFrontendContactGetters").getIsMyContact,
            o("WAWebContactGetters").getNotifyName,
            o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
            o("WAWebFrontendContactGetters").getUsername,
            o("WAWebContactGetters").getPushname
        ]);
        const x = D[0];
        const $ = D[1];
        const P = D[2];
        const N = D[3];
        const M = D[4];
        const w = D[5];
        const A = D[6];
        const F = r("useWAWebOrgMemberIdentity")(contact, contact.id);
        const { displayName, membership } = F;
        const W = displayName ?? $;
        const q = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
        const U = o("WAWebUsernameTypes").isPresentUsername(w) && q;
        const V = displayName == null && U && !P;
        const H = o("WAWebFormatConfiguration").SearchName({
            terms: term ? [
                term
            ] : []
        });
        const G = useCallback(function(t) {
            t.stopPropagation();
            if (!(loading || I)) {
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    onAddDialogShown?.();
                    const name = chat.contact.name;
                    const n = m.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: s._("Add {participant} to \"{subject}\" group?", [
                            s._param("participant", W),
                            s._param("subject", name)
                        ])
                    });
                    const l = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                        children: n,
                        okText: s._("Add member"),
                        cancelText: r("WAWebFbtCommon")("Cancel")
                    });
                    if (l) {
                        E(true);
                        o("WAWebModifyParticipantsGroupAction").addParticipants(chat, [
                            contact
                        ]).then((t)=>{
                            const n = t.participants.some((e)=>e.code === "403");
                            if (n) {
                                const l = function() {
                                    o("WAWebModalManager").ModalManager.existsAsync().then((e)=>{
                                        if (!(e || onAddCancelled == null)) {
                                            onAddCancelled();
                                        }
                                    });
                                };
                                o("WAWebModalManager").ModalManager.once("close_modal", l);
                                return;
                            }
                            T(true);
                            onAddConfirmed?.(contact);
                            const s = t.participants.some((e)=>e.code === "200");
                            if (s) {
                                o("WAWebGroupHistoryAddMemberSendFlow").offerGroupHistoryAfterAddingMember(chat, contact, o("WAWebGroupHistoryAddMemberEntryPoint").AddMemberGroupHistoryEntryPoint.Mention).catch((t)=>{
                                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "Failed to offer group history after adding member via mention"
                                    ]))).catching(r("getErrorSafe")(t)).sendLogs("group-history-offer-after-mention-add-fail");
                                });
                            }
                        }).catch((e)=>{
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to add participant to group: ",
                                ""
                            ])), e);
                            o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
                                msg: s._("Couldn't add contact to the group")
                            }));
                            onAddCancelled?.();
                        }).finally(()=>{
                            E(false);
                        });
                    } else if (onAddCancelled != null) {
                        onAddCancelled();
                    }
                })();
            }
        }, [
            chat,
            contact,
            W,
            loading,
            I,
            onAddCancelled,
            onAddConfirmed,
            onAddDialogShown
        ]);
        const z = <div {...babelHelpers.extends({}, {
            0: {
                className: "xc8qplx xp4054r xhslqc4"
            },
            1: {
                className: "x78zum5 xeuugli"
            }
        }[!!V << 0], {
            dir: "auto",
            "data-testid": "mention-secondary",
            children: m.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: A ?? M,
                formatters: H
            })
        })}/>;
        const j = <><div className="x78zum5 xeuugli" dir="auto" data-testid="mention-primary">{m.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: o("WAWebChatContactUtils").getFormattedNotifyName(N),
            ariaLabel: o("WAWebChatContactUtils").getAccessibleNotifyName(N),
            formatters: H
        })}</div> {z}</>;
        const K = W.length > y ? `${W.slice(0, y)}...` : W;
        const Q = <><div className="x78zum5 xeuugli" dir="auto" data-testid="mention-primary">{m.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: K,
            formatters: H
        })}</div><div className="xc8qplx x10co9cg xp4054r" dir="auto" data-testid="mention-secondary">{!P && W === M && N != null ? m.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: `~${N}`,
            formatters: H,
            ellipsify: true
        }) : null}</div></>;
        const X = displayName == null && !P && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(contact) && elevatedPushNamesEnabled;
        let Y = X ? j : Q;
        if (V) {
            Y = z;
        }
        const Component = r("WAWebOrgNameWithIcon.react");
        const J = <Component membership={membership}>{Y}</Component>;
        const Component_1 = r("WDSText.react");
        const Z = <Component_1 colorName="contentDeemphasized" type="Body3">{s._("Not in group")}</Component_1>;
        const Component_2 = o("WAWebFlex.react").FlexItem;
        const Component_3 = o("WAWebFlex.react").FlexRow;
        const Component_4 = o("WAWebFlex.react").FlexItem;
        const Component_5 = o("WAWebFlex.react").FlexColumn;
        const Component_6 = o("WAWebFlex.react").FlexRow;
        const Component_7 = o("WAWebFlex.react").FlexColumn;
        const ee = o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? <Component_6 align="center"><Component_2><div className="x17pgkn5 x1sa5p1d">{m.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: x,
            size: 32
        })}</div></Component_2><Component_5><Component_3>{J}</Component_3><Component_4>{Z}</Component_4></Component_5></Component_6> : <><div className="x17pgkn5 x1sa5p1d">{m.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: x,
            size: 32
        })}</div><Component_7><div>{J}</div>{Z}</Component_7></>;
        const te = I ? s._("Added") : s._("Add");
        const Component_8 = r("WDSButton.react");
        return <div {...babelHelpers.extends({}, (c || (c = r("stylex"))).props(h.mentionsResult, g.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor8, selected === true && h.mentionsResultSelected), {
            role: "button",
            tabIndex: 0,
            onClick: G,
            onKeyDown: function(t) {
                if (t.key === "Enter" || t.key === " ") {
                    G(t);
                }
            },
            "data-testid": "non-participant-mention-list-item",
            children: [
                ee,
                <div className="xvc5jky x78zum5 x6s0dn4 x1j8ymqv"><Component_8 variant="borderless" type="default" size="small" label={te} onPress={G} loading={loading} disabled={I}/></div>
            ]
        })}/>;
    }
    k.displayName = `${k.name} [from ${i.id}]`;
    l.UserResult = C;
    l.GroupResult = v;
    l.MentionAllResult = E;
    l.NonParticipantUserResult = k;
}, 226);