# RAG and private documents stack

RAG retrieves relevant document fragments before the model answers. It can improve traceability, but it does not guarantee truth.

## Local-first components

- **Interface and orchestration:** AnythingLLM or Open WebUI.
- **Chat model:** Ollama.
- **Embeddings:** a local embedding model supported by the selected interface.
- **Vector storage:** the application's included local store for a first prototype.

## Acceptance test

Prepare five questions whose answers are present in the documents and three whose answers are absent. A useful system should:

- cite the correct passage for present answers;
- say when evidence is absent;
- avoid mixing similarly named people or projects;
- respect document access boundaries;
- remove deleted documents from retrieval after re-indexing.

Never treat a generated citation as proof until the referenced passage is opened and compared.
