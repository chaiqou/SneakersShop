import './collection-overview.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview'
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({collections}) => {
	return (
        <div className='collections-overview'>
        	{collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
        </div>
		)
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionOverview)