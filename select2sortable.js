(function($){
    $.fn.extend({
        select2Sortable: function(){
          $(this).each(function(){
            var select = $(this);
            select
              .select2()
              .next('.select2-container')
              .first('ul.select2-selection__rendered')
              .sortable({
                placeholder : 'ui-state-highlight',
                forcePlaceholderSize: true,
                items       : 'li:not(.select2-search__field)',
                tolerance   : 'pointer',
                containment: 'parent',
                stop: function() {
                    $($(this).find('.select2-selection__choice').get().reverse()).each(function() {
                        var id = $(this).data('data').id;
                        var option = select.find('option[value="' + id + '"]')[0];
                        select.prepend(option);
                    });
                    select.trigger('change');
                }
            });
          });
          return $(this);
        }
    });
}(jQuery));
