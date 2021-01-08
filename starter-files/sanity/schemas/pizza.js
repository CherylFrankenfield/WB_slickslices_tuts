import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  //computer name
    name: 'pizza',
    //visible title
    title: 'Pizzas',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Pizza Name',
            type: 'string',
            description: 'Name of the pizza',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the pizza in cents',
            validation: Rule => Rule.min(1000),
            //ToDo: Add custom input component
        },
        {
            name: 'toppings',
            title: 'Toppings',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'topping' }] }],
        },          
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            //sanity syntax
            topping0: 'toppings.0.name',
            topping1: 'toppings.1.name',
            topping2: 'toppings.2.name',
            topping3: 'toppings.3.name',
        },
        prepare: ({ title, media, ...toppings }) => {
            //^^ use REST PARAM in a function to destruct the things you want. 
            //Use … to capture the rest of the argument into an object 
            //1.filter undefined toppings out
            const tops = Object.values(toppings).filter(Boolean)
            //2.return preview object for pizza
            return {
                title, 
                media, 
                subtitle: tops.join(', '),
            };
        }

    }
};