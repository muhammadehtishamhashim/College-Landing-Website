(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/WebVitalsReporter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>WebVitalsReporter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function WebVitalsReporter() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebVitalsReporter.useEffect": ()=>{
            // Import and initialize web vitals tracking with error handling
            __turbopack_context__.r("[project]/src/lib/vitals.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then({
                "WebVitalsReporter.useEffect": (param)=>{
                    let { initWebVitals } = param;
                    try {
                        initWebVitals();
                    } catch (error) {
                        console.warn('Web Vitals initialization failed:', error);
                    }
                }
            }["WebVitalsReporter.useEffect"]).catch({
                "WebVitalsReporter.useEffect": (error)=>{
                    console.warn('Failed to load Web Vitals:', error);
                }
            }["WebVitalsReporter.useEffect"]);
        }
    }["WebVitalsReporter.useEffect"], []);
    return null;
}
_s(WebVitalsReporter, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = WebVitalsReporter;
var _c;
__turbopack_context__.k.register(_c, "WebVitalsReporter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_WebVitalsReporter_59268ade.js.map