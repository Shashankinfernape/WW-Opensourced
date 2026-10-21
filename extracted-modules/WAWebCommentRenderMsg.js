__d("WAWebCommentRenderMsg", [
    "WAWebUnsupportedMessage",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ displayAuthor, msg }) {
        return s.jsx(r("WAWebUnsupportedMessage"), {
            msg: msg.safe(),
            displayAuthor,
            hideUpdateButton: true
        });
    }
    u.displayName = `${u.name} [from ${i.id}]`;
    l.default = u;
}, 98);