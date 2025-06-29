import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const star = {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      };
      newStars.push(star);
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      const meteor = {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 20,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      };
      newMeteors.push(meteor);
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            position: "absolute",
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((star) => (
        <div
          key={meteors.id}
          className="meteor animate-meteor"
          style={{
            position: "absolute",
            width: `${star.size * 50}px`,
            height: `${star.size * 2}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: star.delay,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
