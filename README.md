# Test storybook pcv3

1. Clone `git@github.com:mandarini/nx.git`:

```bash
git clone git@github.com:mandarini/nx.git
```

2. Checkout branch `feat/storybook-nodes-require-config`

```bash
git checkout feat/storybook-nodes-require-config
```

3. Install dependencies:

```bash
pnpm i
```

4. Release local

```bash
pnpm local-registry
```

and in another window

```bash
pnpm nx-release 18.0.0-local.0 --local
```

5. Clone this repo:

```bash
git clone git@github.com:mandarini/sample-storybook-pcv3.git
```

6. Install dependencies:

```bash
yarn
```

Install will fail but ok.

7. Run storybook witx NX_DAEMON=false to see logs & errors:

```bash
NX_DAEMON=false nx build-storybook rapp1 --skipNxCache
```

and 

```bash
nx reset
```

to run again.
