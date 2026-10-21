__d("WAWebChatLockCodeModal.react", [
    "fbt",
    "Promise",
    "WAWebChatGetters",
    "WAWebChatLockAction",
    "WAWebChatLockArchivePopup.react",
    "WAWebChatLockSetupCodeModal.react",
    "WAWebChatLockUtils",
    "WAWebChatLockWAMUtils",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexBox.react",
    "WAWebIconPopup.react",
    "WAWebModalManager",
    "WAWebPasswordInputWithEmojiSupport.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumChatLockActionType",
    "WAWebWdsPictoChatlockIcon.react",
    "WDSIconWdsIcChatlockOutline.react",
    "WDSIconWdsIcChatlockUnlockedOutline.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = [
        "entryPoint",
        "onCancel",
        "onSuccess"
    ];
    const u = [
        "forcePrompt"
    ];
    let c;
    let d;
    const m = d || (d = o("react"));
    const d_useState = d.useState;
    function Component(t) {
        const { entryPoint, onCancel, onSuccess } = t;
        const u = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const c = d_useState("");
        const d = c[0];
        const _ = c[1];
        const f = d_useState(false);
        const g = f[0];
        const h = f[1];
        const y = function(t) {
            _(t);
            h(false);
        };
        const C = function() {
            onCancel?.();
        };
        const onPrimaryActionClick = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (d.length !== 0) {
                    o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
                        actionEntryPoint: entryPoint,
                        chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.AUTH_INITIATED
                    });
                    if (yield o("WAWebChatLockUtils").validateSecretCode(d, u.unlockAppOnSuccess ? {
                        unlockAppOnSuccess: u.unlockAppOnSuccess,
                        unlockEntryPoint: o("WAWebChatLockWAMUtils").actionEntryPointToUnlockEntryPoint(entryPoint),
                        landingSurface: u.landingSurface
                    } : {
                        unlockAppOnSuccess: u.unlockAppOnSuccess
                    })) {
                        o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
                            actionEntryPoint: entryPoint,
                            chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.AUTH_SUCCEEDED
                        });
                        if (onSuccess != null) {
                            onSuccess();
                        }
                        o("WAWebModalManager").ModalManager.close();
                    } else {
                        o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
                            actionEntryPoint: entryPoint,
                            chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.AUTH_FAILURE
                        });
                        h(true);
                    }
                }
                return false;
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const onSubmit = function() {
            onPrimaryActionClick();
        };
        const Component = r("WAWebPasswordInputWithEmojiSupport.react");
        const Component_1 = r("WDSText.react");
        const Component_2 = o("WAWebFlexBox.react").FlexRow;
        const Component_3 = o("WAWebFlex.react").FlexItem;
        const Component_4 = r("WAWebIconPopup.react");
        return <Component_4 icon={o("WAWebWdsPictoChatlockIcon.react").WdsPictoChatlockIcon} useFilledIcon={false} iconSize="large" title={s._("Enter your secret code")} primaryActionText={r("WAWebFbtCommon")("Continue")} primaryActionDisabled={d.length === 0} onPrimaryActionClick={onPrimaryActionClick} onSecondaryActionClick={C} onOverlayClick={C} secondaryActionText={r("WAWebFbtCommon")("Cancel")} extraContent=<Component_3 align="stretch" padding={[
            40,
            8,
            12,
            8
        ]}><Component onSubmit={onSubmit} placeholder={s._("Secret code")} focusOnMount enableShowPassword onValueChange={y}/><Component_2 paddingTop={4}>{g ? <Component_1 type="Body2" colorName="secondaryNegative">{s._("That's not the right secret code. Try again.")}</Component_1> : <div> </div>}</Component_2></Component_3> stretchButtons={false}/>;
    }
    Component.displayName = `${Component.name} [from ${i.id}]`;
    function f(e) {
        const e_forcePrompt = e.forcePrompt;
        const a = e_forcePrompt === undefined ? false : e_forcePrompt;
        const i = babelHelpers.objectWithoutPropertiesLoose(e, u);
        if (o("WAWebChatLockUtils").hasChatlockSecretCode()) {
            if (a !== true && o("WAWebChatLockUtils").lockedChatsAreAccessible()) {
                return (c || (c = n("Promise"))).resolve(true);
            }
            return new (c || (c = n("Promise")))(function(e) {
                o("WAWebModalManager").ModalManager.open(<Component {...babelHelpers.extends({
                    onSuccess: function() {
                        return e(true);
                    },
                    onCancel: function() {
                        return e(false);
                    }
                }, i)}/>);
            });
        }
        o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebChatLockSetupCodeModal.react"), {}));
        return (c || (c = n("Promise"))).resolve(false);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield f({
                unlockAppOnSuccess: false,
                forcePrompt: true,
                entryPoint: t.entryPoint
            });
            const A = r("WDSIconWdsIcChatlockUnlockedOutline.react");
            if (n) {
                o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
                    chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.REMOVE_CHAT_LOCK,
                    actionEntryPoint: t.entryPoint,
                    chatLockIsGroup: o("WAWebChatGetters").getIsGroup(e)
                });
                o("WAWebChatLockAction").setChatAsUnlocked(e.id);
                const Component = o("WAWebFlexBox.react").FlexRow;
                o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("{=m0}", [
                        s._implicitParam("=m0", <Component gap={8} align="center">{s._("{=m1} Chat unlocked", [
                            s._implicitParam("=m1", <A width={20} height={20}>{s._("")}</A>)
                        ])}</Component>)
                    ])
                }));
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.archive) {
                const n = yield o("WAWebChatLockArchivePopup.react").waitForChatLockArchivePopup();
                if (!n) {
                    return;
                }
            }
            const a = yield f({
                unlockAppOnSuccess: false,
                forcePrompt: true,
                entryPoint: t.entryPoint
            });
            const I = r("WDSIconWdsIcChatlockOutline.react");
            if (a) {
                o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
                    chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.ADD_CHAT_LOCK,
                    actionEntryPoint: t.entryPoint,
                    chatLockIsGroup: o("WAWebChatGetters").getIsGroup(e)
                });
                o("WAWebChatLockAction").setChatAsLocked(e.id);
                const Component = o("WAWebFlexBox.react").FlexRow;
                o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("{=m0}", [
                        s._implicitParam("=m0", <Component gap={8} align="center">{s._("{=m1} Chat locked", [
                            s._implicitParam("=m1", <I width={20} height={20}>{s._("")}</I>)
                        ])}</Component>)
                    ])
                }));
            }
        });
        return C.apply(this, arguments);
    }
    l.waitForChatlockSecretCode = f;
    l.promptAndUnlockChat = g;
    l.promptAndLockChat = y;
}, 226);