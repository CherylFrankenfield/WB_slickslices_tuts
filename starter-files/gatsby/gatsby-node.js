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

export async function createPages(params) {
  //Create pages dynamically 
  //1.pizzas
  await turnPizzasIntoPages(params); 
  //2.toppings
  //3.slicemasters
}