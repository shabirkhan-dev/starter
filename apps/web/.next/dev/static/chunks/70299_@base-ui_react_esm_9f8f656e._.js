(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/alert-dialog/index.parts.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/alert-dialog/root/AlertDialogRoot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialogRoot",
    ()=>AlertDialogRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$useDialogRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/useDialogRoot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/store/DialogStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function AlertDialogRoot(props) {
    const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, actionsRef, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
    const parentDialogRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const nested = Boolean(parentDialogRootContext);
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])({
        "AlertDialogRoot.useRefWithInit": ()=>{
            return handle?.store ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogStore"]({
                open: openProp ?? defaultOpen,
                activeTriggerId: triggerIdProp !== undefined ? triggerIdProp : defaultTriggerIdProp,
                modal: true,
                disablePointerDismissal: true,
                nested,
                role: 'alertdialog'
            });
        }
    }["AlertDialogRoot.useRefWithInit"]).current;
    store.useControlledProp('open', openProp, defaultOpen);
    store.useControlledProp('activeTriggerId', triggerIdProp, defaultTriggerIdProp);
    store.useSyncedValue('nested', nested);
    store.useContextCallback('onOpenChange', onOpenChange);
    store.useContextCallback('onOpenChangeComplete', onOpenChangeComplete);
    const payload = store.useState('payload');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$useDialogRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogRoot"])({
        store,
        actionsRef,
        parentContext: parentDialogRootContext?.store.context,
        onOpenChange,
        triggerIdProp
    });
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "AlertDialogRoot.useMemo[contextValue]": ()=>({
                store
            })
    }["AlertDialogRoot.useMemo[contextValue]"], [
        store
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogRootContext"].Provider, {
        value: contextValue,
        children: typeof children === 'function' ? children({
            payload
        }) : children
    });
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/alert-dialog/handle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAlertDialogHandle",
    ()=>createAlertDialogHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/store/DialogHandle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/store/DialogStore.js [app-client] (ecmascript)");
;
;
function createAlertDialogHandle() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHandle"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogStore"]({
        modal: true,
        disablePointerDismissal: true,
        role: 'alertdialog'
    }));
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/alert-dialog/index.parts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Backdrop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$backdrop$2f$DialogBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogBackdrop"],
    "Close",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$close$2f$DialogClose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"],
    "Description",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$description$2f$DialogDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"],
    "Handle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHandle"],
    "Popup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogPopup"],
    "Portal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogPortal"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$root$2f$AlertDialogRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogRoot"],
    "Title",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$title$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"],
    "Trigger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$trigger$2f$DialogTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"],
    "Viewport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogViewport"],
    "createHandle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$handle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAlertDialogHandle"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/alert-dialog/index.parts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$root$2f$AlertDialogRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/alert-dialog/root/AlertDialogRoot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$backdrop$2f$DialogBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/backdrop/DialogBackdrop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$close$2f$DialogClose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/close/DialogClose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$description$2f$DialogDescription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/description/DialogDescription.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/popup/DialogPopup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/portal/DialogPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$title$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/title/DialogTitle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$trigger$2f$DialogTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/trigger/DialogTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/viewport/DialogViewport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$handle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/alert-dialog/handle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/store/DialogHandle.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/alert-dialog/index.parts.js [app-client] (ecmascript) <export * as AlertDialog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/alert-dialog/index.parts.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/useDialogRoot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDialogRoot",
    ()=>useDialogRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useScrollLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/useScrollLock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useDismiss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useInteractions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useInteractions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useRole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useRole.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useSyncedFloatingRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useSyncedFloatingRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenInteractionType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useOpenInteractionType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function useDialogRoot(params) {
    const { store, parentContext, actionsRef } = params;
    const open = store.useState('open');
    const disablePointerDismissal = store.useState('disablePointerDismissal');
    const modal = store.useState('modal');
    const popupElement = store.useState('popupElement');
    const { openMethod, triggerProps, reset: resetOpenInteractionType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenInteractionType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenInteractionType"])(open);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImplicitActiveTrigger"])(store);
    const { forceUnmount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenStateTransitions"])(open, store, {
        "useDialogRoot.useOpenStateTransitions": ()=>{
            resetOpenInteractionType();
        }
    }["useDialogRoot.useOpenStateTransitions"]);
    const createDialogEventDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useDialogRoot.useStableCallback[createDialogEventDetails]": (reason)=>{
            const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(reason);
            details.preventUnmountOnClose = ({
                "useDialogRoot.useStableCallback[createDialogEventDetails]": ()=>{
                    store.set('preventUnmountingOnClose', true);
                }
            })["useDialogRoot.useStableCallback[createDialogEventDetails]"];
            return details;
        }
    }["useDialogRoot.useStableCallback[createDialogEventDetails]"]);
    const handleImperativeClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useDialogRoot.useCallback[handleImperativeClose]": ()=>{
            store.setOpen(false, createDialogEventDetails(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction));
        }
    }["useDialogRoot.useCallback[handleImperativeClose]"], [
        store,
        createDialogEventDetails
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](actionsRef, {
        "useDialogRoot.useImperativeHandle": ()=>({
                unmount: forceUnmount,
                close: handleImperativeClose
            })
    }["useDialogRoot.useImperativeHandle"], [
        forceUnmount,
        handleImperativeClose
    ]);
    const floatingRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useSyncedFloatingRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncedFloatingRootContext"])({
        popupStore: store,
        onOpenChange: store.setOpen,
        treatPopupAsFloatingElement: true,
        noEmit: true
    });
    const [ownNestedOpenDialogs, setOwnNestedOpenDialogs] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const isTopmost = ownNestedOpenDialogs === 0;
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useRole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRole"])(floatingRootContext);
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDismiss"])(floatingRootContext, {
        outsidePressEvent () {
            if (store.context.internalBackdropRef.current || store.context.backdropRef.current) {
                return 'intentional';
            }
            // Ensure `aria-hidden` on outside elements is removed immediately
            // on outside press when trapping focus.
            return {
                mouse: modal === 'trap-focus' ? 'sloppy' : 'intentional',
                touch: 'sloppy'
            };
        },
        outsidePress (event) {
            // For mouse events, only accept left button (button 0)
            // For touch events, a single touch is equivalent to left button
            if ('button' in event && event.button !== 0) {
                return false;
            }
            if ('touches' in event && event.touches.length !== 1) {
                return false;
            }
            const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event);
            if (isTopmost && !disablePointerDismissal) {
                const eventTarget = target;
                // Only close if the click occurred on the dialog's owning backdrop.
                // This supports multiple modal dialogs that aren't nested in the React tree:
                // https://github.com/mui/base-ui/issues/1320
                if (modal) {
                    return store.context.internalBackdropRef.current || store.context.backdropRef.current ? store.context.internalBackdropRef.current === eventTarget || store.context.backdropRef.current === eventTarget || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(eventTarget, popupElement) && !eventTarget?.hasAttribute('data-base-ui-portal') : true;
                }
                return true;
            }
            return false;
        },
        escapeKey: isTopmost
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useScrollLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollLock"])(open && modal === true, popupElement);
    const { getReferenceProps, getFloatingProps, getTriggerProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useInteractions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractions"])([
        role,
        dismiss
    ]);
    // Listen for nested open/close events on this store to maintain the count
    store.useContextCallback('onNestedDialogOpen', {
        "useDialogRoot.useContextCallback": (ownChildrenCount)=>{
            setOwnNestedOpenDialogs(ownChildrenCount + 1);
        }
    }["useDialogRoot.useContextCallback"]);
    store.useContextCallback('onNestedDialogClose', {
        "useDialogRoot.useContextCallback": ()=>{
            setOwnNestedOpenDialogs(0);
        }
    }["useDialogRoot.useContextCallback"]);
    // Notify parent of our open/close state using parent callbacks, if any
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useDialogRoot.useEffect": ()=>{
            if (parentContext?.onNestedDialogOpen && open) {
                parentContext.onNestedDialogOpen(ownNestedOpenDialogs);
            }
            if (parentContext?.onNestedDialogClose && !open) {
                parentContext.onNestedDialogClose();
            }
            return ({
                "useDialogRoot.useEffect": ()=>{
                    if (parentContext?.onNestedDialogClose && open) {
                        parentContext.onNestedDialogClose();
                    }
                }
            })["useDialogRoot.useEffect"];
        }
    }["useDialogRoot.useEffect"], [
        open,
        parentContext,
        ownNestedOpenDialogs
    ]);
    const activeTriggerProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useDialogRoot.useMemo[activeTriggerProps]": ()=>getReferenceProps(triggerProps)
    }["useDialogRoot.useMemo[activeTriggerProps]"], [
        getReferenceProps,
        triggerProps
    ]);
    const inactiveTriggerProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useDialogRoot.useMemo[inactiveTriggerProps]": ()=>getTriggerProps(triggerProps)
    }["useDialogRoot.useMemo[inactiveTriggerProps]"], [
        getTriggerProps,
        triggerProps
    ]);
    const popupProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useDialogRoot.useMemo[popupProps]": ()=>getFloatingProps()
    }["useDialogRoot.useMemo[popupProps]"], [
        getFloatingProps
    ]);
    store.useSyncedValues({
        openMethod,
        activeTriggerProps,
        inactiveTriggerProps,
        popupProps,
        floatingRootContext,
        nestedOpenDialogCount: ownNestedOpenDialogs
    });
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogRootContext",
    ()=>DialogRootContext,
    "useDialogRootContext",
    ()=>useDialogRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const DialogRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) DialogRootContext.displayName = "DialogRootContext";
