import bike from "./images/bike.png";
import bike1 from "./images/bike-1.jpg";
import bike2 from "./images/bike-2.jpg";
import car from "./images/car.png";
import car1 from "./images/car-1.jpg";
import car2 from "./images/car-2.jpg";
import bus from "./images/bus.png";
import bus1 from "./images/bus-1.png";
import bus2 from "./images/bus-2.jpg";
import train from "./images/train.png";
import train1 from "./images/train-1.jpg";
import train2 from "./images/train-2.jpg";
import icon from "./images/icon/peopleicon.png";
const vehicles = [
  {
    id: 1,
    title: "Bike",
    imgUrl: bike,
    capacity: 1,
    sitType: "Single",
    price: 119,
    title2: "Royal Enfield",
    title3: "Bullet",
    imgUrl2: bike1,
    imgUrl3: bike2,
    price2: 150,
    price3: 125,
    strIcon: icon,
  },
  {
    id: 2,
    title: "Car",
    imgUrl: car,
    capacity: 4,
    sitType: "Triple",
    price: 149,
    title2: "LandCrus",
    title3: "BMW",
    imgUrl2: car1,
    imgUrl3: car2,
    price2: 550,
    price3: 750,
    strIcon: icon,
  },
  {
    id: 3,
    title: "Bus",
    imgUrl: bus,
    capacity: 2,
    sitType: "Multiple",
    price: 149,
    title2: "City Bus",
    title3: "Highway Bus",
    imgUrl2: bus1,
    imgUrl3: bus2,
    price2: 170,
    price3: 200,
    strIcon: icon,
  },
  {
    id: 4,
    title: "Metro Rail",
    imgUrl: train,
    capacity: 6,
    sitType: "cabin",
    price: 199,
    title2: "Bullet Train",
    title3: "Enter City",
    imgUrl2: train1,
    imgUrl3: train2,
    price2: 450,
    price3: 350,
    strIcon: icon,
  },
];

export default vehicles;
