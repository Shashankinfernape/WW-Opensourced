__d("WAWebLinkFormatMutator", [
    "WAWebBoldFormatMutator",
    "WAWebCodeFormatMutator",
    "WAWebFormatMutator",
    "WAWebInlineCodeFormatMutator",
    "WAWebItalicFormatMutator",
    "WAWebLinkMutatorComponent.react",
    "WAWebSpoilerFormatMutator",
    "WAWebStrikethroughFormatMutator",
    "WAWebSuspiciousLinkMutatorComponent.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = ((t)=>{
        function n() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        n.jsx = function(n, o, { dataTab, linkXstyle, onLinkClick, selectable = false }) {
            const { href, suspiciousCharacters } = o;
            if (suspiciousCharacters != null && suspiciousCharacters.size) {
                const Component = r("WAWebSuspiciousLinkMutatorComponent.react");
                return <Component onClick={onLinkClick} className={(e || (e = r("stylex")))(linkXstyle)} link={o} selectable={selectable} dataTab={dataTab}>{n}</Component>;
            }
            const Component = r("WAWebLinkMutatorComponent.react");
            return <Component xstyle={linkXstyle} onClick={onLinkClick} href={href} selectable={selectable} dataTab={dataTab}>{n}</Component>;
        };
        return n;
    })(r("WAWebFormatMutator"));
    c.format = false;
    c.compatibility = true;
    c.match = function(e, t, n) {
        if (!t) {
            return [];
        }
        const t_links = t.links;
        const o = t_links === undefined ? [] : t_links;
        return o.map(d);
    };
    c.conflictResolvers = new Map([
        [
            r("WAWebBoldFormatMutator"),
            m
        ],
        [
            r("WAWebItalicFormatMutator"),
            m
        ],
        [
            r("WAWebStrikethroughFormatMutator"),
            m
        ],
        [
            r("WAWebInlineCodeFormatMutator"),
            m
        ],
        [
            o("WAWebCodeFormatMutator").Code,
            m
        ],
        [
            r("WAWebSpoilerFormatMutator"),
            m
        ]
    ]);
    function d(e) {
        const { index, url } = e;
        const r = index + url.length - 1;
        return [
            index,
            index,
            r,
            r,
            e
        ];
    }
    function m(e, t) {
        for(let n = 0, r = 0; n < e.length && r < t.length;){
            const o = t[r][3] - e[n][3];
            if (o > 0) {
                n++;
            } else if (o < 0) {
                r++;
            } else {
                const a = t[r][3] - t[r][2];
                e[n][2] -= a;
                e[n][3] -= a;
                const i = e[n][5];
                i.href = i.href.slice(0, -a);
                i.path = i.path == null ? i.path : i.path.slice(0, -a);
                i.url = i.url.slice(0, -a);
                r++;
                n++;
            }
        }
    }
    l.default = c;
}, 98);