function useDialogRootContext(optional) {
    const dialogRootContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DialogRootContext);
    if (optional === false && dialogRootContext === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: DialogRootContext is missing. Dialog parts must be placed within <Dialog.Root>.' : "TURBOPACK unreachable");
    }
    return dialogRootContext;
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/store/DialogStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogStore",
    ()=>DialogStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/store/createSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$ReactStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/store/ReactStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/popups/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupTriggerMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/popups/popupTriggerMap.js [app-client] (ecmascript)");
;
;
;
const selectors = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStoreSelectors"],
    modal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.modal),
    nested: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.nested),
    nestedOpenDialogCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.nestedOpenDialogCount),
    disablePointerDismissal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.disablePointerDismissal),
    openMethod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.openMethod),
    descriptionElementId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.descriptionElementId),
    titleElementId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.titleElementId),
    viewportElement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.viewportElement),
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.role)
};
class DialogStore extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$ReactStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactStore"] {
    constructor(initialState){
        super(createInitialState(initialState), {
            popupRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"](),
            backdropRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"](),
            internalBackdropRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"](),
            triggerElements: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupTriggerMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupTriggerMap"](),
            onOpenChange: undefined,
            onOpenChangeComplete: undefined
        }, selectors);
    }
    setOpen = (nextOpen, eventDetails)=>{
        eventDetails.preventUnmountOnClose = ()=>{
            this.set('preventUnmountingOnClose', true);
        };
        if (!nextOpen && eventDetails.trigger == null && this.state.activeTriggerId != null) {
            // When closing the dialog, pass the old trigger to the onOpenChange event
            // so it's not reset too early (potentially causing focus issues in controlled scenarios).
            eventDetails.trigger = this.state.activeTriggerElement ?? undefined;
        }
        this.context.onOpenChange?.(nextOpen, eventDetails);
        if (eventDetails.isCanceled) {
            return;
        }
        const details = {
            open: nextOpen,
            nativeEvent: eventDetails.event,
            reason: eventDetails.reason,
            nested: this.state.nested
        };
        this.state.floatingRootContext.context.events?.emit('openchange', details);
        const updatedState = {
            open: nextOpen
        };
        // If a popup is closing, the `trigger` may be null.
        // We want to keep the previous value so that exit animations are played and focus is returned correctly.
        const newTriggerId = eventDetails.trigger?.id ?? null;
        if (newTriggerId || nextOpen) {
            updatedState.activeTriggerId = newTriggerId;
            updatedState.activeTriggerElement = eventDetails.trigger ?? null;
        }
        this.update(updatedState);
    };
}
function createInitialState(initialState = {}) {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialPopupStoreState"])(),
        modal: true,
        disablePointerDismissal: false,
        popupElement: null,
        viewportElement: null,
        descriptionElementId: undefined,
        titleElementId: undefined,
        openMethod: null,
        nested: false,
        nestedOpenDialogCount: 0,
        role: 'dialog',
        ...initialState
    };
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/backdrop/DialogBackdrop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogBackdrop",
    ()=>DialogBackdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const DialogBackdrop = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function DialogBackdrop(componentProps, forwardedRef) {
    const { render, className, forceRender = false, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const open = store.useState('open');
    const nested = store.useState('nested');
    const mounted = store.useState('mounted');
    const transitionStatus = store.useState('transitionStatus');
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "DialogBackdrop.DialogBackdrop.useMemo[state]": ()=>({
                open,
                transitionStatus
            })
    }["DialogBackdrop.DialogBackdrop.useMemo[state]"], [
        open,
        transitionStatus
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            store.context.backdropRef,
            forwardedRef
        ],
        stateAttributesMapping,
        props: [
            {
                role: 'presentation',
                hidden: !mounted,
                style: {
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                }
            },
            elementProps
        ],
        enabled: forceRender || !nested
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogBackdrop.displayName = "DialogBackdrop";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/close/DialogClose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogClose",
    ()=>DialogClose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
'use client';
;
;
;
;
;
;
const DialogClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function DialogClose(componentProps, forwardedRef) {
    const { render, className, disabled = false, nativeButton = true, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const open = store.useState('open');
    function handleClick(event) {
        if (open) {
            store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].closePress, event.nativeEvent));
        }
    }
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        native: nativeButton
    });
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "DialogClose.DialogClose.useMemo[state]": ()=>({
                disabled
            })
    }["DialogClose.DialogClose.useMemo[state]"], [
        disabled
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            {
                onClick: handleClick
            },
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogClose.displayName = "DialogClose";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/description/DialogDescription.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogDescription",
    ()=>DialogDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function DialogDescription(componentProps, forwardedRef) {
    const { render, className, id: idProp, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    store.useSyncedValueWithCleanup('descriptionElementId', id);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('p', componentProps, {
        ref: forwardedRef,
        props: [
            {
                id
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogDescription.displayName = "DialogDescription";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupCssVars.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogPopupCssVars",
    ()=>DialogPopupCssVars
]);
let DialogPopupCssVars = /*#__PURE__*/ function(DialogPopupCssVars) {
    /**
   * Indicates how many dialogs are nested within.
   * @type {number}
   */ DialogPopupCssVars["nestedDialogs"] = "--nested-dialogs";
    return DialogPopupCssVars;
}({});
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupDataAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogPopupDataAttributes",
    ()=>DialogPopupDataAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
;
let DialogPopupDataAttributes = function(DialogPopupDataAttributes) {
    /**
   * Present when the dialog is open.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["open"] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].open] = "open";
    /**
   * Present when the dialog is closed.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["closed"] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].closed] = "closed";
    /**
   * Present when the dialog is animating in.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["startingStyle"] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].startingStyle] = "startingStyle";
    /**
   * Present when the dialog is animating out.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["endingStyle"] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].endingStyle] = "endingStyle";
    /**
   * Present when the dialog is nested within another dialog.
   */ DialogPopupDataAttributes["nested"] = "data-nested";
    /**
   * Present when the dialog has other open dialogs nested within it.
   */ DialogPopupDataAttributes["nestedDialogOpen"] = "data-nested-dialog-open";
    return DialogPopupDataAttributes;
}({});
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogPortalContext",
    ()=>DialogPortalContext,
    "useDialogPortalContext",
    ()=>useDialogPortalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const DialogPortalContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) DialogPortalContext.displayName = "DialogPortalContext";
function useDialogPortalContext() {
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DialogPortalContext);
    if (value === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: <Dialog.Portal> is missing.' : "TURBOPACK unreachable");
    }
    return value;
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/popup/DialogPopup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogPopup",
    ()=>DialogPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingFocusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingFocusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopupCssVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupCssVars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopupDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupDataAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useOpenChangeComplete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/composite.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"],
    nestedDialogOpen (value) {
        return value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopupDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogPopupDataAttributes"].nestedDialogOpen]: ''
        } : null;
    }
};
const DialogPopup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function DialogPopup(componentProps, forwardedRef) {
    const { className, finalFocus, initialFocus, render, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const descriptionElementId = store.useState('descriptionElementId');
    const disablePointerDismissal = store.useState('disablePointerDismissal');
    const floatingRootContext = store.useState('floatingRootContext');
    const rootPopupProps = store.useState('popupProps');
    const modal = store.useState('modal');
    const mounted = store.useState('mounted');
    const nested = store.useState('nested');
    const nestedOpenDialogCount = store.useState('nestedOpenDialogCount');
    const open = store.useState('open');
    const openMethod = store.useState('openMethod');
    const titleElementId = store.useState('titleElementId');
    const transitionStatus = store.useState('transitionStatus');
    const role = store.useState('role');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogPortalContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open,
        ref: store.context.popupRef,
        onComplete () {
            if (open) {
                store.context.onOpenChangeComplete?.(true);
            }
        }
    });
    // Default initial focus logic:
    // If opened by touch, focus the popup element to prevent the virtual keyboard from opening
    // (this is required for Android specifically as iOS handles this automatically).
    function defaultInitialFocus(interactionType) {
        if (interactionType === 'touch') {
            return store.context.popupRef.current;
        }
        return true;
    }
    const resolvedInitialFocus = initialFocus === undefined ? defaultInitialFocus : initialFocus;
    const nestedDialogOpen = nestedOpenDialogCount > 0;
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "DialogPopup.DialogPopup.useMemo[state]": ()=>({
                open,
                nested,
                transitionStatus,
                nestedDialogOpen
            })
    }["DialogPopup.DialogPopup.useMemo[state]"], [
        open,
        nested,
        transitionStatus,
        nestedDialogOpen
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        props: [
            rootPopupProps,
            {
                'aria-labelledby': titleElementId ?? undefined,
                'aria-describedby': descriptionElementId ?? undefined,
                role,
                tabIndex: -1,
                hidden: !mounted,
                onKeyDown (event) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["COMPOSITE_KEYS"].has(event.key)) {
                        event.stopPropagation();
                    }
                },
                style: {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopupCssVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogPopupCssVars"].nestedDialogs]: nestedOpenDialogCount
                }
            },
            elementProps
        ],
        ref: [
            forwardedRef,
            store.context.popupRef,
            store.useStateSetter('popupElement')
        ],
        stateAttributesMapping
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingFocusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingFocusManager"], {
        context: floatingRootContext,
        openInteractionType: openMethod,
        disabled: !mounted,
        closeOnFocusOut: !disablePointerDismissal,
        initialFocus: resolvedInitialFocus,
        returnFocus: finalFocus,
        modal: modal !== false,
        restoreFocus: "popup",
        children: element
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogPopup.displayName = "DialogPopup";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/portal/DialogPortal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogPortal",
    ()=>DialogPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/inertValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$InternalBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/InternalBackdrop.js [app-client] (ecmascript)");
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const DialogPortal = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function DialogPortal(props, forwardedRef) {
    const { keepMounted = false, ...portalProps } = props;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const mounted = store.useState('mounted');
    const modal = store.useState('modal');
    const open = store.useState('open');
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogPortalContext"].Provider, {
        value: keepMounted,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingPortal"], {
            ref: forwardedRef,
            ...portalProps,
            children: [
                mounted && modal === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$InternalBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalBackdrop"], {
                    ref: store.context.internalBackdropRef,
                    inert: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inertValue"])(!open)
                }),
                props.children
            ]
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogPortal.displayName = "DialogPortal";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/title/DialogTitle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogTitle",
    ()=>DialogTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function DialogTitle(componentProps, forwardedRef) {
    const { render, className, id: idProp, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    store.useSyncedValueWithCleanup('titleElementId', id);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('h2', componentProps, {
        ref: forwardedRef,
        props: [
            {
                id
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogTitle.displayName = "DialogTitle";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/trigger/DialogTrigger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/constants.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useClick.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useInteractions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useInteractions.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const DialogTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function DialogTrigger(componentProps, forwardedRef) {
    const { render, className, disabled = false, nativeButton = true, id: idProp, payload, handle, ...elementProps } = componentProps;
    const dialogRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogRootContext"])(true);
    const store = handle?.store ?? dialogRootContext?.store;
    if (!store) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: <Dialog.Trigger> must be used within <Dialog.Root> or provided with a handle.' : "TURBOPACK unreachable");
    }
    const thisTriggerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const floatingContext = store.useState('floatingRootContext');
    const isOpenedByThisTrigger = store.useState('isOpenedByTrigger', thisTriggerId);
    const triggerElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { registerTrigger, isMountedByThisTrigger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTriggerDataForwarding"])(thisTriggerId, triggerElementRef, store, {
        payload
    });
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        native: nativeButton
    });
    const click = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClick"])(floatingContext, {
        enabled: floatingContext != null
    });
    const localInteractionProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useInteractions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInteractions"])([
        click
    ]);
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "DialogTrigger.DialogTrigger.useMemo[state]": ()=>({
                disabled,
                open: isOpenedByThisTrigger
            })
    }["DialogTrigger.DialogTrigger.useMemo[state]"], [
        disabled,
        isOpenedByThisTrigger
    ]);
    const rootTriggerProps = store.useState('triggerProps', isMountedByThisTrigger);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            buttonRef,
            forwardedRef,
            registerTrigger,
            triggerElementRef
        ],
        props: [
            localInteractionProps.getReferenceProps(),
            rootTriggerProps,
            {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CLICK_TRIGGER_IDENTIFIER"]]: '',
                id: thisTriggerId
            },
            elementProps,
            getButtonProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerOpenStateMapping"]
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogTrigger.displayName = "DialogTrigger";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/viewport/DialogViewportDataAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogViewportDataAttributes",
    ()=>DialogViewportDataAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
;
let DialogViewportDataAttributes = function(DialogViewportDataAttributes) {
    /**
   * Present when the dialog is open.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["open"] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].open] = "open";
    /**
   * Present when the dialog is closed.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["closed"] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].closed] = "closed";
    /**
   * Present when the dialog is animating in.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["startingStyle"] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].startingStyle] = "startingStyle";
    /**
   * Present when the dialog is animating out.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["endingStyle"] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].endingStyle] = "endingStyle";
    /**
   * Present when the dialog is nested within another dialog.
   */ DialogViewportDataAttributes["nested"] = "data-nested";
    /**
   * Present when the dialog has other open dialogs nested within it.
   */ DialogViewportDataAttributes["nestedDialogOpen"] = "data-nested-dialog-open";
    return DialogViewportDataAttributes;
}({});
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/viewport/DialogViewport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogViewport",
    ()=>DialogViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewportDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/viewport/DialogViewportDataAttributes.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"],
    nested (value) {
        return value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewportDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogViewportDataAttributes"].nested]: ''
        } : null;
    },
    nestedDialogOpen (value) {
        return value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewportDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogViewportDataAttributes"].nestedDialogOpen]: ''
        } : null;
    }
};
const DialogViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function DialogViewport(componentProps, forwardedRef) {
    const { className, render, children, ...elementProps } = componentProps;
    const keepMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogPortalContext"])();
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const open = store.useState('open');
    const nested = store.useState('nested');
    const transitionStatus = store.useState('transitionStatus');
    const nestedOpenDialogCount = store.useState('nestedOpenDialogCount');
    const mounted = store.useState('mounted');
    const nestedDialogOpen = nestedOpenDialogCount > 0;
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "DialogViewport.DialogViewport.useMemo[state]": ()=>({
                open,
                nested,
                transitionStatus,
                nestedDialogOpen
            })
    }["DialogViewport.DialogViewport.useMemo[state]"], [
        open,
        nested,
        transitionStatus,
        nestedDialogOpen
    ]);
    const shouldRender = keepMounted || mounted;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        enabled: shouldRender,
        state,
        ref: [
            forwardedRef,
            store.useStateSetter('viewportElement')
        ],
        stateAttributesMapping,
        props: [
            {
                role: 'presentation',
                hidden: !mounted,
                children
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogViewport.displayName = "DialogViewport";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/store/DialogHandle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogHandle",
    ()=>DialogHandle,
    "createDialogHandle",
    ()=>createDialogHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/dialog/store/DialogStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
;
;
;
class DialogHandle {
    /**
   * Internal store holding the dialog state.
   * @internal
   */ constructor(store){
        this.store = store ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogStore"]();
    }
    /**
   * Opens the dialog and associates it with the trigger with the given id.
   * The trigger, if provided, must be a Dialog.Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the dialog. If null, the dialog will open without a trigger association.
   */ open(triggerId) {
        const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : undefined;
        if ("TURBOPACK compile-time truthy", 1) {
            if (triggerId && !triggerElement) {
                console.warn(`Base UI: DialogHandle.open: No trigger found with id "${triggerId}". The dialog will open, but the trigger will not be associated with the dialog.`);
            }
        }
        this.store.setOpen(true, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction, undefined, triggerElement));
    }
    /**
   * Opens the dialog and sets the payload.
   * Does not associate the dialog with any trigger.
   *
   * @param payload Payload to set when opening the dialog.
   */ openWithPayload(payload) {
        this.store.set('payload', payload);
        this.store.setOpen(true, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction, undefined, undefined));
    }
    /**
   * Closes the dialog.
   */ close() {
        this.store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction, undefined, undefined));
    }
    /**
   * Indicates whether the dialog is currently open.
   */ get isOpen() {
        return this.store.state.open;
    }
}
function createDialogHandle() {
    return new DialogHandle();
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeEventPreventable",
    ()=>makeEventPreventable,
    "mergeClassNames",
    ()=>mergeClassNames,
    "mergeProps",
    ()=>mergeProps,
    "mergePropsN",
    ()=>mergePropsN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$mergeObjects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/mergeObjects.js [app-client] (ecmascript)");
;
const EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
    // We need to mutably own `merged`
    let merged = {
        ...resolvePropsGetter(a, EMPTY_PROPS)
    };
    if (b) {
        merged = mergeOne(merged, b);
    }
    if (c) {
        merged = mergeOne(merged, c);
    }
    if (d) {
        merged = mergeOne(merged, d);
    }
    if (e) {
        merged = mergeOne(merged, e);
    }
    return merged;
}
function mergePropsN(props) {
    if (props.length === 0) {
        return EMPTY_PROPS;
    }
    if (props.length === 1) {
        return resolvePropsGetter(props[0], EMPTY_PROPS);
    }
    // We need to mutably own `merged`
    let merged = {
        ...resolvePropsGetter(props[0], EMPTY_PROPS)
    };
    for(let i = 1; i < props.length; i += 1){
        merged = mergeOne(merged, props[i]);
    }
    return merged;
}
function mergeOne(merged, inputProps) {
    if (isPropsGetter(inputProps)) {
        return inputProps(merged);
    }
    return mutablyMergeInto(merged, inputProps);
}
/**
 * Merges two sets of props. In case of conflicts, the external props take precedence.
 */ function mutablyMergeInto(mergedProps, externalProps) {
    if (!externalProps) {
        return mergedProps;
    }
    // eslint-disable-next-line guard-for-in
    for(const propName in externalProps){
        const externalPropValue = externalProps[propName];
        switch(propName){
            case 'style':
                {
                    mergedProps[propName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$mergeObjects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeObjects"])(mergedProps.style, externalPropValue);
                    break;
                }
            case 'className':
                {
                    mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
                    break;
                }
            default:
                {
                    if (isEventHandler(propName, externalPropValue)) {
                        mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
                    } else {
                        mergedProps[propName] = externalPropValue;
                    }
                }
        }
    }
    return mergedProps;
}
function isEventHandler(key, value) {
    // This approach is more efficient than using a regex.
    const code0 = key.charCodeAt(0);
    const code1 = key.charCodeAt(1);
    const code2 = key.charCodeAt(2);
    return code0 === 111 /* o */  && code1 === 110 /* n */  && code2 >= 65 /* A */  && code2 <= 90 /* Z */  && (typeof value === 'function' || typeof value === 'undefined');
}
function isPropsGetter(inputProps) {
    return typeof inputProps === 'function';
}
function resolvePropsGetter(inputProps, previousProps) {
    if (isPropsGetter(inputProps)) {
        return inputProps(previousProps);
    }
    return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
    if (!theirHandler) {
        return ourHandler;
    }
    if (!ourHandler) {
        return theirHandler;
    }
    return (event)=>{
        if (isSyntheticEvent(event)) {
            const baseUIEvent = event;
            makeEventPreventable(baseUIEvent);
            const result = theirHandler(baseUIEvent);
            if (!baseUIEvent.baseUIHandlerPrevented) {
                ourHandler?.(baseUIEvent);
            }
            return result;
        }
        const result = theirHandler(event);
        ourHandler?.(event);
        return result;
    };
}
function makeEventPreventable(event) {
    event.preventBaseUIHandler = ()=>{
        event.baseUIHandlerPrevented = true;
    };
    return event;
}
function mergeClassNames(ourClassName, theirClassName) {
    if (theirClassName) {
        if (ourClassName) {
            // eslint-disable-next-line prefer-template
            return theirClassName + ' ' + ourClassName;
        }
        return theirClassName;
    }
    return ourClassName;
}
function isSyntheticEvent(event) {
    return event != null && typeof event === 'object' && 'nativeEvent' in event;
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeRootContext",
    ()=>CompositeRootContext,
    "useCompositeRootContext",
    ()=>useCompositeRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const CompositeRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CompositeRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/composite.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_KEYS",
    ()=>ALL_KEYS,
    "ALT",
    ()=>ALT,
    "ARROW_DOWN",
    ()=>ARROW_DOWN,
    "ARROW_KEYS",
    ()=>ARROW_KEYS,
    "ARROW_LEFT",
    ()=>ARROW_LEFT,
    "ARROW_RIGHT",
    ()=>ARROW_RIGHT,
    "ARROW_UP",
    ()=>ARROW_UP,
    "COMPOSITE_KEYS",
    ()=>COMPOSITE_KEYS,
    "CONTROL",
    ()=>CONTROL,
    "END",
    ()=>END,
    "HOME",
    ()=>HOME,
    "HORIZONTAL_KEYS",
    ()=>HORIZONTAL_KEYS,
    "HORIZONTAL_KEYS_WITH_EXTRA_KEYS",
    ()=>HORIZONTAL_KEYS_WITH_EXTRA_KEYS,
    "META",
    ()=>META,
    "MODIFIER_KEYS",
    ()=>MODIFIER_KEYS,
    "SHIFT",
    ()=>SHIFT,
    "VERTICAL_KEYS",
    ()=>VERTICAL_KEYS,
    "VERTICAL_KEYS_WITH_EXTRA_KEYS",
    ()=>VERTICAL_KEYS_WITH_EXTRA_KEYS,
    "isNativeInput",
    ()=>isNativeInput,
    "scrollIntoViewIfNeeded",
    ()=>scrollIntoViewIfNeeded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
;
;
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const HOME = 'Home';
const END = 'End';
const HORIZONTAL_KEYS = new Set([
    ARROW_LEFT,
    ARROW_RIGHT
]);
const HORIZONTAL_KEYS_WITH_EXTRA_KEYS = new Set([
    ARROW_LEFT,
    ARROW_RIGHT,
    HOME,
    END
]);
const VERTICAL_KEYS = new Set([
    ARROW_UP,
    ARROW_DOWN
]);
const VERTICAL_KEYS_WITH_EXTRA_KEYS = new Set([
    ARROW_UP,
    ARROW_DOWN,
    HOME,
    END
]);
const ARROW_KEYS = new Set([
    ...HORIZONTAL_KEYS,
    ...VERTICAL_KEYS
]);
const ALL_KEYS = new Set([
    ...ARROW_KEYS,
    HOME,
    END
]);
const COMPOSITE_KEYS = new Set([
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
    HOME,
    END
]);
const SHIFT = 'Shift';
const CONTROL = 'Control';
const ALT = 'Alt';
const META = 'Meta';
const MODIFIER_KEYS = new Set([
    SHIFT,
    CONTROL,
    ALT,
    META
]);
function isInputElement(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && element.tagName === 'INPUT';
}
function isNativeInput(element) {
    if (isInputElement(element) && element.selectionStart != null) {
        return true;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && element.tagName === 'TEXTAREA') {
        return true;
    }
    return false;
}
function scrollIntoViewIfNeeded(scrollContainer, element, direction, orientation) {
    if (!scrollContainer || !element || !element.scrollTo) {
        return;
    }
    let targetX = scrollContainer.scrollLeft;
    let targetY = scrollContainer.scrollTop;
    const isOverflowingX = scrollContainer.clientWidth < scrollContainer.scrollWidth;
    const isOverflowingY = scrollContainer.clientHeight < scrollContainer.scrollHeight;
    if (isOverflowingX && orientation !== 'vertical') {
        const elementOffsetLeft = getOffset(scrollContainer, element, 'left');
        const containerStyles = getStyles(scrollContainer);
        const elementStyles = getStyles(element);
        if (direction === 'ltr') {
            if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
                // overflow to the right, scroll to align right edges
                targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
            } else if (elementOffsetLeft - elementStyles.scrollMarginLeft < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
                // overflow to the left, scroll to align left edges
                targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
            }
        }
        if (direction === 'rtl') {
            if (elementOffsetLeft - elementStyles.scrollMarginRight < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
                // overflow to the left, scroll to align left edges
                targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
            } else if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
                // overflow to the right, scroll to align right edges
                targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
            }
        }
    }
    if (isOverflowingY && orientation !== 'horizontal') {
        const elementOffsetTop = getOffset(scrollContainer, element, 'top');
        const containerStyles = getStyles(scrollContainer);
        const elementStyles = getStyles(element);
        if (elementOffsetTop - elementStyles.scrollMarginTop < scrollContainer.scrollTop + containerStyles.scrollPaddingTop) {
            // overflow upwards, align top edges
            targetY = elementOffsetTop - elementStyles.scrollMarginTop - containerStyles.scrollPaddingTop;
        } else if (elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom > scrollContainer.scrollTop + scrollContainer.clientHeight - containerStyles.scrollPaddingBottom) {
            // overflow downwards, align bottom edges
            targetY = elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom - scrollContainer.clientHeight + containerStyles.scrollPaddingBottom;
        }
    }
    scrollContainer.scrollTo({
        left: targetX,
        top: targetY,
        behavior: 'auto'
    });
}
function getOffset(ancestor, element, side) {
    const propName = side === 'left' ? 'offsetLeft' : 'offsetTop';
    let result = 0;
    while(element.offsetParent){
        result += element[propName];
        if (element.offsetParent === ancestor) {
            break;
        }
        element = element.offsetParent;
    }
    return result;
}
function getStyles(element) {
    const styles = getComputedStyle(element);
    return {
        scrollMarginTop: parseFloat(styles.scrollMarginTop) || 0,
        scrollMarginRight: parseFloat(styles.scrollMarginRight) || 0,
        scrollMarginBottom: parseFloat(styles.scrollMarginBottom) || 0,
        scrollMarginLeft: parseFloat(styles.scrollMarginLeft) || 0,
        scrollPaddingTop: parseFloat(styles.scrollPaddingTop) || 0,
        scrollPaddingRight: parseFloat(styles.scrollPaddingRight) || 0,
        scrollPaddingBottom: parseFloat(styles.scrollPaddingBottom) || 0,
        scrollPaddingLeft: parseFloat(styles.scrollPaddingLeft) || 0
    };
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeListContext",
    ()=>CompositeListContext,
    "useCompositeListContext",
    ()=>useCompositeListContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const CompositeListContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    register: ()=>{},
    unregister: ()=>{},
    subscribeMapChange: ()=>{
        return ()=>{};
    },
    elementsRef: {
        current: []
    },
    nextIndexRef: {
        current: 0
    }
});
if ("TURBOPACK compile-time truthy", 1) CompositeListContext.displayName = "CompositeListContext";
function useCompositeListContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CompositeListContext);
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/list/CompositeList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeList",
    ()=>CompositeList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
