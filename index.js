const receiptData = [
  {
    name: "Tomato",
    domestic: true,
    price: 30.5,
    weight: 150,
    description:
      "The species originated in western South America and Central America. The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.",
  },
  {
    name: "Apple",
    domestic: true,
    price: 14.5,
    description:
      "Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.",
  },
  {
    name: "Banana",
    domestic: false,
    price: 22.0,
    description:
      "A banana is an elongated, edible fruit  botanically a berry  produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, distinguishing them from dessert bananas.",
  },
];

const receiptScanner = (receipt) => {
  let domestic = [];
  let imported = [];

  receipt.forEach((receipt) =>
    receipt.domestic ? domestic.push(receipt) : imported.push(receipt)
  );

  // SORTING
  const sortByName = (arr) => {
    return arr.sort((a, b) => (a.name > b.name ? 1 : -1));
  };
  domestic = sortByName(domestic);
  imported = sortByName(imported);

  // Calculate price
  const calculatePrice = (arr) => {
    return arr
      .reduce((acc, item) => {
        return acc + item.price;
      }, 0)
      .toFixed(1);
  };
  const domesticPrice = calculatePrice(domestic);
  const importedPrice = calculatePrice(imported);

  // Truncated description
  const truncatedDescription = (description) => {
    return description.length > 10
      ? description.slice(0, 10) + "..."
      : description;
  };

  const truncatedDomestic = truncatedDescription(domestic);
  const truncatedImported = truncatedDescription(imported);

  // Count Elements
  const countElements = (arr) => {
    return arr.length;
  };

  const domesticCount = countElements(domestic);
  const importedCount = countElements(imported);

  // get product details
  const getProductDetails = (product) => {
    const name = product.name;
    const price = `$${product.price.toFixed(1)}`;
    const description = truncatedDescription(product.description);
    const weight = product.weight ? product.weight + "g" : "N/A";

    return `... ${name}
        Price: ${price.replace(".", ",")}
        ${description}
        Weight: ${weight}
    `;
  };

  const output = `
    . Domestic
    ${domestic.map((product) => getProductDetails(product))}
    . Imported
    ${imported.map((product) => getProductDetails(product))}
    Domestic cost: $${domesticPrice.replace(".", ",")}
    Imported cost: $${importedPrice.replace(".", ",")}
    Domestic count: ${domesticCount}
    Imported count: ${importedCount}

  `.replaceAll(",...", "...");

  // RESULT IN CONSOLE
  console.log(output);

  return output;
};

receiptScanner(receiptData);
