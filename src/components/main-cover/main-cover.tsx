import womanReadsBook from "../../assets/images/woman-reads-book.jpg";
import fabricAndThreads from "../../assets/images/fabric-and-threads.jpg";
import womanWithtattoos from "../../assets/images/woman-with-tattoos.jpg";
import womanInPinkDress from "../../assets/images/woman-in-pink-dress.jpg";
import womanInOliweDress from "../../assets/images/woman-in-oliwe-dress.jpg";
import womanInWhiteDress from "../../assets/images/woman-in-white-dress.jpg";
import "./main-cover.scss";

function MainCover() {
  return (
    <div className="main-cover">
      <h1>
        Light as air, pure as <br />
        nature – linen perfection
      </h1>
      <p className="main-cover_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus,
        beatae dolores corrupti nostrum aperiam minima totam commodi dolor nobis
        quia, ducimus rem impedit animi quae! Voluptas rem sed iste!
      </p>
      <div className="main-cover_baner">
        <div className="main-cover_baner_img">
          <img
            src={womanReadsBook}
            alt="woman who reads a book in linen clothes"
          />
          <span>
            <h6>New collection</h6>
            <p>
              Collection updates twice a year, sophisticated, modern, and trendy
              clothing that your body will love.
            </p>
          </span>
        </div>
        <div className="main-cover_baner_img">
          <img src={fabricAndThreads} alt="fabric and threads" />
          <span>
            <h6>HOUSEWILDS</h6>
            <p>
              Unique for its use of natural, skin-friendly fabrics, while
              offering stylish clothing that combines comfort and elegance
            </p>
          </span>
        </div>
        <div className="main-cover_baner_img">
          <img
            src={womanWithtattoos}
            alt="woman with tattoos in linen clothes"
          />
          <span>
            <h6>EXCLUSIVE</h6>
            <p>From local designers</p>
          </span>
        </div>
      </div>
      <div className="main-cover_desription">
        <p>
          Elevate your fashion game with our expertly curated collection of
          <b> high-end </b> 
          <img src={womanInPinkDress} alt="woman in pink dress" />
          pieces. Discover the outfit 
          <img src={womanInWhiteDress} alt="woman in white dress" />
          <b>perfect</b> outfit for any occasion,
          from casual to 
          <img src={womanInOliweDress} alt="woman in oliwe dress" />
          <b>formal</b>.
        </p>
      </div>
    </div>
  );
}

export default MainCover;