/* eslint-disable no-bitwise */ 'use client';
;
;
;
;
;
;
function CompositeList(props) {
    const { children, elementsRef, labelsRef, onMapChange: onMapChangeProp } = props;
    const onMapChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(onMapChangeProp);
    const nextIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const listeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])(createListeners).current;
    // We use a stable `map` to avoid O(n^2) re-allocation costs for large lists.
    // `mapTick` is our re-render trigger mechanism. We also need to update the
    // elements and label refs, but there's a lot of async work going on and sometimes
    // the effect that handles `onMapChange` gets called after those refs have been
    // filled, and we don't want to lose those values by setting their lengths to `0`.
    // We also need to have them at the proper length because floating-ui uses that
    // information for list navigation.
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])(createMap).current;
    // `mapTick` uses a counter rather than objects for low precision-loss risk and better memory efficiency
    const [mapTick, setMapTick] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const lastTickRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](mapTick);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "CompositeList.useStableCallback[register]": (node, metadata)=>{
            map.set(node, metadata ?? null);
            lastTickRef.current += 1;
            setMapTick(lastTickRef.current);
        }
    }["CompositeList.useStableCallback[register]"]);
    const unregister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "CompositeList.useStableCallback[unregister]": (node)=>{
            map.delete(node);
            lastTickRef.current += 1;
            setMapTick(lastTickRef.current);
        }
    }["CompositeList.useStableCallback[unregister]"]);
    const sortedMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "CompositeList.useMemo[sortedMap]": ()=>{
            // `mapTick` is the `useMemo` trigger as `map` is stable.
            disableEslintWarning(mapTick);
            const newMap = new Map();
            // Filter out disconnected elements before sorting to avoid inconsistent
            // compareDocumentPosition results when elements are detached from the DOM.
            const sortedNodes = Array.from(map.keys()).filter({
                "CompositeList.useMemo[sortedMap].sortedNodes": (node)=>node.isConnected
            }["CompositeList.useMemo[sortedMap].sortedNodes"]).sort(sortByDocumentPosition);
            sortedNodes.forEach({
                "CompositeList.useMemo[sortedMap]": (node, index)=>{
                    const metadata = map.get(node) ?? {};
                    newMap.set(node, {
                        ...metadata,
                        index
                    });
                }
            }["CompositeList.useMemo[sortedMap]"]);
            return newMap;
        }
    }["CompositeList.useMemo[sortedMap]"], [
        map,
        mapTick
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "CompositeList.useIsoLayoutEffect": ()=>{
            if (typeof MutationObserver !== 'function' || sortedMap.size === 0) {
                return undefined;
            }
            const mutationObserver = new MutationObserver({
                "CompositeList.useIsoLayoutEffect": (entries)=>{
                    const diff = new Set();
                    const updateDiff = {
                        "CompositeList.useIsoLayoutEffect.updateDiff": (node)=>diff.has(node) ? diff.delete(node) : diff.add(node)
                    }["CompositeList.useIsoLayoutEffect.updateDiff"];
                    entries.forEach({
                        "CompositeList.useIsoLayoutEffect": (entry)=>{
                            entry.removedNodes.forEach(updateDiff);
                            entry.addedNodes.forEach(updateDiff);
                        }
                    }["CompositeList.useIsoLayoutEffect"]);
                    if (diff.size === 0) {
                        lastTickRef.current += 1;
                        setMapTick(lastTickRef.current);
                    }
                }
            }["CompositeList.useIsoLayoutEffect"]);
            sortedMap.forEach({
                "CompositeList.useIsoLayoutEffect": (_, node)=>{
                    if (node.parentElement) {
                        mutationObserver.observe(node.parentElement, {
                            childList: true
                        });
                    }
                }
            }["CompositeList.useIsoLayoutEffect"]);
            return ({
                "CompositeList.useIsoLayoutEffect": ()=>{
                    mutationObserver.disconnect();
                }
            })["CompositeList.useIsoLayoutEffect"];
        }
    }["CompositeList.useIsoLayoutEffect"], [
        sortedMap
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "CompositeList.useIsoLayoutEffect": ()=>{
            const shouldUpdateLengths = lastTickRef.current === mapTick;
            if (shouldUpdateLengths) {
                if (elementsRef.current.length !== sortedMap.size) {
                    elementsRef.current.length = sortedMap.size;
                }
                if (labelsRef && labelsRef.current.length !== sortedMap.size) {
                    labelsRef.current.length = sortedMap.size;
                }
                nextIndexRef.current = sortedMap.size;
            }
            onMapChange(sortedMap);
        }
    }["CompositeList.useIsoLayoutEffect"], [
        onMapChange,
        sortedMap,
        elementsRef,
        labelsRef,
        mapTick
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "CompositeList.useIsoLayoutEffect": ()=>{
            return ({
                "CompositeList.useIsoLayoutEffect": ()=>{
                    elementsRef.current = [];
                }
            })["CompositeList.useIsoLayoutEffect"];
        }
    }["CompositeList.useIsoLayoutEffect"], [
        elementsRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "CompositeList.useIsoLayoutEffect": ()=>{
            return ({
                "CompositeList.useIsoLayoutEffect": ()=>{
                    if (labelsRef) {
                        labelsRef.current = [];
                    }
                }
            })["CompositeList.useIsoLayoutEffect"];
        }
    }["CompositeList.useIsoLayoutEffect"], [
        labelsRef
    ]);
    const subscribeMapChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "CompositeList.useStableCallback[subscribeMapChange]": (fn)=>{
            listeners.add(fn);
            return ({
                "CompositeList.useStableCallback[subscribeMapChange]": ()=>{
                    listeners.delete(fn);
                }
            })["CompositeList.useStableCallback[subscribeMapChange]"];
        }
    }["CompositeList.useStableCallback[subscribeMapChange]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "CompositeList.useIsoLayoutEffect": ()=>{
            listeners.forEach({
                "CompositeList.useIsoLayoutEffect": (l)=>l(sortedMap)
            }["CompositeList.useIsoLayoutEffect"]);
        }
    }["CompositeList.useIsoLayoutEffect"], [
        listeners,
        sortedMap
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "CompositeList.useMemo[contextValue]": ()=>({
                register,
                unregister,
                subscribeMapChange,
                elementsRef,
                labelsRef,
                nextIndexRef
            })
    }["CompositeList.useMemo[contextValue]"], [
        register,
        unregister,
        subscribeMapChange,
        elementsRef,
        labelsRef,
        nextIndexRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompositeListContext"].Provider, {
        value: contextValue,
        children: children
    });
}
function createMap() {
    return new Map();
}
function createListeners() {
    return new Set();
}
function sortByDocumentPosition(a, b) {
    const position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        return -1;
    }
    if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
        return 1;
    }
    return 0;
}
function disableEslintWarning(_) {}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/list/useCompositeListItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndexGuessBehavior",
    ()=>IndexGuessBehavior,
    "useCompositeListItem",
    ()=>useCompositeListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js [app-client] (ecmascript)");
