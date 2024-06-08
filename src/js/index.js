import { prompt } from "readline-sync";

const word = "hello";
const guessedLetters = [];

const printWord = (word, guessedLetters) => {
  console.log(
    word
      .split("")
      .map((char) => {
        if (char === " ") return "  ";
        if (
          guessedLetters.some(
            (letter) => letter.toLowerCase() === char.toLowerCase()
          )
        ) {
          return char;
        }
        return "_-";
      })
      .join(".")
  );
};

printWord("Hey there buddy", ["h", "t", "d"]);
