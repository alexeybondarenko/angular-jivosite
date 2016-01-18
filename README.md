# angular-jivosite

Angular Wrapper for Jivosite.com chat plugin

## How to use

1. Add *jivosite* module to your app module dependencies

```
angular.module('app', ['jivosite'])
```

2. Configure Jivosite ID

```
angular.module('app').config(function ($jivositeProvider) {
  
  $jivositeProvider.id = 'replace with your ID'
  
});
```

## Reporting issues and Contributing

Help us make Angular-Jivosite better! If you think you might have found a bug, or some other weirdness, start by making sure it hasn't already been reported. You can search through existing issues to see if someone's reported one similar to yours.

- Create issue
- Create pull request with issue solving