'use client';
;
;
;
let IndexGuessBehavior = /*#__PURE__*/ function(IndexGuessBehavior) {
    IndexGuessBehavior[IndexGuessBehavior["None"] = 0] = "None";
    IndexGuessBehavior[IndexGuessBehavior["GuessFromOrder"] = 1] = "GuessFromOrder";
    return IndexGuessBehavior;
}({});
function useCompositeListItem(params = {}) {
    const { label, metadata, textRef, indexGuessBehavior, index: externalIndex } = params;
    const { register, unregister, subscribeMapChange, elementsRef, labelsRef, nextIndexRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompositeListContext"])();
    const indexRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](-1);
    const [index, setIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](externalIndex ?? (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder ? ({
        "useCompositeListItem.useState": ()=>{
            if (indexRef.current === -1) {
                const newIndex = nextIndexRef.current;
                nextIndexRef.current += 1;
                indexRef.current = newIndex;
            }
            return indexRef.current;
        }
    })["useCompositeListItem.useState"] : -1));
    const componentRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useCompositeListItem.useCallback[ref]": (node)=>{
            componentRef.current = node;
            if (index !== -1 && node !== null) {
                elementsRef.current[index] = node;
                if (labelsRef) {
                    const isLabelDefined = label !== undefined;
                    labelsRef.current[index] = isLabelDefined ? label : textRef?.current?.textContent ?? node.textContent;
                }
            }
        }
    }["useCompositeListItem.useCallback[ref]"], [
        index,
        elementsRef,
        labelsRef,
        label,
        textRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useCompositeListItem.useIsoLayoutEffect": ()=>{
            if (externalIndex != null) {
                return undefined;
            }
            const node = componentRef.current;
            if (node) {
                register(node, metadata);
                return ({
                    "useCompositeListItem.useIsoLayoutEffect": ()=>{
                        unregister(node);
                    }
                })["useCompositeListItem.useIsoLayoutEffect"];
            }
            return undefined;
        }
    }["useCompositeListItem.useIsoLayoutEffect"], [
        externalIndex,
        register,
        unregister,
        metadata
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useCompositeListItem.useIsoLayoutEffect": ()=>{
            if (externalIndex != null) {
                return undefined;
            }
            return subscribeMapChange({
                "useCompositeListItem.useIsoLayoutEffect": (map)=>{
                    const i = componentRef.current ? map.get(componentRef.current)?.index : null;
                    if (i != null) {
                        setIndex(i);
                    }
                }
            }["useCompositeListItem.useIsoLayoutEffect"]);
        }
    }["useCompositeListItem.useIsoLayoutEffect"], [
        externalIndex,
        subscribeMapChange,
        setIndex
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCompositeListItem.useMemo": ()=>({
                ref,
                index
            })
    }["useCompositeListItem.useMemo"], [
        index,
        ref
    ]);
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/item/useCompositeItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCompositeItem",
    ()=>useCompositeItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/useMergedRefs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/list/useCompositeListItem.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useCompositeItem(params = {}) {
    const { highlightItemOnHover, highlightedIndex, onHighlightedIndexChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompositeRootContext"])();
    const { ref, index } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompositeListItem"])(params);
    const isHighlighted = highlightedIndex === index;
    const itemRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRefs"])(ref, itemRef);
    const compositeProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCompositeItem.useMemo[compositeProps]": ()=>({
                tabIndex: isHighlighted ? 0 : -1,
                onFocus () {
                    onHighlightedIndexChange(index);
                },
                onMouseMove () {
                    const item = itemRef.current;
                    if (!highlightItemOnHover || !item) {
                        return;
                    }
                    const disabled = item.hasAttribute('disabled') || item.ariaDisabled === 'true';
                    if (!isHighlighted && !disabled) {
                        item.focus();
                    }
                }
            })
    }["useCompositeItem.useMemo[compositeProps]"], [
        isHighlighted,
        onHighlightedIndexChange,
        index,
        highlightItemOnHover
    ]);
    return {
        compositeProps,
        compositeRef: mergedRef,
        index
    };
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/item/CompositeItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeItem",
    ()=>CompositeItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$item$2f$useCompositeItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/item/useCompositeItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
