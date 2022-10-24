export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category name',
      type: 'string',
      validation:(Rule)=>Rule.required()
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
    },
  ],
}
