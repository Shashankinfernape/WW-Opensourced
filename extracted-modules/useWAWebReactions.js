__d("useWAWebReactions", [
    "Promise",
    "WALogger",
    "WAWebMsgCollection",
    "WAWebReactionsCollection",
    "WAWebReactionsUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
    "useWAWebListener",
    "useWAWebStableArrayModelState",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    const { useCallback, useEffect, useRef, useState } = d;
    function useG(t, a, i) {
        const l = r("useWAWebStableArrayModelState")();
        const reactionsModels = l[0];
        const d = l[1];
        const g = useState([]);
        const reactionArrayEmojis = g[0];
        const y = g[1];
        const C = useState(0);
        const numberOfSenderReactions = C[0];
        const v = C[1];
        const S = r("useWAWebStableCallback")(a);
        const RRef = useRef(true);
        const L = useCallback(function(e) {
            const t = o("WAWebReactionsUtils").getReactionEmojisAndSum(e);
            y(t.reactionArrayEmojis);
            v(t.numberOfSenderReactions);
        }, []);
        const E = t?.join("-");
        const kRef = useRef();
        const I = useState(0);
        const T = I[0];
        const D = I[1];
        o("useWAWebListener").useListeners(r("compactMap")(t ?? [], function(e) {
            return o("WAWebMsgCollection").MsgCollection.get(e);
        }).map((e)=>({
                source: e,
                eventOrEvents: "change:hasReaction",
                callback: function() {
                    return D(function(e) {
                        return e + 1;
                    });
                }
            })));
        useEffect(function() {
            const kRef_current = kRef.current;
            kRef.current = i;
            let a = false;
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!(!t || t.length === 0) && !(kRef_current == null && i === false && T === 0)) {
                    const l = [];
                    const s = t.map((t)=>o("WAWebReactionsCollection").ReactionsCollection.find(t).then((e)=>{
                            if (e != null) {
                                l.push(e);
                            }
                        }).catch((t)=>{
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Could not get reactions for message: ",
                                ""
                            ])), String(t));
                        }));
                    yield (u || (u = n("Promise"))).all(s);
                    if (!a) {
                        if (kRef_current === false) {
                            RRef.current = false;
                        }
                        d(l);
                        L(l);
                        S(l);
                    }
                }
            })().catch((e)=>{
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Could not update reactions: ",
                    ""
                ])), String(e));
            });
            return function() {
                a = true;
            };
        }, [
            E,
            L,
            i,
            T
        ]);
        o("useWAWebListener").useListeners(reactionsModels.map(({ reactions })=>({
                source: reactions,
                eventOrEvents: [
                    "add",
                    "reset",
                    "change:senders"
                ],
                callback: function() {
                    RRef.current = false;
                    L(reactionsModels);
                    S(reactionsModels);
                }
            })));
        o("useWAWebListener").useListeners(reactionsModels.map(({ reactions })=>({
                source: reactions,
                eventOrEvents: "remove",
                callback: function() {
                    L(reactionsModels);
                    if (i === undefined) {
                        S(reactionsModels);
                    }
                }
            })));
        return {
            reactionArrayEmojis,
            numberOfSenderReactions,
            reactionsModels,
            isFirstData: RRef.current
        };
    }
    l.default = useG;
}, 98);