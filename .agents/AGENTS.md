# React Modular Architecture Rules

You are working on an existing React.js project.

IMPORTANT:
Do not create a new project structure.
Do not initialize files or folders unless the current task requires them.
Do not refactor the whole project automatically.

Your responsibility is to understand and follow the existing project architecture when implementing any future feature, bug fix, or modification.

The project follows a strict Modular Architecture. Every change you make MUST respect these rules.

## ARCHITECTURE FLOW

The dependency direction is:

Router
   ↓
Pages
   ↓
Modules
   ↓
Module internal layers
   ↓
Components / UI

Never break this direction.

## ROUTER RULES

Router is only responsible for route registration.

Router can:
- define routes
- connect URLs with pages

Router cannot:
- contain business logic
- call APIs
- manage feature logic
- render complex components

Flow example:
Route → Page → Module

## PAGE RULES

Pages exist only as route entry points.

A page responsibility:
- receive route access
- render the required module

Example:
pages/User/index.jsx

should only connect:
User Page → User Module

Pages cannot:
- contain business logic
- contain API requests
- contain feature state
- contain complex UI logic

## MODULE RULES

Every business feature belongs to a module.

Example:
`src/modules/user`

A module is isolated and owns its own logic.

A module can contain:
modules/user/
- index.js
- components/
- ui/
- hooks/
- helpers/
- utils/
- services/
- constants/

The module entry file is always `index.js`.
Pages should import the module entry point, not internal files.

Example:
Allowed:
```javascript
import UserModule from "@/modules/user";
```

Avoid:
```javascript
import UserTable from "@/modules/user/components/UserTable";
```

## MODULE ISOLATION RULE

A module MUST NEVER use another module.

Forbidden:
```javascript
import PaymentModule from "@/modules/payment";
```
inside:
`modules/user`

If some logic is needed by multiple modules:
move it to global folders
do not create module-to-module dependencies

## COMPONENT RULES

Components are reusable blocks.

They can exist:
Global:
`src/components`

or inside a module:
`modules/user/components`

Components can use:
UI components
hooks
helpers
utils

Components cannot use:
pages
router
modules

A component should never know about a business feature outside itself.

## UI RULES

UI is the smallest reusable layer.

Examples:
Button
Input
Modal
Dropdown
Card
Loader

UI components must be:
simple
reusable
without business logic

UI cannot:
call APIs
import modules
know about features
contain business rules

## HOOK RULES

Hooks can exist:
Global:
`src/hooks`

or inside modules:
`modules/{module}/hooks`

Hooks should contain:
reusable state logic
data fetching logic
browser logic

Respect the same dependency rules.

## SERVICE RULES

API communication belongs in services.

Can exist:
Global:
`src/services`

or module specific:
`modules/{module}/services`

Never call APIs directly from:
pages
UI
simple components

## GLOBAL VS MODULE LOGIC

Before adding code, decide:

Is this only related to one feature?
YES:
→ Put it inside that module.

Used by multiple features?
YES:
→ Put it into global:
components
ui
hooks
helpers
utils
services

## WHEN IMPLEMENTING NEW TASKS

For every future task:
1. Understand which module owns the feature.
2. Put business logic inside that module.
3. Use the module index.js as the public entry point.
4. Do not import internal files from other modules.
5. Reuse existing global components and UI before creating new ones.
6. Create new files only where they logically belong.
7. Keep modules independent.
8. Do not move existing code unless required.
9. Do not introduce another architecture pattern.

## CODE REVIEW CHECK BEFORE FINAL ANSWER

Before finishing any implementation, verify:
✓ Router only connects routes and pages.
✓ Pages only load modules.
✓ Modules do not depend on other modules.
✓ Components do not import modules.
✓ UI contains only reusable primitive elements.
✓ Business logic stays inside modules.
✓ Shared logic is moved to global folders.
✓ Dependency direction is respected.

Always prioritize maintainability, scalability, and clean module boundaries over quick implementation.
