(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/layout/DesktopNavigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const DesktopNavigation = (param)=>{
    let { isScrolled } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const navItems = [
        {
            href: '/',
            label: 'Home'
        },
        {
            href: '/about',
            label: 'About'
        },
        {
            href: '/programs',
            label: 'Programs'
        },
        {
            href: '/facilities',
            label: 'Facilities'
        },
        {
            href: '/admissions',
            label: 'Admissions'
        },
        {
            href: '/contact',
            label: 'Contact'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex items-center space-x-8",
        children: navItems.map((item)=>{
            const isActive = pathname === item.href;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: item.href,
                className: "relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ".concat(isScrolled ? isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600' : isActive ? 'text-white' : 'text-gray-200 hover:text-white'),
                children: [
                    item.label,
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-colors ".concat(isScrolled ? 'bg-blue-600' : 'bg-white')
                    }, void 0, false, {
                        fileName: "[project]/src/layout/DesktopNavigation.js",
                        lineNumber: 41,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, item.href, true, {
                fileName: "[project]/src/layout/DesktopNavigation.js",
                lineNumber: 24,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/layout/DesktopNavigation.js",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DesktopNavigation, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DesktopNavigation;
const __TURBOPACK__default__export__ = DesktopNavigation;
var _c;
__turbopack_context__.k.register(_c, "DesktopNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/layout/MobileNavToggle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const MobileNavToggle = (param)=>{
    let { isOpen, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50",
        "aria-label": "Toggle mobile menu",
        "aria-expanded": isOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-6 h-5 flex flex-col justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block h-0.5 w-full bg-white transform transition-all duration-300 ".concat(isOpen ? 'rotate-45 translate-y-2' : '')
                }, void 0, false, {
                    fileName: "[project]/src/layout/MobileNavToggle.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block h-0.5 w-full bg-white transition-all duration-300 ".concat(isOpen ? 'opacity-0' : '')
                }, void 0, false, {
                    fileName: "[project]/src/layout/MobileNavToggle.js",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block h-0.5 w-full bg-white transform transition-all duration-300 ".concat(isOpen ? '-rotate-45 -translate-y-2' : '')
                }, void 0, false, {
                    fileName: "[project]/src/layout/MobileNavToggle.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/layout/MobileNavToggle.js",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/layout/MobileNavToggle.js",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MobileNavToggle;
const __TURBOPACK__default__export__ = MobileNavToggle;
var _c;
__turbopack_context__.k.register(_c, "MobileNavToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/layout/MobileSidebar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const MobileSidebar = (param)=>{
    let { isOpen, onClose } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const navItems = [
        {
            href: '/',
            label: 'Home',
            icon: '🏠'
        },
        {
            href: '/about',
            label: 'About',
            icon: '📖'
        },
        {
            href: '/programs',
            label: 'Programs',
            icon: '🎓'
        },
        {
            href: '/facilities',
            label: 'Facilities',
            icon: '🏢'
        },
        {
            href: '/admissions',
            label: 'Admissions',
            icon: '📝'
        },
        {
            href: '/contact',
            label: 'Contact',
            icon: '📞'
        }
    ];
    // Close sidebar when route changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileSidebar.useEffect": ()=>{
            onClose();
        }
    }["MobileSidebar.useEffect"], [
        pathname,
        onClose
    ]);
    // Prevent body scroll when sidebar is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileSidebar.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
            return ({
                "MobileSidebar.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                }
            })["MobileSidebar.useEffect"];
        }
    }["MobileSidebar.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ".concat(isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'),
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/layout/MobileSidebar.js",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out ".concat(isOpen ? 'translate-x-0' : '-translate-x-full'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold text-lg",
                                            children: "FG"
                                        }, void 0, false, {
                                            fileName: "[project]/src/layout/MobileSidebar.js",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/layout/MobileSidebar.js",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-bold text-lg text-gray-900",
                                                children: "FG Science College"
                                            }, void 0, false, {
                                                fileName: "[project]/src/layout/MobileSidebar.js",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "Excellence in Education"
                                            }, void 0, false, {
                                                fileName: "[project]/src/layout/MobileSidebar.js",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/layout/MobileSidebar.js",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/layout/MobileSidebar.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors",
                                "aria-label": "Close menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 text-gray-500",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/layout/MobileSidebar.js",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/MobileSidebar.js",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layout/MobileSidebar.js",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/layout/MobileSidebar.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 px-6 py-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2",
                            children: navItems.map((item)=>{
                                const isActive = pathname === item.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "flex items-center space-x-4 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ".concat(isActive ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'),
                                        style: {
                                            minHeight: '44px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/layout/MobileSidebar.js",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/layout/MobileSidebar.js",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/layout/MobileSidebar.js",
                                        lineNumber: 84,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, item.href, false, {
                                    fileName: "[project]/src/layout/MobileSidebar.js",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/layout/MobileSidebar.js",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/layout/MobileSidebar.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-t border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admissions",
                                className: "block w-full px-6 py-3 bg-blue-600 text-white text-center font-semibold rounded-xl hover:bg-blue-700 transition-colors",
                                style: {
                                    minHeight: '44px'
                                },
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/src/layout/MobileSidebar.js",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: "📞 +91-123-456-7890"
                                    }, void 0, false, {
                                        fileName: "[project]/src/layout/MobileSidebar.js",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: "✉️ info@fgscience.edu.in"
                                    }, void 0, false, {
                                        fileName: "[project]/src/layout/MobileSidebar.js",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/layout/MobileSidebar.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/layout/MobileSidebar.js",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/layout/MobileSidebar.js",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(MobileSidebar, "tjXKfJWuFDa0epp0CJaCeazyqhM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MobileSidebar;
const __TURBOPACK__default__export__ = MobileSidebar;
var _c;
__turbopack_context__.k.register(_c, "MobileSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/layout/Header.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$DesktopNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layout/DesktopNavigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$MobileNavToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layout/MobileNavToggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$MobileSidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layout/MobileSidebar.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const Header = ()=>{
    _s();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 10);
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = ()=>{
        setIsMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16 lg:h-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$MobileNavToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    isOpen: isMobileMenuOpen,
                                    onClick: toggleMobileMenu
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-bold text-lg lg:text-xl",
                                                children: "FG"
                                            }, void 0, false, {
                                                fileName: "[project]/src/layout/Header.js",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/layout/Header.js",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden sm:block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "font-bold text-lg lg:text-xl transition-colors ".concat(isScrolled ? 'text-gray-900' : 'text-white'),
                                                    children: "FG Science College"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/layout/Header.js",
                                                    lineNumber: 58,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm transition-colors ".concat(isScrolled ? 'text-gray-600' : 'text-gray-200'),
                                                    children: "Excellence in Science Education"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/layout/Header.js",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/layout/Header.js",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 52,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$DesktopNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    isScrolled: isScrolled
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 73,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admissions",
                                    className: "px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 ".concat(isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-gray-100'),
                                    children: "Apply Now"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/layout/Header.js",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/layout/Header.js",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/layout/Header.js",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$MobileSidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isMobileMenuOpen,
                onClose: closeMobileMenu
            }, void 0, false, {
                fileName: "[project]/src/layout/Header.js",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Header, "9gS8f+QtQE+kyIRIeyB0R7XQtYQ=");
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/home/Beams.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react/no-unknown-property */ __turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$cf57b220$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-cf57b220.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$src$2f$math$2f$MathUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/src/math/MathUtils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
;
function extendMaterial(BaseMaterial, cfg) {
    var _cfg_material;
    const physical = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ShaderLib"].physical;
    const { vertexShader: baseVert, fragmentShader: baseFrag, uniforms: baseUniforms } = physical;
    var _physical_defines;
    const baseDefines = (_physical_defines = physical.defines) !== null && _physical_defines !== void 0 ? _physical_defines : {};
    const uniforms = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniformsUtils"].clone(baseUniforms);
    const defaults = new BaseMaterial(cfg.material || {});
    if (defaults.color) uniforms.diffuse.value = defaults.color;
    if ("roughness" in defaults) uniforms.roughness.value = defaults.roughness;
    if ("metalness" in defaults) uniforms.metalness.value = defaults.metalness;
    if ("envMap" in defaults) uniforms.envMap.value = defaults.envMap;
    if ("envMapIntensity" in defaults) uniforms.envMapIntensity.value = defaults.envMapIntensity;
    var _cfg_uniforms;
    Object.entries((_cfg_uniforms = cfg.uniforms) !== null && _cfg_uniforms !== void 0 ? _cfg_uniforms : {}).forEach((param)=>{
        let [key, u] = param;
        uniforms[key] = u !== null && typeof u === "object" && "value" in u ? u : {
            value: u
        };
    });
    var _cfg_vertexHeader;
    let vert = "".concat(cfg.header, "\n").concat((_cfg_vertexHeader = cfg.vertexHeader) !== null && _cfg_vertexHeader !== void 0 ? _cfg_vertexHeader : "", "\n").concat(baseVert);
    var _cfg_fragmentHeader;
    let frag = "".concat(cfg.header, "\n").concat((_cfg_fragmentHeader = cfg.fragmentHeader) !== null && _cfg_fragmentHeader !== void 0 ? _cfg_fragmentHeader : "", "\n").concat(baseFrag);
    var _cfg_vertex;
    for (const [inc, code] of Object.entries((_cfg_vertex = cfg.vertex) !== null && _cfg_vertex !== void 0 ? _cfg_vertex : {})){
        vert = vert.replace(inc, "".concat(inc, "\n").concat(code));
    }
    var _cfg_fragment;
    for (const [inc, code] of Object.entries((_cfg_fragment = cfg.fragment) !== null && _cfg_fragment !== void 0 ? _cfg_fragment : {})){
        frag = frag.replace(inc, "".concat(inc, "\n").concat(code));
    }
    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
        defines: {
            ...baseDefines
        },
        uniforms,
        vertexShader: vert,
        fragmentShader: frag,
        lights: true,
        fog: !!((_cfg_material = cfg.material) === null || _cfg_material === void 0 ? void 0 : _cfg_material.fog)
    });
    return mat;
}
const CanvasWrapper = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        dpr: [
            1,
            2
        ],
        frameloop: "always",
        className: "w-full h-full relative",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/_components/home/Beams.js",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CanvasWrapper;
const hexToNormalizedRGB = (hex)=>{
    const clean = hex.replace("#", "");
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return [
        r / 255,
        g / 255,
        b / 255
    ];
};
const noise = "\n  float random (in vec2 st) {\n      return fract(sin(dot(st.xy,\n                           vec2(12.9898,78.233)))*\n          43758.5453123);\n  }\n  float noise (in vec2 st) {\n      vec2 i = floor(st);\n      vec2 f = fract(st);\n      float a = random(i);\n      float b = random(i + vec2(1.0, 0.0));\n      float c = random(i + vec2(0.0, 1.0));\n      float d = random(i + vec2(1.0, 1.0));\n      vec2 u = f * f * (3.0 - 2.0 * f);\n      return mix(a, b, u.x) +\n             (c - a)* u.y * (1.0 - u.x) +\n             (d - b) * u.x * u.y;\n  }\n  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\n  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n  vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n  float cnoise(vec3 P){\n    vec3 Pi0 = floor(P);\n    vec3 Pi1 = Pi0 + vec3(1.0);\n    Pi0 = mod(Pi0, 289.0);\n    Pi1 = mod(Pi1, 289.0);\n    vec3 Pf0 = fract(P);\n    vec3 Pf1 = Pf0 - vec3(1.0);\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 / 7.0;\n    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 / 7.0;\n    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));\n    g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));\n    g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x,Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x,Pf1.y,Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy,Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy,Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x,Pf0.y,Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x,Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy,n_z.zw,fade_xyz.y);\n    float n_xyz = mix(n_yz.x,n_yz.y,fade_xyz.x);\n    return 2.2 * n_xyz;\n  }\n  ";
const Beams = (param)=>{
    let { beamWidth = 2, beamHeight = 15, beamNumber = 12, lightColor = "#ffffff", speed = 2, noiseIntensity = 1.75, scale = 0.2, rotation = 0 } = param;
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const beamMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beams.useMemo[beamMaterial]": ()=>extendMaterial(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"], {
                header: "\n    varying vec3 vEye;\n    varying float vNoise;\n    varying vec2 vUv;\n    varying vec3 vPosition;\n    uniform float time;\n    uniform float uSpeed;\n    uniform float uNoiseIntensity;\n    uniform float uScale;\n    ".concat(noise),
                vertexHeader: "\n    float getPos(vec3 pos) {\n      vec3 noisePos =\n        vec3(pos.x * 0., pos.y - uv.y, pos.z + time * uSpeed * 3.) * uScale;\n      return cnoise(noisePos);\n    }\n    vec3 getCurrentPos(vec3 pos) {\n      vec3 newpos = pos;\n      newpos.z += getPos(pos);\n      return newpos;\n    }\n    vec3 getNormal(vec3 pos) {\n      vec3 curpos = getCurrentPos(pos);\n      vec3 nextposX = getCurrentPos(pos + vec3(0.01, 0.0, 0.0));\n      vec3 nextposZ = getCurrentPos(pos + vec3(0.0, -0.01, 0.0));\n      vec3 tangentX = normalize(nextposX - curpos);\n      vec3 tangentZ = normalize(nextposZ - curpos);\n      return normalize(cross(tangentZ, tangentX));\n    }",
                fragmentHeader: "",
                vertex: {
                    "#include <begin_vertex>": "transformed.z += getPos(transformed.xyz);",
                    "#include <beginnormal_vertex>": "objectNormal = getNormal(position.xyz);"
                },
                fragment: {
                    "#include <dithering_fragment>": "\n      float randomNoise = noise(gl_FragCoord.xy);\n      gl_FragColor.rgb -= randomNoise / 15. * uNoiseIntensity;"
                },
                material: {
                    fog: true
                },
                uniforms: {
                    diffuse: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](...hexToNormalizedRGB("#000000")),
                    time: {
                        shared: true,
                        mixed: true,
                        linked: true,
                        value: 0
                    },
                    roughness: 0.3,
                    metalness: 0.3,
                    uSpeed: {
                        shared: true,
                        mixed: true,
                        linked: true,
                        value: speed
                    },
                    envMapIntensity: 10,
                    uNoiseIntensity: noiseIntensity,
                    uScale: scale
                }
            })
    }["Beams.useMemo[beamMaterial]"], [
        speed,
        noiseIntensity,
        scale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CanvasWrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                rotation: [
                    0,
                    0,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$src$2f$math$2f$MathUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degToRad"])(rotation)
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaneNoise, {
                        ref: meshRef,
                        material: beamMaterial,
                        count: beamNumber,
                        width: beamWidth,
                        height: beamHeight
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/home/Beams.js",
                        lineNumber: 227,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DirLight, {
                        color: lightColor,
                        position: [
                            0,
                            3,
                            10
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/home/Beams.js",
                        lineNumber: 234,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/home/Beams.js",
                lineNumber: 226,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 1
            }, void 0, false, {
                fileName: "[project]/src/app/_components/home/Beams.js",
                lineNumber: 236,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    "#000000"
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/_components/home/Beams.js",
                lineNumber: 237,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
                makeDefault: true,
                position: [
                    0,
                    0,
                    20
                ],
                fov: 30
            }, void 0, false, {
                fileName: "[project]/src/app/_components/home/Beams.js",
                lineNumber: 238,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/home/Beams.js",
        lineNumber: 225,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Beams, "axs70svLiSu6V5SWeXIDWzH4J60=");
_c1 = Beams;
function createStackedPlanesBufferGeometry(n, width, height, spacing, heightSegments) {
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    const numVertices = n * (heightSegments + 1) * 2;
    const numFaces = n * heightSegments * 2;
    const positions = new Float32Array(numVertices * 3);
    const indices = new Uint32Array(numFaces * 3);
    const uvs = new Float32Array(numVertices * 2);
    let vertexOffset = 0;
    let indexOffset = 0;
    let uvOffset = 0;
    const totalWidth = n * width + (n - 1) * spacing;
    const xOffsetBase = -totalWidth / 2;
    for(let i = 0; i < n; i++){
        const xOffset = xOffsetBase + i * (width + spacing);
        const uvXOffset = Math.random() * 300;
        const uvYOffset = Math.random() * 300;
        for(let j = 0; j <= heightSegments; j++){
            const y = height * (j / heightSegments - 0.5);
            const v0 = [
                xOffset,
                y,
                0
            ];
            const v1 = [
                xOffset + width,
                y,
                0
            ];
            positions.set([
                ...v0,
                ...v1
            ], vertexOffset * 3);
            const uvY = j / heightSegments;
            uvs.set([
                uvXOffset,
                uvY + uvYOffset,
                uvXOffset + 1,
                uvY + uvYOffset
            ], uvOffset);
            if (j < heightSegments) {
                const a = vertexOffset, b = vertexOffset + 1, c = vertexOffset + 2, d = vertexOffset + 3;
                indices.set([
                    a,
                    b,
                    c,
                    c,
                    b,
                    d
                ], indexOffset);
                indexOffset += 6;
            }
            vertexOffset += 2;
            uvOffset += 4;
        }
    }
    geometry.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
    geometry.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](uvs, 2));
    geometry.setIndex(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](indices, 1));
    geometry.computeVertexNormals();
    return geometry;
}
const MergedPlanes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_s1((param, ref)=>{
    let { material, width, count, height } = param;
    _s1();
    const mesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "MergedPlanes.useImperativeHandle": ()=>mesh.current
    }["MergedPlanes.useImperativeHandle"]);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MergedPlanes.useMemo[geometry]": ()=>createStackedPlanesBufferGeometry(count, width, height, 0, 100)
    }["MergedPlanes.useMemo[geometry]"], [
        count,
        width,
        height
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$cf57b220$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MergedPlanes.useFrame": (_, delta)=>{
            mesh.current.material.uniforms.time.value += 0.1 * delta;
        }
    }["MergedPlanes.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: mesh,
        geometry: geometry,
        material: material
    }, void 0, false, {
        fileName: "[project]/src/app/_components/home/Beams.js",
        lineNumber: 310,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
}, "37pgI9VTl8WWLbXZhu7xVW9EPgM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$cf57b220$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c2 = MergedPlanes;
MergedPlanes.displayName = "MergedPlanes";
const PlaneNoise = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MergedPlanes, {
        ref: ref,
        material: props.material,
        width: props.width,
        count: props.count,
        height: props.height
    }, void 0, false, {
        fileName: "[project]/src/app/_components/home/Beams.js",
        lineNumber: 315,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = PlaneNoise;
PlaneNoise.displayName = "PlaneNoise";
const DirLight = (param)=>{
    let { position, color } = param;
    _s2();
    const dir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DirLight.useEffect": ()=>{
            if (!dir.current) return;
            const cam = dir.current.shadow.camera;
            if (!cam) return;
            cam.top = 24;
            cam.bottom = -24;
            cam.left = -24;
            cam.right = 24;
            cam.far = 64;
            dir.current.shadow.bias = -0.004;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["DirLight.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
        ref: dir,
        color: color,
        intensity: 1,
        position: position
    }, void 0, false, {
        fileName: "[project]/src/app/_components/home/Beams.js",
        lineNumber: 343,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(DirLight, "FvbeZhRvZx2WhnhOYFtLPE2GIJU=");
_c4 = DirLight;
const __TURBOPACK__default__export__ = Beams;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "CanvasWrapper");
__turbopack_context__.k.register(_c1, "Beams");
__turbopack_context__.k.register(_c2, "MergedPlanes");
__turbopack_context__.k.register(_c3, "PlaneNoise");
__turbopack_context__.k.register(_c4, "DirLight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ui/Ribbons.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/math/Vec3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/math/Color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Polyline.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Ribbons = (param)=>{
    let { colors = [
        '#FC8EAC'
    ], baseSpring = 0.03, baseFriction = 0.9, baseThickness = 30, offsetFactor = 0.05, maxAge = 500, pointCount = 50, speedMultiplier = 0.6, enableFade = false, enableShaderEffect = false, effectAmplitude = 2, backgroundColor = [
        0,
        0,
        0,
        0
    ] } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Ribbons.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                dpr: window.devicePixelRatio || 2,
                alpha: true
            });
            const gl = renderer.gl;
            if (Array.isArray(backgroundColor) && backgroundColor.length === 4) {
                gl.clearColor(backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3]);
            } else {
                gl.clearColor(0, 0, 0, 0);
            }
            gl.canvas.style.position = 'absolute';
            gl.canvas.style.top = '0';
            gl.canvas.style.left = '0';
            gl.canvas.style.width = '100%';
            gl.canvas.style.height = '100%';
            container.appendChild(gl.canvas);
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"]();
            const lines = [];
            const vertex = "\n      precision highp float;\n      \n      attribute vec3 position;\n      attribute vec3 next;\n      attribute vec3 prev;\n      attribute vec2 uv;\n      attribute float side;\n      \n      uniform vec2 uResolution;\n      uniform float uDPR;\n      uniform float uThickness;\n      uniform float uTime;\n      uniform float uEnableShaderEffect;\n      uniform float uEffectAmplitude;\n      \n      varying vec2 vUV;\n      \n      vec4 getPosition() {\n          vec4 current = vec4(position, 1.0);\n          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);\n          vec2 nextScreen = next.xy * aspect;\n          vec2 prevScreen = prev.xy * aspect;\n          vec2 tangent = normalize(nextScreen - prevScreen);\n          vec2 normal = vec2(-tangent.y, tangent.x);\n          normal /= aspect;\n          normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));\n          float dist = length(nextScreen - prevScreen);\n          normal *= smoothstep(0.0, 0.02, dist);\n          float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n          float pixelWidth = current.w * pixelWidthRatio;\n          normal *= pixelWidth * uThickness;\n          current.xy -= normal * side;\n          if(uEnableShaderEffect > 0.5) {\n            current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;\n          }\n          return current;\n      }\n      \n      void main() {\n          vUV = uv;\n          gl_Position = getPosition();\n      }\n    ";
            const fragment = "\n      precision highp float;\n      uniform vec3 uColor;\n      uniform float uOpacity;\n      uniform float uEnableFade;\n      varying vec2 vUV;\n      void main() {\n          float fadeFactor = 1.0;\n          if(uEnableFade > 0.5) {\n              fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);\n          }\n          gl_FragColor = vec4(uColor, uOpacity * fadeFactor);\n      }\n    ";
            function resize() {
                const width = container.clientWidth;
                const height = container.clientHeight;
                renderer.setSize(width, height);
                lines.forEach({
                    "Ribbons.useEffect.resize": (line)=>line.polyline.resize()
                }["Ribbons.useEffect.resize"]);
            }
            window.addEventListener('resize', resize);
            const center = (colors.length - 1) / 2;
            colors.forEach({
                "Ribbons.useEffect": (color, index)=>{
                    const spring = baseSpring + (Math.random() - 0.5) * 0.05;
                    const friction = baseFriction + (Math.random() - 0.5) * 0.05;
                    const thickness = baseThickness + (Math.random() - 0.5) * 3;
                    const mouseOffset = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vec3"]((index - center) * offsetFactor + (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.1, 0);
                    const line = {
                        spring,
                        friction,
                        mouseVelocity: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vec3"](),
                        mouseOffset
                    };
                    const count = pointCount;
                    const points = [];
                    for(let i = 0; i < count; i++){
                        points.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vec3"]());
                    }
                    line.points = points;
                    line.polyline = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"](gl, {
                        points,
                        vertex,
                        fragment,
                        uniforms: {
                            uColor: {
                                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color)
                            },
                            uThickness: {
                                value: thickness
                            },
                            uOpacity: {
                                value: 1.0
                            },
                            uTime: {
                                value: 0.0
                            },
                            uEnableShaderEffect: {
                                value: enableShaderEffect ? 1.0 : 0.0
                            },
                            uEffectAmplitude: {
                                value: effectAmplitude
                            },
                            uEnableFade: {
                                value: enableFade ? 1.0 : 0.0
                            }
                        }
                    });
                    line.polyline.mesh.setParent(scene);
                    lines.push(line);
                }
            }["Ribbons.useEffect"]);
            resize();
            const mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vec3"]();
            function updateMouse(e) {
                let x, y;
                const rect = container.getBoundingClientRect();
                if (e.changedTouches && e.changedTouches.length) {
                    x = e.changedTouches[0].clientX - rect.left;
                    y = e.changedTouches[0].clientY - rect.top;
                } else {
                    x = e.clientX - rect.left;
                    y = e.clientY - rect.top;
                }
                const width = container.clientWidth;
                const height = container.clientHeight;
                mouse.set(x / width * 2 - 1, y / height * -2 + 1, 0);
            }
            container.addEventListener('mousemove', updateMouse);
            container.addEventListener('touchstart', updateMouse);
            container.addEventListener('touchmove', updateMouse);
            const tmp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Vec3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vec3"]();
            let frameId;
            let lastTime = performance.now();
            function update() {
                frameId = requestAnimationFrame(update);
                const currentTime = performance.now();
                const dt = currentTime - lastTime;
                lastTime = currentTime;
                lines.forEach({
                    "Ribbons.useEffect.update": (line)=>{
                        tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
                        line.mouseVelocity.add(tmp).multiply(line.friction);
                        line.points[0].add(line.mouseVelocity);
                        for(let i = 1; i < line.points.length; i++){
                            if (isFinite(maxAge) && maxAge > 0) {
                                const segmentDelay = maxAge / (line.points.length - 1);
                                const alpha = Math.min(1, dt * speedMultiplier / segmentDelay);
                                line.points[i].lerp(line.points[i - 1], alpha);
                            } else {
                                line.points[i].lerp(line.points[i - 1], 0.9);
                            }
                        }
                        if (line.polyline.mesh.program.uniforms.uTime) {
                            line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
                        }
                        line.polyline.updateGeometry();
                    }
                }["Ribbons.useEffect.update"]);
                renderer.render({
                    scene
                });
            }
            update();
            return ({
                "Ribbons.useEffect": ()=>{
                    window.removeEventListener('resize', resize);
                    container.removeEventListener('mousemove', updateMouse);
                    container.removeEventListener('touchstart', updateMouse);
                    container.removeEventListener('touchmove', updateMouse);
                    cancelAnimationFrame(frameId);
                    if (gl.canvas && gl.canvas.parentNode === container) {
                        container.removeChild(gl.canvas);
                    }
                }
            })["Ribbons.useEffect"];
        }
    }["Ribbons.useEffect"], [
        colors,
        baseSpring,
        baseFriction,
        baseThickness,
        offsetFactor,
        maxAge,
        pointCount,
        speedMultiplier,
        enableFade,
        enableShaderEffect,
        effectAmplitude,
        backgroundColor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full h-full"
    }, void 0, false, {
        fileName: "[project]/src/ui/Ribbons.js",
        lineNumber: 241,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Ribbons, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = Ribbons;
const __TURBOPACK__default__export__ = Ribbons;
var _c;
__turbopack_context__.k.register(_c, "Ribbons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/home/HeroSection.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$home$2f$Beams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/_components/home/Beams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Ribbons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/Ribbons.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../ui/blur-text'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
const HeroSection = (param)=>{
    let { collegeInfo } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen bg-black overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$home$2f$Beams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    beamWidth: 4,
                    beamHeight: 20,
                    beamNumber: 15,
                    lightColor: "#00ff00",
                    speed: 2,
                    noiseIntensity: 1.75,
                    scale: 0.3,
                    rotation: -45
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/_components/home/HeroSection.js",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full z-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Ribbons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    colors: [
                        '#00ff00',
                        '#00cc00',
                        '#009900'
                    ],
                    baseThickness: 20,
                    pointCount: 30,
                    speedMultiplier: 0.8,
                    enableFade: true,
                    offsetFactor: 0.1,
                    maxAge: 300
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/_components/home/HeroSection.js",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 min-h-screen flex items-center pt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlurText, {
                                            text: "FG Science Degree College for Men, Wah Cantt",
                                            delay: 100,
                                            animateBy: "words",
                                            direction: "top",
                                            className: "text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/_components/home/HeroSection.js",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlurText, {
                                            text: "Excellence in Science Education",
                                            delay: 150,
                                            animateBy: "words",
                                            direction: "top",
                                            className: "text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 lg:mb-8 font-light"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/_components/home/HeroSection.js",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlurText, {
                                            text: "FG Science Degree College is a premier institution dedicated to providing quality education in science and technology. We foster academic excellence, research innovation, and character development to prepare students for successful careers and meaningful contributions to society.",
                                            delay: 200,
                                            animateBy: "words",
                                            direction: "top",
                                            className: "text-base sm:text-lg text-gray-400 mb-6 lg:mb-8 leading-relaxed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/_components/home/HeroSection.js",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "px-6 sm:px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base",
                                                    children: "Explore Programs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "px-6 sm:px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors text-sm sm:text-base",
                                                    children: "Apply Now"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/_components/home/HeroSection.js",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center lg:justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gray-800/40 backdrop-blur-sm border border-gray-600/50 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-blue-600 flex items-center justify-center mb-3 lg:mb-4 mx-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl sm:text-4xl lg:text-5xl font-bold text-white",
                                                        children: "FG"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-xs sm:text-sm",
                                                    children: "College Logo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-xs",
                                                    children: "Image will be placed here"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/_components/home/HeroSection.js",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/_components/home/HeroSection.js",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/_components/home/HeroSection.js",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 lg:mt-20 mb-20 sm:mb-24 lg:mb-32",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-xl p-4 sm:p-6 text-center hover:bg-gray-800/80 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2",
                                                    children: "2010"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs sm:text-sm text-gray-400",
                                                    children: "Established"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/_components/home/HeroSection.js",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-xl p-4 sm:p-6 text-center hover:bg-gray-800/80 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2",
                                                    children: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 104,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs sm:text-sm text-gray-400",
                                                    children: "Degree Programs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/_components/home/HeroSection.js",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-xl p-4 sm:p-6 text-center hover:bg-gray-800/80 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2",
                                                    children: "20+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs sm:text-sm text-gray-400",
                                                    children: "Expert Faculty"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/_components/home/HeroSection.js",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-xl p-4 sm:p-6 text-center hover:bg-gray-800/80 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2",
                                                    children: "95%"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs sm:text-sm text-gray-400",
                                                    children: "Placement Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/_components/home/HeroSection.js",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/home/HeroSection.js",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/home/HeroSection.js",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/_components/home/HeroSection.js",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/_components/home/HeroSection.js",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/home/HeroSection.js",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_ce82585b._.js.map