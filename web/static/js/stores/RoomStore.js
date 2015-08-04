import Reflux from 'reflux';
import Actions from '../actions/RoomActions';

var RoomStore = Reflux.createStore({
  listenables: [Actions],

  init() {
    this.room = {};
    this.error = {};
  },

  getInitialState() {
    return this.returnData();
  },

  returnData() {
    return {
      room: this.room,
      error: this.error
    };
  },

  emitData() {
    this.trigger(this.returnData());
  },

  onSetRoom(room) {
    this.room = room;
    this.emitData();
  }
});

export default RoomStore;