Usage
=====

```
$(".rfkeyword")    
  .select2Sortable()
  .on("change", function(){
    // Callback after change/sort etc.
    // Do something with $(this).val();
  });  
```

Currently, no options are passed. only the ones from the data-* attribute of the tag.
