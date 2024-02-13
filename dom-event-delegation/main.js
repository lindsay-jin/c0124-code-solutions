'use strict';
const $taskList = document.querySelector('.task-list');
//identify the element that will be given an event listener, it has a class of 'task-list' in this case
//selecting it from the DOM and store it in a variable
if (!$taskList) throw new Error('The $taskList query failed.');
//throw an error the variable is null
function doTask(event) {
  const $eventTarget = event.target; // assigning the event.target to a variable (ALways!); event.target finds the element the event is triggered
  console.log('event.target:', $eventTarget);
  console.log('event.target.tagName:', $eventTarget.tagName);
  if ($eventTarget && $eventTarget.tagName === 'BUTTON') {
    //verifies that the element clicked was a button, BUTTON has to be all caps!
    const $closestElement = $eventTarget.closest('.task-list-item'); // find the closest li the button was clicked on
    console.log('closet element:', $closestElement);
    $closestElement?.remove(); //? means if $closetElement exists, then remove it
  }
}
$taskList.addEventListener('click', doTask);
