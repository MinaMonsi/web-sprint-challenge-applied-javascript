const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //Creating header div & class
  const headerDiv = document.createElement('div');
  headerDiv.createElement.add('header');
  //Creating span1 & class
  const span1 = document.createElement('span');
  span1.classList.add('date'); 
  //Creating h1
  const h1 = document.createElement('h1');
  //Creating span2 & class
  const span2 = document.createElement('span');
  span2.classList.add('temp');
  

  //Appending elements & adding text
  header-container.appendChild(headerDiv);
  headerDiv.appendChild(title);
  title.textContent = `${title}`;
  headerDiv.appendChild(span1)
  span1.textContent = `${date}`;
  headerDiv.appendChild(span2);
  span2.textContent = `${temp}`;

  return headerDiv

}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
