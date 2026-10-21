__d("WAWebMsgPhoneNumbers", [
    "WAUnicodeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebHelpersFindPhoneNumbers",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgType",
    "WAWebStateUtils"
], function(t, n, r, o, a, i, l) {
    function e({ content, cachedValue, currentIndex = 0, endIndex = Infinity }) {
        if (currentIndex >= endIndex) {
            return [
                cachedValue,
                endIndex
            ];
        }
        const s = o("WAUnicodeUtils").firstNCodepoints(content, endIndex);
        let u = o("WAWebHelpersFindPhoneNumbers").findPhoneNumbers(s);
        if (o("WAUnicodeUtils").numCodepoints(content) > endIndex && u.length > 0) {
            const c = u[u.length - 1];
            const d = o("WAUnicodeUtils").numCodepoints(s.slice(0, c.index));
            const m = d + o("WAUnicodeUtils").numCodepoints(c.phone);
            if (m === endIndex) {
                u = o("WAWebHelpersFindPhoneNumbers").findPhoneNumbers(content);
            }
        }
        return [
            u,
            endIndex
        ];
    }
    function s(t, n) {
        const r = e({
            content: t,
            cachedValue: [],
            endIndex: n
        });
        const o = r[0];
        return o;
    }
    function u(t, n) {
        const r = o("WAWebStateUtils").unproxy(t);
        const a = n ?? o("WAWebMsgGetters").getInitialPageSize(r) + 1;
        const i = o("WAWebFrontendMsgGetters").getText(r);
        if (i == null || r.phoneNumbersIndexParsed === Infinity) {
            return r.getRawPhoneNumbers();
        }
        const l = e({
            content: i,
            cachedValue: r.getRawPhoneNumbers(),
            currentIndex: r.phoneNumbersIndexParsed,
            endIndex: a
        });
        const s = l[0];
        const u = l[1];
        r.phoneNumbersIndexParsed = u;
        r.setRawPhoneNumbers(s);
        return s;
    }
    function c(t, n) {
        if (t.getRawHeaderPhoneNumbers().length > 0) {
            return t.getRawHeaderPhoneNumbers();
        }
        const r = e({
            content: n,
            cachedValue: t.getRawHeaderPhoneNumbers()
        });
        const o = r[0];
        t.setRawHeaderPhoneNumbers(o);
        return o;
    }
    function d(e) {
        const n = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebMsgLinks").shouldDisplayHeaderLinks(n, true)) {
            return c(n, n.list?.title || "");
        } else {
            if (o("WAWebMsgLinks").shouldDisplayHeaderLinks(n, false)) {
                return c(n, n.title);
            }
            if (n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && n.interactiveHeader?.title != null) {
                return c(n, n.interactiveHeader.title);
            }
        }
        return [];
    }
    function m(t) {
        const r = o("WAWebStateUtils").unproxy(t);
        if (!o("WAWebMsgGetters").getSupportsMessageFooterLinks(r) || r.footer == null) {
            return [];
        }
        if (r.getRawFooterPhoneNumbers().length > 0) {
            return r.getRawFooterPhoneNumbers();
        }
        const a = e({
            content: r.footer ?? "",
            cachedValue: r.getRawFooterPhoneNumbers()
        });
        const i = a[0];
        r.setRawFooterPhoneNumbers(i);
        return i;
    }
    l.getPhoneNumbersFromMsgImpl = e;
    l.getPhoneNumbersFromText = s;
    l.getPhoneNumbersFromMsg = u;
    l.getHeaderPhoneNumbersFromMsg = d;
    l.getFooterPhoneNumbersFromMsg = m;
}, 98);