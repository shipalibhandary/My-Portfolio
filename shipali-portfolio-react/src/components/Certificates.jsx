import { useState } from 'react';

function Certificates() {
  const certificates = [
    '/images/certi/privacy.png',
    '/images/certi/object.png',
    '/images/certi/email.png',
    '/images/certi/AI.png',
    '/images/certi/Time.png'
  ];

  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [direction, setDirection] = useState(1);
  const [transitionKey, setTransitionKey] = useState(0);

  const goToCertificate = (nextIndex) => {
    setPrevious(current);
    setDirection(nextIndex > current ? 1 : -1);
    setCurrent(nextIndex);
    setTransitionKey((prev) => prev + 1);
  };

  const nextCertificate = () => {
    const nextIndex = (current + 1) % certificates.length;
    goToCertificate(nextIndex);
  };

  const previousCertificate = () => {
    const prevIndex = (current - 1 + certificates.length) % certificates.length;
    goToCertificate(prevIndex);
  };

  return (
    <section id="certificates" className="certificate-section">

      <h2 className="certiheading">My Certificates</h2>

      <div className="certificate-slider">

        <button
          className="arrow left"
          onClick={previousCertificate}
          aria-label="Previous certificate"
        >
          &#10094;
        </button>

        <div className="certificate-container">
          <img
            key={`previous-${previous}-${transitionKey}`}
            src={certificates[previous]}
            alt={`Certificate ${previous + 1}`}
            className={`certificate-image previous ${previous === current ? 'hidden' : direction === 1 ? 'exit-left' : 'exit-right'}`}
          />

          <img
            key={`current-${current}-${transitionKey}`}
            src={certificates[current]}
            alt={`Certificate ${current + 1}`}
            className={`certificate-image current ${direction === 1 ? 'cover-right' : 'cover-left'}`}
          />
        </div>

        <button
          className="arrow right"
          onClick={nextCertificate}
          aria-label="Next certificate"
        >
          &#10095;
        </button>

      </div>
    </section>
  );
}

export default Certificates;