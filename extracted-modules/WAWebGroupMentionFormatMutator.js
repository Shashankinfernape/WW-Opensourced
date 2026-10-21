__d("WAWebGroupMentionFormatMutator", [
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "WAWebGroupMetadataCollection",
    "WAWebRichTextInputConst",
    "WAWebTextGroupMentionWrapperMutatorComponent.react",
    "WAWebUnjoinedSubgroupMetadataCollection",
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
            const { fromChatWid, groupMentions, isDraftMessage } = n;
            this.fromChatWid = fromChatWid;
            if (isDraftMessage === true) {
                for(var l = r("WAWebExtractRangesUsingRegex")(t, new RegExp(o("WAWebRichTextInputConst").groupJidRegexStr, "g")), s = 0; s < l.length; ++s){
                    const u = l[s][4][1];
                    const c = r("WAWebUnjoinedSubgroupMetadataCollection").get(u) || r("WAWebGroupMetadataCollection").get(u);
                    if (!c || !c.subject) {
                        return [];
                    }
                    l[s][4] = {
                        groupJid: u.slice(1),
                        groupSubject: c.subject,
                        fromChatWid
                    };
                }
                return l;
            }
            if (!groupMentions || r("isEmptyObject")(groupMentions)) {
                return [];
            }
            const m = d(groupMentions);
            for(var p = r("WAWebExtractRangesUsingRegex")(t, m), _ = 0; _ < p.length; ++_){
                const f = p[_][4][0];
                p[_][4] = {
                    groupJid: f.slice(1),
                    groupSubject: groupMentions[f],
                    fromChatWid
                };
            }
            return p;
        };
        t.jsx = function(t, n, { clickable = true, lastMessage, selectable, theme }) {
            return s.jsx(r("WAWebTextGroupMentionWrapperMutatorComponent.react"), {
                groupSubject: n.groupSubject,
                groupJid: n.groupJid,
                selectable,
                clickable,
                theme,
                lastMessage,
                fromChatWid: this.fromChatWid
            });
        };
        return t;
    })(r("WAWebFormatMutator"));
    u.compatibility = true;
    function c(e) {
        const t = /[\\^$.*+?()[\]{}|]/g;
        const n = RegExp(t.source);
        if (e && n.test(e)) {
            return e.replace(t, "\\$&");
        }
        return e;
    }
    function d(groupMentions) {
        const t = Object.keys(groupMentions).map(c).join("|");
        return new RegExp(`(${t})`, "g");
    }
    l.GroupMention = u;
}, 98);