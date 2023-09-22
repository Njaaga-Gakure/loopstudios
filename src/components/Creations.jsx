import { creations } from "../utils";

const Creations = () => {
  return (
    <section className="creations">
      <div className="creations--center content--center">
        <h2 className="creations__title">our creations</h2>
        <div className="creations__grid">
          {creations.map(({ id, image, text }) => {
            const stringArray = text.split(" ");
            const textOne = stringArray[0];
            const textTwo = stringArray.slice(1).join(" ");
            return (
              <article key={id} className="creations__card">
                <img src={image} alt="creation" className="creation__img" />
                <h3 className="creation__text">
                  {textOne}
                  <br />
                  {textTwo}
                </h3>
              </article>
            );
          })}
        </div>
        <div className="btn-container">
          <button className="btn">see all</button>
        </div>
      </div>
    </section>
  );
};

export default Creations;
