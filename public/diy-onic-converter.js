/**
 * Implement your converter function here.
 */
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  console.log('Performing bionic reading conversion on:', container);

  /* Etc. etc. etc. your code etc. */
  /**
   * The function should then convert the content of every p element within the elements matched by that selector so that every word is formatted in a style that is similar to bionic reading.
   */
  // check for existence of p in this case in the container *ideally this shouldnt be hard coded
  // will return a node list will need to convert to an array
  const tags = container.querySelectorAll('p');
  // if the length is greater than 0 then perform the actions
  console.log(tags.length);
};

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
