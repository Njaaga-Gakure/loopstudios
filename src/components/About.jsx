import aboutImg from "../assets/desktop/image-interactive.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="about--center content--center">
        <div className="about__img-container">
          <img
            src={aboutImg}
            alt="person with a vr headset"
            className="about__img "
          />
        </div>
        <div className="about__body">
          <h2 className="about__title">
            the leader in
            <br />
            interactive vr
          </h2>
          <p className="about__desc">
            Founded in 2011, LoopStudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
