# Technical Context - THEME-001: Complete Dark Mode Implementation

## Purpose
Describes the current technical state, focus, key classes, outstanding issues, and next steps for fixing the dark theme implementation.

---

## Technical Context

### Current Implementation State
- **Theme System**: Fully implemented with 5 dark themes defined in `src/data/config/themes.js`
- **Theme Selector**: Working UI component with dropdown selection
- **Language Selector**: Working multi-language support
- **Navigation**: Enhanced with theme/language controls
- **Issue**: Visual themes not applying - website remains light despite dark theme selection

### Architecture Overview
```
Theme System Architecture:
├── src/data/config/themes.js          # Theme definitions with CSS variables
├── src/components/ui/ThemeSelector.astro  # Theme selection UI
├── src/layouts/Layout.astro           # Theme initialization script
└── src/styles/                       # Component styles (need variable integration)
```

## Current Focus

### Primary Issue
The theme selector appears functional but the actual dark theme styling is not being applied to the website. The interface remains light regardless of theme selection.

### Root Cause Hypothesis
1. **CSS Variable Cascade**: Theme variables not properly applied to `:root`
2. **Timing Issue**: Theme initialization may occur after CSS parsing
3. **Specificity Conflict**: HTML5UP template styles overriding theme variables
4. **Incomplete Integration**: Components not using CSS variables consistently

## Key Classes/Components

### 1. **Theme System Core**
- `src/data/config/themes.js` - Theme definitions and utilities
- `themeUtils.applyTheme()` - Theme application function
- CSS custom properties for each theme

### 2. **Theme Selector Component**
- `src/components/ui/ThemeSelector.astro` - UI for theme selection
- JavaScript theme switching logic
- Visual preview system

### 3. **Layout Integration**
- `src/layouts/Layout.astro` - Theme initialization
- Global CSS overrides for text readability
- Theme script execution

### 4. **Component Styles**
- `src/styles/components/navigation.css` - Navigation styling
- `src/styles/sections/` - Section-specific styles
- `src/styles/ui/` - UI component styles

## Outstanding Issues

### Critical Issues
1. **Theme Variables Not Applied**: CSS variables not reaching components
2. **Background Still Light**: Body background not responding to theme changes
3. **Text Colors Hardcoded**: Many components still use hardcoded colors
4. **HTML5UP Override**: Original template styles taking precedence

### Technical Risks
- **CSS Specificity Wars**: Multiple CSS files competing for style application
- **Performance Impact**: Multiple style overrides may affect load time
- **Browser Compatibility**: CSS variable support in older browsers
- **Theme Consistency**: Ensuring all components respect theme changes

## Next Steps

### Immediate Actions (Phase 1)
1. **Fix CSS Variable Application**: Ensure `:root` variables are properly set
2. **Global Style Overrides**: Create comprehensive dark theme base styles
3. **Body/HTML Styling**: Apply theme variables to fundamental elements
4. **Test Theme Switching**: Verify immediate visual feedback

### Component Integration (Phase 2)
1. **Replace Hardcoded Colors**: Convert all components to use CSS variables
2. **Increase Specificity**: Ensure theme styles override template styles
3. **Update Existing Styles**: Modify current CSS files to use variables
4. **Verify Cascade**: Test variable inheritance throughout component tree

## Dependencies

### External Dependencies
- **HTML5UP Template**: Need to override existing light theme styles
- **Astro Framework**: Ensure compatibility with CSS variable system
- **CSS Custom Properties**: Browser support for CSS variables

### Internal Dependencies
- **Theme Configuration**: Proper variable definitions in themes.js
- **Component Architecture**: Consistent use of CSS variables across components
- **Build System**: Ensure CSS processing maintains variable references

## Notes

- **Priority**: Visual impact is immediate user concern
- **Approach**: Progressive enhancement - ensure base dark theme works first
- **Testing**: Verify each theme variant after core fix
- **Maintainability**: Keep CSS variable system clean and organized 