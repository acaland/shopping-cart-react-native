import { connect } from 'react-redux';
import { loadItems } from '../actions/itemsActions';
import ShoppingList from '../components/ShoppingList';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  items: state.items
});

// const mapDispatchToProps = dispatch => ({
//     loadItems: () => dispatch(loadItems())
// });

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadItems
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
