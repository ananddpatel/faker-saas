interface IFakerMap {
  [key: string]: {
    [key: string]: string;
  };
}

export const fakerMethods: IFakerMap = {
  address: {
    "zip code": "zipCode",
    city: "city",
    "city prefix": "cityPrefix",
    "city suffix": "citySuffix",
    "street name": "streetName",
    "street address": "streetAddress",
    "street suffix": "streetSuffix",
    "street prefix": "streetPrefix",
    "secondary address": "secondaryAddress",
    county: "county",
    country: "country",
    "country code": "countryCode",
    state: "state",
    "state abbreviation": "stateAbbr",
    latitude: "latitude",
    longitude: "longitude"
  },

  commerce: {
    color: "color",
    department: "department",
    "product name": "productName",
    price: "price",
    "product adjective": "productAdjective",
    "product material": "productMaterial",
    product: "product"
  },

  company: {
    suffixes: "suffixes",
    "company name": "companyName",
    "company suffix": "companySuffix",
    "catch phrase": "catchPhrase",
    bs: "bs",
    "catch phrase adjective": "catchPhraseAdjective",
    "catch phrase descriptor": "catchPhraseDescriptor",
    "catch phrase noun": "catchPhraseNoun",
    "businesss adjective": "bsAdjective",
    "businesss buzz": "bsBuzz",
    "businesss noun": "bsNoun"
  },

  database: {
    column: "column",
    type: "type",
    collation: "collation",
    engine: "engine"
  },

  date: {
    past: "past",
    future: "future",
    between: "between",
    recent: "recent",
    soon: "soon",
    month: "month",
    weekday: "weekday"
  },

  finance: {
    account: "account",
    "account name": "accountName",
    mask: "mask",
    amount: "amount",
    "transaction type": "transactionType",
    "currency code": "currencyCode",
    "currency name": "currencyName",
    "currency symbol": "currencySymbol",
    "bitcoin address": "bitcoinAddress",
    "ethereum address": "ethereumAddress",
    iban: "iban",
    bic: "bic"
  },

  hacker: {
    abbreviation: "abbreviation",
    adjective: "adjective",
    noun: "noun",
    verb: "verb",
    ingverb: "ingverb",
    phrase: "phrase"
  },

  image: {
    image: "image",
    avatar: "avatar",
    imageUrl: "imageUrl",
    abstract: "abstract",
    animals: "animals",
    business: "business",
    cats: "cats",
    city: "city",
    food: "food",
    nightlife: "nightlife",
    fashion: "fashion",
    people: "people",
    nature: "nature",
    sports: "sports",
    technics: "technics",
    transport: "transport",
    "data uri": "dataUri"
  },

  internet: {
    avatar: "avatar",
    email: "email",
    "example email": "exampleEmail",
    "user name": "userName",
    protocol: "protocol",
    url: "url",
    "domain name": "domainName",
    "domain suffix": "domainSuffix",
    "domain word": "domainWord",
    ip: "ip",
    ipv6: "ipv6",
    "user agent": "userAgent",
    color: "color",
    mac: "mac",
    password: "password"
  },

  lorem: {
    word: "word",
    words: "words",
    sentence: "sentence",
    slug: "slug",
    sentences: "sentences",
    paragraph: "paragraph",
    paragraphs: "paragraphs",
    text: "text",
    lines: "lines"
  },

  name: {
    "first name": "firstName",
    "last name": "lastName",
    "find name": "findName",
    "job title": "jobTitle",
    prefix: "prefix",
    suffix: "suffix",
    title: "title",
    "job descriptor": "jobDescriptor",
    "job area": "jobArea",
    "job type": "jobType"
  },

  phone: {
    "phone number": "phoneNumber",
    "phone number format": "phoneNumberFormat",
    "phone formats": "phoneFormats"
  },

  random: {
    number: "number",
    "array element": "arrayElement",
    "object element": "objectElement",
    uuid: "uuid",
    boolean: "boolean",
    word: "word",
    words: "words",
    image: "image",
    locale: "locale",
    "alpha numeric": "alphaNumeric",
    "hexa decimal": "hexaDecimal"
  },

  system: {
    "file name": "fileName",
    "common file name": "commonFileName",
    "mime type": "mimeType",
    "common file type": "commonFileType",
    "common file ext": "commonFileExt",
    "file type": "fileType",
    "file ext": "fileExt",
    "directory path": "directoryPath",
    "file path": "filePath",
    semver: "semver"
  }
};
