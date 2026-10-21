__d("WAWebSetSubjectGroupAction", [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBoolFunc",
    "WAWebCommunitySubjectChangePopups.react",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupModifyInfoJob",
    "WAWebGroupType",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(e, t = "") {
        return p(o("WAWebStateUtils").unproxy(e), t);
    }
    function p(t, r, a = o("WAWebActionToast.react").genId()) {
        const i = r.trim();
        if (!i) {
            return (u || (u = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) !== o("WAWebGroupType").GroupType.COMMUNITY && i === t.contact.name) {
            return (u || (u = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        const l = o("WAWebGroupModifyInfoJob").setGroupSubject(t.id, i);
        const name = t.contact.name;
        let m;
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY) {
            m = new (o("WAWebActionToast.react")).ActionType(s._("Renaming community"));
        } else {
            m = new (o("WAWebActionToast.react")).ActionType(s._("Renaming group"));
        }
        const _ = s._("Couldn't rename community");
        const f = l.then(()=>{
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY) {
                return new (o("WAWebActionToast.react")).ActionType(s._("Community renamed to \"{community}\"", [
                    s._param("community", i)
                ]));
            }
            const e = name.trim() === "";
            return new (o("WAWebActionToast.react")).ActionType(s._("Group renamed to {subject}", [
                s._param("subject", i)
            ]), e ? null : {
                actionText: s._("Undo"),
                actionHandler: function() {
                    return p(t, name, a);
                }
            });
        }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY) {
                if (e.status === 530) {
                    o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebCommunitySubjectChangePopups.react").CommunitySubjectHalfSuccessErrorPopup, {
                        parentChat: t
                    }));
                    return;
                } else if (e.status >= 400) {
                    return new (o("WAWebActionToast.react")).ActionType(_);
                }
            }
            if (e.status >= 400) {
                return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't rename group."));
            }
        })).catch((n)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "models:chat:setSubject dropped"
            ])));
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY) {
                return new (o("WAWebActionToast.react")).ActionType(_);
            }
            return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't rename group."), {
                actionText: s._("Try again."),
                actionHandler: function() {
                    return p(t, i, a);
                }
            });
        });
        o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: a,
            initialAction: m,
            pendingAction: f
        }));
        return l.then(o("WAWebBoolFunc").returnTrue).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, o("WAWebBoolFunc").returnFalse));
    }
    l.setGroupSubject = m;
}, 226);