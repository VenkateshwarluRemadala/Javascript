document.addEventListener('DOMContentLoaded', function(e) {
  <input
    $('[name="date"]')
        .datepicker({
            format: 'dd/mm/yyyy'
        })
        .on('changeDate', function(e) {
            // do somwthing here
        });
});/>
