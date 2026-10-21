__d("WAWebLeaveCommunityAnnouncementGroupPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ isArchived, isCommunityCreator, onArchive, onClose }) {
        const l = onClose ?? o("WAWebModalManager").closeModalManager;
        let c = s._("You cannot exit the announcement group as a community admin. You can remove yourself as an admin and then exit this group.");
        if (isCommunityCreator) {
            c = s._("You cannot exit the announcement group because you created the community it's in. You can deactivate the community through community info instead.");
        }
        return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, babelHelpers.extends({
            testid: "leave-cag-as-admin-popup",
            onOK: l,
            okText: r("WAWebFbtCommon")("Cancel")
        }, !isArchived && {
            onCancel: onArchive,
            cancelText: r("WAWebFbtCommon")("Archive instead")
        }, {
            children: c
        }));
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function d({ isArchived, onArchive, onClose }) {
        const i = onClose ?? o("WAWebModalManager").closeModalManager;
        return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, babelHelpers.extends({
            testid: "leave-cag-as-admin-popup"
        }, isArchived ? {
            okText: r("WAWebFbtCommon")("OK"),
            onOK: i
        } : {
            okText: r("WAWebFbtCommon")("Archive instead"),
            onOK: onArchive,
            cancelText: r("WAWebFbtCommon")("OK"),
            onCancel: i
        }, {
            children: isArchived ? s._("To exit this group, you must exit the community.") : s._("To exit this group, you must exit the community. You can always archive it instead.")
        }));
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.LeaveCommunityAnnouncementGroupAdminPopup = c;
    l.LeaveCommunityAnnouncementGroupMemberPopup = d;
}, 226);