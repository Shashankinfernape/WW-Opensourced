__d("WAWebReactionsBubble.react", [
    "WAArrayDifferenceBy",
    "WADeepEquals",
    "WAWebAddOnBubble.react",
    "WAWebFlexItem.react",
    "WAWebReactionEmojiAnimated",
    "WAWebReactionsUtils",
    "WAWebRollerCounter.react",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { memo, useEffect, useLayoutEffect, useRef, useState } = u;
    const f = 100;
    const g = {
        reactionItem: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            textAlign: "x2b8uid",
            fontSize: "x1jchvi3",
            lineHeight: "x1fc57z9",
            $$css: true
        }
    };
    function h(e, t) {
        const added = o("WAArrayDifferenceBy").differenceBy(t || [], e || [], function(e) {
            return e.reactionAggregate;
        });
        const removed = o("WAArrayDifferenceBy").differenceBy(e || [], t || [], function(e) {
            return e.reactionAggregate;
        });
        return {
            added,
            removed
        };
    }
    function y(reactions) {
        const t = {
            timestamp: 0,
            reactionAgg: ""
        };
        reactions.forEach((e)=>{
            e.reactionSenders.forEach((n)=>{
                if (t.timestamp < n.timestamp) {
                    t.timestamp = n.timestamp;
                    t.reactionAgg = e.reactionAggregate;
                }
            });
        });
        return t;
    }
    function C({ isFirstData, reactions, reactionsAggregateCount }) {
        const iRef = useRef(null);
        const lRef = useRef(reactions);
        const uRef = useRef(true);
        const cRef = useRef();
        const C = useState([]);
        const b = C[0];
        const v = C[1];
        const S = useState([]);
        const R = S[0];
        const L = S[1];
        const E = useState([]);
        const k = E[0];
        const I = E[1];
        const TRef = useRef(false);
        const DRef = useRef(null);
        const xRef = useRef(null);
        useLayoutEffect(function() {
            const DRef_current = DRef.current;
            const xRef_current = xRef.current;
            DRef.current = reactions;
            xRef.current = reactionsAggregateCount;
            if (isFirstData === false && !o("WADeepEquals").deepEqual(DRef_current, reactions)) {
                const i = xRef_current != null && xRef_current > reactionsAggregateCount;
                if (!i) {
                    const l = h(DRef_current, reactions);
                    const s = l.added;
                    if (s.length !== 0) {
                        let u = [];
                        const c = s.find((e)=>e.reactionByMe);
                        if (c != null) {
                            u = [
                                c
                            ];
                        } else {
                            const d = y(reactions);
                            u = s.filter((e)=>e.reactionAggregate === d.reactionAgg);
                        }
                        if (u.length > 0) {
                            v(u);
                        }
                    }
                }
            }
        }, [
            isFirstData,
            reactions,
            reactionsAggregateCount
        ]);
        const $ = o("useWAWebTimeout").useTimeout(function() {
            L(lRef.current);
        }, o("WAWebReactionEmojiAnimated").ANIMATION_REMOVE_LENGTH + 1);
        const P = $[0];
        const N = $[1];
        const M = r("useWAWebDebouncedCallback")(function() {
            const e = h(iRef.current, lRef.current);
            const e_removed = e.removed;
            if (!o("WADeepEquals").deepEqual(e_removed, k) && isFirstData === false) {
                I(e_removed);
            }
            if (e_removed.length === 0) {
                L(lRef.current);
            } else {
                P();
            }
            iRef.current = null;
            uRef.current = false;
        }, f);
        useEffect(function() {
            const cRef_current = cRef.current;
            cRef.current = reactions;
            if (iRef.current == null) {
                iRef.current = cRef_current ?? null;
            }
            lRef.current = reactions;
            if (!o("WADeepEquals").deepEqual(cRef_current, reactions)) {
                M();
            }
        }, [
            M,
            reactions
        ]);
        const w = R.length === 0 && reactions.length > 0 ? reactions : R;
        const A = w.map((e)=>{
            const shouldRemoveAnimation = k.includes(e);
            const removeAnimation = shouldRemoveAnimation ? {
                shouldRemoveAnimation,
                animationFinished: function() {
                    N();
                    L(lRef.current);
                }
            } : null;
            const a = o("WAWebReactionsUtils").getReactionForDisplay(e);
            const shouldAnimate = b.includes(e);
            const Component = r("WAWebFlexItem.react");
            return <Component key={a} xstyle={g.reactionItem} testid="reaction-bubble-item">{s.jsx(o("WAWebReactionEmojiAnimated").ReactionEmojiAnimated, {
                reaction: a,
                shouldAnimate,
                removeAnimation
            })}</Component>;
        });
        const F = s.jsx(r("WAWebRollerCounter.react"), {
            counter: reactionsAggregateCount,
            shouldAnimate: isFirstData === false,
            rollerCounterOptions: {
                showAggregateMax: true,
                showOneToTwoAnimation: true
            }
        });
        const O = h(iRef.current, lRef.current);
        const O_added = O.added;
        const shouldAnimateBubble = isFirstData === false && uRef.current && (O_added.length > 0 || TRef.current);
        TRef.current = shouldAnimateBubble;
        const onAnimationEnd = function() {
            TRef.current = false;
        };
        const Component = r("WAWebAddOnBubble.react");
        return <Component shouldAnimateBubble={shouldAnimateBubble} onAnimationEnd={onAnimationEnd}>{A}{F}</Component>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b(e, t) {
        return o("WADeepEquals").deepEqual(e, t);
    }
    const v = memo(C, b);
    l.default = v;
}, 98);