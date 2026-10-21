__d("WAWebReactionsPanel.react", [
    "WAWebCmd",
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebPanelsDisplayLocation",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsSelectionContext",
    "react",
    "react-compiler-runtime",
    "useWAWebSelectedReactions"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useRef } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(10);
        const { msgId, onSelection } = e;
        const i = r("useWAWebSelectedReactions")(msgId);
        const lRef = useRef(false);
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [];
            t[0] = u;
        } else {
            u = t[0];
        }
        useEffect(p, u);
        let m;
        if (t[1] !== onSelection || t[2] !== i) {
            m = function(t) {
                let e = t;
                if (t === i) {
                    e = o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
                }
                onSelection(e);
                o("WAWebCmd").Cmd.closeContextMenu();
            };
            t[1] = onSelection;
            t[2] = i;
            t[3] = m;
        } else {
            m = t[3];
        }
        const _ = m;
        let f;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = function() {
                if (!lRef.current) {
                    o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSearch();
                    lRef.current = true;
                }
            };
            t[4] = f;
        } else {
            f = t[4];
        }
        let g;
        if (t[5] !== _) {
            const Component = r("WAWebEmojiPanel.react");
            g = <Component onEmoji={_} displayLocation={o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions} width={o("WAWebDropdown.react").REACTIONS_PANEL_WIDTH} onChange={f}/>;
            t[5] = _;
            t[6] = g;
        } else {
            g = t[6];
        }
        let h;
        if (t[7] !== i || t[8] !== g) {
            const Component = r("WAWebReactionsSelectionContext").Provider;
            h = <Component value={i}>{g}</Component>;
            t[7] = i;
            t[8] = g;
            t[9] = h;
        } else {
            h = t[9];
        }
        return h;
    }
    function p() {
        o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.searchOpen();
        return _;
    }
    function _() {
        o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose();
    }
    l.default = m;
}, 98);