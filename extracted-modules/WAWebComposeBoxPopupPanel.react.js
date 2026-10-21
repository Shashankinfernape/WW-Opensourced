__d("WAWebComposeBoxPopupPanel.react", [
    "WAWebFbtCommon",
    "WAWebTabOrder",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useImperativeHandle, useRef } = c;
    const p = {
        container: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            backgroundColor: "xhjsbib",
            $$css: true
        },
        notQuestionContainer: {
            width: "xh8yej3",
            borderInlineStartWidth: "xpilrb4",
            borderInlineStartStyle: "x1t7ytsu",
            borderInlineStartColor: "x1vb5itz",
            $$css: true
        },
        containerRefresh: {
            backgroundColor: "xk7ee7b",
            borderInlineStartWidth: "x14e42zd",
            borderInlineEndWidth: "x10w94by",
            $$css: true
        },
        quotedQuestionContainer: {
            backgroundColor: "x4wrhlh",
            borderInlineStartWidth: "xpilrb4",
            borderInlineEndWidth: "x1lun4ml",
            borderInlineStartStyle: "x1t7ytsu",
            borderInlineEndStyle: "x18b5jzi",
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            $$css: true
        },
        notTopmostPanel: {
            transition: "x1lkwvkz",
            $$css: true
        },
        topmostPanel: {
            borderStartStartRadius: "x12l2aii",
            borderStartEndRadius: "x1mbk4o",
            transition: "x1yf5jnz",
            $$css: true
        },
        questionsTopMostPanel: {
            borderTopStyle: "x13fuv20",
            borderTopWidth: "x178xt8z",
            $$css: true
        },
        body: {
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            backgroundColor: "xk7ee7b",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            marginInlineStart: "x150mmf0",
            marginInlineEnd: "xqf2s3x",
            marginLeft: null,
            marginRight: null,
            marginTop: "x1380le5",
            $$css: true
        },
        cancelButtonRefresh: {
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            position: "x10l6tqk",
            top: "xfr5jun",
            insetInlineEnd: "x11dcrhx",
            left: null,
            right: null,
            $$css: true
        },
        transparentBackground: {
            backgroundColor: "xjbqb8w",
            $$css: true
        }
    };
    function _({ bodyBackground = true, children, isTopmostPanel = false, onOmit, questionType, ref, showCloseButton = true }) {
        const yRef = useRef();
        useImperativeHandle(ref, function() {
            return {
                getElement: function() {
                    return yRef.current;
                }
            };
        });
        const C = [
            p.container
        ];
        if (questionType != null) {
            C.push(p.quotedQuestionContainer);
        } else {
            C.push([
                p.notQuestionContainer,
                p.containerRefresh
            ]);
        }
        if (isTopmostPanel) {
            C.push(p.topmostPanel);
            if (questionType != null) {
                C.push(p.questionsTopMostPanel);
            }
        } else {
            C.push(p.notTopmostPanel);
        }
        const b = [
            p.body
        ];
        if (!bodyBackground) {
            b.push(p.transparentBackground);
        }
        const Component = r("WDSButton.react");
        const v = showCloseButton && <div className="x9f619 x1okw0bk x6s0dn4 xl56j7k xa7289b xorpaby xhslqc4 x1bu39yj x1lliihq x1n2onr6"><Component Icon={r("WDSIconIcClose.react")} variant="borderless" tabOrder={o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON} onPress={onOmit} xstyle={p.cancelButtonRefresh} aria-label={r("WAWebFbtCommon")("Cancel")}/></div>;
        return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(C), {
            "data-testid": "popup_panel",
            ref: yRef,
            children: <div {...babelHelpers.extends({}, e.props(b), {
                children: [
                    children,
                    v
                ]
            })}/>
        })}/>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 98);