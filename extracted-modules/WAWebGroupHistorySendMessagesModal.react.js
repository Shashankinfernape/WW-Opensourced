__d("WAWebGroupHistorySendMessagesModal.react", [
    "fbt",
    "WAWebABProps",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebModal.react",
    "WAWebWamEnumTsSurface",
    "WDSBaseRadio.react",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSIconIcArrowBack.react",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useMemo, useState } = c;
    const p = [
        100,
        75,
        50,
        25
    ];
    const _ = {
        modalWrapper: {
            boxSizing: "x9f619",
            width: "xvue9z",
            $$css: true
        },
        headerRow: {
            columnGap: "x1aj3ljl",
            paddingTop: "x1xrf6ya",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "x12w63v0",
            paddingInlineEnd: "x1nzty39",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        contentContainer: {
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xvtqlqk",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        radioLabel: {
            paddingInlineStart: "xdx6fka",
            $$css: true
        }
    };
    function f({ count, isAll }) {
        if (isAll) {
            return s._("Last {count} (all)", [
                s._param("count", count)
            ]);
        }
        return s._("Last {count}", [
            s._param("count", count)
        ]);
    }
    function g(currentMessageCount) {
        const t = [];
        const n = o("WAWebABProps").getABPropConfigValue("group_history_message_count_limit");
        if (currentMessageCount <= n) {
            t.push({
                label: f({
                    count: currentMessageCount,
                    isAll: currentMessageCount !== Math.max(...p)
                }),
                value: currentMessageCount
            });
        }
        const r = p.reduce((acc, item)=>{
            if (item < currentMessageCount) {
                acc.push({
                    label: f({
                        count: item,
                        isAll: false
                    }),
                    value: item
                });
            }
            return acc;
        }, t);
        if (r.length === 0 && currentMessageCount > 0) {
            r.push({
                label: f({
                    count: currentMessageCount,
                    isAll: true
                }),
                value: currentMessageCount
            });
        }
        return r;
    }
    function h({ currentMessageCount, onCancel, onCountChanged, onDone, primaryButtonLabel, selectedMessageCount, showPinDisclaimer }) {
        const f = useState(selectedMessageCount);
        const h = f[0];
        const y = f[1];
        const C = useMemo(function() {
            return g(currentMessageCount);
        }, [
            currentMessageCount
        ]);
        const b = function(t) {
            const e = parseInt(t, 10);
            y(e);
            if (onCountChanged != null) {
                onCountChanged(e);
            } else {
                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.countChanged({
                    groupHistoryMessagesCount: e,
                    uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP
                });
            }
        };
        const actions = <div className="x1phvje8 xcldk2z xvpt6g3">{u.jsx(r("WDSButtonGroup.react"), {
            width: "hug",
            primaryButtonProps: {
                label: primaryButtonLabel ?? s._("Done"),
                onPress: function() {
                    return onDone(h);
                }
            },
            tertiaryButtonProps: {
                label: r("WAWebFbtCommon")("Cancel"),
                onPress: onCancel,
                variant: "borderless"
            }
        })}</div>;
        const Component = r("WDSButton.react");
        const Component_1 = r("WDSText.react");
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        const Component_4 = r("WDSText.react");
        const Component_5 = o("WAWebFlex.react").FlexColumn;
        const Component_6 = o("WAWebModal.react").Modal;
        return <Component_6 type={o("WAWebModal.react").ModalTheme.Auto} actions={actions} onOverlayClick={onCancel} testid="group-history-send-messages-modal"><Component_5 xstyle={_.modalWrapper} align="stretch"><Component_2 xstyle={_.headerRow} align="center"><Component Icon={r("WDSIconIcArrowBack.react")} onPress={onCancel} variant="borderless"/><Component_1 type="Body1" colorName="contentDefault">{s._("Send messages")}</Component_1></Component_2><Component_3 xstyle={_.contentContainer} role="radiogroup">{C.map((e)=>{
            const Component = r("WDSBaseRadio.react");
            const Component_1 = r("WDSText.react");
            return <label key={e.value} className="x78zum5 x6s0dn4 x1wxaq2x x16ovd2e x12xbjc7" data-testid={`message-count-option-${e.value}`}><Component value={e.value} name="message-count" checked={h === e.value} onChange={b}/><Component_1 type="Body1" colorName="contentDefault" xstyle={_.radioLabel}>{e.label}</Component_1></label>;
        })}</Component_3>{showPinDisclaimer && <div className="xdx6fka xvtqlqk x16ovd2e xscbp6u"><Component_4 type="Body2" colorName="contentDeemphasized">{s._("All available pinned messages will be included.")}</Component_4></div>}</Component_5></Component_6>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    l.default = h;
}, 226);