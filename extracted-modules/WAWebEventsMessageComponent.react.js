__d("WAWebEventsMessageComponent.react", [
    "fbt",
    "WALogger",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCastToEventCreationMsg",
    "WAWebChatThemeModeContext",
    "WAWebContactCollection",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebEventInfoFlowLoadable",
    "WAWebEventUtils",
    "WAWebEventsCreateEventModalFlowLoadable",
    "WAWebEventsGatingUtils",
    "WAWebEventsRSVPPopup.react",
    "WAWebExpandableText.react",
    "WAWebFacePile.react",
    "WAWebFbtIntlList",
    "WAWebFlex.react",
    "WAWebFormatEventDateString",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebJoinEventCallAction",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSendEventResponseMsgAction",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipGatingUtils",
    "WDSFontTokenStyles",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcExpandMore.react",
    "WDSIconIcWarning.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebEventResponses",
    "useWAWebIsChatAcp2Restricted",
    "useWAWebMsgValues",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { createRef, useContext, useRef } = m;
    const g = {
        marginBlock1: {
            marginTop: "xvijh9v",
            marginBottom: "x1ty9z65",
            $$css: true
        },
        paddingInlineStart14: {
            paddingInlineStart: "x1onr9mi",
            $$css: true
        }
    };
    const h = {
        unstyledButton: {
            width: "xh8yej3",
            textAlign: "x1yc453h",
            $$css: true
        },
        deepContainer: {
            cursor: "xmper1u",
            width: "x10rsq8x",
            position: "x1n2onr6",
            display: "x78zum5",
            $$css: true
        },
        icon: {
            color: "x1v5yvga",
            $$css: true
        },
        iconDisabled: {
            color: "xshy2n",
            $$css: true
        },
        iconThemed: {
            color: "x14ug900",
            $$css: true
        },
        iconContainer: {
            width: "x14qfxbe",
            height: "xc9qbxq",
            backgroundColor: "x4wrhlh",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        iconContainerVibrantOutgoing: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        iconContainerThemed: {
            backgroundColor: "x1ew7x2d",
            $$css: true
        },
        eventDetailText: {
            color: "xhslqc4",
            $$css: true
        },
        facepileBorderIncoming: {
            borderTopColor: "x1dla3ec",
            borderInlineEndColor: "x1b76cva",
            borderBottomColor: "xoht4n3",
            borderInlineStartColor: "xd1k3aj",
            $$css: true
        },
        facepileBorderOutgoing: {
            borderTopColor: "x1dla3ec",
            borderInlineEndColor: "x1b76cva",
            borderBottomColor: "xoht4n3",
            borderInlineStartColor: "xd1k3aj",
            $$css: true
        },
        invalidEventWarning: {
            alignItems: "x6s0dn4",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            $$css: true
        },
        invalidEventWarningBorderReceiver: {
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            $$css: true
        },
        invalidEventWarningBorderSender: {
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            $$css: true
        },
        warningIcon: {
            color: "x1kt8ij1",
            $$css: true
        },
        fullWidth: {
            width: "xh8yej3",
            $$css: true
        },
        flex: {
            display: "x78zum5",
            $$css: true
        }
    };
    function y(e) {
        if (e != null && e.includes("/video/")) {
            return s._("WhatsApp video call");
        }
        if (e != null && e.includes("/voice/")) {
            return s._("WhatsApp voice call");
        }
    }
    function C({ eventResponse, isEventCanceled, isSentByMe, showJoinCall }) {
        let i;
        if (isEventCanceled) {
            i = s._("Event cancelled");
        } else if (showJoinCall) {
            i = s._("Join call");
        } else if (isSentByMe) {
            i = s._("Edit event");
        } else if (eventResponse === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING) {
            i = s._("Going");
        } else if (eventResponse === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE) {
            i = s._("Maybe");
        } else if (eventResponse === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING) {
            i = s._("Not going");
        } else {
            i = s._("Respond");
        }
        return i;
    }
    function b({ eventDescription, eventEndTime, eventLocation, eventName, eventStartTime }, t) {
        let c;
        if (eventLocation?.name != null || eventLocation?.address != null) {
            c = eventLocation.name ?? eventLocation.address;
        }
        const m = r("WAWebFbtIntlList")(r("compactMap")(t, function(e) {
            const t = o("WAWebContactCollection").ContactCollection.get(e.sender);
            if (t != null) {
                return o("WAWebFrontendContactGetters").getFormattedName(t);
            }
        }), r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA);
        let p;
        if (t.length > 0) {
            p = s._("_j{\"*\":\"{number} attendees {event-attendees-names-readout}\",\"_1\":\"1 attendee {event-attendees-names-readout}\"}", [
                s._plural(t.length, "number"),
                s._param("event-attendees-names-readout", m)
            ]);
        }
        const _ = o("WAWebFormatEventDateString").getEventDateStringFor(eventStartTime, eventEndTime);
        return s._("Event: {event-name} Description: {event-description}{event-time}. {event-location}{event-attendees}", [
            s._param("event-name", eventName),
            s._param("event-description", eventDescription != null ? `${eventDescription}.` : ""),
            s._param("event-time", _),
            s._param("event-location", c != null ? `${c}.` : ""),
            s._param("event-attendees", p)
        ]);
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    function v(e) {
        const i = o("react-compiler-runtime").c(93);
        const { chat, displayAuthor, displayType, msgKey, quotedMsg } = e;
        let T;
        if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
            let D;
            T = [
                (D = o("WAWebMsgGetters")).getEventName,
                D.getEventStartTime,
                D.getEventEndTime,
                D.getEventLocation,
                D.getEventJoinLink,
                D.getEventInvalidated,
                D.getIsEventCanceled,
                D.getEventIsScheduledCall,
                D.getIsSentByMe,
                D.getEventDescription,
                D.getInitialPageSize,
                o("WAWebFrontendMsgGetters").getRtl
            ];
            i[0] = T;
        } else {
            T = i[0];
        }
        const x = o("useWAWebMsgValues").useMsgValues(msgKey, r("WAWebCastToEventCreationMsg"), T);
        const eventName = x[0];
        const eventStartTime = x[1];
        const eventEndTime = x[2];
        const eventLocation = x[3];
        const callLink = x[4];
        const eventInvalidated = x[5];
        const isEventCanceled = x[6];
        const O = x[7];
        const B = x[8];
        const eventDescription = x[9];
        const textLimit = x[10];
        const U = x[11];
        const V = r("useWAWebUIM")();
        const H = useContext(r("WAWebChatThemeModeContext"));
        const { isThemed, isVibrant } = H;
        const j = o("useWAWebEventResponses").useEventResponses(msgKey);
        const K = r("useWAWebIsChatAcp2Restricted")(chat);
        let Q;
        if (i[1] !== eventName) {
            Q = eventName.slice(0, o("WAWebEventsGatingUtils").getEventsNameLengthLimit() ?? 100);
            i[1] = eventName;
            i[2] = Q;
        } else {
            Q = i[2];
        }
        const Y = Q;
        const isEventPassed = o("WAWebEventUtils").shouldShowEventAsPassed(eventStartTime, eventEndTime);
        const Z = isEventCanceled || isEventPassed;
        const ee = eventInvalidated || Z;
        const te = isVibrant && B;
        const ne = d.jsx(r("WDSIconIcCalendarMonth.react"), {
            xstyle: [
                h.icon,
                ee && h.iconDisabled,
                !ee && isThemed && h.iconThemed
            ]
        });
        let re;
        if (i[3] === Symbol.for("react.memo_cache_sentinel")) {
            re = createRef();
            i[3] = re;
        } else {
            re = i[3];
        }
        const controlPopupRef = re;
        const aeRef = useRef(null);
        if (eventName == null) {
            return null;
        }
        let ie;
        if (i[4] !== chat || i[5] !== msgKey || i[6] !== V) {
            ie = function() {
                const e = k(msgKey);
                if (e != null) {
                    const Component = o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable;
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                        descriptorType: "event_info",
                        chat,
                        msg: e
                    } : <Component key={`event-info-drawer-${e.id.toString()}`} chat={chat} msg={e} onEnd={o("WAWebDrawerManager").closeDrawerRight}/>, {
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                        uim: V
                    });
                }
            };
            i[4] = chat;
            i[5] = msgKey;
            i[6] = V;
            i[7] = ie;
        } else {
            ie = i[7];
        }
        const le = ie;
        const se = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (showJoinCall) {
                    if (callLink != null) {
                        yield o("WAWebJoinEventCallAction").joinEventCall({
                            callLink,
                            chat
                        });
                    }
                } else if (B) {
                    const existingEventMsg = k(msgKey);
                    if (existingEventMsg == null) {
                        return;
                    }
                    o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebEventsCreateEventModalFlowLoadable").EventsCreateEventModalFlowLoadable, {
                        preselectedChat: chat,
                        prefilledData: {
                            eventName,
                            eventDescription: existingEventMsg.eventDescription,
                            eventStartTime: o("WAWebEventUtils").eventTimeToUnixTime(eventStartTime),
                            eventEndTime: eventEndTime != null ? o("WAWebEventUtils").eventTimeToUnixTime(eventEndTime) : undefined,
                            eventLocationName: eventLocation?.name ?? eventLocation?.address,
                            eventCallType: o("WAWebEventUtils").getEventCallLinkType(callLink)
                        },
                        existingEventMsg,
                        showLocationField: !O
                    }));
                } else {
                    controlPopupRef.current?.open(e);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        let ue;
        if (i[8] !== msgKey) {
            ue = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = k(msgKey);
                    if (t != null) {
                        o("WAWebSendEventResponseMsgAction").sendEventResponseMsg(e, t);
                    }
                });
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t;
            })();
            i[8] = msgKey;
            i[9] = ue;
        } else {
            ue = i[9];
        }
        const ce = ue;
        let de;
        if (i[10] === Symbol.for("react.memo_cache_sentinel")) {
            de = [
                o("WDSPaddings.stylex").wdsPaddings.paddingVer2,
                h.fullWidth
            ];
            i[10] = de;
        } else {
            de = i[10];
        }
        let me;
        if (i[11] !== U || i[12] !== Y) {
            me = function({ textLimit }) {
                return d.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: Y,
                    dirMismatch: U !== r("WAWebL10N").isRTL(),
                    direction: "auto",
                    selectable: true,
                    textLimit,
                    xstyle: [
                        o("WDSFontTokenStyles").WDSFontTokenStyles.Body1Emphasized,
                        h.flex
                    ]
                });
            };
            i[11] = U;
            i[12] = Y;
            i[13] = me;
        } else {
            me = i[13];
        }
        let pe;
        if (i[14] !== textLimit || i[15] !== me || i[16] !== Y) {
            const Component = o("WAWebExpandableText.react").ExpandableText;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            pe = <Component_1 xstyle={de}><Component text={Y} textLimit={textLimit}>{me}</Component></Component_1>;
            i[14] = textLimit;
            i[15] = me;
            i[16] = Y;
            i[17] = pe;
        } else {
            pe = i[17];
        }
        const _e = pe;
        let fe;
        if (i[18] !== eventEndTime || i[19] !== eventStartTime) {
            fe = o("WAWebFormatEventDateString").getEventDateStringFor(eventStartTime, eventEndTime);
            i[18] = eventEndTime;
            i[19] = eventStartTime;
            i[20] = fe;
        } else {
            fe = i[20];
        }
        const ge = fe;
        let he;
        if (i[21] !== ge || i[22] !== eventStartTime) {
            const Component = o("WAWebFlex.react").FlexRow;
            he = eventStartTime != null ? <Component xstyle={[
                o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
                h.eventDetailText,
                g.marginBlock1
            ]}>{s._("{Event-starttime-string}", [
                s._param("Event-starttime-string", ge)
            ])}</Component> : null;
            i[21] = ge;
            i[22] = eventStartTime;
            i[23] = he;
        } else {
            he = i[23];
        }
        const ye = he;
        let Ce;
        const be = eventLocation?.name ?? eventLocation?.address;
        if (be != null) {
            let ve;
            if (i[24] === Symbol.for("react.memo_cache_sentinel")) {
                ve = [
                    o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
                    h.eventDetailText,
                    h.fullWidth,
                    g.marginBlock1
                ];
                i[24] = ve;
            } else {
                ve = i[24];
            }
            let Se;
            if (i[25] === Symbol.for("react.memo_cache_sentinel")) {
                Se = [
                    h.fullWidth,
                    h.flex
                ];
                i[25] = Se;
            } else {
                Se = i[25];
            }
            let Re;
            if (i[26] !== be) {
                const Component = o("WAWebFlex.react").FlexRow;
                Re = <Component xstyle={ve}>{d.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: be,
                    direction: "auto",
                    selectable: true,
                    xstyle: Se
                })}</Component>;
                i[26] = be;
                i[27] = Re;
            } else {
                Re = i[27];
            }
            Ce = Re;
        }
        let Le;
        let Ee;
        if (i[28] !== callLink) {
            Ee = y(callLink);
            i[28] = callLink;
            i[29] = Ee;
        } else {
            Ee = i[29];
        }
        const ke = Ee;
        if (ke != null) {
            let Ie;
            if (i[30] === Symbol.for("react.memo_cache_sentinel")) {
                Ie = [
                    o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
                    h.eventDetailText,
                    g.marginBlock1
                ];
                i[30] = Ie;
            } else {
                Ie = i[30];
            }
            let Te;
            if (i[31] !== ke) {
                const Component = o("WAWebFlex.react").FlexRow;
                Te = <Component xstyle={Ie}>{ke}</Component>;
                i[31] = ke;
                i[32] = Te;
            } else {
                Te = i[32];
            }
            Le = Te;
        }
        const De = j.find(E);
        const xe = !isEventCanceled && (O || De?.eventResponse === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING && o("WAWebEventUtils").eventIsJoinable(eventStartTime));
        var showJoinCall = callLink != null && xe && o("WAWebVoipGatingUtils").isCallingEnabled();
        const Pe = o("WAWebEventUtils").shouldDisableInteractionForEvent({
            isSentByMe: B,
            isEventCanceled,
            eventInvalidated,
            isEventPassed,
            showJoinCall
        }) || K;
        let Ne;
        if (i[33] !== j || i[34] !== B || i[35] !== msgKey) {
            const Me = j.filter(L);
            Ne = null;
            if (Me.length > 0) {
                const idsOrUrls = Me.sort(R).map(S).slice(0, 3);
                const borderColor = B ? h.facepileBorderOutgoing : h.facepileBorderIncoming;
                let Fe;
                if (i[37] === Symbol.for("react.memo_cache_sentinel")) {
                    Fe = [
                        o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
                        h.eventDetailText,
                        h.fullWidth,
                        g.marginBlock1
                    ];
                    i[37] = Fe;
                } else {
                    Fe = i[37];
                }
                let keyName;
                if (i[38] !== msgKey) {
                    keyName = msgKey.toString();
                    i[38] = msgKey;
                    i[39] = keyName;
                } else {
                    keyName = i[39];
                }
                let Be;
                if (i[40] !== borderColor || i[41] !== idsOrUrls || i[42] !== keyName) {
                    Be = d.jsx(r("WAWebFacePile.react"), {
                        keyName,
                        idsOrUrls,
                        borderColor,
                        faceSize: 18
                    });
                    i[40] = borderColor;
                    i[41] = idsOrUrls;
                    i[42] = keyName;
                    i[43] = Be;
                } else {
                    Be = i[43];
                }
                let We;
                if (i[44] === Symbol.for("react.memo_cache_sentinel")) {
                    We = (u || (u = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart4);
                    i[44] = We;
                } else {
                    We = i[44];
                }
                const qe = s._("_j{\"*\":\"{number-of-participants-going} going\"}", [
                    s._param("number-of-participants-going", Me.length, [
                        0,
                        Me.length
                    ])
                ]);
                let Ue;
                if (i[45] !== qe) {
                    Ue = <div {...babelHelpers.extends({}, We, {
                        children: qe
                    })}/>;
                    i[45] = qe;
                    i[46] = Ue;
                } else {
                    Ue = i[46];
                }
                let Ve;
                if (i[47] !== Be || i[48] !== Ue) {
                    const Component = o("WAWebFlex.react").FlexRow;
                    Ve = <Component xstyle={Fe}>{Be}{Ue}</Component>;
                    i[47] = Be;
                    i[48] = Ue;
                    i[49] = Ve;
                } else {
                    Ve = i[49];
                }
                Ne = Ve;
            }
            i[33] = j;
            i[34] = B;
            i[35] = msgKey;
            i[36] = Ne;
        } else {
            Ne = i[36];
        }
        const He = C({
            eventResponse: De?.eventResponse ?? o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN,
            isSentByMe: B,
            showJoinCall,
            isEventCanceled
        });
        let Ge;
        if (i[50] === Symbol.for("react.memo_cache_sentinel")) {
            Ge = {
                className: "x3nfvp2 x6s0dn4"
            };
            i[50] = Ge;
        } else {
            Ge = i[50];
        }
        let ze;
        if (i[51] === Symbol.for("react.memo_cache_sentinel")) {
            ze = d.jsx(r("WDSIconIcExpandMore.react"), {
                height: 18,
                displayInline: true
            });
            i[51] = ze;
        } else {
            ze = i[51];
        }
        let je;
        if (i[52] !== He) {
            je = <span {...babelHelpers.extends({}, Ge, {
                children: [
                    He,
                    ze
                ]
            })}/>;
            i[52] = He;
            i[53] = je;
        } else {
            je = i[53];
        }
        const Ke = je;
        let Qe;
        if (i[54] !== quotedMsg) {
            Qe = quotedMsg ? <div className="xahult9">{quotedMsg}</div> : null;
            i[54] = quotedMsg;
            i[55] = Qe;
        } else {
            Qe = i[55];
        }
        const Xe = Qe;
        let Ye;
        if (i[56] !== displayType) {
            Ye = o("WAWebDisplayType").isWideDisplay(displayType);
            i[56] = displayType;
            i[57] = Ye;
        } else {
            Ye = i[57];
        }
        let Je;
        if (i[58] !== eventDescription || i[59] !== eventEndTime || i[60] !== eventLocation || i[61] !== eventName || i[62] !== j || i[63] !== eventStartTime) {
            Je = b({
                eventDescription,
                eventEndTime,
                eventLocation,
                eventName,
                eventStartTime
            }, j);
            i[58] = eventDescription;
            i[59] = eventEndTime;
            i[60] = eventLocation;
            i[61] = eventName;
            i[62] = j;
            i[63] = eventStartTime;
            i[64] = Je;
        } else {
            Je = i[64];
        }
        let Ze;
        if (i[65] === Symbol.for("react.memo_cache_sentinel")) {
            Ze = [
                h.deepContainer,
                o("WDSPaddings.stylex").wdsPaddings.padding8,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom12
            ];
            i[65] = Ze;
        } else {
            Ze = i[65];
        }
        const et = te && h.iconContainerVibrantOutgoing;
        const tt = !te && isThemed && h.iconContainerThemed;
        let nt;
        if (i[66] !== et || i[67] !== tt) {
            nt = [
                h.iconContainer,
                et,
                tt
            ];
            i[66] = et;
            i[67] = tt;
            i[68] = nt;
        } else {
            nt = i[68];
        }
        let rt;
        if (i[69] === Symbol.for("react.memo_cache_sentinel")) {
            rt = [
                o("WDSPaddings.stylex").wdsPaddings.paddingStart8,
                h.fullWidth
            ];
            i[69] = rt;
        } else {
            rt = i[69];
        }
        const ot = Ce;
        const at = Le;
        const it = Ne;
        let lt;
        if (i[70] === Symbol.for("react.memo_cache_sentinel")) {
            lt = {
                className: "x10l6tqk x9q68il xy1j3rs"
            };
            i[70] = lt;
        } else {
            lt = i[70];
        }
        let st;
        if (i[71] !== msgKey) {
            st = <div {...babelHelpers.extends({}, lt, {
                children: d.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey
                })
            })}/>;
            i[71] = msgKey;
            i[72] = st;
        } else {
            st = i[72];
        }
        let ut;
        if (i[73] !== Le || i[74] !== Ne || i[75] !== Ce || i[76] !== _e || i[77] !== st || i[78] !== ye) {
            const Component = o("WAWebFlex.react").FlexColumn;
            ut = <Component xstyle={rt} padding={2}>{_e}{ye}{ot}{at}{it}{st}</Component>;
            i[73] = Le;
            i[74] = Ne;
            i[75] = Ce;
            i[76] = _e;
            i[77] = st;
            i[78] = ye;
            i[79] = ut;
        } else {
            ut = i[79];
        }
        let ct;
        if (i[80] !== eventInvalidated || i[81] !== B) {
            const Component = o("WAWebFlex.react").FlexRow;
            ct = eventInvalidated && <Component xstyle={[
                h.invalidEventWarning,
                B ? h.invalidEventWarningBorderSender : h.invalidEventWarningBorderReceiver,
                o("WDSMargins.stylex").wdsMargins.marginTop4,
                o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
                g.paddingInlineStart14,
                o("WDSPaddings.stylex").wdsPaddings.paddingEnd12
            ]}>{d.jsx(r("WDSIconIcWarning.react"), {
                width: 22,
                height: 22,
                iconXstyle: h.warningIcon
            })}<span {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3, o("WDSMargins.stylex").wdsMargins.marginStart8), {
                "data-testid": "invalid-event-bubble-warning",
                children: s._("You can only see event changes made before you left.")
            })}/></Component>;
            i[80] = eventInvalidated;
            i[81] = B;
            i[82] = ct;
        } else {
            ct = i[82];
        }
        const currentResponse = De?.eventResponse;
        let mt;
        if (i[83] !== ce || i[84] !== currentResponse) {
            const Component = r("WAWebEventsRSVPPopup.react");
            mt = <Component currentResponse={currentResponse} onClick={ce} controlPopupRef={controlPopupRef} triggerRef={aeRef}/>;
            i[83] = ce;
            i[84] = currentResponse;
            i[85] = mt;
        } else {
            mt = i[85];
        }
        const pt = showJoinCall || B || isEventCanceled ? He : Ke;
        let _t;
        if (i[86] !== se) {
            _t = function(t) {
                se(t);
            };
            i[86] = se;
            i[87] = _t;
        } else {
            _t = i[87];
        }
        const ft = !showJoinCall && Pe;
        let gt;
        if (i[88] !== He || i[89] !== pt || i[90] !== _t || i[91] !== ft) {
            const Component = o("WAWebMessageBubbleActions.react").BubbleActions;
            gt = <Component ref={aeRef} theme={o("WAWebMessageBubbleActions.react").BubbleActionsTheme.EVENT_CREATION} items={[
                {
                    label: pt,
                    title: He,
                    onClick: _t,
                    disabled: ft,
                    testid: "event-rsvp-respond"
                }
            ]}/>;
            i[88] = He;
            i[89] = pt;
            i[90] = _t;
            i[91] = ft;
            i[92] = gt;
        } else {
            gt = i[92];
        }
        const Component = o("WAWebFlex.react").FlexColumn;
        const Component_1 = r("WAWebMessageDeeperContainer.react");
        const Component_2 = r("WAWebUnstyledButton.react");
        const Component_3 = r("WAWebMessageTextBubble.react");
        return <Component_3 testid="event-creation-msg" msgKey={msgKey} displayType={displayType} displayAuthor={displayAuthor} hideMeta useFixedWidth={!Ye} ariaLabel={Je}>{Xe}<Component_2 onClick={le} xstyle={h.unstyledButton}><Component_1 xstyle={Ze} outgoingMsg={B}><Component xstyle={nt} shrink={0} align="center" justify="center" padding={2}>{ne}</Component>{ut}</Component_1>{ct}</Component_2>{mt}{gt}</Component_3>;
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    function S(e) {
        return e.sender;
    }
    function R(e, t) {
        return t.senderTimestampMs - e.senderTimestampMs;
    }
    function L(e) {
        return e.eventResponse === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING;
    }
    function E(e) {
        return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
    }
    function k(msgKey) {
        const r = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
        if (r == null || r.type !== o("WAWebMsgType").MSG_TYPE.EVENT_CREATION) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[events] event action skipped, message left the collection"
            ])));
            return null;
        }
        return r;
    }
    l.getEventCallString = y;
    l.getEventRespondButtonText = C;
    l.Event = v;
}, 226);