__d("WAWebNewsletterInfoPhoto.react", [
    "fbt",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebContactGetters",
    "WAWebEditNewsletterMetadataAction",
    "WAWebFbtCommon",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "WAWebProfilePicThumbGetters",
    "WAWebToastManager",
    "WAWebWamEnumChannelAdminAction",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebProfilePicThumbValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useCallback, useState } = m;
    function f(e) {
        const t = o("react-compiler-runtime").c(23);
        const { HoverIcon, adminFunnelLogger, chat, readOnly, showAddIconOverlay, showOutline, size, testId, xstyle } = e;
        const showAddIconOverlay_1 = showAddIconOverlay === undefined ? true : showAddIconOverlay;
        const y = useState(false);
        const pending = y[0];
        const b = y[1];
        let v;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            v = [
                o("WAWebContactGetters").getId,
                o("WAWebContactGetters").getProfilePicThumb
            ];
            t[0] = v;
        } else {
            v = t[0];
        }
        const S = o("useWAWebContactValues").useContactValues(chat.contact.id, v);
        const R = S[0];
        let L;
        if (t[1] !== chat.contact) {
            L = chat.contact.getProfilePicThumb();
            t[1] = chat.contact;
            t[2] = L;
        } else {
            L = t[2];
        }
        const E = L;
        let k;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            k = [
                o("WAWebProfilePicThumbGetters").getImgFull
            ];
            t[3] = k;
        } else {
            k = t[3];
        }
        const I = o("useWAWebProfilePicThumbValues").useProfilePicThumbValues(E.id, k);
        const startImage = I[0];
        let D;
        if (t[4] !== adminFunnelLogger || t[5] !== chat) {
            D = function(t, fullImg, r) {
                adminFunnelLogger.logImageSetEvent(r);
                adminFunnelLogger.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP);
                b(true);
                g({
                    adminFunnelLogger,
                    chat,
                    fullImg
                }).finally(()=>{
                    b(false);
                });
            };
            t[4] = adminFunnelLogger;
            t[5] = chat;
            t[6] = D;
        } else {
            D = t[6];
        }
        const onImageSet = D;
        let $;
        if (t[7] !== xstyle) {
            $ = (u || (u = r("stylex"))).props(xstyle);
            t[7] = xstyle;
            t[8] = $;
        } else {
            $ = t[8];
        }
        const P = testId ?? "newsletter-photo-picker";
        let N;
        if (t[9] !== HoverIcon || t[10] !== R || t[11] !== onImageSet || t[12] !== startImage || t[13] !== pending || t[14] !== readOnly || t[15] !== showAddIconOverlay_1 || t[16] !== showOutline || t[17] !== size || t[18] !== P) {
            const Component = o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable;
            N = <Component testid={P} type={o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER} id={R} attachToChat startImage={startImage} readOnly={readOnly} onImageSet={onImageSet} pending={pending} HoverIcon={HoverIcon} showAddIconOverlay={showAddIconOverlay_1} size={size} showOutline={showOutline}/>;
            t[9] = HoverIcon;
            t[10] = R;
            t[11] = onImageSet;
            t[12] = startImage;
            t[13] = pending;
            t[14] = readOnly;
            t[15] = showAddIconOverlay_1;
            t[16] = showOutline;
            t[17] = size;
            t[18] = P;
            t[19] = N;
        } else {
            N = t[19];
        }
        let M;
        if (t[20] !== $ || t[21] !== N) {
            M = <div {...babelHelpers.extends({}, $, {
                children: N
            })}/>;
            t[20] = $;
            t[21] = N;
            t[22] = M;
        } else {
            M = t[22];
        }
        return M;
    }
    function g({ adminFunnelLogger, chat, fullImg, toastId = o("WAWebActionToast.react").genId() }) {
        const c = o("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(chat, {
            editPicture: true
        }, {
            picture: fullImg ?? null
        });
        const m = new (o("WAWebActionToast.react")).ActionType(fullImg != null ? s._("Setting channel icon") : s._("Removing channel icon"));
        const p = c.then(()=>{
            adminFunnelLogger.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS);
            return new (o("WAWebActionToast.react")).ActionType(fullImg != null ? s._("Channel icon set") : s._("Channel icon removed"));
        }).catch((t)=>{
            adminFunnelLogger.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE);
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "newsletter:handleEditPhoto dropped"
            ])));
            return new (o("WAWebActionToast.react")).ActionType(fullImg != null ? s._("Couldn't set channel icon") : s._("Couldn't remove channel icon"), {
                actionText: r("WAWebFbtCommon")("Try again"),
                actionHandler: function() {
                    return g({
                        adminFunnelLogger,
                        chat,
                        fullImg,
                        toastId
                    });
                }
            });
        });
        o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: toastId,
            initialAction: m,
            pendingAction: p
        }));
        return c;
    }
    l.default = f;
}, 226);