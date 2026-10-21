__d("WAWebMembersRemovedAlert.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebLinkJoinedMembersUtils",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function C2Component({ chat, groupMetadata, messageTimestamp }) {
        const i = function() {
            o("WAWebLinkJoinedMembersUtils").openGroupPermissionsDrawer(chat, groupMetadata);
        };
        const l = messageTimestamp != null ? (()=>{
            const e = o("WAWebLinkJoinedMembersUtils").calculateTimeRange(messageTimestamp);
            const { endTime, startTime } = e;
            return o("WAWebLinkJoinedMembersUtils").formatJoinTimeRange(startTime, endTime);
        })() : null;
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "members-removed-alert"
        }} title={s._("Members removed")} onOK={i} okText={s._("Manage link permissions")} onCancel={o("WAWebModalManager").closeModalManager} cancelText={r("WAWebFbtCommon")("Cancel")}>{l != null ? s._("All members who joined using a group link on {timeRange} were removed by an admin.", [
            s._param("timeRange", l)
        ]) : s._("All members who joined using a group link were removed by an admin.")}</Component>;
    }
    C2Component.displayName = `${C2Component.name} [from ${i.id}]`;
    function d(e, t, messageTimestamp) {
        o("WAWebModalManager").ModalManager.open(<C2Component chat={e} groupMetadata={t} messageTimestamp={messageTimestamp}/>);
    }
    l.openMembersRemovedAlert = d;
}, 226);