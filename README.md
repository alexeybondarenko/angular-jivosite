# angular-jivosite

Angular Wrapper for Jivosite.com

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

- Create issue
- Create pull request with issue solving
