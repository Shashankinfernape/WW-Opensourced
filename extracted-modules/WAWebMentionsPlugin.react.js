__d("WAWebMentionsPlugin.react", [
    "Lexical",
    "LexicalComposerContext",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebLexicalUtils",
    "WAWebMentionNode",
    "WAWebMentionsPluginUtil",
    "WAWebMiscGatingUtils",
    "WAWebRichTextInputConst",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebWidFactory",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e, t) {
        const n = new RegExp(o("WAWebRichTextInputConst").userJidRegexStr, "g");
        const r = new RegExp(o("WAWebRichTextInputConst").groupJidRegexStr, "g");
        const a = e.matchAll(n);
        let i;
        if (t === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || t === o("WAWebGroupType").GroupType.LINKED_SUBGROUP) {
            i = e.matchAll(r);
        }
        const l = Array.from(a).map((e)=>({
                match: e,
                type: o("WAWebMentionNode").MentionTypeEnum.CONTACT
            }));
        const s = Array.from(i ?? []).map((e)=>({
                match: e,
                type: o("WAWebMentionNode").MentionTypeEnum.GROUP
            }));
        const u = [].concat(l, s);
        u.sort((e, t)=>{
            if (e.match.index > t.match.index) {
                return 1;
            }
            return -1;
        });
        let c = 0;
        return u.map(({ match, type })=>{
            const jid = match[1];
            const match_index = match.index;
            const lastEndIndex = c;
            const length = jid.length + 2;
            c = match.index + length;
            return {
                jid,
                index: match_index,
                lastEndIndex,
                length,
                type
            };
        });
    }
    function c(e, jid) {
        const a = o("WAWebWidFactory").createUserWidOrThrow(jid);
        const i = (e?.isLidAddressingMode === true && !a.isLid() ? o("WAWebApiContact").getCurrentLid(a)?.toString() : jid) ?? jid;
        return (e == null ? undefined : e.participants.get(i)) != null;
    }
    function d(e, t) {
        if (e.isSimpleText()) {
            const n = e.getTextContent();
            let a = e;
            for (const i of u(n, o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t))){
                const { index, jid, lastEndIndex, length, type } = i;
                const _ = index - lastEndIndex;
                let f;
                let h;
                if (_ === 0) {
                    const y = a.splitText(length);
                    f = y[0];
                    h = y[1];
                } else {
                    const C = a.splitText(_, _ + length);
                    f = C[1];
                    h = C[2];
                }
                a = h;
                let b;
                if (type === o("WAWebMentionNode").MentionTypeEnum.CONTACT) {
                    const v = o("WAWebContactCollection").ContactCollection.get(jid);
                    if (v != null) {
                        const S = !o("WAWebContactGetters").getIsMe(v) && c(t, jid);
                        if (S) {
                            const R = v.id.toString();
                            const L = o("WAWebMentionNode").$createMentionNode(g(v, t), R, o("WAWebMentionNode").MentionTypeEnum.CONTACT);
                            f.replace(L);
                            b = L;
                        } else {
                            b = new (o("Lexical")).TextNode(`@${g(v)}`);
                            f.replace(b);
                        }
                    }
                }
                if (type === o("WAWebMentionNode").MentionTypeEnum.GROUP) {
                    const E = r("WAWebUnjoinedSubgroupMetadataCollection").get(jid) || r("WAWebGroupMetadataCollection").get(jid);
                    const k = t != null && t.parentGroup ? r("WAWebGroupMetadataCollection").assertGet(t.parentGroup) : null;
                    if (E && k) {
                        const { id, subject } = E;
                        const D = [].concat(k.joinedSubgroups, k.unjoinedSubgroups);
                        if (D.includes(id)) {
                            const x = o("WAWebMentionNode").$createMentionNode(subject, id.toString(), o("WAWebMentionNode").MentionTypeEnum.GROUP);
                            f.replace(x);
                            b = x;
                        } else {
                            b = new (o("Lexical")).TextNode(`@${subject}`);
                            f.replace(b);
                        }
                    } else {
                        if (E) {
                            b = new (o("Lexical")).TextNode(`@${E.subject}`);
                            f.replace(b);
                        }
                    }
                }
                if (!b) {
                    b = new (o("Lexical")).TextNode(jid);
                    f.replace(b);
                }
                const $ = o("WAWebLexicalUtils").$getRangeSelection();
                if ($ && (!$.anchor.getNode().isAttached() || !$.focus.getNode().isAttached())) {
                    b.select();
                }
            }
        }
    }
    function m(e) {
        const t = o("WAWebLexicalUtils").$getRangeSelection();
        if (t) {
            const n = t.anchor.getNode() === e ? t.anchor.offset : -1;
            const r = o("WAWebRichTextInputConst").AT_SYMBOL + e.name;
            const a = e.getTextContent();
            if (r !== a) {
                const i = a.startsWith(r) && n === a.length;
                const l = a.endsWith(r) && n === a.length - r.length;
                if (i) {
                    e.splitText(r.length);
                } else if (l) {
                    const s = e.splitText(a.length - r.length);
                    const u = s[0];
                    const c = s[1];
                    o("WAWebLexicalUtils").$toTextNode(u);
                    c.replace(o("WAWebMentionNode").$createMentionNode(e.name, e.wid, e.type));
                } else {
                    o("WAWebLexicalUtils").$toTextNode(e);
                }
            }
        }
    }
    function useP(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_groupMetadata = e.groupMetadata;
        const r = o("LexicalComposerContext").useLexicalComposerContext();
        const a = r[0];
        let i;
        let l;
        if (t[0] !== a || t[1] !== e_groupMetadata) {
            i = function() {
                const e = a.registerNodeTransform(o("Lexical").TextNode, function(e) {
                    d(e, e_groupMetadata);
                });
                const t = a.registerNodeTransform(o("WAWebMentionNode").MentionNode, f);
                return function() {
                    e();
                    t();
                };
            };
            l = [
                a,
                e_groupMetadata
            ];
            t[0] = a;
            t[1] = e_groupMetadata;
            t[2] = i;
            t[3] = l;
        } else {
            i = t[2];
            l = t[3];
        }
        useEffect(i, l);
        let u;
        if (t[4] !== a) {
            u = function() {
                const e = a.getEditorState().read(_);
                if (e) {
                    a.update(function() {
                        return e.remove();
                    });
                    return true;
                }
                return false;
            };
            t[4] = a;
            t[5] = u;
        } else {
            u = t[5];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(a, o("Lexical").KEY_BACKSPACE_COMMAND, u);
        return null;
    }
    function _() {
        const e = o("WAWebLexicalUtils").$getRangeSelection();
        if (!(!e || !e.isCollapsed())) {
            const t = e.anchor;
            const n = t.getNode();
            const r = t.offset === t.getNode().getTextContentSize();
            if (r && n instanceof o("WAWebMentionNode").MentionNode) {
                return n;
            }
        }
    }
    function f(e) {
        m(e);
    }
    function g(e, t) {
        let n;
        if (o("WAWebMiscGatingUtils").isDropLastNameEnabled() && t != null && t.hasUniqueShortNameMention(e)) {
            n = e.shortName;
        } else {
            const a = "~";
            const i = o("WAWebContactGetters").getNotifyName(e);
            n = o("WAWebMentionsPluginUtil").getMentionOrgMemberDisplayName(e) ?? ((!o("WAWebFrontendContactGetters").getIsMyContact(e) || o("WAWebContactGetters").getIsMe(e)) && i != null ? `${a}${i}` : o("WAWebFrontendContactGetters").getFormattedName(e));
        }
        return n;
    }
    l.default = useP;
}, 98);