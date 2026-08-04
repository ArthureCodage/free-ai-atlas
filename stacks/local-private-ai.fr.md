# Stack IA locale privée

Objectif : discuter avec un modèle local et, au besoin, avec des documents privés sans envoyer l’inférence dans le cloud.

## Stack minimale utile

1. **Moteur :** Ollama.
2. **Modèle :** un petit modèle de la bibliothèque Ollama après lecture de sa licence.
3. **Interface :** le terminal Ollama, AnythingLLM ou Open WebUI.
4. **Documents :** le RAG d’AnythingLLM ou Open WebUI, avec embeddings locaux si la confidentialité est nécessaire.

## Périmètre de confidentialité

La stack est locale uniquement si chaque composant actif l’est. Vérifie :

- le fournisseur du modèle de clavardage;
- le fournisseur des embeddings;
- les services de parole et d’image;
- la recherche web et les outils d’agents;
- la télémétrie et les rapports de plantage;
- tout basculement automatique vers le cloud.

## Déploiement recommandé

1. Lance un petit modèle depuis le terminal.
2. Confirme l’API locale sur `127.0.0.1:11434`.
3. Ajoute une interface web liée à `127.0.0.1`.
4. Indexe d’abord des copies de documents non sensibles.
5. Vérifie les citations en comparant les réponses aux passages sources.
6. Sauvegarde les données de l’interface avant les mises à jour.

Configuration Docker prête à l’emploi : [Ollama + Open WebUI](../recipes/local-chat/README.md).
