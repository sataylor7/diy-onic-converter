/**
 * Implement your converter function here.
 */
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  console.log('Performing bionic reading conversion on:', container);

  /* Etc. etc. etc. your code etc. */
  // solve the problem, then refactor to make it better/more performant
  /**
   * The function should then convert the content of every p element within the elements matched by that selector so that every word is formatted in a style that is similar to bionic reading.
   */
  // check for existence of p in this case in the container *ideally this shouldnt be hard coded
  // will return a node list will need to convert to an array => this may have actually been updated so that nodelist has forEach
  const tags = [].slice.call(container.querySelectorAll('p'));
  // if the length is greater than 0 then perform the actions
  if (tags.length > 0) {
    console.log('continue working ');
    //loop through each tag
    tags.forEach((val, ind) => {
      //grab the inner text of the tag
      const innerText = val.innerText;
      console.log(innerText);
    });
  } else {
    console.log('sorry there are no valid tags to convert');
    return;
  }
};

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
