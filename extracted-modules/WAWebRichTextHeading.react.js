__d("WAWebRichTextHeading.react", [
    "WAWebHeadingFormatMutator",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        base: {
            display: "x1rg5ohu",
            width: "xh8yej3",
            $$css: true
        },
        LEVEL_1: {
            fontSize: "x1q74xe4",
            lineHeight: "x1slxwg",
            marginBottom: "x12nagc",
            $$css: true
        },
        LEVEL_2: {
            fontSize: "x1aueamr",
            lineHeight: "xgif2c7",
            marginBottom: "x12nagc",
            $$css: true
        },
        LEVEL_3: {
            fontSize: "x1603h9y",
            lineHeight: "x101yacv",
            marginBottom: "x12nagc",
            $$css: true
        },
        LEVEL_4: {
            fontSize: "x1lkfr7t",
            lineHeight: "x19v9tvf",
            marginBottom: "x12nagc",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(5);
        const { level, text } = t;
        let l;
        if (n[0] !== level) {
            l = (e || (e = r("stylex"))).props(m(level));
            n[0] = level;
            n[1] = l;
        } else {
            l = n[1];
        }
        let s;
        if (n[2] !== l || n[3] !== text) {
            s = <span {...babelHelpers.extends({}, l, {
                children: text
            })}/>;
            n[2] = l;
            n[3] = text;
            n[4] = s;
        } else {
            s = n[4];
        }
        return s;
    }
    function m(level) {
        switch(level){
            case o("WAWebHeadingFormatMutator").HeadingLevel.LEVEL_1:
                return [
                    c.base,
                    c.LEVEL_1
                ];
            case o("WAWebHeadingFormatMutator").HeadingLevel.LEVEL_2:
                return [
                    c.base,
                    c.LEVEL_2
                ];
            case o("WAWebHeadingFormatMutator").HeadingLevel.LEVEL_3:
                return [
                    c.base,
                    c.LEVEL_3
                ];
            case o("WAWebHeadingFormatMutator").HeadingLevel.LEVEL_4:
                return [
                    c.base,
                    c.LEVEL_4
                ];
        }
    }
    l.default = d;
}, 98);