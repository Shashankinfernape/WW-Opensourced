__d("WAWebMentionFormatMutator", [
    "WAWebContactCollection",
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "WAWebMentionMutatorComponent.react",
    "WAWebRichTextInputConst",
    "WAWebWidFactory",
    "escapeRegex",
    "isEmptyObject",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.match = function(t, n) {
            if (!n) {
                return [];
            }
            const { fromChatWid, groupMetadata, isDraftMessage, mentions } = n;
            if (isDraftMessage === true) {
                for(var s = r("WAWebExtractRangesUsingRegex")(t, new RegExp(o("WAWebRichTextInputConst").userJidRegexStr, "g")), u = [], d = 0; d < s.length; ++d){
                    const m = s[d];
                    const p = m[4][1];
                    const _ = o("WAWebWidFactory").createUserWidOrThrow(p);
                    const f = o("WAWebContactCollection").ContactCollection.get(_);
                    if (f == null) {
                        return [];
                    }
                    u.push([
                        m[0],
                        m[1],
                        m[2],
                        m[3],
                        {
                            contact: f,
                            fromChatWid,
                            groupMetadata
                        }
                    ]);
                }
                return u;
            }
            if (!mentions || r("isEmptyObject")(mentions)) {
                return [];
            }
            const g = c(mentions);
            for(var h = r("WAWebExtractRangesUsingRegex")(t, g), y = [], C = 0; C < h.length; ++C){
                const b = h[C];
                const v = b[0];
                const S = b[1];
                const R = b[2];
                const L = b[3];
                const E = b[4];
                y.push([
                    v,
                    S,
                    R,
                    L,
                    {
                        contact: mentions[E[0]],
                        fromChatWid,
                        groupMetadata
                    }
                ]);
            }
            return y;
        };
        t.jsx = function(t, mentionMeta, { lastMessage, selectable }) {
            return s.jsx(r("WAWebMentionMutatorComponent.react"), {
                mentionMeta,
                selectable,
                lastMessage
            });
        };
        return t;
    })(r("WAWebFormatMutator"));
    u.compatibility = true;
    function c(mentions) {
        const t = Object.keys(mentions).map(r("escapeRegex")).join("|");
        return new RegExp(`(${t})(?!\\d)`, "g");
    }
    l.default = u;
}, 98);