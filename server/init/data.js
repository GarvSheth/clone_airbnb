const Samplelistings = [
    {
      title: "Cozy Beachfront Condo",
      description: "A modern condo with stunning ocean views and direct beach access. Perfect for a relaxing getaway.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 120,
      location: "Miami Beach, FL",
      country: "USA"
    },
    {
      title: "Mountain Cabin Retreat",
      description: "Rustic cabin located in the heart of the Smoky Mountains. Ideal for nature lovers and hikers.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 150,
      location: "Gatlinburg, TN",
      country: "USA"
    },
    {
      title: "Modern Apartment in City Center",
      description: "Stylish apartment located near all major attractions, perfect for city explorers.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 100,
      location: "Berlin",
      country: "Germany"
    },
    {
      title: "Private Villa with Pool",
      description: "A luxury villa with a private pool and a spacious garden. Enjoy the comfort and privacy.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 300,
      location: "Mykonos",
      country: "Greece"
    },
    {
      title: "Charming Cottage by the Lake",
      description: "Escape to this peaceful lakeside cottage with stunning views and cozy interiors.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 95,
      location: "Lake Tahoe, CA",
      country: "USA"
    },
    {
      title: "Loft Apartment in Downtown",
      description: "Bright and airy loft apartment located in the heart of downtown. Great for nightlife and dining.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 130,
      location: "Toronto",
      country: "Canada"
    },
    {
      title: "Countryside Farmhouse",
      description: "Experience the charm of countryside living in this lovely farmhouse surrounded by fields.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 80,
      location: "Tuscany",
      country: "Italy"
    },
    {
      title: "Luxury Penthouse with Rooftop",
      description: "High-end penthouse with a private rooftop and panoramic city views.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 450,
      location: "New York, NY",
      country: "USA"
    },
    {
      title: "Historic Townhouse",
      description: "A beautiful townhouse in the historic district, with antique furnishings and modern amenities.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 110,
      location: "Edinburgh",
      country: "Scotland"
    },
    {
      title: "Secluded Desert Oasis",
      description: "Unique desert retreat with stunning sunset views and complete privacy.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 200,
      location: "Joshua Tree, CA",
      country: "USA"
    },
    {
      title: "Oceanfront Villa",
      description: "Experience luxury in this oceanfront villa with infinity pool and private beach access.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 500,
      location: "Malibu, CA",
      country: "USA"
    },
    {
      title: "Chic Downtown Studio",
      description: "A stylish studio apartment in the heart of downtown. Close to restaurants, shops, and attractions.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 85,
      location: "Sydney",
      country: "Australia"
    },
    {
      title: "Japanese Ryokan Experience",
      description: "Traditional Japanese ryokan with hot springs, offering an authentic cultural experience.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 160,
      location: "Kyoto",
      country: "Japan"
    },
    {
      title: "Luxury Safari Tent",
      description: "A glamping experience in a luxury safari tent, surrounded by beautiful landscapes.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 180,
      location: "Masai Mara",
      country: "Kenya"
    },
    {
      title: "Tiny House in the Forest",
      description: "Stay in this cozy tiny house, surrounded by nature, for a unique, off-the-grid experience.",
      image: {
        url: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        filename: "ListingImage",
      },
      price: 70,
      location: "Vancouver Island",
      country: "Canada"
    }
  ];
  
module.exports = { data: Samplelistings};
 