React = require 'react'
Reflux  = require 'reflux'

Store = require '../stores/SocketConnectionStore'
Actions = Store.Actions

UserName = React.createClass
  mixins: [
    Reflux.connect(Store)
  ]

  onChangeUserName: (e) ->
    Actions.changeUserName(e.target.value)

  onSubmitUserName: (e) ->
    if e.which == 13
      Actions.validateUserName()
      Actions.submitUserName()

  onBlurUserName: ->
    Actions.validateUserName()
    Actions.submitUserName()

  render: ->
    <div className="form-group row">
      <label className="col-xs-12 start-xs">
        <span className="simple-row">Your Nickname:</span>
        <input className="simple-row full-width"
          type="text"
          placeholder="Enter Your Nickname"
          value={ @state.user.name }
          onChange={ @onChangeUserName }
          onKeyDown={ @onSubmitUserName }
          onBlur={ @onBlurUserName }
        />
        {if @state.user.errors.name
          <span>{ @state.user.errors.name }</span>
        }
      </label>
    </div>

module.exports = UserName
