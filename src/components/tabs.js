const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  //Creating elements 
  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');
  const tab1 = document.createElement('div');
  tab1.document.classList.add('tab');
  const tab2 = document.createElement('tab');
  tab2.classList.add('tab');
  const tab3 = document.createElement('div');
  tab3.classList.add('tab');

  //Appending elements & adding text
  tabs-container.appendChild(topicsDiv);
  topicsDiv.appendChild(tab1)
  tab1.textContent = 'javascript';
  topicsDiv.appendChild(tab2);
  tab2.textContent = 'bootstrap';
  topicsDiv.appendChild(tab3);
  tabs3.textContent = 'technology';

  return topicsDiv
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
