import { useState } from 'react';
import { Button } from "@/components/ui/button"

const catFacts = [
  "Cats have over 20 muscles that control their ears.",
  "A group of cats is called a clowder.",
  "Cats spend 70% of their lives sleeping.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have a third eyelid called the 'haw' to protect their eyes."
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
      <img
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        alt="Cute cat"
        className="mx-auto object-cover w-full max-w-md h-64 rounded-lg shadow-md mb-6"
      />
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Did You Know?</h2>
        <p className="text-lg mb-4">{catFacts[factIndex]}</p>
        <Button onClick={nextFact} className="w-full">Next Fact</Button>
      </div>
    </div>
  );
};

export default Index;
