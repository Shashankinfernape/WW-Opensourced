__d("WAWebMessageMultiEmoji.react", [
    "WAWebCopyPasteSelectable.react",
    "WAWebMessageLargeEmoji.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(12);
        const { animation, emojis } = e;
        const a = emojis ? emojis.length : 0;
        if (a === 0) {
            return null;
        }
        let i;
        if (t[0] !== a) {
            e: switch(a){
                default:
                case 3:
                    {
                        i = o("WAWebMessageLargeEmoji.react").SIZE.MEDIUM;
                        break e;
                    }
                case 2:
                    {
                        i = o("WAWebMessageLargeEmoji.react").SIZE.LARGE;
                        break e;
                    }
                case 1:
                    i = o("WAWebMessageLargeEmoji.react").SIZE.XLARGE;
            }
            t[0] = a;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== animation || t[3] !== emojis || t[4] !== i) {
            let u;
            if (t[6] !== animation || t[7] !== i) {
                u = function(t, r) {
                    return s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
                        animation,
                        size: i,
                        emoji: t,
                        selectable: true
                    }, t + r);
                };
                t[6] = animation;
                t[7] = i;
                t[8] = u;
            } else {
                u = t[8];
            }
            l = emojis.map(u);
            t[2] = animation;
            t[3] = emojis;
            t[4] = i;
            t[5] = l;
        } else {
            l = t[5];
        }
        const c = l;
        let d;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            d = "x1n2onr6 xc9l9hb x78zum5 xl56j7k x1yrsyyn xdj266r x1emmycd x1u7kmwd xx6jrq6 x1ed109x";
            t[9] = d;
        } else {
            d = t[9];
        }
        let m;
        if (t[10] !== c) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableDiv;
            m = <Component selectable className={d}>{c}</Component>;
            t[10] = c;
            t[11] = m;
        } else {
            m = t[11];
        }
        return m;
    }
    l.default = UComponent;
}, 98);