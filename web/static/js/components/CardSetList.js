import React from 'react';
import _ from 'lodash';

import CardSetDescription from '../components/CardSetDescription';
import NewRoomActions from '../actions/NewRoomActions';

var CardSetList = React.createClass({
  propTypes: {
    cardSets: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  shouldComponentUpdate: function() {
    return true;
  },

  pickCardSet: function(event) {
    var cardSetId = parseInt(event.target.value);
    var pickedCardSet = _.find(this.props.cardSets, { id: cardSetId });
    NewRoomActions.pickCardSet(pickedCardSet);
  },

  render: function () {
    var pickedCardSet = _.find(this.props.cardSets, { picked: true });
    if(pickedCardSet === undefined) { pickedCardSet = {}; }
    return (
      <div className="pp-CardSetList form-group">
        <label className="">
          <span className="">Session Value Scale:</span>
          <select className="" value={pickedCardSet.id} onChange={this.pickCardSet}>
            {
              this.props.cardSets.map(function(cardSet, index) {
                return(<option value={cardSet.id} key={index}>{cardSet.name}</option>);
              })
            }
          </select>
        </label>
        <CardSetDescription description={pickedCardSet.values} />
      </div>
    );
  }
});

export default CardSetList;
