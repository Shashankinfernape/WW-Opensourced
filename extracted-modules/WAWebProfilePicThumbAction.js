__d("WAWebProfilePicThumbAction", [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebContactProfilePicThumbBridge",
    "WAWebMiscErrors",
    "WAWebProfilePicThumbGetters",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    function p({ full, onDismiss, profilePicThumb, thumb }) {
        return f({
            full,
            onDismiss,
            profilePicThumb: o("WAWebStateUtils").unproxy(profilePicThumb),
            thumb
        });
    }
    function _(e, t) {
        return g({
            onDismiss: t,
            profilePicThumb: o("WAWebStateUtils").unproxy(e)
        });
    }
    function f({ full, onDismiss, profilePicThumb, thumb, toastId = o("WAWebActionToast.react").genId() }) {
        const profilePicThumb_id = profilePicThumb.id;
        if (!profilePicThumb.canSet()) {
            return (c || (c = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        const _ = o("WAWebContactProfilePicThumbBridge").sendSetPicture(profilePicThumb_id, thumb, full);
        profilePicThumb.pendingPic = thumb;
        const g = o("WAWebUserPrefsMeUser").isMeAccount(profilePicThumb_id);
        const h = g ? new (o("WAWebActionToast.react")).ActionType(s._("Setting profile picture")) : new (o("WAWebActionToast.react")).ActionType(s._("Setting group icon"));
        const y = _.catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "models:ProfilePicThumb:setPicture dropped"
            ])));
            throw g ? new (o("WAWebActionToast.react")).ActionType(s._("Couldn't set profile picture.")) : new (o("WAWebActionToast.react")).ActionType(s._("Couldn't set group icon."));
        }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
            if (e.status >= 400) {
                const t = g ? s._("Couldn't set profile picture.") : s._("Couldn't set group icon.");
                return new (o("WAWebActionToast.react")).ActionType(t, {
                    actionText: s._("Try again."),
                    actionHandler: function() {
                        return f({
                            full,
                            onDismiss,
                            profilePicThumb,
                            thumb,
                            toastId
                        });
                    }
                });
            }
        })).then(()=>{
            if (g) {
                return new (o("WAWebActionToast.react")).ActionType(s._("Profile picture set"));
            }
            return new (o("WAWebActionToast.react")).ActionType(s._("Group icon set"));
        });
        const Component = o("WAWebActionToast.react").ActionToast;
        o("WAWebToastManager").ToastManager.open(<Component id={toastId} initialAction={h} pendingAction={y} onDismiss={onDismiss}/>);
        return _.then((e)=>{
            profilePicThumb.set({
                tag: e.tag,
                eurl: e.eurl
            });
        }).finally(()=>{
            profilePicThumb.pendingPic = undefined;
        });
    }
    function g({ onDismiss, profilePicThumb, toastId = o("WAWebActionToast.react").genId() }) {
        const profilePicThumb_id = profilePicThumb.id;
        if (!profilePicThumb.canDelete()) {
            return (c || (c = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        const d = o("WAWebContactProfilePicThumbBridge").requestDeletePicture(profilePicThumb_id);
        profilePicThumb.pendingPic = o("WAWebProfilePicThumbGetters").getFallbackType(profilePicThumb);
        const p = o("WAWebUserPrefsMeUser").isMeAccount(profilePicThumb_id);
        const _ = p ? new (o("WAWebActionToast.react")).ActionType(s._("Removing profile picture")) : new (o("WAWebActionToast.react")).ActionType(s._("Removing group icon"));
        const f = d.catch((e)=>{
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "models:ProfilePicThumb:deletePicture dropped"
            ])));
            throw p ? new (o("WAWebActionToast.react")).ActionType(s._("Couldn't remove profile picture.")) : new (o("WAWebActionToast.react")).ActionType(s._("Couldn't remove group icon."));
        }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
            if (e.status >= 400) {
                const n = p ? s._("Couldn't remove profile picture.") : s._("Couldn't remove group icon.");
                return new (o("WAWebActionToast.react")).ActionType(n, {
                    actionText: s._("Try again."),
                    actionHandler: function() {
                        return g({
                            onDismiss,
                            profilePicThumb,
                            toastId
                        });
                    }
                });
            }
        })).then(()=>{
            if (p) {
                return new (o("WAWebActionToast.react")).ActionType(s._("Profile picture removed"));
            }
            return new (o("WAWebActionToast.react")).ActionType(s._("Group icon removed"));
        });
        const Component = o("WAWebActionToast.react").ActionToast;
        o("WAWebToastManager").ToastManager.open(<Component id={toastId} initialAction={_} pendingAction={f} onDismiss={onDismiss}/>);
        return d.then(()=>{
            profilePicThumb.set({
                tag: undefined,
                eurl: undefined
            });
        }).finally(()=>{
            profilePicThumb.pendingPic = undefined;
        });
    }
    l.setProfilePic = p;
    l.deleteProfilePic = _;
}, 226);