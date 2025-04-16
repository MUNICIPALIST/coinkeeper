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
        'dashboard': 'Dashboard',
        'accounts': 'Accounts',
        'transactions': 'Transactions',
        'categories': 'Categories',
        'budgets': 'Budgets',
        'goals': 'Goals',
        'reports': 'Reports',
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
        'confirmation_delete': 'Are you sure you want to delete this goal?'
    },
    ru: {
        'dashboard': 'Панель управления',
        'accounts': 'Счета',
        'transactions': 'Транзакции',
        'categories': 'Категории',
        'budgets': 'Бюджеты',
        'goals': 'Цели',
        'reports': 'Отчеты',
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
        'confirmation_delete': 'Вы уверены, что хотите удалить эту цель?'
    },
    kk: {
        'dashboard': 'Басқару панелі',
        'accounts': 'Шоттар',
        'transactions': 'Транзакциялар',
        'categories': 'Санаттар',
        'budgets': 'Бюджеттер',
        'goals': 'Мақсаттар',
        'reports': 'Есептер',
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
        'confirmation_delete': 'Бұл мақсатты шынымен жойғыңыз келе ме?'
    }
};
function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    const [isClientReady, setIsClientReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Get saved language or detect browser language
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && [
            'en',
            'ru',
            'kk'
        ].includes(savedLanguage)) {
            setLanguage(savedLanguage);
        } else {
            // Default to browser language or 'en'
            const browserLang = navigator.language.split('-')[0];
            if ([
                'en',
                'ru',
                'kk'
            ].includes(browserLang)) {
                setLanguage(browserLang);
            }
        }
        // Mark client as ready for rendering
        setIsClientReady(true);
        // Apply language to HTML tag
        document.documentElement.lang = language;
    }, []);
    // Update language when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isClientReady) {
            localStorage.setItem('language', language);
            document.documentElement.lang = language;
        }
    }, [
        language,
        isClientReady
    ]);
    const applyLanguage = (selectedLanguage)=>{
        if (typeof document === 'undefined') return;
        document.documentElement.lang = selectedLanguage;
    };
    const setLanguageValue = (newLanguage)=>{
        localStorage.setItem('language', newLanguage);
        setLanguage(newLanguage);
        applyLanguage(newLanguage);
    };
    // Обновленная функция для получения перевода, поддерживающая вложенные объекты
    const t = (key)=>{
        if (!key) return '';
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
    };
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
        lineNumber: 366,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/language-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Providers({ children }) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionProvider"], {
        refetchInterval: 5 * 60,
        refetchOnWindowFocus: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$language$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/providers/providers.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/providers/providers.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/providers/providers.tsx",
        lineNumber: 35,
        columnNumber: 5
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
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
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
            console.log('Theme changed to:', theme);
            applyTheme(theme);
        }
    }, [
        theme,
        mounted
    ]);
    const applyTheme = (selectedTheme)=>{
        if (typeof document === 'undefined') return; // Skip during SSR
        console.log('Applying theme:', selectedTheme);
        const root = document.documentElement;
        // Remove existing theme classes
        root.classList.remove('dark-theme', 'light-theme', 'system-theme');
        let newMode = 'light';
        if (selectedTheme === 'dark') {
            root.classList.add('dark-theme');
            newMode = 'dark';
            document.body.setAttribute('data-theme', 'dark');
        } else if (selectedTheme === 'light') {
            root.classList.add('light-theme');
            newMode = 'light';
            document.body.setAttribute('data-theme', 'light');
        } else if (selectedTheme === 'system') {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                root.classList.add('dark-theme');
                newMode = 'dark';
                document.body.setAttribute('data-theme', 'dark');
            } else {
                root.classList.add('light-theme');
                newMode = 'light';
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
        // Force DOM updates in case of issues with state synchronization
        document.documentElement.dataset.themeLoading = 'true';
        setTimeout(()=>{
            applyTheme(newTheme);
            document.documentElement.dataset.themeLoading = 'false';
        }, 0);
    };
    // Create MUI theme based on current mode
    const muiTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
        palette: {
            mode: mode,
            primary: {
                main: mode === 'light' ? '#1976d2' : '#90caf9'
            },
            secondary: {
                main: mode === 'light' ? '#dc004e' : '#f48fb1'
            },
            background: {
                default: mode === 'light' ? '#ffffff' : '#121212',
                paper: mode === 'light' ? '#ffffff' : '#1e1e1e'
            },
            text: {
                primary: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
                secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'
            }
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: mode === 'light' ? '#ffffff' : '#121212',
                        color: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
                        transition: 'background-color 0.3s, color 0.3s'
                    },
                    '& #__next': {
                        backgroundColor: mode === 'light' ? '#ffffff' : '#121212',
                        minHeight: '100vh'
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e'
                    }
                }
            },
            MuiDrawer: {
                defaultProps: {
                    PaperProps: {
                        style: {
                            backgroundColor: mode === 'light' ? '#f0f0f0' : '#1e1e1e',
                            borderRight: mode === 'light' ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)'
                        }
                    }
                },
                styleOverrides: {
                    root: {
                        "& .MuiDrawer-paper": {
                            backgroundColor: mode === 'light' ? '#f0f0f0' : '#1e1e1e',
                            borderRight: mode === 'light' ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)'
                        }
                    },
                    paper: {
                        backgroundColor: mode === 'light' ? '#f0f0f0' : '#1e1e1e',
                        borderRight: mode === 'light' ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)'
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
            theme: muiTheme,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/providers/theme-provider.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/providers/theme-provider.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/providers/theme-provider.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
function useTheme() {
    // Context now always has a value due to default context
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5ee2c280._.js.map