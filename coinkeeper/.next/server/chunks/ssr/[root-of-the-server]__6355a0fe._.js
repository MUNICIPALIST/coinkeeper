module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/providers/auth-provider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
'use client';
;
;
function AuthProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/auth-provider.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/providers/theme-provider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeContext": (()=>ThemeContext),
    "ThemeProvider": (()=>ThemeProvider),
    "useTheme": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// Create the context with a default value
const defaultThemeContext = {
    theme: 'system',
    setTheme: ()=>console.warn('Theme context not initialized')
};
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(defaultThemeContext);
;
function ThemeProvider({ children }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('system');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    // Initial setup effect - runs only once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Set mounted to true when component mounts
        setMounted(true);
        // Load theme from localStorage if available
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            applyTheme(savedTheme);
        } else {
            // Default to system preference
            setTheme('system');
            applyTheme('system');
        }
        // Add an event listener for system preference changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = ()=>{
            if (theme === 'system') {
                applyTheme('system');
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return ()=>mediaQuery.removeEventListener('change', handleChange);
    }, []); // Empty dependency array so this only runs once
    // Effect to apply theme changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mounted) {
            applyTheme(theme);
        }
    }, [
        theme,
        mounted
    ]);
    const applyTheme = (selectedTheme)=>{
        if (typeof document === 'undefined') return; // Skip during SSR
        const root = document.documentElement;
        // Clear all theme classes first
        root.classList.remove('light-theme', 'dark-theme', 'system-theme');
        // Clear data attributes
        root.removeAttribute('data-theme');
        document.body.removeAttribute('data-theme');
        let newMode = 'light';
        if (selectedTheme === 'dark') {
            // Apply dark theme
            root.classList.add('dark-theme');
            newMode = 'dark';
            root.setAttribute('data-theme', 'dark');
            document.body.setAttribute('data-theme', 'dark');
        } else if (selectedTheme === 'light') {
            // Apply light theme
            root.classList.add('light-theme');
            newMode = 'light';
            root.setAttribute('data-theme', 'light');
            document.body.setAttribute('data-theme', 'light');
        } else if (selectedTheme === 'system') {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                root.classList.add('dark-theme');
                newMode = 'dark';
                root.setAttribute('data-theme', 'dark');
                document.body.setAttribute('data-theme', 'dark');
            } else {
                root.classList.add('light-theme');
                newMode = 'light';
                root.setAttribute('data-theme', 'light');
                document.body.setAttribute('data-theme', 'light');
            }
            root.classList.add('system-theme');
        }
        setMode(newMode);
    };
    const setThemeValue = (newTheme)=>{
        console.log('Setting theme to:', newTheme);
        // First update localStorage
        localStorage.setItem('theme', newTheme);
        // Then update the state
        setTheme(newTheme);
        // Apply the theme immediately
        setTimeout(()=>{
            applyTheme(newTheme);
        }, 0);
    };
    // Create MUI Light theme
    const lightTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
        palette: {
            mode: 'light',
            primary: {
                main: '#2196f3',
                light: '#64b5f6',
                dark: '#1976d2',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#f50057',
                light: '#ff4081',
                dark: '#c51162',
                contrastText: '#ffffff'
            },
            background: {
                default: '#f5f5f5',
                paper: '#ffffff'
            },
            text: {
                primary: '#333333',
                secondary: '#757575'
            }
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                        '&:hover': {
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                        }
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: '8px',
                        fontWeight: 500
                    },
                    contained: {
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)'
                        }
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#e0e0e0'
                            },
                            '&:hover fieldset': {
                                borderColor: '#2196f3'
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#2196f3'
                            }
                        }
                    }
                }
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: '#ffffff',
                        borderRight: '1px solid #e0e0e0'
                    }
                }
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        '&.Mui-selected': {
                            backgroundColor: '#e3f2fd',
                            color: '#1976d2',
                            '&:hover': {
                                backgroundColor: '#e3f2fd'
                            }
                        },
                        '&:hover': {
                            backgroundColor: '#f5f5f5'
                        }
                    }
                }
            }
        }
    });
    // Create MUI Dark theme
    const darkTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
        palette: {
            mode: 'dark',
            primary: {
                main: '#90caf9',
                light: '#bbdefb',
                dark: '#64b5f6',
                contrastText: '#000000'
            },
            secondary: {
                main: '#f48fb1',
                light: '#f8bbd0',
                dark: '#f06292',
                contrastText: '#000000'
            },
            background: {
                default: '#121212',
                paper: '#1e1e1e'
            },
            text: {
                primary: '#ffffff',
                secondary: '#b0b0b0'
            }
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                        backgroundColor: '#1e1e1e',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                        '&:hover': {
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
                        }
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: '8px',
                        fontWeight: 500
                    },
                    contained: {
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: '0 4px 12px rgba(144, 202, 249, 0.3)'
                        }
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#424242'
                            },
                            '&:hover fieldset': {
                                borderColor: '#90caf9'
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#90caf9'
                            }
                        }
                    }
                }
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: '#1e1e1e',
                        borderRight: '1px solid #333333'
                    }
                }
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        '&.Mui-selected': {
                            backgroundColor: 'rgba(144, 202, 249, 0.16)',
                            color: '#90caf9',
                            '&:hover': {
                                backgroundColor: 'rgba(144, 202, 249, 0.16)'
                            }
                        },
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.08)'
                        }
                    }
                }
            }
        }
    });
    // Prevent flash of unstyled content
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            setTheme: setThemeValue
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: mode === 'dark' ? darkTheme : lightTheme,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/providers/theme-provider.tsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/providers/theme-provider.tsx",
            lineNumber: 327,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/providers/theme-provider.tsx",
        lineNumber: 326,
        columnNumber: 5
    }, this);
}
function useTheme() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}
}}),
"[project]/src/providers/language-provider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
// Create context with default values to prevent errors during initialization
const defaultContextValue = {
    language: 'en',
    setLanguage: ()=>{},
    t: (key)=>key,
    isClientReady: false
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(defaultContextValue);
// Translations dictionary - make sure to EXACTLY match capitalization for SSR/CSR consistency
const translations = {
    en: {
        'dashboard': {
            'title': 'Dashboard',
            'welcome_back': 'Welcome back, User!',
            'financial_overview': "Here's your financial overview",
            'total_balance': 'Total Balance',
            'income': 'Income',
            'expenses': 'Expenses',
            'spending_overview': 'Spending Overview',
            'spending_patterns': 'Chart showing your spending patterns will be displayed here',
            'recent_transactions': 'Recent Transactions',
            'transactions_appear': 'Your recent transactions will appear here'
        },
        'accounts': {
            'title': 'Accounts',
            'add_account': 'Add Account',
            'balance': 'Balance',
            'currency': 'Currency',
            'name': 'Name',
            'no_accounts': 'No accounts yet. Click "Add Account" to get started.',
            'edit_account': 'Edit Account',
            'delete_account': 'Delete Account'
        },
        'transactions': {
            'title': 'Transactions',
            'add_transaction': 'Add Transaction',
            'edit_transaction': 'Edit Transaction',
            'date': 'Date',
            'description': 'Description',
            'category': 'Category',
            'account': 'Account',
            'to_account': 'To Account',
            'amount': 'Amount',
            'type': 'Type',
            'actions': 'Actions',
            'rows_per_page': 'Rows per page',
            'income': 'Income',
            'expense': 'Expense',
            'transfer': 'Transfer',
            'no_transactions': 'No transactions yet. Click "Add Transaction" to get started.',
            'delete_confirmation': 'Are you sure you want to delete this transaction?',
            'save_failed': 'Failed to save transaction',
            'save_failed_try_again': 'Failed to save transaction. Please try again.'
        },
        'categories': {
            'title': 'Categories',
            'add_category': 'Add Category',
            'edit_category': 'Edit Category',
            'expense': 'Expense',
            'income': 'Income',
            'name': 'Name',
            'color': 'Color',
            'type': 'Type',
            'delete_confirmation': 'Are you sure you want to delete this category?',
            'no_categories': 'No categories yet. Click "Add Category" to get started.',
            'personal_care': 'Personal Care',
            'travel': 'Travel',
            'health': 'Health',
            'other': 'Other',
            'entertainment': 'Entertainment',
            'salary': 'Salary',
            'education': 'Education',
            'debt_payments': 'Debt Payments',
            'investments': 'Investments',
            'gifts': 'Gifts',
            'food_dining': 'Food & Dining',
            'transportation': 'Transportation',
            'housing': 'Housing',
            'utilities': 'Utilities',
            'shopping': 'Shopping',
            'icon': 'Icon (optional)',
            'icon_helper_text': 'Enter an icon name or emoji symbol (e.g. 🍕, 🏠, 💰, 🚗)',
            'popular_icons': 'Popular'
        },
        'budgets': {
            'title': 'Budgets',
            'spent': 'Spent',
            'budget': 'Budget',
            'edit_budget': 'Edit Budget'
        },
        'goals': 'Goals',
        'reports': {
            'financial_reports': 'Financial Reports',
            'time_range': 'Time Range',
            'time_range_options': {
                'last_7_days': 'Last 7 days',
                'last_30_days': 'Last 30 days',
                'last_90_days': 'Last 90 days',
                'last_year': 'Last year'
            },
            'overview': 'Overview',
            'categories': 'Categories',
            'trends': 'Trends',
            'income_vs_expenses': 'Income vs Expenses',
            'category_distribution': 'Category Distribution',
            'monthly_trends': 'Monthly Trends',
            'income': 'Income',
            'expenses': 'Expenses',
            'savings': 'Savings',
            'of_total_expenses': 'of total expenses'
        },
        'settings': {
            title: 'Settings',
            appearance: {
                title: 'Appearance',
                theme: 'Theme',
                light: 'Light',
                dark: 'Dark',
                system: 'System'
            },
            currency: {
                title: 'Currency',
                default: 'Default Currency'
            },
            language: {
                title: 'Language & Format',
                select: 'Language',
                dateFormat: 'Date Format'
            },
            notifications: {
                title: 'Notifications',
                enable: 'Enable Budget Notifications'
            },
            security: {
                title: 'Security',
                passwordDesc: 'Change your account password. It is recommended to use a strong password.',
                currentPassword: 'Current Password',
                newPassword: 'New Password',
                confirmPassword: 'Confirm Password',
                changePassword: 'Change Password',
                passwordSuccess: 'Password successfully updated!'
            },
            saveButton: 'Save Settings',
            saveSuccess: 'Settings saved successfully!'
        },
        'welcome': 'Welcome',
        'logout': 'Logout',
        'add_budget': 'Add Budget',
        'budget_name': 'Budget Name',
        'amount': 'Amount',
        'period': 'Period',
        'category': 'Category',
        'monthly': 'Monthly',
        'yearly': 'Yearly',
        'cancel': 'Cancel',
        'add': 'Add',
        'save': 'Save',
        'edit': 'Edit',
        'save_settings': 'Save Settings',
        'change_password': 'Change Password',
        'current_password': 'Current Password',
        'new_password': 'New Password',
        'confirm_password': 'Confirm Password',
        'update_password': 'Update Password',
        'appearance': 'Appearance',
        'theme': 'Theme',
        'light': 'Light',
        'dark': 'Dark',
        'system': 'Use system settings',
        'currency': 'Currency',
        'default_currency': 'Default Currency',
        'language_and_format': 'Language and Format',
        'language': 'Language',
        'date_format': 'Date Format',
        'notifications': 'Notifications',
        'enable_budget_notifications': 'Enable budget notifications',
        // Goal page translations
        'goal_name': 'Goal Name',
        'target_amount': 'Target Amount ($)',
        'current_amount': 'Current Amount ($)',
        'deadline': 'Deadline',
        'description': 'Description (Optional)',
        'add_goal': 'Add Goal',
        'edit_goal': 'Edit Goal',
        'delete_goal': 'Delete Goal',
        'no_goals': 'No goals created yet. Click "Add Goal" to get started.',
        'confirmation_delete': 'Are you sure you want to delete this goal?',
        // Common phrases
        'of': 'of',
        'error': 'Error'
    },
    ru: {
        'dashboard': {
            'title': 'Панель управления',
            'welcome_back': 'С возвращением, Пользователь!',
            'financial_overview': 'Ваш финансовый обзор',
            'total_balance': 'Общий баланс',
            'income': 'Доход',
            'expenses': 'Расходы',
            'spending_overview': 'Обзор расходов',
            'spending_patterns': 'Здесь будет отображаться график ваших расходов',
            'recent_transactions': 'Последние транзакции',
            'transactions_appear': 'Здесь появятся ваши последние транзакции'
        },
        'accounts': {
            'title': 'Счета',
            'add_account': 'Добавить счет',
            'balance': 'Баланс',
            'currency': 'Валюта',
            'name': 'Название',
            'no_accounts': 'Еще нет счетов. Нажмите "Добавить счет", чтобы начать.',
            'edit_account': 'Редактировать счет',
            'delete_account': 'Удалить счет'
        },
        'transactions': {
            'title': 'Транзакции',
            'add_transaction': 'Добавить транзакцию',
            'edit_transaction': 'Редактировать транзакцию',
            'date': 'Дата',
            'description': 'Описание',
            'category': 'Категория',
            'account': 'Счет',
            'to_account': 'На счет',
            'amount': 'Сумма',
            'type': 'Тип',
            'actions': 'Действия',
            'rows_per_page': 'Строк на странице',
            'income': 'Доход',
            'expense': 'Расход',
            'transfer': 'Перевод',
            'no_transactions': 'Еще нет транзакций. Нажмите "Добавить транзакцию", чтобы начать.',
            'delete_confirmation': 'Вы уверены, что хотите удалить эту транзакцию?',
            'save_failed': 'Не удалось сохранить транзакцию',
            'save_failed_try_again': 'Не удалось сохранить транзакцию. Пожалуйста, попробуйте еще раз.'
        },
        'categories': {
            'title': 'Категории',
            'add_category': 'Добавить категорию',
            'edit_category': 'Редактировать категорию',
            'expense': 'Расход',
            'income': 'Доход',
            'name': 'Название',
            'color': 'Цвет',
            'type': 'Тип',
            'delete_confirmation': 'Вы уверены, что хотите удалить эту категорию?',
            'no_categories': 'Еще нет категорий. Нажмите "Добавить категорию", чтобы начать.',
            'personal_care': 'Личный уход',
            'travel': 'Путешествия',
            'health': 'Здоровье',
            'other': 'Другое',
            'entertainment': 'Развлечения',
            'salary': 'Зарплата',
            'education': 'Образование',
            'debt_payments': 'Выплаты по кредиту',
            'investments': 'Инвестиции',
            'gifts': 'Подарки',
            'food_dining': 'Еда и рестораны',
            'transportation': 'Транспорт',
            'housing': 'Жильё',
            'utilities': 'Коммунальные услуги',
            'shopping': 'Покупки',
            'icon': 'Иконка (необязательно)',
            'icon_helper_text': 'Введите название иконки или смайлик (например, 🍕, 🏠, 💰, 🚗)',
            'popular_icons': 'Популярные'
        },
        'budgets': {
            'title': 'Бюджеты',
            'spent': 'Потрачено',
            'budget': 'Бюджет',
            'edit_budget': 'Изменить бюджет'
        },
        'goals': 'Цели',
        'reports': {
            'financial_reports': 'Финансовые отчеты',
            'time_range': 'Период времени',
            'time_range_options': {
                'last_7_days': 'Последние 7 дней',
                'last_30_days': 'Последние 30 дней',
                'last_90_days': 'Последние 90 дней',
                'last_year': 'Последний год'
            },
            'overview': 'Обзор',
            'categories': 'Категории',
            'trends': 'Тенденции',
            'income_vs_expenses': 'Доходы и расходы',
            'category_distribution': 'Распределение по категориям',
            'monthly_trends': 'Ежемесячные тенденции',
            'income': 'Доход',
            'expenses': 'Расходы',
            'savings': 'Сбережения',
            'of_total_expenses': 'от общих расходов'
        },
        'settings': {
            title: 'Настройки',
            appearance: {
                title: 'Внешний вид',
                theme: 'Тема',
                light: 'Светлая',
                dark: 'Темная',
                system: 'Системная'
            },
            currency: {
                title: 'Валюта',
                default: 'Основная валюта'
            },
            language: {
                title: 'Язык и формат',
                select: 'Язык',
                dateFormat: 'Формат даты'
            },
            notifications: {
                title: 'Уведомления',
                enable: 'Включить уведомления о бюджете'
            },
            security: {
                title: 'Безопасность',
                passwordDesc: 'Смена пароля учетной записи. Рекомендуется использовать надежный пароль.',
                currentPassword: 'Текущий пароль',
                newPassword: 'Новый пароль',
                confirmPassword: 'Подтвердите пароль',
                changePassword: 'Сменить пароль',
                passwordSuccess: 'Пароль успешно обновлен!'
            },
            saveButton: 'Сохранить настройки',
            saveSuccess: 'Настройки успешно сохранены!'
        },
        'welcome': 'Добро пожаловать',
        'logout': 'Выход',
        'add_budget': 'Добавить бюджет',
        'budget_name': 'Название бюджета',
        'amount': 'Сумма',
        'period': 'Период',
        'category': 'Категория',
        'monthly': 'Ежемесячно',
        'yearly': 'Ежегодно',
        'cancel': 'Отмена',
        'add': 'Добавить',
        'save': 'Сохранить',
        'edit': 'Изменить',
        'save_settings': 'Сохранить настройки',
        'change_password': 'Изменить пароль',
        'current_password': 'Текущий пароль',
        'new_password': 'Новый пароль',
        'confirm_password': 'Подтвердите пароль',
        'update_password': 'Обновить пароль',
        'appearance': 'Внешний вид',
        'theme': 'Тема',
        'light': 'Светлая',
        'dark': 'Темная',
        'system': 'Использовать настройки системы',
        'currency': 'Валюта',
        'default_currency': 'Валюта по умолчанию',
        'language_and_format': 'Язык и формат',
        'language': 'Язык',
        'date_format': 'Формат даты',
        'notifications': 'Уведомления',
        'enable_budget_notifications': 'Включить уведомления о бюджете',
        // Goal page translations
        'goal_name': 'Название цели',
        'target_amount': 'Целевая сумма (₽)',
        'current_amount': 'Текущая сумма (₽)',
        'deadline': 'Срок',
        'description': 'Описание (Необязательно)',
        'add_goal': 'Добавить цель',
        'edit_goal': 'Изменить цель',
        'delete_goal': 'Удалить цель',
        'no_goals': 'У вас пока нет целей. Нажмите "Добавить цель", чтобы начать.',
        'confirmation_delete': 'Вы уверены, что хотите удалить эту цель?',
        // Common phrases
        'of': 'из',
        'error': 'Ошибка'
    },
    kk: {
        'dashboard': {
            'title': 'Басқару панелі',
            'welcome_back': 'Қайта оралуыңызбен, Пайдаланушы!',
            'financial_overview': 'Сіздің қаржылық шолуыңыз',
            'total_balance': 'Жалпы баланс',
            'income': 'Кіріс',
            'expenses': 'Шығыстар',
            'spending_overview': 'Шығыстар шолуы',
            'spending_patterns': 'Мұнда сіздің шығындар үлгісі көрсетіледі',
            'recent_transactions': 'Соңғы транзакциялар',
            'transactions_appear': 'Мұнда сіздің соңғы транзакцияларыңыз пайда болады'
        },
        'accounts': {
            'title': 'Шоттар',
            'add_account': 'Шот қосу',
            'balance': 'Баланс',
            'currency': 'Валюта',
            'name': 'Атауы',
            'no_accounts': 'Әлі шоттар жоқ. Бастау үшін "Шот қосу" түймесін басыңыз.',
            'edit_account': 'Шотты өңдеу',
            'delete_account': 'Шотты жою'
        },
        'transactions': {
            'title': 'Транзакциялар',
            'add_transaction': 'Транзакция қосу',
            'edit_transaction': 'Транзакцияны өңдеу',
            'date': 'Күні',
            'description': 'Сипаттама',
            'category': 'Санат',
            'account': 'Шот',
            'to_account': 'Шотқа',
            'amount': 'Сома',
            'type': 'Түрі',
            'actions': 'Әрекеттер',
            'rows_per_page': 'Беттегі жолдар саны',
            'income': 'Кіріс',
            'expense': 'Шығыс',
            'transfer': 'Аударым',
            'no_transactions': 'Әлі транзакциялар жоқ. Бастау үшін "Транзакция қосу" түймесін басыңыз.',
            'delete_confirmation': 'Бұл транзакцияны шынымен жойғыңыз келе ме?',
            'save_failed': 'Транзакцияны сақтау сәтсіз аяқталды',
            'save_failed_try_again': 'Транзакцияны сақтау сәтсіз аяқталды. Қайталап көріңіз.'
        },
        'categories': {
            'title': 'Санаттар',
            'add_category': 'Санат қосу',
            'edit_category': 'Санатты өңдеу',
            'expense': 'Шығыс',
            'income': 'Кіріс',
            'name': 'Атауы',
            'color': 'Түсі',
            'type': 'Түрі',
            'delete_confirmation': 'Бұл санатты шынымен жойғыңыз келе ме?',
            'no_categories': 'Әлі санаттар жоқ. Бастау үшін "Санат қосу" түймесін басыңыз.',
            'personal_care': 'Жеке күтім',
            'travel': 'Саяхат',
            'health': 'Денсаулық',
            'other': 'Басқа',
            'entertainment': 'Ойын-сауық',
            'salary': 'Жалақы',
            'education': 'Білім',
            'debt_payments': 'Несие төлемдері',
            'investments': 'Инвестициялар',
            'gifts': 'Сыйлықтар',
            'food_dining': 'Тамақ және мейрамханалар',
            'transportation': 'Көлік',
            'housing': 'Тұрғын үй',
            'utilities': 'Коммуналдық қызметтер',
            'shopping': 'Сауда',
            'icon': 'Белгіше (міндетті емес)',
            'icon_helper_text': 'Белгіше атауын немесе эмодзи таңбасын енгізіңіз (мысалы, 🍕, 🏠, 💰, 🚗)',
            'popular_icons': 'Танымал'
        },
        'budgets': {
            'title': 'Бюджеттер',
            'spent': 'Жұмсалған',
            'budget': 'Бюджет',
            'edit_budget': 'Бюджетті өңдеу'
        },
        'goals': 'Мақсаттар',
        'reports': {
            'financial_reports': 'Қаржылық есептер',
            'time_range': 'Уақыт аралығы',
            'time_range_options': {
                'last_7_days': 'Соңғы 7 күн',
                'last_30_days': 'Соңғы 30 күн',
                'last_90_days': 'Соңғы 90 күн',
                'last_year': 'Өткен жыл'
            },
            'overview': 'Шолу',
            'categories': 'Санаттар',
            'trends': 'Үрдістер',
            'income_vs_expenses': 'Кірістер мен шығыстар',
            'category_distribution': 'Санаттар бойынша бөлу',
            'monthly_trends': 'Ай сайынғы үрдістер',
            'income': 'Кіріс',
            'expenses': 'Шығыстар',
            'savings': 'Жинақтар',
            'of_total_expenses': 'жалпы шығыстардан'
        },
        'settings': {
            title: 'Параметрлер',
            appearance: {
                title: 'Сыртқы түрі',
                theme: 'Тақырып',
                light: 'Жарық',
                dark: 'Қараңғы',
                system: 'Жүйе параметрлері'
            },
            currency: {
                title: 'Валюта',
                default: 'Негізгі валюта'
            },
            language: {
                title: 'Тіл және пішім',
                select: 'Тіл',
                dateFormat: 'Күн пішімі'
            },
            notifications: {
                title: 'Хабарландырулар',
                enable: 'Бюджет хабарландыруларын қосу'
            },
            security: {
                title: 'Қауіпсіздік',
                passwordDesc: 'Аккаунт құпиясөзін өзгерту. Күрделі құпиясөз қолдануды ұсынамыз.',
                currentPassword: 'Ағымдағы құпиясөз',
                newPassword: 'Жаңа құпиясөз',
                confirmPassword: 'Құпиясөзді растаңыз',
                changePassword: 'Құпиясөзді өзгерту',
                passwordSuccess: 'Құпия сөз сәтті жаңартылды!'
            },
            saveButton: 'Параметрлерді сақтау',
            saveSuccess: 'Параметрлер сәтті сақталды!'
        },
        'welcome': 'Қош келдіңіз',
        'logout': 'Шығу',
        'add_budget': 'Бюджет қосу',
        'budget_name': 'Бюджет атауы',
        'amount': 'Сома',
        'period': 'Кезең',
        'category': 'Санат',
        'monthly': 'Ай сайын',
        'yearly': 'Жыл сайын',
        'cancel': 'Бас тарту',
        'add': 'Қосу',
        'save': 'Сақтау',
        'edit': 'Өңдеу',
        'save_settings': 'Параметрлерді сақтау',
        'change_password': 'Құпия сөзді өзгерту',
        'current_password': 'Ағымдағы құпия сөз',
        'new_password': 'Жаңа құпия сөз',
        'confirm_password': 'Құпия сөзді растаңыз',
        'update_password': 'Құпия сөзді жаңарту',
        'appearance': 'Сыртқы түрі',
        'theme': 'Тақырып',
        'light': 'Жарық',
        'dark': 'Қараңғы',
        'system': 'Жүйе параметрлерін пайдалану',
        'currency': 'Валюта',
        'default_currency': 'Әдепкі валюта',
        'language_and_format': 'Тіл және пішім',
        'language': 'Тіл',
        'date_format': 'Күн пішімі',
        'notifications': 'Хабарландырулар',
        'enable_budget_notifications': 'Бюджет хабарландыруларын қосу',
        // Goal page translations
        'goal_name': 'Мақсат атауы',
        'target_amount': 'Мақсатты сома (₸)',
        'current_amount': 'Ағымдағы сома (₸)',
        'deadline': 'Мерзімі',
        'description': 'Сипаттама (Міндетті емес)',
        'add_goal': 'Мақсат қосу',
        'edit_goal': 'Мақсатты өңдеу',
        'delete_goal': 'Мақсатты жою',
        'no_goals': 'Сізде әлі мақсаттар жоқ. Бастау үшін "Мақсат қосу" түймесін басыңыз.',
        'confirmation_delete': 'Бұл мақсатты шынымен жойғыңыз келе ме?',
        // Common phrases
        'of': 'ішінен',
        'error': 'Қате'
    }
};
function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    const [isClientReady, setIsClientReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingError, setLoadingError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            console.log('Initializing language provider...');
            // Get saved language from localStorage
            const savedLanguage = localStorage.getItem('language');
            console.log('Saved language from localStorage:', savedLanguage);
            if (savedLanguage && [
                'en',
                'ru',
                'kk'
            ].includes(savedLanguage)) {
                console.log('Using saved language:', savedLanguage);
                setLanguage(savedLanguage);
                // Apply language to HTML tag
                document.documentElement.lang = savedLanguage;
            } else {
                // Default to browser language or 'en'
                const browserLang = navigator.language.split('-')[0];
                console.log('Browser language detected:', browserLang);
                if ([
                    'en',
                    'ru',
                    'kk'
                ].includes(browserLang)) {
                    console.log('Using browser language:', browserLang);
                    setLanguage(browserLang);
                    document.documentElement.lang = browserLang;
                    localStorage.setItem('language', browserLang);
                } else {
                    console.log('Defaulting to English');
                    setLanguage('en');
                    document.documentElement.lang = 'en';
                    localStorage.setItem('language', 'en');
                }
            }
        } catch (error) {
            console.error('Error initializing language:', error);
            setLoadingError(error instanceof Error ? error.message : 'Failed to initialize language');
        } finally{
            // Mark client as ready for rendering
            setIsClientReady(true);
        }
    }, []);
    // Update language when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isClientReady) {
            try {
                localStorage.setItem('language', language);
                document.documentElement.lang = language;
            } catch (error) {
                console.error('Error updating language:', error);
            }
        }
    }, [
        language,
        isClientReady
    ]);
    const applyLanguage = (selectedLanguage)=>{
        try {
            if (typeof document === 'undefined') return;
            document.documentElement.lang = selectedLanguage;
        } catch (error) {
            console.error('Error applying language:', error);
        }
    };
    const setLanguageValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newLanguage)=>{
        console.log('Setting language to:', newLanguage);
        // Save to localStorage
        localStorage.setItem('language', newLanguage);
        // Update language state
        setLanguage(newLanguage);
        // Apply to document
        document.documentElement.lang = newLanguage;
        console.log('Language updated successfully');
        // Force refresh to ensure all components update
        setIsClientReady(false);
        setTimeout(()=>{
            console.log('Refreshing components after language change');
            setIsClientReady(true);
            console.log('Language change complete');
        }, 50);
    }, []);
    // Обновленная функция для получения перевода, поддерживающая вложенные объекты
    const t = (key)=>{
        if (!key) return '';
        try {
            // Get translations for current language or fallback to English
            const currentTranslations = translations[language] || translations.en;
            // Handle nested keys like 'settings.appearance.theme'
            if (key.includes('.')) {
                const keys = key.split('.');
                let result = currentTranslations;
                // Navigate through the nested objects
                for (const k of keys){
                    if (result && typeof result === 'object' && k in result) {
                        result = result[k];
                    } else {
                        console.warn(`Translation key not found: ${key}`);
                        return key; // Key path not found
                    }
                }
                return typeof result === 'string' ? result : key;
            }
            // Handle regular keys
            const translation = currentTranslations[key];
            if (typeof translation === 'string') {
                return translation;
            }
            // If not found, try English or return the key itself
            const enTranslation = translations.en[key];
            return typeof enTranslation === 'string' ? enTranslation : key;
        } catch (error) {
            console.error(`Error in translation function for key: ${key}`, error);
            return key;
        }
    };
    // Show error message if there was a problem initializing
    if (loadingError && isClientReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Language initialization error: ",
                        loadingError
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/providers/language-provider.tsx",
                    lineNumber: 709,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Using default English language."
                }, void 0, false, {
                    fileName: "[project]/src/providers/language-provider.tsx",
                    lineNumber: 710,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/providers/language-provider.tsx",
            lineNumber: 708,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage: setLanguageValue,
            t,
            isClientReady
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/language-provider.tsx",
        lineNumber: 716,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
}}),
"[project]/src/components/common/error-boundary.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ErrorBoundary": (()=>ErrorBoundary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        if (this.props.onError) {
            this.props.onError(error);
        }
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border border-red-500 rounded bg-red-50 text-red-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold mb-2",
                        children: "Something went wrong"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/error-boundary.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2",
                        children: this.state.error?.message || 'An unexpected error occurred'
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/error-boundary.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>this.setState({
                                hasError: false,
                                error: null
                            }),
                        className: "px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700",
                        children: "Try again"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/error-boundary.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/error-boundary.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
}}),
"[project]/src/providers/providers.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/auth-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/theme-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/language-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$error$2d$boundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/error-boundary.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Providers({ children }) {
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add a useEffect to log when providers are mounted - helps with debugging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log('Providers mounted');
        // Force a refresh of the styles on client side
        const root = document.documentElement;
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            console.log('Initializing theme from localStorage:', currentTheme);
        }
        // Check authentication status on mount
        const checkAuth = async ()=>{
            try {
                const response = await fetch('/api/auth/session');
                const session = await response.json();
                console.log('Initial auth check:', session);
            } catch (error) {
                console.error('Error checking auth status:', error);
            }
        };
        checkAuth();
    }, []);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-screen p-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-red-600 mb-4",
                    children: "Application Error"
                }, void 0, false, {
                    fileName: "[project]/src/providers/providers.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-4",
                    children: error.message
                }, void 0, false, {
                    fileName: "[project]/src/providers/providers.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>window.location.reload(),
                    className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
                    children: "Reload Application"
                }, void 0, false, {
                    fileName: "[project]/src/providers/providers.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/providers/providers.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    const handleError = (error)=>{
        console.error("Provider error caught:", error);
        setError(error);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$error$2d$boundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        onError: handleError,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionProvider"], {
            refetchInterval: 5 * 60,
            refetchOnWindowFocus: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$error$2d$boundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
                onError: handleError,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$error$2d$boundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
                        onError: handleError,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$error$2d$boundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
                                onError: handleError,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageProvider"], {
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/src/providers/providers.tsx",
                                    lineNumber: 66,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/providers/providers.tsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/providers/providers.tsx",
                            lineNumber: 64,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/providers/providers.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/providers/providers.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/providers/providers.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/providers/providers.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/providers/providers.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/layouts/dashboard-layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Drawer/Drawer.js [app-ssr] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AppBar/AppBar.js [app-ssr] (ecmascript) <export default as AppBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-ssr] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/List/List.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItem/ListItem.js [app-ssr] (ecmascript) <export default as ListItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js [app-ssr] (ecmascript) <export default as ListItemButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js [app-ssr] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-ssr] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/useMediaQuery/index.js [app-ssr] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Menu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Dashboard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AccountBalance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Receipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Category$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Category.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Savings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Savings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Assessment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Assessment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Settings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Logout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Logout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/language-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
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
;
;
;
;
const drawerWidth = 240;
function DashboardLayout({ children }) {
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])(theme.breakpoints.down('sm'));
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const menuItems = [
        {
            key: 'dashboard.title',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 45,
                columnNumber: 37
            }, this),
            path: '/dashboard'
        },
        {
            key: 'accounts.title',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 46,
                columnNumber: 36
            }, this),
            path: '/accounts'
        },
        {
            key: 'transactions.title',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 47,
                columnNumber: 40
            }, this),
            path: '/transactions'
        },
        {
            key: 'categories.title',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Category$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 48,
                columnNumber: 38
            }, this),
            path: '/categories'
        },
        {
            key: 'budgets.title',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Savings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 49,
                columnNumber: 35
            }, this),
            path: '/budgets'
        },
        {
            key: 'reports.financial_reports',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Assessment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 50,
                columnNumber: 47
            }, this),
            path: '/reports'
        },
        {
            key: 'settings.title',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 51,
                columnNumber: 36
            }, this),
            path: '/settings'
        }
    ];
    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen);
    };
    const handleLogout = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
                redirect: false
            });
            router.push('/auth/signin');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };
    const drawer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h6",
                    noWrap: true,
                    component: "div",
                    children: "CoinKeeper"
                }, void 0, false, {
                    fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                sx: {
                    padding: '8px 0'
                },
                children: [
                    menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__["ListItem"], {
                            disablePadding: true,
                            sx: {
                                display: 'block',
                                margin: '4px 0'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__["ListItemButton"], {
                                component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                                href: item.path,
                                className: pathname === item.path ? 'active' : '',
                                disableRipple: true,
                                sx: {
                                    borderRadius: '8px',
                                    margin: '0 8px',
                                    padding: '8px 16px',
                                    minHeight: '48px',
                                    '&:hover': {
                                        background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                                        transform: 'translateY(-2px)',
                                        transition: 'all 0.2s ease'
                                    },
                                    '&.active': {
                                        background: theme.palette.mode === 'dark' ? 'rgba(100, 100, 100, 0.2)' : 'rgba(100, 100, 100, 0.1)',
                                        color: theme.palette.mode === 'dark' ? '#fff' : '#555'
                                    },
                                    overflow: 'hidden',
                                    border: 'none',
                                    outline: 'none',
                                    boxShadow: 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                        sx: {
                                            color: theme.palette.mode === 'dark' ? '#aaa' : '#555',
                                            minWidth: '40px'
                                        },
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                        primary: t(item.key)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, item.key, false, {
                            fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__["ListItem"], {
                        disablePadding: true,
                        sx: {
                            display: 'block',
                            margin: '4px 0'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__["ListItemButton"], {
                            onClick: handleLogout,
                            disableRipple: true,
                            sx: {
                                borderRadius: '8px',
                                margin: '0 8px',
                                padding: '8px 16px',
                                minHeight: '48px',
                                '&:hover': {
                                    background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                                    transform: 'translateY(-2px)',
                                    transition: 'all 0.2s ease'
                                },
                                overflow: 'hidden',
                                border: 'none',
                                outline: 'none',
                                boxShadow: 'none',
                                cursor: 'pointer'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                    sx: {
                                        color: theme.palette.mode === 'dark' ? '#ff5252' : '#d32f2f',
                                        minWidth: '40px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Logout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                    primary: t('logout')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: 'flex'
        },
        className: "dashboard-layout",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__["AppBar"], {
                position: "fixed",
                sx: {
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`
                    },
                    ml: {
                        sm: `${drawerWidth}px`
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            color: "inherit",
                            "aria-label": "open drawer",
                            edge: "start",
                            onClick: handleDrawerToggle,
                            sx: {
                                mr: 2,
                                display: {
                                    sm: 'none'
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h6",
                            noWrap: true,
                            component: "div",
                            children: "CoinKeeper"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: "nav",
                sx: {
                    width: {
                        sm: drawerWidth
                    },
                    flexShrink: {
                        sm: 0
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
                        variant: "temporary",
                        open: mobileOpen,
                        onClose: handleDrawerToggle,
                        ModalProps: {
                            keepMounted: true
                        },
                        sx: {
                            display: {
                                xs: 'block',
                                sm: 'none'
                            },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                                borderRight: '1px solid',
                                borderColor: theme.palette.mode === 'dark' ? 'rgba(50, 50, 50, 1)' : 'rgba(230, 230, 230, 1)',
                                background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f8f9fa',
                                overflow: 'hidden'
                            }
                        },
                        children: drawer
                    }, void 0, false, {
                        fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
                        variant: "permanent",
                        sx: {
                            display: {
                                xs: 'none',
                                sm: 'block'
                            },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                                borderRight: '1px solid',
                                borderColor: theme.palette.mode === 'dark' ? 'rgba(50, 50, 50, 1)' : 'rgba(230, 230, 230, 1)',
                                background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f8f9fa',
                                overflow: 'hidden'
                            }
                        },
                        open: true,
                        children: drawer
                    }, void 0, false, {
                        fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: "main",
                sx: {
                    flexGrow: 1,
                    p: {
                        xs: 2,
                        sm: 3
                    },
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`
                    },
                    marginTop: '64px',
                    minHeight: 'calc(100vh - 64px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f5f7fa'
                },
                className: "main-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        width: '100%',
                        maxWidth: '1080px',
                        margin: '0 auto',
                        paddingLeft: {
                            xs: 0,
                            sm: '24px'
                        },
                        paddingRight: {
                            xs: 0,
                            sm: '24px'
                        }
                    },
                    className: "content-wrapper",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layouts/dashboard-layout.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/layouts/client-layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layouts/dashboard-layout.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ClientLayout({ children }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Handle client-side initialization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            // Set mounted state to trigger client-side rendering
            setMounted(true);
            // Apply any saved theme from localStorage
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                document.documentElement.setAttribute('data-theme', savedTheme);
                document.documentElement.classList.add(`${savedTheme}-theme`);
            } else {
                // Apply system preference if no saved theme
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const defaultTheme = prefersDark ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', defaultTheme);
                document.documentElement.classList.add(`${defaultTheme}-theme`);
            }
            console.log('Client layout initialized');
        } catch (error) {
            console.error('Error initializing client layout:', error);
        } finally{
            // Mark as loaded even if there was an error
            setIsLoading(false);
        }
    }, []);
    // Show loading state to prevent flash of unstyled content
    if (!mounted || isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "layout-loading w-full h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-semibold",
                        children: "Loading CoinKeeper..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/layouts/client-layout.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-sm text-gray-500",
                        children: "Please wait while we set up your experience"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layouts/client-layout.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layouts/client-layout.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layouts/client-layout.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    // Use DashboardLayout for all routes except auth routes
    if (!pathname.startsWith('/auth')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/layouts/client-layout.tsx",
            lineNumber: 54,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6355a0fe._.js.map