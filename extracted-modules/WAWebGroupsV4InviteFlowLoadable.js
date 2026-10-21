__d("WAWebGroupsV4InviteFlowLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebGroupsV4InviteFlow.react").__setRef("WAWebGroupsV4InviteFlowLoadable").load();
        return e;
    }), "GroupsV4InviteFlow");
    const d = r("react-loadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingConfirmPopup.react"), {
                okText: s._("Invite to group"),
                error: !!t.error
            });
        }
    });
    l.requireBundle = c;
    l.GroupsV4InviteFlowLoadable = d;
}, 226);