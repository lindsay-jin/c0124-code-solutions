'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
if (!$tabContainer) throw new Error('The $tabContainer query failed.');
//if (!$tab) throw new Error('The $tab query failed.'); //no need to throw an error here because a nodelist will return, if there's nothing, then it's empty
//if (!$view) throw new Error('The $view query failed.');
$tabContainer?.addEventListener('click', (event) => {
  if (!$tab) throw new Error('The $tab query failed.');
  const $eventTarget = event.target;
  if ($eventTarget.matches('.tab')) {
    for (const tab of $tab) {
      if (tab === $eventTarget) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    }
    // const $dataViewValue = $eventTarget.dataset.view;
    const $dataViewValue = $eventTarget.getAttribute('data-view');
    // console.log($dataViewValue)
    for (const view of $view) {
      if (view.getAttribute('data-view') === $dataViewValue) {
        view.className = 'view';
      } else {
        view.className = 'view hidden';
      }
    }
  }
});
