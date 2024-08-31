import React, { useEffect, useState } from 'react';

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return <span>{count}</span>;
};

const Stats = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {/* Years of Experience */}
          <div className="p-4">
            <h3 className="text-5xl font-bold">
              <Counter start={0} end={10} duration={2000} />+
            </h3>
            <p className="mt-2 text-lg">Years of Experience</p>
          </div>
          {/* Happy Clients */}
          <div className="p-4">
            <h3 className="text-5xl font-bold">
              <Counter start={0} end={250} duration={2000} />+
            </h3>
            <p className="mt-2 text-lg">Happy Clients</p>
          </div>
          {/* Projects Done */}
          <div className="p-4">
            <h3 className="text-5xl font-bold">
              <Counter start={0} end={150} duration={2000} />+
            </h3>
            <p className="mt-2 text-lg">Projects Done</p>
          </div>
          {/* Awards Won */}
          <div className="p-4">
            <h3 className="text-5xl font-bold">
              <Counter start={0} end={30} duration={2000} />+
            </h3>
            <p className="mt-2 text-lg">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
