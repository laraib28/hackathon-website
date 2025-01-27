import { defineType } from "sanity";

export default defineType({
  name: 'placeholder',
  title: 'Placeholder',
  type: 'document',
  fields: [
    
    {
      name: 'category',
      title: 'Category',
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
    
   
  ],
});
