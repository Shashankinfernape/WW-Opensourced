__d("WAWebPollsDetailsDrawer", [
    "fbt",
    "WAWebChatGetters",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFlatListController",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebPollCreationUtils",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptionSection",
    "WAWebPollsUseResults",
    "WAWebPollsUseStickySortedResults",
    "WAWebPollsUseVoteCount",
    "WAWebSpoilerRevealLogger",
    "WAWebTextSizeUtils",
    "WDSBanner.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues",
    "useWAWebNewsletterPollsResults",
    "useWAWebPollOptionDecorations"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useMemo = c.useMemo;
    const p = {
        pollName: {
            display: "x1lliihq",
            fontSize: "xlm9qay",
            lineHeight: "x19gsaw2",
            wordBreak: "x13faqbe",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(8);
        const { associatedMessages, msgKey, onClose, onOpenContactInfo, onViewAllVotes, ref } = e;
        const u = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(msgKey);
        let c;
        if (t[0] !== associatedMessages || t[1] !== msgKey || t[2] !== onClose || t[3] !== onOpenContactInfo || t[4] !== onViewAllVotes || t[5] !== u || t[6] !== ref) {
            c = <G5Component ref={ref} mode="newsletter" msgKey={msgKey} associatedMessages={associatedMessages} optionsToResults={u} onClose={onClose} onOpenContactInfo={onOpenContactInfo} onViewAllVotes={onViewAllVotes}/>;
            t[0] = associatedMessages;
            t[1] = msgKey;
            t[2] = onClose;
            t[3] = onOpenContactInfo;
            t[4] = onViewAllVotes;
            t[5] = u;
            t[6] = ref;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    function F12(e) {
        const t = o("react-compiler-runtime").c(8);
        const { associatedMessages, msgKey, onClose, onOpenContactInfo, onViewAllVotes, ref } = e;
        const u = o("WAWebPollsUseResults").useResults(msgKey);
        let c;
        if (t[0] !== associatedMessages || t[1] !== msgKey || t[2] !== onClose || t[3] !== onOpenContactInfo || t[4] !== onViewAllVotes || t[5] !== u || t[6] !== ref) {
            c = <G5Component mode="e2ee" ref={ref} msgKey={msgKey} associatedMessages={associatedMessages} optionsToResults={u} onClose={onClose} onOpenContactInfo={onOpenContactInfo} onViewAllVotes={onViewAllVotes}/>;
            t[0] = associatedMessages;
            t[1] = msgKey;
            t[2] = onClose;
            t[3] = onOpenContactInfo;
            t[4] = onViewAllVotes;
            t[5] = u;
            t[6] = ref;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    function G5Component({ associatedMessages, mode, msgKey, onClose, onOpenContactInfo, onViewAllVotes, optionsToResults, ref }) {
        let n;
        const pollDetailsQuestionTextSize = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().pollDetailsQuestionTextSize;
        const C = r("useWAWebPollOptionDecorations")(msgKey, optionsToResults, associatedMessages);
        const { addOptionMsgs, optionsMsgsMap } = C;
        const S = o("WAWebPollsUseVoteCount").useVoteCount(msgKey);
        const R = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (n = o("WAWebMsgGetters")).getPollName,
            n.getId,
            n.getPollInvalidated,
            n.getPollHideVoterNames,
            n.getSender,
            n.getPollType,
            n.getPollCorrectOptionIndex,
            n.getIsNewsletterMsg,
            n.getIsSentByMe,
            n.getIsSpoiler
        ]);
        const L = R[0];
        const E = R[1];
        const k = R[2];
        const I = R[3];
        const T = R[4];
        const D = R[5];
        const x = R[6];
        const $ = R[7];
        const P = R[8];
        const N = R[9];
        const M = o("WAWebFrontendMsgGetters").getChatByMsgKey(msgKey, $);
        const w = o("WAWebPollsUseStickySortedResults").useStickySortedResults(optionsToResults);
        const A = r("useWAWebIsMsgTrusted")(msgKey);
        const F = o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(msgKey.remote, P);
        const O = o("WAWebFormatConfigurationConversation").Conversation({
            links: L == null ? [] : o("WAWebMsgLinks").getLinksFromText(L, T),
            phoneNumbers: [],
            selectable: true,
            trusted: A,
            fromMe: E.fromMe,
            messageHasSpoiler: N,
            spoilerRevealContext: F
        });
        const flatListController = c_useMemo(function() {
            return new (r("WAWebFlatListController"));
        }, []);
        const W = o("WAWebChatGetters").getIsGroup(M) ? M.groupMetadata?.participants.length : 0;
        const Component = o("WAWebDrawerHeader.react").DrawerHeader;
        const Component_1 = o("WAWebEmojiText.react").EmojiText;
        const Component_2 = r("WAWebDrawerSection.react");
        const Component_3 = r("WAWebDrawerBody.react");
        const Component_4 = r("WAWebDrawer.react");
        return <Component_4 key="poll-details-drawer" ref={ref} theme="striped" testid="poll-details-drawer" tsNavigationData={{
            surface: "polls-details",
            viewName: "polls-details"
        }}><Component title={D === o("WAWebPollCreationUtils").PollType.QUIZ ? s._("Quiz responses") : s._("Poll details")} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL} onCancel={onClose} focusBackOrCancel/><Component_3 flatListControllers={[
            flatListController
        ]}><Component_2 theme="no-padding">{k && <div className="x1380le5 xefnzgg x1uvdrpn x14mko6t">{d.jsx(r("WDSBanner.react"), {
            type: "warning",
            body: s._("Results only show votes made before you left the group."),
            testid: "invalid-poll-details-view-warning"
        })}</div>}<div className="x1h678fw xv6tirj x1m4z3lf x1evaxtz"><Component_1 text={L} selectable formatters={O} className={(u || (u = r("stylex")))(p.pollName, pollDetailsQuestionTextSize)}/>{W != null && W > 1 && <span className="x1nxh6w3 x1fc57z9 x1rg5ohu x1380le5">{s._("_j{\"*\":\"{vote_count} of {group_length} members voted\",\"_1\":\"{vote_count} of 1 member voted\"}", [
            s._plural(W, "group_length"),
            s._param("vote_count", S)
        ])}</span>}</div></Component_2>{w.map(([t, n])=>{
            const Component = r("WAWebPollsOptionSection");
            return <Component key={t.localId} associatedMsg={optionsMsgsMap.get(t)} addOptionMsg={addOptionMsgs.get(t)} mode={mode} option={t} result={n} isPollFromMe={E.fromMe} messageHasSpoiler={N} spoilerRevealContext={F} links={A ? o("WAWebMsgLinks").getLinksFromText(t.name, T) : null} trusted={A} onViewAllVotes={function() {
                onViewAllVotes(t.localId);
            }} onOpenContactInfo={onOpenContactInfo} flatListController={flatListController} testid={`poll-details-option-${t.localId}`} isCorrectOption={o("WAWebPollOptionsRenderUtils").getIsCorrectOption(x, t)} hideVoterNames={I === true}/>;
        })}</Component_3></Component_4>;
    }
    G5Component.displayName = `${G5Component.name} [from ${i.id}]`;
    function h(t) {
        const n = o("react-compiler-runtime").c(6);
        let r;
        let a;
        if (n[0] !== t) {
            a = t.ref;
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        let i;
        if (n[3] !== r || n[4] !== a) {
            i = r.msgKey.remote.isNewsletter() ? <_ {...babelHelpers.extends({}, r, {
                ref: a
            })}/> : <F12 {...babelHelpers.extends({}, r, {
                ref: a
            })}/>;
            n[3] = r;
            n[4] = a;
            n[5] = i;
        } else {
            i = n[5];
        }
        return i;
    }
    l.DetailsDrawer = h;
}, 226);