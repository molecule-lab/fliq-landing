export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        {/* Decorative Circles */}
        <circle cx="1200" cy="200" r="300" fill="#FF4B6E" fillOpacity="0.1" />
        <circle cx="200" cy="600" r="250" fill="#FF6B6B" fillOpacity="0.1" />
        <circle cx="800" cy="400" r="200" fill="#FFB6B6" fillOpacity="0.1" />

        {/* Heart Shapes */}
        <path
          d="M400 300 C400 300, 450 250, 500 300 C550 350, 500 400, 500 400 C500 400, 450 350, 400 300"
          fill="#FF4B6E"
          fillOpacity="0.2"
        />
        <path
          d="M800 500 C800 500, 850 450, 900 500 C950 550, 900 600, 900 600 C900 600, 850 550, 800 500"
          fill="#FF6B6B"
          fillOpacity="0.2"
        />

        {/* Connection Lines */}
        <path
          d="M300 200 C400 100, 600 300, 700 200"
          stroke="#FF4B6E"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeOpacity="0.3"
        />
        <path
          d="M500 400 C600 300, 800 500, 900 400"
          stroke="#FF6B6B"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeOpacity="0.3"
        />

        {/* Dots Pattern */}
        <g>
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1440}
              cy={Math.random() * 800}
              r="2"
              fill="#FF4B6E"
              fillOpacity="0.3"
            />
          ))}
        </g>

        {/* Wave Pattern */}
        <path
          d="M0 600 Q200 550, 400 600 Q600 650, 800 600 Q1000 550, 1200 600 Q1400 650, 1440 600"
          stroke="#FFB6B6"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.2"
        />
      </svg>
    </div>
  );
}
