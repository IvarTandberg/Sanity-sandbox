import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'ihn2c94i',
    dataset: 'production',
    useCdm: true,
    apiVersion: '2021-10-21'

})