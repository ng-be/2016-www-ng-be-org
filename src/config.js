System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime"
    ]
  },
  paths: {
    "github:*": "_jspm_packages/github/*",
    "npm:*": "_jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.5",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.5",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.18",
    "babel": "npm:babel-core@5.5.8",
    "babel-runtime": "npm:babel-runtime@5.5.8",
    "bootstrap-less": "github:distros/bootstrap-less@3.3.9",
    "core-js": "npm:core-js@0.9.18",
    "github:angular-ui/ui-router@0.2.18": {
      "angular": "github:angular/bower-angular@1.5.5"
    },
    "github:angular/bower-angular-mocks@1.5.5": {
      "angular": "github:angular/bower-angular@1.5.5"
    },
    "github:distros/bootstrap-less@3.3.9": {
      "jquery": "github:components/jquery@2.2.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.5.8": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});
