import path from 'path';
//^^from Node

async function turnPizzasIntoPages({ graphql, actions }) {
  //1.get a template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  //2.query all pizzas - below since we're using Node API, it needs an await 
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  //console.log(data);
  //3.loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach(pizza => {
    //console.log('creating a page for ', pizza.name)
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

async function turnToppingsIntoPages({ graphql, actions }) {
  console.log(`turn toppings into pages!!`);
  const toppingsTemplate = path.resolve('./src/pages/pizzas.js');
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
        }
      }
    }
  `);
  data.toppings.nodes.forEach((topping) => {
    //console.log(`creating page for topping`, topping.name);
    actions.createPage({
      path: `topping/${topping.name}`,
      component: toppingsTemplate,
      context: {
        topping: topping.name,
        //REGEX
        //toppingRegex: `/${topping.name}/i`,
      },
    });
  });
}

export async function createPages(params) {
  //Create pages dynamically 
  //Promise.all - waits for all promises to resolve before finishing function
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params)
  ]);
   //1.pizzas
  //2.toppings
  //3.slicemasters
}