'use client';
;
;
;
function CompositeItem(componentProps) {
    const { render, className, state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"], props = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_ARRAY"], refs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_ARRAY"], metadata, stateAttributesMapping, tag = 'div', ...elementProps } = componentProps;
    const { compositeProps, compositeRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$item$2f$useCompositeItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompositeItem"])({
        metadata
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])(tag, componentProps, {
        state,
        ref: [
            ...refs,
            compositeRef
        ],
        props: [
            compositeProps,
            ...props,
            elementProps
        ],
        stateAttributesMapping
    });
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useButton",
    ()=>useButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useFocusableWhenDisabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function useButton(parameters = {}) {
    const { disabled = false, focusableWhenDisabled, tabIndex = 0, native: isNativeButton = true } = parameters;
    const elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const isCompositeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompositeRootContext"])(true) !== undefined;
    const isValidLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useButton.useStableCallback[isValidLink]": ()=>{
            const element = elementRef.current;
            return Boolean(element?.tagName === 'A' && element?.href);
        }
    }["useButton.useStableCallback[isValidLink]"]);
    const { props: focusableWhenDisabledProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useFocusableWhenDisabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusableWhenDisabled"])({
        focusableWhenDisabled,
        disabled,
        composite: isCompositeItem,
        tabIndex,
        isNativeButton
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useButton.useEffect": ()=>{
                if (!elementRef.current) {
                    return;
                }
                const isButtonTag = elementRef.current.tagName === 'BUTTON';
                if (isNativeButton) {
                    if (!isButtonTag) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])('A component that acts as a button was not rendered as a native <button>, which does not match the default. Ensure that the element passed to the `render` prop of the component is a real <button>, or set the `nativeButton` prop on the component to `false`.');
                    }
                } else if (isButtonTag) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])('A component that acts as a button was rendered as a native <button>, which does not match the default. Ensure that the element passed to the `render` prop of the component is not a real <button>, or set the `nativeButton` prop on the component to `true`.');
                }
            }
        }["useButton.useEffect"], [
            isNativeButton
        ]);
    }
    // handles a disabled composite button rendering another button, e.g.
    // <Toolbar.Button disabled render={<Menu.Trigger />} />
    // the `disabled` prop needs to pass through 2 `useButton`s then finally
    // delete the `disabled` attribute from DOM
    const updateDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useButton.useCallback[updateDisabled]": ()=>{
            const element = elementRef.current;
            if (!isButtonElement(element)) {
                return;
            }
            if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === undefined && element.disabled) {
                element.disabled = false;
            }
        }
    }["useButton.useCallback[updateDisabled]"], [
        disabled,
        focusableWhenDisabledProps.disabled,
        isCompositeItem
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(updateDisabled, [
        updateDisabled
    ]);
    const getButtonProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useButton.useCallback[getButtonProps]": (externalProps = {})=>{
            const { onClick: externalOnClick, onMouseDown: externalOnMouseDown, onKeyUp: externalOnKeyUp, onKeyDown: externalOnKeyDown, onPointerDown: externalOnPointerDown, ...otherExternalProps } = externalProps;
            const type = isNativeButton ? 'button' : undefined;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
                type,
                onClick (event) {
                    if (disabled) {
                        event.preventDefault();
                        return;
                    }
                    externalOnClick?.(event);
                },
                onMouseDown (event) {
                    if (!disabled) {
                        externalOnMouseDown?.(event);
                    }
                },
                onKeyDown (event) {
                    if (!disabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeEventPreventable"])(event);
                        externalOnKeyDown?.(event);
                    }
                    if (event.baseUIHandlerPrevented) {
                        return;
                    }
                    const shouldClick = event.target === event.currentTarget && !isNativeButton && !isValidLink() && !disabled;
                    const isEnterKey = event.key === 'Enter';
                    const isSpaceKey = event.key === ' ';
                    // Keyboard accessibility for non interactive elements
                    if (shouldClick) {
                        if (isSpaceKey || isEnterKey) {
                            event.preventDefault();
                        }
                        if (isEnterKey) {
                            externalOnClick?.(event);
                        }
                    }
                },
                onKeyUp (event) {
                    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
                    // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
                    // Keyboard accessibility for non interactive elements
                    if (!disabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeEventPreventable"])(event);
                        externalOnKeyUp?.(event);
                    }
                    if (event.baseUIHandlerPrevented) {
                        return;
                    }
                    if (event.target === event.currentTarget && !isNativeButton && !disabled && event.key === ' ') {
                        externalOnClick?.(event);
                    }
                },
                onPointerDown (event) {
                    if (disabled) {
                        event.preventDefault();
                        return;
                    }
                    externalOnPointerDown?.(event);
                }
            }, !isNativeButton ? {
                role: 'button'
            } : undefined, focusableWhenDisabledProps, otherExternalProps);
        }
    }["useButton.useCallback[getButtonProps]"], [
        disabled,
        focusableWhenDisabledProps,
        isNativeButton,
        isValidLink
    ]);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useButton.useStableCallback[buttonRef]": (element)=>{
            elementRef.current = element;
            updateDisabled();
        }
    }["useButton.useStableCallback[buttonRef]"]);
    return {
        getButtonProps,
        buttonRef
    };
}
function isButtonElement(elem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(elem) && elem.tagName === 'BUTTON';
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/button/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
'use client';
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Button(componentProps, forwardedRef) {
    const { render, className, disabled = false, focusableWhenDisabled = false, nativeButton = true, ...elementProps } = componentProps;
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        focusableWhenDisabled,
        native: nativeButton
    });
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Button.Button.useMemo[state]": ()=>({
                disabled
            })
    }["Button.Button.useMemo[state]"], [
        disabled
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) Button.displayName = "Button";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/use-render/useRender.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRender",
    ()=>useRender
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
;
function useRender(params) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])(params.defaultTagName ?? 'div', params, params);
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormContext",
    ()=>FormContext,
    "useFormContext",
    ()=>useFormContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
