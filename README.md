# Freewheel Test

## Areas to Improve

- I feel this application should have multiple pages like a traditional iOS menu. That would require a lot of styling and including something like React-Router
- State exists in multiple places. The cycle container has it's own state. This cpuld be moved to a MobX store or Redux
- No tests. Integration tests against the API, and shallow unit tests would help.
- Naming is not ideal. For example: I didn't want to call the services 'services', as that word causes ambiguity. Lines is not ideal either.
- Cycle hire has no pagination. I've added a scroll bar to make it less intimidating
