__d("WAWebHeadingFormatMutator", [
    "$InternalEnum",
    "WAWebCreateRegexMutator",
    "WAWebRichTextHeading.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = n("$InternalEnum")({
        LEVEL_1: 1,
        LEVEL_2: 2,
        LEVEL_3: 3,
        LEVEL_4: 4
    });
    const c = /^(#{1,4})\s([^\n]+)(?:$)(?:\n|$)/gm;
    const d = r("WAWebCreateRegexMutator")(c, 2);
    function m(e) {
        switch(e){
            case "#":
                return u.LEVEL_1;
            case "##":
                return u.LEVEL_2;
            case "###":
                return u.LEVEL_3;
            case "####":
                return u.LEVEL_4;
            default:
                return u.LEVEL_4;
        }
    }
    const p = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, [, o, e]) {
            return s.jsx(r("WAWebRichTextHeading.react"), {
                level: m(o),
                text: e
            });
        };
        return t;
    })(d);
    const _ = new Set([
        u.LEVEL_1,
        u.LEVEL_2
    ]);
    const f = new Set([
        u.LEVEL_3,
        u.LEVEL_4
    ]);
    function g(level) {
        return _.has(level);
    }
    function h(level) {
        return f.has(level);
    }
    const y = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, n) {
            const e = n[2];
            const level = m(n[1]);
            if (g(level)) {
                return s.jsx(r("WAWebRichTextHeading.react"), {
                    level,
                    text: e
                });
            }
            if (h(level)) {
                return s.jsx(r("WAWebRichTextHeading.react"), {
                    level,
                    text: e
                });
            }
            return <span>{n[0]}</span>;
        };
        return t;
    })(d);
    const C = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, [, , e]) {
            return <span>{e}</span>;
        };
        return t;
    })(d);
    C.unformatDecorations = {
        post: " "
    };
    l.HeadingLevel = u;
    l.RegexMutator = d;
    l.Heading = p;
    l.AIRichResponseHeading = y;
    l.HeadlessHeading = C;
}, 98);