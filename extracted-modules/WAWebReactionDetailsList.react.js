__d("WAWebReactionDetailsList.react", [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgCollection",
    "WAWebReactionDetailsListItem.react",
    "clamp",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { createRef, useRef, useState } = u;
    function p(e) {
        const t = o("react-compiler-runtime").c(34);
        const { flatListController, isAggregated, onCloseDetailsPane, senders } = e;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = new Map;
            t[0] = u;
        } else {
            u = t[0];
        }
        const pRef = useRef(u);
        const f = useState(0);
        const g = f[0];
        const h = f[1];
        let y;
        if (t[1] !== senders) {
            y = function(t) {
                const e = senders[t];
                if (e) {
                    const r = e.id.toString();
                    const o = pRef.current.get(r);
                    o?.current?.focus();
                }
            };
            t[1] = senders;
            t[2] = y;
        } else {
            y = t[2];
        }
        const C = y;
        let b;
        if (t[3] !== senders.length) {
            b = function(t) {
                return r("clamp")(t, 0, senders.length - 1);
            };
            t[3] = senders.length;
            t[4] = b;
        } else {
            b = t[4];
        }
        const v = b;
        const S = useState(senders);
        const R = S[0];
        const L = S[1];
        if (R !== senders) {
            L(senders);
            h(0);
        }
        let E;
        if (t[5] !== g || t[6] !== C || t[7] !== v) {
            E = function(t) {
                t.preventDefault();
                const e = v(g - 1);
                h(e);
                C(e);
            };
            t[5] = g;
            t[6] = C;
            t[7] = v;
            t[8] = E;
        } else {
            E = t[8];
        }
        const up = E;
        let I;
        if (t[9] !== g || t[10] !== C || t[11] !== v) {
            I = function(t) {
                const e = v(g + 1);
                t.preventDefault();
                h(e);
                C(e);
            };
            t[9] = g;
            t[10] = C;
            t[11] = v;
            t[12] = I;
        } else {
            I = t[12];
        }
        const down = I;
        let D;
        if (t[13] !== down || t[14] !== up) {
            D = {
                up,
                down
            };
            t[13] = down;
            t[14] = up;
            t[15] = D;
        } else {
            D = t[15];
        }
        const x = D;
        let $;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            $ = "xh8yej3 x11oegk2 x1lumt5c xw2csxc x1odjw0f x12xbjc7 x16ovd2e";
            t[16] = $;
        } else {
            $ = t[16];
        }
        let flatListControllers;
        if (t[17] !== flatListController) {
            flatListControllers = [
                flatListController
            ];
            t[17] = flatListController;
            t[18] = flatListControllers;
        } else {
            flatListControllers = t[18];
        }
        let N;
        if (t[19] !== senders) {
            N = senders.map(_);
            t[19] = senders;
            t[20] = N;
        } else {
            N = t[20];
        }
        let renderItem;
        if (t[21] !== isAggregated || t[22] !== onCloseDetailsPane) {
            renderItem = function(t) {
                const e = createRef();
                pRef.current.set(t.itemKey, e);
                const n = o("WAWebMsgCollection").MsgCollection.get(t.sender.parentMsgKey);
                if (n) {
                    const Component = r("WAWebReactionDetailsListItem.react");
                    return <Component key={t.itemKey} ref={e} parentMsg={n} reaction={t.sender} isAggregated={isAggregated} onCloseDetailsPane={onCloseDetailsPane} onItemFocus={function() {
                        return h(t.index);
                    }}/>;
                }
                return null;
            };
            t[21] = isAggregated;
            t[22] = onCloseDetailsPane;
            t[23] = renderItem;
        } else {
            renderItem = t[23];
        }
        let w;
        if (t[24] !== flatListController || t[25] !== renderItem || t[26] !== N) {
            w = s.jsx(o("WAWebFlatList.react").FlatList, {
                flatListController,
                direction: "vertical",
                defaultItemHeight: 52,
                data: N,
                renderItem,
                forceConsistentRenderCount: false
            });
            t[24] = flatListController;
            t[25] = renderItem;
            t[26] = N;
            t[27] = w;
        } else {
            w = t[27];
        }
        let A;
        if (t[28] !== x || t[29] !== w) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            A = <Component role="list" tabIndex={null} handlers={x}>{w}</Component>;
            t[28] = x;
            t[29] = w;
            t[30] = A;
        } else {
            A = t[30];
        }
        let F;
        if (t[31] !== A || t[32] !== flatListControllers) {
            const Component = r("WAWebFlatListContainer.react");
            F = <Component className={$} flatListControllers={flatListControllers}>{A}</Component>;
            t[31] = A;
            t[32] = flatListControllers;
            t[33] = F;
        } else {
            F = t[33];
        }
        return F;
    }
    function _(e, index) {
        return {
            itemKey: e.id.toString(),
            sender: e,
            index
        };
    }
    l.default = p;
}, 98);