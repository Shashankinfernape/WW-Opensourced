__d("WAWebBizChatAssignmentModal.react", [
    "fbt",
    "WALogger",
    "WAWebAgentCollection",
    "WAWebAgentModelUtils",
    "WAWebBizChatAssignmentAction",
    "WAWebButton.react",
    "WAWebChatAssignmentCollection",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebQplFlowWrapper",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "WDSColorStyles.stylex",
    "WDSFontTokenStyles",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "qpl",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useState } = m;
    const f = {
        helperText: {
            marginInlineStart: "x150mmf0",
            whiteSpace: "xuxw1ft",
            $$css: true
        }
    };
    function g(e) {
        const t = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
        if (e.deviceId === t) {
            return 0;
        }
        if (e.deviceId === o("WAWebAgentModelUtils").PRIMARY_DEVICE_ID) {
            return 1;
        }
        return 2;
    }
    function h(e, t) {
        return g(e) - g(t);
    }
    function y() {
        const e = o("WAWebAgentCollection").AgentCollection.filter((e)=>!e.isDeleted);
        e.sort(h);
        return e;
    }
    function C(e) {
        const t = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
        let n;
        if (e.deviceId === t) {
            n = s._("You");
        } else {
            n = null;
        }
        const Component = r("WDSText.react");
        return <Component type="Body2" colorName="contentDeemphasized" testid="chat-assignment-agent-helper" xstyle={f.helperText}>{n}</Component>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function B2() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = d.jsx(r("WAWebFlexItem.react"), {
                grow: 1
            });
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    const v = r("qpl")._(701185297, "3420");
    const S = r("qpl")._(701183376, "3423");
    function RComponent({ chats, entryPoint, onSave }) {
        const c = function() {
            return new Map(chats.map((e)=>{
                const t = o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(e.id);
                return [
                    e.id.toString(),
                    t.length > 0 ? r("nullthrows")(t.head()).id : null
                ];
            }));
        };
        const m = useState(c);
        const f = m[0];
        const g = m[1];
        o("useWAWebListener").useListener(o("WAWebChatAssignmentCollection").ChatAssignmentCollection, [
            "add",
            "change",
            "remove"
        ], function() {
            g(c());
        });
        const h = ()=>{
            let commonlyAssignedAgentId = f.get(chats[0].id.toString());
            let areAllChatsUnassigned = true;
            f.forEach((n)=>{
                if (n !== commonlyAssignedAgentId) {
                    commonlyAssignedAgentId = null;
                }
                if (n != null) {
                    areAllChatsUnassigned = false;
                }
            });
            return {
                areAllChatsUnassigned,
                commonlyAssignedAgentId
            };
        };
        const R = useState(h().commonlyAssignedAgentId);
        const L = R[0];
        const E = R[1];
        const k = useState(y());
        const I = k[0];
        const T = k[1];
        o("useWAWebListener").useListener(o("WAWebAgentCollection").AgentCollection, [
            "add",
            "change",
            "remove"
        ], function() {
            T(y());
        });
        const D = function() {
            E(null);
        };
        const Component = o("WAWebText.react").WAWebTextLarge;
        const Component_1 = o("WAWebButton.react").WAWebButtonSimplified;
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const x = <Component_2 justify="all" align="center"><Component as="span" weight="medium">{s._("Assign chat")}</Component><Component_1 nowrap disabled={!L} testid="chat-assignment-unassign-button" onClick={D}>{s._("Unassign")}</Component_1></Component_2>;
        const $ = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    o("WAWebQplFlowWrapper").QPL.markerStart(v, {
                        annotations: {
                            int: {
                                chats_count: chats.length
                            }
                        }
                    });
                    yield o("WAWebBizChatAssignmentAction").changeChatAssignment(chats.map((e)=>({
                            agentId: L,
                            chat: e
                        })), entryPoint);
                    o("WAWebQplFlowWrapper").QPL.markerEnd(v, 2);
                    onSave?.();
                } catch (error) {
                    o("WAWebQplFlowWrapper").QPL.markerEnd(v, 3);
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "chat_assignment_modal: handleOk error ",
                        ""
                    ])), error);
                } finally{
                    o("WAWebModalManager").ModalManager.close();
                }
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        const P = function(t) {
            E(t.target.value);
        };
        const N = I.map((e)=>{
            const Component = o("WAWebFlex.react").FlexRow;
            return <li key={e.id}><Component align="center"><input id={e.id} data-testid="chat-assignment-agent-radio" className="x2lah0s xmix8c7 xqf2s3x x1xp8n7a" type="radio" name="agent" checked={e.id === L} value={e.id} onChange={P}/><label htmlFor={e.id} data-testid="chat-assignment-agent-label" className="x1ypdohk x1rg5ohu xmix8c7 x6ikm8r x10wlt62 x1yrsyyn xyri2b x10b6aqq x1c1uobl xlyipyv xuxw1ft"><span {...babelHelpers.extends({
                "data-testid": "chat-assignment-agent-label-text"
            }, (u || (u = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, o("WDSColorStyles.stylex").WDSColorStyles.contentDeemphasized), {
                children: e.name
            })}/></label><B2/>{C(e)}</Component></li>;
        });
        const M = ()=>{
            const e = h();
            const { areAllChatsUnassigned, commonlyAssignedAgentId } = e;
            if (chats.length > 1 && L == null) {
                return areAllChatsUnassigned;
            }
            return L === commonlyAssignedAgentId;
        };
        useEffect(function() {
            o("WAWebQplFlowWrapper").QPL.markerEnd(S, 2);
        }, []);
        const Component_3 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_3 tsNavigationData={{
            surface: "unknown",
            viewName: "chat-assignment"
        }} title={x} okText={s._("Save")} type={o("WAWebModal.react").ModalTheme.ChatAssignment} onCancel={o("WAWebModalManager").closeModalManager} onOK={$} okDisabled={M()}><form method="POST"><ol>{N}</ol></form></Component_3>;
    }
    RComponent.displayName = `${RComponent.name} [from ${i.id}]`;
    l.default = RComponent;
}, 226);