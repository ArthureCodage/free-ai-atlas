<p align="center">
  <img src="assets/free-ai-atlas.svg" alt="Free AI Atlas" width="760">
</p>

<p align="center">
  <strong>Trouver, apprendre, construire et exécuter l’IA gratuitement — avec des preuves.</strong>
</p>

<p align="center">
  <a href="README.md">English</a> ·
  <a href="CATALOG.fr.md">Catalogue complet</a> ·
  <a href="guides/start-here/README.fr.md">Commencer ici</a> ·
  <a href="CONTRIBUTING.md">Contribuer</a>
</p>

<p align="center">
  <img alt="Ressources" src="https://img.shields.io/badge/ressources-20-7c5cff">
  <img alt="Catégories" src="https://img.shields.io/badge/catégories-11-19c6a3">
  <img alt="Dernière vérification" src="https://img.shields.io/badge/dernière%20vérification-2026-08-04-f4b942">
  <img alt="Licence du contenu CC0" src="https://img.shields.io/badge/données%20%26%20contenu-CC0-0b7285">
  <img alt="Licence du code MIT" src="https://img.shields.io/badge/code-MIT-0b7285">
</p>

---

Free AI Atlas n’est pas une liste géante de liens. C’est un catalogue structuré et vérifiable de ressources IA utilisables sans payer, accompagné de parcours pratiques pour les débutants et les développeurs.

Chaque fiche explique ce que « gratuit » signifie réellement, les limites, la confidentialité, les comptes ou cartes requis, l’usage commercial, la preuve officielle et la date de vérification.

> [!IMPORTANT]
> Les offres gratuites changent rapidement. Un lien fonctionnel ne prouve pas qu’une offre est encore gratuite. Consulte la source officielle et la date `last_verified` avant d’en dépendre.

## Choisis ton parcours

| Je veux… | Point de départ |
|---|---|
| Essayer l’IA sans rien installer | [Stack de départ à 0 $](stacks/zero-cost-starter.fr.md) |
| Exécuter un assistant privé sur mon ordinateur | [Stack IA locale privée](stacks/local-private-ai.fr.md) |
| Installer l’IA locale sous Windows, macOS ou Linux | [Guides IA locale](guides/local-ai/) |
| Développer avec des API gratuites | [Stack API gratuites](guides/advanced/free-api-stack.md) |
| Générer des images localement | [Stack génération d’images](stacks/image-generation.md) |
| Discuter avec des documents privés | [Stack RAG et documents](stacks/rag-and-documents.md) |
| Apprendre depuis le début | [Parcours d’apprentissage](guides/start-here/README.fr.md) |
| Tout comparer | [Catalogue complet](CATALOG.fr.md) ou `site/index.html` |

## Signification des statuts

- **Open source :** le logiciel est disponible sous une licence source; les modèles et le matériel ont leurs propres contraintes.
- **Offre gratuite :** un service hébergé à 0 $ avec des limites définies par le fournisseur.
- **Freemium :** une version gratuite utile existe, mais plusieurs capacités sont payantes.
- **Calcul gratuit :** accès sans frais à du CPU, GPU ou TPU dont la disponibilité est limitée ou dynamique.

## Catalogue vérifié

| Ressource | Catégorie | Gratuité | Accès | Niveau | Vérifié |
|---|---|---|---|---|---|
| [Gemini Developer API](https://ai.google.dev/) | api | Offre gratuite | cloud | intermediate | 2026-08-04 |
| [GitHub Models](https://github.com/marketplace/models) | api | Offre gratuite | cloud | intermediate | 2026-08-04 |
| [Groq API Free Plan](https://console.groq.com/) | api | Offre gratuite | cloud | intermediate | 2026-08-04 |
| [OpenRouter Free Models](https://openrouter.ai/models?pricing=free) | api | Offre gratuite | cloud | intermediate | 2026-08-04 |
| [ChatGPT](https://chatgpt.com/) | assistant | Freemium | cloud | beginner | 2026-08-04 |
| [Claude](https://claude.ai/) | assistant | Freemium | cloud | beginner | 2026-08-04 |
| [Gemini](https://gemini.google.com/) | assistant | Freemium | cloud | beginner | 2026-08-04 |
| [Perplexity](https://www.perplexity.ai/) | assistant | Freemium | cloud | beginner | 2026-08-04 |
| [Google Colab](https://colab.research.google.com/) | compute | Calcul gratuit | cloud | beginner | 2026-08-04 |
| [Kaggle Notebooks](https://www.kaggle.com/code) | compute | Calcul gratuit | cloud | beginner | 2026-08-04 |
| [ComfyUI](https://github.com/comfy-org/ComfyUI) | image-generation | Open source | local | intermediate | 2026-08-04 |
| [vLLM](https://github.com/vllm-project/vllm) | inference-server | Open source | local | advanced | 2026-08-04 |
| [Open WebUI](https://github.com/open-webui/open-webui) | interface | Open source | hybrid | intermediate | 2026-08-04 |
| [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1) | learning | Offre gratuite | cloud | intermediate | 2026-08-04 |
| [Practical Deep Learning for Coders](https://course.fast.ai/) | learning | Offre gratuite | cloud | intermediate | 2026-08-04 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | local-runtime | Open source | local | advanced | 2026-08-04 |
| [Ollama](https://ollama.com/) | local-runtime | Open source | local | beginner | 2026-08-04 |
| [Hugging Face Model Hub](https://huggingface.co/models) | model-hub | Freemium | hybrid | intermediate | 2026-08-04 |
| [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm) | rag | Open source | hybrid | beginner | 2026-08-04 |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | speech | Open source | local | intermediate | 2026-08-04 |

## Modèle de confiance

Free AI Atlas sépare trois vérifications :

1. la validation du schéma détecte les fiches manquantes ou contradictoires;
2. l’audit quotidien détecte les liens officiels morts ou bloqués;
3. une revue des preuves confirme les prix, limites, licences et règles de confidentialité avant de modifier `last_verified`.

Les automatisations peuvent ouvrir des issues ou des pull requests avec leurs preuves. Elles ne modifient pas silencieusement les informations importantes. Consulte [VERIFICATION.md](VERIFICATION.md).

## Lancer le projet localement

```bash
python scripts/validate.py
python scripts/build.py --check
python -m unittest discover -s tests -v
python -m http.server 8000
```

Ouvre ensuite <http://localhost:8000/site/>.

## Contribuer

Une nouvelle ressource ou une limite modifiée? Utilise le formulaire d’issue correspondant. Pour une pull request, modifie un fichier dans `data/resources/`, exécute les vérifications et joins une source officielle.

Consulte [CONTRIBUTING.md](CONTRIBUTING.md), [GOVERNANCE.md](GOVERNANCE.md) et le [Code de conduite](CODE_OF_CONDUCT.md).

## Périmètre

Une ressource doit fournir une valeur durable et significative sans paiement. Les essais courts, le piratage, les clés divulguées, le contournement de quotas et les méthodes qui violent les licences sont exclus.

Free AI Atlas ne garantit ni la disponibilité ni la légalité d’un usage particulier. Vérifie toujours les conditions actuelles du fournisseur avant un usage commercial ou sensible.
