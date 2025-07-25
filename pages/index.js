import {createClient} from 'contentful';
import RecipeCard from '../components/RecipeCard';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  
  const res = await client.getEntries({
    content_type: 'recipe',
  })
  return {
    props: {
      recipes: res.items,
    },
  }
}

export default function Recipes({recipes}) {
  console.log(recipes);
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe}/>
      ))}
      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: repeat(2fr, minmax(300px, 1fr));
          gap: 50px;
          padding: 10px;
      
        }
      `}</style>
    </div>
  )
}