__d("WAWebPollsVoterRow", [
    "WALogger",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebBusinessProfileTypes",
    "WAWebChatCell.react",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebFrontendPollVoteGetters",
    "WAWebGroupAgentProfileRouting",
    "WAWebOpenGroupAgentProfile.react",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteModel",
    "WAWebTextSizeUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
    "useWAWebPollVoteValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = {
        marginInlineStart9: {
            marginInlineStart: "x1y3qizg",
            $$css: true
        }
    };
    let m = 0;
    function P4Component(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_vote = e.vote;
        const timestamp = e_vote.time * 1000;
        let a;
        if (t[0] !== timestamp) {
            a = <Y5Component timestamp={timestamp}/>;
            t[0] = timestamp;
            t[1] = a;
        } else {
            a = t[1];
        }
        const fallbackNode = a;
        let l;
        if (t[2] !== fallbackNode || t[3] !== e_vote) {
            l = <_ vote={e_vote} fallbackNode={fallbackNode}/>;
            t[2] = fallbackNode;
            t[3] = e_vote;
            t[4] = l;
        } else {
            l = t[4];
        }
        const s = l;
        const u = e_vote.contact != null ? fallbackNode : null;
        let d;
        if (t[5] !== s || t[6] !== u || t[7] !== e_vote.id) {
            d = <C primary={s} primaryDetail={null} id={e_vote.id} secondary={u}/>;
            t[5] = s;
            t[6] = u;
            t[7] = e_vote.id;
            t[8] = d;
        } else {
            d = t[8];
        }
        return d;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(3);
        const { fallbackNode, vote } = e;
        const vote_contact = vote.contact;
        if (vote_contact == null) {
            return fallbackNode;
        }
        let i;
        if (t[0] !== vote_contact || t[1] !== fallbackNode) {
            i = <F11 contact={vote_contact} fallbackNode={fallbackNode}/>;
            t[0] = vote_contact;
            t[1] = fallbackNode;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    function F11(e) {
        const t = o("react-compiler-runtime").c(6);
        const { contact, fallbackNode } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebFrontendContactGetters").getFormattedName,
                o("WAWebFrontendContactGetters").getIsMyContact,
                o("WAWebContactGetters").getIsMe
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebContactValues").useContactValues(contact.id, a);
        const formattedUserName = i[0];
        const s = i[1];
        const u = i[2];
        let d;
        if (t[1] !== fallbackNode || t[2] !== formattedUserName || t[3] !== u || t[4] !== s) {
            d = s || u ? <H5 formattedUserName={formattedUserName} accessibleUserName={null}/> : fallbackNode;
            t[1] = fallbackNode;
            t[2] = formattedUserName;
            t[3] = u;
            t[4] = s;
            t[5] = d;
        } else {
            d = t[5];
        }
        return d;
    }
    function G4Component({ onOpenContactInfo, vote }) {
        let n;
        const l = o("useWAWebPollVoteValues").usePollVoteValues(vote.id, [
            o("WAWebFrontendPollVoteGetters").getSenderObj,
            o("WAWebPollVoteGetters").getTimestamp,
            o("WAWebFrontendPollVoteGetters").getParentMsg
        ]);
        const s = l[0];
        const timestamp = l[1];
        const d = l[2];
        const p = o("useWAWebContactValues").useContactValues(s.id, [
            (n = o("WAWebContactGetters")).getId,
            o("WAWebFrontendContactGetters").getFormattedName,
            n.getNotifyName,
            n.getVerifiedLevel,
            n.getIsBusiness,
            n.getVerifiedName,
            n.getIsMe
        ]);
        const _ = p[0];
        const formattedUserName = p[1];
        const g = p[2];
        const b = p[3];
        const v = p[4];
        const S = p[5];
        const R = p[6];
        const L = o("WAWebFrontendMsgGetters").getChat(d.unsafe());
        const E = onOpenContactInfo != null && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(L) && !R && o("WAWebABProps").getABPropConfigValue("enable_poll_results_contact_info_entry_point");
        const k = E ? function() {
            const t = ++m;
            if (!(o("WAWebChatGetters").getIsGroup(L) && o("WAWebOpenGroupAgentProfile.react").openGroupAgentProfile(o("WAWebGroupAgentProfileRouting").getGroupAgentProfileDestination(_, L), s, L, "pollVoterRow"))) {
                const n = o("WAWebChatGetters").getIsGroup(L) ? o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(_, "poll_voter_row") : _;
                if (n != null) {
                    o("WAWebFindChatAction").findOrCreateLatestChat(n, "pollVoterRow").then(({ chat })=>{
                        if (t === m) {
                            if (onOpenContactInfo != null) {
                                onOpenContactInfo(chat);
                            }
                        }
                    }).catch(()=>o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[polls] failed to open voter contact info"
                        ]))).sendLogs("polls-voter-open-contact-info"));
                }
            }
        } : null;
        const I = r("useWAWebContactFormattedUsernameOrPhoneByChat")(L, s);
        const I_formattedUsernameOrPhone = I.formattedUsernameOrPhone;
        const D = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(L);
        const x = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(s) && (D || v && b === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH);
        let $;
        let primaryDetail;
        if (x) {
            $ = <H5 accessibleUserName={o("WAWebChatContactUtils").getAccessibleNotifyName(g)} formattedUserName={o("WAWebChatContactUtils").getFormattedNotifyName(g)}/>;
            primaryDetail = c.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: I_formattedUsernameOrPhone
            });
        } else if (v && S != null) {
            $ = <H5 accessibleUserName={o("WAWebChatContactUtils").getAccessibleNotifyName(S)} formattedUserName={o("WAWebChatContactUtils").getFormattedNotifyName(S)}/>;
            primaryDetail = c.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: I_formattedUsernameOrPhone
            });
        } else {
            $ = <H5 accessibleUserName={undefined} formattedUserName={formattedUserName}/>;
            primaryDetail = null;
        }
        return <C id={_} onClick={k} primary={$} primaryDetail={primaryDetail} secondary=<Y5Component timestamp={timestamp}/>/>;
    }
    G4Component.displayName = `${G4Component.name} [from ${i.id}]`;
    function H5(e) {
        const t = o("react-compiler-runtime").c(4);
        const { accessibleUserName, formattedUserName } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = o("WAWebTextSizeUtils").getWAWebTextSizeStyles();
            t[0] = a;
        } else {
            a = t[0];
        }
        const a_pollDetailsOptionTextSize = a.pollDetailsOptionTextSize;
        let s;
        if (t[1] !== accessibleUserName || t[2] !== formattedUserName) {
            s = c.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: formattedUserName,
                ariaLabel: accessibleUserName,
                titlify: true,
                ellipsify: true,
                xstyle: a_pollDetailsOptionTextSize
            });
            t[1] = accessibleUserName;
            t[2] = formattedUserName;
            t[3] = s;
        } else {
            s = t[3];
        }
        return s;
    }
    function Y5Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_timestamp = e.timestamp;
        let a;
        let i;
        let l;
        if (t[0] !== e_timestamp) {
            const u = o("WAWebTextSizeUtils").getWAWebTextSizeStyles();
            const d = u.pollDetailsOptionTextSize;
            a = o("WAWebClock").Clock.relativeDateAndTimeStr(e_timestamp / 1000);
            i = a;
            l = (s || (s = r("stylex"))).props(d);
            t[0] = e_timestamp;
            t[1] = a;
            t[2] = i;
            t[3] = l;
        } else {
            a = t[1];
            i = t[2];
            l = t[3];
        }
        let m;
        if (t[4] !== a || t[5] !== i || t[6] !== l) {
            m = <span {...babelHelpers.extends({
                title: i
            }, l, {
                children: a
            })}/>;
            t[4] = a;
            t[5] = i;
            t[6] = l;
            t[7] = m;
        } else {
            m = t[7];
        }
        return m;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(10);
        const { id, onClick, primary, primaryDetail, secondary } = e;
        const handleKeyboardClick = onClick != null;
        const idle = !handleKeyboardClick;
        let p;
        if (t[0] !== id) {
            p = c.jsx(o("WAWebDetailImage.react").DetailImage, {
                xstyle: d.marginInlineStart9,
                id,
                size: o("WAWebDetailImage.react").DetailImageSize.ExtraSmall
            });
            t[0] = id;
            t[1] = p;
        } else {
            p = t[1];
        }
        let _;
        if (t[2] !== handleKeyboardClick || t[3] !== onClick || t[4] !== primary || t[5] !== primaryDetail || t[6] !== secondary || t[7] !== idle || t[8] !== p) {
            const Component = r("WAWebChatCell.react");
            _ = <Component contextEnabled={o("WAWebBoolFunc").returnFalse} handleKeyboardClick={handleKeyboardClick} idle={idle} image={p} onClick={onClick} primary={primary} primaryDetail={primaryDetail} secondary={secondary} theme="chat-info"/>;
            t[2] = handleKeyboardClick;
            t[3] = onClick;
            t[4] = primary;
            t[5] = primaryDetail;
            t[6] = secondary;
            t[7] = idle;
            t[8] = p;
            t[9] = _;
        } else {
            _ = t[9];
        }
        return _;
    }
    function b(e) {
        const t = o("react-compiler-runtime").c(3);
        const { onOpenContactInfo, vote } = e;
        let a;
        if (t[0] !== onOpenContactInfo || t[1] !== vote) {
            a = vote instanceof o("WAWebPollsPollVoteModel").PollVote ? <G4Component vote={vote} onOpenContactInfo={onOpenContactInfo}/> : <P4Component vote={vote}/>;
            t[0] = onOpenContactInfo;
            t[1] = vote;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.default = b;
}, 98);