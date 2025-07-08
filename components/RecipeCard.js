import Image from 'next/image';
export default function RecipeCard({ recipe }) {
    const {title, slug, CookingTime, thumbnail} = recipe.fields;
    return (
        <div className="card">
            <div className="featured">
                <Image src={'https:' + thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                />
            </div>
            <div className="content">
                <div className="info"> 
                    <h4>{title}</h4>
                    <p>Take approx {CookingTime} mins to make</p>

                </div>
                <div className="actions">
                    <a href={`/recipes/${slug}`} className="btn">Cook This</a>
                </div>

            </div>
        </div>
    )
}