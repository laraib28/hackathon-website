import { defineType } from "sanity";

export default defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', // 'name' field se slug generate hoga
        maxLength: 96,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: "category",
      title: "Category",
      type: 'string',
      options: {
        list: [
          { title: 'T-Shirt', value: 'tshirt' },
          { title: 'Short', value: 'short' },
          { title: 'Jeans', value: 'jeans' },
          { title: 'Hoodie', value: 'hoodie' },
          { title: 'Shirt', value: 'shirt' },
        ],
      },
    },
    {
      name: "discountPercent",
      title: "Discount Percent",
      type: 'number',
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "new",
      type: 'boolean',
      title: "New",
    },
    {
      name: "colors",
      title: "Colors",
      type: 'array',
      of: [
        { type: 'string' }
      ]
    },
    {
      name: "sizes",
      title: "Sizes",
      type: 'array',
      of: [
        { type: 'string' }
      ]
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "NewArrival", value: "newArrival" },
          { title: "TopSelling", value: "topSelling" },
          { title: "ProductDetail", value: "productDetail" },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },
  ],
});
