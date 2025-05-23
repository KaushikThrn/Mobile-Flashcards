# Security Policy

This project has outdated dependencies that include known vulnerabilities such as:

- **minimist** < 1.2.8 (CVE-2020-7598, CVE-2021-44906)
- **lodash** < 4.17.21 (CVE-2018-3721, CVE-2021-23337, CVE-2020-8203)

The `package.json` now includes an `overrides` section to ensure these packages
use patched versions when installing with npm v8+.

To update dependencies and check for additional vulnerabilities run:

```bash
npm install
npm audit
```

Please keep dependencies up to date to mitigate security issues.
