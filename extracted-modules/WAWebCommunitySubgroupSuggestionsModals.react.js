__d("WAWebCommunitySubgroupSuggestionsModals.react", [
    "fbt",
    "Promise",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(t, r) {
        return new (e || (e = n("Promise")))(function(e) {
            const n = t === 0 ? s._("No pending group suggestions will be approved because this community is full.") : s._("_j{\"*\":{\"*\":\"Only {available} of {pending_suggestions} pending group suggestions will be approved because this community is full.\",\"_1\":\"Only {available} of 1 pending group suggestion will be approved because this community is full.\"}}", [
                s._param("available", t, [
                    0
                ]),
                s._plural(r, "pending_suggestions")
            ]);
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            o("WAWebModalManager").ModalManager.open(<Component title={s._("Community is full")} okText={t !== 0 ? s._("Approve") : undefined} onOK={function() {
                e(true);
                o("WAWebModalManager").closeModalManager();
            }} onCancel={function() {
                e(false);
                o("WAWebModalManager").closeModalManager();
            }}>{n}</Component>);
        });
    }
    l.confirmCommunityFull = d;
}, 226);