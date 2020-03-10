import React from 'react';

const Landing = () => (
  <section className='landing'>
    <h1 className="hero-title" style={{color: 'gold'}}>Turn the Music Up!!!</h1>

    <section className="selling-points">
      <div className="point">
        <h2 className="point-title" style={{color: 'white'}}>Choose your Music!!!</h2>
        <p className="point-description">The World is Full of Music; Why should you Have to Listen to Music that Someone Else Chose?</p>
      </div>

      <div className="point">
        <h2 className="point-title" style={{color: 'white'}}>Unlimited Streaming, No Ads.</h2>
        <p className="point-description">No Arbitrary Limits. No Distractions.</p>
      </div>

      <div className="point">
      <h2 className="point-title" style={{color: 'white'}}>Mobile Enabled</h2>
      <p className="point-description">Listen to Your Music On The Go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;
