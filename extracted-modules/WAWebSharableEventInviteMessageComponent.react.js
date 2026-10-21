__d("WAWebSharableEventInviteMessageComponent.react", [
    "fbt",
    "WAWebApiParse",
    "WAWebDisplayType",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebFormatEventDateString",
    "WAWebFrontendMsgGetters",
    "WAWebGoogleCalendarLink",
    "WAWebJoinEventCallAction",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebOpenSharableEventInviteNotSupportedModalAction",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventInviteCoerceTimestampSeconds",
    "WAWebUnstyledButton.react",
    "WAWebVoipGatingUtils",
    "WDSFontTokenStyles",
    "WDSIconIcCalendarMonth.react",
    "react",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useMemo = u.useMemo;
    const m = {
        deepContainer: {
            cursor: "xmper1u",
            width: "x10rsq8x",
            position: "x1n2onr6",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            $$css: true
        },
        contentBody: {
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "x1nzty39",
            paddingInlineStart: "x12w63v0",
            paddingBottom: "xv6tirj",
            $$css: true
        },
        icon: {
            color: "x1v5yvga",
            $$css: true
        },
        body: {
            width: "xh8yej3",
            $$css: true
        },
        flex: {
            display: "x78zum5",
            $$css: true
        },
        unstyledButton: {
            width: "xh8yej3",
            textAlign: "x1yc453h",
            $$css: true
        },
        dateRow: {
            color: "xhslqc4",
            paddingTop: "x1gxa6cn",
            $$css: true
        }
    };
    function p({ chat, displayAuthor, displayType, msgKey, quotedMsg, trusted }) {
        let n;
        const f = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (n = o("WAWebFrontendMsgGetters")).getSharableEventInviteCallLink,
            n.getSharableEventInviteCaption,
            n.getSharableEventInviteEndTime,
            n.getSharableEventInviteIsCanceled,
            n.getSharableEventInviteJpegThumbnail,
            n.getSharableEventInviteStartTime,
            n.getSharableEventInviteTitle
        ]);
        const callLink = f[0];
        const h = f[1];
        const y = f[2];
        const C = f[3];
        const b = f[4];
        const v = f[5];
        const S = f[6];
        const R = o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled();
        const L = r("WAWebSharableEventInviteCoerceTimestampSeconds")(v);
        const E = r("WAWebSharableEventInviteCoerceTimestampSeconds")(y);
        const k = L != null && o("WAWebSharableEventGatingUtils").isSharableEventInviteDatetimeEnabled();
        const I = R && k && C !== true && !o("WAWebSharableEventGatingUtils").isAddToCalendarHiddenByEventTime(L, E) && o("WAWebSharableEventGatingUtils").isSharableEventAddToCalendarEnabled(o("WAWebSharableEventGatingUtils").SharableEventAddToCalendarEntryPoint.MessageBubble);
        const T = s._("Add to calendar");
        const D = R && k && callLink != null && callLink !== "" && o("WAWebVoipGatingUtils").isCallingEnabled();
        const x = u_useMemo(function() {
            if (!D || callLink == null) {
                return null;
            }
            return o("WAWebApiParse").parseCallLink(callLink)?.data.callType ?? null;
        }, [
            D,
            callLink
        ]);
        const $ = s._("Join call");
        const P = u_useMemo(function() {
            if (b == null || b.byteLength === 0) {
                return null;
            }
            const e = new Blob([
                b
            ], {
                type: "image/jpeg"
            });
            return URL.createObjectURL(e);
        }, [
            b
        ]);
        const N = quotedMsg ? <div className="x12xbjc7">{quotedMsg}</div> : null;
        const M = s._("View event");
        const w = h != null && h !== "";
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = o("WAWebFlex.react").FlexRow;
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        const Component_3 = o("WAWebFlex.react").FlexRow;
        const Component_4 = r("WAWebMessageDeeperContainer.react");
        const Component_5 = r("WAWebUnstyledButton.react");
        const Component_6 = r("WAWebMessageTextBubble.react");
        return <Component_6 testid="sharable_event_invite_msg_bubble" msgKey={msgKey} displayType={displayType} displayAuthor={displayAuthor} hideMeta useFixedWidth={!o("WAWebDisplayType").isWideDisplay(displayType)}>{N}<Component_5 testid="sharable_event_invite_bubble_button" disabled={C === true} onClick={o("WAWebOpenSharableEventInviteNotSupportedModalAction").openSharableEventInviteNotSupportedModal} title={M} xstyle={m.unstyledButton}><Component_4 xstyle={m.deepContainer} outgoingMsg={msgKey.fromMe}>{P != null ? <img src={P} alt="" data-testid="sharable_event_invite_cover_image" className="xh8yej3 x186iv6y xl1xv1r x1lliihq"/> : null}<Component_3 xstyle={m.contentBody} align="center"><div className="x78zum5 x6s0dn4 xl56j7k x2lah0s x14qfxbe xc9qbxq xqf2s3x x1ew7x2d x1c9tyrk xeusxvb x1pahc9y x1ertn4p" data-testid="sharable_event_invite_icon">{c.jsx(r("WDSIconIcCalendarMonth.react"), {
            iconXstyle: m.icon
        })}</div><Component_2 xstyle={m.body} padding={2}>{c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: S,
            direction: "auto",
            selectable: true,
            xstyle: [
                o("WDSFontTokenStyles").WDSFontTokenStyles.Body2Emphasized,
                m.flex
            ]
        })}{k && L != null ? <Component xstyle={m.dateRow}><span {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3), {
            "data-testid": "sharable_event_invite_date_row",
            children: o("WAWebFormatEventDateString").getEventDateStringFor(L, E)
        })}/></Component> : null}{x != null ? <Component_1 xstyle={m.dateRow}><span {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3), {
            "data-testid": "sharable_event_invite_call_type_row",
            children: x === "video" ? s._("WhatsApp video call") : s._("WhatsApp audio call")
        })}/></Component_1> : null}<div className="x10l6tqk x9q68il xajswfj">{c.jsx(o("WAWebMessageMeta.react").Meta, {
            msgKey
        })}</div></Component_2></Component_3></Component_4></Component_5>{w ? <div className="x1nzty39 x12xbjc7 x12w63v0 x1tiyuxx" data-testid="sharable_event_invite_caption">{c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: h,
            direction: "auto",
            selectable: true,
            xstyle: [
                o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
                m.flex
            ]
        })}</div> : null}<div {...babelHelpers.extends({}, {
            0: {
                className: "x16ldp7u"
            },
            1: {
                className: "x1ok221b"
            }
        }[!!w << 0], {
            children: c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                hideDivider: !w,
                theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.EVENT_CREATION,
                items: [
                    D && callLink != null ? {
                        label: $,
                        title: $,
                        onClick: function() {
                            o("WAWebJoinEventCallAction").joinEventCall({
                                callLink,
                                chat
                            });
                        },
                        testid: "sharable_event_invite_join_call_button"
                    } : {
                        label: M,
                        title: M,
                        onClick: o("WAWebOpenSharableEventInviteNotSupportedModalAction").openSharableEventInviteNotSupportedModal,
                        disabled: C === true,
                        testid: "sharable_event_invite_view_event_button"
                    }
                ].concat(I && L != null ? [
                    {
                        label: T,
                        title: T,
                        onClick: function() {
                            o("WAWebExternalLink.react").openExternalLink(r("WAWebGoogleCalendarLink")({
                                title: S,
                                description: h,
                                startTimeUnixSeconds: L,
                                endTimeUnixSeconds: E
                            }));
                        },
                        testid: "sharable_event_invite_add_to_calendar_button"
                    }
                ] : [])
            })
        })}/></Component_6>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.SharableEventInvite = p;
}, 226);