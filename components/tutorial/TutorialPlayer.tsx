"use client";

const TutorialPlayer = () => {
  return (
    <div className="overflow-hidden bg-black shadow-lg rounded-2xl aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Tutorial Video"
        allowFullScreen
      />
    </div>
  );
};

export default TutorialPlayer;
