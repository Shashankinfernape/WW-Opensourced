__d("WAWebLabelEditInput.react", [
    "fbt",
    "$InternalEnum",
    "Promise",
    "WAWebActionToast.react",
    "WAWebBizLabelEditingAction",
    "WAWebCellFrame.react",
    "WAWebL10N",
    "WAWebLabelCollection",
    "WAWebLabelColorPanel.react",
    "WAWebLabelConstants",
    "WAWebLabelErrors",
    "WAWebListIcon.react",
    "WAWebListNameValidation",
    "WAWebListUtils",
    "WAWebListsLogging",
    "WAWebMobilePlatforms",
    "WAWebRichTextField.react",
    "WAWebTabOrder",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumListAction",
    "WAWebWamEnumListUpdateUserJourneyAction",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamSmbListEventReporter",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "chunkArray",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebStableCallback",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useState } = d;
    const _ = {
        listIconCenter: {
            marginTop: "xav9cv8",
            $$css: true
        }
    };
    const f = n("$InternalEnum").Mirrored([
        "NameEmpty",
        "NameAlreadyExists",
        "SaveFailed"
    ]);
    const g = (t)=>{
        switch(t){
            case f.NameEmpty:
                return s._("Choose a name for your list.");
            case f.NameAlreadyExists:
                return s._("This name is in use. Choose a different name.");
            case f.SaveFailed:
                return s._("Couldn't save list");
        }
    };
    function HComponent({ editable, entryPoint, initialColorIndex, initialName, label, listsFlow, onCancel, onDraftValidChange, onSave, onTextChange, rowTheme, saveDraftRef }) {
        const T = useState(label?.name ?? initialName ?? "");
        const D = T[0];
        const x = T[1];
        const $ = useState(null);
        const P = $[0];
        const N = $[1];
        const M = useState(o("WAWebMobilePlatforms").isSMB() ? label?.colorIndex ?? initialColorIndex ?? o("WAWebLabelCollection").LabelCollection.getNextAvailableColor() : null);
        const w = M[0];
        const A = M[1];
        const F = useState(null);
        const O = F[0];
        const B = F[1];
        const W = useState(false);
        const pending = W[0];
        const U = W[1];
        const V = r("useWAWebUnmountSignal")();
        useEffect(function() {
            if (!listsFlow && entryPoint != null) {
                o("WAWebListsLogging").logListUpdateUserJorney({
                    listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
                    userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.START,
                    entryPoint
                });
            }
        }, [
            entryPoint,
            listsFlow
        ]);
        const H = r("WAWebL10N").getFullLocale();
        const G = (t)=>{
            const e = (label == null ? undefined : label.name.toLocaleLowerCase(H)) === t.toLocaleLowerCase(H);
            return !e && o("WAWebListNameValidation").isListNameDuplicate(t);
        };
        const z = r("useWAWebDebouncedCallback")(function(e) {
            if (G(e)) {
                N(g(f.NameAlreadyExists));
            }
        }, 300);
        const j = (t)=>{
            const e = t.trim();
            if (e === "") {
                z.cancel();
                N(g(f.NameEmpty));
                return false;
            }
            N(null);
            z(e);
            return true;
        };
        const K = (text)=>{
            j(text);
            if (listsFlow === true) {
                onSave(text, w);
            }
            x(text);
            onTextChange?.(text);
        };
        const Q = function(t) {
            B(O == null ? t.currentTarget : null);
        };
        const X = function(t) {
            A(t);
            B(null);
            if (listsFlow) {
                onSave(D, t);
            }
        };
        const onSave_1 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                onSave(D, w);
                if (!listsFlow) {
                    U(true);
                    try {
                        try {
                            if (label) {
                                yield o("WAWebBizLabelEditingAction").labelEditAction(label.id, D, label.predefinedId, w);
                            } else {
                                const t = yield o("WAWebBizLabelEditingAction").labelAddAction(D, w);
                                if (t != null && entryPoint != null) {
                                    o("WAWebListsLogging").logListUpdate({
                                        listId: t,
                                        listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
                                        entryPoint,
                                        chatsBeforeUpdate: [],
                                        addedChats: [],
                                        removedChats: []
                                    });
                                    o("WAWebWamSmbListEventReporter").logSmbListEvent({
                                        labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD,
                                        updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CREATE_CUSTOM_LIST,
                                        listId: t,
                                        customListTitle: D
                                    });
                                    o("WAWebListsLogging").logListUpdateUserJorney({
                                        listId: `${t}`,
                                        listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
                                        userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.CREATE_LIST,
                                        entryPoint
                                    });
                                }
                            }
                        } catch (e) {
                            throw new (o("WAWebLabelErrors")).LabelActionError;
                        }
                        if (label == null) {
                            const r = o("WAWebActionToast.react").genId();
                            const a = new (o("WAWebActionToast.react")).ActionType(s._("List created"));
                            o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
                                id: r,
                                initialAction: a,
                                pendingAction: (e || (e = n("Promise"))).resolve(a)
                            }));
                        } else {
                            o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                                msg: s._("List saved")
                            }));
                        }
                    } catch (error) {
                        if (error instanceof o("WAWebLabelErrors").LabelActionError) {
                            o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                                msg: g(f.SaveFailed)
                            }));
                        }
                    } finally{
                        if (!V.aborted) {
                            U(false);
                        }
                    }
                }
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        const J = D.trim() !== "" && P == null;
        useEffect(function() {
            onDraftValidChange?.(J);
            return function() {
                onDraftValidChange?.(false);
            };
        }, [
            J,
            onDraftValidChange
        ]);
        const Z = r("useWAWebStableCallback")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (G(D.trim())) {
                N(g(f.NameAlreadyExists));
                return;
            }
            yield onSave_1();
        }));
        useEffect(function() {
            const e = saveDraftRef;
            if (e != null) {
                e.current = J ? Z : null;
                return function() {
                    e.current = null;
                };
            }
        }, [
            J,
            Z,
            saveDraftRef
        ]);
        const ee = rowTheme === "create-new-list-smb" || rowTheme === "create-new-list-consumer";
        const te = rowTheme === "create-new-list-smb";
        let ne;
        if (o("WAWebMobilePlatforms").isSMB() && w != null) {
            const colors = r("chunkArray")(o("WAWebListUtils").getSelectableLabelColors(), 5);
            const Component = o("WAWebLabelColorPanel.react").LabelColorPopup;
            const Component_1 = r("WAWebUnstyledButton.react");
            ne = <Component_1 onClick={Q}>{c.jsx(r("WAWebListIcon.react"), {
                color: o("WAWebListUtils").colorIndexToHex(w),
                size: 20,
                xstyle: _.listIconCenter
            })}{O != null && <Component colors={colors} selectedIndex={w} onSelect={X} anchor={O} onClose={function() {
                return B(null);
            }}/>}</Component_1>;
        }
        const Component = o("WAWebRichTextField.react").RichTextField;
        const oe = <Component placeholder={s._("List name")} value={D} maxLength={o("WAWebLabelConstants").LABEL_NAME_MAX_LENGTH} error={P} validate={function(t) {
            return j(t ?? "");
        }} onChange={function({ text }) {
            return K(text);
        }} onSave={onSave_1} onCancel={onCancel} theme="label-input" lineWrap={false} pending={pending} lockable={listsFlow !== true} startActive editable={editable} emojiBtnPosition="side" hideFloatingLabel showRemaining focusOnMount tabOrder={ee ? o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT : undefined} testid="edit-label-input"/>;
        const Component_1 = r("WDSText.react");
        const ae = ee ? <div className="xh8yej3 x1j8ymqv x78zum5 xdt5ytf xdx6fka"><Component_1 type="Body3" colorName="contentDeemphasized">{s._("List name")}</Component_1><div {...babelHelpers.extends({}, {
            0: {
                className: "x6s0dn4 x78zum5 x1q0g3np xe3kor7"
            },
            1: {
                className: "x6s0dn4 x78zum5 x1q0g3np xe3kor7 x1wu0eqq xsohdcw"
            }
        }[!!te << 0], {
            children: [
                <div className="x98rzlu">{oe}</div>,
                ne != null && te ? <div {...babelHelpers.extends({}, {
                    0: {
                        className: "x6s0dn4 xkh2ocl x16pkwpw x1q0q8m5 xlxy82 x78zum5 x1r3wxaz x1h678fw"
                    },
                    1: {
                        className: "x6s0dn4 xkh2ocl x1q0q8m5 xlxy82 x78zum5 x1r3wxaz x1h678fw x61tcke"
                    }
                }[(P != null) << 0], {
                    children: ne
                })}/> : ne
            ]
        })}/></div> : <div {...babelHelpers.extends({}, {
            0: {
                className: "xh8yej3 x1j8ymqv"
            },
            1: {
                className: "xh8yej3 x1j8ymqv x12w63v0"
            }
        }[(ne == null && listsFlow !== true) << 0], {
            children: oe
        })}/>;
        return c.jsx(r("WAWebCellFrame.react"), {
            theme: rowTheme,
            image: ee ? undefined : ne,
            primary: ae
        });
    }
    HComponent.displayName = `${HComponent.name} [from ${i.id}]`;
    l.default = HComponent;
}, 226);