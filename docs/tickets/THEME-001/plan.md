# Plan Template - THEME-001: Complete Dark Mode Implementation

## Purpose
This plan outlines the implementation needed to ensure all website elements properly use the dark theme system with correct CSS variable application and component styling.

## Instructions
- Use sequential thinking to break down the problem and solution.
- Be clear and actionable.
- Update the plan if objectives or requirements change.
- Reference this template from the ticket-workflow-rule.

---

## Objectives
- [ ] Ensure all website elements use CSS variables instead of hardcoded colors
- [ ] Fix theme initialization to apply dark themes by default
- [ ] Override any remaining HTML5UP light theme styles
- [ ] Ensure proper cascade of theme variables to all components
- [ ] Verify mobile and desktop theme consistency

## Requirements
- [ ] All components must respect CSS custom properties (--variables)
- [ ] Theme changes must apply immediately without page refresh
- [ ] Dark themes must be the primary visual experience
- [ ] Background, text, and accent colors must use theme variables
- [ ] Maintain accessibility standards (WCAG AA contrast ratios)
- [ ] Preserve existing functionality while fixing styling

## Implementation Plan

### 1. **Root Cause Analysis**
- Identify components still using hardcoded colors
- Check if CSS variables are properly defined at :root level
- Verify theme initialization timing and scope
- Analyze CSS specificity conflicts

### 2. **CSS Variable Foundation**
- Ensure all theme variables are properly applied to :root
- Create comprehensive base styles using variables
- Remove or override conflicting hardcoded styles

### 3. **Component-Level Fixes**
- Update each component to use CSS variables
- Remove inline styles and hardcoded colors
- Ensure proper inheritance of theme properties

### 4. **Global Overrides**
- Create strong CSS overrides for persistent light styles
- Target HTML5UP template styles specifically
- Apply dark-first design approach

### 5. **Theme Initialization**
- Fix theme application timing
- Ensure themes apply before content render
- Add fallback mechanisms

## Notes
- The current implementation has theme selectors working but themes not applying visually
- HTML5UP template styles may be overriding our custom theme variables
- Need to ensure CSS specificity is sufficient to override existing styles
- Mobile and desktop experiences should be consistent

---

## References
- Current theme system: `src/data/config/themes.js`
- Theme selector: `src/components/ui/ThemeSelector.astro`
- Navigation: `src/components/Navigation.astro`
- Layout: `src/layouts/Layout.astro`

## Overview
The problem is that while the theme selection system is implemented, the actual visual application of dark themes is not working. Users see a light interface despite selecting dark themes. The solution requires ensuring CSS variables properly cascade and override existing light theme styles.

## Current State Analysis
- [ ] Theme selector component exists and functions
- [ ] CSS variables are defined in theme files
- [ ] Theme initialization code exists in Layout.astro
- [ ] Visual output remains light regardless of theme selection
- [ ] Background colors, text colors not responding to theme changes

## Required Changes

### 1. **Global CSS Variable Application**

#### 1.1 Root-Level Variable Application
```css
:root {
  /* Ensure variables are applied at root level */
  /* Override any existing CSS custom properties */
}
```

#### 1.2 Body and HTML Styling
- [ ] Apply background using CSS variables
- [ ] Ensure text colors use variables
- [ ] Override HTML5UP default styles

### 2. **Component Style Updates**

#### 2.1 Remove Hardcoded Colors
```css
/* Replace hardcoded colors with variables */
background: var(--bg-primary);
color: var(--text-primary);
```

#### 2.2 Increase CSS Specificity
- [ ] Use !important where necessary for overrides
- [ ] Target specific HTML5UP classes
- [ ] Ensure theme variables take precedence

## Implementation Order

1. **Phase 1**: Fix CSS variable application and global overrides
2. **Phase 2**: Update component styles to use variables consistently
3. **Phase 3**: Enhance theme initialization and timing
4. **Phase 4**: Test all theme variations for consistency
5. **Phase 5**: Verify mobile and accessibility compliance

## Testing Strategy

1. **Visual Tests**: Verify each theme applies correctly across all sections
2. **Component Tests**: Check individual components respect theme variables
3. **Interaction Tests**: Ensure theme switching works immediately
4. **Accessibility Tests**: Verify contrast ratios meet WCAG standards
5. **Cross-Browser Tests**: Test theme application in different browsers

## Original Code Reference

Current theme variables are defined but not properly cascading to override the HTML5UP template's default light theme styles.

## Notes

- Priority should be on immediate visual impact
- Ensure backwards compatibility with existing functionality
- Consider performance impact of CSS overrides
- Maintain clean, maintainable code structure 