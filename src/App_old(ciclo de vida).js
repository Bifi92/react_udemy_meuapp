import React, { Component } from 'react';

class App extends Component {
    constructor(props){ //primeiro
        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }

    componentDidMount(){ //segundo (roda quando 'e montado na tela)
        setInterval(
            ()=>{
                this.setState(
                    {hora: new Date().toLocaleTimeString()}
                ) 
            }
            , 1000
        )
    }

    componentDidUpdate(){ //sempre que o componente 'e atualizado
        console.log('Atualizou');
    }
    

    render() { 
        return (
            <div>
                <h1>{this.state.hora}</h1>
            </div>
        );
    }
}
 
export default App;