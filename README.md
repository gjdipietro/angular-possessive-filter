angular-possessive-filter
===========================

possessive filter for angular.js
Adds an apostrophe+s or apostrophe when needed to proper nouns.
produces something like: Greg's or Charles' 


## Usage

Include the file:
```html
<script src="/.../possessive.js"></script>
```

Import it to the angular applicaiton:
```javascript
angular.module('myApp', ['filter.possessive']);
```

Use it in the view:
```html
<span>{{ Greg | possessive}} thing </span>
<span>{{ Charles | possessive}} thing </span>
```