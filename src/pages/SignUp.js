import React from 'react'
import Wrapper from '../components/Layout/Wrapper'
import Modal from '../components/Layout/Modal'
import Title from '../components/Text/Title'
import Subtitle from '../components/Text/Subtitle'
import Input from '../components/Misc/Input'
import InputBirthday from '../components/Misc/InputBirthday'
import Button from '../components/Text/Button'
import Logo from '../components/Misc/Logo'
import Alert from '../components/Text/AlertMessages'

function SignUp() {

    function checkForm () {
        const inputsText = document.querySelectorAll('.cdLhfg')

        for(const text of inputsText)
        {
            if(text.value.length < 4)
            {
                document.querySelector('.register_error').style.display = 'block'
            }
            else if (text.value.length < 6)
            {
                document.querySelector('.register_warning').style.display = 'block'
            }
            else
            {
                document.querySelector('.register_success').style.display = 'block'
            }
        }
    }

    return (
        <Wrapper>
            <Logo/>
            <Modal>
                <Alert success className="register_success">Test123</Alert>
                <Alert warning className="register_warning">Test123</Alert>
                <Alert error className="register_error">Test123</Alert>
                <Title large>Créer un compte</Title>
                <Subtitle large first>Identifiants</Subtitle>
                <Input type="text" placeholder="Entrez votre prénom et nom" large></Input>
                <Input type="text" placeholder="Entrez votre adresse mail" large></Input>
                <Subtitle large>Date de naissance</Subtitle>
                <InputBirthday type="text" placeholder="Entrez votre adresse mail" large></InputBirthday>
                <Subtitle large>Mot de passe</Subtitle>
                <Input type="password" placeholder="Entrez votre mot de passe" large></Input>
                <Input type="password" placeholder="Confirmez votre mot de passe" large></Input>
                <Button hover  onClick={checkForm} large>S'inscrire</Button>
            </Modal>
        </Wrapper>
    )
}

export default SignUp
