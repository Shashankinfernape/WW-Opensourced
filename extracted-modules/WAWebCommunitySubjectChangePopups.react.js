__d("WAWebCommunitySubjectChangePopups.react", [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebSetSubjectGroupAction",
    "fbs",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d() {
        return r("fbs")._("Error updating announcement group name");
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m({ onOK, parentChat }) {
        const a = d();
        const i = s._("The community name was updated but the announcement group was not. Click to try again.");
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component title={a} onCancel={o("WAWebModalManager").closeModalManager} onOK={function() {
            _(parentChat);
            onOK?.();
        }} okText={r("WAWebFbtCommon")("Try again")}>{i}</Component>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p({ parentChat }) {
        const n = s._("Announcement group name wasn't updated");
        const a = s._("Try again.");
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component title={n} onCancel={o("WAWebModalManager").closeModalManager} onOK={function() {
            return _(parentChat);
        }} okText={r("WAWebFbtCommon")("Try again")}>{a}</Component>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(parentChat) {
        const name = parentChat.contact.name;
        o("WAWebSetSubjectGroupAction").setGroupSubject(parentChat, name).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "community_half_success_error_popup:onSetSubject failed"
            ])));
        });
        o("WAWebModalManager").ModalManager.close();
    }
    l.getCommunitySubjectSyncingIssueTitle = d;
    l.CommunitySubjectSyncingIssuePopup = m;
    l.CommunitySubjectHalfSuccessErrorPopup = p;
}, 226);