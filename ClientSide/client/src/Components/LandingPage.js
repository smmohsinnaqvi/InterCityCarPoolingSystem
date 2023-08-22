import { Carousel } from "antd";
import Image1 from "../Assests/1.jpg";
import Image2 from "../Assests/4.jpg";
import Image3 from "../Assests/3.jpg";
import "./modules.css";

export default function LandingPage(props) {
  return (
    <>
      <div>
        <Carousel autoplay>
          <div className="car_Image">
            <img src={Image1} />
            <p className="car_caption">Look for a nearby ride.</p>
          </div>
          <div className="car_Image">
            <img src={Image2} />
            <p className="car_caption">Offer rides.</p>
          </div>
          <div className="car_Image">
            <img src={Image3} />
            <p className="car_caption">Save yourself from city hassles.</p>
          </div>
        </Carousel>
      </div>
      <div className="lp">
        <h2>Welcome {props.name}</h2>
        <form className="mb-3 frm">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control si"
                list="s"
                placeholder="From City"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                className="form-control si"
                list="c"
                placeholder="To City"
                aria-label="Last name"
              />
            </div>
          </div>
          <button type="button" className="btn btn-secondary">
            Search Ride
          </button>
        </form>
        {/* <div className="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
  </div> */}
  
        <datalist id="s">
          <option value="Maharstra">Maharastra</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
        </datalist>
        <datalist id="c">
          <option value="Mumbai">Mumbai</option>
          <option value="Lucknow">Lucknow</option>
        </datalist>
      </div>
    </>
  );
}
LandingPage.defaultProps = {
  name: "New User",
};
