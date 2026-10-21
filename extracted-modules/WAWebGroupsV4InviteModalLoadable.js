__d("WAWebGroupsV4InviteModalLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebGroupsV4InviteModal.react").__setRef("WAWebGroupsV4InviteModalLoadable").load();
        return e;
    }), "GroupsV4InviteModal");
    const d = r("WAWebLoadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingModal.react"), {
                title: s._("Group invite"),
                error: !!t.error
            });
        }
    });
    l.GroupsV4InviteModalLoadable = d;
}, 226);