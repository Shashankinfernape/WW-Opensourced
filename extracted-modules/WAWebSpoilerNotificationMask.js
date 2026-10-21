__d("WAWebSpoilerNotificationMask", [
    "WAWebFormat",
    "WAWebFormatConfiguration",
    "WAWebPreviewFormatGating",
    "WAWebSpoilerFormatRegex",
    "WAWebUnformatSerializer"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.onDelimiter = function(t) {
            if (t === o("WAWebSpoilerFormatRegex").SPOILER_DELIMITER) {
                return "";
            }
            return t;
        };
        return t;
    })(r("WAWebUnformatSerializer"));
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.onDelimiter = function(t) {
            if (t === o("WAWebSpoilerFormatRegex").SPOILER_DELIMITER) {
                return " ".repeat(o("WAWebSpoilerFormatRegex").SPOILER_DELIMITER.length);
            }
            return t;
        };
        t.onMutator = function(t, n, r) {
            const e = n.join("");
            if (t.maskOnUnformat !== true) {
                return e;
            }
            return " ".repeat(u(r, e.length));
        };
        return t;
    })(r("WAWebUnformatSerializer"));
    function u(e, t) {
        const n = Array.isArray(e) ? e[1] : null;
        if (typeof n === "string") {
            return n.length;
        }
        return t;
    }
    const c = "⠁⠂⠃⠄⠅⠆⠇";
    function d(t, spoilerReplacement = c, a) {
        return r("WAWebFormat")(t, o("WAWebFormatConfiguration").NotificationSpoilerMask(a), e, {
            serializerOptions: {
                spoilerReplacement
            }
        });
    }
    function m(e, t = c) {
        const n = o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled();
        return d(e, t, {
            parseBlockCode: n,
            parseInlineCode: n
        });
    }
    function p(e, t) {
        const n = r("WAWebFormat")(e, o("WAWebFormatConfiguration").NotificationSpoilerMask(t), s);
        if (n.length === e.length) {
            return n;
        }
        return " ".repeat(e.length);
    }
    l.BRAILLE_MASK = c;
    l.maskSpoilersForNotification = d;
    l.maskSpoilersForPreview = m;
    l.maskSpoilersPreservingLength = p;
}, 98);