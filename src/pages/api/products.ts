// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Product = {
  // TODO define and use type here
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>,
) {
  res.status(200).json([
    {
      title:
        "Amica SHC 11542 W ws Standherd 50 cm Glaskeramik-Kochfeld A 9 Heizarten",
      id: "1000856619",
      price: 99.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/7a4ff9d6faea24947abfc1cbd825379a/product-image-hd/53DQI14OBULG5CC6OL0UHN32KO.jpg",
      categories: ["haushalt", "luxus"],
      isPromotion: true,
    },
    {
      title:
        "AMICA SHE 11545W ws Standherd 50 cm 4 Kochplatten A-20% 4 Heizarten",
      id: "1000856612",
      price: 119.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/d5eea218d3a6fd20dccace3ca2d2dcee/product-image-hd/QRQ7DJUV9LI9EQ0D3BQJUMQOEK.jpg",
      categories: ["haushalt", "standard"],
    },
    {
      title:
        "AMICA EHC 12716-2 E Ed Einbau-Herdset Sondermodell GH A Ceran 9 Heizarten",
      id: "1000884320",
      price: 59.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/6bbce55cfa59475b5346cb86fe41fac8/product-image-hd/1MJB65RPGTN4OA6BJ9UU47OK0O.jpg",
      categories: ["haushalt", "luxus"],
    },
    {
      title:
        "AMICA SHC 11642W ws Standherd 60 cm Ceran A-20% 9 Heizarten SHC11642W",
      id: "1000856633",
      price: 99.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/7444809260af54f0085986bf99671509/product-image-hd/QR2J7DR2A3IAS62H3MUJAF7NA8.jpg",
      categories: ["haushalt", "luxus"],
    },
    {
      title: "AMICA SHC 11543W ws Standherd 50 cm Ceran A-20% 9 Heizarten",
      id: "1000856626",
      price: 199.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/ad039526ff050ec43353df7cb9f34f6a/product-image-hd/CN8A91JP8AHBKVDFOHCJF63U5K.jpg",
      categories: ["haushalt", "luxus"],
    },
    {
      title: "Gorenje GEC 5C41 WG ws Standherd A 50cm 70 L 9Heizarten",
      id: "1001388138",
      price: 159.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/783fd5061fc92cd50d84a3ea10356b52/product-image-hd/TOB96ORFIAE7964I5UOTS6PVNG.jpg",
      categories: ["haushalt", "standard"],
    },
    {
      title: "Amica EHC12717-2W ws Einbau Herdset Ceran A 62L 9Heizarten",
      id: "1000950138",
      price: 69.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/f26631aac2d3253d4b3ab969079522e5/product-image-hd/CFHL37KCAKRNF451HMJ87URDOG.jpg",
      categories: ["haushalt", "luxus"],
    },
    {
      title: "Amica SHE 11546 W ws Standerd 50 cm A 4 Heizarten",
      id: "1000856648",
      price: 89.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/c6cee3a790308dbc8dea17cbd04c79fa/product-image-hd/VLU7VKB9BV3R1R51BLG073548G.jpg",
      categories: ["haushalt", "standard"],
    },
    {
      title:
        "Amica EHC 12708 E Ed Einbau-Herdset Sondermodell GH A Ceran 9Heizarten",
      id: "1000686457",
      price: 99.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/6d8dc0dfdfa0ba276418528bcfdf1a3c/product-image-hd/2VH1892D4PTGM30IL3P1P4JCL8.jpg",
      categories: ["haushalt", "standard"],
      isPromotion: true,
    },
    {
      title: "Amica KS 361 155 W Tischkühlschrank E 75/6L 84x48x49,5cm",
      id: "1001563615",
      price: 9.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/6a379bd24c36fdddfd2f032330307770/product-image-hd/78CM0E3VQ5C9CVSAM4H8S10ED4.jpg",
      categories: ["haushalt", "luxus"],
    },
    {
      title:
        "Siemens SN53HS12TE Ed EB-Gechirrspüler D 60cm int. 46dB 9L 6Prg Korb",
      id: "1001517916",
      price: 169.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/ad039526ff050ec43353df7cb9f34f6a/product-image-hd/CN8A91JP8AHBKVDFOHCJF63U5K.jpg",
      categories: ["haushalt", "luxus"],
      isPromotion: true,
    },
    {
      title: "Gorenje GE 5 A23 WH ws Standherd A 50cm 4Kochplatten 70L",
      id: "1001484586",
      price: 149.99,
      imgUrl:
        "https://oxomi.com/dasd/cv/attachments/f44b9a8c7a8852138da0f909443240cd/product-image-hd/7H4NPK1BRT7UM8L2HKE5H0IPL0.jpg",
      categories: ["haushalt", "standard"],
      isPromotion: true,
    },
  ]);
}
