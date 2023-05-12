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
    //loop through each tag => not performant as there are 3n loops => just solving first
    tags.forEach((val, ind) => {
      // so silly not the text, i need the html to convert
      const innerHtml = val.innerHTML;
      console.log(val.innerHTML);
      // trim the html and split into sentences
      const sentences = innerHtml.trim().split(/\r?\n/);
      console.log(sentences);
      // split sentences into words
      sentences.forEach((sentences, ind) => {
        // not ideal as there may be some cases where there are breaks taht we dont want split
        const words = sentences.trim().split(/\r?\n/);
        console.log(words);
      });
      // grab the inner text of the tag
      // const innerText = val.innerText;
      // console.log(innerText);
      // // split the text on spaces so we get words
      // const words = innerText.split(' ');
      // console.log(words);
      // // for each word check length, if greater than X split and add <strong> tag around
      // words.forEach((word, ind) => {
      //   console.log(word);
      //   if (word.length > 2) {
      //     console.log('word greater than 3', word);
      //   } else {
      //     word.replace(word, `<strong>${word}</strong>`);
      //   }
      // });
    });
    console.log(tags);
  } else {
    console.log('sorry there are no valid tags to convert');
    return;
  }
};

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