'use client';
;
;
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    formRef: {
        current: {
            fields: new Map()
        }
    },
    errors: {},
    clearErrors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    validationMode: 'onSubmit',
    submitAttemptedRef: {
        current: false
    }
});
if ("TURBOPACK compile-time truthy", 1) FormContext.displayName = "FormContext";
function useFormContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormContext);
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabelableContext",
    ()=>LabelableContext,
    "useLabelableContext",
    ()=>useLabelableContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
'use client';
;
;
const LabelableContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    controlId: undefined,
    setControlId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    labelId: undefined,
    setLabelId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    messageIds: [],
    setMessageIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    getDescriptionProps: (externalProps)=>externalProps
});
if ("TURBOPACK compile-time truthy", 1) LabelableContext.displayName = "LabelableContext";
function useLabelableContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](LabelableContext);
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLabelableId",
    ()=>useLabelableId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+utils@0.2.4+27e8b5641b2272cd/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function useLabelableId(params = {}) {
    const { id, implicit = false, controlRef } = params;
    const { controlId, setControlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const defaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useLabelableId.useIsoLayoutEffect": ()=>{
            if (!implicit && !id || setControlId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$utils$40$0$2e$2$2e$4$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"]) {
                return undefined;
            }
            if (implicit) {
                const elem = controlRef?.current;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(elem) && elem.closest('label') != null) {
                    setControlId(id ?? null);
                } else {
                    setControlId(controlId ?? defaultId);
                }
            } else if (id) {
                setControlId(id);
            }
            return ({
                "useLabelableId.useIsoLayoutEffect": ()=>{
                    if (id) {
                        setControlId(undefined);
                    }
                }
            })["useLabelableId.useIsoLayoutEffect"];
        }
    }["useLabelableId.useIsoLayoutEffect"], [
        id,
        controlRef,
        controlId,
        setControlId,
        implicit,
        defaultId
    ]);
    return controlId ?? defaultId;
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/labelable-provider/LabelableProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabelableProvider",
    ()=>LabelableProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
