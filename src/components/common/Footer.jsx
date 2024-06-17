import React from 'react';
import { Code } from '@nextui-org/react';

const Footer = () => {
    const groupName = '<HelloWorld!/>';
    return (
        <footer className="dark bg-indigo-800 text-foreground rounded-lg">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-1 md:col-span-2">
                        <p className="text-sm">© 2024 EduQuest. Todos los derechos reservados.</p>
                    </div>
                    <div className='col-span-1'>
                        <p>Desarrollado por:</p>
                        <Code size='lg' color="success"> {groupName} </Code>
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <p className="text-sm">Política de privacidad</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;