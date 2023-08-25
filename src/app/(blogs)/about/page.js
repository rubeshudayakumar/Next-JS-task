import styles from './page.module.scss';

export default function About(){
    return (
        <div className={`${styles['container']}`}>
            <h2>
                Routing in Next JS
            </h2>
            <p>
            In Next.js, routing is achieved through the organization of your project's file structure. The pages directory at the root of your project is crucial for defining your routes. Each .js or .jsx file within the pages directory corresponds to a specific route in your application.

The filename of the file in the pages directory determines the URL path of the route. For example, if you have a file named about.js inside the pages directory, the corresponding route will be accessible at /about.

Next.js also supports dynamic routes, which allow you to handle varying parameter values in your URLs. To create a dynamic route, you can use square brackets [] in the filename. For instance, if you create a file named [slug].js, you can access routes like /product/123, where 123 can be a dynamic parameter.

To facilitate client-side navigation, Next.js provides a Link component from the next/link module. This component allows you to create navigation links that ensure efficient loading and prefetching of linked pages, enhancing the overall user experience.

In summary, routing in Next.js is based on the organization of your pages directory, where each file corresponds to a route. Dynamic routes can be created using square brackets in filenames. The Link component from the next/link module is used for creating optimized client-side navigation links.
            </p>
        </div>
    );
};