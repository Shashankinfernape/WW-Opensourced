__d("WAWebReactionPillsContainer.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebReactionEmoji.react",
    "WDSChip.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useRef, useState } = c;
    const p = {
        pillsContainer: {
            maxHeight: "x1aoj0v",
            overflowY: "x1odjw0f",
            paddingTop: "x16ovd2e",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "xde1mab",
            $$css: true
        },
        pillsContainerGrid: {
            flexWrap: "x1a02dak",
            $$css: true
        },
        pillsContainerRow: {
            flexWrap: "xozqiw3",
            overflowX: "xw2csxc",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(35);
        const { addReactionPill, display, mode, onPillClick, reactionAggregates } = e;
        const _ = display === undefined ? "row" : display;
        const f = mode === undefined ? "interactive" : mode;
        let g;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            g = [];
            t[0] = g;
        } else {
            g = t[0];
        }
        const hRef = useRef(g);
        const y = useState(-1);
        const C = y[0];
        const b = y[1];
        const v = _ === "row" ? p.pillsContainerRow : p.pillsContainerGrid;
        const reactionAggregates_length = reactionAggregates.length;
        let R;
        if (t[1] !== reactionAggregates_length) {
            R = function(t) {
                let e;
                if (!(t < 0 || t >= reactionAggregates_length)) {
                    b(t);
                    if ((e = hRef.current[t]) != null) {
                        e.focus();
                    }
                }
            };
            t[1] = reactionAggregates_length;
            t[2] = R;
        } else {
            R = t[2];
        }
        const L = R;
        let left;
        let right;
        let home;
        if (t[3] !== L || t[4] !== C) {
            left = function() {
                if (C !== -1) {
                    L(C - 1);
                }
            };
            right = function() {
                if (C !== -1) {
                    L(C + 1);
                }
            };
            home = function() {
                if (C !== -1) {
                    L(0);
                }
            };
            t[3] = L;
            t[4] = C;
            t[5] = left;
            t[6] = right;
            t[7] = home;
        } else {
            left = t[5];
            right = t[6];
            home = t[7];
        }
        let end;
        if (t[8] !== L || t[9] !== C || t[10] !== reactionAggregates_length) {
            end = function() {
                if (C !== -1) {
                    L(reactionAggregates_length - 1);
                }
            };
            t[8] = L;
            t[9] = C;
            t[10] = reactionAggregates_length;
            t[11] = end;
        } else {
            end = t[11];
        }
        let D;
        if (t[12] !== left || t[13] !== right || t[14] !== home || t[15] !== end) {
            D = {
                left,
                right,
                home,
                end
            };
            t[12] = left;
            t[13] = right;
            t[14] = home;
            t[15] = end;
            t[16] = D;
        } else {
            D = t[16];
        }
        const x = D;
        let $;
        if (t[17] !== addReactionPill) {
            $ = addReactionPill != null ? s._("All message reactions, including the possibility to add a new one") : s._("All message reactions");
            t[17] = addReactionPill;
            t[18] = $;
        } else {
            $ = t[18];
        }
        const P = $;
        let N;
        if (t[19] !== v) {
            N = [
                p.pillsContainer,
                v
            ];
            t[19] = v;
            t[20] = N;
        } else {
            N = t[20];
        }
        let M;
        if (t[21] !== C || t[22] !== f || t[23] !== onPillClick || t[24] !== reactionAggregates || t[25] !== reactionAggregates_length) {
            M = reactionAggregates.map(({ count, emoji, hasMyReaction }, t)=>{
                const c = t === 0;
                const d = s._("{reaction}, {count} reactions, {position} of {total}", [
                    s._param("reaction", emoji),
                    s._param("count", count),
                    s._param("position", t + 1),
                    s._param("total", reactionAggregates_length)
                ]);
                const Component = r("WDSChip.react");
                return <Component key={emoji} label={d} aria-label={d.toString()} isDisabled={f === "read-only"} isSelected={hasMyReaction} onPress={function() {
                    return onPillClick(emoji, hasMyReaction);
                }} focusable={C === -1 ? c : C === t} aria-pressed={hasMyReaction} testid="chat_thread_reaction_chip" smbLabelsContent={u.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                    reaction: emoji
                })} endNumber={count} onFocus={function() {
                    return b(t);
                }} onBlur={function() {
                    return b(-1);
                }} ref={function(n) {
                    hRef.current[t] = n;
                }}/>;
            });
            t[21] = C;
            t[22] = f;
            t[23] = onPillClick;
            t[24] = reactionAggregates;
            t[25] = reactionAggregates_length;
            t[26] = M;
        } else {
            M = t[26];
        }
        let w;
        if (t[27] !== addReactionPill || t[28] !== N || t[29] !== M) {
            const Component = o("WAWebFlex.react").FlexRow;
            w = <Component columnGap={8} rowGap={8} shrink={0} xstyle={N}>{addReactionPill}{M}</Component>;
            t[27] = addReactionPill;
            t[28] = N;
            t[29] = M;
            t[30] = w;
        } else {
            w = t[30];
        }
        let A;
        if (t[31] !== P || t[32] !== x || t[33] !== w) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            A = <Component handlers={x} role="toolbar" aria-label={P}>{w}</Component>;
            t[31] = P;
            t[32] = x;
            t[33] = w;
            t[34] = A;
        } else {
            A = t[34];
        }
        return A;
    }
    l.default = _;
}, 226);