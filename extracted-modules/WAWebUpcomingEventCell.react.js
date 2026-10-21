__d("WAWebUpcomingEventCell.react", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiParse",
    "WAWebBoolFunc",
    "WAWebCallLogEntryChatImage.react",
    "WAWebChatCell.react",
    "WAWebEmojiText.react",
    "WAWebEventResponseCollection",
    "WAWebFlex.react",
    "WAWebFormatEventDateString",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebTag.react",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSButton.react",
    "WDSFontTokenStyles",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocamFilled.react",
    "WDSText.react",
    "cr:17104",
    "cr:9382",
    "react",
    "useWAWebActiveSelection",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = n("cr:17104") ?? {};
    const p_handleClickCallLink = p.handleClickCallLink;
    function f(e) {
        let i;
        const { eventMessage, lobbyEntryPointType, onClick } = e;
        const f = r("useWAWebActiveSelection")(e.active, eventMessage.id.toString());
        const g = f[0];
        const h = f[1];
        const y = function(t) {
            t.stopPropagation();
            t.preventDefault();
        };
        const C = o("WAWebFrontendMsgGetters").getChat(eventMessage);
        const b = o("useWAWebMsgValues").useMsgValues(eventMessage.id, [
            (i = o("WAWebMsgGetters")).getId,
            i.getEventName,
            i.getEventStartTime,
            i.getEventEndTime,
            i.getEventJoinLink,
            i.getEventIsScheduledCall
        ]);
        const v = b[0];
        const S = b[1];
        const R = b[2];
        const L = b[3];
        const E = b[4];
        const k = b[5];
        const I = o("WAWebFormatEventDateString").getEventDateStringFor(R, L);
        const T = (eventMessage)=>{
            try {
                const n = o("WAWebEventResponseCollection").EventResponseCollection.getModelsArray();
                const r = n.filter((e)=>e.parentMsgKey?.equals(eventMessage.id));
                const a = r.find((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e.sender));
                return a?.eventResponse ?? o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN;
            } catch (e) {
                return o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN;
            }
        };
        const D = ()=>{
            const e = o("WAWebMsgGetters").getIsSentByMe(eventMessage);
            if (e) {
                return {
                    text: s._("Creator"),
                    theme: o("WAWebTag.react").TagTheme.Primary
                };
            }
            const t = T(eventMessage);
            if (t === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING) {
                return {
                    text: s._("Going"),
                    theme: o("WAWebTag.react").TagTheme.Primary
                };
            }
            if (t === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE) {
                return {
                    text: s._("Maybe"),
                    theme: o("WAWebTag.react").TagTheme.Secondary
                };
            }
            if (t === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING) {
                return {
                    text: s._("Not going"),
                    theme: o("WAWebTag.react").TagTheme.Error
                };
            }
            return {
                text: s._("Not responded"),
                theme: o("WAWebTag.react").TagTheme.Secondary
            };
        };
        const x = o("WATimeUtils").unixTime();
        const $ = o("WAWebABProps").getABPropConfigValue("schedule_call_show_join_button_time_interval_mins") ?? 15;
        const P = R != null && x >= R - $ * 60;
        const N = L != null && x > L;
        const M = T(eventMessage);
        const w = M === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING;
        const A = P && !N && !w && (E != null || k);
        const F = function(t) {
            t.stopPropagation();
            t.preventDefault();
            if (!!A && E != null) {
                try {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "UpcomingEventCell: handleJoinEvent: joining call link ",
                        ""
                    ])), E);
                    const e = o("WAWebApiParse").parseAPICmd(E);
                    if (e.resultType === "CALL_LINK") {
                        let r = p_handleClickCallLink;
                        if (r == null && n("cr:9382") != null) {
                            r = n("cr:9382").handleClickCallLink;
                        }
                        r?.(e, lobbyEntryPointType ?? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.UPCOMING_SCHEDULE_CALL);
                    }
                } catch (e) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UpcomingEventCell: Failed to join event via call link"
                    ]))).sendLogs("voip-upcoming-event-cell-join-call-link-error");
                }
            }
        };
        const O = m.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: S,
            direction: "auto",
            ellipsify: true,
            xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body1Emphasized
        });
        const B = D();
        const Component = r("WDSText.react");
        const Component_1 = r("WDSText.react");
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        const secondary = <Component_2 rowGap={4}><Component type="Body2" colorName="contentDeemphasized">{m.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: C.formattedTitle,
            direction: "auto",
            ellipsify: true
        })}</Component><Component_1 type="Body2" colorName="contentDeemphasized">{I}</Component_1></Component_2>;
        const q = E?.includes("/video/") ?? false;
        const Component_3 = r("WDSButton.react");
        const Component_4 = o("WAWebTag.react").Tag;
        const detail = A ? <Component_3 label={s._("Join")} Icon={r(q ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react")} variant="filled" onPress={F}/> : <Component_4 theme={B.theme} testid={`upcoming-event-rsvp-tag-${v.id}`}>{B.text}</Component_4>;
        const V = function({ target }) {
            if (!(target instanceof HTMLElement && target.closest("button") != null)) {
                onClick();
            }
        };
        const Component_5 = r("WAWebChatCell.react");
        const Component_6 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_6 handlers={{
            enter: V,
            space: V
        }} onFocus={y} ref={g}><Component_5 contextEnabled={o("WAWebBoolFunc").returnFalse} active={h} image={m.jsx(r("WAWebCallLogEntryChatImage.react"), {
            msg: eventMessage
        })} primary={O} secondary={secondary} detail={detail} onClick={onClick} testid={`calls-tab-upcoming-event-cell-${v.id}`} className="xdmi676 x1qafhyn x16ovd2e x12xbjc7"/></Component_6>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.default = f;
}, 226);