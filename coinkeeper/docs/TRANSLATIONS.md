# CoinKeeper Translation System

CoinKeeper uses a custom translation system to support multiple languages. This document explains how the translation system works and how to use it in your components.

## Overview

The translation system is based on a React context provider that makes translation functions available throughout the application. The system supports:

- Multiple languages (English, Russian, Kazakh)
- Nested translation keys
- Fallback to English for missing translations
- Local storage persistence of language preferences
- Browser language detection

## How to Use Translations in Components

### 1. Import the Language Hook

```tsx
import { useLanguage } from '@/providers/language-provider';
```

### 2. Use the Hook in Your Component

```tsx
const { t, language, setLanguage } = useLanguage();
```

This gives you access to:
- `t`: The translation function
- `language`: The current language code ('en', 'ru', or 'kk')
- `setLanguage`: Function to change the current language

### 3. Translate Text

```tsx
// Simple key
<Typography>{t('dashboard')}</Typography>

// Nested key
<Typography>{t('settings.appearance.title')}</Typography>
```

### 4. Change Language

```tsx
// Change to Russian
<Button onClick={() => setLanguage('ru')}>Русский</Button>

// Change to English
<Button onClick={() => setLanguage('en')}>English</Button>

// Change to Kazakh
<Button onClick={() => setLanguage('kk')}>Қазақша</Button>
```

## Adding New Translations

To add new translations, update the `translations` object in `src/providers/language-provider.tsx`:

```tsx
const translations: Record<Language, TranslationRecord> = {
  en: {
    'new_key': 'New Translation',
    'nested': {
      'key': 'Nested Translation'
    },
    // ... existing translations
  },
  ru: {
    'new_key': 'Новый перевод',
    'nested': {
      'key': 'Вложенный перевод'
    },
    // ... existing translations
  },
  kk: {
    'new_key': 'Жаңа аударма',
    'nested': {
      'key': 'Ендірілген аударма'
    },
    // ... existing translations
  }
};
```

## Translation Best Practices

1. **Use Consistent Keys**: Follow the naming pattern of existing keys
2. **Group Related Keys**: Use nested objects for related translations
3. **Always Provide All Languages**: Every key should have translations for all supported languages
4. **Use the Hook Inside Components**: Make sure your component is a child of `LanguageProvider`
5. **Wait for Client Readiness**: Check `isClientReady` before rendering translated content

```tsx
const { t, isClientReady } = useLanguage();

if (!isClientReady) {
  return <div>Loading...</div>;
}

return <div>{t('your_key')}</div>;
```

## Example Component

```tsx
'use client';

import { useLanguage } from '@/providers/language-provider';
import { Box, Typography, Button } from '@mui/material';

export default function LanguageSelector() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <Box>
      <Typography variant="h5">{t('settings.language.title')}</Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button 
          variant={language === 'en' ? 'contained' : 'outlined'} 
          onClick={() => setLanguage('en')}
        >
          English
        </Button>
        <Button 
          variant={language === 'ru' ? 'contained' : 'outlined'} 
          onClick={() => setLanguage('ru')}
        >
          Русский
        </Button>
        <Button 
          variant={language === 'kk' ? 'contained' : 'outlined'} 
          onClick={() => setLanguage('kk')}
        >
          Қазақша
        </Button>
      </Box>
    </Box>
  );
}
```

## Demo Page

You can see a working example of the translation system at `/translation-demo`, which demonstrates:

- Language switching
- Nested translations
- Dynamic translated content

## Under the Hood

The translation system works by:

1. Initializing with the stored language or detecting the browser language
2. Setting the HTML document language attribute for accessibility
3. Providing a context with translation functions
4. Supporting nested key access through the t() function
5. Updating all components when the language changes 