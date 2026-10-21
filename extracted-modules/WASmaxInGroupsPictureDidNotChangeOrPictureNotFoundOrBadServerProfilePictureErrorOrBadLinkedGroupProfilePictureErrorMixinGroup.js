__d("WASmaxInGroupsPictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsBadLinkedGroupProfilePictureErrorMixin",
    "WASmaxInGroupsBadServerProfilePictureErrorMixin",
    "WASmaxInGroupsPictureDidNotChangeMixin",
    "WASmaxInGroupsPictureNotFoundMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsPictureDidNotChangeMixin").parsePictureDidNotChangeMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "PictureDidNotChange",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsPictureNotFoundMixin").parsePictureNotFoundMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "PictureNotFound",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsBadServerProfilePictureErrorMixin").parseBadServerProfilePictureErrorMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "BadServerProfilePictureError",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsBadLinkedGroupProfilePictureErrorMixin").parseBadLinkedGroupProfilePictureErrorMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "BadLinkedGroupProfilePictureError",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "PictureDidNotChange",
            "PictureNotFound",
            "BadServerProfilePictureError",
            "BadLinkedGroupProfilePictureError"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    l.parsePictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup = e;
}, 98);