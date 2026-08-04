# Zero-cost agent experimentation

Agents combine a model with tools and a loop. Even when model calls are free, tools can modify files, send messages, spend money, or expose data.

## Safe progression

1. Start with a read-only tool and a fixed maximum of three steps.
2. Log tool name, sanitized arguments, outcome, and model identity.
3. Require confirmation before writes, network publication, purchases, or deletion.
4. Use a temporary workspace and test accounts.
5. Add budgets for requests, tokens, elapsed time, and tool calls.
6. Test prompt injection from documents and web pages.

## Cost-aware architecture

- Local Ollama model for routine classification and drafts.
- Free hosted API only when the local model cannot perform the task.
- Deterministic code for validation, permissions, and policy checks.
- Human review before external side effects.

“Autonomous” should describe the loop, not the absence of ownership or controls.
