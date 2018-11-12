interface IFakerMap {
  [key: string]: {
    [key: string]: string;
  };
}

export const fakerMethods: IFakerMap = {
  address: {
    "address zip code": "zipCode",
    "address city": "city",
    "address city prefix": "cityPrefix",
    "address city suffix": "citySuffix",
    "address street name": "streetName",
    "address street address": "streetAddress",
    "address street suffix": "streetSuffix",
    "address street prefix": "streetPrefix",
    "address secondary address": "secondaryAddress",
    "address county": "county",
    "address country": "country",
    "address country code": "countryCode",
    "address state": "state",
    "address state abbreviation": "stateAbbr",
    "address latitude": "latitude",
    "address longitude": "longitude"
  },

  commerce: {
    "commerce color": "color",
    "commerce department": "department",
    "commerce product name": "productName",
    "commerce price": "price",
    "commerce product adjective": "productAdjective",
    "commerce product material": "productMaterial",
    "commerce product": "product"
  },

  company: {
    "company suffixes": "suffixes",
    "company name": "companyName",
    "company suffix": "companySuffix",
    "catch phrase": "catchPhrase",
    "company business": "bs",
    "company catch phrase adjective": "catchPhraseAdjective",
    "company catch phrase descriptor": "catchPhraseDescriptor",
    "company catch phrase noun": "catchPhraseNoun",
    "company businesss adjective": "bsAdjective",
    "company businesss buzz": "bsBuzz",
    "company businesss noun": "bsNoun"
  },

  database: {
    "database column": "column",
    "database type": "type",
    "database collation": "collation",
    "database engine": "engine"
  },

  date: {
    "date past": "past",
    "date future": "future",
    "date between": "between",
    "date recent": "recent",
    "date soon": "soon",
    "date month": "month",
    "date weekday": "weekday"
  },

  finance: {
    "finance account": "account",
    "finance account name": "accountName",
    "finance mask": "mask",
    "finance amount": "amount",
    "finance transaction type": "transactionType",
    "finance currency code": "currencyCode",
    "finance currency name": "currencyName",
    "finance currency symbol": "currencySymbol",
    "finance bitcoin address": "bitcoinAddress",
    "finance ethereum address": "ethereumAddress",
    "finance iban": "iban",
    "finance bic": "bic"
  },

  hacker: {
    "hacker abbreviation": "abbreviation",
    "hacker adjective": "adjective",
    "hacker noun": "noun",
    "hacker verb": "verb",
    "hacker ingverb": "ingverb",
    "hacker phrase": "phrase"
  },

  image: {
    "image random": "image",
    "image avatar": "avatar",
    "image imageUrl": "imageUrl",
    "image abstract": "abstract",
    "image animals": "animals",
    "image business": "business",
    "image cats": "cats",
    "image city": "city",
    "image food": "food",
    "image nightlife": "nightlife",
    "image fashion": "fashion",
    "image people": "people",
    "image nature": "nature",
    "image sports": "sports",
    "image technics": "technics",
    "image transport": "transport",
    "image data uri": "dataUri"
  },

  internet: {
    "internet avatar": "avatar",
    "internet email": "email",
    "example email": "exampleEmail",
    "internet username": "userName",
    "internet protocol": "protocol",
    "internet url": "url",
    "internet domain name": "domainName",
    "internet domain suffix": "domainSuffix",
    "internet domain word": "domainWord",
    "internet ip": "ip",
    "internet ipv6": "ipv6",
    "internet user agent": "userAgent",
    "internet color": "color",
    "internet mac": "mac",
    "internet password": "password"
  },

  lorem: {
    "lorem word": "word",
    "lorem words": "words",
    "lorem sentence": "sentence",
    "lorem slug": "slug",
    "lorem sentences": "sentences",
    "lorem paragraph": "paragraph",
    "lorem paragraphs": "paragraphs",
    "lorem text": "text",
    "lorem lines": "lines"
  },

  name: {
    "first name": "firstName",
    "last name": "lastName",
    "full name": "findName",
    "job title": "jobTitle",
    "name prefix": "prefix",
    "name suffix": "suffix",
    "name title": "title",
    "name job descriptor": "jobDescriptor",
    "name job area": "jobArea",
    "name job type": "jobType"
  },

  phone: {
    "phone number": "phoneNumber",
    "phone number format": "phoneNumberFormat",
    "phone formats": "phoneFormats"
  },

  random: {
    "random number": "number",
    "random array element": "arrayElement",
    "random object element": "objectElement",
    "random uuid": "uuid",
    "random boolean": "boolean",
    "random word": "word",
    "random words": "words",
    "random image": "image",
    "random locale": "locale",
    "alpha numeric": "alphaNumeric",
    "hexa decimal": "hexaDecimal"
  },

  system: {
    "system file name": "fileName",
    "system common file name": "commonFileName",
    "system mime type": "mimeType",
    "system common file type": "commonFileType",
    "system common file ext": "commonFileExt",
    "system file type": "fileType",
    "system file ext": "fileExt",
    "system directory path": "directoryPath",
    "system file path": "filePath",
    "system semver": "semver"
  }
};
