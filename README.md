# eh-anagram-challenge
node.js application for zurich developer test

## Development server
In the project directory: 
Run `npm install` to install all dependencies

Run `npm run start data/example1.txt` or `npm run start data/example2.txt` for running the application. The result should be in the console output. For large files you can specify an file for the output `npm run start data/example1.txt >> result.txt`

## Testing
Run `npm run test` to run all the tests
 
## About the resolution of the challenge

### Instructions 
• We expect you to write the anagram program without the use of any libraries.

• You are allowed to use any other libraries for task-running (e.g. CLI and testing)

• The files provided in the data folder contain sample data to help you test your program.

### Assumptions 
• Assume that the words in the input .txt file are ordered by length

• Assume that you are not expected to modify the input file itself, only output the 
anagrams to the console

• If you make any other assumptions, please write them down in your README when 
submitting your program

### General Strategy 
The strategy can be easily describe in a few steps.
1. Read the file.
2. Get the words.
3. Get prime number multiplication representation of each word.
4. Group by "the key".
5. Print the result.

Once the words are read. We need an object or something that map alphabet characters to prime numbers. In this case we use the first 26 prime numbers.
```
const characterToPrimeNumber = {
  'a': 2,
  'b': 3,
  'c': 5,
  'd': 7,
  'e': 11,
  'f': 13,
  'g': 17,
  'h': 19,
  'i': 23,
  'j': 29,
  'k': 31,
  'l': 37,
  'm': 41,
  'n': 43,
  'o': 47,
  'p': 53,
  'q': 59,
  'r': 61,
  's': 67,
  't': 71,
  'u': 73,
  'v': 79,
  'w': 83,
  'x': 89,
  'y': 97,
  'z': 101,
}
```
After that the characters of the word are ungroup and get one number.
https://github.com/ezehurt/eh-zurich-challenge/blob/07437f74b91a185bdcf7937c48879d0013d3b22f/src/utils/anagram.js#L38

For example for the word will be  w=83, o=47 r=61 d= 7 and then you multiply them 83 * 47 * 61 * 7 = **1665727** and that is the "key" of that word.
Then others words that have the same leter will have the same result.

Then this function build the array of object that will be the input for the groupby
https://github.com/ezehurt/eh-zurich-challenge/blob/07437f74b91a185bdcf7937c48879d0013d3b22f/src/utils/anagram.js#L62

So finally, you get something like this
```
    const words = [{ word: "word", key: 1665727 }, { word: "dwor", key: 1665727 }, { word: "ful", key: 35113 }, { word: "lfu", key: 35113 } ]
```

And the fuction groupWordsByPrimerNumbersMultiplication do the groupby by key. 


### Restrictions
The lenght of words, numbers of characters, lowercases and uppercase. 

For the lenght of word, If we let the characters fixed as 26. The max mumber that can be represented will be 101 ^ wordLenght. Taking in count that in javascript Number.MAX_VALUE has the value of 1.7976931348623157e+308 then, --> **101 ^ wordLenght < 1.7976931348623157e+308**

For the number of character: it is a limitation but is not so critical, because anagrams are with words and words are build by alpabhet characters, in our case we are just using 26.

Lowercase and uppercase: For this case, any check on upercase and lowercase are being done. But It can be easily done by replacing this line https://github.com/ezehurt/eh-zurich-challenge/blob/07437f74b91a185bdcf7937c48879d0013d3b22f/src/utils/anagram.js#L39
by this one
```
 const primeNumbersArray = charactersArray.map(character => characterToPrimeNumber[character.toLowerCase()]);
``` 
That should not modify the word but the calculation will be the same.



### Tools
#### Visual Studio Code
##### Extensions
 - Eslint
 - SonarLint
 - GitBlame

### Source (some documentations that I read to tackle the challenge)

https://math.stackexchange.com/questions/1386915/an-efficient-way-to-find-anagrams
https://hackernoon.com/an-algorithm-for-finding-anagrams-2fe7655de85b
https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/

