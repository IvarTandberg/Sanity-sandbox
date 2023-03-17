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
            name: 'category_image',
            type: 'image',
            title: 'Bilde'
        }

    ]
}