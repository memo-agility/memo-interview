import { db } from "@/database";

export const migrate = async () => {
  await db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        imageUrl TEXT NOT NULL,
        price DECIMAL NOT NULL,
        category TEXT NOT NULL
      );
    `,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("products table created successfully.");
      }
    );
  });
};

const getRandomPrice = (): number => {
  return parseFloat((Math.random() * (1000 - 10) + 10).toFixed(2));
};

const getRandomDescription = (): string => {
  const descriptions = [
    "This is a great product that you will love.",
    "High quality and reliable, perfect for your needs.",
    "An excellent choice for anyone looking for the best.",
    "Affordable and well-made, this product is a must-have.",
    "Crafted with care and precision, you won't be disappointed.",
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const getImageUrl = (id: number): string => {
  return `https://picsum.photos/seed/${id}/300`;
};

const getRandomNameAndCategory = () => {
  const adjectives = [
    "Cool",
    "Amazing",
    "Fancy",
    "Modern",
    "Classic",
    "Smart",
    "Stylish",
    "hellish",
    "helpful",
    "helpless",
    "hesitant",
    "hideous",
    "high",
    "highfalutin",
    "high-pitched",
    "hilarious",
    "hissing",
    "historical",
    "holistic",
    "hollow",
    "homeless",
    "homely",
    "honorable",
    "horrible",
    "hospitable",
    "hot",
    "huge",
    "hulking",
    "humdrum",
    "humorous",
    "hungry",
    "hurried",
    "hurt",
    "hushed",
    "husky",
    "hypnotic",
    "hysterical",
    "icky",
    "icy",
    "idiotic",
    "ignorant",
    "ill",
    "illegal",
    "ill-fated",
    "ill-informed",
    "illustrious",
    "imaginary",
    "immense",
    "imminent",
    "impartial",
    "imperfect",
    "impolite",
    "important",
    "imported",
    "impossible",
    "incandescent",
    "incompetent",
    "inconclusive",
    "industrious",
    "incredible",
    "inexpensive",
    "infamous",
    "innate",
    "innocent",
    "inquisitive",
    "insidious",
    "instinctive",
    "intelligent",
    "interesting",
    "internal",
    "invincible",
    "irate",
    "irritating",
    "itchy",
    "jaded",
    "jagged",
    "jazzy",
    "jealous",
    "jittery",
    "jobless",
    "jolly",
    "joyous",
    "judicious",
    "juicy",
    "jumbled",
    "jumpy",
    "juvenile",
    "keen",
    "kind",
    "kindhearted",
    "kindly",
    "knotty",
    "knowing",
    "knowledgeable",
    "known",
    "labored",
    "lackadaisical",
    "lacking",
    "lame",
    "lamentable",
    "languid",
    "large",
    "last",
    "late",
    "laughable",
    "lavish",
    "lazy",
    "lean",
    "learned",
    "left",
    "legal",
    "lethal",
    "level",
    "lewd",
    "light",
    "like",
  ];
  const nouns = [
    "Phone",
    "Laptop",
    "Table",
    "Chair",
    "Watch",
    "Headphones",
    "Camera",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return [`${adjective} ${noun}`, noun];
};

export const seed = async () => {
  for (let i = 1; i <= 300; i++) {
    const [name, category] = getRandomNameAndCategory();
    const description = getRandomDescription();
    const imageUrl = getImageUrl(i);
    const price = getRandomPrice();

    await db.run(
      `
          INSERT INTO products (name, description, imageUrl, price, category)
          VALUES (?, ?, ?, ?, ?)
        `,
      [name, description, imageUrl, price, category]
    );
  }
  await db.close();

  console.log("Inserted 300 products into the database.");
};

migrate().then(() => {
  seed().catch((err) => {
    console.log(err);
  });
});
