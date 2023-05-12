/**
 * Implement your converter function here.
 */
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  console.log('Performing bionic reading conversion on:', container);

  // I looked this up, as I dont remember all the nuances of regex
  const htmlRegex = /<[a-z]+\d?(\s+[\w-]+=("[^"]*"|'[^']*'))*\s*\/?>|&#?\w+;/i;

  /* Etc. etc. etc. your code etc. */
  // solve the problem, then refactor to make it better/more performant
  /**
   * The function should then convert the content of every p element within the elements matched by that selector so that every word is formatted in a style that is similar to bionic reading.
   */
  // check for existence of p in this case in the container *ideally this shouldnt be hard coded
  // will return a node list will need to convert to an array => this may have actually been updated so that nodelist has forEach
  const tags = [].slice.call(container.querySelectorAll('p'));
  //const tags = container.querySelectorAll('p');
  // if the length is greater than 0 then perform the actions
  if (tags.length > 0) {
    console.log('continue working ');
    //loop through each tag => not performant as there are 3n loops => just solving first
    const updatedTags = tags.map((val, ind) => {
      // so silly not the text, i need the html to convert
      const innerHtml = val.innerHTML;
      console.log(val.innerHTML);
      // trim the html and split into sentences
      const sentences = innerHtml.trim().split(/\r?\n/);
      console.log(sentences);
      // split sentences into words
      const updatedSentences = sentences.map((sentence, ind) => {
        // not ideal as there may be some cases where there are breaks taht we dont want split
        const words = sentence.trim().split(/\r?\n/);
        console.log(words);
        return words.map((word, ind) => {
          console.log('this is the word inside the words array');
          // check if the word as a tag, or space => we have to split the space so that we can bold each sub word
          if (htmlRegex.test(word)) {
            console.log('this word contains html tag');
          } else if (word.indexOf(' ') >= 0) {
            console.log('this "word" has a space');
          } else {
            console.log('word length', word.length);
            // the tag we need to get the inner html of the tag
            if (word.length > 3) {
              console.log('word greater than 3', word);
            } else {
              word = word.replace(word, `<strong>${word}</strong>`);
            }
          }
          console.log('this is the word inside the words array updated', word);
          return word;
        });
      });
      console.log('sentences', updatedSentences);
      return updatedSentences;
    });
    console.log(tags);
  } else {
    console.log('sorry there are no valid tags to convert');
    return;
  }
};

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
