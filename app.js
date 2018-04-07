(function () {
  const WIN_LIFECYCLE_URL = 'https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet';
  const GS_STATS_URL = 'http://gs.statcounter.com/';
  
  new Vue({
    el: 'main',
    data: {
      WIN_LIFECYCLE_URL,
      GS_STATS_URL,
    },
    computed: {
      isDead: function () {
        return !moment().isBefore('2023-01-10');
      }
    }
  });
})();
