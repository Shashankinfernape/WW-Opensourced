__d("LexicalHistory.prod", [
    "Lexical",
    "LexicalExtensionGetPeerDependencyFromEditor",
    "LexicalExtensionNamedSignals",
    "LexicalExtensionSignals"
], function $module_LexicalHistory_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function r(e, t, n) {
        let r = n();
        let i = 0;
        let a = r;
        let s = 0;
        let l = null;
        return function(u, d, c, _, p, f) {
            const h = n();
            if (f.has(require("Lexical").COMPOSITION_START_TAG)) {
                a = r;
                s = i;
                l = u;
            }
            if (f.has(require("Lexical").HISTORIC_TAG)) {
                i = 0;
                r = h;
                return 2;
            }
            if (f.has(require("Lexical").COMPOSITION_END_TAG) && l) {
                r = a;
                i = s;
                u = l;
            }
            const g = f.has(require("Lexical").PASTE_TAG) || f.has(require("Lexical").CUT_TAG) ? 0 : ((e, t, n, r, i)=>{
                if (e === null || n.size === 0 && r.size === 0 && !i) {
                    return 0;
                }
                const t__selection = t._selection;
                const e__selection = e._selection;
                if (i) {
                    return 1;
                }
                if (!(require("Lexical").$isRangeSelection(t__selection) && require("Lexical").$isRangeSelection(e__selection) && e__selection.isCollapsed() && t__selection.isCollapsed())) {
                    return 0;
                }
                const l = (({ _nodeMap }, t, n)=>{
                    const i = [];
                    for (const _e of t){
                        const _t = _nodeMap.get(_e);
                        if (_t !== undefined) {
                            i.push(_t);
                        }
                    }
                    for (const [_e2, _t2] of n){
                        {
                            if (!_t2) {
                                continue;
                            }
                            const _n = _nodeMap.get(_e2);
                            if (!(_n === undefined || require("Lexical").$isRootNode(_n))) {
                                i.push(_n);
                            }
                        }
                    }
                    return i;
                })(t, n, r);
                if (l.length === 0) {
                    return 0;
                }
                if (l.length > 1) {
                    const _n2 = t._nodeMap;
                    const _r = _n2.get(t__selection.anchor.key);
                    const _i = _n2.get(e__selection.anchor.key);
                    if (_r && _i && !e._nodeMap.has(_r.__key) && require("Lexical").$isTextNode(_r) && _r.__text.length === 1 && t__selection.anchor.offset === 1) {
                        return 2;
                    }
                    return 0;
                }
                const u = l[0];
                const d = e._nodeMap.get(u.__key);
                if (!require("Lexical").$isTextNode(d) || !require("Lexical").$isTextNode(u) || d.__mode !== u.__mode) {
                    return 0;
                }
                const d___text = d.__text;
                const u___text = u.__text;
                if (d___text === u___text) {
                    return 0;
                }
                const a_anchor = t__selection.anchor;
                const s_anchor = e__selection.anchor;
                if (a_anchor.key !== s_anchor.key || a_anchor.type !== "text") {
                    return 0;
                }
                const p_offset = a_anchor.offset;
                const f_offset = s_anchor.offset;
                const S = u___text.length - d___text.length;
                if (S === 1 && f_offset === p_offset - 1) {
                    return 2;
                }
                if (S === -1 && f_offset === p_offset + 1) {
                    return 3;
                }
                if (S === -1 && f_offset === p_offset) {
                    return 4;
                }
                return 0;
            })(u, d, _, p, e.isComposing());
            const S = (()=>{
                const n = c === null || c.editor === e;
                const a = f.has(require("Lexical").HISTORY_PUSH_TAG);
                if (!a && n && f.has(require("Lexical").HISTORY_MERGE_TAG)) {
                    return 0;
                }
                if (g === 1) {
                    return 2;
                }
                if (u === null) {
                    return 1;
                }
                const d__selection = d._selection;
                if (!(_.size > 0 || p.size > 0)) {
                    if (d__selection !== null) {
                        return 0;
                    }
                    return 2;
                }
                const l = typeof t === "number" ? t : t.peek();
                if (a === false && g !== 0 && g === i && h < r + l && n || _.size === 1 && ((e, t, n)=>{
                    const r = t._nodeMap.get(e);
                    const i = n._nodeMap.get(e);
                    const t__selection = t._selection;
                    const n__selection = n._selection;
                    return !(require("Lexical").$isRangeSelection(t__selection) && require("Lexical").$isRangeSelection(n__selection) && t__selection.anchor.type === "element" && t__selection.focus.type === "element" && n__selection.anchor.type === "text" && n__selection.focus.type === "text" || !require("Lexical").$isTextNode(r) || !require("Lexical").$isTextNode(i) || r.__parent !== i.__parent) && JSON.stringify(t.read(function() {
                        return r.exportJSON();
                    })) === JSON.stringify(n.read(function() {
                        return i.exportJSON();
                    }));
                })(Array.from(_)[0], u, d)) {
                    return 0;
                }
                return 1;
            })();
            r = h;
            i = g;
            return S;
        };
    }
    function i(e, t) {
        if (t !== null && t.editor === e.editor) {
            return t;
        }
        const e_editor = e.editor;
        const editorState = e_editor.getEditorState();
        if (editorState.isEmpty()) {
            return null;
        }
        return {
            editor: e_editor,
            editorState
        };
    }
    function a(e, t) {
        e.undoStack = [];
        e.redoStack = [];
        e.current = null;
        if (t) {
            t(e);
        }
    }
    function s(e, t, n, s = Date.now, l, u = null) {
        const d = r(e, n, s);
        const c = function c() {
            if (l) {
                l(t);
            }
        };
        c();
        return require("Lexical").mergeRegister(e.registerCommand(require("Lexical").UNDO_COMMAND, function() {
            ((e, t, n)=>{
                const { redoStack, undoStack } = t;
                if (undoStack.length !== 0) {
                    const _s = t.current;
                    const _l = undoStack.pop();
                    if (_l) {
                        const _t3 = i(_l, _s);
                        if (_t3 !== null) {
                            redoStack.push(_t3);
                            e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, true);
                        }
                    }
                    if (undoStack.length === 0) {
                        e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, false);
                    }
                    t.current = _l || null;
                    if (n) {
                        n(t);
                    }
                    if (_l) {
                        _l.editor.setEditorState(_l.editorState, {
                            tag: require("Lexical").HISTORIC_TAG
                        });
                    }
                }
            })(e, t, l);
            return true;
        }, require("Lexical").COMMAND_PRIORITY_EDITOR), e.registerCommand(require("Lexical").REDO_COMMAND, function() {
            ((e, t, n)=>{
                const { redoStack, undoStack } = t;
                if (redoStack.length !== 0) {
                    const _s2 = t.current;
                    const _l2 = redoStack.pop();
                    if (_l2) {
                        const _t4 = i(_l2, _s2);
                        if (_t4 !== null) {
                            undoStack.push(_t4);
                            e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, true);
                        }
                    }
                    if (redoStack.length === 0) {
                        e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, false);
                    }
                    t.current = _l2 || null;
                    if (n) {
                        n(t);
                    }
                    if (_l2) {
                        _l2.editor.setEditorState(_l2.editorState, {
                            tag: require("Lexical").HISTORIC_TAG
                        });
                    }
                }
            })(e, t, l);
            return true;
        }, require("Lexical").COMMAND_PRIORITY_EDITOR), e.registerCommand(require("Lexical").CLEAR_EDITOR_COMMAND, function() {
            a(t, l);
            return false;
        }, require("Lexical").COMMAND_PRIORITY_EDITOR), e.registerCommand(require("Lexical").CLEAR_HISTORY_COMMAND, function() {
            a(t, l);
            e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, false);
            e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, false);
            return true;
        }, require("Lexical").COMMAND_PRIORITY_EDITOR), e.registerUpdateListener(function({ editorState, prevEditorState, dirtyLeaves, dirtyElements, tags }) {
            const { current, redoStack, undoStack } = t;
            const f = current === null ? null : current.editorState;
            if (current !== null && editorState === f) {
                return;
            }
            const h = d(prevEditorState, editorState, current, dirtyLeaves, dirtyElements, tags);
            if (h === 1) {
                if (redoStack.length !== 0) {
                    t.redoStack = [];
                    e.dispatchCommand(require("Lexical").CAN_REDO_COMMAND, false);
                }
                const _n3 = ((e, prevEditorState_1, current_1)=>{
                    if (current_1 === null) {
                        return null;
                    }
                    if (current_1.editor === e) {
                        return babelHelpers.extends({}, current_1);
                    }
                    if (prevEditorState_1.isEmpty()) {
                        return null;
                    }
                    return {
                        editor: e,
                        editorState: prevEditorState_1
                    };
                })(e, prevEditorState, current);
                if (_n3 !== null) {
                    undoStack.push(_n3);
                    const _t5 = typeof u === "number" || u === null ? u : u.peek();
                    if (_t5 !== null && undoStack.length > _t5) {
                        undoStack.splice(0, undoStack.length - _t5);
                    }
                    e.dispatchCommand(require("Lexical").CAN_UNDO_COMMAND, true);
                }
            } else if (h === 2) {
                return;
            }
            t.current = {
                editor: e,
                editorState
            };
            c();
        }));
    }
    function createInitialHistoryState() {
        return {
            current: null,
            redoStack: [],
            undoStack: []
        };
    }
    const u = {
        build: function build(e, { delay, createInitialHistoryState, disabled, maxDepth, now }, s) {
            return babelHelpers.extends({}, require("LexicalExtensionNamedSignals").namedSignals({
                delay,
                disabled,
                historyState: createInitialHistoryState(e),
                maxDepth,
                now
            }), s.getInitResult());
        },
        config: {
            createInitialHistoryState,
            delay: 300,
            disabled: typeof window === "undefined",
            maxDepth: null,
            now: function now() {
                return Date.now();
            }
        },
        init: function init() {
            return {
                canRedo: require("LexicalExtensionSignals").signal(false),
                canUndo: require("LexicalExtensionSignals").signal(false)
            };
        },
        name: "@lexical/history/History",
        register: function register(t, n, o) {
            const _o$getInitResult = o.getInitResult();
            const { canUndo, canRedo } = _o$getInitResult;
            const a = o.getOutput();
            const l = function l(t) {
                return require("LexicalExtensionSignals").batch(function() {
                    canUndo.value = t != null && t.undoStack.length > 0;
                    canRedo.value = t != null && t.redoStack.length > 0;
                });
            };
            return require("LexicalExtensionSignals").effect(function() {
                if (!a.disabled.value) {
                    return s(t, a.historyState.value, a.delay, function() {
                        return a.now.peek()();
                    }, l, a.maxDepth);
                }
                l(null);
            });
        }
    };
    function d(e) {
        const n = e ? require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(e, "@lexical/extension/HMR") : undefined;
        if (n) {
            return n.output.restoreCount.value;
        }
        return 0;
    }
    const c = {
        build: function build(e, { disabled, parentEditor }) {
            return require("LexicalExtensionNamedSignals").namedSignals({
                disabled,
                parentEditor: parentEditor || e._parentEditor
            });
        },
        config: {
            disabled: false,
            parentEditor: null
        },
        dependencies: [
            [
                u,
                {
                    disabled: true
                }
            ]
        ],
        name: "@lexical/history/SharedHistory",
        register: function register(n, o, r) {
            return require("LexicalExtensionSignals").effect(function() {
                const _r$getOutput = r.getOutput();
                const { disabled, parentEditor } = _r$getOutput;
                if (!disabled.value) {
                    const _r$getDependency = r.getDependency(u);
                    const _o = _r$getDependency.output;
                    d(n);
                    d(parentEditor.value);
                    const _a = ((e)=>{
                        if (e) {
                            return require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(e, u.name);
                        }
                        return null;
                    })(parentEditor.value);
                    if (!_a) {
                        return;
                    }
                    const _s3 = _a.output;
                    require("LexicalExtensionSignals").batch(function() {
                        _o.delay.value = _s3.delay.value;
                        _o.historyState.value = _s3.historyState.value;
                        _o.now.value = _s3.now.value;
                        _o.maxDepth.value = _s3.maxDepth.value;
                        _o.disabled.value = _s3.disabled.value;
                    });
                }
            });
        }
    };
    exports.HistoryExtension = u;
    exports.SharedHistoryExtension = c;
    exports.createEmptyHistoryState = createInitialHistoryState;
    exports.registerHistory = s;
}, null);