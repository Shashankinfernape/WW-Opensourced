__d("WAWebPinMessageModal.react", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebConfirmPopup.react",
    "WAWebDevOnlyBadge.react",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebPinMsgConstants",
    "WAWebPinMsgGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebRadio.react",
    "WAWebSendPinMessageAction",
    "WDSMargins.stylex",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebLogEventOnce",
    "useWAWebMsgValues",
    "useWAWebPinnedMessages"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useState = c.useState;
    const p = [
        o("WAWebPinMsgConstants").PinExpiryDurationOption.FiveSeconds,
        o("WAWebPinMsgConstants").PinExpiryDurationOption.FifteenSeconds,
        o("WAWebPinMsgConstants").PinExpiryDurationOption.OneMinute
    ];
    const _ = [
        o("WAWebPinMsgConstants").PinExpiryDurationOption.OneDay,
        o("WAWebPinMsgConstants").PinExpiryDurationOption.SevenDays,
        o("WAWebPinMsgConstants").PinExpiryDurationOption.ThirtyDays
    ];
    function F20({ logger, msg, replacing = false }) {
        const h = c_useState(o("WAWebPinMsgConstants").PinExpiryDurationOption.SevenDays);
        const y = h[0];
        const C = h[1];
        const b = o("WAWebFrontendMsgGetters").getChat(msg);
        const v = r("useWAWebPinnedMessages")(b);
        const v_length = v.length;
        const R = o("WAWebPinMsgGatingUtils").getMaxPins();
        const L = v_length >= R;
        const E = L && !replacing;
        const k = o("useWAWebMsgValues").useMsgValues(msg.id, [
            o("WAWebMsgGetters").getIsEphemeral,
            o("WAWebMsgGetters").getEphemeralExpirationTimestamp
        ]);
        const I = k[0];
        const T = k[1];
        o("useWAWebLogEventOnce").useLogEventOnce(function() {
            if (E) {
                logger.pinMessageReplacementDialogDisplay();
            } else {
                logger.pinMessageExpirationDialogDisplay(o("WAWebPinMsgConstants").getPinExpiryDuration(y));
            }
        });
        const D = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WAWebModalManager").ModalManager.close();
                if (L && replacing) {
                    const t = v[0];
                    const n = o("WAWebMsgCollection").MsgCollection.get(t.parentMsgKey);
                    if (n != null) {
                        try {
                            logger.pinMessageExpirationDialogUnpin(n, t);
                            yield o("WAWebSendPinMessageAction").sendPinInChatMsg(n, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL);
                        } catch (t) {
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[PinMessageModal] Could not replace pin"
                            ])));
                        }
                    }
                }
                try {
                    logger.pinMessageExpirationDialogClickPin(o("WAWebPinMsgConstants").getPinExpiryDuration(y));
                    yield o("WAWebSendPinMessageAction").sendPinInChatMsg(msg, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL, y);
                } catch (e) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[PinMessageModal] Could not send pin message"
                    ])));
                }
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        if (E) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
            return <Component_1 tsNavigationData={{
                surface: "pin-message-replacement",
                viewName: "pin-message-replacement"
            }} title={s._("Replace oldest pin?")} cancelText={r("WAWebFbtCommon")("Cancel")} onCancel={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("Continue")} onOK={function() {
                logger.pinMessageReplacementDialogContinue();
                o("WAWebModalManager").ModalManager.open(<F20 msg={msg} logger={logger} replacing/>);
            }} testid="replace-pin-message-modal"><Component type="Body1" colorName="contentDefault" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom12} testid="pin-message-replacement-description">{s._("Your new pin will replace the oldest one.")}</Component></Component_1>;
        }
        const x = o("WAWebPinMsgGatingUtils").isPinnedMessagesThirtyDayRemovalEnabled() ? _.filter((e)=>e !== o("WAWebPinMsgConstants").PinExpiryDurationOption.ThirtyDays) : [].concat(_);
        const $ = o("WAWebPinMsgGatingUtils").isPinnedMessagesInfiniteSenderEnabled();
        if ($) {
            x.push(o("WAWebPinMsgConstants").PinExpiryDurationOption.Never);
        }
        if (o("WAWebABProps").getABPropConfigValue("pinned_messages_sender_short_expiry_durations_enabled")) {
            x.unshift(...p);
        }
        const P = Math.max(...x.filter((e)=>e !== o("WAWebPinMsgConstants").PinExpiryDurationOption.Never).map(o("WAWebPinMsgConstants").getPinExpiryDuration));
        let N;
        if (I && T != null) {
            const M = $ || P + o("WATimeUtils").unixTime() > T;
            if (M) {
                const Component = r("WDSText.react");
                N = <Component type="Body1" colorName="contentDefault" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom12} testid="pin-message-ephemeral-disclaimer">{s._("Message may disappear before the pin.")}</Component>;
            }
        }
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 tsNavigationData={{
            surface: "pin-message-expiration",
            viewName: "pin-message-expiration"
        }} title={replacing ? s._("Choose how long your new pin lasts") : s._("Choose how long your pin lasts")} okText={s._("Pin")} onOK={D} onCancel={o("WAWebModalManager").closeModalManager} testid="pin-message-modal"><Component type="Body1" colorName="contentDefault" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom12} testid="pin-message-description">{s._("You can unpin at any time.")}</Component>{N}<form><ol>{x.map((e)=>{
            const Component = o("WAWebRadio.react").RadioWithLabel;
            return <li key={e}><Component name="duration" value={e} label={g(e)} checked={y === e} tabIndex={0} onChange={function() {
                logger.pinMessageExpirationDialogSelectOption(o("WAWebPinMsgConstants").getPinExpiryDuration(e));
                C(e);
            }} testid={e}/></li>;
        })}</ol></form></Component_1>;
    }
    F20.displayName = `${F20.name} [from ${i.id}]`;
    function g(e) {
        switch(e){
            case o("WAWebPinMsgConstants").PinExpiryDurationOption.FiveSeconds:
                return d.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                    label: s._("5 seconds")
                });
            case o("WAWebPinMsgConstants").PinExpiryDurationOption.FifteenSeconds:
                return d.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                    label: s._("15 seconds")
                });
            case o("WAWebPinMsgConstants").PinExpiryDurationOption.OneMinute:
                return d.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                    label: s._("1 minute")
                });
            case o("WAWebPinMsgConstants").PinExpiryDurationOption.OneDay:
                return s._("24 hours");
            case o("WAWebPinMsgConstants").PinExpiryDurationOption.SevenDays:
                return s._("7 days");
            case o("WAWebPinMsgConstants").PinExpiryDurationOption.ThirtyDays:
                return s._("30 days");
            case o("WAWebPinMsgConstants").PinExpiryDurationOption.Never:
                return s._("Always");
        }
    }
    l.default = F20;
}, 226);