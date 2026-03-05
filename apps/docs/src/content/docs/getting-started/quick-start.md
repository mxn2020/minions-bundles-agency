---
title: Quick Start
description: "Get up and running with Minions Bundle: Agency in minutes"
---

## TypeScript

```typescript
import { createClient } from '@minions-bundles-agency/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_bundles_agency import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
minions-bundles-agency info
```
