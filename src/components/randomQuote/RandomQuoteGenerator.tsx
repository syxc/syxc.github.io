import { useState, useEffect } from "react";
import "./quote.css";

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "真理惟一可靠的标准就是永远自相符合。",
    author: "欧文",
  },
  {
    text: "时间是一切财富中最宝贵的财富。",
    author: "德奥弗拉斯多",
  },
  {
    text: "这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯。",
    author: "歌德",
  },
  {
    text: "First solve the problem. Then write the code.",
    author: "John Johnson",
  },
  {
    text: "War is as much a punishment to a punisher as it is to the sufferer.",
    author: "Thomas Jefferson",
  },
];

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState<Quote>({ text: "", author: "" });

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <>
      {quote.text && quote.author && (
        <div className="quote-container">
          <p className="quote-text">{quote.text}</p>
          <p className="quote-author">- {quote.author}</p>
        </div>
      )}
    </>
  );
};

export default RandomQuoteGenerator;
