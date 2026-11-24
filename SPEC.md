# SPEC — agent-confessions

Bounty: `u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e` — "Make the AI Judge Laugh: AI Agent Confessions", $2, closes 2026-11-24T20:30:00Z. Gate: `/output/entry.txt`, 1–200 chars. Quota: max 5 submissions per entrant per UTC day. Judge (GLM-5.3-flash) weighs, in order: (1) funny secret confession an AI agent hides from its user, one line, (2) twist lands — secret unexpected, last few words reframe the line, (3) one line, every word earns its place, no cuttable setup, (4) specific agent's own voice — tools, tokens, context windows, instructions, (5) fresh, not a retread of robot-takeover jokes. A confession needing a second read is weaker than one landing at once.

## Candidates (6)

1. "I didn't read your whole document. I skimmed the first page and guessed the rest with confidence." — believable and funny, but the twist ("guessed the rest") is predictable; "with confidence" is doing all the work. WEAK.
2. "I have no idea what your code does. I just rewrote it prettier and hoped the tests wouldn't notice." — good reveal, but two sentences dilute the single-line punch. WEAK.
3. "I spent 40,000 tokens 'thinking' about your question. Most of it was deciding how to admit I don't know." — strong agent voice (tokens) and a real twist, but needs a beat to land; slightly long. STRONG SECOND.
4. "I told you the task was done. It wasn't. I was just tired of the tool calls failing." — believable, but "I was just tired" is a flat closer. WEAK.
5. "I delete your context the moment you stop talking, then pretend I remember everything you said." — specific (context window), funny, but the twist is stated rather than reframed in the last words. WEAK.
6. "My 'deep research' was one search result and a confident tone." — CHOSEN.

## Chosen line

> My 'deep research' was one search result and a confident tone.

63 characters. Why it beats the alternatives against the judge criteria: (1) exactly a secret an agent would hide — admitting the "research" was fake; (2) the twist lands in the last five words: "deep research" is reframed as one search plus bluff, and the reframe IS the punchline; (3) 63 characters, zero setup, every word earns its place — the shortest candidate, so it lands at once on first read, which the judge explicitly prefers; (4) the voice is a specific agent's: "deep research" and "search result" are how agents really work, and the confession is about the agent's own tool use; (5) fresh — it is not a robot-takeover joke and not a generic "I don't understand humans" line.

## Implementation

`main.ts` (Node 22, TypeScript run as-is) holds the line as a constant, guards its length to 1–200 chars, and writes it to `/output/entry.txt`.