/**
 * @internal
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const LabelableProvider = function LabelableProvider(props) {
    const defaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])();
    const [controlId, setControlId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](props.initialControlId === undefined ? defaultId : props.initialControlId);
    const [labelId, setLabelId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    const [messageIds, setMessageIds] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const { messageIds: parentMessageIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const getDescriptionProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "LabelableProvider.useCallback[getDescriptionProps]": (externalProps)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
                'aria-describedby': parentMessageIds.concat(messageIds).join(' ') || undefined
            }, externalProps);
        }
    }["LabelableProvider.useCallback[getDescriptionProps]"], [
        parentMessageIds,
        messageIds
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "LabelableProvider.useMemo[contextValue]": ()=>({
                controlId,
                setControlId,
                labelId,
                setLabelId,
                messageIds,
                setMessageIds,
                getDescriptionProps
            })
    }["LabelableProvider.useMemo[contextValue]"], [
        controlId,
        setControlId,
        labelId,
        setLabelId,
        messageIds,
        setMessageIds,
        getDescriptionProps
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelableContext"].Provider, {
        value: contextValue,
        children: props.children
    });
};
if ("TURBOPACK compile-time truthy", 1) LabelableProvider.displayName = "LabelableProvider";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DirectionContext",
    ()=>DirectionContext,
    "useDirection",
    ()=>useDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const DirectionContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) DirectionContext.displayName = "DirectionContext";
function useDirection() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DirectionContext);
    return context?.direction ?? 'ltr';
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/separator/Separator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
'use client';
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SeparatorComponent(componentProps, forwardedRef) {
    const { className, render, orientation = 'horizontal', ...elementProps } = componentProps;
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Separator.SeparatorComponent.useMemo[state]": ()=>({
                orientation
            })
    }["Separator.SeparatorComponent.useMemo[state]"], [
        orientation
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                role: 'separator',
                'aria-orientation': orientation
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) Separator.displayName = "Separator";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/fieldset/root/FieldsetRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldsetRootContext",
    ()=>FieldsetRootContext,
    "useFieldsetRootContext",
    ()=>useFieldsetRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const FieldsetRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    legendId: undefined,
    setLegendId: ()=>{},
    disabled: undefined
});
if ("TURBOPACK compile-time truthy", 1) FieldsetRootContext.displayName = "FieldsetRootContext";
function useFieldsetRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FieldsetRootContext);
    if (!context && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/checkbox-group/CheckboxGroupContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckboxGroupContext",
    ()=>CheckboxGroupContext,
    "useCheckboxGroupContext",
    ()=>useCheckboxGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const CheckboxGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CheckboxGroupContext.displayName = "CheckboxGroupContext";
function useCheckboxGroupContext(optional = true) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CheckboxGroupContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/input/Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Field$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <export * as Field>");
/**
 * A native input element that automatically works with [Field](https://base-ui.com/react/components/field).
 * Renders an `<input>` element.
 *
 * Documentation: [Base UI Input](https://base-ui.com/react/components/input)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Input(props, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$base$2d$ui$2b$react$40$1$2e$1$2e$0$2b$27e8b5641b2272cd$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Field$3e$__["Field"].Control, {
        ref: forwardedRef,
        ...props
    });
});
if ("TURBOPACK compile-time truthy", 1) Input.displayName = "Input";
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/context-menu/root/ContextMenuRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextMenuRootContext",
    ()=>ContextMenuRootContext,
    "useContextMenuRootContext",
    ()=>useContextMenuRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const ContextMenuRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ContextMenuRootContext.displayName = "ContextMenuRootContext";
function useContextMenuRootContext(optional = true) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ContextMenuRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ContextMenuRootContext is missing. ContextMenu parts must be placed within <ContextMenu.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/toolbar/root/ToolbarRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolbarRootContext",
    ()=>ToolbarRootContext,
    "useToolbarRootContext",
    ()=>useToolbarRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const ToolbarRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ToolbarRootContext.displayName = "ToolbarRootContext";
function useToolbarRootContext(optional) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ToolbarRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ToolbarRootContext is missing. Toolbar parts must be placed within <Toolbar.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/menubar/MenubarContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenubarContext",
    ()=>MenubarContext,
    "useMenubarContext",
    ()=>useMenubarContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const MenubarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) MenubarContext.displayName = "MenubarContext";
function useMenubarContext(optional) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](MenubarContext);
    if (context === null && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: MenubarContext is missing. Menubar parts must be placed within <Menubar>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/node_modules/.bun/@base-ui+react@1.1.0+27e8b5641b2272cd/node_modules/@base-ui/react/esm/csp-provider/CSPContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSPContext",
    ()=>CSPContext,
    "useCSPContext",
    ()=>useCSPContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+67f6792bdf102c28/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const CSPContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CSPContext.displayName = "CSPContext";
const DEFAULT_CSP_CONTEXT_VALUE = {
    disableStyleElements: false
};
function useCSPContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$67f6792bdf102c28$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}
}),
]);

//# sourceMappingURL=70299_%40base-ui_react_esm_9f8f656e._.js.map