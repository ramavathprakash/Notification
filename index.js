const Notification = props => {
  //  Write your code here.
  const {name, icon, className} = props
  return (
    <div className={className}>
      <img src={icon} className='imags' />
      <p className='message'> {name} </p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <div className='container'>
      <h1> Notifications </h1>

      <Notification
        name='Information Message'
        icon='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        className='information-message'
      />
      <Notification
        name='Success Message'
        icon='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        className='success-message'
      />
      <Notification
        name='Warning Message'
        icon='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        className='warning-message'
      />
      <Notification
        name='Error Message'
        icon='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        className='error-message'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
