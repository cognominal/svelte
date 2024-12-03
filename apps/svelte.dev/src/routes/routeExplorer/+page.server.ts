import type { PageServerLoad } from './$types';



export const load = (async () => {
    return {
        toto: 'tata'
    };
}) satisfies PageServerLoad;