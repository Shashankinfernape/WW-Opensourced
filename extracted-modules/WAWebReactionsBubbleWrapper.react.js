__d("WAWebReactionsBubbleWrapper.react", [
    "WAWebAddOnBubblesContainerConditions",
    "WAWebKeyboardHotKeys.react",
    "WAWebReactionsBubble.react",
    "WAWebReactionsUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        reactionBubbleContainer: {
            height: "xo0jvv6",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(19);
        const { closeDetailsPane, detailsPane, handlers, hasReaction, isFirstData, numberOfSenderReactions, openDetailsPane, reactionArrayEmojis, reactionBubbleVisible } = e;
        const g = o("WAWebAddOnBubblesContainerConditions").hasHiddenSenderReactions(numberOfSenderReactions, reactionBubbleVisible);
        let h;
        if (t[0] !== numberOfSenderReactions || t[1] !== reactionArrayEmojis) {
            h = o("WAWebReactionsUtils").reactionBubbleAriaLabelString(numberOfSenderReactions, reactionArrayEmojis);
            t[0] = numberOfSenderReactions;
            t[1] = reactionArrayEmojis;
            t[2] = h;
        } else {
            h = t[2];
        }
        const y = h;
        let C;
        if (t[3] !== closeDetailsPane || t[4] !== detailsPane) {
            const Component = o("WAWebUimUie.react").UIE;
            C = detailsPane && <Component displayName="DetailsPane" escapable popable dismissOnWindowResize requestDismiss={closeDetailsPane}>{s.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: detailsPane
            })}</Component>;
            t[3] = closeDetailsPane;
            t[4] = detailsPane;
            t[5] = C;
        } else {
            C = t[5];
        }
        const b = C;
        let v = null;
        if (g) {
            if (hasReaction) {
                let L;
                if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
                    L = <div className="xo0jvv6"/>;
                    t[15] = L;
                } else {
                    L = t[15];
                }
                v = L;
            }
        } else {
            let S;
            if (t[6] !== isFirstData || t[7] !== numberOfSenderReactions || t[8] !== reactionArrayEmojis) {
                S = s.jsx(r("WAWebReactionsBubble.react"), {
                    reactions: reactionArrayEmojis,
                    reactionsAggregateCount: numberOfSenderReactions,
                    isFirstData
                });
                t[6] = isFirstData;
                t[7] = numberOfSenderReactions;
                t[8] = reactionArrayEmojis;
                t[9] = S;
            } else {
                S = t[9];
            }
            let R;
            if (t[10] !== handlers || t[11] !== openDetailsPane || t[12] !== y || t[13] !== S) {
                const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
                R = <Component data-testid="reaction-bubble" onClick={openDetailsPane} onDoubleClick={d} handlers={handlers} component="button" aria-haspopup tabIndex={0} aria-label={y} xstyle={u.reactionBubbleContainer}>{S}</Component>;
                t[10] = handlers;
                t[11] = openDetailsPane;
                t[12] = y;
                t[13] = S;
                t[14] = R;
            } else {
                R = t[14];
            }
            v = R;
        }
        let E;
        if (t[16] !== v || t[17] !== b) {
            E = <>{v}{b}</>;
            t[16] = v;
            t[17] = b;
            t[18] = E;
        } else {
            E = t[18];
        }
        return E;
    }
    function d(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    l.default = c;
}, 98);