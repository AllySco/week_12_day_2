use ratings_site;

db.films.insert([
{
  title: "Lord of the Rings",
  actors: ["Orlando Bloom", "Liv Tyler", "Hugo Weaving"],
  genre: "fantasy",
  reviews: [{
    comment: "Excellent, especially the part where they are walking",
    rating: 99,
    author: "Big Davey"}]
  },
  {
    title: "Wolverine",
    actors: ["Patrick Stewart", "Hugh Jackman"],
    genre: "super-hero",
    reviews: [{
      comment: "multiple stabbings",
      rating: 10,
      author: "Wee Davey"
    }]
  }]
);