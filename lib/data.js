// Demo car data for Modern Auto website
// This data will be used as fallback when API is not available

export const demoCars = [
  {
    id: 1,
    brand: "Honda Accord",
    model: "Model S",
    year: 2024,
    price: 12999,
    type: "Sedan",
    image: "/Image4.jpeg",
    description: "Electric luxury sedan with autopilot capabilities"
  },
  {
    id: 2,
    brand: "Jaquar",
    model: "XE",
    year: 2019,
    price: 10999,
    type: "SUV",
    image: "/Image2.jpeg",
    description: "Premium mid-size luxury SUV"
  },
  {
    id: 3,
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 45000,
    type: "Sedan",
    image: "/Image3.jpeg",
    description: "Sophisticated compact executive car"
  },
  {
    id: 4,
    brand: "Audi",
    model: "Q7",
    year: 2024,
    price: 72800,
    type: "SUV",
    image: "/Image4.jpeg",
    description: "Spacious luxury SUV with advanced technology"
  },
  {
    id: 5,
    brand: "Hyundai Sonata",
    model: "911",
    year: 2016,
    price: 7500,
    type: "Sports",
    image: "/Image5.jpeg",
    description: "Iconic sports car with exceptional performance"
  },
  {
    id: 6,
    brand: "Range Rover",
    model: "Sport",
    year: 2023,
    price: 83000,
    type: "SUV",
    image: "/Image1.jpeg",
    description: "Luxurious off-road capable SUV"
  },
  {
    id: 7,
    brand: "Toyota",
    model: "Camry",
    year: 2024,
    price: 35000,
    type: "Sedan",
    image: "/Image2.jpeg",
    description: "Reliable mid-size sedan with excellent fuel economy"
  },
  {
    id: 8,
    brand: "Honda",
    model: "Accord",
    year: 2023,
    price: 40000,
    type: "Sedan",
    image: "/Image3.jpeg",
    description: "Well-equipped sedan with advanced safety features"
  },
  {
    id: 9,
    brand: "Tesla",
    model: "Model X",
    year: 2024,
    price: 95000,
    type: "SUV",
    image: "/Image4.jpeg",
    description: "Electric SUV with falcon-wing doors"
  },
  {
    id: 10,
    brand: "BMW",
    model: "3 Series",
    year: 2023,
    price: 55000,
    type: "Sedan",
    image: "/Image5.jpeg",
    description: "Premium compact sports sedan"
  },
  {
    id: 11,
    brand: "Mercedes-Benz",
    model: "GLE",
    year: 2024,
    price: 80000,
    type: "SUV",
    image: "/Image1.jpeg",
    description: "Luxury midsize SUV with cutting-edge technology"
  },
  {
    id: 12,
    brand: "Audi",
    model: "A4",
    year: 2023,
    price: 48000,
    type: "Sedan",
    image: "/Image2.jpeg",
    description: "Elegant compact executive sedan"
  },
  {
    id: 13,
    brand: "Porsche",
    model: "Cayenne",
    year: 2024,
    price: 105000,
    type: "SUV",
    image: "/Image3.jpeg",
    description: "High-performance luxury SUV"
  },
  {
    id: 14,
    brand: "Ford",
    model: "F-150",
    year: 2024,
    price: 55000,
    type: "Pickup",
    image: "/Image4.jpeg",
    description: "America's best-selling pickup truck"
  },
  {
    id: 15,
    brand: "Chevrolet",
    model: "Silverado",
    year: 2023,
    price: 52000,
    type: "Pickup",
    image: "/Image5.jpeg",
    description: "Powerful full-size pickup with towing capacity"
  },
  {
    id: 16,
    brand: "Honda",
    model: "Civic",
    year: 2024,
    price: 32000,
    type: "Sedan",
    image: "/Image1.jpeg",
    description: "Compact sedan with sporty handling"
  },
  {
    id: 17,
    brand: "Toyota",
    model: "RAV4",
    year: 2024,
    price: 42000,
    type: "SUV",
    image: "/Image2.jpeg",
    description: "Versatile compact SUV with hybrid option"
  },
  {
    id: 18,
    brand: "BMW",
    model: "M4",
    year: 2024,
    price: 98000,
    type: "Sports",
    image: "/Image3.jpeg",
    description: "High-performance sports coupe"
  }
];

// Get featured cars (first 6)
export const getFeaturedCars = () => {
  return demoCars.slice(0, 3);
};

// Get all cars
export const getAllCars = () => {
  return demoCars;
};
