__d("MLCComposer.react", [
    "FBLogger",
    "Lexical",
    "LexicalExtensionComposer",
    "LexicalReactExtension",
    "MLCInstrumentationPluginDeferred__INTERNAL.react",
    "MLCMetadataContext.react",
    "mlcErrorHandler__INTERNAL",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    function CComponent({ children, contentID, initialConfig, typingPerformanceID }) {
        const { decoratorErrorBoundary, editor, editorState, policyProduct, surface } = initialConfig;
        const _ = e_useState(function() {
            return o("Lexical").defineExtension({
                $initialEditorState: editorState,
                dependencies: decoratorErrorBoundary == null ? [] : [
                    o("Lexical").configExtension(o("LexicalReactExtension").ReactExtension, {
                        ErrorBoundary: decoratorErrorBoundary
                    })
                ],
                editable: editor.editable,
                html: editor.html,
                name: "[root]",
                namespace: surface,
                nodes: editor.nodes,
                onError: function(t, n) {
                    return r("mlcErrorHandler__INTERNAL")(t, n, function(e) {
                        editor.onError(t, e, n);
                    });
                },
                onWarn: function(t, n) {
                    return r("mlcErrorHandler__INTERNAL")(t, n, function(e) {
                        if (editor.onWarn != null) {
                            editor.onWarn(t, e, n);
                        } else {
                            r("FBLogger")("lexical").catching(t).addMetadata("LEXICAL", "ERROR_INTERNAL", e).warn("Lexical editor warning on %s", surface);
                        }
                    });
                },
                theme: editor.theme
            });
        });
        const extension = _[0];
        const Component = o("MLCMetadataContext.react").MLCMetadataProvider;
        const Component_1 = o("LexicalExtensionComposer").LexicalExtensionComposer;
        return <Component_1 contentEditable={null} extension={extension}>{r("MLCInstrumentationPluginDeferred__INTERNAL.react") && s.jsx(r("MLCInstrumentationPluginDeferred__INTERNAL.react"), {
            policyProduct,
            surface,
            typingPerformanceID
        })}<Component contentID={contentID} surface={surface}>{children}</Component></Component_1>;
    }
    CComponent.displayName = `${CComponent.name} [from ${i.id}]`;
    l.default = CComponent;
}, 98);