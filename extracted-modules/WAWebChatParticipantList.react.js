__d("WAWebChatParticipantList.react", [
    "fbt",
    "WAWebChatContact.react",
    "WAWebContactComparator",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebOutContactModel",
    "WAWebOutContactPillItem.react",
    "WAWebSingleSelection",
    "react"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useImperativeHandle, useMemo, useState } = d;
    const G3 = o("WAWebChatContact.react").ContactFactory();
    function h(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { contacts, onDelete, onDeleteOutContact, onFocusSearch, outContacts } = a;
        const y = useMemo(function() {
            return [].concat(contacts, outContacts ?? []).sort(o("WAWebContactComparator").ContactComparator);
        }, [
            contacts,
            outContacts
        ]);
        const C = useState(function() {
            return new (r("WAWebSingleSelection"))(y, function(e) {
                return e.id.toString();
            });
        });
        const b = C[0];
        const focusLast = function() {
            if (y.length > 0) {
                b.setLast(true);
            }
        };
        const S = function(t) {
            t.preventDefault();
            t.stopPropagation();
            const e = b.prev();
            if (e > -1) {
                b.setPrev(true);
            }
        };
        const R = function(t) {
            t.preventDefault();
            t.stopPropagation();
            const e = b.next();
            if (b.index === e) {
                b.unset();
                if (onFocusSearch != null) {
                    onFocusSearch(t);
                }
            } else {
                b.setNext(true);
            }
        };
        const L = function(t) {
            t.preventDefault();
            t.stopPropagation();
            const e = b.getVal();
            if (e instanceof r("WAWebOutContactModel")) {
                onDeleteOutContact?.(e);
                return;
            }
            if (e) {
                const n = contacts.find((t)=>t === e);
                if (n && onDelete) {
                    onDelete(t, n);
                }
            }
        };
        const E = function(t, n) {
            b.setVal(n);
        };
        useEffect(function() {
            b.init(Array.from(y), true);
        }, [
            y,
            b
        ]);
        useImperativeHandle(t_ref, function() {
            return {
                focusLast
            };
        });
        if (!contacts && !outContacts) {
            return null;
        }
        const k = y.length ? y.map((e)=>{
            if (e instanceof r("WAWebOutContactModel")) {
                const Component = r("WAWebOutContactPillItem.react");
                return <Component key={e.id.toString()} outContact={e} onDelete={function(t) {
                    return onDeleteOutContact?.(t);
                }}/>;
            }
            return <G3 key={e.id.toString()} contact={e} active={b} onDelete={a.onDelete} onClick={E} type={o("WAWebChatContact.react").ContactCellType.SMALL} theme={a.theme} waitIdle isGroupCreationFlow truncateName/>;
        }) : null;
        const I = {
            up: S,
            down: R
        };
        if (a.onDelete || a.onDeleteOutContact) {
            I[r("WAWebL10N").LR("left", "right")] = S;
            I[r("WAWebL10N").LR("right", "left")] = R;
            I.backspace = L;
        }
        const T = <ul aria-live="polite" aria-atomic="true" aria-label={s._("Selected contacts")}>{k}</ul>;
        const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component handlers={I}>{T}</Component>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    l.default = h;
}, 226);