# Translation Workflow

Free AI Atlas supports English and French. This document describes the translation process and how to contribute translations.

## Current status

- **English**: Primary language, maintained by maintainers
- **French**: Supported, maintained by community contributors

## Translation scope

### Required translations

- Resource descriptions (`description`, `best_for`, `limits`, `caveats`)
- Category names and descriptions
- Site navigation and UI elements
- Documentation and guides

### Optional translations

- Release notes
- Issue templates
- Contributing guides

## How to translate

### For resource files

1. Open a resource file in `data/resources/`
2. Find the `_fr` fields (e.g., `description_fr`, `best_for_fr`)
3. Translate the English content to French
4. Run validation:
   ```bash
   python scripts/validate.py
   python scripts/build.py
   ```
5. Commit and open a PR

### For documentation

1. Create a French version of the file (e.g., `README.fr.md`)
2. Follow the naming convention: `*.fr.md`
3. Link to the French version from the English version
4. Commit and open a PR

## Translation guidelines

### Tone and style

- Use formal French (`vous` form)
- Keep technical terms in English when commonly used (e.g., "API", "GPU", "LLM")
- Maintain consistent terminology across all translations
- Preserve the trust-first, evidence-based tone

### Technical accuracy

- Do not translate technical terms that have no French equivalent
- Keep code blocks, URLs, and command examples unchanged
- Preserve formatting and structure

### Quality assurance

- Have a native French speaker review translations
- Check for consistency with existing French content
- Verify that technical terms are used correctly

## Adding a new language

To add a new language:

1. Create a language-specific version of key files (e.g., `README.es.md`)
2. Add `_es` fields to resource files
3. Update the site to support the new language
4. Recruit native speakers to maintain the translation
5. Document the language in this file

## Translation priorities

1. **High**: Resource descriptions and limits
2. **Medium**: Documentation and guides
3. **Low**: Release notes and meta files

## Recognition

Translators are recognized in release notes and can become language maintainers for their contributed language.