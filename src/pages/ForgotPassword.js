import React from 'react'
import Wrapper from '../components/Layout/Wrapper'
import Modal from '../components/Layout/Modal'
import ComonText from '../components/Text/ComonText'
import Title from '../components/Text/Title'
import Input from '../components/Misc/Input'
import Button from '../components/Text/Button'
import Logo from '../components/Misc/Logo'

function ForgotPassword() {
    return (
        <Wrapper>
            <Logo></Logo>
            <Modal large>
                <Title large>Mot de passe oublié</Title>
                <ComonText>Veuillez entrer l’adresse mail avec laquelle vous avez créer votre compte. Un mail vous sera envoyer pour créer un nouveau mot de passe.</ComonText>
                <Input type="text" placeholder="Entrez votre adresse mail" large></Input>
                <Button href="#test" large>Envoyer</Button>
            </Modal>
        </Wrapper>
    )
}

export default ForgotPassword