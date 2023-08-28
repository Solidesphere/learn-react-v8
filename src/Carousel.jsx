import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-image.dev-apis.com/pets/none.jpg"],
  };

  handelindexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handelindexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }

  //if you went to use hook in class compoment

  /* function carouselParnet ({animal}) {
    const [useBreedList] = useBreedList(animal);
    return <Carousel breedList={breedList} />
  } */

  // then retun it like this
  // return carouselParnet;
}

export default Carousel;
