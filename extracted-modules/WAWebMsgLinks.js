__d("WAWebMsgLinks", [
    "WAUnicodeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebLinkify",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMuseGroupRichResponseLinks",
    "WAWebProtobufsE2E.pb",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerGating",
    "WAWebSpoilerNotificationMask",
    "WAWebStateUtils",
    "uniqueBy"
], function(t, n, r, o, a, i, l) {
    function e({ content, sender, cachedValue = [], currentIndex = 0, endIndex = Infinity }) {
        if (currentIndex >= endIndex) {
            return [
                cachedValue,
                endIndex
            ];
        }
        const truncatedText = o("WAUnicodeUtils").firstNCodepoints(content, endIndex);
        const m = false;
        let p = o("WAWebLinkify").findLinks(truncatedText, m, sender);
        if (p.length > 0) {
            p = s({
                endIndex,
                fullText: content,
                links: p,
                sender,
                truncatedText
            });
        }
        return [
            p,
            endIndex
        ];
    }
    var s = ({ endIndex, fullText, links, sender, truncatedText })=>{
        const l = o("WAUnicodeUtils").numCodepoints(truncatedText);
        const s = o("WAUnicodeUtils").numCodepoints(fullText);
        if (l < s && links.length > 0) {
            const u = links[links.length - 1];
            if (u == null || u.index == null || u.url == null || u.href == null) {
                links.pop();
                return links;
            }
            const c = o("WAUnicodeUtils").numCodepoints(truncatedText.slice(0, u.index));
            const d = c + o("WAUnicodeUtils").numCodepoints(u.url);
            if (d === endIndex) {
                const m = o("WAWebLinkify").findLinks(fullText, false, sender);
                const p = c;
                const _ = m[m.length - 1];
                if (_ == null || _.url == null) {
                    return links.filter((e)=>e.href !== u.href);
                }
                const f = p + o("WAUnicodeUtils").numCodepoints(_.url);
                if (f > l) {
                    return links.filter((e)=>e.href !== u.href);
                }
            }
        }
        return links;
    };
    function u(t, sender, r) {
        const o = e({
            content: t,
            sender,
            endIndex: r
        });
        const a = o[0];
        return a;
    }
    function c(t, n) {
        const r = o("WAWebStateUtils").unproxy(t);
        const a = n ?? (r.linksIndexParsed ? r.linksIndexParsed : o("WAWebMsgGetters").getInitialPageSize(r) + 1);
        const i = o("WAWebFrontendMsgGetters").getText(r);
        if (i == null || r.linksIndexParsed === Infinity) {
            return r.getRawLinks();
        }
        const l = e({
            content: i,
            sender: o("WAWebMsgGetters").getSender(r),
            cachedValue: r.getRawLinks(),
            currentIndex: r.linksIndexParsed,
            endIndex: a
        });
        const s = l[0];
        const u = l[1];
        r.linksIndexParsed = u;
        r.setRawLinks(s);
        return s;
    }
    function d(t, n) {
        const a = o("WAWebStateUtils").unproxy(t);
        if (a.pollOptions == null) {
            return null;
        }
        if (a.getRawPollOptionsToLinks() == null) {
            const l = new Map(a.pollOptions?.map(function(t) {
                const n = e({
                    content: t.name,
                    sender: o("WAWebMsgGetters").getSender(a)
                });
                const r = n[0];
                return [
                    t,
                    r
                ];
            }));
            a.setRawPollOptionsToLinks(l);
        }
        return a.getRawPollOptionsToLinks()?.get(n);
    }
    function m(e, t) {
        if (t) {
            return e.type === "list" && e.list?.listType === o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.SINGLE_SELECT && e.list?.title != null;
        }
        return e.isDynamicReplyButtonsMsg === true && e.title != null;
    }
    function p(t, n) {
        if (t.getRawHeaderLinks().length > 0) {
            return t.getRawHeaderLinks();
        }
        const r = e({
            content: n,
            sender: o("WAWebMsgGetters").getSender(t),
            cachedValue: t.getRawHeaderLinks()
        });
        const a = r[0];
        if (a.length > 0) {
            t.setRawHeaderLinks(a);
        }
        return a;
    }
    function _(e) {
        const n = o("WAWebStateUtils").unproxy(e);
        if (m(n, true)) {
            return p(n, n.list?.title || "");
        } else {
            if (m(n, false)) {
                return p(n, n.title);
            }
            if (n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && n.interactiveHeader?.title != null) {
                return p(n, n.interactiveHeader.title);
            }
        }
        return [];
    }
    function f(t) {
        const n = o("WAWebStateUtils").unproxy(t);
        const n_footer = n.footer;
        if (!o("WAWebMsgGetters").getSupportsMessageFooterLinks(n) || n_footer == null) {
            return [];
        }
        if (n.getRawFooterLinks().length > 0) {
            return n.getRawFooterLinks();
        }
        const a = e({
            content: n_footer,
            sender: o("WAWebMsgGetters").getSender(n),
            cachedValue: n.getRawFooterLinks()
        });
        const i = a[0];
        if (i.length > 0) {
            n.setRawFooterLinks(i);
        }
        return i;
    }
    const g = new WeakMap;
    function h(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        const n = c(t);
        const r = v(t, n);
        const shouldRenderMessageBubble = o("WAWebMsgGetters").getLinkPreview(t);
        const i = o("WAWebFrontendMsgGetters").getText(t);
        if (i == null || !o("WAWebMsgGetters").getIsSpoiler(t) || !o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(i) || !o("WAWebSpoilerGating").isSpoilerReceiverEnabled()) {
            return {
                galleryLinks: r,
                isLinkPreviewHidden: false,
                shouldRenderMessageBubble,
                unfilteredGalleryLinks: r
            };
        }
        const l = C(t, i);
        const s = n.filter((e)=>l.get(e.index) === e.href);
        const u = o("WAWebMsgGetters").getMatchedText(t);
        const d = o("WAWebFrontendMsgGetters").getLinksInFullText(t).find((e)=>i.slice(e.index, e.index + e.url.length) === u || e.url === u || e.href === u);
        const isLinkPreviewHidden = y(shouldRenderMessageBubble, u, d, l);
        const galleryLinks = v(t, s);
        const _ = r.length > 0 && galleryLinks.length === 0;
        return {
            galleryLinks,
            isLinkPreviewHidden,
            shouldRenderMessageBubble: shouldRenderMessageBubble || _,
            unfilteredGalleryLinks: r
        };
    }
    function y(shouldRenderMessageBubble, t, n, r) {
        if (t === "") {
            return shouldRenderMessageBubble;
        }
        return n == null || r.get(n.index) !== n.href;
    }
    function C(e, t) {
        const n = o("WAWebMsgGetters").getSender(e);
        const r = g.get(e);
        if (r != null && r.text === t && r.sender === n) {
            return r.visibleLinkHrefsByIndex;
        }
        const a = o("WAWebSpoilerNotificationMask").maskSpoilersPreservingLength(t, {
            parseBlockCode: true,
            parseInlineCode: true
        });
        const visibleLinkHrefsByIndex = new Map(o("WAWebLinkify").findLinks(a, false, n).map((e)=>[
                e.index,
                e.href
            ]));
        g.set(e, {
            sender: n,
            text: t,
            visibleLinkHrefsByIndex
        });
        return visibleLinkHrefsByIndex;
    }
    function b(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        return v(t, c(t));
    }
    function v(e, t) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
            const n = o("WAWebMuseGroupRichResponseLinks").getMuseGroupRichResponseGalleryLinks(e);
            if (n.length > 0) {
                return n;
            }
        }
        return r("uniqueBy")(t, function(e) {
            return e.href;
        }).filter((e)=>e.isHttp);
    }
    function S(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        return c(t).length > 0 || t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && o("WAWebMuseGroupRichResponseLinks").getMuseGroupRichResponseGalleryLinks(t).length > 0;
    }
    function R(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        return t.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE || S(t);
    }
    function L(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        return o("WAWebFrontendMsgGetters").getLinksInFullText(t).filter((e)=>e.suspiciousCharacters?.size);
    }
    l.getLinksFromMsgImpl = e;
    l.getLinksFromText = u;
    l.getLinksFromMsg = c;
    l.getPollOptionLinks = d;
    l.shouldDisplayHeaderLinks = m;
    l.getHeaderLinks = _;
    l.getFooterLinks = f;
    l.getLinkGalleryRenderState = h;
    l.getGalleryLinks = b;
    l.hasLinkGalleryLinks = S;
    l.shouldListLinkIndexMsg = R;
    l.getSuspiciousLinks = L;
}, 98);