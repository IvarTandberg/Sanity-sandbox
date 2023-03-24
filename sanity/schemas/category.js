export default {
    name: 'categories',
    type: 'document', //altid en innholdstype som synes i sanity//
    title: 'Kategorier',
    fields: [
        {
            name: 'category_title',
            type: 'string',
            title: 'Kategorinavn'
        },
        {
            name: 'catagory_slug',
            type: 'slug',
            title: 'URL-tittle',
            options: {
                source: 'category_title',
                slugify: input => input.toLowerCase()
                    .replace((/\s+/g,/[^\w-]+/g), '-')
                    .slice(0, 150)
            }
        },
        {
            name: 'category_image',
            type: 'image',
            title: 'Bilde'
        }

    ]
}