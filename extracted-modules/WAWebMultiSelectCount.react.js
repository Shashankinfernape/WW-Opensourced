__d("WAWebMultiSelectCount.react", [
    "fbt",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(7);
        const { selectedMsgsCount, theme } = e;
        let a;
        if (t[0] !== theme) {
            a = ({
                0: {
                    className: "x98rzlu x7yx35o xlyipyv xuxw1ft x1sa5p1d"
                },
                1: {
                    className: "x98rzlu x7yx35o xlyipyv xuxw1ft x1sa5p1d x1wmqtwo"
                }
            })[(theme === "mediaGallery") << 0];
            t[0] = theme;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== selectedMsgsCount) {
            i = s._("_j{\"*\":\"{count} selected\",\"_1\":\"1 selected\"}", [
                s._plural(selectedMsgsCount, "count")
            ]);
            t[2] = selectedMsgsCount;
            t[3] = i;
        } else {
            i = t[3];
        }
        let l;
        if (t[4] !== a || t[5] !== i) {
            l = <span {...babelHelpers.extends({
                "aria-live": "polite"
            }, a, {
                children: i
            })}/>;
            t[4] = a;
            t[5] = i;
            t[6] = l;
        } else {
            l = t[6];
        }
        return l;
    }
    l.default = c;
}, 226);