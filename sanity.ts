import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const sanityConfig = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // "production"
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // "pv8y60vp"
    apiVersion: '2021-10-21',
    useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(sanityConfig);

export const urlFor = (source: any) =>
    createImageUrlBuilder(sanityClient).image(source);
