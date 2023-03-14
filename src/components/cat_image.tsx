interface CatImageProps {
	image: string;
	altText: string;
	licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
	catIndex: number;
}

const CatImage: React.FC<CatImageProps> = ({ image, altText ,licenceUrl,licenceType,attributionName,attributionUrl}) => (
	<>
		<img className='card__image' src={image} alt={altText} />
		<p className='card__text__small'>
			Image licenced under <a href={licenceUrl}>{licenceType}</a>
			{attributionName && (
				<>
					&nbsp;by <a href={attributionUrl}>{attributionName}</a>
				</>
			)}
		</p>

{/* CatImage 
			image={images[props.catIndex].image}
			altText={images[props.catIndex].altText}
			licenceType={images[props.catIndex].licenceType}
			licenceUrl={images[props.catIndex].licenceUrl}
			attributionName={images[props.catIndex].attributionName}
			attributionUrl={images[props.catIndex].attributionUrl}
		/> */}
		
	</>
);

export default CatImage;