import newCollectionFirst from "../../assets/images/new-collection1.jpg";
import newCollectionSecond from "../../assets/images/new-collection2.jpg";
import newCollectionThird from "../../assets/images/new-collection3.jpg";
import "./new-collection.scss";

function NewCollection() {
  return (
    <div className="newCollection">
      <h1>New Collection Of Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
        reprehenderit numquam optio adipisci doloribus quibusdam architecto.
        Iste doloribus error, nemo minus dolore porro eum possimus fuga quidem
        doloremque eius! Illum?
      </p>
      <ul className="newCollection_list">
        <li>
          <img src={newCollectionFirst} alt="new collection first model" />
          <section className="newCollection_section">
            <h5>Draped Satin Gown</h5>
            <p>by Housewilds Housewilds</p>
          </section>
        </li>
        <li>
          <img src={newCollectionSecond} alt="new collection second model" />
          <span>
            <h6>HOUSEWILDS</h6>
            <p>From local designers</p>
          </span>
        </li>
        <li>
          <img src={newCollectionThird} alt="new collection third model" />
          <section className="newCollection_section">
            <h5>Ruffled Silk Blouse</h5>
            <p>by Housewilds Housewilds</p>
          </section>
        </li>
      </ul>
    </div>
  );
}

export default NewCollection;
