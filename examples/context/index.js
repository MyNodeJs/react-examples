import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    )
  }
}

Button.contextTypes = {
  color: React.PropTypes.string
}

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    )
  }
}

class MessageList extends React.Component {
  getChildContext() {
    return {color: 'purple'}
  }

  render() {
    const children = this.props.messages.map((message, index) =>
      <Message text={message.text} key={index} />
    )

    return <div>{children}</div>
  }
}

MessageList.childContextTypes = {
  color: React.PropTypes.string
}

ReactDOM.render(
  <MessageList 
    messages={[
      {text: 'text'}, {text: 'txt'}
    ]}
  />,
  document.getElementById('root')
)