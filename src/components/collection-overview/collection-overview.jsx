import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview'
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import styled from 'styled-components';

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionOverview = ({collections}) => {
	return (
        <CollectionsOverviewContainer>
        	{collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
        </CollectionsOverviewContainer>
		)
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionOverview)