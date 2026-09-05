module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/src/components/ProjectCatalog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCatalog",
    ()=>ProjectCatalog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ProjectCatalog() {
    const [selectedTag, setSelectedTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [activeModalProject, setActiveModalProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const allTags = [
        "All",
        ...Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectsData"].flatMap((p)=>p.tags)))
    ];
    const filteredProjects = selectedTag === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectsData"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectsData"].filter((p)=>p.tags.includes(selectedTag));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 max-w-6xl mx-auto px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "Project Portfolio & Case Studies"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm max-w-2xl mx-auto",
                        children: "Data Science and Artificial Intelligence (AI) Specialist with over 2 years of experience developing production-ready software solutions in ecosystems such as AWS and Azure. Expert in machine learning models, deep learning, computer vision algorithms, natural language processing (NLP), RAG systems, and LLM models, with experience developing ETL algorithms using orchestrators such as Apache Airflow and applying data processing tools such as Apache Spark (PySpark). Contact me for more information about my services."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectCatalog.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 justify-center mb-10",
                children: allTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedTag(tag),
                        className: `px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${selectedTag === tag ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" : "bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800"}`,
                        children: [
                            "#",
                            tag
                        ]
                    }, tag, true, {
                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCatalog.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between hover:border-blue-500/40 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-900/50",
                                        children: project.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mt-3 mb-2",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs mb-4 leading-relaxed",
                                        children: project.shortDescription
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 bg-slate-950 p-3 rounded-lg border border-slate-800/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold text-slate-300 mb-1",
                                                children: "🎯 Results and impact:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectCatalog.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-inside text-[11px] text-slate-400 space-y-1",
                                                children: project.metrics.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: m
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectCatalog.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5 mb-6",
                                        children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/src/components/ProjectCatalog.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectCatalog.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 pt-4 border-t border-slate-800/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.githubUrl,
                                        target: "_blank",
                                        className: "flex-1 text-center py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition",
                                        children: "Code (GitHub)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    project.demoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveModalProject(project),
                                        className: "flex-1 text-center py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition",
                                        children: "See demo 🚀"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectCatalog.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, project.id, true, {
                        fileName: "[project]/src/components/ProjectCatalog.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCatalog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            activeModalProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-white",
                                    children: [
                                        activeModalProject.title,
                                        " — Demo"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectCatalog.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveModalProject(null),
                                    className: "text-slate-400 hover:text-white bg-slate-800 px-3 py-1 rounded-lg text-xs",
                                    children: "✕ Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCatalog.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCatalog.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[480px] bg-black",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: activeModalProject.demoUrl,
                                className: "w-full h-full border-0",
                                title: activeModalProject.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectCatalog.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCatalog.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCatalog.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCatalog.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectCatalog.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectsData",
    ()=>projectsData
]);
const projectsData = [
    {
        id: "DMI-Database-AI",
        title: "Medical Implants Traceability System (DMI-Database-AI)",
        shortDescription: "Digitization and migration of legacy paper and Excel-based infrastructure to an SQL database architecture for the traceability of implantable medical devices (IMDs).",
        category: "Full-Stack & SQL",
        tags: [
            "Python",
            "PostgreSQL",
            "React (JS)",
            "Pandas",
            "NumPy",
            "Cloud Migration",
            "FastAPI",
            "AWS S3",
            "AWS CDN",
            "AWS Fargate",
            "AWS CloudWatch"
        ],
        metrics: [
            "100% digitization of implant cards",
            "96% software adoption rate among medical staff",
            "Data Validation at the Time of Entry"
        ],
        demoType: "video",
        demoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        githubUrl: "https://github.com/seba39399/DMI-Database-AI"
    },
    {
        id: "App-PhysicalRecovery",
        title: "Real-Time Skeleton Tracking & Pose Estimation",
        shortDescription: "Modular real-time pose estimation application using the ViTPose+ architecture and an interactive interface for biomechanical and rehabilitation engineering analysis",
        category: "Computer Vision",
        tags: [
            "Python",
            "ViTPose+",
            "Streamlit",
            "OpenCV",
            "PyTorch",
            "gRPC"
        ],
        metrics: [
            "Real-time processing",
            "Decoupled modularization for easy integration",
            "Generation of advanced reports in PDF format about patients"
        ],
        demoType: "image",
        demoUrl: "/images/interfaz1.jpg",
        imageUrl: "/images/interfaz1.jpg",
        demoImages: [
            "/images/interfaz1.jpg",
            "/images/interfaz2.jpg"
        ],
        demoDescription: "Interfaz en Streamlit para procesamiento de video en tiempo real. Permite la carga de videos biomecánicos, seguimiento del esqueleto mediante ViTPose+ y extracción automática de métricas de rehabilitación.",
        githubUrl: "https://github.com/miguelfrancor01/App_PhysicalRecovery"
    },
    {
        id: "aws-medallion-etl",
        title: "AWS Medallion Data Lake & PySpark Pipeline",
        shortDescription: "Distributed data engineering pipeline with Medallion architecture (Bronze/Silver/Gold), orchestrated with Airflow and queries in Athena.",
        category: "Data Engineering",
        tags: [
            "PySpark",
            "Apache Airflow",
            "AWS S3",
            "AWS Glue",
            "AWS Athena",
            "SQL"
        ],
        metrics: [
            "45% Reduction in Query Latency in Athena",
            "Handling Small Files: Problem with `coalesce()`",
            "Broadcast Joins for Shuffle Elimination"
        ],
        demoType: "interactive",
        githubUrl: "https://github.com/seba39399/ETL-AWS-PROD"
    },
    {
        id: "Biomedical-RAG",
        title: "Biomedical Auditory and AI RAG system",
        shortDescription: "Chatbot using a RAG-type system for the harmonization of Colombian and international regulations on medical devices and biomedical engineering. Implemented using modern tools and can be applied to any kind of science.",
        category: "MLOps & AI",
        tags: [
            "Python",
            "Streamlit",
            "AWS Cloud Formation",
            "NumPy",
            "RAG"
        ],
        metrics: [
            "Use of vector databases for information efficiency",
            "35% faster and more efficient than other similar systems.",
            "Deployment on AWS servers for front-end and back-end"
        ],
        demoType: "video",
        demoUrl: "https://www.loom.com/embed/04250c05b8884e3ba5cf3213829333a7",
        githubUrl: "https://github.com/seba39399/Biomedical-RAG"
    },
    {
        id: "Audio-MAE",
        title: "AudioMAE Masked Autoencoders that listen - Implementation",
        shortDescription: "This project implements the inference pipeline for AudioMAE (Masked Autoencoders that Listen), a state-of-the-art self-supervised model architecture presented at NeurIPS 2022 by Meta AI.",
        category: "MLOps & AI",
        tags: [
            "Python",
            "Streamlit",
            "Pandas",
            "NumPy",
            "Transformer"
        ],
        metrics: [
            "Use of vector databases for information efficiency",
            "35% faster and more efficient than other similar systems.",
            "Deployment on AWS servers for front-end and back-end"
        ],
        demoType: "video",
        demoUrl: "https://www.loom.com/embed/04250c05b8884e3ba5cf3213829333a7",
        githubUrl: "https://github.com/seba39399/Audio-Mae-Implementation/tree/main"
    },
    {
        id: "AI-Mammography",
        title: "Classification of Breast Tissue using Radiomics Algorithms",
        shortDescription: "This is a radiomics-based project focused on extracting quantitative imaging biomarkers from mammography scans to support supervised classification tasks.",
        category: "Data Engineering",
        tags: [
            "Python",
            "Sklearn",
            "Pandas",
            "NumPy",
            "Radiomics"
        ],
        metrics: [
            "Training phase adquired 89.1% accuracy within test data",
            "KNN Neighbors model used for training purposes",
            "Made it possible to distinguish between three types of tissue (normal, benign, and malignant)"
        ],
        demoType: "interactive",
        githubUrl: "https://github.com/seba39399/Medical-Image-Analysis-with-AI-Mammography"
    },
    {
        id: "Landmark-Detection",
        title: "Cephalometric Landmark Detection - Ricketts Line Autodetection",
        shortDescription: "Automatic detection of nasal and soft pogonion points in cephalometric images and visualization of the Ricketts aesthetic line using image processing and optimization techniques.",
        category: "Data Engineering",
        tags: [
            "Python",
            "DICOM",
            "Pandas",
            "NumPy",
            "Sklearn",
            "OpenCV"
        ],
        metrics: [
            "Identification of anatomical points of interest within a margin of error of 3 mm",
            "Automatic method with low RAM usage and no AI model integrated",
            "Dental practice using traditional computer vision"
        ],
        demoType: "video",
        demoUrl: "https://www.loom.com/embed/cf3704506b6641ca8289a6465f9c69ac",
        githubUrl: "https://github.com/seba39399/Cephalometric-Landmark-Detection-Image-Processing/tree/main"
    }
];
}),
];

//# sourceMappingURL=_1jdfo9m._.js.map