export default {
    name: 'products',
    type: 'document', //altid en innholdstype som synes i sanity//
    title: 'Produkter',
    fields: [
        {
            name: 'products_title',
            type: 'string',
            title: 'Produktnavn'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'products_title',
                slugify: input => input.toLowerCase()
                .replace((/\s+/g,/[^\w-]+/g), '-')
                .slice(0, 150)
                
            }
        },
        {
            name: 'products_price',
            type: 'number',
            title: 'Pris'
        },
        {
            name: 'products_quantity',
            type: 'number',
            title: 'Lagerstatus'
        },
        {
            name: 'products_image',
            type: 'image',
            title: 'Produktbilde'
        },
        {
            name: 'category',
            title: 'Kategori',
            type: 'reference',
            to: [{type: 'categories'}]
            
        }

    ]
}