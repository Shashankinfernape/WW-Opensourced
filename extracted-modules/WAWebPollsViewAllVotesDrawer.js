__d("WAWebPollsViewAllVotesDrawer", [
    "fbt",
    "WALogger",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlatListController",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptionSection",
    "WAWebPollsUseResults",
    "WAWebSpoilerRevealLogger",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues",
    "useWAWebNewsletterPollsResults",
    "useWAWebPollOptionDecorations"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = [
        "ref"
    ];
    let c;
    const d = c || (c = o("react"));
    function m(e) {
        const t = o("react-compiler-runtime").c(7);
        let n;
        let r;
        if (t[0] !== e) {
            r = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, u);
            t[0] = e;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        const n_msgKey = n.msgKey;
        let l;
        if (t[3] !== n_msgKey.remote || t[4] !== n || t[5] !== r) {
            l = n_msgKey.remote.isNewsletter() ? <F13 {...babelHelpers.extends({}, n, {
                ref: r
            })}/> : <_ {...babelHelpers.extends({}, n, {
                ref: r
            })}/>;
            t[3] = n_msgKey.remote;
            t[4] = n;
            t[5] = r;
            t[6] = l;
        } else {
            l = t[6];
        }
        return l;
    }
    const p = m;
    function _(e) {
        const t = o("react-compiler-runtime").c(8);
        const { associatedMessages, msgKey, onBack, onOpenContactInfo, optionLocalId, ref } = e;
        const u = o("WAWebPollsUseResults").useResults(msgKey);
        let c;
        if (t[0] !== associatedMessages || t[1] !== msgKey || t[2] !== onBack || t[3] !== onOpenContactInfo || t[4] !== optionLocalId || t[5] !== u || t[6] !== ref) {
            c = <G7Component associatedMessages={associatedMessages} mode="e2ee" onBack={onBack} onOpenContactInfo={onOpenContactInfo} optionsToResults={u} optionLocalId={optionLocalId} msgKey={msgKey} ref={ref}/>;
            t[0] = associatedMessages;
            t[1] = msgKey;
            t[2] = onBack;
            t[3] = onOpenContactInfo;
            t[4] = optionLocalId;
            t[5] = u;
            t[6] = ref;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    function F13(e) {
        const t = o("react-compiler-runtime").c(10);
        const { associatedMessages, msgKey, onBack, onOpenContactInfo, optionLocalId, ref } = e;
        let u;
        if (t[0] !== optionLocalId) {
            u = {
                pollVoteLocalId: optionLocalId
            };
            t[0] = optionLocalId;
            t[1] = u;
        } else {
            u = t[1];
        }
        const c = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(msgKey, u);
        let m;
        if (t[2] !== associatedMessages || t[3] !== msgKey || t[4] !== onBack || t[5] !== onOpenContactInfo || t[6] !== optionLocalId || t[7] !== c || t[8] !== ref) {
            m = <G7Component associatedMessages={associatedMessages} mode="newsletter" withSectioning onBack={onBack} onOpenContactInfo={onOpenContactInfo} optionsToResults={c} optionLocalId={optionLocalId} msgKey={msgKey} ref={ref}/>;
            t[2] = associatedMessages;
            t[3] = msgKey;
            t[4] = onBack;
            t[5] = onOpenContactInfo;
            t[6] = optionLocalId;
            t[7] = c;
            t[8] = ref;
            t[9] = m;
        } else {
            m = t[9];
        }
        return m;
    }
    function G7Component({ associatedMessages, mode, msgKey, onBack, onOpenContactInfo, optionLocalId, optionsToResults, ref, withSectioning }) {
        let n;
        const g = r("useWAWebPollOptionDecorations")(msgKey, optionsToResults, associatedMessages);
        const { addOptionMsgs, options, optionsMsgsMap } = g;
        const b = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (n = o("WAWebMsgGetters")).getSender,
            n.getPollCorrectOptionIndex,
            n.getPollHideVoterNames,
            n.getIsSentByMe,
            n.getIsSpoiler
        ]);
        const v = b[0];
        const S = b[1];
        const R = b[2];
        const L = b[3];
        const E = b[4];
        const k = r("useWAWebIsMsgTrusted")(msgKey);
        const I = o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(msgKey.remote, L);
        const option = options.find((e)=>e.localId === optionLocalId);
        const D = r("useLazyRef")(function() {
            return new (r("WAWebFlatListController"));
        });
        if (option == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Polls] Unable to find poll option in ViewAllVotesDrawer"
            ]))).sendLogs("null-poll-option");
            return null;
        }
        const x = r("nullthrows")(optionsToResults.get(option));
        const Component = o("WAWebDrawerHeader.react").DrawerHeader;
        const Component_1 = r("WAWebPollsOptionSection");
        const Component_2 = r("WAWebDrawerBody.react");
        const Component_3 = r("WAWebDrawer.react");
        return <Component_3 key="poll-details-drawer" ref={ref} theme="striped" testid="poll-details-drawer" tsNavigationData={{
            surface: "unknown",
            viewName: "polls-view-all-votes"
        }}><Component title={s._("Poll results")} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL} onBack={onBack} focusBackOrCancel/><Component_2 flatListControllers={[
            D.current
        ]}><Component_1 addOptionMsg={addOptionMsgs.get(option)} associatedMsg={optionsMsgsMap.get(option)} mode={mode} option={option} result={x} links={k ? o("WAWebMsgLinks").getLinksFromText(option.name, v) : null} trusted={k} isPollFromMe={msgKey.fromMe} messageHasSpoiler={E} spoilerRevealContext={I} onOpenContactInfo={onOpenContactInfo} flatListController={D.current} withSectioning={withSectioning} testid={`poll-details-option-${option.localId}`} isCorrectOption={o("WAWebPollOptionsRenderUtils").getIsCorrectOption(S, option)} hideVoterNames={R === true}/></Component_2></Component_3>;
    }
    G7Component.displayName = `${G7Component.name} [from ${i.id}]`;
    l.ViewAllVotesDrawer = p;
}, 226);