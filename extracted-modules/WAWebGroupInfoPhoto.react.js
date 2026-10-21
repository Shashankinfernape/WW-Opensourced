__d("WAWebGroupInfoPhoto.react", [
    "fbt",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupProfilePictureWamEvent",
    "WAWebGroupType",
    "WAWebMiscErrors",
    "WAWebNoop",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "WAWebProfilePicThumbAction",
    "WAWebProfilePicThumbGetters",
    "WAWebStatusCollection",
    "WAWebStatusGetters",
    "WAWebWamNumberToPreciseSizeBucket",
    "nullthrows",
    "react",
    "stylex",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebForceUpdate",
    "useWAWebGroupMetadataValues",
    "useWAWebListener",
    "useWAWebProfilePicThumbValues",
    "useWAWebStatusValues",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useState = c.useState;
    const p = {
        photoWrapper: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            width: "xh8yej3",
            $$css: true
        }
    };
    function _(t) {
        "use no forget";
        const { HoverIcon, chat, forceClickable } = t;
        const forceClickable_1 = forceClickable === undefined ? false : forceClickable;
        const t_readOnly = t.readOnly;
        const C = t_readOnly === undefined ? false : t_readOnly;
        const t_showAddIconOverlay = t.showAddIconOverlay;
        const showAddIconOverlay = t_showAddIconOverlay === undefined ? false : t_showAddIconOverlay;
        const t_showHiddenSubgroupIcon = t.showHiddenSubgroupIcon;
        const showHiddenSubgroupIcon = t_showHiddenSubgroupIcon === undefined ? false : t_showHiddenSubgroupIcon;
        const { size, testid, xstyle } = t;
        const I = o("useWAWebChatValues").useChatValues(chat.id, [
            o("WAWebChatGetters").getIsReadOnly,
            o("WAWebFrontendChatGetters").getFormattedTitle
        ]);
        const T = I[0];
        const D = I[1];
        const x = o("useWAWebContactValues").useContactValues(chat.contact.id, [
            o("WAWebContactGetters").getId,
            o("WAWebContactGetters").getProfilePicThumb
        ]);
        const $ = x[0];
        const P = x[1];
        const N = chat.contact.getProfilePicThumb();
        const M = o("useWAWebProfilePicThumbValues").useProfilePicThumbValues(N.id, [
            o("WAWebProfilePicThumbGetters").getImgFull
        ]);
        const startImage = M[0];
        const profilePicThumb = N;
        const F = r("nullthrows")(chat.groupMetadata);
        const O = o("useWAWebGroupMetadataValues").useGroupMetadataValues(F.id, [
            o("WAWebGroupMetadataGetters").getGroupType,
            o("WAWebFrontendGroupMetadataGetters").getSize
        ]);
        const B = O[0];
        const W = O[1];
        const q = chat.groupMetadata?.participants;
        const U = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        o("useWAWebListener").useListener(q, [
            "bulk_add",
            "bulk_remove",
            "reset",
            "sort",
            "change:isAdmin",
            "change:isSuperAdmin"
        ], U);
        const V = o("WAWebStatusCollection").StatusCollection.get(chat.id) ?? null;
        o("useWAWebListener").useListener(o("WAWebStatusCollection").StatusCollection, [
            "add",
            "remove",
            "change:msgsChanged"
        ], U);
        const H = o("useWAWebStatusValues").useOptionalStatusValues(V?.id, [
            o("WAWebStatusGetters").getUnreadCount,
            o("WAWebStatusGetters").getTotalCount
        ]);
        const G = H?.[1] ?? 0;
        const z = H?.[0] ?? 0;
        const statusRing = V != null && G > 0 ? {
            totalCount: G,
            viewedCount: G - z
        } : undefined;
        const K = q?.length ?? 0;
        const Q = W ?? 0;
        const X = q != null && q.iAmAdmin() ? K : Q;
        const Y = c_useState(false);
        const J = Y[0];
        const Z = Y[1];
        const ee = c_useState(false);
        const pending = ee[0];
        const ne = ee[1];
        const re = r("useWAWebUnmountSignal")();
        const onImageSet = function(thumb, full) {
            ne(true);
            let t;
            if (thumb != null && thumb !== "" && full != null && full !== "") {
                t = o("WAWebProfilePicThumbAction").setProfilePic({
                    full,
                    profilePicThumb,
                    thumb
                });
            } else {
                t = o("WAWebProfilePicThumbAction").deleteProfilePic(profilePicThumb);
            }
            r("WAPromiseRaceAbort")(t, re).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").ActionError, function(t) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "GroupInfoDrawer: failed to set/delete group image"
                ])));
                Z(!J);
            })).finally(()=>{
                ne(false);
            });
        };
        const sendGroupProfilePictureLoggingEvent = function({ groupProfileAction, hasProfilePicture, profilePictureType }) {
            const l = chat?.groupMetadata?.creation;
            const s = new Date((l ?? 0) * 1000);
            const u = new Intl.DateTimeFormat("en", {
                year: "numeric"
            }).format(s);
            const c = new Intl.DateTimeFormat("en", {
                month: "2-digit"
            }).format(s);
            const d = new Intl.DateTimeFormat("en", {
                day: "2-digit"
            }).format(s);
            const m = l != null ? `${u}-${c}-${d}` : "";
            const p = o("WAWebWamNumberToPreciseSizeBucket").numberToPreciseSizeBucket(X);
            const _ = q?.iAmAdmin() ?? false;
            new (o("WAWebGroupProfilePictureWamEvent")).GroupProfilePictureWamEvent({
                groupCreationDs: m,
                groupProfileAction,
                preciseGroupSizeBucket: p,
                isAdmin: _,
                hasProfilePicture,
                profilePictureType
            }).commit();
        };
        const ie = B === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
        let GROUP = o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP;
        if (ie) {
            GROUP = o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP;
        } else if (B === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP) {
            GROUP = o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP;
        }
        const readOnly = C || T || profilePicThumb && !profilePicThumb.canDelete() && !profilePicThumb.canSet() || o("WAWebChatGroupUtils").isSupportGroup(chat) || ie || F.isSuspendedOrTerminated();
        const ue = s._("Group profile picture for \"{group-name}\"", [
            s._param("group-name", D)
        ]);
        const Component = o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable;
        return <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(p.photoWrapper, xstyle), {
            "aria-label": ue,
            children: <Component key={String(J)} type={GROUP} id={$} attachToChat forceClickable={forceClickable_1} pending={pending} statusModelId={chat.id} statusRing={statusRing} startImage={startImage} readOnly={readOnly} onImageSet={onImageSet} sendGroupProfilePictureLoggingEvent={sendGroupProfilePictureLoggingEvent} HoverIcon={HoverIcon} showAddIconOverlay={showAddIconOverlay} showHiddenSubgroupIcon={showHiddenSubgroupIcon} size={size} testid={testid ?? "group-info-photo"}/>
        })}/>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 226);