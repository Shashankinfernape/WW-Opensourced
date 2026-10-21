__d("WAWebStatusMentionRenderMsg.react", [
    "fbt",
    "WAWebChatContactUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebMediaThumbnail.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebStatusGatingUtils",
    "WAWebStatusMediaMsgUtils",
    "WAWebStatusMentionFormatMsgText",
    "WAWebStatusMsgLookup",
    "WAWebStatusQuotedFlowLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnsupportedMessage",
    "WAWebUserPrefsMeUser",
    "WAWebWidFormat",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ chat, displayAuthor, msg }) {
        const i = msg.safe();
        const fromMe = i.id.fromMe;
        const c = i.subtype === "status_group_mention_message";
        const _ = r("WAWebStatusMentionFormatMsgText")({
            msg,
            options: {}
        });
        let f;
        if (fromMe) {
            f = o("WAWebUserPrefsMeUser").getMaybeMeLidUser() ?? o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        } else {
            if (c) {
                f = i.id.participant;
            } else {
                f = chat.id;
            }
        }
        const msg_quotedStanzaID = msg.quotedStanzaID;
        if (f == null || !o("WAWebStatusGatingUtils").isStatusMentionMessageEnabled()) {
            return u.jsx(r("WAWebUnsupportedMessage"), {
                msg: i,
                displayAuthor,
                hideUpdateButton: true
            });
        }
        const y = fromMe ? s._("Your status") : s._("{name}'s status", [
            s._param("name", <D3 posterWid={f} canShowSelfChosenName={o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(chat)}/>)
        ]);
        function C() {
            if (!(f == null || msg_quotedStanzaID == null)) {
                const e = o("WAWebStatusMsgLookup").findStatusMsgByStanzaId(f, msg_quotedStanzaID);
                if (e == null) {
                    onMsgNotFound();
                    return;
                }
                const Component = o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable;
                o("WAWebModalManager").ModalManager.openMedia(<Component status={e.statusModel} msgKey={e.msg.id} onMsgNotFound={onMsgNotFound} onClose={function() {
                    return o("WAWebModalManager").ModalManager.closeMedia();
                }}/>, {
                    transition: "quoted-status-modal"
                });
            }
        }
        const Component = r("WAWebMessageTextBubble.react");
        return <Component msgKey={i.id} displayAuthor={displayAuthor}><div className="x78zum5 x1q0g3np x6s0dn4 xbrszos xea3l6g x18isctg x2q3nzr x1bu39yj x6ikm8r x10wlt62 x1198e8h x1aorv3j x13m54ha xw01apr x1ypdohk" onClick={C} onKeyDown={function(t) {
            if (t.key === "Enter" || t.key === " ") {
                t.preventDefault();
                C();
            }
        }} data-testid="status_mention_msg_bubble" role="button" tabIndex={0}><div className="x78zum5 xdt5ytf x1iyjqo2 x123j3cw xde1mab x1ykpatu x12w63v0 xeuugli x6ikm8r x10wlt62"><div className="x1nxh6w3 x1s688f x14ug900 x17fgdl5 x6ikm8r x10wlt62 xlyipyv xuxw1ft">{y}</div><span className="x190qgfh xhslqc4 x1xxsxie x6ikm8r x10wlt62 xlyipyv x104kibb x1h7i4cw x1ua5tub">{_}</span></div><M7Component statusPosterWid={f} quotedStanzaID={msg_quotedStanzaID}/></div>{u.jsx(r("WAWebMessageSpacerText.react"), {
            msgKey: msg.id
        })}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function D3(e) {
        const t = o("react-compiler-runtime").c(17);
        const { canShowSelfChosenName, posterWid } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebFrontendContactGetters").getIsMyContact,
                o("WAWebContactGetters").getNotifyName,
                o("WAWebFrontendContactGetters").getFormattedUser
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebContactValues").useOptionalContactValues(posterWid, a);
        let l;
        let s;
        let c;
        let d;
        if (t[1] !== canShowSelfChosenName || t[2] !== i || t[3] !== posterWid) {
            d = Symbol.for("react.early_return_sentinel");
            e: {
                const m = posterWid == null ? null : o("WAWebContactCollection").ContactCollection.get(posterWid);
                if (m == null || i == null) {
                    let p;
                    if (t[8] !== posterWid) {
                        p = o("WAWebWidFormat").widToFormattedUser(posterWid);
                        t[8] = posterWid;
                        t[9] = p;
                    } else {
                        p = t[9];
                    }
                    d = p;
                    break e;
                }
                const _ = i[0];
                const f = i[1];
                const g = i[2];
                s = f;
                l = g;
                c = canShowSelfChosenName && !_ && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(m);
            }
            t[1] = canShowSelfChosenName;
            t[2] = i;
            t[3] = posterWid;
            t[4] = l;
            t[5] = s;
            t[6] = c;
            t[7] = d;
        } else {
            l = t[4];
            s = t[5];
            c = t[6];
            d = t[7];
        }
        if (d !== Symbol.for("react.early_return_sentinel")) {
            return d;
        }
        if (!c) {
            return l;
        }
        let y;
        if (t[10] !== s) {
            y = o("WAWebChatContactUtils").getFormattedNotifyName(s);
            t[10] = s;
            t[11] = y;
        } else {
            y = t[11];
        }
        let C;
        if (t[12] !== s) {
            C = o("WAWebChatContactUtils").getAccessibleNotifyName(s);
            t[12] = s;
            t[13] = C;
        } else {
            C = t[13];
        }
        let b;
        if (t[14] !== y || t[15] !== C) {
            b = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: y,
                ariaLabel: C
            });
            t[14] = y;
            t[15] = C;
            t[16] = b;
        } else {
            b = t[16];
        }
        return b;
    }
    function M7Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const { quotedStanzaID, statusPosterWid } = e;
        let i;
        if (t[0] !== quotedStanzaID || t[1] !== statusPosterWid) {
            i = statusPosterWid != null && quotedStanzaID != null ? o("WAWebStatusMediaMsgUtils").findStatusMediaMsg(statusPosterWid, quotedStanzaID) : null;
            t[0] = quotedStanzaID;
            t[1] = statusPosterWid;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        if (l == null) {
            return null;
        }
        let s;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            s = {
                className: "xjp7ctv"
            };
            t[3] = s;
        } else {
            s = t[3];
        }
        const c = l.id;
        let containerClassName;
        let childClassName;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            containerClassName = "x2lah0s x1fxk84t x1dnml7z x6ikm8r x10wlt62 xea3l6g x18isctg";
            childClassName = "xh8yej3 x5yr21d x18d0r48 x1xsqp64";
            t[4] = containerClassName;
            t[5] = childClassName;
        } else {
            containerClassName = t[4];
            childClassName = t[5];
        }
        let p;
        if (t[6] !== l.id) {
            p = <div {...babelHelpers.extends({
                "data-testid": "status_mention_thumbnail"
            }, s, {
                children: u.jsx(r("WAWebMediaThumbnail.react"), {
                    msgKey: c,
                    containerClassName,
                    childClassName
                })
            })}/>;
            t[6] = l.id;
            t[7] = p;
        } else {
            p = t[7];
        }
        return p;
    }
    function onMsgNotFound() {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: s._("Status update not found")
        }));
    }
    l.default = c;
}, 226);