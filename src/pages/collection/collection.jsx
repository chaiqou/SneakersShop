import './collection.styles.scss'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selectors'



const CollectionPage = ({ collection }) => {
  console.log(collection)
  return (
    <div>
     WORKING
    </div>
  );
};

const mapStateToProps = (state,ownProps) => ({
     collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);