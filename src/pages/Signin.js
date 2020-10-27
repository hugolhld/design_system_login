import React from 'react'
import Wrapper from '../components/Layout/Wrapper'
import Modal from '../components/Layout/Modal'
import Title from '../components/Text/Title'
import Input from '../components/Misc/Input'
import Button from '../components/Text/Button'
import Link from '../components/Text/Link'
import Logo from '../components/Misc/Logo'
import Alert from '../components/Text/AlertMessages'
// import EyeIconClosed from '../components/Misc/EyeIconClosed'
// import EyeIconOpen from '../components/Misc/EyeIconOpen'


function SignIn() {
    // function checkUserInDB () {
    //     const inputsText = document.querySelectorAll('.cdLhfg')

    //     for(const text of inputsText)
    //     {
    //         if(text.value.length < 4)
    //         {
    //             document.querySelector('.signin_error').style.display = 'block'
    //         }
    //         else if (text.value.length < 6)
    //         {
    //             document.querySelector('.signin_warning').style.display = 'block'
    //         }
    //         else
    //         {
    //             document.querySelector('.signin_success').style.display = 'block'
    //         }
    //     }
    // }

    return (
        <Wrapper>
            <Logo/>
            <Modal>
                <Title large>Connexion</Title>
                <Alert success className="signin_success">Success</Alert>
                <Alert warning className="signin_warning">Warning</Alert>
                <Alert error className="signin_error">Error</Alert>
                <Input type="text" placeholder="Adresse e-mail" />
                <Input type="password" placeholder="Mot de passe"/>
                <Link href="/forgot-password" large>Mot de passe oublié ?</Link>
                <Button hover /* onClick={checkUserInDB} */>Se connecter</Button>
            </Modal>
            <Modal>
                <Title large>Pas encore inscrit ?</Title>
                <Button hover href="/signup">Créer un compte</Button>
            </Modal>
        </Wrapper>
    )
}

export default SignIn