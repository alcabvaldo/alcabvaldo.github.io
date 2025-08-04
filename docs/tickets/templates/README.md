# Ticket Tracking System

This directory contains structured ticket information for the Energy21.TimeSeries project.

## Structure

```
tickets/
├── README.md                    # This file
├── EBASE-XXXXX/                 # Ticket-specific directory
│   ├── plan.md                  # Implementation plan and approach
│   ├── context.md               # Current technical context and focus
│   ├── progress.md              # Chronological log of actions and decisions
│   ├── recap.md                 # Summary of outcome and key learnings
│   ├── rca.md                   # Root Cause Analysis (if applicable)
│   ├── references.md            # List of related resources
│   ├── data/                    # Extracted data files (not committed to git)
│   ├── logs/                    # Log files (not committed to git)
│   └── ...                      # Additional files as needed
└── templates/                   # Templates for new tickets
    ├── plan-template.md
    ├── context-template.md
    ├── progress-template.md
    ├── recap-template.md
    ├── rca-template.md
    ├── references-template.md
    └── status-template.md
```

## File Purposes, Allowed Content, and Checklists

### plan.md
- **Purpose:** Objectives, requirements, and implementation plan for the ticket.
- **Allowed:** Ticket goals, requirements, implementation steps, plan status, analysis relevant to planning, implementation order, testing strategy, notes/constraints.
- **Not Allowed:** Chronological progress logs, technical context not relevant to planning, final outcomes or recaps.
- **Checklist:**
  - [ ] Clear objectives/goals
  - [ ] Requirements listed
  - [ ] Implementation plan/steps
  - [ ] Status of plan
  - [ ] Testing strategy (if relevant)
  - [ ] Implementation order
- **Template:** See `templates/plan-template.md`

### context.md
- **Purpose:** Describes the current technical state, focus, key classes, outstanding issues, and next steps.
- **Allowed:** Technical context, current focus, key classes/components, outstanding issues/risks, next steps.
- **Not Allowed:** Progress logs, implementation plan, final outcomes.
- **Checklist:**
  - [ ] Technical context/background
  - [ ] Current focus
  - [ ] Key classes/components
  - [ ] Outstanding issues/risks
  - [ ] Next steps
- **Note:** This file is mutable and should be updated as the technical state changes.
- **Template:** See `templates/context-template.md`

### progress.md
- **Purpose:** Chronological log of actions, decisions, and milestones. Intended to be append-only, preserving a chronological record. Each entry is like a brief resume of a conversation or work session.
- **Allowed:** Dated progress entries (preferably appended at the bottom), actions taken, decisions made, milestones, links to commits, references, next steps.
- **Not Allowed:** Planning or requirements, technical context not related to the action, final recaps or summaries.
- **Checklist:**
  - [ ] Dated entries (ISO 8601 format)
  - [ ] Each entry has a summary
  - [ ] Details/links (optional)
  - [ ] Outcome/next steps (optional)
  - [ ] Entries preserve chronological order (append-only in intent)
- **Template:** See `templates/progress-template.md`

### recap.md
- **Purpose:** Summarizes the outcome, key learnings, and follow-up actions.
- **Allowed:** Summary of what was achieved, key outcomes, follow-up actions.
- **Not Allowed:** Ongoing progress, planning, technical context.
- **Checklist:**
  - [ ] Summary of outcome
  - [ ] Key learnings/outcomes
  - [ ] Follow-up actions
- **Template:** See `templates/recap-template.md`

### rca.md
- **Purpose:** Root Cause Analysis for defects/issues.
- **Allowed:** Problem description, root cause, resolution, prevention steps.
- **Not Allowed:** General progress or planning, technical context not related to the defect.
- **Checklist:**
  - [ ] Problem description
  - [ ] Root cause
  - [ ] Resolution
  - [ ] Prevention
- **Template:** See `templates/rca-template.md`

### references.md
- **Purpose:** List of related resources, files, or conversations.
- **Allowed:** Links to files, conversations, specs, or other resources, optional relevance/score.
- **Not Allowed:** Progress, planning, or context.
- **Checklist:**
  - [ ] All relevant links/resources listed
  - [ ] Optional: relevance/score
- **Template:** See `templates/references-template.md`

### data/
- **Purpose:** Folder for extracted data related to the ticket.
- **Allowed:** JIRA extracts, configuration files, sample data, test datasets, API responses.
- **Not Allowed:** Sensitive information, large binary files.
- **Rules:**
  - Populate from JIRA or as needed during ticket work
  - Do not commit to git
  - Document important files in references.md

### logs/
- **Purpose:** Folder for logs related to the ticket.
- **Allowed:** Error logs, trace logs, debug output, test execution logs, build logs.
- **Not Allowed:** Logs containing sensitive information.
- **Rules:**
  - Populate from JIRA or as needed during ticket work
  - Do not commit to git
  - Document important logs in references.md

## Rationale
- **Traceability:** Clear separation of planning, context, progress, and outcomes ensures a robust audit trail.
- **Clarity:** Each file has a focused purpose, making it easy to find relevant information.
- **Audit Trail:** progress.md is intended to grow over time, preserving a chronological record of work and decisions.
- **Flexibility:** context.md is mutable and should always reflect the current state.

## Integration Points
- **Specstory:** Automatically logs conversations
- **Agents:** Will scan this structure for context
- **Conversations:** User-specific conversation .specstory/history is stored in conversations/userid/ folder
- **JIRA:** Can reference ticket information for sync and integration, populate data/ and logs/ folders
- **Git:** All ticket files are committed for team visibility (except data/ and logs/ folders)
- **CI/CD:** Can reference plans for validation 

## Benefits
- Ensures a clear record of what was planned, what is currently true, and what has been done.
- Facilitates handovers, reviews, and audits.
- Improves team communication, onboarding, and project traceability.
- Supports context switches and knowledge transfer.
- Enables robust JIRA integration and automated documentation workflows. 