import React from 'react'
import Wrapper from '../components/Layout/Wrapper'
import Modal from '../components/Layout/Modal'
import Title from '../components/Text/Title'
import Input from '../components/Misc/Input'
import Button from '../components/Text/Button'
import Link from '../components/Text/Link'
import Logo from '../components/Misc/Logo'
// import EyeIconClosed from '../components/Misc/EyeIconClosed'
// import EyeIconOpen from '../components/Misc/EyeIconOpen'


function SignIn() {
    return (
        <Wrapper>
            <Logo></Logo>
            <Modal large>
                <Title large>Connexion</Title>
                <Input type="text" placeholder="Adresse e-mail" >
                    {/* <EyeIconOpen/> */}
                </Input>
                <Input type="password" placeholder="Mot de passe"></Input>
                <Link href="/forgot-password" large>Mot de passe oublié ?</Link>
                <Button hover onClick="alert('your logged')">Se connecter</Button>
            </Modal>
            <Modal large>
                <Title large>Pas encore inscrit ?</Title>
                <Button hover href="/signup">Créer un compte</Button>
            </Modal>
        </Wrapper>
    )
}

export default SignIn