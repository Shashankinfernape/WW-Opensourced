__d("WAWebContactEditDrawer.react", [
    "fbt",
    "VultureJSDeadComponent.react",
    "WALogger",
    "WAPromiseCache",
    "WAWebChatEntryPoint",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactEditDrawerLayoutV1.react",
    "WAWebContactEditDrawerLayoutV2.react",
    "WAWebContactLogging",
    "WAWebContactPhoneNumberFields.react",
    "WAWebContactPhoneNumberReadOnlyField.react",
    "WAWebContactSyncLogger",
    "WAWebCustomerDataAction",
    "WAWebCustomerDataCollection",
    "WAWebCustomerManagerGating",
    "WAWebDeleteContactAction",
    "WAWebDeleteContactPopup.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebDrawerUtils",
    "WAWebFBLogger",
    "WAWebFailedToSaveContactPopup.react",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebModalManager",
    "WAWebPhoneNumberValidationUtils",
    "WAWebQueryExistsJob",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebSaveContactAction",
    "WAWebSpinner.react",
    "WAWebStopSyncContactToAddressbookPopup.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUseContactManagementAvailability",
    "WAWebUserPrefsContactManagement",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameContactField.react",
    "WAWebUsernameKeyVerificationFlowLazy",
    "WAWebUsernamePhoneNumberMismatchModal.react",
    "WAWebUsernameUtils",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVelocityTransitionGroup",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "WDSIconIcCheck.react",
    "WDSIconIcDelete.react",
    "WDSIconIcPerson.react",
    "WDSIconIcSync.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSSwitch.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "useWAWebContactValues",
    "useWAWebDebouncedCallback",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useImperativeHandle, useMemo, useRef, useState } = m;
    const y = {
        paddingInline25: {
            paddingInlineStart: "xvahy20",
            paddingInlineEnd: "x1a4sjiy",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        marginTop10: {
            marginTop: "x1anpbxc",
            $$css: true
        },
        marginInlineStart30: {
            marginInlineStart: "xymharo",
            $$css: true
        },
        marginTop13: {
            marginTop: "xk9mzb7",
            $$css: true
        }
    };
    const C = {
        iconSection: {
            width: "x100vrsf",
            display: "x78zum5",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            justifyContent: "x1nhvcw1",
            alignItems: "x6s0dn4",
            color: "xhslqc4",
            $$css: true
        },
        deleteIconRefreshed: {
            color: "x14ug900",
            $$css: true
        },
        deleteIconContainer: {
            borderStartStartRadius: "xvs2etk",
            borderStartEndRadius: "xg3wpu6",
            borderEndEndRadius: "x1jwbhkm",
            borderEndStartRadius: "xgg4q86",
            height: "x1vqgdyp",
            width: "x100vrsf",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            flex: "x1okw0bk",
            cursor: "x1ypdohk",
            ":hover_backgroundColor": "x17gydlx",
            $$css: true
        },
        saveButton: {
            color: "x1pse0pq",
            backgroundColor: "xfn3atn",
            $$css: true
        }
    };
    const b = "sync-contact-switch";
    function v({ contactData, onBack, onCancel, onSave, origin, ref, viewType }) {
        const x = contactData?.isExistingContact === true;
        const $ = contactData?.phoneNumber?.user;
        const prevPhoneNumber = x ? $ : null;
        const N = contactData?.lid ?? contactData?.phoneNumber;
        const M = o("useWAWebContactValues").useOptionalContactValues(N, [
            o("WAWebFrontendContactGetters").getIsUsernameContact
        ]) ?? [];
        const isConvertingContactType_1 = M[0];
        const A = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        const F = useMemo(function() {
            if (r("isStringNullOrEmpty")($)) {
                if (r("isStringNullOrEmpty")(A)) {
                    return "";
                }
                return o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getCountryCodeIso(A);
            }
            const e = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue($);
            const e_countryCodeIso = e.countryCodeIso;
            return e_countryCodeIso ?? "";
        }, [
            $,
            A
        ]);
        const O = useState(contactData?.firstName ?? "");
        const B = O[0];
        const W = O[1];
        const q = useState(contactData?.lastName ?? "");
        const U = q[0];
        const V = q[1];
        const H = useState(F);
        const countryCode = H[0];
        const z = H[1];
        const j = useState(function() {
            if (r("isStringNullOrEmpty")($)) {
                return null;
            }
            const e = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue($);
            const e_phoneNumberWithoutCountryCode = e.phoneNumberWithoutCountryCode;
            if (e_phoneNumberWithoutCountryCode.length > 0) {
                return e_phoneNumberWithoutCountryCode;
            }
            return null;
        });
        const numberWithoutPrefix = j[0];
        const Q = j[1];
        const X = useState(false);
        const Y = X[0];
        const J = X[1];
        const Z = useState(contactData?.syncToAddressbook ?? o("WAWebUserPrefsContactManagement").getSyncToAddressbookDefaultSetting());
        const ee = Z[0];
        const te = Z[1];
        const ne = useState(contactData?.username);
        const re = ne[0];
        const setUsernameInput = ne[1];
        const ae = useState(null);
        const usernameState = ae[0];
        const setUsernameState = ae[1];
        const se = useState(contactData?.lid);
        const contactLid = se[0];
        const setContactLid = se[1];
        const de = o("WAWebCustomerManagerGating").customerManagerEnabled();
        const me = o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled();
        const pe = o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactsUIRefreshEnabled();
        const _e = o("WAWebUseContactManagementAvailability").useContactManagementAvailability();
        const { canSyncToAddressbook, isNativeContactOn } = _e;
        const heRef = useRef(null);
        const yeRef = useRef(new (r("WAPromiseCache"))((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                return yield o("WAWebQueryExistsJob").queryPhoneExists(e, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_SAVE);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), {
            maxCached: 100,
            maxAge: Infinity,
            shouldCache: function(t) {
                return !!t;
            }
        }));
        const Ce = useState(null);
        const be = Ce[0];
        const ve = Ce[1];
        const SeRef = useRef(0);
        const Re = r("useWAWebUnmountSignal")();
        const Le = useMemo(function() {
            return new (o("WAWebContactLogging")).AddContactEvent(origin, contactData);
        }, [
            origin,
            contactData
        ]);
        useEffect(function() {
            Le.logOpen();
        }, [
            Le
        ]);
        useImperativeHandle(ref, function() {
            return {
                getElement: function() {
                    return heRef.current;
                },
                handleDismiss: function() {
                    return Le.logCancel();
                }
            };
        });
        const onInviteSent = function(t = false) {
            let e;
            if (!Y) {
                if (t) {
                    Le.logCancel();
                }
                if ((e = onBack || onCancel) != null) {
                    e();
                }
            }
        };
        const ke = ()=>{
            o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                msg: s._("This contact isn't on WhatsApp.")
            }));
        };
        const Ie = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!Y) {
                    const n = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(countryCode, numberWithoutPrefix);
                    if (!r("isStringNullOrEmpty")(n)) {
                        const a = yield yeRef.current.getOrRun(n);
                        if (a == null) {
                            ke();
                            return;
                        }
                    }
                    let i = contactLid;
                    if (me && !r("isStringNullOrEmpty")(re)) {
                        if (usernameState === "key-required" && i == null) {
                            Le.logUsernameKeyRequired();
                            i = yield o("WAWebUsernameKeyVerificationFlowLazy").usernameKeyVerificationFlow({
                                username: re,
                                onInvalidKeyError: function() {
                                    Le.logUsernameKeySubmit();
                                }
                            });
                            if (i == null) {
                                return;
                            }
                            Le.logUsernameKeySubmit(true);
                        }
                        if (!r("isStringNullOrEmpty")(n)) {
                            const l = yield yeRef.current.getOrRun(n);
                            const c = l != null && l.username !== re;
                            if (c) {
                                Le.logUsernameAndPnMismatch();
                                o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebUsernamePhoneNumberMismatchModal.react"), {}));
                                return;
                            }
                        }
                    }
                    if (x && B.trim() === contactData?.firstName && U.trim() === contactData?.lastName && n === prevPhoneNumber && re === contactData?.username && ee === (contactData?.syncToAddressbook ?? false)) {
                        onInviteSent();
                        return;
                    }
                    const m = n ?? i;
                    const p = m != null ? o("WAWebContactCollection").ContactCollection.get(m) : null;
                    const _ = p != null && o("WAWebFrontendContactGetters").getIsMyContact(p);
                    const usernameEdited = r("isStringNullOrEmpty")(re) ? undefined : re !== contactData?.username;
                    const usernameAutofilled = _ ? undefined : contactData?.username != null;
                    const phoneNumberAutofilled = _ ? contactData?.phoneNumber != null : undefined;
                    try {
                        J(true);
                        const y = {
                            firstName: B.trim(),
                            lastName: U.trim(),
                            isExistingContact: _ || x
                        };
                        if (!r("isStringNullOrEmpty")(n)) {
                            yield o("WAWebSaveContactAction").saveContactAction(babelHelpers.extends({}, y, {
                                phoneNumber: n,
                                prevPhoneNumber,
                                syncToAddressbook: ee,
                                username: re ?? undefined,
                                lid: i ?? undefined,
                                isConvertingContactType: isConvertingContactType_1
                            }));
                        } else if (i != null && !r("isStringNullOrEmpty")(re)) {
                            let C;
                            let b;
                            const isConvertingContactType = x && !isConvertingContactType_1;
                            const S = n ?? prevPhoneNumber;
                            const L = x && isConvertingContactType_1 === true;
                            const prevLid = L && (C = contactData?.lid) != null ? C : undefined;
                            const prevUsername = L && !r("isStringNullOrEmpty")(contactData?.username) && (b = contactData?.username) != null ? b : undefined;
                            yield o("WAWebSaveContactAction").saveContactAction(babelHelpers.extends({}, y, {
                                lid: i,
                                username: re,
                                pn: S ?? undefined,
                                prevLid,
                                prevUsername,
                                isConvertingContactType
                            }));
                        } else {
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[contact edit] saving contact action but args are not valid"
                            ]))).sendLogs("saving-contact-but-args-not-valid", {
                                sampling: 0.01
                            });
                        }
                        Le.logSave({
                            firstName: B,
                            lastName: U,
                            syncToAddressbook: ee,
                            usernameEdited,
                            usernameAutofilled,
                            phoneNumberAutofilled
                        });
                        if (!x && !_) {
                            o("WAWebUserPrefsContactManagement").setSyncToAddressbookLastSetting(ee);
                        }
                        const T = n != null ? o("WAWebWidFactory").createUserWidOrThrow(n) : i;
                        if (T == null) {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[create contact] saving with no PN or LID"
                            ]))).sendLogs("create-contact-saving-with-no-pn-or-lid");
                        } else {
                            onSave({
                                contactId: T,
                                firstName: B,
                                lastName: U,
                                username: re ?? undefined,
                                phoneNumber: n ?? undefined
                            });
                        }
                        let D;
                        if (x || _) {
                            D = s._("Contact updated");
                        } else {
                            const $ = `${B} ${U}`.trim();
                            const N = r("isStringNullOrEmpty")($) ? re : $;
                            D = s._("{full-name} was added to your contacts", [
                                s._param("full-name", N)
                            ]);
                        }
                        o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                            id: o("WAWebToast.react").genId(),
                            msg: D
                        }));
                    } catch (error) {
                        Le.logSave({
                            firstName: B,
                            lastName: U,
                            syncToAddressbook: ee,
                            error,
                            usernameEdited,
                            usernameAutofilled,
                            phoneNumberAutofilled
                        });
                        const Component = r("WAWebFailedToSaveContactPopup.react");
                        o("WAWebModalManager").ModalManager.open(<Component onOK={o("WAWebModalManager").closeModalManager}/>);
                    } finally{
                        J(false);
                    }
                }
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        const Te = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = ++SeRef.current;
                const a = ()=>n === SeRef.current;
                const i = (t, n)=>{
                    if (a()) {
                        ve(t == null ? null : {
                            status: t,
                            phoneNumber: n
                        });
                    }
                };
                if (r("isStringNullOrEmpty")(t)) {
                    i(null, null);
                    return;
                }
                const l = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(e, t);
                if (l == null) {
                    i(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Invalid, null);
                    return;
                }
                const s = o("WAWebWidFactory").createUserWidOrThrow(`${l}@c.us`);
                const u = o("WAWebContactCollection").ContactCollection.get(s);
                if (u && o("WAWebFrontendContactGetters").getIsMyContact(u) && !x) {
                    i(o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Duplicate, null);
                    return;
                }
                const c = (yield yeRef.current.getOrRun(l)) != null;
                if (!Re.aborted) {
                    i(c ? o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Registered : o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Unregistered, c ? l : null);
                }
            });
            return function(n, r) {
                return e.apply(this, arguments);
            };
        })();
        const De = r("useWAWebDebouncedCallback")(Te, 250);
        const xeRef = useRef(false);
        useEffect(function() {
            if (!xeRef.current) {
                if (!r("isStringNullOrEmpty")($) && !r("isStringNullOrEmpty")(numberWithoutPrefix)) {
                    xeRef.current = true;
                    De(countryCode, numberWithoutPrefix);
                }
            }
        }, [
            $,
            countryCode,
            numberWithoutPrefix,
            De
        ]);
        const $e = function(t, n) {
            z(t);
            Q(n);
            if (r("isStringNullOrEmpty")(n)) {
                De.cancel();
                SeRef.current++;
                ve(null);
            } else {
                De(t, n);
            }
        };
        const onRemovePhoneNumber = function() {
            $e(countryCode, null);
        };
        const onRemoveUsername = function() {
            setUsernameInput(null);
            setUsernameState(null);
            setContactLid(null);
        };
        const onViewDuplicateContact = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(countryCode, numberWithoutPrefix);
                if (e != null) {
                    const t = o("WAWebWidFactory").createWid(`${e}@c.us`);
                    const n = yield o("WAWebFindChatAction").findOrCreateLatestChat(t, "createContact");
                    const r = n.chat;
                    yield o("WAWebCmd").Cmd.openChatAt({
                        chat: r,
                        msgContext: null,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactEdit
                    });
                    o("WAWebCmd").Cmd.chatInfoDrawer(r, {
                        showFullGroupDescription: false,
                        scrollToParticipantList: false
                    });
                    Le.logDuplicate();
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const WeComponent = function() {
            const e = !ee;
            if (contactData?.syncToAddressbook === true && !e) {
                const Component = r("WAWebStopSyncContactToAddressbookPopup.react");
                o("WAWebModalManager").ModalManager.open(<Component onOK={function() {
                    o("WAWebModalManager").ModalManager.close();
                    te(e);
                }} onCancel={o("WAWebModalManager").closeModalManager}/>);
            } else {
                te(e);
            }
        };
        const Ae = function() {
            if (!canSyncToAddressbook) {
                o("WAWebModalManager").ModalManager.open(d.jsx(r("VultureJSDeadComponent.react"), {
                    name: "WAWebSyncToggleDisabledPopup"
                }));
            }
        };
        const Fe = x ? s._("Edit contact") : s._("New contact");
        const Oe = be != null && be.status === o("WAWebContactPhoneNumberFields.react").PhoneNumberStatusType.Registered && o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(countryCode, numberWithoutPrefix) === be.phoneNumber;
        const Be = (!!B.trim() || !!U.trim()) && Oe;
        const We = o("WAWebContactPhoneNumberFields.react").shouldShowSyncToAddressbookSwitch(be?.status);
        const qe = me && o("WAWebUsernameUtils").usernameInputStateIsValid(usernameState);
        const Ue = isNativeContactOn && (Be || qe);
        const Ve = s._("Save contact");
        const Component = o("WAWebRound.react").Round;
        const Component_1 = r("WAWebVelocityTransitionGroup");
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const He = Ue ? <Component_2 align="center" justify="center"><Component_1 transitionName="btn" xstyle={o("WDSPaddings.stylex").wdsPaddings.paddingVer32} appear><Component testid="save-contact-btn" xstyle={C.saveButton} onClick={Y ? null : Ie} label={Ve}>{Y ? d.jsx(o("WAWebSpinner.react").Spinner, {
            color: "white",
            size: 30
        }) : d.jsx(r("WDSIconIcCheck.react"), {})}</Component></Component_1></Component_2> : null;
        let Ge;
        if (x && isNativeContactOn) {
            const ze = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = contactLid ?? contactData?.lid;
                    const hasCustomerData = de && t != null && o("WAWebCustomerDataCollection").CustomerDataCollection.maybeGetCustomerDataByChatJid(o("WAWebWidToJid").widToChatJid(t)) != null;
                    const Component = r("WAWebDeleteContactPopup.react");
                    o("WAWebModalManager").ModalManager.open(<Component syncToAddressbook={contactData?.syncToAddressbook ?? false} hasCustomerData={hasCustomerData} onCancel={o("WAWebModalManager").closeModalManager} onOK={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        J(true);
                        o("WAWebModalManager").ModalManager.close();
                        try {
                            const e = contactLid ?? contactData?.lid;
                            if (!isConvertingContactType_1 && !r("isStringNullOrEmpty")(prevPhoneNumber)) {
                                const t = yield yeRef.current.getOrRun(prevPhoneNumber);
                                if (t == null) {
                                    ke();
                                    return;
                                }
                                const n = o("WAWebWidFactory").createUserWidOrThrow(`${prevPhoneNumber}@c.us`);
                                yield o("WAWebDeleteContactAction").deleteContactAction({
                                    phoneNumber: n
                                });
                            } else {
                                if (!r("isStringNullOrEmpty")(re) && e != null) {
                                    yield o("WAWebDeleteContactAction").deleteContactAction({
                                        username: re,
                                        lid: e
                                    });
                                }
                            }
                            if (de && e != null) {
                                const a = o("WAWebWidToJid").widToChatJid(e);
                                try {
                                    yield o("WAWebCustomerDataAction").customerDataDeleteAction(a);
                                } catch (error) {
                                    o("WAWebFBLogger").WAWebFBLogger().warn("Failed to delete customer data for %s: %s", a, String(error));
                                }
                            }
                            Le.logDelete();
                            onInviteSent();
                            o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                                id: o("WAWebToast.react").genId(),
                                msg: s._("Contact deleted")
                            }));
                        } catch (error) {
                            Le.logDelete(error);
                            o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                                id: o("WAWebToast.react").genId(),
                                msg: s._("Can't delete contact right now, try again later.")
                            }));
                        } finally{
                            J(false);
                        }
                    })}/>);
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            const Component = o("WAWebClickable.react").Clickable;
            Ge = <Component dataTestId="btn-delete-contact" onClick={Y ? null : ze} ariaLabel={s._("Delete contact")} xstyle={C.deleteIconContainer}>{d.jsx(r("WDSIconIcDelete.react"), {
                xstyle: C.deleteIconRefreshed,
                height: 24
            })}</Component>;
        }
        const je = origin === o("WAWebContactLogging").ContactSourceType.NewChat;
        let phoneNumberField;
        if (x && !r("isStringNullOrEmpty")(numberWithoutPrefix) && !o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled) {
            phoneNumberField = d.jsx(r("WAWebContactPhoneNumberReadOnlyField.react"), {
                countryCode,
                numberWithoutPrefix
            });
        } else {
            const Component = o("WAWebContactPhoneNumberFields.react").ContactPhoneNumberFields;
            phoneNumberField = <Component status={be?.status} countryCode={countryCode} numberWithoutPrefix={numberWithoutPrefix} onChange={$e} onInviteSent={onInviteSent} onViewDuplicateContact={onViewDuplicateContact} origin={origin} fullPhoneNumber={o("WAWebPhoneNumberValidationUtils").getValidPhoneNumber(countryCode, numberWithoutPrefix)} isNewContact={!x}/>;
        }
        const Qe = s._("First name");
        const Xe = s._("Last name");
        const Ye = s._("Sync contact to phone");
        const Je = o("WAWebDrawerUtils").getDrawerHeaderType(viewType);
        const ZeComponent = function(t) {
            const Component = r("WAWebUsernameContactField.react");
            return <Component usernameInput={re} usernameState={usernameState} setUsernameInput={setUsernameInput} setUsernameState={setUsernameState} setContactLid={setContactLid} contactLid={contactLid} origin={origin} onInvalidUsername={function() {
                return Le.logInvalidUsername();
            }} onRemove={t}/>;
        };
        const Component_3 = o("WAWebFlex.react").FlexItem;
        const Component_4 = r("WDSText.react");
        const Component_5 = o("WAWebFlex.react").FlexItem;
        const Component_6 = r("WDSSwitch.react");
        const Component_7 = o("WAWebFlex.react").FlexItem;
        const Component_8 = o("WAWebFlex.react").FlexRow;
        const syncToAddressbookSwitch = We ? <Component_8 xstyle={[
            y.paddingInline25,
            o("WDSMargins.stylex").wdsMargins.marginTop24
        ]} align="center"><Component_3 xstyle={C.iconSection}>{d.jsx(r("WDSIconIcSync.react"), {
            height: 24,
            width: 24
        })}</Component_3><Component_5 grow={1} shrink={1}><label {...babelHelpers.extends({
            htmlFor: b
        }, {
            0: {},
            1: {
                className: "x1ypdohk"
            }
        }[!!canSyncToAddressbook << 0], {
            children: [
                Ye,
                <Component_4 type="Body3" colorName="contentDeemphasized" xstyle={y.marginTop10}>{s._("This contact will be added to your phone's address book.")}</Component_4>
            ]
        })}/></Component_5><Component_7 xstyle={y.marginInlineStart30}><Component_6 id={b} disabled={!canSyncToAddressbook || !Oe} value={ee} onChange={WeComponent} onClick={Ae} aria-label={Ye}/></Component_7></Component_8> : null;
        const Component_9 = o("WAWebDrawerHeader.react").DrawerHeader;
        const Component_10 = o("WAWebFlex.react").FlexItem;
        const Component_11 = o("WAWebRichTextField.react").RichTextField;
        const Component_12 = o("WAWebFlex.react").FlexItem;
        const Component_13 = o("WAWebFlex.react").FlexRow;
        const Component_14 = o("WAWebRichTextField.react").RichTextField;
        const Component_15 = o("WAWebFlex.react").FlexItem;
        const Component_16 = o("WAWebFlex.react").FlexRow;
        const Component_17 = r("WAWebContactEditDrawerLayoutV2.react");
        const Component_18 = r("WAWebDrawerSection.react");
        const Component_19 = r("WAWebDrawerBody.react");
        const Component_20 = r("WAWebDrawer.react");
        return <Component_20 ref={heRef} theme={je ? undefined : "striped"} testid="save-contact-drawer" viewType={viewType} tsNavigationData={{
            surface: "contact-creation"
        }}><Component_9 title={Fe} type={Je} onBack={onBack ? function() {
            return onInviteSent(true);
        } : undefined} onCancel={onCancel ? function() {
            return onInviteSent(true);
        } : undefined}>{Ge}</Component_9><Component_19><Component_18 theme="full-height" xstyle={o("WDSPaddings.stylex").wdsPaddings.paddingTop24}><Component_13 xstyle={y.paddingInline25}><Component_10 xstyle={C.iconSection}>{d.jsx(r("WDSIconIcPerson.react"), {
            width: 27,
            xstyle: o("WDSMargins.stylex").wdsMargins.marginTop32
        })}</Component_10><Component_12 grow={1} shrink={1}><Component_11 testid="contact-first-name-input" placeholder={Qe} ariaLabel={Qe} value={B} onChange={function({ text }) {
            return W(text);
        }} focusOnMount/></Component_12></Component_13><Component_16 xstyle={[
            y.paddingInline25,
            y.marginTop13
        ]}>{d.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: C.iconSection
        })}<Component_15 grow={1} shrink={1}><Component_14 testid="contact-last-name-input" placeholder={Xe} ariaLabel={Xe} value={U} onChange={function({ text }) {
            return V(text);
        }}/></Component_15></Component_16>{pe ? <Component_17 hasPrefilledPhoneNumber={!r("isStringNullOrEmpty")($)} hasPrefilledUsername={!r("isStringNullOrEmpty")(contactData?.username)} isExistingContact={x} onRemovePhoneNumber={onRemovePhoneNumber} onRemoveUsername={onRemoveUsername} phoneNumberField={phoneNumberField} renderUsernameField={ZeComponent} syncToAddressbookSwitch={syncToAddressbookSwitch}/> : d.jsx(r("WAWebContactEditDrawerLayoutV1.react"), {
            isExistingContact: x,
            phoneNumberField,
            syncToAddressbookSwitch,
            usernameField: me ? ZeComponent() : null
        })}</Component_18></Component_19>{He}</Component_20>;
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    l.default = v;
}, 226);