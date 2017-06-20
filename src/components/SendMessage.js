import React from 'react'
import { Input, Button, Container, Grid, Header } from 'semantic-ui-react'

const SendMessage = ({status, dispatchSetSending, dispatchSendMessage, dispatchNextStatus, dispatchResetStatus}) => {
  let text = ''
  const handleOnChange = (event) => {
    text = event.target.value
    if (text !== '' && status == 'unsent') {
      dispatchNextStatus()
    }
  }
  const handleClick = () => {
    console.log(status)
    dispatchSetSending()
    dispatchSendMessage(text)
  }
  const handleAnotherOne = () => {
    console.log(status)
    dispatchResetStatus()
  }
  
  if (status === 'sent') {
    return (
      <div style={styles.section}>
        <Container>
          <Header as='h2'>THANK YOU!</Header>
          SEE YOUR POST AT <a href="http://localhost:3000/liveboard">http://localhost.com:3000/liveboard </a>
          <br/>
          OR <a href="#" onClick={handleAnotherOne}>SEND ANOTHER ONE?</a> 
        </Container>
      </div>
    )
  } else {
    return (
      
      <div style={styles.section}>
          <Container>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column style={styles.inp} width={14}>
                  <Input size='huge' onChange={handleOnChange} fluid transparent placeholder='CAN YOU DESCRIBE YOUR FEELING?' />
                </Grid.Column>
                <Grid.Column width={1}>
                  <Button 
                    basic 
                    disabled={status === 'unsent' || status === 'sent'} 
                    loading={status === 'sending'} 
                    onClick={handleClick}
                  >
                    Submit
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
      </div>
    )
  }

}
export default SendMessage

const styles = {
  section: {
    // backgroundColor: '#2dcb89',
    textAligh: 'center',
    display: 'block',
    padding: '23em 2em'
  },
  inp: {
    border: '0px solid rgba(34,36,38,.15)',
    borderBottom: '1px solid rgba(34,36,38,.15)'
  }
}
