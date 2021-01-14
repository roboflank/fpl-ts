---
id: examples
title: Examples
sidebar_label: Examples
slug: /examples
---

1. Fixtures

```js
import { Fixture } from 'fpl-ts'

const getFixtureDetails = async () => {
  const fixture = new Fixture(167)
  try {
    const details = await fixture.getDetails()
    console.log(details)
  } catch (err) {
    console.error(err)
  }
}
```
