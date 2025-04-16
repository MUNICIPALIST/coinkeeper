'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';

type Language = 'en' | 'ru' | 'kk';

// Обновленный тип для поддержки вложенных переводов
type TranslationValue = string | { [key: string]: TranslationValue };
type TranslationRecord = Record<string, TranslationValue>;

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  isClientReady: boolean;
}

// Create context with default values to prevent errors during initialization
const defaultContextValue: LanguageContextProps = {
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
  isClientReady: false
};

const LanguageContext = createContext<LanguageContextProps>(defaultContextValue);

// Translations dictionary - make sure to EXACTLY match capitalization for SSR/CSR consistency
const translations: Record<Language, TranslationRecord> = {
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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isClientReady, setIsClientReady] = useState(false);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    try {
      console.log('Initializing language provider...');
      
      // Get saved language from localStorage
      const savedLanguage = localStorage.getItem('language') as Language;
      console.log('Saved language from localStorage:', savedLanguage);
      
      if (savedLanguage && ['en', 'ru', 'kk'].includes(savedLanguage)) {
        console.log('Using saved language:', savedLanguage);
        setLanguage(savedLanguage);
        
        // Apply language to HTML tag
        document.documentElement.lang = savedLanguage;
      } else {
        // Default to browser language or 'en'
        const browserLang = navigator.language.split('-')[0];
        console.log('Browser language detected:', browserLang);
        
        if (['en', 'ru', 'kk'].includes(browserLang as Language)) {
          console.log('Using browser language:', browserLang);
          setLanguage(browserLang as Language);
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
    } finally {
      // Mark client as ready for rendering
      setIsClientReady(true);
    }
  }, []);

  // Update language when it changes
  useEffect(() => {
    if (isClientReady) {
      try {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
      } catch (error) {
        console.error('Error updating language:', error);
      }
    }
  }, [language, isClientReady]);

  const applyLanguage = (selectedLanguage: Language) => {
    try {
      if (typeof document === 'undefined') return;
      document.documentElement.lang = selectedLanguage;
    } catch (error) {
      console.error('Error applying language:', error);
    }
  };

  const setLanguageValue = useCallback((newLanguage: Language) => {
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
    setTimeout(() => {
      console.log('Refreshing components after language change');
      setIsClientReady(true);
      console.log('Language change complete');
    }, 50);
  }, []);

  // Обновленная функция для получения перевода, поддерживающая вложенные объекты
  const t = (key: string): string => {
    if (!key) return '';
    
    try {
      // Get translations for current language or fallback to English
      const currentTranslations = translations[language] || translations.en;
      
      // Handle nested keys like 'settings.appearance.theme'
      if (key.includes('.')) {
        const keys = key.split('.');
        let result: any = currentTranslations;
        
        // Navigate through the nested objects
        for (const k of keys) {
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
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-800">
        <p>Language initialization error: {loadingError}</p>
        <p>Using default English language.</p>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageValue, t, isClientReady }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 