import bcrpt from 'bcryptjs';
import * as mongoose from 'mongoose';

const sellerObjectId = "622e7df0f0cf813e4fe3965e";

const data = {
  users: [
    {
      name: 'Praneetha',
      email: 'adminemail@gmail.com',
      password: bcrpt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo.webp',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'Sujal',
      email: 'sujal631@gmail.com',
      password: bcrpt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: false,
    },
  ],
  products: [
    {
      name: 'Nike Air Force 1 07',
      category: 'Shoes',
      image: '/images/p1.jpg',
      price: 100,
      countInStock: 34,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 2780,
      description:
        'The radiance lives on in the Nike Air Force 1 07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
    },
    {
      name: 'Nike Jordan Delta 2',
      category: 'Shoes',
      image: '/images/p2.png',
      price: 130,
      countInStock: 78,
      brand: 'Nike',
      rating: 4.3,
      numReviews: 298,
      description:
        'The Jordan Delta 2 offers a fresh, fearless take on the features you want: durability, comfort and an attitude that is Jordan to the core. We updated design lines and swapped out some components, but the idea is the same as the first Delta. The 2 still has that clashing combination of supportive and space age-like materials, with lots of different textures and heavy stitching to create a look that is both adventurous and iconic.',
    },
    {
      name: 'Nike Jordan 1 Centre Court',
      category: 'Shoes',
      image: '/images/p3.png',
      price: 130,
      countInStock: 55,
      brand: 'Nike',
      rating: 5,
      numReviews: 75,
      description:
        'The Air Jordan 1 Centre Court puts a sophisticated spin on 1 of sneaker historys most iconic designs. It is made with full-grain leather and suede in the upper, plus a double layer of cushioning under the heel. An exploded Wings logo stitched down along the back of the shoe adds distinction.',
    },
    {
      name: 'Nike Jordan Point Lane',
      category: 'Shoes',
      image: '/images/p4.png',
      price: 140,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.2,
      numReviews: 43,
      description:
        'The Jordan Point Lane mixes elements from game shoes MJ wore during 3 of his most memorable seasons. Named for his Chicago address, this mash-up pulls in bits and pieces from the AJ3, AJ6 and AJ11 to create a shoe that is inspired by greatness and uncompromising in its comfort.',
    },
    {
      name: 'Nike Air Jordan 1 Hi FlyEase',
      category: 'Shoes',
      image: '/images/p5.png',
      price: 140,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.7,
      numReviews: 106,
      description:
        'The Air Jordan 1 Hi FlyEase combines the coveted style of Michael Jordans first signature sneaker with a quick and easy 1-handed entry system. There are no laces to tie, just a wraparound zipper and 2 straps to secure a custom fit.',
    },
    {
      name: 'Nike Jordan Why Not? Zer0.5',
      category: 'Shoes',
      image: '/images/p6.png',
      price: 150,
      countInStock: 48,
      brand: 'Nike',
      rating: 4.8,
      numReviews: 471,
      description:
        'Russell Westbrook is fast. In 48 minutes of play, he is only in the air a few seconds at most, with the bulk of his time spent leaving opponents in the dust. These Jordans optimize Russ superpower of speed with updated cushioning, data-informed traction, and a full-foot fit system that will keep you contained and in control. They combine the rugged look of a trail-running shoe with the bold mashup of colors that Why Not? is known for.',
    },
    {
      name: 'Nike Jordan MA2',
      category: 'Shoes',
      image: '/images/p7.png',
      price: 125,
      countInStock: 82,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 241,
      description:
        'Shatter the sneaker status quo in the Jordan MA2. Made with a mix of suede, full-grain leather and a variety of textiles, it has got unconventional labels, technical micro-graphics and raw foam edges for a balance of new and classic. Easy to get on and off, it wears with just about anything.',
    },
    {
      name: 'Nike Sportswear Storm-FIT ADV',
      category: 'Jacket',
      image: '/images/p8.jpg',
      price: 250,
      countInStock: 47,
      brand: 'Nike',
      rating: 5,
      numReviews: 354,
      description:
        'Designed with downpours and windstorms in mind, the Nike Sportswear Storm-FIT ADV Hooded Jacket is a waterproof shell inspired by the iconic M65 Jacket. The Storm-FIT ADV fabric features taped seams to help keep you warm and dry. Quick-adjust details, secure storage and an articulated design make this easy-to-layer zip-up a lock in stormy weather. This product is made with 100% recycled polyester and recycled nylon fibers.',
    },
    {
      name: 'Nike Sportswear Therma-FIT Legacy',
      category: 'Jacket',
      image: '/images/p9.jpg',
      price: 120,
      countInStock: 24,
      brand: 'Nike',
      rating: 4.2,
      numReviews: 89,
      description:
        'The Nike Sportswear Therma-FIT Legacy Series Anorak is a stylish pullover that is designed for versatility. Its water-repellent shell fabric features a combination of Thermore insulation and fleece lining to keep you warm and dry in cold, wet weather. Ripstop panels reinforce high-wear areas to provide long-lasting durability and style. This product is made with at least 75% recycled polyester fibers.',
    },
    {
      name: 'Jordan Flight Heritage',
      category: 'Pants',
      image: '/images/p10.jpg',
      price: 150,
      countInStock: 88,
      brand: 'Nike',
      rating: 4.72,
      numReviews: 105,
      description:
        'Shift into casual mode with the Jordan Flight Heritage Cargo Pants. They are made from soft, lightweight woven fabric with neutral colors and camo prints to choose from. Cargo pockets and adjustable cuffs provide functionality.',
    },
    {
      name: 'Jordan AJ5',
      category: 'Shirt',
      image: '/images/p11.jpg',
      price: 35,
      countInStock: 102,
      brand: 'Nike',
      rating: 4.82,
      numReviews: 25,
      description:
        'The Jumpman is at the center of the Jordan AJ5 T-Shirt. It is made from soft, lightweight cotton with fresh graphics that hook to the brands heritage.',
    },
    {
      name: 'Nike Standard Issue',
      category: 'Hoodie',
      image: '/images/p12.png',
      price: 160,
      countInStock: 41,
      brand: 'Nike',
      rating: 5,
      numReviews: 88,
      description:
        'The Nike Standard Issue Pullover Hoodie is made to play in and wear all day. The soft fabric with embroidered paint splatter gives it the look and feel of a lifestyle hoodie. Sweat-wicking Dri-FIT technology and flexible panels make it wearable on the court.',
    },
    {
      name: 'Nike Sportswear Tech Fleece',
      category: 'Hoodie',
      image: '/images/p13.png',
      price: 220,
      countInStock: 29,
      brand: 'Nike',
      rating: 4.8,
      numReviews: 102,
      description:
        'A whole new way to Tech Fleece, the Nike Sportswear Tech Fleece Hoodie is now offered in a fabric made from recycled and organic materials. A full-zip, easy-fitting design helps you move and layer comfortably. This product is made with 100% sustainable materials, using a blend of recycled polyester, recycled cotton and organic cotton fibers. The blend is at least 10% recycled fibers or at least 10% organic cotton fibers.',
    },
    {
      name: 'Jordan Max Aura 3',
      category: 'Shoes',
      image: '/images/p14.png',
      price: 120,
      countInStock: 43,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 78,
      description:
        'Get your piece of Jordan history and heritage in the Jordan Max Aura 3. Inspired by the brands rich legacy of performance basketball, it has the energy of a game shoe and a design that puts a fresh spin on classic details.',
    },
    {
      name: 'Project Rock BSR 2 Training Shoes',
      category: 'Shoes',
      image: '/images/p15.jpg',
      price: 190,
      countInStock: 74,
      brand: 'Under Armour',
      rating: 4.5,
      numReviews: 116,
      description:
        'Project Rock training gear was built to help you find boundaries, then push right through them. Everything in this collection was personally approved by Dwayne Johnson, the hardest worker in the room. ANY room.',
    },
  ],
};
export default data;
